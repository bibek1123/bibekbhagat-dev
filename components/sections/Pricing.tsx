"use client";

import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { pricingPackages, pricingNotes } from "@/config/pricing";
import { cn } from "@/lib/utils";

const CheckIcon = ({ highlighted }: { highlighted: boolean }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0, marginTop: "1px", color: highlighted ? "rgba(165,180,252,1)" : "#4F46E5" }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}
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
            Pricing
          </p>
          <h2
            id="pricing-heading"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
              fontWeight: 900,
              color: "#0D0D12",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1rem",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            No hidden fees. No hourly billing. Fixed packages built around what
            small businesses actually need.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "800px",
          }}
          className="pricing-grid"
        >
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                position: "relative",
                borderRadius: "12px",
                padding: "2rem 2.25rem",
                display: "flex",
                flexDirection: "column",
                ...(pkg.highlighted
                  ? {
                      background: "#1E1B4B",
                      border: "none",
                      boxShadow: "0 16px 48px rgba(30,27,75,0.28)",
                    }
                  : {
                      background: "#ffffff",
                      border: "1.5px solid #E5E7EB",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }),
              }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "2rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      fontSize: "0.6875rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: "#F59E0B",
                      color: "#78350F",
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Package header */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      letterSpacing: "0.01em",
                      color: pkg.highlighted ? "rgba(165,180,252,0.9)" : "#6B7280",
                      margin: 0,
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      letterSpacing: "-0.04em",
                      color: pkg.highlighted ? "#ffffff" : "#0D0D12",
                      lineHeight: 1,
                    }}
                  >
                    {pkg.price}
                  </span>
                </div>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: pkg.highlighted ? "rgba(199,210,254,0.85)" : "#6B7280",
                  }}
                >
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  flex: 1,
                  marginBottom: "2rem",
                }}
              >
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: "0.9375rem",
                      color: pkg.highlighted ? "rgba(199,210,254,0.9)" : "#374151",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckIcon highlighted={pkg.highlighted} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <WhatsAppButton
                variant={pkg.id as "starter" | "business"}
                size="lg"
                ctaLocation={`pricing_${pkg.id}`}
                className={cn(
                  "w-full justify-center",
                  pkg.highlighted ? "bg-white text-indigo-700 hover:bg-indigo-50 font-semibold" : ""
                )}
                style={
                  pkg.highlighted
                    ? { backgroundColor: "#ffffff", color: "#4338CA" }
                    : undefined
                }
              >
                {pkg.cta}
              </WhatsAppButton>
            </div>
          ))}
        </div>

        {/* Payment terms + notes */}
        <div
          style={{
            marginTop: "2.5rem",
            maxWidth: "800px",
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          {/* Payment terms — prominent */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "#0D0D12",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  flexShrink: 0,
                }}
              />
              50% advance to start
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "#0D0D12",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  flexShrink: 0,
                }}
              />
              50% before production launch
            </div>
          </div>

          {/* Other notes — smaller */}
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            {pricingNotes.slice(1).map((note, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.8125rem",
                  color: "#9CA3AF",
                  lineHeight: 1.6,
                  paddingLeft: "0",
                }}
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <style>{`
        @media (min-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
