import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageSEO from "@/components/PageSEO";

const events = [
  {
    type: "Open Day",
    titleKey: "events.event-1-title",
    dateKey: "events.event-1-date",
    timeKey: "events.event-1-time",
    locationKey: "events.event-1-location",
    typeKey: "events.type-open-day",
    descKey: "events.event-1-desc",
  },
  {
    type: "Education Fair",
    titleKey: "events.event-2-title",
    dateKey: "events.event-2-date",
    timeKey: "events.event-2-time",
    locationKey: "events.event-2-location",
    typeKey: "events.type-education-fair",
    descKey: "events.event-2-desc",
  },
  {
    type: "Scholarship",
    titleKey: "events.event-3-title",
    dateKey: "events.event-3-date",
    timeKey: "events.event-3-time",
    locationKey: "events.event-3-location",
    typeKey: "events.type-scholarship",
    descKey: "events.event-3-desc",
  },
  {
    type: "Orientation",
    titleKey: "events.event-4-title",
    dateKey: "events.event-4-date",
    timeKey: "events.event-4-time",
    locationKey: "events.event-4-location",
    typeKey: "events.type-orientation",
    descKey: "events.event-4-desc",
  },
  {
    type: "Career Fair",
    titleKey: "events.event-5-title",
    dateKey: "events.event-5-date",
    timeKey: "events.event-5-time",
    locationKey: "events.event-5-location",
    typeKey: "events.type-career-fair",
    descKey: "events.event-5-desc",
  },
  {
    type: "Orientation",
    titleKey: "events.event-6-title",
    dateKey: "events.event-6-date",
    timeKey: "events.event-6-time",
    locationKey: "events.event-6-location",
    typeKey: "events.type-orientation",
    descKey: "events.event-6-desc",
  },
];

const typeColors: Record<string, string> = {
  "Open Day": "bg-emerald/10 text-emerald border-emerald/20",
  "Education Fair": "bg-navy/10 text-navy border-navy/20",
  "Scholarship": "bg-gold/10 text-gold border-gold/20",
  "Orientation": "bg-purple-100 text-purple-700 border-purple-200",
  "Career Fair": "bg-blue-100 text-blue-700 border-blue-200",
};

export default function Events() {
  const { t } = useLanguage();
  return (
    <div>
      <PageSEO title="Events — CampusConnect Rwanda" description="Stay updated with education events, fairs, and opportunities in Rwanda and across East Africa." path="/events" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("events.hero-badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("events.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("events.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`text-xs ${typeColors[event.type] || "bg-gray-100 text-gray-600"}`}>
                      {t(event.typeKey)}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald transition-colors" style={{ fontFamily: "'Fraunces', serif" }}>
                    {t(event.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{t(event.descKey)}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} className="text-emerald" /> {t(event.dateKey)}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock size={12} className="text-emerald" /> {t(event.timeKey)}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={12} className="text-emerald" /> {t(event.locationKey)}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
