import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for bibekbhagat.dev website development services.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-2">Last updated: October 2024</p>
          <p className="text-sm text-gray-500 italic mb-8">
            This document outlines service terms in plain language. It is not legal advice.
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Services</h2>
              <p className="leading-relaxed">
                Bibek Bhagat (&quot;Developer&quot;) provides website design and development
                services to clients (&quot;Client&quot;) as described in the agreed package
                or custom quote. The specific deliverables, price, and revision rounds
                are defined by the selected package or written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Payment</h2>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">2.1</span>
                  <span className="leading-relaxed">
                    A 50% advance payment is required before work begins. This confirms
                    the project and reserves development time.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">2.2</span>
                  <span className="leading-relaxed">
                    The remaining 50% is due before the website is launched or any
                    credentials/files are handed over.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">2.3</span>
                  <span className="leading-relaxed">
                    All prices are quoted in Indian Rupees (₹). Payment methods will
                    be communicated at project start.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Project Scope</h2>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">3.1</span>
                  <span className="leading-relaxed">
                    The project scope is defined by the selected package. Features or
                    pages beyond the package scope require a separate quote.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">3.2</span>
                  <span className="leading-relaxed">
                    The packages do not include ecommerce, booking systems, payment
                    gateways, authentication, customer portals, or custom backend
                    systems unless specifically agreed in writing.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">3.3</span>
                  <span className="leading-relaxed">
                    Domain registration, paid hosting, premium third-party plugins,
                    paid fonts, stock photography, and similar costs are not included
                    and are the Client&apos;s responsibility.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Revisions</h2>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">4.1</span>
                  <span className="leading-relaxed">
                    The number of revision rounds included is defined by the package
                    (Starter: 1 round; Business: 2 rounds). A revision round means
                    consolidated feedback addressed in a single pass.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">4.2</span>
                  <span className="leading-relaxed">
                    Additional revision rounds beyond the package inclusion are
                    available at an additional cost to be agreed upon.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Client Responsibilities</h2>
              <p className="leading-relaxed mb-3">
                The Client is responsible for providing:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-gray-600">
                <li>All required content (text, images, logos) in a timely manner</li>
                <li>Access to necessary accounts (domain registrar, hosting, etc.) as needed</li>
                <li>Timely feedback and approval at each stage</li>
                <li>Ensuring they have the right to use any content they provide</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Project timelines are dependent on timely receipt of content and
                feedback from the Client. Delays caused by the Client may extend
                the delivery timeline.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Ownership</h2>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">6.1</span>
                  <span className="leading-relaxed">
                    Upon receipt of full and final payment, ownership of the completed
                    website design and associated files transfers to the Client.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">6.2</span>
                  <span className="leading-relaxed">
                    The Developer reserves the right to display the completed website
                    in a portfolio of work (e.g., on bibekbhagat.dev) unless the
                    Client requests otherwise in writing.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">6.3</span>
                  <span className="leading-relaxed">
                    Content provided by the Client (images, text, logos) remains the
                    Client&apos;s property. The Client represents they have the right to
                    use all content provided.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Timelines</h2>
              <p className="leading-relaxed">
                Estimated delivery timelines are communicated at project start.
                Timelines are estimates and begin from the date all required content
                and access is received. Timelines may be affected by Client response
                times and project complexity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Warranties and Limitations</h2>
              <ul className="space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">8.1</span>
                  <span className="leading-relaxed">
                    Websites are built with care and tested across common devices and
                    browsers. We do not guarantee compatibility with all possible
                    environments.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">8.2</span>
                  <span className="leading-relaxed">
                    Basic SEO setup is included as described. We make no guarantee
                    of specific search engine rankings, traffic levels, or business
                    outcomes.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-indigo-500 font-semibold shrink-0">8.3</span>
                  <span className="leading-relaxed">
                    Ongoing website maintenance, hosting, and updates after delivery
                    are not included unless separately agreed.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
              <p className="leading-relaxed">
                For any questions about these terms, please contact us at{" "}
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
