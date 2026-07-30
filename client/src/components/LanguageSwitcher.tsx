import { useLanguage } from "@/contexts/LanguageContext";
import { languages, type Language } from "@/i18n/translations";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-emerald hover:bg-gray-100 dark:hover:text-emerald dark:hover:bg-white/5 transition-all">
      <Globe size={16} className="shrink-0" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="text-xs font-medium bg-transparent border-none outline-none cursor-pointer text-inherit appearance-none"
        aria-label="Switch language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.native}
          </option>
        ))}
      </select>
    </div>
  );
}
