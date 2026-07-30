import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const faqCategories = [
  {
    category: "General",
    questions: [
      { q: "What is CampusConnect Rwanda?", a: "CampusConnect Rwanda is a comprehensive education information portal that provides detailed, up-to-date information about all accredited universities in Rwanda. It helps students and parents make informed decisions about higher education in Rwanda." },
      { q: "Is CampusConnect Rwanda an admissions portal?", a: "No. CampusConnect Rwanda does not process applications or collect personal documents. It is purely an information platform. Students should apply directly to their chosen universities." },
      { q: "Is the information on this website verified?", a: "Yes. All information is regularly updated and verified against official university websites and the Higher Education Council (HEC) of Rwanda. We recommend confirming details directly with universities before applying." },
      { q: "Is this website free to use?", a: "Absolutely. CampusConnect Rwanda is completely free. All information, guides, and tools (cost calculator, comparison tool) are available at no cost." },
    ],
  },
  {
    category: "For International Students",
    questions: [
      { q: "Can I study in Rwanda as an international student?", a: "Yes! Rwanda welcomes international students from all countries. EAC citizens (Kenya, Uganda, Tanzania, Burundi, South Sudan) can enter visa-free. Other nationals need a student visa." },
      { q: "What language do universities teach in?", a: "Most Rwandan universities now teach primarily in English. Some institutions also offer French-medium programs. English proficiency is generally sufficient." },
      { q: "How much does it cost to study in Rwanda?", a: "Tuition varies by university and program. Public universities typically charge RWF 500,000-1,500,000 per year for local students, and $1,000-$5,000 USD for international students. Use our Cost Calculator for detailed estimates." },
      { q: "Can I get a scholarship?", a: "Yes! Rwanda offers government scholarships, university-specific scholarships, and international scholarships through organizations like DAAD and the Mastercard Foundation." },
      { q: "Is Rwanda safe for international students?", a: "Rwanda is one of the safest countries in Africa with very low crime rates. International students consistently report feeling safe and welcome." },
      { q: "What is the student visa process?", a: "See our Visa & Immigration Guide for a complete step-by-step overview. Processing typically takes 2-4 weeks." },
    ],
  },
  {
    category: "Universities & Programs",
    questions: [
      { q: "How many accredited universities are in Rwanda?", a: "Rwanda has 19+ accredited universities, including the University of Rwanda (the largest), several private universities, and specialized institutions in agriculture, technology, and health sciences." },
      { q: "What degree levels are available?", a: "Rwandan universities offer Diplomas (2-3 years), Bachelor's degrees (3-4 years), Master's degrees (2 years), and PhD programs (3-4 years)." },
      { q: "Are Rwandan degrees internationally recognized?", a: "Yes. Degrees from HEC-accredited institutions are recognized internationally. Rwanda is part of the African Qualifications Framework and several international education agreements." },
      { q: "Can I transfer credits from another university?", a: "Credit transfer depends on the receiving university's policies. Contact the university's admissions office directly to inquire about credit transfer possibilities." },
    ],
  },
  {
    category: "Practical Information",
    questions: [
      { q: "What is the cost of living in Rwanda?", a: "Rwanda is very affordable. Monthly living costs (excluding tuition) range from RWF 225,000 to RWF 540,000 ($150-$360 USD). Use our Cost Calculator for personalized estimates." },
      { q: "How do I open a bank account in Rwanda?", a: "Visit any major bank (Bank of Kigali, Ecobank, Equity Bank) with your passport, student visa, and university admission letter. Mobile money (MTN, Airtel) is also widely used." },
      { q: "What healthcare options are available for students?", a: "All residents must have health insurance. Students can enroll in Rwanda's community health insurance (Mutuelle de Sante) or obtain private insurance. Universities also have health centers on campus." },
      { q: "How is the internet connectivity?", a: "Rwanda has excellent 4G/LTE coverage. Universities provide campus Wi-Fi. Internet costs are affordable (~$10-20/month for mobile data)." },
    ],
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").replace(/-+/g, "-");
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({});

  const toggle = (category: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("faq.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("faq.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("faq.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container max-w-3xl">
          {faqCategories.map((cat) => (
            <ScrollReveal key={cat.category}>
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2" style={{ fontFamily: "'Fraunces', serif" }}>
                  <span className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center">
                    <HelpCircle size={16} className="text-emerald" />
                  </span>
                  {t("faq.category-" + slugify(cat.category))}
                </h2>
                <div className="space-y-2">
                  {cat.questions.map((item, i) => (
                    <div key={i} className="bg-white dark:bg-card rounded-xl border border-gray-100 dark:border-white/5 overflow-hidden">
                      <button
                        onClick={() => toggle(cat.category, i)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-background transition-colors"
                      >
                        <span className="font-medium text-sm text-gray-900 dark:text-white pr-4">{t("faq.q-" + slugify(item.q))}</span>
                        {openItems[cat.category] === i ? (
                          <ChevronUp size={16} className="shrink-0 text-emerald" />
                        ) : (
                          <ChevronDown size={16} className="shrink-0 text-gray-400" />
                        )}
                      </button>
                      {openItems[cat.category] === i && (
                        <div className="px-4 pb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{t("faq.a-" + slugify(item.q))}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Contact CTA */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("faq.still-questions-title")}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {t("faq.still-questions-description")}
              </p>
              <a href="mailto:info@campusconnect.rw" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald-dark text-white font-medium rounded-xl transition-all text-sm">
                {t("faq.get-in-touch")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
