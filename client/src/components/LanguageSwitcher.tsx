import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/i18n/translations";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === language);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 rounded-lg transition-all text-gray-500 hover:text-emerald hover:bg-gray-100 dark:text-gray-400 dark:hover:text-emerald dark:hover:bg-white/5"
        aria-label="Switch language"
      >
        <Globe size={16} />
        <span className="text-xs font-medium hidden md:inline">{current?.native || "EN"}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white dark:bg-deep-navy rounded-xl border border-gray-100 dark:border-white/10 shadow-xl py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                language === lang.code
                  ? "text-emerald bg-emerald/5"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald hover:bg-emerald/5"
              }`}
            >
              <span className="mr-2">{lang.native}</span>
              <span className="text-xs text-gray-400">({lang.label})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
