import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Building2,
  Award,
  Shield,
  Wallet,
  Languages,
  Globe,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Users,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { universities } from "@/data/universities";

const heroSlides = [
  {
    gradient: "from-navy via-navy-dark to-emerald-900",
    title: "Discover Rwanda's Universities with Confidence",
    subtitle: "Everything you need to know about studying in Rwanda—all in one place.",
  },
  {
    gradient: "from-deep-navy via-navy to-emerald-800",
    title: "Your Future Starts Here",
    subtitle: "From admission to graduation, we guide you every step of the way.",
  },
  {
    gradient: "from-navy-dark via-deep-navy to-emerald-900",
    title: "World-Class Education in the Heart of Africa",
    subtitle: "Explore accredited universities with modern facilities, vibrant campuses, and endless opportunities.",
  },
];

const universityCampusImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/University_of_Rwanda%2CHuye_campus_.jpg/1280px-University_of_Rwanda%2CHuye_campus_.jpg",
  "https://ulk.ac.rw/wp-content/uploads/2016/06/ULK-Kigali-Campus-Main-Mini.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/University_of_Rwanda%2C_Nyarugenge_Campus.jpg/1280px-University_of_Rwanda%2C_Nyarugenge_Campus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/University_of_Rwanda%2C_Remera_Campus.jpg/1280px-University_of_Rwanda%2C_Remera_Campus.jpg",
  "https://ulk.ac.rw/wp-content/uploads/2016/06/LOGO-ULK.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/University_of_Rwanda%2CHuye_campus_.jpg/1280px-University_of_Rwanda%2CHuye_campus_.jpg",
];

const featuredUniversities = universities.slice(0, 4);

const whyRwanda = [
  {
    icon: Award,
    title: "Quality Education",
    description: "Accredited institutions meeting international standards of academic excellence.",
    color: "text-navy",
    bg: "bg-navy/5 dark:bg-navy/20",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Rwanda ranks among the safest countries in Africa with a welcoming culture.",
    color: "text-emerald",
    bg: "bg-emerald/5 dark:bg-emerald/20",
    image: "https://images.unsplash.com/photo-1579541814924-28ee2e4a2b4e?w=600&q=80",
  },
  {
    icon: Wallet,
    title: "Affordable Tuition",
    description: "Competitive fees compared to Western universities with scholarship options.",
    color: "text-gold",
    bg: "bg-gold/5 dark:bg-gold/20",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Modern Campuses",
    description: "State-of-the-art facilities, libraries, laboratories, and technology hubs.",
    color: "text-navy",
    bg: "bg-navy/5 dark:bg-navy/20",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  },
  {
    icon: Languages,
    title: "English/French Learning",
    description: "Study in English or French with bilingual academic environments.",
    color: "text-emerald",
    bg: "bg-emerald/5 dark:bg-emerald/20",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
  },
  {
    icon: Globe,
    title: "East African Hub",
    description: "Gateway to opportunities across the East African Community region.",
    color: "text-gold",
    bg: "bg-gold/5 dark:bg-gold/20",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
  },
];

const studyProcess = [
  { step: 1, title: "Explore Universities", description: "Browse our directory of accredited Rwandan universities", icon: Search, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
  { step: 2, title: "Compare Programs", description: "Compare courses, fees, and facilities side by side", icon: BookOpen, image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { step: 3, title: "Understand Requirements", description: "Learn admission criteria and document needs", icon: GraduationCap, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" },
  { step: 4, title: "Prepare Documents", description: "Gather certificates, transcripts, and required papers", icon: Award, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
  { step: 5, title: "Contact University", description: "Reach out directly to your chosen institution", icon: Handshake, image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { step: 6, title: "Apply Directly", description: "Submit your application through the university's official process", icon: ExternalLink, image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80" },
];

const platformFeatures = [
  {
    icon: Shield,
    title: "Verified Information",
    description: "Every university profile, program, and scholarship is verified and regularly updated to ensure accuracy.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    icon: Wallet,
    title: "Free Cost Tools",
    description: "Our cost calculator and comparison tools help you plan your budget without any hidden fees or charges.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    icon: Globe,
    title: "International Ready",
    description: "Comprehensive visa guides, accommodation info, and student life details for international applicants.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
  },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [paused, setPaused] = useState(false);
  const [uniImageSlide, setUniImageSlide] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const timer = setInterval(() => {
      setUniImageSlide((prev) => (prev + 1) % universityCampusImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % platformFeatures.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[100dvh] min-h-[600px] max-h-[900px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].gradient}`}
            />
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center">
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-xl mx-auto px-4"
            >
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search university, course, city, or program..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery.trim()) {
                      setLocation(`/universities?search=${encodeURIComponent(searchQuery.trim())}`);
                    }
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 backdrop-blur-sm border-0 shadow-2xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald/50 text-sm md:text-base"
                />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-3 mt-6 px-4"
            >
              <Link href="/universities">
                <Button className="bg-emerald hover:bg-emerald-dark text-white px-6 py-3 rounded-xl font-medium text-sm shadow-lg shadow-emerald/20 transition-all">
                  Explore Universities <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/study-guide">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium text-sm">
                  Study in Rwanda Guide
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-8 bg-emerald" : "w-4 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white dark:bg-card border-b border-gray-100 dark:border-white/5">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 19, suffix: "", label: "Accredited Universities", icon: Building2 },
              { value: 200, suffix: "+", label: "Degree Programs", icon: GraduationCap },
              { value: 10, suffix: "+", label: "Cities Covered", icon: MapPin },
              { value: 60, suffix: "+", label: "Scholarships Listed", icon: Award },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-emerald" />
                  </div>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl md:text-4xl font-bold text-navy dark:text-emerald mb-1"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12 relative">
              <Badge variant="outline" className="text-emerald border-emerald/30 mb-4">
                Featured Institutions
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Explore Top Universities
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                Discover Rwanda's leading accredited institutions offering world-class education.
              </p>
              {/* Accent image behind heading */}
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                alt=""
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl opacity-30 mix-blend-multiply"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredUniversities.map((uni, i) => (
              <ScrollReveal key={uni.id} delay={i * 0.1}>
                <Link href={`/university/${uni.id}`}>
                  <div className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-white/5">
                    <div className="h-52 bg-gradient-to-br from-navy to-emerald relative overflow-hidden">
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
                        className="absolute top-4 right-4"
                        variant={uni.type === "Public" ? "default" : "secondary"}
                      >
                        {uni.type}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {uni.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <BookOpen size={12} /> {uni.faculties.length} Faculties
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap size={12} /> {uni.programs.length} Programs
                          </span>
                        </div>
                        <span className="text-sm text-emerald font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Details <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/universities">
                <Button variant="outline" className="text-navy dark:text-emerald border-navy/20 dark:border-emerald/20 hover:bg-navy/5 dark:hover:bg-emerald/5 px-8 py-3 rounded-xl font-medium">
                  View All Universities <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Rwanda */}
      <section className="py-20 md:py-24 bg-white dark:bg-card relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="text-gold border-gold/30 mb-4">
                Why Rwanda
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Why Choose Rwanda for Your Education?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Rwanda is rapidly becoming East Africa's premier education destination.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRwanda.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative p-0 rounded-2xl bg-white dark:bg-card border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Study Process */}
      <section className="py-20 md:py-24 bg-gray-50 dark:bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="text-navy border-navy/30 mb-4">
                Step by Step
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Your Study Journey
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                A clear path from exploration to enrollment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyProcess.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-card border border-gray-100 dark:border-white/5 group hover:border-emerald/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full rounded-xl object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-navy/50 rounded-xl">
                        <span className="text-sm font-bold text-white">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-navy/5 via-white to-emerald/5 dark:from-deep-navy dark:to-background relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="text-emerald border-emerald/30 mb-4">
                Why CampusConnect
              </Badge>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Built for Your Education Journey
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to research, compare, and plan your studies in Rwanda—all in one free platform.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {platformFeatures.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-0 rounded-2xl bg-white dark:bg-card border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/20 to-navy/20 flex items-center justify-center backdrop-blur-sm">
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-navy via-navy-dark to-deep-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Ready to Begin Your Education Journey?
              </h2>
              <p className="text-white/70 mb-8 text-lg">
                Explore all accredited universities, compare programs, and find the perfect fit for your future.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/universities">
                  <Button className="bg-emerald hover:bg-emerald-dark text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-emerald/20">
                    Explore Universities
                  </Button>
                </Link>
                <Link href="/study-guide">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium">
                    Read Study Guide
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}