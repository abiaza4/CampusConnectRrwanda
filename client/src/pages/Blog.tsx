import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageSEO from "@/components/PageSEO";

const posts = [
  {
    category: "Study Tips",
    titleKey: "blog.post-1-title",
    excerptKey: "blog.post-1-excerpt",
    categoryKey: "blog.category-study-tips",
    dateKey: "blog.post-1-date",
    readTimeKey: "blog.post-1-read-time",
  },
  {
    category: "Visa Updates",
    titleKey: "blog.post-2-title",
    excerptKey: "blog.post-2-excerpt",
    categoryKey: "blog.category-visa-updates",
    dateKey: "blog.post-2-date",
    readTimeKey: "blog.post-2-read-time",
  },
  {
    category: "University Rankings",
    titleKey: "blog.post-3-title",
    excerptKey: "blog.post-3-excerpt",
    categoryKey: "blog.category-university-rankings",
    dateKey: "blog.post-3-date",
    readTimeKey: "blog.post-3-read-time",
  },
  {
    category: "Visa Updates",
    titleKey: "blog.post-4-title",
    excerptKey: "blog.post-4-excerpt",
    categoryKey: "blog.category-visa-updates",
    dateKey: "blog.post-4-date",
    readTimeKey: "blog.post-4-read-time",
  },
  {
    category: "Success Stories",
    titleKey: "blog.post-5-title",
    excerptKey: "blog.post-5-excerpt",
    categoryKey: "blog.category-success-stories",
    dateKey: "blog.post-5-date",
    readTimeKey: "blog.post-5-read-time",
  },
  {
    category: "Career Advice",
    titleKey: "blog.post-6-title",
    excerptKey: "blog.post-6-excerpt",
    categoryKey: "blog.category-career-advice",
    dateKey: "blog.post-6-date",
    readTimeKey: "blog.post-6-read-time",
  },
  {
    category: "Education News",
    titleKey: "blog.post-7-title",
    excerptKey: "blog.post-7-excerpt",
    categoryKey: "blog.category-education-news",
    dateKey: "blog.post-7-date",
    readTimeKey: "blog.post-7-read-time",
  },
  {
    category: "Study Tips",
    titleKey: "blog.post-8-title",
    excerptKey: "blog.post-8-excerpt",
    categoryKey: "blog.category-study-tips",
    dateKey: "blog.post-8-date",
    readTimeKey: "blog.post-8-read-time",
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
  const { t } = useLanguage();
  return (
    <div>
      <PageSEO title="Education Blog — CampusConnect Rwanda" description="Insights, tips, and updates about studying in Rwanda. Study tips, visa updates, success stories, and career advice." path="/blog" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("blog.hero-badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("blog.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("blog.hero-description")}
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
                    {t(post.categoryKey)}
                  </Badge>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald transition-colors" style={{ fontFamily: "'Fraunces', serif" }}>
                    {t(post.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{t(post.excerptKey)}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {t(post.dateKey)}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {t(post.readTimeKey)}</span>
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
