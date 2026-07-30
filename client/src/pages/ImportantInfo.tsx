import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { AlertCircle, Check, Shield, Ban, FileText, BookOpen, DollarSign, CreditCard, Landmark, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PageSEO from "@/components/PageSEO";

export default function ImportantInfo() {
  const { t } = useLanguage();

  return (
    <div>
      <PageSEO title="Important Information — CampusConnect Rwanda" description="Critical information for students in Rwanda — laws, drug policies, responsibilities, currency, and emergency contacts." path="/important-info" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("importantinfo.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("importantinfo.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("importantinfo.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-8 max-w-4xl mx-auto">
          {/* Currency */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("importantinfo.currency-title")}
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Globe size={16} className="text-emerald shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: t("importantinfo.currency-1") }} />
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <DollarSign size={16} className="text-emerald shrink-0 mt-0.5" />
                  <span dangerouslySetInnerHTML={{ __html: t("importantinfo.currency-2") }} />
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <CreditCard size={16} className="text-emerald shrink-0 mt-0.5" />
                  <span>{t("importantinfo.currency-3")}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Landmark size={16} className="text-emerald shrink-0 mt-0.5" />
                  <span>{t("importantinfo.currency-4")}</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Laws and Integrity */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("importantinfo.laws-title")}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4" dangerouslySetInnerHTML={{ __html: t("importantinfo.laws-desc") }} />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("importantinfo.laws-subtitle")}</p>
              <ul className="space-y-2 mb-4">
                {[
                  t("importantinfo.laws-item1"),
                  t("importantinfo.laws-item2"),
                  t("importantinfo.laws-item3"),
                  t("importantinfo.laws-item4"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={16} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-700 dark:text-red-400 flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{t("importantinfo.laws-warning")}</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Drugs and Prohibited Items */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("importantinfo.drugs-title")}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("importantinfo.drugs-desc")}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{t("importantinfo.drugs-subtitle1")}</p>
              <ul className="space-y-2 mb-4">
                {[
                  t("importantinfo.drugs-item1"),
                  t("importantinfo.drugs-item2"),
                  t("importantinfo.drugs-item3"),
                  t("importantinfo.drugs-item4"),
                  t("importantinfo.drugs-item5"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Ban size={14} className="text-red-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{t("importantinfo.drugs-subtitle2")}</p>
              <ul className="space-y-2">
                {[
                  t("importantinfo.drugs-penalty1"),
                  t("importantinfo.drugs-penalty2"),
                  t("importantinfo.drugs-penalty3"),
                  t("importantinfo.drugs-penalty4"),
                  t("importantinfo.drugs-penalty5"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <AlertCircle size={14} className="text-amber-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Student Responsibilities */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("importantinfo.responsibilities-title")}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("importantinfo.responsibilities-desc")}</p>
              <ul className="space-y-2">
                {[
                  t("importantinfo.responsibilities-item1"),
                  t("importantinfo.responsibilities-item2"),
                  t("importantinfo.responsibilities-item3"),
                  t("importantinfo.responsibilities-item4"),
                  t("importantinfo.responsibilities-item5"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={16} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* General Advice */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("importantinfo.advice-title")}
                </h2>
              </div>
              <ul className="space-y-2 mb-6">
                {[
                  t("importantinfo.advice-item1"),
                  t("importantinfo.advice-item2"),
                  t("importantinfo.advice-item3"),
                  t("importantinfo.advice-item4"),
                  t("importantinfo.advice-item5"),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={16} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 rounded-xl bg-emerald/5 border border-emerald/20">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center" dangerouslySetInnerHTML={{ __html: t("importantinfo.advice-footer") }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
