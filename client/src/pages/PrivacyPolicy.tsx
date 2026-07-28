import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicy() {
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
              <Badge className="bg-white/10 text-white border-white/20 mb-4">Privacy Policy</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                Your Privacy Matters
              </h1>
              <p className="text-white/70 text-lg">
                Learn how we collect, use, and protect your personal information.
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
                1. Information We Collect
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                We collect information you provide directly when you create an account, fill out a form, or contact us. This may include your name, email address, phone number, institution details, and any other information you choose to share. We also collect anonymized usage data to improve our services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                2. How We Use Your Information
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Provide and maintain our services</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Improve and personalize your experience</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Respond to your inquiries and support requests</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Send relevant updates and communications (with your consent)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Analyze usage patterns to enhance our platform</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                3. Data Storage and Security
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                We implement industry-standard security measures to protect your personal information. Data is stored securely and is only accessible to authorized personnel. We use encryption for sensitive data and conduct regular security assessments to ensure your information remains safe.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                4. Cookies and Tracking
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Our website uses cookies to enhance your browsing experience and understand how our platform is used. You can manage cookie preferences through your browser settings. Continuing to use our site constitutes acceptance of our cookie practices.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                5. Third-Party Links
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Our platform may contain links to third-party websites (such as university portals, scholarship databases, and visa application sites). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any personal information.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                6. Your Rights
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Access the personal data we hold about you</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Request correction of inaccurate information</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Request deletion of your personal data</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Withdraw consent for data processing</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald mt-2 shrink-0" />Object to or restrict processing of your data</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                7. Contact Us
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at <a href="mailto:info@campusconnect.rw" className="text-emerald hover:underline">info@campusconnect.rw</a> or reach us by phone at <a href="tel:+250791902058" className="text-emerald hover:underline">+250 791 902 058</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}