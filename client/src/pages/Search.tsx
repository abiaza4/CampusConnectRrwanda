import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, MapPin, GraduationCap, Code, Monitor, DollarSign, Microscope, Radio, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { searchUniversities } from "@/data/universities";
import PageSEO from "@/components/PageSEO";

const popularCourses = [
  {
    name: "Computer Science",
    details: "Software Engineering · Networking · Data Science",
    query: "computer science",
    icon: Code,
  },
  {
    name: "Information Technology",
    details: "IT Systems · Networking · Cybersecurity",
    query: "information technology",
    icon: Monitor,
  },
  {
    name: "Finance",
    details: "Banking · Accounting · Economics",
    query: "finance",
    icon: DollarSign,
  },
  {
    name: "Biomedical Laboratory Sciences",
    details: "Medical Lab Technology · Diagnostics",
    query: "biomedical",
    icon: Microscope,
  },
  {
    name: "Mass Media & Communication",
    details: "Journalism · Broadcasting · Public Relations",
    query: "communication",
    icon: Radio,
  },
  {
    name: "Law (LLB)",
    details: "Bachelor of Laws · LLM · Legal Studies",
    query: "law",
    icon: Scale,
  },
];

export default function Search() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.split("?")[1] || "");
    const q = params.get("q");
    if (q) setQuery(q);
  }, [location]);

  const results = useMemo(() => searchUniversities(query), [query]);

  return (
    <div>
      <PageSEO title="Search — CampusConnect Rwanda" description="Search for universities, programs, scholarships, and study opportunities in Rwanda." />
      <section className="relative bg-navy/90 text-white py-12 sm:py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t("search.title")}</h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            {t("search.description")}
          </p>
          <div className="max-w-xl mx-auto relative px-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              className="w-full px-6 py-3.5 sm:py-4 pl-12 rounded-full text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm sm:text-base"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container">
          {query && (
            <p className="text-gray-600 mb-6 text-sm sm:text-base px-4">
              {results.length} {results.length === 1 ? t("search.result") : t("search.results")}
            </p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {results.map((uni) => (
              <ScrollReveal key={uni.id}>
                <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">{uni.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-3 flex-wrap">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{uni.city}</span>
                    <Badge variant="secondary" className="ml-2 text-xs">{uni.type}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{uni.description.substring(0, 150)}...</p>
                  <Link href={`/university/${uni.id}`}>
                    <Button variant="outline" size="sm">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {t("search.view_details")}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {query && results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t("search.no_results")}</p>
            </div>
          )}
          {!query && (
            <div className="text-center py-12">
              <p className="text-gray-400">{t("search.enter_query")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Most Applied Courses */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50 dark:bg-background border-t border-gray-100 dark:border-white/5">
        <div className="container">
          <div className="text-center mb-8 sm:mb-10 px-4">
            <Badge className="bg-emerald/10 text-emerald border-emerald/20 mb-3">Most Applied Courses</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Courses Applied For the Most
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Tap a course to see which universities in Rwanda offer it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {popularCourses.map((course, i) => (
              <ScrollReveal key={course.name} delay={i * 0.06}>
                <Link href={`/search?q=${encodeURIComponent(course.query)}`}>
                  <div className="bg-white dark:bg-card rounded-2xl p-5 sm:p-6 border border-gray-100 dark:border-white/5 hover:shadow-lg hover:border-emerald/30 transition-all h-full cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-4 group-hover:bg-emerald/20 transition-colors">
                      <course.icon className="w-6 h-6 text-emerald" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                      {course.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{course.details}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}