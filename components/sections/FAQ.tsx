import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/config/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 md:py-32 bg-[#F6F5F3] relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 m-0">
                Frequently Asked Questions
              </p>
            </div>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.08] m-0"
            >
              Clear answers before you begin.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Everything you need to know about timelines, content, hosting, revisions,
              and ongoing support.
            </p>
            <div className="mt-8 p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
              <p className="text-xs text-gray-500 m-0 leading-relaxed">
                Have a unique question not listed here? Message Bibek directly on WhatsApp for an immediate answer.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <Accordion items={faqItems} className="border-0 divide-gray-100" />
          </div>
        </div>
      </Container>
    </section>
  );
}
