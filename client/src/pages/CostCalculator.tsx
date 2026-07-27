import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Calculator, GraduationCap, Home, Bus, Utensils, Wifi, ShoppingBag, DollarSign } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  { key: "tuition", label: "Tuition", icon: GraduationCap, default: 1200000, min: 450000, max: 5000000, step: 50000 },
  { key: "accommodation", label: "Accommodation", icon: Home, default: 150000, min: 0, max: 500000, step: 10000 },
  { key: "transport", label: "Transportation", icon: Bus, default: 30000, min: 0, max: 150000, step: 5000 },
  { key: "food", label: "Food & Meals", icon: Utensils, default: 100000, min: 0, max: 300000, step: 10000 },
  { key: "internet", label: "Internet & Phone", icon: Wifi, default: 20000, min: 0, max: 100000, step: 5000 },
  { key: "personal", label: "Personal Expenses", icon: ShoppingBag, default: 50000, min: 0, max: 200000, step: 10000 },
];

export default function CostCalculator() {
  const [costs, setCosts] = useState<Record<string, number>>(
    Object.fromEntries(categories.map((c) => [c.key, c.default]))
  );

  const monthlyTotal = useMemo(
    () => categories.reduce((sum, c) => sum + costs[c.key], 0),
    [costs]
  );

  const annualTotal = monthlyTotal * 12;
  const usdMonthly = Math.round(monthlyTotal / 1500);
  const usdAnnual = Math.round(annualTotal / 1500);

  const updateCost = (key: string, value: number) => {
    setCosts((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-dark via-navy to-deep-navy">
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Cost Estimator</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Cost Calculator
              </h1>
              <p className="text-white/70 text-lg">
                Estimate your monthly and annual costs of studying in Rwanda. Adjust the sliders to match your needs.
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
              {categories.map((cat) => (
                <ScrollReveal key={cat.key} delay={0.05}>
                  <div className="bg-white dark:bg-card rounded-2xl p-5 border border-gray-100 dark:border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald/10 flex items-center justify-center">
                          <cat.icon className="w-4 h-4 text-emerald" />
                        </div>
                        <span className="font-medium text-sm text-gray-900 dark:text-white">{cat.label}</span>
                      </div>
                      <span className="text-sm font-bold text-navy dark:text-emerald">
                        RWF {costs[cat.key].toLocaleString()}
                      </span>
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
                      <span>RWF {cat.min.toLocaleString()}</span>
                      <span>RWF {cat.max.toLocaleString()}</span>
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
                    <Calculator size={18} className="text-emerald" /> Your Estimate
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald/5 border border-emerald/10">
                      <p className="text-xs text-gray-500 mb-1">Monthly Total</p>
                      <p className="text-2xl font-bold text-emerald">RWF {monthlyTotal.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">~ ${usdMonthly.toLocaleString()} USD</p>
                    </div>
                    <div className="p-4 rounded-xl bg-navy/5 dark:bg-navy/20 border border-navy/10">
                      <p className="text-xs text-gray-500 mb-1">Annual Total</p>
                      <p className="text-2xl font-bold text-navy dark:text-emerald">RWF {annualTotal.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">~ ${usdAnnual.toLocaleString()} USD</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gold/5 border border-gold/20">
                      <p className="text-xs text-gray-500 mb-1">Per Semester (6 months)</p>
                      <p className="text-lg font-bold text-gold">RWF {Math.round(monthlyTotal * 6).toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Exchange rate: ~1,500 RWF = 1 USD (approximate)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Breakdown Table */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 overflow-x-auto">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Cost Breakdown Summary
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-white/5">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">Category</th>
                    <th className="text-right p-3 font-semibold text-gray-700 dark:text-gray-300">Monthly (RWF)</th>
                    <th className="text-right p-3 font-semibold text-gray-700 dark:text-gray-300 hidden md:table-cell">Annual (RWF)</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <tr key={cat.key} className="border-b border-gray-50 dark:border-white/5">
                      <td className="p-3 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <cat.icon size={14} className="text-emerald" /> {cat.label}
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
                    <td className="p-3 text-gray-900 dark:text-white">Total</td>
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
