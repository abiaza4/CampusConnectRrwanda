import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Calculator, GraduationCap, Home, Bus, Utensils, Wifi, ShoppingBag, DollarSign, Building2, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import PageSEO from "@/components/PageSEO";
import { universities, getUniversityTuitionRange, type University } from "@/data/universities";

const EXCHANGE_RATE = 1475;

const categories = [
  { key: "tuition", label: "Tuition", icon: GraduationCap, default: 1200000, min: 450000, max: 5000000, step: 50000 },
  { key: "accommodation", label: "Accommodation", icon: Home, default: 150000, min: 0, max: 500000, step: 10000 },
  { key: "transport", label: "Transportation", icon: Bus, default: 30000, min: 0, max: 150000, step: 5000 },
  { key: "food", label: "Food & Meals", icon: Utensils, default: 100000, min: 0, max: 300000, step: 10000 },
  { key: "internet", label: "Internet & Phone", icon: Wifi, default: 20000, min: 0, max: 100000, step: 5000 },
  { key: "personal", label: "Personal Expenses", icon: ShoppingBag, default: 50000, min: 0, max: 200000, step: 10000 },
];

const formatRwf = (n: number) => "RWF " + n.toLocaleString();
const toUsd = (n: number) => "$" + Math.round(n / EXCHANGE_RATE).toLocaleString();

export default function CostCalculator() {
  const { t } = useLanguage();
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [costs, setCosts] = useState<Record<string, number>>(
    Object.fromEntries(categories.map((c) => [c.key, c.default]))
  );

  const tuitionRange = useMemo(
    () => getUniversityTuitionRange(selectedUniversity),
    [selectedUniversity]
  );

  const monthlyTotal = useMemo(
    () => categories.reduce((sum, c) => sum + costs[c.key], 0),
    [costs]
  );

  const annualTotal = monthlyTotal * 12;

  const updateCost = (key: string, value: number) => {
    setCosts((prev) => ({ ...prev, [key]: value }));
  };

  const handleUniversityChange = (id: string) => {
    const uni = universities.find((u) => u.id === id) || null;
    setSelectedUniversity(uni);
    const range = getUniversityTuitionRange(uni);
    if (range) {
      const mid = Math.round((range.min + range.max) / 2);
      const tuitionCat = categories[0];
      updateCost("tuition", Math.max(tuitionCat.min, Math.min(tuitionCat.max, mid)));
    }
  };

  return (
    <div>
      <PageSEO title="Cost Calculator — CampusConnect Rwanda" description="Estimate living costs for studying in Rwanda with our interactive cost calculator. Breakdown by category with RWF/USD conversion." path="/cost-calculator" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-dark via-navy to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("calculator.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("calculator.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("calculator.hero-subtitle")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8">
            {/* Sliders */}
            <div className="space-y-4">
              <ScrollReveal delay={0.05}>
                <div className="bg-white dark:bg-card rounded-2xl p-5 border border-gray-100 dark:border-white/5">
                  <label className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-emerald" />
                    </div>
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      Select your university
                    </span>
                  </label>
                  <select
                    value={selectedUniversity?.id ?? ""}
                    onChange={(e) => handleUniversityChange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald/50"
                  >
                    <option value="">General estimate (no specific university)</option>
                    {universities.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                  {selectedUniversity && tuitionRange && (
                    <div className="mt-3 p-3 rounded-xl bg-emerald/5 border border-emerald/10 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        <strong>{selectedUniversity.name}</strong>: annual tuition of approximately{" "}
                        {formatRwf(tuitionRange.min)}
                        {tuitionRange.max !== tuitionRange.min
                          ? ` – ${formatRwf(tuitionRange.max)}`
                          : ""}{" "}
                        (<strong>{toUsd(tuitionRange.min)}</strong>
                        {tuitionRange.max !== tuitionRange.min
                          ? ` – ${toUsd(tuitionRange.max)}`
                          : ""}{" "}
                        USD). The tuition slider below is prefilled to this range.
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
              {categories.map((cat) => (
                <ScrollReveal key={cat.key} delay={0.05}>
                  <div className="bg-white dark:bg-card rounded-2xl p-5 border border-gray-100 dark:border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald/10 flex items-center justify-center">
                          <cat.icon className="w-4 h-4 text-emerald" />
                        </div>
                        <span className="font-medium text-sm text-gray-900 dark:text-white">{t(`calculator.label-${cat.key}`)}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-navy dark:text-emerald">
                          {formatRwf(costs[cat.key])}
                        </span>
                        <span className="block text-xs text-gray-400">≈ {toUsd(costs[cat.key])} USD</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={cat.min}
                      max={cat.max}
                      step={cat.step}
                      value={costs[cat.key]}
                      onChange={(e) => updateCost(cat.key, Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-emerald"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{formatRwf(cat.min)}</span>
                      <span>{formatRwf(cat.max)}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Summary Card */}
            <ScrollReveal delay={0.2}>
              <div className="sticky top-24">
                <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-lg">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2" style={{ fontFamily: "'Fraunces', serif" }}>
                    <Calculator size={18} className="text-emerald" /> {t("calculator.summary-title")}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald/5 border border-emerald/10">
                      <p className="text-xs text-gray-500 mb-1">{t("calculator.monthly-total")}</p>
                      <p className="text-2xl font-bold text-emerald">{formatRwf(monthlyTotal)}</p>
                      <p className="text-sm font-semibold text-gray-500">≈ {toUsd(monthlyTotal)} USD</p>
                    </div>
                    <div className="p-4 rounded-xl bg-navy/5 dark:bg-navy/20 border border-navy/10">
                      <p className="text-xs text-gray-500 mb-1">{t("calculator.annual-total")}</p>
                      <p className="text-2xl font-bold text-navy dark:text-emerald">{formatRwf(annualTotal)}</p>
                      <p className="text-sm font-semibold text-gray-500">≈ {toUsd(annualTotal)} USD</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gold/5 border border-gold/20">
                      <p className="text-xs text-gray-500 mb-1">{t("calculator.per-semester")}</p>
                      <p className="text-lg font-bold text-gold">{formatRwf(Math.round(monthlyTotal * 6))}</p>
                      <p className="text-sm font-semibold text-gray-500">≈ {toUsd(Math.round(monthlyTotal * 6))} USD</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-gray-50 dark:bg-background flex items-center justify-center gap-2">
                    <DollarSign size={16} className="text-emerald" />
                    <p className="text-xs text-gray-500">
                      {t("calculator.exchange-rate")}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Breakdown Table */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 overflow-x-auto">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("calculator.breakdown-title")}
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-white/5">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">{t("calculator.table-category")}</th>
                    <th className="text-right p-3 font-semibold text-gray-700 dark:text-gray-300">{t("calculator.table-monthly")}</th>
                    <th className="text-right p-3 font-semibold text-gray-700 dark:text-gray-300 hidden md:table-cell">{t("calculator.table-annual")}</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <tr key={cat.key} className="border-b border-gray-50 dark:border-white/5">
                      <td className="p-3 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <cat.icon size={14} className="text-emerald" /> {t(`calculator.label-${cat.key}`)}
                      </td>
                      <td className="p-3 text-right font-medium text-gray-900 dark:text-white">
                        {costs[cat.key].toLocaleString()}
                      </td>
                      <td className="p-3 text-right text-gray-500 hidden md:table-cell">
                        {(costs[cat.key] * 12).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-gray-50 dark:bg-background">
                    <td className="p-3 text-gray-900 dark:text-white">{t("calculator.table-total")}</td>
                    <td className="p-3 text-right text-emerald">{monthlyTotal.toLocaleString()}</td>
                    <td className="p-3 text-right text-emerald hidden md:table-cell">{annualTotal.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
