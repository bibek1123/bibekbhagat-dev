import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/config/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{ background: "#F6F5F3", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="faq-grid"
        >
          {/* Left: heading */}
          <div>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.35)",
                marginBottom: "1rem",
              }}
            >
              FAQ
            </p>
            <h2
              id="faq-heading"
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 900,
                color: "#0D0D12",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Common
              <br />
              questions.
            </h2>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.9375rem",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Everything you need to know before getting started.
            </p>
          </div>

          {/* Right: accordion */}
          <div>
            <Accordion items={faqItems} />
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr 2fr !important;
            gap: 5rem !important;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}
