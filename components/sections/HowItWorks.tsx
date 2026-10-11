import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Tell me about your business",
    description:
      "Send a message on WhatsApp or fill in the contact form. Tell me what your business does, what you need, and any references you like.",
  },
  {
    number: "02",
    title: "Choose your package + 50% advance",
    description:
      "I'll recommend the right package. Once you're happy, pay 50% to begin. Work starts after the advance is received.",
  },
  {
    number: "03",
    title: "Design & development",
    description:
      "I take care of design, development, and technical setup. You'll be kept updated throughout.",
  },
  {
    number: "04",
    title: "Review & revisions",
    description:
      "Review the website and share your feedback. I'll make the revision rounds included in your package.",
  },
  {
    number: "05",
    title: "Final payment + launch",
    description:
      "Pay the remaining 50%, and your website goes live. All access credentials are handed over — your site is ready.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      style={{ background: "#F6F5F3", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Container>
        {/* Section intro */}
        <div style={{ marginBottom: "3.5rem" }}>
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
            How It Works
          </p>
          <h2
            id="process-heading"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#0D0D12",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Five steps.
            <br />
            No surprises.
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1rem",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: "440px",
            }}
          >
            Getting a professional website shouldn&apos;t feel complicated.
            Here&apos;s exactly what the process looks like.
          </p>
        </div>

        {/* Timeline — vertical on all viewports, horizontal on large */}
        {/* Vertical timeline (default) */}
        <div className="process-vertical" style={{ maxWidth: "680px" }}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "1.5rem",
                paddingBottom: index < steps.length - 1 ? "2.5rem" : 0,
              }}
            >
              {/* Left: number + connector line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "2px solid #4F46E5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 900,
                      color: "#4F46E5",
                      letterSpacing: "0.02em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      background: "rgba(79,70,229,0.15)",
                      marginTop: "6px",
                      minHeight: "2rem",
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingTop: "0.625rem", paddingBottom: index < steps.length - 1 ? "0" : "0" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#0D0D12",
                    letterSpacing: "-0.01em",
                    margin: "0 0 0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#6B7280",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
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
