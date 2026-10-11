import { Container } from "@/components/ui/Container";

// ── Four capability groups ──────────────────────────────────────────────────
const capabilities = [
  {
    number: "01",
    title: "Design & Mobile Experience",
    outcome: "Your business looks professional across every device.",
    points: [
      "Professional visual design crafted for your brand",
      "Responsive layouts — desktop, tablet, and mobile",
      "Mobile-first: designed for how your customers browse",
    ],
  },
  {
    number: "02",
    title: "Customer Enquiries",
    outcome: "Visitors can easily contact you or take the next step.",
    points: [
      "WhatsApp button for instant messaging",
      "Click-to-call for one-tap phone contact",
      "Enquiry form to capture leads around the clock",
      "Google Maps embed for walk-in businesses",
    ],
  },
  {
    number: "03",
    title: "Performance & Search Foundations",
    outcome: "A technically sound website that loads fast and is discoverable.",
    points: [
      "Optimised for speed — visitors won't wait",
      "Basic on-page SEO: titles, descriptions, structure",
      "Secure HTTPS/SSL where the platform supports it",
      "Clean code built to last",
    ],
  },
  {
    number: "04",
    title: "Launch & Technical Setup",
    outcome: "Your website goes live properly configured from day one.",
    points: [
      "Domain connection and deployment",
      "Technical setup handled end to end",
      "All access credentials handed over at launch",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Container>
        {/* ── Section intro: left/right split ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="services-intro-grid"
        >
          {/* Left — heading */}
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
              Services
            </p>
            <h2
              id="services-heading"
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 900,
                color: "#0D0D12",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              What every website
              <br />
              we build includes.
            </h2>
          </div>

          {/* Right — context */}
          <div style={{ maxWidth: "480px" }}>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#4B5563",
              }}
            >
              Every Starter and Business package is professionally designed,
              mobile-first, and set up so customers can find and contact your
              business.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "#6B7280",
                marginTop: "0.875rem",
              }}
            >
              E-commerce, booking systems, payment gateways, and custom
              functionality are quoted separately — not included in the
              standard packages.
            </p>
          </div>
        </div>

        {/* ── Four capability rows ── */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}
          className="capabilities-list"
        >
          {capabilities.map((cap, idx) => (
            <div
              key={cap.number}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.5rem",
                padding: "2.5rem 0",
                borderBottom: idx < capabilities.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}
              className="capability-row"
            >
              {/* Left: number + heading + outcome */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "0.875rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 900,
                      letterSpacing: "0.06em",
                      color: "rgba(0,0,0,0.18)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {cap.number}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 800,
                      color: "#0D0D12",
                      letterSpacing: "-0.02em",
                      margin: 0,
                    }}
                  >
                    {cap.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#4B5563",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    paddingLeft: "2rem",
                  }}
                >
                  {cap.outcome}
                </p>
              </div>

              {/* Right: feature points */}
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {cap.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: "0.9375rem",
                      color: "#374151",
                      lineHeight: 1.55,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ color: "#4F46E5", flexShrink: 0, marginTop: "2px" }}
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .services-intro-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
            align-items: end;
          }
          .capability-row {
            grid-template-columns: 2fr 3fr !important;
            gap: 3rem !important;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}
