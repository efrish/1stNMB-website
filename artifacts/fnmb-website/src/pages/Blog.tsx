import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const POSTS = [
  {
    slug: "navigating-interest-rates-2025",
    title: "Navigating Interest Rates in 2025: What Buyers Need to Know",
    excerpt: "An in-depth look at current market conditions, Fed policy expectations, and how to position yourself for the best possible rate.",
    date: "October 12, 2024",
    image: "/images/blog-2.png",
    category: "Market Updates"
  },
  {
    slug: "dscr-loans-explained",
    title: "DSCR Loans Explained: The Investor's Secret Weapon",
    excerpt: "Learn how Debt Service Coverage Ratio loans allow real estate investors to scale their portfolios without relying on personal income verification.",
    date: "September 28, 2024",
    image: "/images/blog-1.png",
    category: "Investment"
  },
  {
    slug: "first-time-buyer-guide",
    title: "The First-Time Homebuyer's Checklist",
    excerpt: "From pre-approval to closing day, here is everything you need to prepare before making an offer on your first home.",
    date: "September 15, 2024",
    image: "/images/hero.png",
    category: "Guides"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="font-serif text-4xl md:text-6xl font-bold mb-6"
          >
            Mortgage Insights
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Market analysis, loan guides, and financial strategies from our expert advisors.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-border group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">{post.category}</span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h2 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-sm font-semibold text-primary flex items-center group-hover:text-accent transition-colors">
                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}