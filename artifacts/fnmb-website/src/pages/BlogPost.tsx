import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSTS = {
  "navigating-interest-rates-2025": {
    title: "Navigating Interest Rates in 2025: What Buyers Need to Know",
    date: "October 12, 2024",
    author: "James Wilson, Chief Economist",
    image: "/images/blog-2.png",
    content: `
      <p>As we move into 2025, the real estate market is adjusting to a new normal. The historic lows of 2020 and 2021 are firmly behind us, but the volatility of the past two years is beginning to stabilize.</p>
      <h3>The Fed's Position</h3>
      <p>The Federal Reserve has indicated a more measured approach to monetary policy. While inflation is cooling, core metrics remain sticky, meaning significant rate cuts are unlikely in the immediate term. However, the aggressive hiking cycle has concluded.</p>
      <h3>What This Means for Buyers</h3>
      <p>For prospective buyers, this stabilization brings predictability. You can now plan your purchase with a reasonable expectation that rates won't suddenly spike before closing.</p>
      <ul>
        <li><strong>Focus on what you can control:</strong> Your credit score, debt-to-income ratio, and down payment.</li>
        <li><strong>Date the rate, marry the house:</strong> If you find the right property, secure it. You can always refinance if rates drop significantly.</li>
        <li><strong>Explore buy-downs:</strong> Seller concessions used for permanent or temporary rate buy-downs are becoming increasingly common and effective.</li>
      </ul>
      <p>At First Nationwide Mortgage Bank, we are actively helping clients structure their financing to mitigate current rates while positioning them for future refinancing opportunities.</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const post = POSTS[params.slug as keyof typeof POSTS];

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button variant="outline">Return to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white pb-24">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-accent">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
          </Button>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b pb-8">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
          </div>

          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-video object-cover rounded-xl shadow-md"
          />

          <div 
            className="prose prose-lg prose-blue max-w-none pt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="bg-muted/30 border border-border p-8 rounded-xl mt-12 text-center">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Ready to discuss your options?</h3>
            <p className="text-muted-foreground mb-6">Our loan officers are standing by to help you navigate the current market.</p>
            <Link href="/contact">
              <Button size="lg">Contact an Advisor</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}