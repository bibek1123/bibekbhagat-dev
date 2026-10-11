import { Container } from "@/components/ui/Container";

const proofPoints = [
  {
    label: "4+ Years Experience",
    detail: "Building websites and web products professionally.",
  },
  {
    label: "Direct Communication",
    detail: "You speak to the developer — not a sales team.",
  },
  {
    label: "Full-Stack Development",
    detail: "Design, code, and technical setup — all in one.",
  },
];

const techStack = "Next.js · React · TypeScript · Node.js · Cloud Deployment";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* ── Left: About copy ── */}
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
              About
            </p>
            <h2
              id="about-heading"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 900,
                color: "#0D0D12",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Work directly with
              the developer building
              your website.
            </h2>

            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              I&apos;m Bibek Bhagat, a full-stack developer with 4+ years of
              experience building websites and web products.
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              From the first conversation through launch, you communicate
              directly with the person designing and building your website. No
              sales-team layers, no account managers — just a straightforward
              working relationship.
            </p>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              Every design decision is made around your business and your
              customers — not to impress other designers. The goal is a website
              that makes it easy for customers to understand your business and
              get in touch.
            </p>

            {/* Tech stack — subtle */}
            <p
              style={{
                marginTop: "2rem",
                fontSize: "0.8125rem",
                color: "#9CA3AF",
                lineHeight: 1.6,
              }}
            >
              <span style={{ fontWeight: 600, color: "#6B7280" }}>Technical background: </span>
              {techStack}
            </p>
          </div>

          {/* ── Right: Photo placeholder + proof points ── */}
          <div>
            {/* Photo area — holds a real photo if available, otherwise an elegant placeholder */}
            <div
              style={{
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "4/5",
                borderRadius: "10px",
                overflow: "hidden",
                background: "#F0EEE8",
                border: "1px solid rgba(0,0,0,0.07)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.75rem",
              }}
              aria-label="Developer photo — to be added"
            >
              {/* Initials placeholder — elegant, not generic */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  B
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "#9CA3AF",
                  letterSpacing: "0.02em",
                }}
              >
                Photo coming soon
              </p>
            </div>

            {/* Proof points */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                borderTop: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              {proofPoints.map((point, idx) => (
                <div
                  key={point.label}
                  style={{
                    padding: "1.125rem 0",
                    borderBottom: idx < proofPoints.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 800,
                      color: "#0D0D12",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {point.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#6B7280",
                      lineHeight: 1.55,
                    }}
                  >
                    {point.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 3fr 2fr !important;
            gap: 5rem !important;
            align-items: start !important;
          }
        }
      `}</style>
    </section>
  );
}
