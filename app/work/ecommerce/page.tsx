import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "E-commerce Website Design — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a premium Indian D2C skincare storefront demonstrating product discovery, category browsing, cart experience, and modern commerce UX. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/ecommerce` },
  openGraph: {
    title: "E-commerce / D2C Store — Web Design Portfolio | bibekbhagat.dev",
    description: "See how a modern Indian D2C storefront looks when built by bibekbhagat.dev.",
    type: "website",
  },
};

const collections = [
  {
    id: "radiance",
    name: "Radiance Edit",
    subtitle: "Vitamin C · Niacinamide · SPF",
    count: 8,
    bg: "#F5EBE0",
    accent: "#8B5E3C",
    emoji: "✦",
  },
  {
    id: "restore",
    name: "Restore Ritual",
    subtitle: "Retinol · Peptides · Ceramides",
    count: 6,
    bg: "#E8E4F0",
    accent: "#5C4B8A",
    emoji: "◆",
  },
  {
    id: "hydra",
    name: "HydraCore",
    subtitle: "Hyaluronic · Aloe · Rose Water",
    count: 9,
    bg: "#E0EDF2",
    accent: "#2D6A7F",
    emoji: "◈",
  },
  {
    id: "sun",
    name: "Sun Shield",
    subtitle: "SPF 50 PA++++ · Blue Light",
    count: 4,
    bg: "#F2EDE0",
    accent: "#7A5C2E",
    emoji: "◉",
  },
];

const products = [
  {
    id: "p1",
    name: "Luminance Serum 2%",
    subtitle: "Niacinamide + Zinc",
    desc: "Controls sebum, minimises pores, and evens skin tone. Fragrance-free, clinically formulated.",
    price: "₹1,290",
    originalPrice: null,
    size: "30 ml",
    badge: "Best Seller",
    badgeColor: "#8B5E3C",
    bg: "#FAF5F0",
    shade: "#D4A574",
  },
  {
    id: "p2",
    name: "Petal Barrier Cream",
    subtitle: "Ceramide Complex",
    desc: "Rebuilds the skin barrier with plant-derived ceramides. Suitable for dry and sensitive skin types.",
    price: "₹1,590",
    originalPrice: null,
    size: "50 ml",
    badge: null,
    badgeColor: null,
    bg: "#F5F0FA",
    shade: "#9B8EC4",
  },
  {
    id: "p3",
    name: "Radiance SPF 50",
    subtitle: "Broad Spectrum PA++++",
    desc: "Lightweight, non-greasy sunscreen with blue-light protection. No white cast. Loved by all skin tones.",
    price: "₹1,190",
    originalPrice: "₹1,490",
    size: "40 ml",
    badge: "Limited Offer",
    badgeColor: "#2D6A7F",
    bg: "#F0F7FA",
    shade: "#7AB5C8",
  },
  {
    id: "p4",
    name: "Night Restore Oil",
    subtitle: "Rosehip + Squalane",
    desc: "A lightweight oil blend that works overnight. Fades marks, smooths texture, and restores radiance by morning.",
    price: "₹1,890",
    originalPrice: null,
    size: "20 ml",
    badge: "New",
    badgeColor: "#5C4B8A",
    bg: "#FAF0F5",
    shade: "#C48FA8",
  },
];

const ingredients = [
  { name: "Niacinamide", benefit: "Pore minimising · Brightening" },
  { name: "Ceramides", benefit: "Barrier repair · Hydration lock" },
  { name: "Vitamin C", benefit: "Antioxidant · Glow boosting" },
  { name: "Hyaluronic Acid", benefit: "Deep hydration · Plumping" },
  { name: "Retinol 0.2%", benefit: "Cell renewal · Texture refinement" },
  { name: "Squalane", benefit: "Lightweight moisture · Non-comedogenic" },
];

const whyKaasni = [
  {
    title: "Clinically Formulated",
    body: "Every product is developed with dermatological input. We list every active, every percentage, every reason it's there.",
  },
  {
    title: "Skin-Safe Standards",
    body: "No parabens, no sulphates, no synthetic fragrance. Tested for Indian climate conditions — humid summers and dry winters.",
  },
  {
    title: "Honest Pricing",
    body: "We cut the margin between ingredient cost and shelf price. Good skincare should not require a premium budget.",
  },
];

// Demo cart state
const cartItems = [
  { name: "Luminance Serum 2%", size: "30 ml", qty: 1, price: "₹1,290" },
];

export default function EcommercePage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#FDFCFA" }}
    >
      {/* ── ANNOUNCEMENT BAR ── */}
      <div
        style={{
          background: "#2D1B3D",
          color: "rgba(255,255,255,0.9)",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textAlign: "center",
          padding: "0.625rem 1rem",
        }}
      >
        Free shipping on orders above ₹999 · Use code <strong style={{ color: "#E8C4A0" }}>KAASNI10</strong> for 10% off your first order
      </div>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(253,252,250,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          padding: "0 2rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div>
          <div style={{ fontSize: "1.375rem", fontWeight: 800, letterSpacing: "-0.03em", color: "#1A0A2E" }}>
            Kaasni
          </div>
          <div style={{ fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B6B9A", marginTop: "-2px" }}>
            Skincare
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Collections", "Bestsellers", "Ingredients", "Skin Guide"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#3D2B4A", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Cart / actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <button
            aria-label="Search products"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", color: "#3D2B4A" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          {/* Demo cart badge */}
          <button
            aria-label="Open cart — 1 item"
            style={{ position: "relative", background: "none", border: "none", cursor: "pointer", padding: "0.25rem", color: "#3D2B4A" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span
              style={{
                position: "absolute",
                top: "-2px",
                right: "-4px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#7B3F8A",
                color: "white",
                fontSize: "0.625rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </span>
          </button>
        </div>
      </nav>

      {/* ── HERO ── Editorial commerce */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A0A2E 0%, #3D1B5A 50%, #5C2D7A 100%)",
          minHeight: "88vh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Subtle texture pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 80% 20%, rgba(232,196,160,0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(123,63,138,0.2) 0%, transparent 40%)",
          }}
        />

        {/* Left: Hero copy */}
        <div style={{ padding: "5rem 3rem 5rem 3rem", position: "relative", maxWidth: "600px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,196,160,0.12)",
              border: "1px solid rgba(232,196,160,0.25)",
              borderRadius: "4px",
              padding: "0.375rem 0.875rem",
              marginBottom: "2rem",
            }}
          >
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#E8C4A0", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              New Collection · Monsoon Edit
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              color: "white",
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Skincare
            <br />
            <span style={{ color: "#E8C4A0" }}>Designed</span>
            <br />
            for India.
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "420px",
              marginBottom: "2.5rem",
            }}
          >
            Clinically formulated for Indian skin — every active, every percentage, every benefit. No mystery ingredients.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#bestsellers"
              style={{
                padding: "0.9375rem 2.25rem",
                background: "#E8C4A0",
                color: "#1A0A2E",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "0.9375rem",
                letterSpacing: "-0.01em",
              }}
            >
              Shop Now
            </a>
            <a
              href="#collections"
              style={{
                padding: "0.9375rem 2.25rem",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 500,
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "0.9375rem",
              }}
            >
              Explore Collections
            </a>
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", gap: "2rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { label: "No Parabens", icon: "✓" },
              { label: "No Sulphates", icon: "✓" },
              { label: "Cruelty Free", icon: "✓" },
              { label: "Derma Tested", icon: "✓" },
            ].map((t) => (
              <div key={t.label}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#E8C4A0" }}>{t.icon}</div>
                <div style={{ fontSize: "0.625rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Featured product visual */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4rem 3rem",
            position: "relative",
          }}
        >
          {/* Product display card */}
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(232,196,160,0.2)",
              borderRadius: "16px",
              padding: "3rem 2.5rem",
              backdropFilter: "blur(20px)",
              maxWidth: "320px",
              width: "100%",
            }}
          >
            {/* Product bottle illustration (CSS) */}
            <div
              style={{
                width: "80px",
                height: "140px",
                margin: "0 auto 2rem",
                position: "relative",
              }}
            >
              {/* Bottle body */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "64px",
                  height: "120px",
                  background: "linear-gradient(160deg, rgba(232,196,160,0.9), rgba(180,130,100,0.9))",
                  borderRadius: "8px 8px 12px 12px",
                  border: "1px solid rgba(232,196,160,0.4)",
                }}
              />
              {/* Bottle neck */}
              <div
                style={{
                  position: "absolute",
                  bottom: "118px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "32px",
                  height: "20px",
                  background: "rgba(232,196,160,0.7)",
                  borderRadius: "4px 4px 0 0",
                }}
              />
              {/* Label */}
              <div
                style={{
                  position: "absolute",
                  bottom: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "50px",
                  background: "rgba(26,10,46,0.7)",
                  borderRadius: "3px",
                  padding: "4px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "0.4375rem", fontWeight: 800, color: "#E8C4A0", letterSpacing: "0.1em" }}>KAASNI</div>
                <div style={{ fontSize: "0.375rem", color: "rgba(232,196,160,0.7)", letterSpacing: "0.05em" }}>SERUM</div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8C4A0", marginBottom: "0.5rem" }}>Featured</div>
              <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em", marginBottom: "0.375rem" }}>Luminance Serum 2%</h2>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>Niacinamide + Zinc · 30 ml</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "white" }}>₹1,290</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button aria-label="Decrease quantity" style={{ width: "28px", height: "28px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", background: "transparent", color: "white", cursor: "pointer", fontSize: "0.875rem" }}>−</button>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "white", minWidth: "20px", textAlign: "center" }}>1</span>
                  <button aria-label="Increase quantity" style={{ width: "28px", height: "28px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", background: "transparent", color: "white", cursor: "pointer", fontSize: "0.875rem" }}>+</button>
                </div>
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "#E8C4A0",
                  color: "#1A0A2E",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section id="collections" style={{ padding: "5rem 0", background: "#FDFCFA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B6B9A", fontWeight: 700, marginBottom: "0.75rem" }}>Collections</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A0A2E", letterSpacing: "-0.03em" }}>
              Shop by Skin Goal
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {collections.map((col) => (
              <a
                key={col.id}
                href={`#${col.id}`}
                style={{
                  display: "block",
                  background: col.bg,
                  borderRadius: "12px",
                  padding: "2rem",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: col.accent }}>{col.emoji}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A0A2E", marginBottom: "0.375rem" }}>{col.name}</h3>
                <p style={{ fontSize: "0.8125rem", color: "#5A4B6A", marginBottom: "0.75rem" }}>{col.subtitle}</p>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: col.accent }}>{col.count} products →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESTSELLERS ── */}
      <section id="bestsellers" style={{ padding: "5rem 0", background: "#F7F5FA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B6B9A", fontWeight: 700, marginBottom: "0.75rem" }}>Most Loved</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A0A2E", letterSpacing: "-0.03em" }}>
                Bestsellers
              </h2>
            </div>
            {/* Filters demo */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["All Skin Types", "Oily", "Dry", "Sensitive", "Combination"].map((filter, i) => (
                <button
                  key={filter}
                  style={{
                    padding: "0.375rem 0.875rem",
                    borderRadius: "100px",
                    border: i === 0 ? "none" : "1px solid rgba(0,0,0,0.1)",
                    background: i === 0 ? "#1A0A2E" : "white",
                    color: i === 0 ? "white" : "#5A4B6A",
                    fontSize: "0.75rem",
                    fontWeight: i === 0 ? 700 : 500,
                    cursor: "pointer",
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {/* Product image area */}
                <div
                  style={{
                    height: "200px",
                    background: product.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {product.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: product.badgeColor!,
                        color: "white",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.25rem 0.625rem",
                        borderRadius: "3px",
                      }}
                    >
                      {product.badge}
                    </div>
                  )}
                  {/* Product bottle CSS illustration */}
                  <div style={{ position: "relative", width: "60px", height: "110px" }}>
                    <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "52px", height: "90px", background: `linear-gradient(160deg, ${product.shade}CC, ${product.shade}88)`, borderRadius: "6px 6px 10px 10px", border: `1px solid ${product.shade}44` }} />
                    <div style={{ position: "absolute", bottom: "88px", left: "50%", transform: "translateX(-50%)", width: "26px", height: "16px", background: `${product.shade}99`, borderRadius: "3px 3px 0 0" }} />
                    <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", width: "40px", background: "rgba(26,10,46,0.6)", borderRadius: "2px", padding: "3px", textAlign: "center" }}>
                      <div style={{ fontSize: "0.3125rem", fontWeight: 800, color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}>KAASNI</div>
                    </div>
                  </div>
                </div>

                {/* Product info */}
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8B6B9A", marginBottom: "0.375rem" }}>{product.subtitle}</div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A0A2E", marginBottom: "0.5rem" }}>{product.name}</h3>
                  <p style={{ fontSize: "0.8125rem", color: "#6B5B7A", lineHeight: 1.6, marginBottom: "1rem" }}>{product.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div>
                      <span style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#1A0A2E" }}>{product.price}</span>
                      {product.originalPrice && (
                        <span style={{ fontSize: "0.8125rem", color: "#9B8AAA", textDecoration: "line-through", marginLeft: "0.5rem" }}>{product.originalPrice}</span>
                      )}
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "#8B6B9A" }}>{product.size}</span>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      padding: "0.6875rem",
                      background: "#1A0A2E",
                      color: "white",
                      fontWeight: 700,
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.8125rem",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="#collections"
              style={{
                display: "inline-block",
                padding: "0.875rem 2.5rem",
                border: "1px solid #1A0A2E",
                color: "#1A0A2E",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "0.875rem",
              }}
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS EDUCATION ── */}
      <section id="ingredients" style={{ padding: "5rem 0", background: "#FDFCFA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B6B9A", fontWeight: 700, marginBottom: "1rem" }}>Ingredient Transparency</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#1A0A2E", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
                We list every active. Every percentage. Every reason it&apos;s there.
              </h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#5A4B6A" }}>
                No proprietary blends. No hidden fillers. Every Kaasni formula is fully disclosed — so you know exactly what you&apos;re putting on your skin.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(0,0,0,0.07)", borderRadius: "12px", overflow: "hidden" }}>
              {ingredients.map((ing) => (
                <div key={ing.name} style={{ background: "#FDFCFA", padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#1A0A2E", marginBottom: "0.375rem" }}>{ing.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#8B6B9A" }}>{ing.benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY KAASNI ── */}
      <section style={{ padding: "5rem 0", background: "#1A0A2E" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8C4A0", fontWeight: 700, marginBottom: "0.75rem" }}>The Kaasni Standard</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>Why We Are Different</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}>
            {whyKaasni.map((item) => (
              <div key={item.title} style={{ background: "#1A0A2E", padding: "2.5rem" }}>
                <div style={{ width: "32px", height: "2px", background: "#E8C4A0", marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHIPPING & RETURNS ── */}
      <section style={{ padding: "3rem 0", background: "#F7F5FA", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "2rem" }}>
            {[
              { icon: "📦", title: "Free Shipping", sub: "On all orders above ₹999" },
              { icon: "↩", title: "Easy Returns", sub: "No-questions 7-day window" },
              { icon: "🔬", title: "Derma Tested", sub: "All products clinically evaluated" },
              { icon: "🇮🇳", title: "Made in India", sub: "Formulated for Indian skin" },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A0A2E" }}>{item.title}</div>
                  <div style={{ fontSize: "0.75rem", color: "#8B6B9A" }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO CART DRAWER (collapsed visual) ── */}
      <section id="cart" style={{ padding: "5rem 0", background: "#FDFCFA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1A0A2E", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>Your Cart</h2>
              <p style={{ fontSize: "0.875rem", color: "#8B6B9A", marginBottom: "2rem" }}>1 item · Free shipping applied</p>
              {cartItems.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem", background: "#F7F5FA", borderRadius: "8px", marginBottom: "0.75rem", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#1A0A2E" }}>{item.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#8B6B9A" }}>{item.size} · Qty: {item.qty}</div>
                  </div>
                  <div style={{ fontWeight: 800, color: "#1A0A2E" }}>{item.price}</div>
                </div>
              ))}
            </div>
            {/* Order summary */}
            <div style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "12px", padding: "2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1A0A2E", marginBottom: "1.5rem" }}>Order Summary</h3>
              {[
                { label: "Subtotal", value: "₹1,290" },
                { label: "Shipping", value: "Free" },
                { label: "Coupon (KAASNI10)", value: "−₹129" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#5A4B6A", marginBottom: "0.875rem" }}>
                  <span>{row.label}</span><span style={{ fontWeight: 600, color: "#1A0A2E" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, color: "#1A0A2E" }}>
                  <span>Total</span><span>₹1,161</span>
                </div>
              </div>
              <div style={{ background: "#FAF5F0", border: "1px solid rgba(139,94,60,0.2)", borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", fontSize: "0.8125rem", color: "#5A4B6A", textAlign: "center" }}>
                <strong style={{ color: "#1A0A2E" }}>Portfolio demonstration.</strong> This is a fictional showcase website.{" "}
                <Link href="/#pricing" style={{ color: "#7B3F8A", fontWeight: 700 }}>Get this kind of website for your brand →</Link>
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "0.9375rem",
                  background: "#1A0A2E",
                  color: "white",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9375rem",
                  marginBottom: "0.75rem",
                }}
              >
                Proceed to Checkout
              </button>
              <button
                style={{
                  width: "100%",
                  padding: "0.9375rem",
                  background: "#E8C4A0",
                  color: "#1A0A2E",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9375rem",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1A0A2E", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <div style={{ fontWeight: 800, color: "white", fontSize: "1.0625rem", letterSpacing: "-0.02em" }}>Kaasni</div>
          <div style={{ fontSize: "0.5625rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#E8C4A0", marginTop: "2px" }}>Skincare</div>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#E8C4A0", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
