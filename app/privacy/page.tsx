import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for bibekbhagat.dev website development services.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <div className="border-b border-gray-100 py-4">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </Container>
      </div>

      <Container className="py-14">
        <div className="max-w-2xl mx-auto prose prose-gray">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: October 2024</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Overview</h2>
              <p className="leading-relaxed">
                This Privacy Policy explains how Bibek Bhagat (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
                collects, uses, and protects information when you visit{" "}
                <strong>bibekbhagat.dev</strong> or contact us about our website
                development services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We may collect the following information when you contact us or
                enquire about our services:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-600">
                <li>Name and contact details (phone, email, WhatsApp number)</li>
                <li>Business name and type</li>
                <li>Information you share about your website requirements</li>
              </ul>
              <p className="leading-relaxed mt-3">
                When you visit this website, analytics tools (if configured) may
                collect standard anonymised usage data such as pages viewed, device
                type, and approximate location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the information you provide to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-600">
                <li>Respond to your enquiry and discuss your project</li>
                <li>Provide website development services</li>
                <li>Communicate about project progress</li>
                <li>Send invoices and payment information related to your project</li>
              </ul>
              <p className="leading-relaxed mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Analytics</h2>
              <p className="leading-relaxed">
                This website may use Google Analytics and/or Meta Pixel to understand
                how visitors interact with the site. These tools collect anonymised
                usage data. You can opt out of Google Analytics tracking using{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Google&apos;s opt-out tool
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. WhatsApp Communication</h2>
              <p className="leading-relaxed">
                When you initiate contact via WhatsApp, your conversation is subject
                to WhatsApp&apos;s privacy policy. We use WhatsApp solely to discuss
                your enquiry and project.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your contact information for the duration of our business
                relationship and a reasonable period thereafter for record-keeping.
                You may request deletion of your personal information by contacting
                us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Security</h2>
              <p className="leading-relaxed">
                We take reasonable steps to protect information you share with us.
                However, no method of transmission over the internet is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be
                reflected on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
              <p className="leading-relaxed">
                For any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
