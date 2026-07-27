import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Clock, RefreshCw, ExternalLink, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const visaSteps = [
  { step: 1, title: "Gather Required Documents", description: "Collect your passport, admission letter, financial evidence, photos, and medical insurance before applying." },
  { step: 2, title: "Complete Application Form", description: "Fill out the student visa application form online through the Rwanda Immigration portal or at your nearest Rwandan embassy." },
  { step: 3, title: "Submit Application", description: "Submit your application with all supporting documents. You may apply online or through a Rwandan embassy in your country." },
  { step: 4, title: "Pay Application Fee", description: "Pay the required visa processing fee. Fees vary by country and visa type." },
  { step: 5, title: "Wait for Processing", description: "Processing typically takes 2-4 weeks. You may be contacted for additional information." },
  { step: 6, title: "Receive Visa", description: "Once approved, collect your visa or receive it electronically. Check the validity dates carefully." },
  { step: 7, title: "Travel to Rwanda", description: "Arrive in Rwanda with your visa. Apply for a residence permit within 30 days of arrival." },
];

const visaFaqs = [
  { q: "Who needs a student visa for Rwanda?", a: "All foreign nationals except East African Community (EAC) citizens (Rwanda, Kenya, Uganda, Tanzania, Burundi, South Sudan) who can enter visa-free. Other international students need a student visa." },
  { q: "How long is a student visa valid?", a: "Student visas are typically valid for one academic year and must be renewed annually. You can apply for renewal 30 days before expiry." },
  { q: "Can I travel in and out of Rwanda with a student visa?", a: "Yes, a valid student visa allows multiple entries. However, you must ensure your visa remains valid during your travels." },
  { q: "What is a residence permit?", a: "A residence permit is required for stays longer than 3 months. After arriving on a student visa, you must apply for a residence permit at the Rwanda Immigration headquarters within 30 days." },
  { q: "How much does a student visa cost?", a: "Visa fees vary by country. Generally, single-entry student visas cost around $50-100 USD. Check with the nearest Rwandan embassy for current fees." },
  { q: "What if my visa application is rejected?", a: "You can reapply with additional documentation or appeal the decision. Contact the Rwanda Immigration office or the embassy where you applied for guidance." },
];

export default function VisaGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Informational Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Student Visa & Immigration Guide
              </h1>
              <p className="text-white/70 text-lg">
                Everything you need to know about obtaining a student visa for Rwanda — requirements, process, and helpful resources.
              </p>
              <p className="text-white/50 text-sm mt-4 flex items-center justify-center gap-1">
                <AlertCircle size={14} /> This is an informational guide only. Always confirm with official sources.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-12">
          {/* Visa Overview */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Student Visa Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-emerald/5 border border-emerald/10">
                  <h4 className="font-semibold text-sm text-emerald mb-2">Who Needs a Student Visa</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All international students from outside the East African Community (EAC) require a student visa. EAC citizens (Kenya, Uganda, Tanzania, Burundi, South Sudan) can enter Rwanda visa-free.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy/5 dark:bg-navy/20 border border-navy/10">
                  <h4 className="font-semibold text-sm text-navy dark:text-emerald mb-2">Types of Visas</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Student Visa (single or multiple entry), Residence Permit (for stays over 3 months), and Transit Visa (for passing through Rwanda).</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Visa Requirements */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                Visa Requirements
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: CreditCard, text: "Valid passport (6+ months validity)" },
                  { icon: FileText, text: "Admission letter from Rwandan university" },
                  { icon: "bank" as any, text: "Financial support evidence (bank statements, sponsor letter)" },
                  { icon: FileText, text: "Passport-size photographs (2-4 copies)" },
                  { icon: "shield" as any, text: "Medical insurance certificate" },
                  { icon: FileText, text: "Completed visa application form" },
                  { icon: FileText, text: "Academic transcripts and certificates" },
                  { icon: "file" as any, text: "Additional documents as required by embassy" },
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-background">
                    <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center">
                      <req.icon size={16} className="text-emerald" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{req.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Application Process */}
          <div>
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                Application Process
              </h2>
            </ScrollReveal>
            <div className="space-y-4">
              {visaSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex gap-4 bg-white dark:bg-card rounded-xl p-5 border border-gray-100 dark:border-white/5">
                    <div className="w-10 h-10 rounded-full bg-navy/5 dark:bg-navy/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-navy dark:text-emerald">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Processing & Renewal */}
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                <Clock className="w-8 h-8 text-emerald mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Processing Timeline</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Standard processing takes 2-4 weeks. Expedited processing may be available in some countries. Apply well in advance of your intended travel date.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white dark:bg-card rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                <RefreshCw className="w-8 h-8 text-navy mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Renewal Information</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Student visas can be renewed annually. Apply for renewal at least 30 days before expiry. You'll need updated enrollment proof and financial documentation.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Immigration Information */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Immigration Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Residence Permit</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">After arriving in Rwanda on a student visa, you must apply for a residence permit within 30 days. Visit the Rwanda Immigration and Emigration Office in Kigali with your passport, visa, admission letter, and proof of accommodation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Arrival Procedures</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Upon arrival, present your passport, student visa, admission letter, and proof of financial support. Register with your university's international student office within 7 days.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Immigration Office Contacts</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rwanda Immigration and Emigration Headquarters: Kigali, Remera. Phone: +250 788 311 033. Website: <a href="https://www.migration.gov.rw" target="_blank" rel="noopener noreferrer" className="text-emerald hover:underline flex items-center gap-1 inline">migration.gov.rw <ExternalLink size={12} /></a></p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {visaFaqs.map((faq, i) => (
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
