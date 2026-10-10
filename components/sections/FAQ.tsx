import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/config/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know before getting started."
        />

        <div className="mt-12 max-w-2xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
