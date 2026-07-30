import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { universities } from "@/data/universities";

const allScholarships = universities.flatMap((u) =>
  u.scholarships.map((s) => ({
    ...s,
    university: u.name,
    universityId: u.id,
  }))
);

const types = ["All", "Government", "University", "NGO", "International"] as const;

export default function Scholarships() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<typeof types[number]>("All");
  const [uniFilter, setUniFilter] = useState("All");
  const { t } = useLanguage();

  const filtered = useMemo(() => {
    return allScholarships.filter((s) => {
      const matchesSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.university.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All" || s.type === typeFilter;
      const matchesUni = uniFilter === "All" || s.university === uniFilter;
      return matchesSearch && matchesType && matchesUni;
    });
  }, [search, typeFilter, uniFilter]);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gold/20 via-navy to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("scholarships.hero-badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("scholarships.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("scholarships.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t("scholarships.search-placeholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/30 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    typeFilter === type
                      ? "bg-navy dark:bg-emerald text-white"
                      : "bg-white dark:bg-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-emerald/30"
                  }`}
                >
                  {t(`scholarships.filter-${type.toLowerCase()}`)}
                </button>
              ))}
              <select
                value={uniFilter}
                onChange={(e) => setUniFilter(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm bg-white dark:bg-card border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/30"
              >
                <option value="All">{t("scholarships.all-universities")}</option>
                {universities.map((u) => (
                  <option key={u.id} value={u.name}>{u.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {t("scholarships.showing")} {filtered.length} {filtered.length === 1 ? t("scholarships.scholarship") : t("scholarships.scholarships")}
          </p>

          <div className="space-y-4">
            {filtered.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white dark:bg-card rounded-2xl p-5 border border-gray-100 dark:border-white/5 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{s.name}</h3>
                      <p className="text-sm text-gray-500">{s.university}</p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">{s.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* External Scholarships */}
          <ScrollReveal>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("scholarships.external-title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { nameKey: "scholarships.external-1-name", orgKey: "scholarships.external-1-org", descKey: "scholarships.external-1-desc", typeKey: "scholarships.external-1-type" },
                  { nameKey: "scholarships.external-2-name", orgKey: "scholarships.external-2-org", descKey: "scholarships.external-2-desc", typeKey: "scholarships.external-2-type" },
                  { nameKey: "scholarships.external-3-name", orgKey: "scholarships.external-3-org", descKey: "scholarships.external-3-desc", typeKey: "scholarships.external-3-type" },
                  { nameKey: "scholarships.external-4-name", orgKey: "scholarships.external-4-org", descKey: "scholarships.external-4-desc", typeKey: "scholarships.external-4-type" },
                ].map((sch, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white dark:bg-card border border-gray-100 dark:border-white/5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{t(sch.nameKey)}</h4>
                      <Badge variant="outline" className="text-xs">{t(sch.typeKey)}</Badge>
                    </div>
                    <p className="text-xs text-emerald mb-1">{t(sch.orgKey)}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t(sch.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
