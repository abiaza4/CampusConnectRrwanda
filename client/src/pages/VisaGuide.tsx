import { Badge } from "@/components/ui/badge";
import { FileText, CreditCard, Clock, AlertCircle, Check, Shield, MapPin, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VisaGuide() {
  const { t } = useLanguage();

  const visaProcess = [
    { step: 1, text: t("visaguide.process-step1") },
    { step: 2, text: t("visaguide.process-step2") },
    { step: 3, text: t("visaguide.process-step3") },
    { step: 4, text: t("visaguide.process-step4") },
    { step: 5, text: t("visaguide.process-step5") },
    { step: 6, text: t("visaguide.process-step6") },
    { step: 7, text: t("visaguide.process-step7") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("visaguide.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("visaguide.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("visaguide.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-10">
          {/* Entry Requirements */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("visaguide.entry-title")}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t("visaguide.entry-subtitle")}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{t("visaguide.entry-description")}</p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("visaguide.entry-item1-title")}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">{t("visaguide.entry-item1-desc")}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("visaguide.entry-item2-title")}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">{t("visaguide.entry-item2-desc")}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("visaguide.entry-item3-title")}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">{t("visaguide.entry-item3-desc")}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{t("visaguide.entry-item4-title")}</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>{t("visaguide.entry-item4a")}</li>
                    <li>{t("visaguide.entry-item4b")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Entry Important Notes */}
          <ScrollReveal>
            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("visaguide.important-notes-title")}
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.important-1") }} />
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.important-2") }} />
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.important-3") }} />
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Student Visa Requirements */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("visaguide.visa-requirements-title")}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t("visaguide.visa-requirements-desc")}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <CreditCard size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{t("visaguide.visa-item1")}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{t("visaguide.visa-item2")}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.visa-item3") }} />
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <Shield size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{t("visaguide.visa-item4")}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Important Visa Information */}
          <ScrollReveal>
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("visaguide.visa-info-title")}
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.visa-info-1") }} />
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.visa-info-2") }} />
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{t("visaguide.visa-info-3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: t("visaguide.visa-info-4") }} />
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Visa Process */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  {t("visaguide.process-title")}
                </h2>
              </div>
              <ol className="space-y-4">
                {visaProcess.map((item) => (
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

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="p-5 rounded-xl bg-gold/5 border border-gold/20">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <AlertCircle size={16} className="text-gold shrink-0 mt-0.5" />
                <span><strong>{t("visaguide.disclaimer-label")}</strong> {t("visaguide.disclaimer-text")}</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
