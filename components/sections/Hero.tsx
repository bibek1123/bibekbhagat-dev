"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// Small inline SVG icons — no emoji
function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

const trustSignals = [
  { label: "Fast Delivery" },
  { label: "Fixed Pricing" },
  { label: "Mobile-First" },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#FAFAF8",
        paddingTop: "6rem",
        paddingBottom: "5rem",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Very subtle grid — 1px lines only */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />

      <Container className="relative">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── LEFT COLUMN ── */}
          <div style={{ maxWidth: "540px" }}>
            {/* Price pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "999px",
                border: "1px solid rgba(79,70,229,0.2)",
                background: "rgba(79,70,229,0.04)",
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "#3730A3",
                  letterSpacing: "0.01em",
                }}
              >
                Starting at ₹6,999
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
                fontWeight: 900,
                color: "#0D0D12",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Professional websites
              <br />
              that make your business
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #3730A3 0%, #4F46E5 60%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                look established.
              </span>
            </h1>

            {/* Sub-copy */}
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#4B5563",
                maxWidth: "480px",
              }}
            >
              Modern, mobile-first websites for Indian businesses —
              professionally designed without expensive agency pricing.
            </p>

            {/* Trust signals */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                marginTop: "1.75rem",
              }}
            >
              {trustSignals.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#374151",
                  }}
                >
                  <span
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "rgba(79,70,229,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4F46E5",
                    }}
                  >
                    <CheckIcon />
                  </span>
                  {s.label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "2rem",
              }}
            >
              <WhatsAppButton size="lg" ctaLocation="hero">
                Get a Free Quote →
              </WhatsAppButton>
              <Link
                href="/#work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "52px",
                  padding: "0 1.75rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#374151",
                  background: "transparent",
                  border: "1.5px solid #D1D5DB",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "border-color 0.15s, color 0.15s",
                }}
                className="hero-secondary-cta"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Website Preview ── */}
          <div
            className="hero-visual"
            aria-hidden="true"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {/* Desktop browser mockup */}
            <div
              style={{
                width: "100%",
                maxWidth: "640px",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)",
                background: "#E8E8EA",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  height: "32px",
                  background: "#E8E8EA",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "0 12px",
                  flexShrink: 0,
                }}
              >
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FEBC2E" }} />
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28C840" }} />
                <div
                  style={{
                    flex: 1,
                    height: "16px",
                    background: "rgba(0,0,0,0.07)",
                    borderRadius: "4px",
                    marginLeft: "8px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "8px",
                  }}
                >
                  <span style={{ fontSize: "9px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.01em" }}>
                    bibekbhagat.dev/work/interior-design
                  </span>
                </div>
              </div>
              {/* Screenshot */}
              <div style={{ position: "relative", aspectRatio: "16/10" }}>
                <Image
                  src="/work/previews/interior-design-desktop.png"
                  alt="Atelier Aura interior design studio website — luxury editorial layout"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
            </div>

            {/* Overlapping mobile mockup */}
            <div
              className="hero-mobile-frame"
              style={{
                position: "absolute",
                bottom: "-28px",
                right: "-16px",
                width: "130px",
                zIndex: 2,
                borderRadius: "18px",
                overflow: "hidden",
                border: "2.5px solid rgba(0,0,0,0.12)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
                background: "#1A1A1A",
              }}
            >
              {/* Phone notch */}
              <div
                style={{
                  background: "#1A1A1A",
                  height: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "36px", height: "5px", borderRadius: "3px", background: "#333" }} />
              </div>
              {/* Screen */}
              <div style={{ position: "relative", aspectRatio: "9/19.5", overflow: "hidden" }}>
                <Image
                  src="/work/previews/interior-design-mobile.png"
                  alt="Atelier Aura website — mobile view"
                  fill
                  className="object-cover object-top"
                  sizes="130px"
                  priority
                />
              </div>
            </div>

            {/* "Built for Indian Businesses" badge — bottom-left */}
            <div
              className="hero-badge"
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-12px",
                background: "white",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: "10px 14px",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 800,
                  color: "#0D0D12",
                  letterSpacing: "-0.01em",
                }}
              >
                Built for Indian Businesses
              </div>
              <div style={{ fontSize: "0.6875rem", color: "#6B7280", marginTop: "2px", fontWeight: 500 }}>
                10 industries covered
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 5fr 6fr !important;
            gap: 4rem !important;
          }
        }

        @media (max-width: 899px) {
          .hero-visual {
            margin-top: 1rem;
          }
          .hero-mobile-frame {
            right: 0 !important;
            bottom: -20px !important;
            width: 110px !important;
          }
          .hero-badge {
            left: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-mobile-frame {
            display: none !important;
          }
          .hero-badge {
            display: none !important;
          }
        }

        .hero-secondary-cta:hover {
          border-color: #6366F1 !important;
          color: #4338CA !important;
        }
      `}</style>
    </section>
  );
}
