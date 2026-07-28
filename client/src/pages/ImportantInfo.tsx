import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { AlertCircle, Check, Shield, Ban, FileText, BookOpen } from "lucide-react";

export default function ImportantInfo() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Know Before You Travel</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Important Information for International Students
              </h1>
              <p className="text-white/70 text-lg">
                To help you have a smooth and successful stay in Rwanda, please read the following information carefully before your arrival.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container space-y-8 max-w-4xl mx-auto">
          {/* Currency */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                  <span className="text-xl">💰</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Currency
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="shrink-0">🇷🇼</span>
                  <span>The official currency of Rwanda is the <strong>Rwandan Franc (RWF)</strong>.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="shrink-0">💵</span>
                  <span>Most daily transactions, including transport, shopping, accommodation, and other services, are conducted in <strong>Rwandan Francs (RWF)</strong>.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="shrink-0">💳</span>
                  <span>Major hotels, supermarkets, and some businesses may accept international bank cards, but it is advisable to have some local currency for everyday expenses.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="shrink-0">🏦</span>
                  <span>You can exchange foreign currency at banks, licensed forex bureaus, or withdraw Rwandan Francs from ATMs after arrival.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Laws and Integrity */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Laws and Integrity
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Rwanda is internationally recognized for its commitment to <strong>good governance, public safety, and zero tolerance for corruption</strong>.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Visitors and students are expected to:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Respect the laws of the Republic of Rwanda.",
                  "Avoid any form of corruption, bribery, or fraud.",
                  "Provide truthful information during immigration, university admissions, and official processes.",
                  "Cooperate with government officials and security personnel whenever required.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={16} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-700 dark:text-red-400 flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>Engaging in corruption, bribery, fraud, or the use of forged documents is a criminal offense and may result in prosecution, fines, imprisonment, or deportation.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Drugs and Prohibited Items */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Drugs and Prohibited Items
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Rwanda has very strict laws regarding illegal drugs and prohibited substances.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">The following are strictly prohibited:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Illegal narcotic drugs and psychotropic substances.",
                  "Drug trafficking, possession, or use of illegal drugs.",
                  "Counterfeit currency and forged documents.",
                  "Illegal firearms, ammunition, and other prohibited weapons.",
                  "Smuggled or prohibited goods.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Ban size={14} className="text-red-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Violations of these laws may result in:</p>
              <ul className="space-y-2">
                {[
                  "Arrest and criminal prosecution.",
                  "Heavy fines.",
                  "Long-term imprisonment.",
                  "Deportation after serving any applicable sentence.",
                  "Permanent restrictions on future entry into Rwanda.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <AlertCircle size={14} className="text-amber-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Student Responsibilities */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  Student Responsibilities
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">As an international student, you are expected to:</p>
              <ul className="space-y-2">
                {[
                  "Keep your passport and visa valid at all times.",
                  "Respect university regulations and the laws of Rwanda.",
                  "Renew your student visa before it expires.",
                  "Carry valid identification whenever required.",
                  "Inform your university of any changes to your residence or contact information.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={16} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* General Advice */}
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  General Advice
                </h2>
              </div>
              <ul className="space-y-2 mb-6">
                {[
                  "Keep copies of your passport, visa, and academic documents in a safe place.",
                  "Follow immigration procedures and university guidelines.",
                  "Respect Rwandan culture, traditions, and public order.",
                  "Do not engage in illegal activities or associate with individuals involved in criminal activities.",
                  "In case of an emergency, contact the relevant authorities or your university immediately.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={16} className="text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 rounded-xl bg-emerald/5 border border-emerald/20">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  <strong>CampusConnect Rwanda</strong> is committed to helping international students settle safely and successfully in Rwanda by providing reliable guidance before and after arrival.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
