import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Industrial Manufacturer Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a corporate B2B website for an Indian industrial fastener manufacturer. Demonstrates product families, technical specs, capabilities, and RFQ flow. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/manufacturing` },
};

const productFamilies = [
  {
    name: "Hex Bolts & Nuts",
    range: "M6 – M64",
    material: "Mild Steel · Stainless Steel · Alloy Steel",
    standards: "IS, DIN, ASTM",
    desc: "High-strength hex bolts and matching nuts manufactured to dimensional tolerances for structural and machinery applications.",
  },
  {
    name: "Anchor Fasteners",
    range: "M8 – M30",
    material: "Carbon Steel · SS304 · SS316",
    standards: "IS, DIN",
    desc: "Chemical and mechanical anchors for concrete, masonry, and structural connection applications.",
  },
  {
    name: "Threaded Rods & Studs",
    range: "M8 – M48 · Up to 3000mm",
    material: "MS · HDG · Stainless",
    standards: "IS, DIN, BSW",
    desc: "Full-length and custom-cut threaded rods and stud bolts for construction and equipment mounting.",
  },
  {
    name: "Precision Turned Components",
    range: "Custom",
    material: "Steel · Brass · Aluminium",
    standards: "Drawing-based",
    desc: "CNC-turned components to customer drawings. Used in automotive, electrical, and engineering assemblies.",
  },
];

const industries = [
  { name: "Construction & Infrastructure", icon: "🏗" },
  { name: "Automotive & Component", icon: "🔩" },
  { name: "Electrical & Switchgear", icon: "⚡" },
  { name: "Heavy Engineering", icon: "🏭" },
  { name: "Agricultural Equipment", icon: "🌾" },
  { name: "Oil & Gas Equipment", icon: "⚙" },
];

const capabilities = [
  { label: "Cold Forging", desc: "High-volume cold forging for bolts, nuts, and fastener blanks." },
  { label: "Thread Rolling", desc: "Precision thread rolling for dimensional accuracy and surface finish." },
  { label: "Heat Treatment", desc: "In-house heat treatment — annealing, quenching, tempering for required strength grades." },
  { label: "Surface Finishing", desc: "Zinc plating, hot-dip galvanising, black oxide, and plain finish options." },
  { label: "Quality Inspection", desc: "Dimensional checks, tensile and hardness testing at each production stage." },
  { label: "Custom Fabrication", desc: "Non-standard specifications, special materials, and drawing-based orders accepted." },
];

const faqs = [
  { q: "What is your minimum order quantity?", a: "MOQ varies by product. For standard fasteners, MOQ is typically one box or 100 pieces. For custom or special specifications, please contact us to discuss requirements." },
  { q: "Do you supply to projects outside Gujarat?", a: "Pan-India supply arrangements are available for bulk orders dispatched by road or rail. Contact us to discuss freight and scheduling requirements." },
  { q: "Can you manufacture to custom drawings?", a: "Yes. We accept custom specifications and drawing-based orders for fasteners and turned components. Please share your drawings on email or WhatsApp for a quotation." },
  { q: "What is your standard lead time?", a: "Lead time varies by product and quantity. Standard in-stock items can be dispatched within 2–5 working days. Custom production timelines are confirmed at order stage." },
];

export default function ManufacturingPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#F4F5F7" }}
    >
      {/* ── NAV ── Corporate, precise */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "white",
          borderBottom: "1px solid #D1D5DB",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              background: "#0F3460",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
            }}
          >
            <span style={{ color: "#E8601C", fontWeight: 900, fontSize: "1rem" }}>D</span>
          </div>
          <div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#0F3460", lineHeight: 1.2 }}>
              Dhruv Precision Components
            </div>
            <div style={{ fontSize: "0.5625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7280" }}>
              Industrial Fasteners · Rajkot, Gujarat
            </div>
          </div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Products", "Industries", "Capabilities", "Enquiry"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#enquiry"
          style={{
            padding: "0.5625rem 1.25rem",
            background: "#E8601C",
            color: "white",
            fontWeight: 700,
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.875rem",
          }}
        >
          Request a Quote
        </a>
      </nav>

      {/* ── HERO ── Industrial corporate */}
      <section
        style={{
          paddingTop: "64px",
          background: "#0F3460",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Technical grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem 5rem", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid rgba(232,96,28,0.4)",
                  borderRadius: "3px",
                  padding: "0.375rem 0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ width: "6px", height: "6px", background: "#E8601C", borderRadius: "50%" }} />
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#E8601C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Rajkot, Gujarat · Est. Industry
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.875rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  color: "white",
                  letterSpacing: "-0.03em",
                  marginBottom: "1.5rem",
                }}
              >
                Precision Fasteners
                <br />
                for{" "}
                <span style={{ color: "#E8601C" }}>Indian Industry.</span>
              </h1>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: "500px",
                  marginBottom: "2.5rem",
                }}
              >
                Manufacturers of high-strength industrial fasteners and precision turned components
                — supplying to construction, automotive, and engineering sectors across India.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href="#enquiry"
                  style={{
                    padding: "0.875rem 2rem",
                    background: "#E8601C",
                    color: "white",
                    fontWeight: 700,
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                  }}
                >
                  Request a Quote
                </a>
                <a
                  href="#products"
                  style={{
                    padding: "0.875rem 2rem",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 600,
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                  }}
                >
                  View Products
                </a>
              </div>
            </div>

            {/* Hero right: product image + spec card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Industrial fastener photography */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=75&auto=format&fit=crop"
                  alt="Precision industrial steel bolts and fasteners on a dark metal surface, illustrative"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(15,52,96,0.35)" }} />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    fontSize: "0.625rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Illustrative — precision fastener range
                </div>
              </div>

              {/* Spec summary card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "2rem",
                }}
              >
                <div style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8601C", marginBottom: "1.5rem", fontWeight: 700 }}>
                  Quick Overview
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { label: "Product Range", value: "Fasteners & Precision Parts" },
                    { label: "Size Range", value: "M6 to M64" },
                    { label: "Standards", value: "IS · DIN · ASTM · BSW" },
                    { label: "Materials", value: "MS · Alloy · SS · Brass" },
                    { label: "Finishes", value: "Zinc · HDG · Black Oxide · Plain" },
                    { label: "Supply", value: "Pan-India" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "1.25rem",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)" }}>{item.label}</span>
                      <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "white" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" style={{ padding: "5rem 0", background: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8601C", fontWeight: 700, marginBottom: "0.75rem" }}>
              Product Range
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0F3460", letterSpacing: "-0.025em" }}>
              Product Families
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#D1D5DB", border: "1px solid #D1D5DB", borderRadius: "8px", overflow: "hidden" }}>
            {productFamilies.map((product) => (
              <div
                key={product.name}
                style={{
                  background: "white",
                  padding: "2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F3460", marginBottom: "0.625rem" }}>
                    {product.name}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <div style={{ fontSize: "0.8125rem" }}>
                      <span style={{ color: "#6B7280" }}>Range: </span>
                      <span style={{ fontWeight: 600, color: "#1F2937" }}>{product.range}</span>
                    </div>
                    <div style={{ fontSize: "0.8125rem" }}>
                      <span style={{ color: "#6B7280" }}>Standards: </span>
                      <span style={{ fontWeight: 600, color: "#E8601C" }}>{product.standards}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#374151", marginBottom: "0.75rem" }}>
                    {product.desc}
                  </p>
                  <div style={{ fontSize: "0.8125rem", color: "#6B7280" }}>
                    <span style={{ fontWeight: 600, color: "#1F2937" }}>Material: </span>{product.material}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              href="#enquiry"
              style={{
                display: "inline-flex",
                padding: "0.875rem 2rem",
                border: "1px solid #0F3460",
                color: "#0F3460",
                fontWeight: 700,
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Send Product Enquiry →
            </a>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL IMAGE BAND ── Illustrative manufacturing context */}
      <section
        style={{
          position: "relative",
          height: "320px",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=75&auto=format&fit=crop"
          alt="Industrial manufacturing floor with precision machinery — illustrative of fastener production context"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(15,52,96,0.85) 0%, rgba(15,52,96,0.45) 60%, rgba(15,52,96,0.2) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <div>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8601C", fontWeight: 700, marginBottom: "0.75rem" }}>
              Manufacturing Context — Illustrative
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                maxWidth: "480px",
              }}
            >
              Built for Indian Industry.
              <br />
              <span style={{ color: "#E8601C" }}>Precision at Scale.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" style={{ padding: "5rem 0", background: "#F4F5F7" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0F3460", letterSpacing: "-0.025em" }}>
              Industries Served
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
            {industries.map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: "white",
                  border: "1px solid #D1D5DB",
                  borderRadius: "6px",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{ind.icon}</span>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1F2937" }}>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" style={{ padding: "5rem 0", background: "#0F3460" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8601C", fontWeight: 700, marginBottom: "0.75rem" }}>
              Manufacturing
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "white", letterSpacing: "-0.025em" }}>
              Capabilities
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", background: "rgba(232,96,28,0.15)", border: "1px solid rgba(232,96,28,0.15)", borderRadius: "8px", overflow: "hidden" }}>
            {capabilities.map((cap) => (
              <div key={cap.label} style={{ background: "#0F3460", padding: "2rem" }}>
                <div style={{ width: "24px", height: "2px", background: "#E8601C", marginBottom: "1.25rem" }} />
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.625rem" }}>{cap.label}</h3>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY ── */}
      <section id="enquiry" style={{ padding: "5rem 0", background: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0F3460", letterSpacing: "-0.025em", marginBottom: "1rem" }}>
                Request a Quote or Product Enquiry
              </h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#374151", marginBottom: "2rem" }}>
                Share your product requirements — size, material, standard, and quantity — and we will
                send you a quotation within one business day.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Portfolio demo notice — no fake email/phone */}
                <div style={{ padding: "1.25rem 1.5rem", background: "#F4F5F7", border: "1px solid #D1D5DB", borderRadius: "4px", fontSize: "0.875rem", color: "#374151" }}>
                  <strong>Portfolio demonstration.</strong> This is a fictional showcase website.
                  <br />
                  <Link href="/#pricing" style={{ color: "#E8601C", fontWeight: 700 }}>Get this kind of website for your business →</Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F3460", marginBottom: "1.5rem" }}>
                Frequently Asked
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {faqs.map((faq) => (
                  <div key={faq.q} style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1F2937", marginBottom: "0.5rem" }}>{faq.q}</h4>
                    <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "#4B5563" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#0A1F3C",
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <div style={{ fontSize: "0.9375rem", fontWeight: 800, color: "white" }}>
            Dhruv Precision Components
          </div>
          <div style={{ fontSize: "0.75rem", color: "#4B5563", marginTop: "0.25rem" }}>
            Industrial Fasteners & Precision Parts · Rajkot, Gujarat
          </div>
        </div>
        <div style={{ fontSize: "0.75rem", color: "#374151" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#E8601C", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
