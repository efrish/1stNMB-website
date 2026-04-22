import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Building, DollarSign, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const personalSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
  ssn: z.string().min(9, "Required"),
});

const propertySchema = z.object({
  address: z.string().min(5, "Required"),
  city: z.string().min(2, "Required"),
  state: z.string().min(2, "Required"),
  zip: z.string().min(5, "Required"),
  purchasePrice: z.coerce.number().min(10000, "Required"),
  downPayment: z.coerce.number().min(0, "Required"),
});

const financialSchema = z.object({
  annualIncome: z.coerce.number().min(10000, "Required"),
  employer: z.string().min(2, "Required"),
  yearsEmployed: z.coerce.number().min(0, "Required"),
});

export default function LongTermApplication() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Forms
  const personalForm = useForm({ resolver: zodResolver(personalSchema), defaultValues: { firstName: "", lastName: "", email: "", phone: "", ssn: "" } });
  const propertyForm = useForm({ resolver: zodResolver(propertySchema), defaultValues: { address: "", city: "", state: "", zip: "", purchasePrice: 0, downPayment: 0 } });
  const financialForm = useForm({ resolver: zodResolver(financialSchema), defaultValues: { annualIncome: 0, employer: "", yearsEmployed: 0 } });

  const nextStep = async (currentForm: any) => {
    const isValid = await currentForm.trigger();
    if (isValid) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const submitApplication = async () => {
    const isValid = await financialForm.trigger();
    if (isValid) {
      setIsSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "Your long-term mortgage application has been received.",
      });
      window.scrollTo(0, 0);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-2xl shadow-xl max-w-lg text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-primary mb-4">Application Received!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for choosing First Nationwide. A senior loan officer will review your file and contact you within 24 hours.
          </p>
          <Link href="/">
            <Button size="lg" className="w-full">Return to Home</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-primary pt-12 pb-24 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Long-Term Mortgage Application</h1>
          <p className="text-primary-foreground/80">Secure, fast, and transparent pre-approval process.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl -mt-12">
        <div className="bg-white rounded-xl shadow-lg border border-border p-6 md:p-10">
          
          {/* Progress Bar */}
          <div className="flex justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 -translate-y-1/2" />
            <div className={`absolute top-1/2 left-0 h-1 bg-accent -z-10 -translate-y-1/2 transition-all duration-500`} style={{ width: `${((step - 1) / 3) * 100}%` }} />
            
            {[
              { id: 1, icon: User, label: "Personal" },
              { id: 2, icon: Building, label: "Property" },
              { id: 3, icon: DollarSign, label: "Financial" },
              { id: 4, icon: CheckCircle2, label: "Review" }
            ].map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step >= s.id ? 'border-accent bg-accent text-primary' : 'border-muted bg-white text-muted-foreground'}`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className={`text-xs font-bold uppercase ${step >= s.id ? 'text-primary' : 'text-muted-foreground'}`}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="space-y-6">
            
            {/* Step 1: Personal */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">Personal Information</h2>
                <Form {...personalForm}>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={personalForm.control} name="firstName" render={({ field }) => (
                        <FormItem><FormLabel>First Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={personalForm.control} name="lastName" render={({ field }) => (
                        <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={personalForm.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={personalForm.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Phone</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <FormField control={personalForm.control} name="ssn" render={({ field }) => (
                      <FormItem><FormLabel>Social Security Number</FormLabel><FormControl><Input type="password" placeholder="XXX-XX-XXXX" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="button" size="lg" className="w-full mt-6" onClick={() => nextStep(personalForm)}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* Step 2: Property */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">Property Details</h2>
                <Form {...propertyForm}>
                  <form className="space-y-4">
                    <FormField control={propertyForm.control} name="address" render={({ field }) => (
                      <FormItem><FormLabel>Property Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid grid-cols-3 gap-4">
                      <FormField control={propertyForm.control} name="city" render={({ field }) => (
                        <FormItem className="col-span-1"><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={propertyForm.control} name="state" render={({ field }) => (
                        <FormItem className="col-span-1"><FormLabel>State</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={propertyForm.control} name="zip" render={({ field }) => (
                        <FormItem className="col-span-1"><FormLabel>ZIP</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={propertyForm.control} name="purchasePrice" render={({ field }) => (
                        <FormItem><FormLabel>Purchase Price ($)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={propertyForm.control} name="downPayment" render={({ field }) => (
                        <FormItem><FormLabel>Down Payment ($)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
                      <Button type="button" size="lg" className="flex-1" onClick={() => nextStep(propertyForm)}>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* Step 3: Financial */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="font-serif text-2xl font-bold text-primary mb-6">Financial & Employment</h2>
                <Form {...financialForm}>
                  <form className="space-y-4">
                    <FormField control={financialForm.control} name="annualIncome" render={({ field }) => (
                      <FormItem><FormLabel>Annual Gross Income ($)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={financialForm.control} name="employer" render={({ field }) => (
                      <FormItem><FormLabel>Current Employer</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={financialForm.control} name="yearsEmployed" render={({ field }) => (
                      <FormItem><FormLabel>Years at Employer</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    
                    <div className="flex gap-4 mt-6">
                      <Button type="button" variant="outline" onClick={() => setStep(2)}>Back</Button>
                      <Button type="button" size="lg" className="flex-1" onClick={() => nextStep(financialForm)}>
                        Review Application <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">Review & Submit</h2>
                <p className="text-muted-foreground mb-6">Please review your information before final submission.</p>

                <div className="bg-muted/30 p-6 rounded-lg space-y-6">
                  <div>
                    <h4 className="font-bold border-b pb-2 mb-3">Personal</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Name:</div>
                      <div className="font-medium">{personalForm.getValues().firstName} {personalForm.getValues().lastName}</div>
                      <div className="text-muted-foreground">Email:</div>
                      <div className="font-medium">{personalForm.getValues().email}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-2 mb-3">Property</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Price:</div>
                      <div className="font-medium">${personalForm.getValues().firstName ? propertyForm.getValues().purchasePrice : ''}</div>
                      <div className="text-muted-foreground">Address:</div>
                      <div className="font-medium">{propertyForm.getValues().address}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(3)}>Back to Edit</Button>
                  <Button type="button" size="lg" className="flex-1 bg-accent text-primary hover:bg-accent/90" onClick={submitApplication}>
                    Submit Final Application
                  </Button>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}