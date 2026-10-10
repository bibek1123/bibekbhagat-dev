import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    description:
      "Send us a message on WhatsApp or fill in the contact form. Tell us what your business does, what you need, and any references you like.",
  },
  {
    number: "02",
    title: "Choose your package & pay 50% advance",
    description:
      "We'll recommend the right package for your needs. Once you're happy, pay 50% to begin. Work starts after the advance is received.",
  },
  {
    number: "03",
    title: "We design and build your website",
    description:
      "We take care of design, development, and technical setup. You'll be updated throughout the process.",
  },
  {
    number: "04",
    title: "Review and request included revisions",
    description:
      "Review the website and share your feedback. We'll make revisions within the round included in your package.",
  },
  {
    number: "05",
    title: "Complete payment & launch",
    description:
      "Pay the remaining 50%, and we launch your website. We'll hand over all access and credentials — your website is ready for business.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-gray-50"
      aria-labelledby="process-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Simple Process. No Agency Hassle."
          subtitle="Getting a professional website shouldn't be complicated. Here's what working with us looks like."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-6 mb-8 last:mb-0 group"
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0 group-hover:bg-indigo-700 transition-colors">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-indigo-100 mt-3 min-h-8" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 last:pb-0">
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
