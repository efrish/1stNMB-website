import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Building2, Shield, Clock, Users, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MortgageCalculator } from "@/components/calculator/MortgageCalculator";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-3xl space-y-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm">
              <Shield className="h-4 w-4" />
              <span>Trusted Nationwide Mortgage Lender</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
              Your Path to Home Ownership Starts Here.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Expert mortgage solutions tailored to your financial goals. Whether you're buying your first home or investing in real estate, we provide the stability and expertise you need.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/long-term-application">
                <Button size="lg" className="text-lg h-14 px-8 w-full sm:w-auto shadow-xl hover:scale-105 transition-transform">
                  Apply for a Mortgage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Explore Loan Options
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-serif">25+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-serif">$10B+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Loans Funded</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-serif">50k+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-serif">50</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">States Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose First Nationwide?</h2>
            <p className="text-lg text-muted-foreground">We combine the resources of a large national bank with the personalized service of a boutique lender.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Unwavering Reliability", desc: "We've weathered every market cycle since 1998, ensuring your loan closes on time, every time." },
              { icon: Clock, title: "Expedited Process", desc: "Our streamlined underwriting process means faster approvals and less paperwork for you." },
              { icon: Users, title: "Dedicated Advisors", desc: "You're paired with a senior loan officer who understands your unique financial picture." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Comprehensive Loan Programs</h2>
              <p className="text-primary-foreground/80 text-lg">From your first home to your tenth investment property, we have the capital to fund your ambitions.</p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Long-Term Mortgages", desc: "Conventional, FHA, VA, and USDA loans with competitive rates and terms up to 30 years for primary residences.", link: "/long-term-application" },
              { title: "Short-Term & Bridge", desc: "Fast, flexible capital for real estate investors, fix-and-flips, and time-sensitive property purchases.", link: "/short-term-application" },
              { title: "Refinancing Options", desc: "Lower your monthly payments, reduce your term, or tap into your home's equity for major expenses.", link: "/services" },
              { title: "Investment Properties", desc: "DSCR loans and portfolio financing designed specifically for real estate investors.", link: "/services" }
            ].map((service, i) => (
              <Link href={service.link} key={i}>
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay: i * 0.1 } } }}
                  className="group p-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors cursor-pointer h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Building2 className="h-8 w-8 text-accent" />
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground/40 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{service.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Estimate Your Payments</h2>
              <p className="text-lg text-muted-foreground">Use our interactive calculator to project your monthly mortgage costs.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <MortgageCalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">A Streamlined Process</h2>
            <p className="text-lg text-muted-foreground">We've refined our origination process to be as smooth and transparent as possible.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Complete our secure, guided application in minutes." },
              { step: "02", title: "Get Pre-Approved", desc: "Receive a firm pre-approval letter to strengthen your offer." },
              { step: "03", title: "Processing", desc: "Our team rapidly processes and underwrites your file." },
              { step: "04", title: "Clear to Close", desc: "Sign your documents and get your keys." }
            ].map((item, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                className="relative"
              >
                <div className="text-6xl font-serif font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-4 w-8 h-[2px] bg-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Ready to make your move?</h2>
            <p className="text-xl text-primary/80">Connect with a First Nationwide loan officer today and discover what you can afford.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/long-term-application">
                <Button size="lg" className="text-lg h-14 px-8 w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-xl">
                  Start Application
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 w-full sm:w-auto border-primary text-primary hover:bg-primary/5">
                  Speak with an Advisor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}