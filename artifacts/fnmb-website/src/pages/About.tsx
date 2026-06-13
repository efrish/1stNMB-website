import { motion } from "framer-motion";
import { CheckCircle2, Shield, History, Target } from "lucide-react";
import teamMember1 from "@assets/image_1781355661153.png";
import teamMember2 from "@assets/image_1781355672927.png";
import teamMember3 from "@assets/image_1781355683997.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="font-serif text-4xl md:text-6xl font-bold mb-6"
          >
            About First Nationwide
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Building communities and empowering investors through reliable, transparent mortgage financing since 1998.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { src: teamMember1, alt: "Team Member" },
                { src: teamMember2, alt: "Team Member" },
                { src: teamMember3, alt: "Team Member" },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white ring-2 ring-accent/30">
                    <img
                      src={member.src}
                      alt={member.alt}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl font-bold text-primary">A Legacy of Trust</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                First Nationwide Mortgage Bank was founded on a simple principle: mortgage lending should be a partnership, not a transaction. For over two decades, we have provided stable capital and expert guidance to homebuyers and real estate investors across the country.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are not a tech startup trying to disrupt the industry with algorithms. We are seasoned financial professionals who believe in the power of human expertise, backed by modern efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide responsible, accessible, and efficient real estate financing that helps our clients build wealth and secure their financial future.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">Our Values</h3>
              <ul className="space-y-3">
                {[
                  "Integrity in every transaction",
                  "Transparency in pricing and terms",
                  "Speed without sacrificing diligence",
                  "Long-term relationship building"
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}