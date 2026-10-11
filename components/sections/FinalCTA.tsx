import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCTA() {
  return (
    <section
      style={{
        background: "#0F0E1A",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div
          style={{
            maxWidth: "640px",
          }}
        >
          <h2
            id="final-cta-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Ready to give your business
            a more professional
            online presence?
          </h2>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
            }}
          >
            Websites starting from ₹6,999. Tell me about your business and
            what you need. I&apos;ll help you choose the right approach.
          </p>

          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <WhatsAppButton
              size="lg"
              ctaLocation="final_cta"
            >
              Get a Free Quote →
            </WhatsAppButton>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.35)",
                margin: 0,
              }}
            >
              No obligation. Direct conversation with the developer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
