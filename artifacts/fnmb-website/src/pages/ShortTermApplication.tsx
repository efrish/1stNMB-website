import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Clock, Banknote, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
  loanAmount: z.coerce.number().min(1, "Enter the requested loan amount"),
  propertyType: z.string().min(1, "Required"),
  timeline: z.string().min(1, "Required"),
});

export default function ShortTermApplication() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactConsent, setContactConsent] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "",
      loanAmount: 0, propertyType: "fix-flip", timeline: "immediately"
    }
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    if (!contactConsent) {
      toast({
        title: "Consent Required",
        description: "Please authorize us to contact you about this loan request.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "short-term",
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          data: {
            "Loan Amount": `$${Number(values.loanAmount).toLocaleString()}`,
            "Project Type": values.propertyType,
            "Closing Timeline": values.timeline,
            "Contact Consent": "Yes — phone, text, and email about this request",
          },
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setIsSubmitted(true);
      toast({ title: "Loan Request Received", description: "A loan specialist will review your request and respond within 24–48 hours." });
      window.scrollTo(0, 0);
    } catch {
      toast({ title: "Submission Error", description: "Please try again or call us at (818) 371-1665.", variant: "destructive" });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg text-center"
        >
          <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-primary mb-4">Request Priority Queued</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Your bridge or hard-money request has been received for case-by-case review. A loan specialist will respond within 24–48 hours.
          </p>
          <Link href="/">
            <Button size="lg" className="w-full">Return to Home</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left side - Info */}
      <div className="md:w-1/3 bg-primary text-white p-10 md:p-16 flex flex-col justify-center border-b-[8px] md:border-b-0 md:border-r-[8px] border-accent">
        <h1 className="font-serif text-4xl font-bold mb-6">Bridge & Hard Money Financing</h1>
        <p className="text-primary-foreground/80 mb-12 text-lg">
          Fast capital for real estate investors. Close in days, not weeks.
        </p>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <Clock className="h-8 w-8 text-accent shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Speed is Everything</h3>
              <p className="text-primary-foreground/70 text-sm">Same-day attention with a case-by-case review of every request.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Building className="h-8 w-8 text-accent shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Asset-Based</h3>
              <p className="text-primary-foreground/70 text-sm">We underwrite the deal, not your personal tax returns.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Banknote className="h-8 w-8 text-accent shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Case-by-Case Terms</h3>
              <p className="text-primary-foreground/70 text-sm">Loan structure, leverage, pricing, and timing depend on the property and transaction.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="md:w-2/3 p-6 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-xl">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-serif text-3xl font-bold text-primary mb-2">Fast-Track Application</h2>
            <p className="text-muted-foreground mb-8">Tell us about the deal. No hard credit pull required yet.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="bg-muted/30 p-6 rounded-xl space-y-6 border border-border">
                  <h3 className="font-bold text-primary">Deal Basics</h3>
                  <FormField control={form.control} name="loanAmount" render={({ field }) => (
                    <FormItem><FormLabel>Requested Loan Amount ($)</FormLabel><FormControl><Input type="number" {...field} className="bg-white" /></FormControl><FormMessage /></FormItem>
                  )} />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="propertyType" render={({ field }) => (
                      <FormItem><FormLabel>Project Type</FormLabel>
                        <FormControl>
                          <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm" {...field}>
                            <option value="fix-flip">Fix & Flip</option>
                            <option value="bridge">Bridge / Acquisition</option>
                            <option value="ground-up">Ground-Up Construction</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="timeline" render={({ field }) => (
                      <FormItem><FormLabel>Closing Timeline</FormLabel>
                        <FormControl>
                          <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm" {...field}>
                            <option value="immediately">ASAP (Under 14 days)</option>
                            <option value="30days">Within 30 Days</option>
                            <option value="browsing">Just exploring options</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl space-y-6 border border-border">
                  <h3 className="font-bold text-primary">Contact Info</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem><FormLabel>First Name</FormLabel><FormControl><Input className="bg-white" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input className="bg-white" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" className="bg-white" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem><FormLabel>Cell Phone</FormLabel><FormControl><Input className="bg-white" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                </div>

                <label className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 text-sm">
                  <input
                    type="checkbox"
                    checked={contactConsent}
                    onChange={(event) => setContactConsent(event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  <span>
                    By submitting, I agree that First Nationwide Mortgage Bank may contact me about this request by phone, text, or email at the information provided. Consent is not a condition of obtaining services. Message and data rates may apply.
                  </span>
                </label>

                <Button type="submit" size="lg" className="w-full text-lg h-14 bg-accent text-primary hover:bg-accent/90">
                  Submit Loan Request <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}