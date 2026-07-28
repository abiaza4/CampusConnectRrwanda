import { Badge } from "@/components/ui/badge";
import { FileText, CreditCard, Clock, AlertCircle, Check, Shield, MapPin, Passport, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const visaProcess = [
  { step: 1, text: "Complete the equivalence process." },
  { step: 2, text: "Receive your university admission letter." },
  { step: 3, text: "Travel to Rwanda with all required entry documents." },
  { step: 4, text: "Complete your university registration." },
  { step: 5, text: "Obtain a recommendation letter from your university." },
  { step: 6, text: "Submit your student visa application." },
  { step: 7, text: "Receive your one-year student visa." },
];

export default function VisaGuide() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Informational Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Student Visa Guide
              </h1>
              <p className="text-white/70 text-lg">
                After receiving admission and completing the equivalence process, international students are required to apply for a Rwandan Student Visa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-10">
          {/* Entry Requirements */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Entry Requirements
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">At the Rwanda–Uganda Border or Kigali International Airport</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Before entering Rwanda, students should have the following:</p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">1. University Admission Letter</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">Official admission letter from a Rwandan higher learning institution.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">2. Valid Passport</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">Minimum validity of six months is recommended.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">3. Proof of Payment of School Fees</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">A bank slip or payment receipt showing payment of at least one academic term.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">4. Residence Information</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>The address of your accommodation in Rwanda, or</li>
                    <li>The contact details of the person or agency assisting with your admission and registration process.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Entry Important Notes */}
          <ScrollReveal>
            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Important Notes
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">A <strong>valid passport</strong>, <strong>admission letter</strong>, and <strong>proof of payment for at least one academic term</strong> are essential for entry into Rwanda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">If you do not have a bank payment receipt, you should carry sufficient funds to pay the required tuition fees upon arrival, where applicable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Travelers without a <strong>valid passport</strong> may be denied entry and could be returned to their country of departure.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Student Visa Requirements */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Student Visa Application Requirements
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">After arriving in Rwanda, prepare the following documents to apply for your student visa:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <CreditCard size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Valid Passport.</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Recommendation Letter from your University.</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">One recent passport-size photograph with a <strong>white background</strong>.</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center shrink-0">
                    <Shield size={16} className="text-emerald" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Certificate of Good Conduct (Police Clearance Certificate / Fingerprint Certificate).</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Important Visa Information */}
          <ScrollReveal>
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Important Visa Information
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">The student visa application should be submitted <strong>within the first two (2) weeks after arriving in Rwanda and completing your university registration</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300"><strong>The Rwandan Student Visa is issued free of charge and is valid for one (1) year.</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Students are responsible for renewing their visa before it expires.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Failure to apply for or renew your student visa on time may result in <strong>penalties, fines, or immigration sanctions</strong>.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Visa Process */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Student Visa Process
                </h2>
              </div>
              <ol className="space-y-4">
                {visaProcess.map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-emerald">{item.step}</span>
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 pt-1.5">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="p-5 rounded-xl bg-gold/5 border border-gold/20">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <AlertCircle size={16} className="text-gold shrink-0 mt-0.5" />
                <span><strong>Disclaimer:</strong> This guide is for informational purposes only. Visa requirements and processes may change. Always confirm the latest information with the Rwanda Immigration and Emigration Office or the nearest Rwandan embassy before making travel plans.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
