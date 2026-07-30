import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import PageSEO from "@/components/PageSEO";

const teamMembers = [
  {
    name: "Abiaza Stephen",
    role: "Founder & CEO",
    bio: "Education technology entrepreneur with a passion for making higher education information accessible across East Africa.",
  },
  {
    name: "Ruotto Deng",
    role: "Head of Research",
    bio: "Leads the team that verifies and maintains all university data on the platform.",
  },
  {
    name: "Wani Henry",
    role: "Chief Technology Officer",
    bio: "Full-stack developer specializing in education platforms. Ensures the website is fast, accessible, and mobile-friendly.",
  },
  {
    name: "Deng Mayom",
    role: "Student Relations",
    bio: "International student advocate who helps connect students with universities and provides guidance on the application process.",
  },
  {
    name: "Edison Joseph",
    role: "Content Director",
    bio: "Creates guides, blog posts, and informational content for students and parents.",
  },
  {
    name: "Emmanuel Tartisio",
    role: "Design Lead",
    bio: "UX designer focused on creating intuitive, beautiful interfaces that make complex information easy to navigate.",
  },
];

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").replace(/-+/g, "-");
}

export default function Team() {
  const { t } = useLanguage();
  return (
    <div>
      <PageSEO title="Our Team — CampusConnect Rwanda" description="Meet the dedicated team behind CampusConnect Rwanda, committed to providing accurate education information." path="/team" />
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">{t("team.badge")}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("team.hero-title")}
              </h1>
              <p className="text-white/70 text-lg">
                {t("team.hero-description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:shadow-lg transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald to-navy flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-emerald font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Values */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center" style={{ fontFamily: "'Fraunces', serif" }}>
                {t("team.values-title")}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "Accuracy", desc: "Every piece of information is verified and regularly updated." },
                  { value: "Accessibility", desc: "Education information should be free and available to everyone." },
                  { value: "Integrity", desc: "We provide honest, unbiased information without favoring any institution." },
                  { value: "Innovation", desc: "We use technology to simplify the education research process." },
                ].map((v) => (
                  <div key={v.value} className="text-center">
                    <h4 className="font-semibold text-emerald text-sm mb-1">{t("team.value-" + slugify(v.value))}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t("team.value-" + slugify(v.value) + "-desc")}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
