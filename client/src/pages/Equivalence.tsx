import { Badge } from "@/components/ui/badge";
import { Check, Clock, AlertCircle, FileText, User, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import PageSEO from "@/components/PageSEO";

export default function Equivalence() {
  const { t } = useLanguage();

  return (
    <div>
      <PageSEO title="Academic Equivalence — CampusConnect Rwanda" description="Guide to getting your foreign academic qualifications recognized in Rwanda through the Rwanda Qualifications Framework." path="/equivalence" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("equivalence.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("equivalence.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("equivalence.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-10">
          {/* Required Documents */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("equivalence.documents-title")}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {t("equivalence.documents-desc")}
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("equivalence.doc-1-title")}</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li><strong className="text-gray-800 dark:text-gray-200">{t("equivalence.doc-1-item1-label")}</strong> {t("equivalence.doc-1-item1-value")}</li>
                    <li><strong className="text-gray-800 dark:text-gray-200">{t("equivalence.doc-1-item2-label")}</strong> {t("equivalence.doc-1-item2-value")}</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("equivalence.doc-2-title")}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">{t("equivalence.doc-2-desc")}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("equivalence.doc-3-title")}</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>{t("equivalence.doc-3-item1")}</li>
                    <li>{t("equivalence.doc-3-item2")}</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("equivalence.doc-4-title")}</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>{t("equivalence.doc-4-item1")}</li>
                    <li>{t("equivalence.doc-4-item2")}</li>
                    <li>{t("equivalence.doc-4-item3")}</li>
                    <li>{t("equivalence.doc-4-item4")}</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("equivalence.doc-5-title")}</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>{t("equivalence.doc-5-item1")}</li>
                    <li>{t("equivalence.doc-5-item2")}</li>
                    <li>{t("equivalence.doc-5-item3")}</li>
                    <li>{t("equivalence.doc-5-item4")}</li>
                    <li>{t("equivalence.doc-5-item5")}</li>
                    <li>{t("equivalence.doc-5-item6")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Important Notes */}
          <ScrollReveal>
            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("equivalence.important-notes-title")}
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  { text: t("equivalence.important-1"), icon: Shield },
                  { text: t("equivalence.important-2"), icon: Clock },
                  { text: t("equivalence.important-3"), icon: AlertCircle },
                  { text: t("equivalence.important-4"), icon: Check },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Application Process */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("equivalence.process-title")}
                </h2>
              </div>
              <ol className="space-y-4">
                {[
                  { step: 1, text: t("equivalence.process-step1") },
                  { step: 2, text: t("equivalence.process-step2") },
                  { step: 3, text: t("equivalence.process-step3") },
                  { step: 4, text: t("equivalence.process-step4") },
                  { step: 5, text: t("equivalence.process-step5") },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-emerald">{item.step}</span>
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pt-1.5">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
