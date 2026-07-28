import { useState } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Check, X, MapPin, Building2, GraduationCap, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { universities } from "@/data/universities";

export default function Compare() {
  const [selected, setSelected] = useState<string[]>([]);

  const selectedUniversities = universities.filter((u) => selected.includes(u.id));

  const toggleUniversity = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  const fields = [
    { label: "Location", key: "location" as const, icon: MapPin },
    { label: "Type", key: "type" as const, icon: Building2 },
    { label: "Founded", key: "founded" as const, icon: Building2 },
    { label: "Faculties", key: "facultiesCount" as const, icon: BookOpen },
    { label: "Programs", key: "programsCount" as const, icon: GraduationCap },
    { label: "Tuition (Local)", key: "tuitionLocal" as const, icon: Building2 },
    { label: "Hostels", key: "hostels" as const, icon: Building2 },
    { label: "Accommodation Cost", key: "accommodationCost" as const, icon: Building2 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Side by Side</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Compare Universities
              </h1>
              <p className="text-white/70 text-lg">
                Select up to 3 universities and compare them side by side to make the best decision.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          {/* University Selector */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Select Universities to Compare
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {universities.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => toggleUniversity(u.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selected.includes(u.id)
                        ? "border-emerald bg-emerald/5 ring-2 ring-emerald/20"
                        : "border-gray-200 dark:border-white/10 hover:border-emerald/30 bg-white dark:bg-card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-gray-900 dark:text-white">{u.name}</span>
                      {selected.includes(u.id) ? (
                        <Check size={16} className="text-emerald" />
                      ) : selected.length >= 3 ? (
                        <X size={16} className="text-gray-300" />
                      ) : null}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{u.location}</p>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Comparison Table */}
          {selectedUniversities.length > 0 && (
            <ScrollReveal>
              <div className="bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-white/5">
                        <th className="p-4 text-left text-sm font-semibold text-gray-500 w-[140px]">Feature</th>
                        {selectedUniversities.map((u) => (
                          <th key={u.id} className="p-4 text-center">
                            <Link href={`/university/${u.id}`}>
                              <span className="text-sm font-bold text-navy dark:text-emerald hover:underline">{u.name}</span>
                            </Link>
                            <Badge variant="outline" className="text-xs ml-2">{u.type}</Badge>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {fields.map((field) => (
                        <tr key={field.key} className="border-b border-gray-50 dark:border-white/5">
                          <td className="p-4 text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <field.icon size={14} className="text-emerald" /> {field.label}
                          </td>
                          {selectedUniversities.map((u) => (
                            <td key={u.id} className="p-4 text-center text-sm text-gray-700 dark:text-gray-300">
                              {field.key === "location" && u.location}
                              {field.key === "type" && u.type}
                              {field.key === "founded" && u.founded}
                              {field.key === "facultiesCount" && u.faculties.length}
                              {field.key === "programsCount" && u.programs.length}
                              {field.key === "tuitionLocal" && `${u.tuition.localMin} - ${u.tuition.localMax} RWF`}
                              {field.key === "hostels" && (u.accommodation.hostels ? "Available" : "Not available")}
                              {field.key === "accommodationCost" && u.accommodation.estimatedCost}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {/* Programs row */}
                      <tr className="border-b border-gray-50 dark:border-white/5">
                        <td className="p-4 text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <BookOpen size={14} className="text-emerald" /> Key Programs
                        </td>
                        {selectedUniversities.map((u) => (
                          <td key={u.id} className="p-4 text-center">
                            <div className="space-y-1">
                              {u.programs.slice(0, 3).map((p, i) => (
                                <p key={i} className="text-xs text-gray-600 dark:text-gray-400">{p.name}</p>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Scholarships row */}
                      <tr>
                        <td className="p-4 text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <GraduationCap size={14} className="text-emerald" /> Scholarships
                        </td>
                        {selectedUniversities.map((u) => (
                          <td key={u.id} className="p-4 text-center">
                            <div className="space-y-1">
                              {u.scholarships.map((s, i) => (
                                <p key={i} className="text-xs text-gray-600 dark:text-gray-400">{s.name}</p>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          )}

          {selectedUniversities.length === 0 && (
            <div className="text-center py-16">
              <ArrowLeftRight className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Select universities to compare</h3>
              <p className="text-sm text-gray-500">Choose 2-3 universities from the list above to see them side by side.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
