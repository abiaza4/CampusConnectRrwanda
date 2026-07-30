import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Target, Eye, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("about.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("about.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("about.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-12">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                <Target className="w-8 h-8 text-emerald mb-3" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{t("about.mission-title")}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("about.mission-description")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                <Eye className="w-8 h-8 text-navy mb-3" />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{t("about.vision-title")}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("about.vision-description")}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Goals */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>{t("about.goals-title")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  t("about.goal-1"),
                  t("about.goal-2"),
                  t("about.goal-3"),
                  t("about.goal-4"),
                  t("about.goal-5"),
                  t("about.goal-6"),
                ].map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-emerald">{i + 1}</span>
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Team CTA */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-emerald/5 to-navy/5 dark:from-emerald/10 dark:to-navy/20 rounded-2xl p-6 md:p-8 border border-emerald/10 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("about.team-title")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-lg mx-auto">
                {t("about.team-description")}
              </p>
              <Link href="/team">
                <span className="inline-flex items-center gap-2 text-emerald font-medium text-sm hover:gap-3 transition-all">
                  {t("about.team-link")} <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Partners */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("about.partners-title")}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
                {t("about.partners-description")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["HEC Rwanda", "University of Rwanda", "Ministry of Education", "Rwanda Immigration", "EAC Education Secretariat", "NESA", "RIB"].map((partner) => (
                  <div key={partner} className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5 text-sm text-gray-600 dark:text-gray-400">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("about.contact-title")}
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{t("about.contact-location")}</p>
                    <p className="text-sm text-gray-500">Kigali, Rwanda</p>
                    <p className="text-sm text-gray-500">Musanze, Rwanda</p>
                    <p className="text-sm text-gray-500">Juba, South Sudan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{t("about.contact-email")}</p>
                    <p className="text-sm text-gray-500">abiazaawari@gmail.com</p>
                    <p className="text-sm text-gray-500">campusconnectrwa@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-emerald shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{t("about.contact-phone")}</p>
                    <p className="text-sm text-gray-500">+250 791 902 058</p>
                    <p className="text-sm text-gray-500">+211 922 257 944</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
