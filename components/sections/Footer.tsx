import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, footerLinks } from "@/config/site";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      style={{
        background: "#0F0E1A",
        color: "rgba(255,255,255,0.45)",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
      }}
      aria-label="Footer"
    >
      <Container>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                textDecoration: "none",
                marginBottom: "0.875rem",
              }}
              aria-label="Bibek Bhagat — Home"
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  background: "#4F46E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "white", fontWeight: 900, fontSize: "0.875rem", lineHeight: 1 }}>B</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: "0.9375rem", color: "#ffffff", letterSpacing: "-0.02em" }}>
                Bibek Bhagat
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.65, maxWidth: "280px", marginBottom: "0.75rem" }}>
              {siteConfig.tagline}
            </p>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(99,102,241,0.85)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                {siteConfig.email}
              </a>
            )}
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Navigation
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Footer legal navigation">
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Legal
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "0.375rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem" }}>
            © {CURRENT_YEAR} Bibek Bhagat. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem" }}>
            Professional websites for Indian businesses.
          </p>
        </div>
      </Container>

      <style>{`
        .footer-link:hover {
          color: rgba(255,255,255,0.85) !important;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
