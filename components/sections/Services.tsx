import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { coreFeatures, addOnCategories } from "@/config/services";

// Icon components
const FeatureIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    monitor: (
      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    smartphone: (
      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
    "message-circle": (
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    ),
    phone: (
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
    mail: (
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    "map-pin": (
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    ),
    search: (
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    zap: (
      <path strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </>
    ),
    lock: (
      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
    "shopping-bag": (
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zm5 10a3 3 0 110-6 3 3 0 010 6z" />
    ),
    calendar: (
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
    "credit-card": (
      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    ),
    "file-plus": (
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 9h-2v2H9v-2H7v-2h2V7h2v2h2v2z" />
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </>
    ),
  };

  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      {icons[name] || <circle cx="12" cy="12" r="10" />}
    </svg>
  );
};

export function Services() {
  return (
    <>
      {/* Core features */}
      <section
        id="services"
        className="py-20 md:py-28 bg-white"
        aria-labelledby="services-heading"
      >
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything Your Business Website Needs"
            subtitle="Every website we build is mobile-optimised, professionally designed, and set up to make it easy for customers to find and contact you."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 hover:bg-indigo-50/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Add-on services */}
      <section
        className="py-16 md:py-20 bg-gray-50"
        aria-labelledby="addons-heading"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="addons-heading"
                className="text-2xl sm:text-3xl font-bold text-gray-900"
              >
                Need Something More?
              </h2>
              <p className="mt-3 text-gray-600">
                The following are available as add-ons or custom projects. Get in touch and we&apos;ll provide a quote.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {addOnCategories.map((addon) => (
                <div
                  key={addon.title}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                    <FeatureIcon name={addon.icon} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {addon.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <WhatsAppButton
                variant="custom"
                size="md"
                ctaLocation="services_addons"
              >
                Discuss Custom Requirements
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
