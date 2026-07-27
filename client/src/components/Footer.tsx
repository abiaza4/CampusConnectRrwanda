import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-navy to-emerald p-1.5 shadow-lg shadow-navy/20">
                <img
                  src="/campusconnect logo.jpg"
                  alt="CampusConnect Rwanda"
                  className="h-12 md:h-14 w-auto rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
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
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Universities", href: "/universities" },
                { label: "Study Guide", href: "/study-guide" },
                { label: "Scholarships", href: "/scholarships" },
                { label: "Compare Programs", href: "/compare" },
                { label: "Events", href: "/events" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-white/50 hover:text-emerald transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Application for Equivalence",
                "Visa Application Assistance",
                "University Registration",
                "Accommodation Search",
                "Certificate of Good Conduct",
                "Academic Documents Notarization",
                "Course Recommendations",
                "And More...",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/50">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-emerald mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Kigali, Rwanda</span>
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
                <a href="mailto:info@campusconnect.rw" className="text-sm text-white/50 hover:text-emerald transition-colors">
                  info@campusconnect.rw
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-emerald mt-0.5 shrink-0" />
                <a href="mailto:abiazaawari@gmail.com" className="text-sm text-white/50 hover:text-emerald transition-colors">
                  abiazaawari@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} CampusConnect Rwanda. Developed by <strong className="text-emerald/60">MEGA DEV TECH</strong>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy">
              <span className="text-xs text-white/40 hover:text-emerald transition-colors">Privacy Policy</span>
            </Link>
            <Link href="/terms-and-conditions">
              <span className="text-xs text-white/40 hover:text-emerald transition-colors">Terms &amp; Conditions</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}