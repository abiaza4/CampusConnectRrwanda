import { useParams, Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  Building2,
  BookOpen,
  GraduationCap,
  Home,
  Wifi,
  Heart,
  Trophy,
  FlaskConical,
  Users,
  Library,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  Clock,
  DollarSign,
  Info,
  FileText,
  Gift,
  Briefcase,
  Image,
  HelpCircle,
  Download,
  Star,
  Quote,
  Check,
  Link as LinkIcon,
  ChevronDown,
  Award,
  Target,
  MessageCircle,
  Calendar,
  Bookmark,
  Landmark,
  Bus,
  Stethoscope,
  ShoppingBag,
  UtensilsCrossed,
  Camera,
  ChevronLeft,
  ChevronUp,
  Maximize2,
  X,
  Shield,
  Lightbulb,
  Search,
  Menu,
  List,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ScrollReveal from "@/components/ScrollReveal";
import { getUniversityById } from "@/data/universities";
import { universityImages } from "@/data/images";

const tabDefinitions = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "academics", label: "Academics", icon: BookOpen },
  { id: "admission", label: "Admission", icon: FileText },
  { id: "tuition", label: "Tuition & Costs", icon: DollarSign },
  { id: "scholarships", label: "Scholarships", icon: Gift },
  { id: "international", label: "International", icon: Globe },
  { id: "accommodation", label: "Accommodation", icon: Home },
  { id: "student-life", label: "Student Life", icon: Users },
  { id: "facilities", label: "Facilities", icon: Library },
  { id: "career", label: "Career", icon: Briefcase },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "rankings", label: "Rankings", icon: Trophy },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "downloads", label: "Downloads", icon: Download },
  { id: "nearby", label: "Nearby Places", icon: MapPin },
  { id: "reviews", label: "Reviews", icon: Star },
];

const nearbyIcons: Record<string, any> = {
  Healthcare: Stethoscope,
  Shopping: ShoppingBag,
  Transport: Bus,
  Food: UtensilsCrossed,
  Bank: Landmark,
  Tourism: Camera,
  Convention: Building2,
  Sports: Trophy,
};

function SectionCard({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <ScrollReveal>
      <div className={`bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 ${className}`}>
        {title && (
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            {title}
          </h3>
        )}
        {children}
      </div>
    </ScrollReveal>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2" style={{ fontFamily: "'Fraunces', serif" }}>
      <Icon className="w-5 h-5 text-emerald" />
      {title}
    </h3>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string | React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-4 h-4 text-emerald" />
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function LineItem({ icon: Icon, text }: { icon?: any; text: string }) {
  return (
    <div className="flex items-start gap-2 py-1.5">
      {Icon && <Icon className="w-4 h-4 text-emerald shrink-0 mt-0.5" />}
      {!Icon && <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0 mt-2" />}
      <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
    </div>
  );
}

function BadgeList({ items, color = "emerald" }: { items: string[]; color?: string }) {
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald/10 text-emerald border-emerald/20",
    navy: "bg-navy/10 text-navy border-navy/20",
    gold: "bg-gold/10 text-gold border-gold/20",
  };
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span key={i} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorMap[color] || colorMap.emerald}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProgramCards({ programs }: { programs: { name: string; duration: string; description: string }[] }) {
  if (!programs || programs.length === 0) return <p className="text-sm text-gray-400 italic">No programs listed</p>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {programs.map((p, i) => (
        <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
          <p className="font-medium text-sm text-gray-900 dark:text-white">{p.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">{p.duration}</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function UniversityProfile() {
  const { id } = useParams<{ id: string }>();
  const university = getUniversityById(id || "");
  const [activeTab, setActiveTab] = useState("overview");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (!university) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="container py-12 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald/10 to-navy/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-emerald" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
            University Not Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            We couldn't find the university you're looking for. Browse our directory to discover all accredited institutions in Rwanda.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/universities">
              <Button className="bg-emerald hover:bg-emerald-dark text-white px-6 py-3 rounded-xl font-medium">
                Browse All Universities
              </Button>
            </Link>
            <Link href="/study-guide">
              <Button variant="outline" className="border-gray-200 dark:border-white/10 px-6 py-3 rounded-xl font-medium">
                Study Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const uni = university;

  const heroImages =
    uni.images.length > 0
      ? uni.images
      : universityImages.campus.slice(0, 4);

  const galleryItems = uni.gallery.length > 0
    ? uni.gallery
    : heroImages.map((img: string) => ({ image: img, caption: `${uni.name} Campus` }));

  const sm = uni.socialMedia;
  const hasSocial = sm.facebook || sm.twitter || sm.instagram || sm.linkedin || sm.youtube;

  function renderSection() {
    const s = activeTab;
    switch (s) {
      case "overview": return <OverviewSection uni={uni} />;
      case "academics": return <AcademicsSection uni={uni} />;
      case "admission": return <AdmissionSection uni={uni} />;
      case "tuition": return <TuitionSection uni={uni} />;
      case "scholarships": return <ScholarshipsSection uni={uni} />;
      case "international": return <InternationalSection uni={uni} />;
      case "accommodation": return <AccommodationSection uni={uni} />;
      case "student-life": return <StudentLifeSection uni={uni} />;
      case "facilities": return <FacilitiesSection uni={uni} />;
      case "career": return <CareerSection uni={uni} />;
      case "research": return <ResearchSection uni={uni} />;
      case "gallery": return <GallerySection uni={uni} />;
      case "rankings": return <RankingsSection uni={uni} />;
      case "faq": return <FAQSection uni={uni} />;
      case "downloads": return <DownloadsSection uni={uni} />;
      case "nearby": return <NearbySection uni={uni} />;
      case "reviews": return <ReviewsSection uni={uni} />;
      default: return <OverviewSection uni={uni} />;
    }
  }

  function OverviewSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const o = uni.overview;
    return (
      <div className="space-y-6">
        <SectionCard title="History">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{o.history}</p>
        </SectionCard>

        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="Mission">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{o.mission}</p>
          </SectionCard>
          <SectionCard title="Vision">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{o.vision}</p>
          </SectionCard>
        </div>

        {o.coreValues && o.coreValues.length > 0 && (
          <SectionCard title="Core Values">
            <div className="flex flex-wrap gap-2">
              {o.coreValues.map((v: string, i: number) => (
                <Badge key={i} variant="outline" className="bg-emerald/5 border-emerald/20 text-emerald text-xs px-3 py-1.5">
                  <Check className="w-3 h-3 mr-1" />
                  {v}
                </Badge>
              ))}
            </div>
          </SectionCard>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {o.chancellor && (
            <SectionCard title="Chancellor">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-navy" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white">{o.chancellor}</p>
              </div>
            </SectionCard>
          )}
          {o.viceChancellor && (
            <SectionCard title="Vice Chancellor">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-navy" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white">{o.viceChancellor}</p>
              </div>
            </SectionCard>
          )}
        </div>

        {o.campusDescription && (
          <SectionCard title="Campus">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{o.campusDescription}</p>
          </SectionCard>
        )}
      </div>
    );
  }

  function AcademicsSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const ac = uni.academicInfo;
    return (
      <div className="space-y-6">
        {ac.schools && ac.schools.length > 0 && (
          <SectionCard title="Schools / Faculties">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ac.schools.map((s: any, i: number) => (
                <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-emerald/5 to-emerald/10 border border-emerald/10">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{s.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {ac.departments && ac.departments.length > 0 && (
          <SectionCard title="Departments">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-white/10">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">Department</th>
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 hidden sm:table-cell">School</th>
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300 hidden md:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {ac.departments.map((d: any, i: number) => (
                    <tr key={i} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-background transition-colors">
                      <td className="p-3 font-medium text-gray-900 dark:text-white">{d.name}</td>
                      <td className="p-3 text-gray-500 hidden sm:table-cell">{d.school}</td>
                      <td className="p-3 text-gray-500 hidden md:table-cell">{d.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}

        <SectionCard title="Undergraduate Programs">
          <ProgramCards programs={ac.undergraduatePrograms} />
        </SectionCard>

        <SectionCard title="Postgraduate Programs">
          <ProgramCards programs={ac.postgraduatePrograms} />
        </SectionCard>

        {ac.phdPrograms && ac.phdPrograms.length > 0 && (
          <SectionCard title="PhD Programs">
            <ProgramCards programs={ac.phdPrograms} />
          </SectionCard>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {ac.diplomaPrograms && ac.diplomaPrograms.length > 0 && (
            <SectionCard title="Diploma Programs">
              <ProgramCards programs={ac.diplomaPrograms} />
            </SectionCard>
          )}
          {ac.certificatePrograms && ac.certificatePrograms.length > 0 && (
            <SectionCard title="Certificate Programs">
              <ProgramCards programs={ac.certificatePrograms} />
            </SectionCard>
          )}
        </div>

        {ac.modeOfStudy && ac.modeOfStudy.length > 0 && (
          <SectionCard title="Mode of Study">
            <BadgeList items={ac.modeOfStudy} color="navy" />
          </SectionCard>
        )}
      </div>
    );
  }

  function AdmissionSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const ad = uni.admission;
    return (
      <div className="space-y-6">
        {ad.requirements && ad.requirements.length > 0 && (
          <SectionCard title="General Requirements">
            <ul className="space-y-2">
              {ad.requirements.map((r: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-5 h-5 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        {ad.entryQualifications && ad.entryQualifications.length > 0 && (
          <SectionCard title="Entry Qualifications">
            <ul className="space-y-2">
              {ad.entryQualifications.map((q: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bookmark className="w-3 h-3 text-navy" />
                  </span>
                  {q}
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        {ad.requiredDocuments && ad.requiredDocuments.length > 0 && (
          <SectionCard title="Required Documents">
            <div className="grid sm:grid-cols-2 gap-2">
              {ad.requiredDocuments.map((d: string, i: number) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-background">
                  <FileText className="w-4 h-4 text-emerald shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{d}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {ad.internationalRequirements && ad.internationalRequirements.length > 0 && (
          <SectionCard title="International Students Requirements">
            <ul className="space-y-2">
              {ad.internationalRequirements.map((ir: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Globe className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {ir}
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {ad.applicationDeadlines && (
            <SectionCard title="Application Deadlines">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400">{ad.applicationDeadlines}</p>
              </div>
            </SectionCard>
          )}
          {ad.intakePeriods && ad.intakePeriods.length > 0 && (
            <SectionCard title="Intake Periods">
              <BadgeList items={ad.intakePeriods} color="gold" />
            </SectionCard>
          )}
        </div>

        {ad.howToApply && (
          <SectionCard title="How to Apply">
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{ad.howToApply}</p>
            </div>
          </SectionCard>
        )}

        {ad.applicationFees && (
          <SectionCard title="Application Fees">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-400">{ad.applicationFees}</p>
            </div>
          </SectionCard>
        )}

        <div className="p-4 rounded-xl bg-gold/5 border border-gold/20">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-gold">Important:</strong> Applicants should always confirm the latest requirements directly with the university before applying. Requirements may change based on the academic year and program.
          </p>
        </div>
      </div>
    );
  }

  function TuitionSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const t = uni.tuition;
    const td = uni.tuitionDetails;
    return (
      <div className="space-y-6">
        <SectionCard title="Tuition Overview">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-emerald/5 border border-emerald/10">
              <p className="text-xs font-medium text-emerald uppercase tracking-wider mb-1">Local Students</p>
              <p className="text-3xl font-bold text-navy dark:text-emerald">
                {t.localMin} - {t.localMax}
              </p>
              <p className="text-sm text-gray-500 mt-1">RWF per year</p>
            </div>
            <div className="p-5 rounded-xl bg-navy/5 border border-navy/10">
              <p className="text-xs font-medium text-navy uppercase tracking-wider mb-1">International Students</p>
              <p className="text-3xl font-bold text-navy dark:text-emerald">
                ${t.internationalMin} - ${t.internationalMax}
              </p>
              <p className="text-sm text-gray-500 mt-1">USD per year</p>
            </div>
          </div>
        </SectionCard>

        {td && td.length > 0 && (
          <SectionCard title="Detailed Tuition Breakdown">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-white/10">
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">Program</th>
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">Level</th>
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">Local (RWF)</th>
                    <th className="text-left p-3 font-semibold text-gray-700 dark:text-gray-300">International (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {td.map((d: any, i: number) => (
                    <tr key={i} className="border-b border-gray-50 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-background transition-colors">
                      <td className="p-3 font-medium text-gray-900 dark:text-white">{d.program}</td>
                      <td className="p-3">
                        <Badge variant="outline" className="text-xs">{d.level}</Badge>
                      </td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">{d.localAmount}</td>
                      <td className="p-3 text-gray-600 dark:text-gray-400">{d.internationalAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        )}

        {t.currency && (
          <SectionCard title="Currency Information">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tuition fees are charged in <strong>{t.currency}</strong> depending on student category.
            </p>
          </SectionCard>
        )}
      </div>
    );
  }

  function ScholarshipsSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const sc = uni.scholarships;
    const typeColors: Record<string, string> = {
      Government: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      University: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
      NGO: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
      International: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
      Private: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
    };
    return (
      <div className="space-y-4">
        {sc.length === 0 ? (
          <SectionCard title="Scholarships">
            <p className="text-sm text-gray-500 dark:text-gray-400">No scholarship information available at this time.</p>
          </SectionCard>
        ) : (
          sc.map((s: any, i: number) => (
            <SectionCard key={i}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{s.name}</h4>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 ${typeColors[s.type] || "bg-gray-100 text-gray-800"}`}>
                      {s.type}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{s.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {s.amount && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <DollarSign className="w-3.5 h-3.5 text-emerald shrink-0" />
                    <span><strong className="text-gray-700 dark:text-gray-300">Amount:</strong> {s.amount}</span>
                  </div>
                )}
                {s.eligibility && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Users className="w-3.5 h-3.5 text-navy shrink-0" />
                    <span><strong className="text-gray-700 dark:text-gray-300">Eligibility:</strong> {s.eligibility}</span>
                  </div>
                )}
                {s.deadline && (
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span><strong className="text-gray-700 dark:text-gray-300">Deadline:</strong> {s.deadline}</span>
                  </div>
                )}
              </div>
            </SectionCard>
          ))
        )}
      </div>
    );
  }

  function InternationalSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const ist = uni.internationalStudent;
    return (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <SectionCard title="Welcome Guide">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${ist.welcomeGuide ? "bg-emerald/10" : "bg-gray-100 dark:bg-background"} flex items-center justify-center`}>
                <Globe className={`w-6 h-6 ${ist.welcomeGuide ? "text-emerald" : "text-gray-400"}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {ist.welcomeGuide ? "Welcome guide available" : "Welcome guide not available"}
                </p>
                <p className="text-xs text-gray-500">
                  {ist.welcomeGuide ? "International students receive a comprehensive welcome guide" : "Contact the university for orientation details"}
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Orientation Week">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${ist.orientationWeek ? "bg-gold/10" : "bg-gray-100 dark:bg-background"} flex items-center justify-center`}>
                <Calendar className={`w-6 h-6 ${ist.orientationWeek ? "text-gold" : "text-gray-400"}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {ist.orientationWeek ? "Orientation week offered" : "No orientation week"}
                </p>
                <p className="text-xs text-gray-500">
                  {ist.orientationWeek ? "Dedicated orientation program for new international students" : "Contact the international office for support"}
                </p>
              </div>
            </div>
          </SectionCard>
        </div>

        {ist.internationalAdmissions && (
          <SectionCard title="International Admissions">
            <InfoRow icon={GraduationCap} label="Admissions" value={ist.internationalAdmissions} />
          </SectionCard>
        )}

        {ist.equivalenceGuidance && (
          <SectionCard title="Equivalence Guidance">
            <InfoRow icon={Shield} label="Qualification Equivalence" value={ist.equivalenceGuidance} />
          </SectionCard>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {ist.visaInfo && (
            <SectionCard title="Visa Information">
              <InfoRow icon={FileText} label="Student Visa" value={ist.visaInfo} />
            </SectionCard>
          )}
          {ist.residencePermit && (
            <SectionCard title="Residence Permit">
              <InfoRow icon={Shield} label="Residence" value={ist.residencePermit} />
            </SectionCard>
          )}
          {ist.airportArrival && (
            <SectionCard title="Airport Arrival">
              <InfoRow icon={Bus} label="Airport Pickup" value={ist.airportArrival} />
            </SectionCard>
          )}
          {ist.languageSupport && (
            <SectionCard title="Language Support">
              <InfoRow icon={BookOpen} label="Language" value={ist.languageSupport} />
            </SectionCard>
          )}
        </div>

        {ist.exchangePrograms && ist.exchangePrograms.length > 0 && (
          <SectionCard title="Exchange Programs">
            <ul className="space-y-2">
              {ist.exchangePrograms.map((ep: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Globe className="w-4 h-4 text-emerald shrink-0" />
                  {ep}
                </li>
              ))}
            </ul>
          </SectionCard>
        )}
      </div>
    );
  }

  function AccommodationSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const acc = uni.accommodation;
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <SectionCard>
            <SectionTitle icon={Home} title="On-Campus Hostels" />
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${acc.hostels ? "bg-emerald/10" : "bg-red-50 dark:bg-red-900/10"} flex items-center justify-center`}>
                <Home className={`w-5 h-5 ${acc.hostels ? "text-emerald" : "text-red-400"}`} />
              </div>
              <span className={`text-sm font-medium ${acc.hostels ? "text-emerald" : "text-red-500"}`}>
                {acc.hostels ? "Available" : "Not Available"}
              </span>
            </div>
            {acc.onCampusHostels && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{acc.onCampusHostels}</p>
            )}
          </SectionCard>

          <SectionCard>
            <SectionTitle icon={Building2} title="Off-Campus" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{acc.nearbyApartments || "Information not available"}</p>
          </SectionCard>

          <SectionCard>
            <SectionTitle icon={Home} title="Private Hostels" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{acc.privateHostels || "Information not available"}</p>
          </SectionCard>
        </div>

        {acc.estimatedCost && (
          <SectionCard title="Estimated Costs">
            <div className="p-4 rounded-xl bg-emerald/5 border border-emerald/20">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-emerald" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Estimated Monthly Cost</p>
                  <p className="text-lg font-bold text-emerald">{acc.estimatedCost}</p>
                </div>
              </div>
            </div>
          </SectionCard>
        )}

        {acc.accommodationOffice && (
          <SectionCard title="Accommodation Office">
            <InfoRow icon={Building2} label="Contact" value={acc.accommodationOffice} />
          </SectionCard>
        )}

        {acc.applicationProcess && (
          <SectionCard title="Application Process">
            <InfoRow icon={FileText} label="Process" value={acc.applicationProcess} />
          </SectionCard>
        )}
      </div>
    );
  }

  function StudentLifeSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const sl = uni.studentLife;
    return (
      <div className="space-y-6">
        {sl.clubs && sl.clubs.length > 0 && (
          <SectionCard title="Clubs">
            <BadgeList items={sl.clubs} />
          </SectionCard>
        )}
        {sl.sports && sl.sports.length > 0 && (
          <SectionCard title="Sports">
            <BadgeList items={sl.sports} color="navy" />
          </SectionCard>
        )}
        {sl.events && sl.events.length > 0 && (
          <SectionCard title="Events">
            <div className="space-y-2">
              {sl.events.map((e: string, i: number) => (
                <LineItem key={i} icon={Calendar} text={e} />
              ))}
            </div>
          </SectionCard>
        )}
        {sl.organizations && sl.organizations.length > 0 && (
          <SectionCard title="Organizations">
            <div className="space-y-2">
              {sl.organizations.map((o: string, i: number) => (
                <LineItem key={i} icon={Users} text={o} />
              ))}
            </div>
          </SectionCard>
        )}
      </div>
    );
  }

  function FacilitiesSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const fc = uni.facilities;
    const sections = [
      { key: "libraries", title: "Libraries", icon: Library },
      { key: "labs", title: "Labs", icon: FlaskConical },
      { key: "sports", title: "Sports Facilities", icon: Trophy },
      { key: "other", title: "Other Facilities", icon: Building2 },
    ] as const;
    return (
      <div className="space-y-6">
        {sections.map((sec) => {
          const items = (fc as any)[sec.key];
          if (!items || items.length === 0) return null;
          return (
            <SectionCard key={sec.key} title={sec.title}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                    <sec.icon className="w-4 h-4 text-emerald shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          );
        })}
      </div>
    );
  }

  function CareerSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const cd = uni.careerDevelopment;
    const boolItems = [
      { key: "internships" as const, label: "Internships", icon: Briefcase },
      { key: "industrialAttachment" as const, label: "Industrial Attachment", icon: Wifi },
      { key: "careerOffice" as const, label: "Career Office", icon: Building2 },
    ];
    return (
      <div className="space-y-6">
        <SectionCard title="Career Development Services">
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {boolItems.map((item) => (
              <div key={item.key} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                <div className={`w-10 h-10 rounded-lg ${cd[item.key] ? "bg-emerald/10" : "bg-red-50 dark:bg-red-900/10"} flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${cd[item.key] ? "text-emerald" : "text-red-400"}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</p>
                  <span className={`text-xs font-medium ${cd[item.key] ? "text-emerald" : "text-red-400"}`}>
                    {cd[item.key] ? "Available" : "Not available"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {cd.jobPlacementSupport && (
            <div className="p-4 rounded-xl bg-navy/5 border border-navy/10 mb-4">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Job Placement Support</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cd.jobPlacementSupport}</p>
                </div>
              </div>
            </div>
          )}

          {cd.alumniNetwork && (
            <div className="p-4 rounded-xl bg-gold/5 border border-gold/10">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Alumni Network</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cd.alumniNetwork}</p>
                </div>
              </div>
            </div>
          )}
        </SectionCard>
      </div>
    );
  }

  function ResearchSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const r = uni.research;
    const sections = [
      { key: "centers" as const, title: "Research Centers", icon: FlaskConical },
      { key: "innovationLabs" as const, title: "Innovation Labs", icon: Lightbulb },
      { key: "publications" as const, title: "Publications", icon: BookOpen },
      { key: "conferences" as const, title: "Conferences", icon: Users },
      { key: "partnerships" as const, title: "Partnerships", icon: Globe },
    ];
    return (
      <div className="space-y-6">
        {sections.map((sec) => {
          const items = r[sec.key];
          if (!items || items.length === 0) return null;
          return (
            <SectionCard key={sec.key} title={sec.title}>
              <div className="space-y-2">
                {items.map((item: string, i: number) => (
                  <LineItem key={i} icon={sec.icon} text={item} />
                ))}
              </div>
            </SectionCard>
          );
        })}
      </div>
    );
  }

  function GallerySection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    return (
      <div className="space-y-6">
        <SectionCard title="Campus Gallery">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.map((item: any, i: number) => (
              <Dialog key={i} open={galleryOpen && galleryIndex === i} onOpenChange={(open) => { setGalleryOpen(open); if (open) setGalleryIndex(i); }}>
                <DialogTrigger asChild>
                  <motion.button
                    className="aspect-[4/3] rounded-xl overflow-hidden group relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={item.image || heroImages[i % heroImages.length]}
                      alt={item.caption || `${uni.name} ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <p className="text-xs text-white font-medium truncate">{item.caption}</p>
                      </div>
                    )}
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-white/10">
                  <div className="relative">
                    <img
                      src={item.image || heroImages[i % heroImages.length]}
                      alt={item.caption || `${uni.name} ${i + 1}`}
                      className="w-full max-h-[80vh] object-contain mx-auto"
                    />
                    {item.caption && (
                      <p className="text-center text-sm text-white/70 py-3 px-4">{item.caption}</p>
                    )}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => setGalleryOpen(false)}
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="absolute bottom-16 left-2 right-2 flex justify-between px-4">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => setGalleryIndex((galleryIndex - 1 + galleryItems.length) % galleryItems.length)}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => setGalleryIndex((galleryIndex + 1) % galleryItems.length)}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </SectionCard>
      </div>
    );
  }

  function RankingsSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const rk = uni.rankings;
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {rk.national && (
            <SectionCard title="National Ranking">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400">{rk.national}</p>
              </div>
            </SectionCard>
          )}
          {rk.international && (
            <SectionCard title="International Ranking">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400">{rk.international}</p>
              </div>
            </SectionCard>
          )}
        </div>

        {rk.awards && rk.awards.length > 0 && (
          <SectionCard title="Awards">
            <div className="space-y-2">
              {rk.awards.map((a: string, i: number) => (
                <LineItem key={i} icon={Award} text={a} />
              ))}
            </div>
          </SectionCard>
        )}

        {rk.accreditations && rk.accreditations.length > 0 && (
          <SectionCard title="Accreditations">
            <div className="space-y-2">
              {rk.accreditations.map((ac: string, i: number) => (
                <LineItem key={i} icon={Shield} text={ac} />
              ))}
            </div>
          </SectionCard>
        )}

        {rk.memberships && rk.memberships.length > 0 && (
          <SectionCard title="Memberships">
            <BadgeList items={rk.memberships} color="gold" />
          </SectionCard>
        )}
      </div>
    );
  }

  function FAQSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const faq = uni.faq;
    if (!faq || faq.length === 0) {
      return (
        <SectionCard title="Frequently Asked Questions">
          <p className="text-sm text-gray-500 dark:text-gray-400">No FAQs available at this time.</p>
        </SectionCard>
      );
    }
    return (
      <SectionCard title="Frequently Asked Questions">
        <Accordion type="multiple" className="space-y-2">
          {faq.map((f: any, i: number) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-100 dark:border-white/10 rounded-xl px-4">
              <AccordionTrigger className="text-sm font-medium text-gray-900 dark:text-white hover:no-underline">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 dark:text-gray-400">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionCard>
    );
  }

  function DownloadsSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const dl = uni.downloads;
    if (!dl || dl.length === 0) {
      return (
        <SectionCard title="Downloads">
          <p className="text-sm text-gray-500 dark:text-gray-400">No downloads available at this time.</p>
        </SectionCard>
      );
    }
    const typeColors: Record<string, string> = {
      PDF: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      DOC: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      XLS: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      Link: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
    };
    return (
      <SectionCard title="Downloads">
        <div className="grid sm:grid-cols-2 gap-3">
          {dl.map((d: any, i: number) => (
            <a
              key={i}
              href={d.url || "#"}
              target={d.url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 rounded-xl border ${d.url ? "border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-background cursor-pointer" : "border-gray-50 dark:border-white/5 opacity-60"} transition-colors`}
            >
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-navy" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{d.name}</p>
                <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium mt-0.5 ${typeColors[d.type] || "bg-gray-100 text-gray-700"}`}>
                  {d.type}
                </span>
              </div>
              {d.url && <ExternalLink className="w-4 h-4 text-gray-400 shrink-0" />}
            </a>
          ))}
        </div>
      </SectionCard>
    );
  }

  function NearbySection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const np = uni.nearbyPlaces;
    if (!np || np.length === 0) {
      return (
        <SectionCard title="Nearby Places">
          <p className="text-sm text-gray-500 dark:text-gray-400">No nearby place information available.</p>
        </SectionCard>
      );
    }
    return (
      <SectionCard title="Nearby Places">
        <div className="grid sm:grid-cols-2 gap-3">
          {np.map((p: any, i: number) => {
            const Icon = nearbyIcons[p.type] || MapPin;
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{p.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant="outline" className="text-[10px] py-0 px-1.5">{p.type}</Badge>
                    <span className="text-xs text-gray-500">{p.distance}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>
    );
  }

  function ReviewsSection({ uni }: { uni: NonNullable<ReturnType<typeof getUniversityById>> }) {
    const rv = uni.reviews;
    if (!rv || rv.length === 0) {
      return (
        <SectionCard title="Student Reviews">
          <p className="text-sm text-gray-500 dark:text-gray-400">No reviews yet. Be the first to share your experience!</p>
        </SectionCard>
      );
    }
    return (
      <SectionCard title="Student Reviews & Testimonials">
        <div className="space-y-4">
          {rv.map((r: any, i: number) => (
            <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${star <= r.rating ? "text-gold fill-gold" : "text-gray-300 dark:text-gray-600"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Quote className="w-4 h-4 text-emerald/30 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{r.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={heroImages[0]}
          alt={university.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/40 to-transparent" />

        <div className="relative w-full pb-8 md:pb-12 pt-32">
          <div className="container">
            <Link href="/universities" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors">
              <ArrowLeft size={14} /> Back to Universities
            </Link>

            <div className="grid lg:grid-cols-3 gap-8 items-end">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-1 text-white/60 text-xs mb-2">
                  <Home className="w-3 h-3" />
                  <span>Home / Universities / {university.name}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                  {university.name}
                </h1>

                {university.motto && (
                  <p className="text-white/60 text-sm md:text-base italic mb-4">
                    &ldquo;{university.motto}&rdquo;
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 text-white/80 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-emerald" /> {university.location}
                  </span>
                  <Badge className="bg-emerald/20 text-emerald border-emerald/30 text-xs">
                    {university.type}
                  </Badge>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold" /> Est. {university.founded}
                  </span>
                  {university.accreditationStatus && (
                    <Badge variant="outline" className="border-white/20 text-white/70 text-[10px]">
                      <Shield className="w-3 h-3 mr-1" />
                      {university.accreditationStatus}
                    </Badge>
                  )}
                </div>

                <p className="text-white/70 text-sm max-w-2xl leading-relaxed mb-4">
                  {university.description}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a href={university.website ? `https://${university.website.replace(/^https?:\/\//, '')}` : "#"} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-emerald hover:bg-emerald-dark text-white rounded-xl gap-2">
                      <Globe className="w-4 h-4" /> Visit Website
                    </Button>
                  </a>

                  {hasSocial && (
                    <div className="flex items-center gap-2">
                      {sm.facebook && (
                        <a href={sm.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {sm.twitter && (
                        <a href={sm.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                      )}
                      {sm.instagram && (
                        <a href={sm.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                      )}
                      {sm.linkedin && (
                        <a href={sm.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      )}
                      {sm.youtube && (
                        <a href={sm.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Facts Panel */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" /> Quick Facts
                </h3>
                <div className="space-y-2">
                  {Object.entries(university.quickFacts || {}).slice(0, 8).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-xs">
                      <span className="text-white/60">{key}</span>
                      <span className="text-white/90 font-medium text-right max-w-[55%] truncate">{val as string}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5">
                  {university.telephone && (
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Phone className="w-3 h-3 text-emerald shrink-0" /> {university.telephone}
                    </div>
                  )}
                  {university.email && (
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <Mail className="w-3 h-3 text-emerald shrink-0" /> {university.email}
                    </div>
                  )}
                  {university.website && (
                    <div className="flex items-center gap-2 text-xs text-white/80 truncate">
                      <Globe className="w-3 h-3 text-emerald shrink-0" /> {university.website.replace(/^https?:\/\//, '')}
                    </div>
                  )}
                  {university.physicalAddress && (
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <MapPin className="w-3 h-3 text-emerald shrink-0" /> {university.physicalAddress}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="overflow-x-auto no-scrollbar">
              <TabsList className="w-max h-auto p-1.5 gap-0.5 bg-transparent border-0">
                {tabDefinitions.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`whitespace-nowrap px-3 py-2 text-xs md:text-sm rounded-lg transition-all ${
                        isActive
                          ? "bg-emerald text-white shadow-md shadow-emerald/20"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 md:mr-1.5 ${isActive ? "text-white" : ""}`} />
                      <span className="hidden md:inline">{tab.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Content Area */}
      <section className="py-8 md:py-12 bg-gray-50 dark:bg-background">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
