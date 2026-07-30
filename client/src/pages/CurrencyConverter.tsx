import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRightLeft, RefreshCw, AlertCircle } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const currencies = [
  { code: "RWF", name: "Rwandan Franc", flag: "🇷🇼" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "SSP", name: "South Sudanese Pound", flag: "🇸🇸" },
  { code: "KES", name: "Kenyan Shilling", flag: "🇰🇪" },
  { code: "UGX", name: "Ugandan Shilling", flag: "🇺🇬" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
];

const fallbackRates: Record<string, number> = {
  USD: 1335, KES: 10.3, UGX: 0.36, SSP: 2.1, EUR: 1440, RWF: 1,
};

export default function CurrencyConverter() {
  const { t, language } = useLanguage();
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("RWF");
  const [rates, setRates] = useState<Record<string, number>>(fallbackRates);
  const [loading, setLoading] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOffline = () => setOnline(false);
    const goOnline = () => setOnline(true);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  const fetchRates = useCallback(async () => {
    if (!navigator.onLine) return;
    setLoading(true);
    try {
      const base = from === "RWF" ? to : from;
      const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
      if (res.ok) {
        const data = await res.json();
        if (data.rates) {
          const newRates: Record<string, number> = { RWF: 1 };
          const rwfRate = data.rates.RWF || fallbackRates.RWF;
          for (const c of currencies) {
            if (c.code === "RWF") continue;
            if (data.rates[c.code]) {
              newRates[c.code] = 1 / data.rates[c.code];
              newRates.RWF = rwfRate;
            }
          }
          setRates((prev) => ({ ...prev, ...newRates }));
        }
      }
    } catch {
      // use cached rates
    }
    setLoading(false);
  }, [from, to]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const result = (parseFloat(amount) || 0) * (rates[to] || 1) / (rates[from] || 1);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div>
      <PageSEO title="Currency Converter — CampusConnect Rwanda" description="Convert currencies using live exchange rates. Supports offline fallback rates for when you are without internet." path="/currency-converter" />
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("currency.live-rates")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("currency.converter")}
              </h1>
              <p className="text-white/70 text-lg">
                Convert between Rwandan Franc and major currencies.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container max-w-lg mx-auto">
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              {!online && (
                <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 flex items-center gap-2 text-sm text-amber-700 dark:text-amber-400">
                  <AlertCircle size={16} />
                  <span>{t("currency.offline-rates")}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">{t("currency.amount")}</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald/30"
                  />
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">{t("currency.from")}</label>
                    <select
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald/30"
                    >
                      {currencies.map((c) => (
                        <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={swap}
                    className="p-3 rounded-xl bg-emerald/10 hover:bg-emerald/20 transition-colors mb-0.5"
                    aria-label="Swap currencies"
                  >
                    <ArrowRightLeft size={18} className="text-emerald" />
                  </button>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">{t("currency.to")}</label>
                    <select
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald/30"
                    >
                      {currencies.map((c) => (
                        <option key={c.code} value={c.code}>{c.flag} {c.code} — {c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-emerald/5 border border-emerald/10 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t("currency.result")}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                    {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {to}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    1 {from} = {(rates[to] / rates[from]).toFixed(4)} {to}
                  </p>
                </div>

                {online && (
                  <Button
                    variant="outline"
                    onClick={fetchRates}
                    disabled={loading}
                    className="w-full border-gray-200 dark:border-white/10"
                  >
                    <RefreshCw size={16} className={`mr-2 ${loading ? "animate-spin" : ""}`} />
                    {loading ? t("general.loading") : t("currency.live-rates")}
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("currency.live-rates")}
              </h3>
              <div className="space-y-2">
                {currencies.filter((c) => c.code !== "RWF").map((c) => (
                  <div key={c.code} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{c.flag} {c.code}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      1 {c.code} = {(rates.RWF / (rates[c.code] || 1)).toFixed(2)} RWF
                    </span>
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
