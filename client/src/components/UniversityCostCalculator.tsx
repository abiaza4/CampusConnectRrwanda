import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Calculator, GraduationCap, Home, Bus, Utensils, Wifi, ShoppingBag, DollarSign, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getUniversityTuitionRange, type University } from "@/data/universities";

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

export default function UniversityCostCalculator({ university }: { university: University }) {
  const { t } = useLanguage();
  const [costs, setCosts] = useState<Record<string, number>>(() => {
    const defaults = Object.fromEntries(categories.map((c) => [c.key, c.default]));
    const range = getUniversityTuitionRange(university);
    if (range) {
      defaults.tuition = Math.round((range.min + range.max) / 2);
    }
    return defaults;
  });

  const tuitionRange = useMemo(() => getUniversityTuitionRange(university), [university]);

  const monthlyTotal = useMemo(
    () => categories.reduce((sum, c) => sum + costs[c.key], 0),
    [costs]
  );

  const annualTotal = monthlyTotal * 12;

  const updateCost = (key: string, value: number) => {
    setCosts((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white dark:bg-card rounded-2xl p-5 border border-gray-100 dark:border-white/5 shadow-lg">
      <h3 className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2" style={{ fontFamily: "'Fraunces', serif" }}>
        <Calculator size={18} className="text-emerald" /> Cost Calculator
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        Estimate your costs at <strong className="text-navy dark:text-emerald">{university.name}</strong>.
      </p>

      {tuitionRange && (
        <div className="mb-4 p-3 rounded-xl bg-emerald/5 border border-emerald/10">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Tuition: <strong>{formatRwf(tuitionRange.min)}</strong>
            {tuitionRange.max !== tuitionRange.min ? ` – ${formatRwf(tuitionRange.max)}` : ""} / year{" "}
            (<strong>{toUsd(tuitionRange.min)}</strong>
            {tuitionRange.max !== tuitionRange.min ? ` – ${toUsd(tuitionRange.max)}` : ""} USD)
          </p>
        </div>
      )}

      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.key}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald/10 flex items-center justify-center">
                  <cat.icon className="w-3.5 h-3.5 text-emerald" />
                </div>
                <span className="text-xs font-medium text-gray-900 dark:text-white">{t(`calculator.label-${cat.key}`)}</span>
              </div>
              <div className="text-right">
                <span className="block text-xs font-bold text-navy dark:text-emerald">{formatRwf(costs[cat.key])}</span>
                <span className="block text-[10px] text-gray-400">≈ {toUsd(costs[cat.key])} USD</span>
              </div>
            </div>
            <input
              type="range"
              min={cat.min}
              max={cat.max}
              step={cat.step}
              value={costs[cat.key]}
              onChange={(e) => updateCost(cat.key, Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-emerald"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-xl bg-emerald/5 border border-emerald/10">
        <p className="text-xs text-gray-500 mb-1">{t("calculator.monthly-total")}</p>
        <p className="text-xl font-bold text-emerald">{formatRwf(monthlyTotal)}</p>
        <p className="text-sm font-semibold text-gray-500">≈ {toUsd(monthlyTotal)} USD</p>
      </div>
      <div className="mt-3 p-4 rounded-xl bg-navy/5 dark:bg-navy/20 border border-navy/10">
        <p className="text-xs text-gray-500 mb-1">{t("calculator.annual-total")}</p>
        <p className="text-xl font-bold text-navy dark:text-emerald">{formatRwf(annualTotal)}</p>
        <p className="text-sm font-semibold text-gray-500">≈ {toUsd(annualTotal)} USD</p>
      </div>

      <Link href="/cost-calculator">
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald hover:text-emerald-dark transition-colors cursor-pointer">
          Open full calculator <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </Link>
    </div>
  );
}
