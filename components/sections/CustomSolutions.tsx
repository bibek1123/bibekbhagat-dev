import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const customItems = [
  "E-commerce & online stores",
  "Appointment & booking systems",
  "Online payment integrations",
  "Custom backend functionality",
];

export function CustomSolutions() {
  return (
    <section
      style={{
        background: "#F6F5F3",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
      aria-labelledby="custom-heading"
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="custom-grid"
        >
          {/* Left: copy */}
          <div>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.35)",
                marginBottom: "1.25rem",
              }}
            >
              Custom Projects
            </p>
            <h2
              id="custom-heading"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 900,
                color: "#0D0D12",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Need something beyond
              a standard business website?
            </h2>
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#4B5563",
                maxWidth: "460px",
              }}
            >
              Have something specific in mind? Tell me what your business needs
              and I&apos;ll recommend the right approach and give you a quote.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <WhatsAppButton
                variant="custom"
                size="lg"
                ctaLocation="custom_solutions"
              >
                Discuss a Custom Project →
              </WhatsAppButton>
            </div>
          </div>

          {/* Right: custom capability list */}
          <div>
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "rgba(0,0,0,0.45)",
                marginBottom: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Quoted separately — not included in Starter or Business:
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {customItems.map((item, idx) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 0",
                    borderBottom: idx < customItems.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.625rem",
                      fontWeight: 900,
                      letterSpacing: "0.06em",
                      color: "rgba(0,0,0,0.2)",
                      fontVariantNumeric: "tabular-nums",
                      minWidth: "1.5rem",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0D0D12",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 768px) {
          .custom-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
