import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE_URL = "https://campusconnect.rw";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function PageSEO({ title, description, path }: PageSEOProps) {
  const { language } = useLanguage();
  const fullTitle = language === "en" ? title : `${title} — CampusConnect Rwanda`;

  useEffect(() => {
    document.title = fullTitle;
    updateMeta("description", description);
    updateMeta("og:title", fullTitle);
    updateMeta("og:description", description);
    updateMeta("og:type", "website");
    updateMeta("og:url", path ? `${SITE_URL}${path}` : SITE_URL);
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    const canonical = path ? `${SITE_URL}${path}` : SITE_URL;
    let link = document.querySelector(`link[rel="canonical"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [fullTitle, description, path]);

  return null;
}

function updateMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}
