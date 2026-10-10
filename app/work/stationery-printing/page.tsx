import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Stationery & Print Shop Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a modern retail website for an Indian stationery and printing store. Demonstrates category browsing, print pricing, and WhatsApp ordering flow. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/stationery-printing` },
};

const categories = [
  {
    id: "school",
    name: "School Supplies",
    desc: "Notebooks, geometry boxes, bags, art supplies, and everything for the new academic year.",
    items: ["Ruled & Unruled Notebooks", "Geometry Boxes", "School Bags", "Art Supplies", "Pencils & Pens"],
    badge: "Seasonal Stock",
    badgeColor: "#0D7A8A",
  },
  {
    id: "office",
    name: "Office Stationery",
    desc: "Files, folders, registers, printing paper, and everyday office supplies.",
    items: ["Office Files & Folders", "A4 Printing Paper", "Registers & Ledgers", "Sticky Notes", "Pens & Markers"],
    badge: null,
    badgeColor: null,
  },
  {
    id: "printing",
    name: "Printing Services",
    desc: "Visiting cards, letterheads, pamphlets, brochures, banners, and more.",
    items: ["Visiting Cards", "Letterheads", "Pamphlets & Flyers", "Brochures", "A4 / A3 Colour Print"],
    badge: "Fast Turnaround",
    badgeColor: "#E55A2B",
  },
  {
    id: "custom",
    name: "Custom Printing",
    desc: "Personalised notebooks, branded stationery, and custom office supplies for businesses.",
    items: ["Branded Notebooks", "Custom Letterheads", "Company Diaries", "Event Materials", "Bulk Custom Orders"],
    badge: "Corporate Orders",
    badgeColor: "#6D28D9",
  },
];

const printingServices = [
  { name: "Visiting Cards (250 pcs)", price: "₹299 onwards", note: "Glossy / Matte finish" },
  { name: "A4 Colour Print", price: "₹6 per sheet", note: "Single or double-sided" },
  { name: "A4 B&W Print", price: "₹1.50 per sheet", note: "" },
  { name: "Pamphlet (1000 pcs)", price: "₹1,199 onwards", note: "A5 / A4 sizes" },
  { name: "Letterhead (250 pcs)", price: "₹699 onwards", note: "With your branding" },
  { name: "Banner (3×5 ft)", price: "₹399 onwards", note: "Flex / Vinyl" },
];

const faqs = [
  { q: "Can I place bulk orders for a school?", a: "Yes. We take bulk orders for schools — notebooks, art supplies, stationery packs and more. Send us the requirements on WhatsApp and we will provide a detailed quote with delivery terms." },
  { q: "What is the turnaround for printed visiting cards?", a: "Standard visiting cards are typically ready within 24–48 hours after design approval. Urgent orders may be possible — call us to confirm." },
  { q: "Do you deliver to offices?", a: "Bulk and corporate orders can be arranged for delivery to offices in the Delhi area. Delivery terms depend on quantity and location. Contact the store for details." },
  { q: "Do you do custom logo-branded stationery?", a: "Yes. We offer branded notebooks, letterheads, envelopes, and corporate diaries with your logo and design. WhatsApp us your requirements for a quote." },
];

export default function StationeryPrintingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#FAFAF8" }}
    >
      {/* ── NAV ── Clean retail, ink navy */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#0F1923",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#F5C518",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1923" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "white" }}>Roshni</div>
            <div style={{ fontSize: "0.5rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5C518" }}>Stationery & Print</div>
          </div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Categories", "Printing", "Bulk Orders", "Store Info"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          style={{
            padding: "0.5rem 1rem",
            background: "#25D366",
            color: "white",
            fontWeight: 700,
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.8125rem",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
          }}
        >
          Enquire on WhatsApp
        </a>
      </nav>

      {/* ── HERO ── Ink navy with yellow accent, product-forward */}
      <section style={{ paddingTop: "60px", background: "#0F1923" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem 0" }}>
          {/* Top headline */}
          <div style={{ paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              style={{
                display: "inline-flex",
                background: "#F5C518",
                color: "#0F1923",
                fontWeight: 800,
                fontSize: "0.6875rem",
                padding: "0.25rem 0.625rem",
                borderRadius: "3px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Old Delhi, Delhi NCR
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              <h1
                style={{
                  fontSize: "clamp(2.25rem, 6vw, 5rem)",
                  fontWeight: 900,
                  lineHeight: 1.0,
                  color: "white",
                  letterSpacing: "-0.04em",
                  margin: 0,
                }}
              >
                Stationery &
                <br />
                <span style={{ color: "#F5C518" }}>Printing</span>
                <br />
                You Can Rely On.
              </h1>

              <div style={{ maxWidth: "320px" }}>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>
                  School and office stationery, visiting cards, pamphlets, bulk printing —
                  all from one trusted store in Delhi.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <a
                    href="#contact"
                    style={{
                      padding: "0.875rem 1.5rem",
                      background: "#25D366",
                      color: "white",
                      fontWeight: 700,
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9375rem",
                      textAlign: "center",
                    }}
                  >
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="#categories"
                    style={{
                      padding: "0.875rem 1.5rem",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 600,
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontSize: "0.9375rem",
                      textAlign: "center",
                    }}
                  >
                    Browse Categories
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── PRODUCT IMAGE GRID — 3 Unsplash photos showing stationery context */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", paddingBottom: "2rem" }}>
            {[
              {
                src: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=75&auto=format&fit=crop",
                alt: "Neatly arranged notebooks and stationery supplies on a wooden desk",
              },
              {
                src: "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=600&q=75&auto=format&fit=crop",
                alt: "Office stationery flatlay with pens, clips, and organiser",
              },
              {
                src: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=75&auto=format&fit=crop",
                alt: "Printed business cards and branding stationery laid out on a desk",
              },
            ].map((img, i) => (
              <div key={i} style={{ position: "relative", height: "180px", borderRadius: "6px", overflow: "hidden" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 400px"
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(15,25,35,0.25)" }} />
              </div>
            ))}
          </div>

          {/* Category quick-nav */}
          <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
            {categories.map((cat, i) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{
                  padding: "1rem 1.5rem",
                  borderRight: i < categories.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                }}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section id="categories" style={{ padding: "4rem 0", background: "#FAFAF8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0F1923", letterSpacing: "-0.025em", marginBottom: "2.5rem" }}>
            Shop by Category
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {categories.map((cat) => (
              <div
                id={cat.id}
                key={cat.id}
                style={{
                  background: "white",
                  border: "1px solid #E5E5E0",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {/* Category header */}
                <div style={{ background: "#0F1923", padding: "1.5rem", position: "relative" }}>
                  {cat.badge && (
                    <div
                      style={{
                        display: "inline-block",
                        background: cat.badgeColor || "#F5C518",
                        color: "white",
                        fontSize: "0.625rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "3px",
                        marginBottom: "0.75rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {cat.badge}
                    </div>
                  )}
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "white", marginBottom: "0.375rem" }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: 0 }}>
                    {cat.desc}
                  </p>
                </div>

                {/* Item list */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {cat.items.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          fontSize: "0.875rem",
                          color: "#374151",
                        }}
                      >
                        <div style={{ width: "5px", height: "5px", background: "#F5C518", borderRadius: "50%", flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    style={{
                      display: "block",
                      marginTop: "1.25rem",
                      padding: "0.625rem",
                      background: "#0F1923",
                      color: "#F5C518",
                      fontWeight: 700,
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.8125rem",
                      textAlign: "center",
                    }}
                  >
                    Enquire →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINTING SERVICES ── Pricing table */}
      <section id="printing" style={{ padding: "4rem 0", background: "#0F1923" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", letterSpacing: "-0.025em" }}>
              Printing Services & Pricing
            </h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", marginTop: "0.5rem" }}>
              Sample pricing. Final quotes based on quantity, design requirements, and material.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(245,197,24,0.15)", border: "1px solid rgba(245,197,24,0.15)", borderRadius: "12px", overflow: "hidden" }}>
            {printingServices.map((p) => (
              <div key={p.name} style={{ background: "#0F1923", padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.5rem" }}>{p.name}</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#F5C518" }}>{p.price}</div>
                {p.note && <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: "0.375rem" }}>{p.note}</div>}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                padding: "0.875rem 2.25rem",
                background: "#25D366",
                color: "white",
                fontWeight: 700,
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.9375rem",
              }}
            >
              Get a Print Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── BULK ORDERS ── */}
      <section id="bulk-orders" style={{ padding: "4rem 0", background: "#FAFAF8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0F1923", letterSpacing: "-0.025em", marginBottom: "1rem" }}>
                Bulk Orders for Schools & Offices
              </h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#374151", marginBottom: "1.5rem" }}>
                Schools, coaching institutes, offices, and event organisers — we take bulk orders
                for stationery and printing at competitive prices.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
                {[
                  "Minimum quantity discounts available",
                  "Custom packaging for school stationery kits",
                  "Corporate diary and branded stationery",
                  "Delivery for large orders",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <div style={{ width: "18px", height: "18px", background: "#F5C518", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F1923" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  padding: "0.9375rem 2rem",
                  background: "#0F1923",
                  color: "#F5C518",
                  fontWeight: 700,
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Request Bulk Quote
              </a>
            </div>

            {/* Store info */}
            <div style={{ background: "white", border: "1px solid #E5E5E0", borderRadius: "16px", padding: "2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1923", marginBottom: "1.5rem" }}>
                Store Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", fontWeight: 600, marginBottom: "0.375rem" }}>Location</div>
                  <div style={{ fontSize: "0.9375rem", color: "#0F1923" }}>Old Delhi, Delhi NCR</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", fontWeight: 600, marginBottom: "0.375rem" }}>Store Hours</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
                      <span style={{ color: "#4B5563" }}>Monday – Saturday</span>
                      <span style={{ fontWeight: 700, color: "#0F1923" }}>9:30 AM – 8 PM</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
                      <span style={{ color: "#4B5563" }}>Sunday</span>
                      <span style={{ fontWeight: 700, color: "#0F1923" }}>10 AM – 5 PM</span>
                    </div>
                  </div>
                </div>
                <div id="contact" style={{ padding: "1rem", background: "#FAFAF8", border: "1px solid #E5E5E0", borderRadius: "8px", fontSize: "0.8125rem", color: "#4B5563" }}>
                  <strong style={{ color: "#0F1923" }}>Portfolio demonstration.</strong> This is a fictional showcase website.
                  {" "}<Link href="/#pricing" style={{ color: "#F5C518", fontWeight: 700 }}>Get this kind of website for your store →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="store-info" style={{ padding: "4rem 0", background: "white" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)", fontWeight: 800, color: "#0F1923", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
            Common Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ border: "1px solid #E5E5E0", borderRadius: "10px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0F1923", marginBottom: "0.625rem" }}>{faq.q}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#4B5563" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0F1923", padding: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ fontWeight: 800, color: "white" }}>
          Roshni <span style={{ color: "#F5C518" }}>Stationery & Print</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#F5C518", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
