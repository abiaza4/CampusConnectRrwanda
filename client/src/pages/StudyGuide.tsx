import {
  GraduationCap,
  Calendar,
  DollarSign,
  Landmark,
  Bus,
  Shield,
  Wifi,
  Cloud,
  Languages,
  Heart,
  Users,
  Phone,
  Building2,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

const guideSections = [
  {
    id: "why-rwanda",
    icon: GraduationCap,
    title: "Why Study in Rwanda",
    content: "Rwanda has rapidly transformed into one of Africa's leading education destinations. With government investments in higher education, modern campus facilities, and a commitment to English-medium instruction, Rwanda offers an exceptional educational environment. The country ranks among the safest in Africa, has a growing economy, and provides a welcoming atmosphere for international students from across the continent and beyond.",
  },
  {
    id: "education-system",
    icon: BookOpen,
    title: "Education System",
    content: "Rwanda's higher education system follows a semester-based academic calendar with two semesters per year. Universities offer programs at Diploma, Bachelor's, Master's, and PhD levels. The system is overseen by the Higher Education Council (HEC) which ensures quality standards across all accredited institutions. Most programs are offered in English, with some institutions also offering French-medium programs.",
  },
  {
    id: "academic-calendar",
    icon: Calendar,
    title: "Academic Calendar",
    content: "The academic year typically runs from September to July. Semester 1: September to January. Semester 2: February to June. Examinations are held at the end of each semester. Some universities offer January intakes for certain programs. International students should apply at least 3-4 months before the intended start date.",
  },
  {
    id: "cost-of-living",
    icon: DollarSign,
    title: "Cost of Living",
    content: "Rwanda offers an affordable cost of living compared to many African capitals. Monthly estimates: Accommodation (RWF 80,000-250,000), Food (RWF 80,000-150,000), Transport (RWF 20,000-50,000), Internet (RWF 15,000-30,000), Personal expenses (RWF 30,000-60,000). Total estimated monthly: RWF 225,000-540,000 (approximately $150-$360 USD).",
  },
  {
    id: "currency",
    icon: Landmark,
    title: "Currency & Banking",
    content: "The official currency is the Rwandan Franc (RWF). USD is widely accepted. Major banks include Bank of Kigali, Ecobank, Equity Bank, and I&M Bank. ATMs are available throughout Kigali and major towns. International students should open a bank account upon arrival for convenience. Mobile money (MTN and Airtel Money) is widely used.",
  },
  {
    id: "transportation",
    icon: Bus,
    title: "Transportation",
    content: "Kigali has a well-organized public transport system with buses covering the city. Moto-taxis (motorcycle taxis) are popular for shorter trips. Private taxis and ride-hailing apps (Yego, Move) are available. Intercity buses connect all provinces. The cost of living for transportation is very affordable.",
  },
  {
    id: "health-insurance",
    icon: Heart,
    title: "Health Insurance",
    content: "All residents must have health insurance. Rwanda has a community-based health insurance scheme (Mutuelle de Sante). International students should arrange private health insurance that covers their stay. Many universities have health centers on campus. Quality medical care is available in Kigali.",
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Security",
    content: "Rwanda is one of the safest countries in Africa with low crime rates. The government maintains strong security measures. Emergency services are responsive. International students generally feel safe walking in Kigali even at night. It's advisable to register with your embassy upon arrival.",
  },
  {
    id: "internet",
    icon: Wifi,
    title: "Internet & Connectivity",
    content: "Rwanda has excellent internet infrastructure with 4G/LTE coverage across major areas. Universities provide campus Wi-Fi. Mobile internet is affordable. MTN and Airtel are the main telecom providers. Fiber optic internet is available in urban areas. Rwanda aims to be a digital hub for Africa.",
  },
  {
    id: "climate",
    icon: Cloud,
    title: "Climate",
    content: "Rwanda has a temperate tropical highland climate with average temperatures of 17-25°C. Two rainy seasons: March-May and September-November. Dry seasons: June-August and December-February. The climate is comfortable year-round. Kigali is known as 'the land of a thousand hills' for its beautiful green landscape.",
  },
  {
    id: "language",
    icon: Languages,
    title: "Language",
    content: "English and French are the official languages of instruction in higher education. Kinyarwanda is the national language. Swahili is also widely understood. Most university programs are conducted in English. International students from English-speaking countries will find it easy to communicate.",
  },
  {
    id: "culture",
    icon: Users,
    title: "Culture & Student Life",
    content: "Rwanda has a rich cultural heritage with traditions of community (Umuganda - community work), music, dance, and hospitality. University campuses offer vibrant student life with clubs, sports, cultural events, and innovation hubs. International students quickly integrate into the friendly Rwandan community.",
  },
  {
    id: "emergency",
    icon: Phone,
    title: "Emergency Contacts",
    content: "Emergency numbers: Police (112), Ambulance (912), Fire (912). Rwanda National Police: +250 788 300 000. Rwanda Biomedical Centre: +250 788 311 033. Kigali Central Hospital. Most embassies have emergency hotlines. Universities also have security and medical support available 24/7.",
  },
  {
    id: "government-offices",
    icon: Building2,
    title: "Useful Government Offices",
    content: "Higher Education Council (HEC): Oversees university accreditation. Rwanda Immigration: +250 788 311 033. Rwanda Revenue Authority (RRA): Tax and customs. One Stop Centers: Business registration and permits. These offices help international students with administrative requirements.",
  },
];

const faqs = [
  { q: "Can I study in Rwanda if I don't speak French?", a: "Yes! Most universities now teach primarily in English. French is no longer a requirement for most programs." },
  { q: "How long does it take to get a student visa?", a: "Processing typically takes 2-4 weeks. Apply through the nearest Rwandan embassy or online through the Rwanda Immigration website." },
  { q: "Are there scholarships for international students?", a: "Yes! Both government scholarships (through Rwanda Cooperation Agency) and university-specific scholarships are available for international students." },
  { q: "Is Rwanda safe for international students?", a: "Rwanda is consistently ranked as one of the safest countries in Africa with very low crime rates and excellent security measures." },
  { q: "What is the best time to apply?", a: "Apply at least 3-4 months before the September intake. Some universities also have January intakes for select programs." },
  { q: "Can I work while studying in Rwanda?", a: "International students can work part-time with permission from their university and the relevant authorities. Some universities offer on-campus work opportunities." },
];

export default function StudyGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-dark via-navy to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Complete Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Study in Rwanda Guide
              </h1>
              <p className="text-white/70 text-lg">
                Everything you need to know about living and studying in Rwanda — from cost of living to culture.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-white/5 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Guide Sections</h4>
                <nav className="space-y-1">
                  {guideSections.map((s) => (
                    <a key={s.id} href={`#${s.id}`} className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald hover:bg-emerald/5 rounded-lg transition-colors">
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-8">
              {guideSections.map((section, i) => (
                <ScrollReveal key={section.id} delay={i * 0.03}>
                  <div id={section.id} className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 scroll-mt-24">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                        <section.icon className="w-5 h-5 text-emerald" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                          {section.title}
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* FAQ Section */}
              <ScrollReveal>
                <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-background transition-colors"
                        >
                          <span className="font-medium text-sm text-gray-900 dark:text-white pr-4">{faq.q}</span>
                          {openFaq === i ? <ChevronUp size={16} className="shrink-0 text-emerald" /> : <ChevronDown size={16} className="shrink-0 text-gray-400" />}
                        </button>
                        {openFaq === i && (
                          <div className="px-4 pb-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
