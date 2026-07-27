import { useState, useMemo } from "react";
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
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Funding Opportunities</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Scholarship Center
              </h1>
              <p className="text-white/70 text-lg">
                Find scholarships for studying in Rwanda — from government grants to international awards.
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
                placeholder="Search scholarships..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/30 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    typeFilter === t
                      ? "bg-navy dark:bg-emerald text-white"
                      : "bg-white dark:bg-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-emerald/30"
                  }`}
                >
                  {t}
                </button>
              ))}
              <select
                value={uniFilter}
                onChange={(e) => setUniFilter(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm bg-white dark:bg-card border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/30"
              >
                <option value="All">All Universities</option>
                {universities.map((u) => (
                  <option key={u.id} value={u.name}>{u.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Showing {filtered.length} scholarship{filtered.length !== 1 ? "s" : ""}
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
                External Scholarship Opportunities
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Rwanda Government Scholarship", org: "Ministry of Education", desc: "Full scholarships for top-performing students including tuition, accommodation, and stipend.", type: "Government" },
                  { name: "DAAD Scholarship", org: "German Academic Exchange", desc: "Scholarships for graduate programs at Rwandan universities for African students.", type: "International" },
                  { name: "Mastercard Foundation Scholars Program", org: "Mastercard Foundation", desc: "Full scholarships for undergraduate and graduate studies at partner universities.", type: "International" },
                  { name: "RCA Fellowship", org: "Rwanda Cooperation Agency", desc: "Scholarships for students from Rwanda's partner countries to study in Rwanda.", type: "Government" },
                ].map((sch, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white dark:bg-card border border-gray-100 dark:border-white/5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{sch.name}</h4>
                      <Badge variant="outline" className="text-xs">{sch.type}</Badge>
                    </div>
                    <p className="text-xs text-emerald mb-1">{sch.org}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{sch.desc}</p>
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
