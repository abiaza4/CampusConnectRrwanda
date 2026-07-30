import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { WifiOff } from "lucide-react";

export default function OfflineBanner() {
  const [offline, setOffline] = useState(!navigator.onLine);
  const { t } = useLanguage();

  useEffect(() => {
    const goOffline = () => setOffline(true);
    const goOnline = () => setOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-amber-500 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm">
      <WifiOff size={16} />
      <span>{t("offline.title")} — {t("offline.message")}</span>
    </div>
  );
}
