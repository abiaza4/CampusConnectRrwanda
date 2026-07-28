import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    title: "How to Choose the Right University in Rwanda",
    excerpt: "A comprehensive guide to evaluating universities based on programs, facilities, location, and your career goals.",
    category: "Study Tips",
    date: "July 15, 2026",
    readTime: "5 min read",
  },
  {
    title: "Rwanda's Education System: What International Students Need to Know",
    excerpt: "Understanding the semester system, grading, accreditation, and academic expectations at Rwandan universities.",
    category: "Visa Updates",
    date: "July 10, 2026",
    readTime: "7 min read",
  },
  {
    title: "Top 5 Affordable Universities in Rwanda for 2026",
    excerpt: "Comparing tuition fees, living costs, and scholarship opportunities across Rwanda's most accessible institutions.",
    category: "University Rankings",
    date: "July 5, 2026",
    readTime: "6 min read",
  },
  {
    title: "Student Visa Process: Step-by-Step Guide for 2026",
    excerpt: "Updated requirements, processing times, and tips for a smooth student visa application to Rwanda.",
    category: "Visa Updates",
    date: "June 28, 2026",
    readTime: "8 min read",
  },
  {
    title: "From South Sudan to Kigali: A Student Success Story",
    excerpt: "How James Ochieng navigated the application process and found his dream program at University of Rwanda.",
    category: "Success Stories",
    date: "June 20, 2026",
    readTime: "4 min read",
  },
  {
    title: "Career Opportunities After Graduating in Rwanda",
    excerpt: "The growing job market in East Africa and how a Rwandan degree opens doors across the region.",
    category: "Career Advice",
    date: "June 15, 2026",
    readTime: "6 min read",
  },
  {
    title: "New Government Scholarship Program for East African Students",
    excerpt: "Rwanda announces expanded scholarship opportunities for students from EAC member countries.",
    category: "Education News",
    date: "June 10, 2026",
    readTime: "3 min read",
  },
  {
    title: "Living in Kigali: A Student's Complete Guide",
    excerpt: "Neighborhoods, food, transport, entertainment, and everything else you need to know about student life in the capital.",
    category: "Study Tips",
    date: "June 5, 2026",
    readTime: "10 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Study Tips": "bg-emerald/10 text-emerald",
  "Visa Updates": "bg-navy/10 text-navy dark:text-blue-300",
  "University Rankings": "bg-gold/10 text-gold",
  "Success Stories": "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300",
  "Career Advice": "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  "Education News": "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300",
};

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Latest Updates</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Blog & Education News
              </h1>
              <p className="text-white/70 text-lg">
                Study tips, visa updates, university rankings, success stories, and career advice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <article className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:shadow-lg transition-all group cursor-pointer">
                  <Badge className={`text-xs mb-3 ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </Badge>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald transition-colors" style={{ fontFamily: "'Fraunces', serif" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
