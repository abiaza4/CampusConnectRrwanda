import { Link } from "wouter";
import { GraduationCap, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { popularCourses } from "@/data/popularCourses";
import PageSEO from "@/components/PageSEO";

export default function PopularCourses() {
  return (
    <div>
      <PageSEO title="Popular Courses — CampusConnect Rwanda" description="Discover the most applied-for courses in Rwanda, including Computer Science, IT, Finance, Biomedical Laboratory Sciences, Mass Media and Law." path="/popular-courses" />
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
                Explore the most in-demand courses across Rwandan universities. Tap a course to find every university that offers it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
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
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">{course.details}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald">
                      <GraduationCap className="w-3.5 h-3.5" /> Find universities
                    </span>
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
