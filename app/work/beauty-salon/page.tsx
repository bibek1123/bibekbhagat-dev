import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Luxury Salon Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a fashion-editorial website for a premium beauty studio. Demonstrates service menu, pricing, and luxury brand identity. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/beauty-salon` },
};

const menuCategories = [
  {
    category: "Hair",
    items: [
      { name: "Cut & Style", price: "₹900 onwards" },
      { name: "Global Colour", price: "₹3,000 onwards" },
      { name: "Balayage", price: "₹5,500 onwards" },
      { name: "Keratin Smoothing", price: "₹4,500 onwards" },
      { name: "Hair Spa", price: "₹1,800 onwards" },
    ],
  },
  {
    category: "Skin & Face",
    items: [
      { name: "Signature Facial", price: "₹2,200 onwards" },
      { name: "Hydra Boost Treatment", price: "₹3,500 onwards" },
      { name: "Clean-up", price: "₹900 onwards" },
      { name: "Tan Removal", price: "₹1,200 onwards" },
    ],
  },
  {
    category: "Nails",
    items: [
      { name: "Manicure", price: "₹700 onwards" },
      { name: "Pedicure", price: "₹900 onwards" },
      { name: "Gel Extensions", price: "₹1,800 onwards" },
      { name: "Nail Art", price: "₹400 per nail" },
    ],
  },
  {
    category: "Bridal",
    items: [
      { name: "Bridal Makeup", price: "₹15,000 onwards" },
      { name: "Pre-Bridal Package", price: "₹9,000 onwards" },
      { name: "Bridesmaid Package", price: "₹5,500 onwards" },
    ],
  },
];

const studioValues = [
  {
    title: "Hygiene Protocol",
    body: "All tools are sterilised between every appointment. We don&apos;t compromise on this.",
  },
  {
    title: "Premium Products",
    body: "We use professional-grade colour and skincare products — nothing that damages your hair or skin.",
  },
  {
    title: "By Appointment",
    body: "We work by appointment to give every client undivided time and attention.",
  },
];

export default function BeautySalonPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#0E0A08" }}
    >
      {/* ── NAV ── Dark editorial */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(14,10,8,0.96)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: "1.0625rem", fontWeight: 800, color: "white", letterSpacing: "-0.01em" }}>
            Velvet Room
          </div>
          <div style={{ fontSize: "0.5625rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A97A" }}>
            Studio
          </div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2.25rem" }}>
          {["Services", "Menu", "Studio", "Appointments"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#appointments"
          style={{
            fontSize: "0.8125rem",
            fontWeight: 700,
            padding: "0.5rem 1.25rem",
            background: "#C8A97A",
            color: "#0E0A08",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Book Now
        </a>
      </nav>

      {/* ── HERO ── Full-bleed editorial photo with type overlay */}
      <section
        style={{
          paddingTop: "64px",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Real salon photography */}
        <Image
          src="/work/images/beauty-salon-hero.jpg"
          alt="Luxury salon interior with arched mirrors, black and gold palette — Velvet Room Studio, Gurugram"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay so type remains legible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(14,10,8,0.92) 0%, rgba(14,10,8,0.45) 50%, rgba(14,10,8,0.12) 100%)",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 2rem 5rem",
            width: "100%",
            position: "relative",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-end", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#C8A97A",
                  marginBottom: "2rem",
                }}
              >
                Gurugram, Haryana
              </p>
              <h1
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "white",
                  letterSpacing: "-0.04em",
                  marginBottom: "0",
                }}
              >
                Premium
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 700, color: "rgba(255,255,255,0.55)" }}>
                  Beauty
                </span>
                <br />
                Studio.
              </h1>
            </div>

            <div style={{ textAlign: "right", paddingBottom: "0.5rem" }}>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "280px", textAlign: "right" }}>
                Hair, skin, and nails — by appointment in an intimate studio designed for quality over quantity.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end", marginTop: "1.5rem", flexWrap: "wrap" }}>
                <a
                  href="#appointments"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    padding: "0.75rem 1.75rem",
                    background: "#C8A97A",
                    color: "#0E0A08",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Book Appointment
                </a>
                <a
                  href="#menu"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    padding: "0.75rem 1.75rem",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Service Menu
                </a>
              </div>
            </div>
          </div>

          {/* Category strips */}
          <div
            style={{
              display: "flex",
              gap: "0",
              marginTop: "4rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "1.5rem",
            }}
          >
            {["Hair", "Skin", "Nails", "Bridal", "By Appointment"].map((cat, i) => (
              <div
                key={cat}
                style={{
                  flex: 1,
                  padding: "0.5rem 1rem",
                  borderRight: i < 4 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE MENU ── */}
      <section id="menu" style={{ background: "#F9F5F0", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9C8870", fontWeight: 600, marginBottom: "0.75rem" }}>
                Services & Pricing
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A0E0A", letterSpacing: "-0.03em" }}>
                Service Menu
              </h2>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "#7A6858", maxWidth: "300px" }}>
              Prices listed are starting prices. Final pricing based on hair length, condition, and product use.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5px", background: "#D8CEBC", border: "1px solid #D8CEBC", borderRadius: "16px", overflow: "hidden" }}>
            {menuCategories.map((cat) => (
              <div key={cat.category} style={{ background: "#F9F5F0", padding: "2rem" }}>
                <h3 style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C8870", fontWeight: 700, marginBottom: "1.5rem" }}>
                  {cat.category}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "0.875rem",
                        borderBottom: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", color: "#2A1C14" }}>{item.name}</span>
                      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#C8A97A" }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL IMAGE STRIP ── Salon environment visual between menu and studio values */}
      <section
        style={{
          background: "#0E0A08",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            minHeight: "420px",
          }}
        >
          {/* Image side */}
          <div style={{ position: "relative", minHeight: "320px" }}>
            <Image
              src="/work/images/beauty-salon-hero.jpg"
              alt="Intimate salon chair and arched mirror in low ambient light — Velvet Room Studio"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(14,10,8,0.15)" }} />
          </div>
          {/* Quote side */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "4rem 3rem",
              background: "#0E0A08",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "#C8A97A", marginBottom: "2rem" }} />
            <blockquote
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.35,
                letterSpacing: "-0.02em",
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              &ldquo;Every visit should feel like time well spent&rdquo;
            </blockquote>
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              The Velvet Room Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* ── STUDIO VALUES ── Dark band */}
      <section id="studio" style={{ background: "#0E0A08", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C8A97A", fontWeight: 600, marginBottom: "0.75rem" }}>
              The Studio
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
              How We Work
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "rgba(200,169,122,0.1)", borderRadius: "12px", overflow: "hidden" }}>
            {studioValues.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#0E0A08",
                  padding: "2.5rem",
                }}
              >
                <div style={{ width: "32px", height: "2px", background: "#C8A97A", marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p
                  style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK ── */}
      <section id="appointments" style={{ padding: "5rem 0", background: "#F9F5F0" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0E0A08", letterSpacing: "-0.04em", marginBottom: "1rem" }}>
            Book Your Visit
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#7A6858", marginBottom: "2rem" }}>
            Contact the studio to book your preferred slot. Walk-ins welcome subject to availability.
          </p>
          <div style={{ background: "#0E0A08", border: "1px solid rgba(200,169,122,0.2)", borderRadius: "8px", padding: "1.5rem 2rem", marginBottom: "1.5rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
            <strong style={{ color: "white" }}>Portfolio demonstration.</strong> This is a fictional showcase website.
            {" "}<Link href="/#pricing" style={{ color: "#C8A97A", fontWeight: 700 }}>Get this kind of website for your business →</Link>
          </div>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.875rem", color: "#7A6858" }}>
            <span>Gurugram, Haryana</span>
            <span>Mon – Sat: 10 AM – 8 PM</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0E0A08", padding: "1.75rem 2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontWeight: 800, color: "white", letterSpacing: "-0.01em" }}>
          Velvet Room <span style={{ color: "#C8A97A", fontStyle: "italic", fontWeight: 700 }}>Studio</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#C8A97A", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
