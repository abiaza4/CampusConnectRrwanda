import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import PageSEO from "@/components/PageSEO";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  return (
    <div>
      <PageSEO title="Privacy Policy — CampusConnect Rwanda" description="Learn how CampusConnect Rwanda collects, uses, and protects your personal data." path="/privacy-policy" />
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("privacy.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("privacy.hero-subtitle")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container max-w-4xl space-y-8">
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section1-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("privacy.section1-text")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section2-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {t("privacy.section2-intro")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.use1")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.use2")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.use3")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.use4")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.use5")}</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section3-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("privacy.section3-text")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section4-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("privacy.section4-text")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section5-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("privacy.section5-text")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section6-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                {t("privacy.section6-intro")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.right1")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.right2")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.right3")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.right4")}</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />{t("privacy.right5")}</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("privacy.section7-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("privacy.contact-before-email")} <a href="mailto:info@campusconnect.rw" className="text-emerald hover:underline">info@campusconnect.rw</a>{t("privacy.contact-between")} <a href="tel:+250791902058" className="text-emerald hover:underline">+250 791 902 058</a>{t("privacy.contact-after-phone")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}