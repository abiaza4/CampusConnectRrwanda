import { useState } from "react";
import { Link } from "wouter";
import { GraduationCap, TrendingUp, MapPin, ChevronDown, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { popularCourses } from "@/data/popularCourses";
import { findUniversitiesByAnyKeyword } from "@/data/universities";
import PageSEO from "@/components/PageSEO";

export default function PopularCourses() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <PageSEO title="Popular Courses — CampusConnect Rwanda" description="Discover the most applied-for courses in Rwanda and the universities that offer them — Computer Science, IT, Finance, Biomedical Laboratory Sciences, Mass Media and Law." path="/popular-courses" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">
                <TrendingUp className="w-3.5 h-3.5 mr-1" /> Most Applied Courses
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Courses Applied For the Most
              </h1>
              <p className="text-white/70 text-lg">
                Tap any course below to instantly see the universities in Rwanda that offer it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {popularCourses.map((course, i) => {
              const isOpen = expanded === course.name;
              const matches = findUniversitiesByAnyKeyword(course.keywords);
              return (
                <ScrollReveal key={course.name} delay={i * 0.06}>
                  <div
                    className={`bg-white dark:bg-card rounded-2xl border transition-all h-full cursor-pointer ${
                      isOpen ? "border-emerald/40 shadow-lg" : "border-gray-100 dark:border-white/5 hover:shadow-lg hover:border-emerald/30"
                    }`}
                  >
                    <div className="p-5 sm:p-6" onClick={() => setExpanded(isOpen ? null : course.name)}>
                      <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-4">
                        <course.icon className="w-6 h-6 text-emerald" />
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                            {course.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{course.details}</p>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald">
                            <Building2 className="w-3.5 h-3.5" /> {matches.length} universit{matches.length === 1 ? "y" : "ies"} offer this
                          </span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-100 dark:border-white/5">
                        {matches.length === 0 ? (
                          <p className="text-sm text-gray-500 pt-4">No universities listed for this course yet.</p>
                        ) : (
                          <ul className="pt-4 space-y-2">
                            {matches.map((uni) => (
                              <li key={uni.id}>
                                <Link href={`/university/${uni.id}`}>
                                  <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5 hover:border-emerald/30 hover:bg-emerald/5 transition-colors group">
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{uni.name}</p>
                                      <p className="text-xs text-gray-500 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {uni.city}
                                      </p>
                                    </div>
                                    <span className="text-xs font-semibold text-emerald whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                      View →
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-center text-xs text-gray-400 mt-8 px-4">
              Prefer to search manually?{" "}
              <Link href="/search">
                <span className="text-emerald font-semibold cursor-pointer">Go to the search page</span>
              </Link>{" "}
              or browse all{" "}
              <Link href="/universities">
                <span className="text-emerald font-semibold cursor-pointer">universities</span>
              </Link>.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
