import {
  GraduationCap,
  Calendar,
  DollarSign,
  Landmark,
  Bus,
  Shield,
  Wifi,
  Cloud,
  Languages,
  Heart,
  Users,
  Phone,
  Building2,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StudyGuide() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const guideSections = [
    {
      id: "why-rwanda",
      icon: GraduationCap,
      title: t("studyguide.section-why-rwanda.title"),
      content: t("studyguide.section-why-rwanda.content"),
    },
    {
      id: "education-system",
      icon: BookOpen,
      title: t("studyguide.section-education-system.title"),
      content: t("studyguide.section-education-system.content"),
    },
    {
      id: "academic-calendar",
      icon: Calendar,
      title: t("studyguide.section-academic-calendar.title"),
      content: t("studyguide.section-academic-calendar.content"),
    },
    {
      id: "cost-of-living",
      icon: DollarSign,
      title: t("studyguide.section-cost-of-living.title"),
      content: t("studyguide.section-cost-of-living.content"),
    },
    {
      id: "currency",
      icon: Landmark,
      title: t("studyguide.section-currency.title"),
      content: t("studyguide.section-currency.content"),
    },
    {
      id: "transportation",
      icon: Bus,
      title: t("studyguide.section-transportation.title"),
      content: t("studyguide.section-transportation.content"),
    },
    {
      id: "health-insurance",
      icon: Heart,
      title: t("studyguide.section-health-insurance.title"),
      content: t("studyguide.section-health-insurance.content"),
    },
    {
      id: "safety",
      icon: Shield,
      title: t("studyguide.section-safety.title"),
      content: t("studyguide.section-safety.content"),
    },
    {
      id: "internet",
      icon: Wifi,
      title: t("studyguide.section-internet.title"),
      content: t("studyguide.section-internet.content"),
    },
    {
      id: "climate",
      icon: Cloud,
      title: t("studyguide.section-climate.title"),
      content: t("studyguide.section-climate.content"),
    },
    {
      id: "language",
      icon: Languages,
      title: t("studyguide.section-language.title"),
      content: t("studyguide.section-language.content"),
    },
    {
      id: "culture",
      icon: Users,
      title: t("studyguide.section-culture.title"),
      content: t("studyguide.section-culture.content"),
    },
    {
      id: "emergency",
      icon: Phone,
      title: t("studyguide.section-emergency.title"),
      content: t("studyguide.section-emergency.content"),
    },
    {
      id: "government-offices",
      icon: Building2,
      title: t("studyguide.section-government-offices.title"),
      content: t("studyguide.section-government-offices.content"),
    },
  ];

  const faqs = [
    { q: t("studyguide.faq-1.q"), a: t("studyguide.faq-1.a") },
    { q: t("studyguide.faq-2.q"), a: t("studyguide.faq-2.a") },
    { q: t("studyguide.faq-3.q"), a: t("studyguide.faq-3.a") },
    { q: t("studyguide.faq-4.q"), a: t("studyguide.faq-4.a") },
    { q: t("studyguide.faq-5.q"), a: t("studyguide.faq-5.a") },
    { q: t("studyguide.faq-6.q"), a: t("studyguide.faq-6.a") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-dark via-navy to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("studyguide.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("studyguide.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("studyguide.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-white/5 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t("studyguide.sidebar-sections")}</h4>
                <nav className="space-y-1">
                  {guideSections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald hover:bg-emerald/5 rounded-lg transition-colors">
                      {s.title}
                    </a>
                  ))}
                </nav>
                <hr className="my-3 border-gray-100 dark:border-white/10" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t("studyguide.sidebar-related")}</h4>
                <nav className="space-y-1">
                  <Link href="/scholarships" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald hover:bg-emerald/5 rounded-lg transition-colors">
                    {t("studyguide.sidebar-scholarships")}
                  </Link>
                  <Link href="/equivalence" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald hover:bg-emerald/5 rounded-lg transition-colors">
                    {t("studyguide.sidebar-equivalence")}
                  </Link>
                  <Link href="/visa-guide" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald hover:bg-emerald/5 rounded-lg transition-colors">
                    {t("studyguide.sidebar-visa")}
                  </Link>
                  <Link href="/important-info" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald hover:bg-emerald/5 rounded-lg transition-colors">
                    {t("studyguide.sidebar-info")}
                  </Link>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-8">
              {guideSections.map((section, i) => (
                <ScrollReveal key={section.id} delay={i * 0.03}>
                  <div id={section.id} className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 scroll-mt-24">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                        <section.icon className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                          {section.title}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* FAQ Section */}
              <ScrollReveal>
                <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                    {t("studyguide.faq-title")}
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-background transition-colors"
                        >
                          <span className="font-medium text-sm text-gray-900 dark:text-white pr-4">{faq.q}</span>
                          {openFaq === i ? <ChevronUp size={16} className="shrink-0 text-emerald" /> : <ChevronDown size={16} className="shrink-0 text-gray-400" />}
                        </button>
                        {openFaq === i && (
                          <div className="px-4 pb-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
