import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Home, Building, Banknote, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Long Term Mortgages",
      subtitle: "For primary residences and traditional purchases",
      desc: "Secure your future with stable, predictable payments. We offer Conventional, FHA, VA, and USDA loans with competitive rates and terms up to 30 years.",
      features: ["Fixed and Adjustable Rates", "First-time buyer programs", "Jumbo loans available"],
      link: "/long-term-application"
    },
    {
      icon: Banknote,
      title: "Short Term / Bridge Loans",
      subtitle: "Fast capital for time-sensitive deals",
      desc: "When opportunity strikes, you need capital fast. Our bridge loans provide 6-24 month financing for fix-and-flips or auction purchases.",
      features: ["Close in as little as 10 days", "Interest-only payments", "Flexible underwriting"],
      link: "/short-term-application"
    },
    {
      icon: Landmark,
      title: "Refinancing",
      subtitle: "Optimize your existing debt",
      desc: "Lower your interest rate, shorten your loan term, or tap into your home's equity to consolidate debt or fund major renovations.",
      features: ["Rate-and-term refinance", "Cash-out refinance", "Streamline options"],
      link: "/contact"
    },
    {
      icon: Building,
      title: "Investment Property Loans",
      subtitle: "Grow your real estate portfolio",
      desc: "Specialized financing for real estate investors. We evaluate the property's cash flow (DSCR) rather than just your personal income.",
      features: ["DSCR Loans", "Portfolio financing", "Multi-family properties"],
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="font-serif text-4xl md:text-6xl font-bold mb-6"
          >
            Loan Programs
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Comprehensive financing solutions designed for your specific needs, backed by reliable execution.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
                className="bg-white rounded-xl border border-border shadow-sm p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">{service.title}</h2>
                <h3 className="text-accent font-medium mb-4">{service.subtitle}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.link}>
                  <Button variant="outline" className="w-full justify-between group hover:bg-primary hover:text-white transition-colors">
                    Start Process
                    <ArrowRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}