import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsAndConditions() {
  return (
    <div>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy via-navy-dark to-deep-navy">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Terms & Conditions</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Terms of Service
              </h1>
              <p className="text-white/70 text-lg">
                Please read these terms carefully before using CampusConnect Rwanda.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-background">
        <div className="container max-w-4xl space-y-8">
          <ScrollReveal>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                By accessing and using CampusConnect Rwanda, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                2. Use of Services
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                You agree to use CampusConnect Rwanda only for lawful purposes and in a manner that does not:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />Violate any applicable local, national, or international law</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />Impersonate any person or entity</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />Publish false, misleading, or inaccurate information</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />Interfere with or disrupt the functionality of the platform</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0" />Attempt unauthorized access to our systems or networks</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                3. University Information Accuracy
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                While we strive to provide accurate and up-to-date information about universities, programs, fees, and admissions, we do not guarantee the completeness or accuracy of such information. University details, requirements, and fees are subject to change. We recommend verifying critical information directly with the respective university before making any decisions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                4. Linking to External Sites
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                CampusConnect Rwanda may contain links to third-party websites (university portals, scholarship platforms, visa application sites, etc.). These external sites are not under our control. We are not responsible for the content, privacy practices, or availability of any third-party sites. Inclusion of any link does not imply endorsement of the linked site.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                5. Intellectual Property
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                All content on CampusConnect Rwanda, including text, graphics, logos, icons, images, and software, is the property of CampusConnect Rwanda or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                6. Limitation of Liability
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                CampusConnect Rwanda provides its services on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                7. Modifications to Terms
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this platform. Your continued use of CampusConnect Rwanda after any modifications constitutes acceptance of the updated terms. We encourage you to review these terms periodically.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                8. Contact Information
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at <a href="mailto:info@campusconnect.rw" className="text-emerald hover:underline">info@campusconnect.rw</a> or reach us by phone at <a href="tel:+250791902058" className="text-emerald hover:underline">+250 791 902 058</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}