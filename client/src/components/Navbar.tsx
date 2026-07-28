import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Study Guide", href: "/study-guide", dropdown: [
    { label: "Study Guide", href: "/study-guide" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Equivalence", href: "/equivalence" },
    { label: "Visa Guide", href: "/visa-guide" },
  ]},
  { label: "Compare", href: "/compare" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-deep-navy/90 backdrop-blur-xl shadow-lg shadow-black/5 transition-all duration-300">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-navy to-emerald p-0.5 shadow shadow-navy/20">
            <img
              src="/campusconnect logo.jpg"
              alt="CampusConnect Rwanda"
              className="h-8 w-8 rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.startsWith("/study-guide") || location === "/scholarships" || location === "/equivalence" || location === "/visa-guide"
                      ? "text-navy dark:text-emerald bg-gray-100 dark:bg-white/5"
                      : "text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-emerald hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-deep-navy rounded-xl border border-gray-100 dark:border-white/10 shadow-xl py-2">
                    {link.dropdown.map((sub) => (
                      <Link key={sub.href} href={sub.href}>
                        <span
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                            location === sub.href
                              ? "text-emerald bg-emerald/5"
                              : "text-gray-600 dark:text-gray-300 hover:text-emerald hover:bg-emerald/5"
                          }`}
                        >
                          {sub.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location === link.href
                      ? "text-navy dark:text-emerald bg-gray-100 dark:bg-white/5"
                      : "text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-emerald hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Link href="/cost-calculator">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-1.5 text-sm font-medium transition-all text-navy hover:bg-gray-100 dark:text-emerald dark:hover:bg-white/5"
            >
              Cost Calculator
            </Button>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all text-gray-500 hover:text-navy hover:bg-gray-100 dark:text-gray-400 dark:hover:text-emerald dark:hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-all text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-deep-navy/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 shadow-xl">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      location.startsWith("/study-guide") || location === "/scholarships" || location === "/equivalence" || location === "/visa-guide"
                        ? "text-navy dark:text-emerald bg-gray-50 dark:bg-white/5"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-emerald/20 pl-3">
                      {link.dropdown.map((sub) => (
                        <Link key={sub.href} href={sub.href}>
                          <span
                            className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                              location === sub.href
                                ? "text-emerald bg-emerald/5"
                                : "text-gray-600 dark:text-gray-300 hover:text-emerald"
                            }`}
                          >
                            {sub.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      location === link.href
                        ? "text-navy dark:text-emerald bg-gray-50 dark:bg-white/5"
                        : "text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-emerald hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            )}
            <Link href="/cost-calculator">
              <span className="block px-4 py-3 text-sm font-medium text-emerald hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg">
                Cost Calculator
              </span>
            </Link>
            <Link href="/faq">
              <span className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-emerald hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg">
                FAQ
              </span>
            </Link>
            <Link href="/team">
              <span className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-emerald hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg">
                Our Team
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
