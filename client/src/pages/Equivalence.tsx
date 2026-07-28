import { Badge } from "@/components/ui/badge";
import { Check, Clock, AlertCircle, FileText, User, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Equivalence() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Required for All International Students</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Equivalence Application
              </h1>
              <p className="text-white/70 text-lg">
                All international students must complete the equivalence process before proceeding with university registration in Rwanda.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-10">
          {/* Required Documents */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Required Documents
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Please prepare the following documents before submitting your equivalence application:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">1. Academic Certificates</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li><strong className="text-gray-800 dark:text-gray-200">South Sudan and Kenya:</strong> Senior 2 (S2), Senior 3 (S3), and Senior 4 (S4) certificates.</li>
                    <li><strong className="text-gray-800 dark:text-gray-200">Other East African Countries:</strong> Senior 4 (S4), Senior 5 (S5), and Senior 6 (S6) certificates.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">2. Copy of a valid Passport</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">Bio-data page.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">3. Recent Passport-Size Photograph</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>Clear, colored photo with a plain white background.</li>
                    <li>JPEG or PNG format (if applying online).</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">4. Student Information</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>Full Name (as it appears on the passport)</li>
                    <li>Email Address</li>
                    <li>Phone Number / WhatsApp Number</li>
                    <li>Nationality</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-background border border-gray-100 dark:border-white/5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">5. Parent/Guardian Information</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li>Father's Full Name</li>
                    <li>Father's Phone Number</li>
                    <li>Father's Email Address (if available)</li>
                    <li>Mother's Full Name</li>
                    <li>Mother's Phone Number</li>
                    <li>Mother's Email Address (if available)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Important Notes */}
          <ScrollReveal>
            <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 md:p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Important Notes
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  { text: "All academic certificates must be notarized (officially stamped) before submission.", icon: Shield },
                  { text: "The equivalence process takes approximately 7 working days.", icon: Clock },
                  { text: "University registration cannot begin until the equivalence certificate has been issued.", icon: AlertCircle },
                  { text: "Ensure that all submitted documents are clear, complete, and legible to avoid processing delays.", icon: Check },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Application Process */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Application Process
                </h2>
              </div>
              <ol className="space-y-4">
                {[
                  { step: 1, text: "Submit all the required documents through CampusConnect Rwanda." },
                  { step: 2, text: "Your documents will be reviewed and submitted for equivalence processing." },
                  { step: 3, text: "Wait approximately 7 working days for the equivalence certificate to be issued." },
                  { step: 4, text: "Once the equivalence certificate is approved, proceed with university admission and registration." },
                  { step: 5, text: "Complete the registration process with your chosen university." },
                ].map((item) => (
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
        </div>
      </section>
    </div>
  );
}
