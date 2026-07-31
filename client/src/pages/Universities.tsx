import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, MapPin, BookOpen, GraduationCap, Filter, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { universities, getAllCities } from "@/data/universities";
import PageSEO from "@/components/PageSEO";

export default function Universities() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | "Public" | "Private">("All");
  const [cityFilter, setCityFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.split("?")[1] || "");
    const querySearch = params.get("search");
    if (querySearch) {
      setSearch(querySearch);
    }
  }, [location]);

  const cities = getAllCities();

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return universities.filter((u) => {
      const matchesSearch =
        !query ||
        u.name.toLowerCase().includes(query) ||
        u.description.toLowerCase().includes(query) ||
        u.city.toLowerCase().includes(query) ||
        u.programs.some((p) => p.name.toLowerCase().includes(query)) ||
        u.faculties.some((f) => f.name.toLowerCase().includes(query));
      const matchesType = typeFilter === "All" || u.type === typeFilter;
      const matchesCity = cityFilter === "All" || u.city === cityFilter;
      return matchesSearch && matchesType && matchesCity;
    });
  }, [search, typeFilter, cityFilter]);

  return (
    <div>
      <PageSEO title="Universities — CampusConnect Rwanda" description="Explore all accredited universities in Rwanda. Search and filter by type, city, and program to find the right fit." path="/universities" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">
                {universities.length} {t("universities.accredited")}
              </Badge>
              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {t("universities.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("universities.hero-subtitle")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          {/* Search & Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("universities.search-placeholder")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/30 text-sm"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden border-gray-200 dark:border-white/10"
              >
                <Filter size={16} className="mr-2" /> {t("universities.filters")}
              </Button>
            </div>

            {/* Filter Chips */}
            <div className={`flex flex-wrap gap-3 mt-4 ${showFilters ? "block" : "hidden md:flex"}`}>
              <div className="flex gap-2">
                {(["All", "Public", "Private"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      typeFilter === type
                        ? "bg-navy dark:bg-emerald text-white"
                        : "bg-white dark:bg-card text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-emerald/30"
                    }`}
                  >
                    {t(`universities.filter-${type.toLowerCase()}`)}
                  </button>
                ))}
              </div>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm bg-white dark:bg-card border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/30"
              >
                <option value="All">{t("universities.all-cities")}</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {t("universities.showing")} {filtered.length} {t("universities.of")} {universities.length} {t("universities.universities")}
          </p>

          {/* University Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((uni, i) => (
              <ScrollReveal key={uni.id} delay={i * 0.05}>
                <Link href={`/university/${uni.id}`}>
                  <div className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-white/5">
                    <div className="h-40 bg-gradient-to-br from-navy to-emerald relative overflow-hidden">
                      {uni.images.length > 0 && (
                        <img
                          src={uni.images[0]}
                          alt={uni.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white">{uni.name}</h3>
                            <p className="text-white/70 text-sm flex items-center gap-1">
                              <MapPin size={12} /> {uni.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Badge
                        className="absolute top-3 right-3 text-xs"
                        variant={uni.type === "Public" ? "default" : "secondary"}
                      >
                        {uni.type}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {uni.description}
                      </p>
                      <div className="grid grid-cols-3 gap-3 text-center mb-4">
                        <div className="p-2 rounded-lg bg-gray-50 dark:bg-background">
                          <BookOpen size={14} className="text-emerald mx-auto mb-1" />
                          <p className="text-xs text-gray-500 dark:text-gray-400">{uni.faculties.length} {t("universities.faculties")}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-50 dark:bg-background">
                          <GraduationCap size={14} className="text-navy mx-auto mb-1" />
                          <p className="text-xs text-gray-500 dark:text-gray-400">{uni.programs.length} {t("universities.programs")}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-50 dark:bg-background">
                          <Building2 size={14} className="text-gold mx-auto mb-1" />
                          <p className="text-xs text-gray-500 dark:text-gray-400">{t("universities.est")} {uni.founded}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
                        <span className="text-xs text-gray-500">
                          {t("universities.tuition")}: {uni.tuition ? `${uni.tuition.localMin} RWF` : "N/A"}
                        </span>
                        <span className="text-sm text-emerald font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          {t("universities.learn-more")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{t("universities.no-results-title")}</h3>
              <p className="text-sm text-gray-500">{t("universities.no-results-description")}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
