import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-deep-navy text-white">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 group">
              <img
                src="/ccr logo.jpg"
                alt="CampusConnect Rwanda"
                className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              This website was developed by <strong className="text-emerald">MEGA DEV TECH</strong>. We help with applications for all universities in Rwanda.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/UniversityofRwanda" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-emerald/30 transition-colors" aria-label="Facebook">
                <Facebook size={16} className="text-white/70" />
              </a>
              <a href="https://twitter.com/URwanda" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-emerald/30 transition-colors" aria-label="Twitter">
                <Twitter size={16} className="text-white/70" />
              </a>
              <a href="https://www.linkedin.com/school/university-of-rwanda/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-emerald/30 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} className="text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {t("footer.quick-links")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { tKey: "nav.home", href: "/" },
                { tKey: "nav.universities", href: "/universities" },
                { tKey: "nav.study-guide", href: "/study-guide" },
                { tKey: "nav.scholarships", href: "/scholarships" },
                { tKey: "nav.compare", href: "/compare" },
                { tKey: "nav.events", href: "/events" },
                { tKey: "nav.currency-converter", href: "/currency-converter" },
                { tKey: "nav.equivalence", href: "/equivalence" },
                { tKey: "nav.blog", href: "/blog" },
                { tKey: "nav.about", href: "/about" },
                { tKey: "nav.team", href: "/team" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-white/50 hover:text-emerald transition-colors">
                      {t(link.tKey)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {t("footer.our-services")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { tKey: "footer.service-equivalence", href: "/equivalence" },
                { tKey: "footer.service-visa", href: "/visa-guide" },
                { tKey: "footer.service-registration", href: null },
                { tKey: "footer.service-accommodation", href: null },
                { tKey: "footer.service-conduct", href: null },
                { tKey: "footer.service-notarization", href: null },
                { tKey: "footer.service-recommendations", href: null },
                { tKey: "footer.service-more", href: null },
              ].map((service) => (
                <li key={service.tKey}>
                  {service.href ? (
                    <Link href={service.href}>
                      <span className="text-sm text-white/50 hover:text-emerald transition-colors cursor-pointer">{t(service.tKey)}</span>
                    </Link>
                  ) : (
                    <span className="text-sm text-white/50">{t(service.tKey)}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              {t("footer.contact-us")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Musanze, Rwanda</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Juba, South Sudan</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-emerald mt-0.5 shrink-0" />
                <a href="tel:+250791902058" className="text-sm text-white/50 hover:text-emerald transition-colors">
                  +250 791 902 058
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-emerald mt-0.5 shrink-0" />
                <a href="tel:+211922257944" className="text-sm text-white/50 hover:text-emerald transition-colors">
                  +211 922 257 944
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-emerald mt-0.5 shrink-0" />
                <a href="mailto:abiazaawari@gmail.com" className="text-sm text-white/50 hover:text-emerald transition-colors">
                  abiazaawari@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-emerald mt-0.5 shrink-0" />
                <a href="mailto:campusconnectrwa@gmail.com" className="text-sm text-white/50 hover:text-emerald transition-colors">
                  campusconnectrwa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 pb-[env(safe-area-inset-bottom)]">
          <p className="text-xs text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} CampusConnect Rwanda. Developed by <strong className="text-emerald/60">MEGA DEV TECH</strong>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy">
              <span className="text-xs text-white/40 hover:text-emerald transition-colors">
                {t("footer.privacy-policy")}
              </span>
            </Link>
            <Link href="/terms-and-conditions">
              <span className="text-xs text-white/40 hover:text-emerald transition-colors">
                {t("footer.terms")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}