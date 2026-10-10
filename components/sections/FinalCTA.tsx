import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCTA() {
  return (
    <section
      className="py-20 md:py-28 bg-indigo-600"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
          >
            Your Business Deserves a Professional Website
          </h2>

          <p className="mt-5 text-lg text-indigo-200 leading-relaxed">
            Get started from ₹6,999. Tell us about your business and we&apos;ll
            help you choose the right package.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              size="lg"
              ctaLocation="final_cta"
              className="bg-white text-indigo-600 hover:bg-indigo-50 w-full sm:w-auto"
              showIcon={false}
            >
              Get a Free Quote
            </WhatsAppButton>
            <WhatsAppButton
              size="lg"
              ctaLocation="final_cta_wa"
              className="w-full sm:w-auto"
            >
              Chat on WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-8 text-sm text-indigo-300">
            No commitments. No contracts to sign upfront. Just a conversation.
          </p>
        </div>
      </Container>
    </section>
  );
}
