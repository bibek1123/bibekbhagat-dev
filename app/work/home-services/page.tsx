import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Home Services Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a conversion-focused home services website for an Indian home maintenance business. Demonstrates service listing, pricing, and lead-generation layout. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/home-services` },
};

const services = [
  {
    name: "AC Service & Repair",
    desc: "Regular servicing, gas refill, cooling issues, PCB repair, installation and uninstallation.",
    badge: "Popular",
  },
  {
    name: "Plumbing",
    desc: "Leaks, tap fittings, drainage issues, water heater installation, pipe repairs.",
    badge: null,
  },
  {
    name: "Electrical Work",
    desc: "Wiring, switch fittings, fan installation, MCB repair, power socket issues.",
    badge: null,
  },
  {
    name: "Deep Cleaning",
    desc: "Kitchen deep clean, bathroom sanitisation, sofa and mattress cleaning.",
    badge: "Popular",
  },
  {
    name: "Appliance Repair",
    desc: "Washing machine, refrigerator, geyser, microwave, and other home appliances.",
    badge: null,
  },
  {
    name: "Painting",
    desc: "Interior and exterior painting, texture work, waterproofing, wall repairs.",
    badge: null,
  },
  {
    name: "Carpentry",
    desc: "Furniture assembly, door and window repairs, wardrobe fitting, cabinet work.",
    badge: null,
  },
  {
    name: "Waterproofing",
    desc: "Roof, bathroom, and wall waterproofing — stop seepage before it spreads.",
    badge: null,
  },
];

const pricingExamples = [
  { service: "AC Service (1 unit)", price: "₹399 – ₹599" },
  { service: "Plumbing visit", price: "₹299 onwards" },
  { service: "Electrical visit", price: "₹249 onwards" },
  { service: "Kitchen deep clean", price: "₹1,299 – ₹1,799" },
];

const areas = [
  "Shivajinagar", "Kothrud", "Baner", "Aundh",
  "Wakad", "Hinjewadi", "Viman Nagar", "Koregaon Park",
  "Hadapsar", "Magarpatta", "Kharadi", "Pimpri-Chinchwad",
];

const steps = [
  { label: "Call or WhatsApp", icon: "📞", desc: "Tell us the problem. We give you an estimated quote over the call." },
  { label: "Schedule", icon: "📅", desc: "Pick your slot. We confirm and send you the technician details." },
  { label: "We Arrive", icon: "🛠", desc: "Technician arrives at the scheduled time with tools ready." },
  { label: "Pay After Job", icon: "✅", desc: "You pay only after the work is complete and you are satisfied." },
];

const faqs = [
  { q: "Do you cover all areas in Pune?", a: "We currently cover most of central and west Pune including Shivajinagar, Kothrud, Baner, Wakad, Hinjewadi, Viman Nagar, and more. Call us to confirm for your specific pin code." },
  { q: "How do I get a price estimate?", a: "Call or WhatsApp us with the issue. For standard jobs like AC service or plumbing, we provide a rough estimate over the call. For complex work, we send a technician to assess first." },
  { q: "Do you provide a warranty on your work?", a: "Yes — most services include a 30-day workmanship warranty. If the issue recurs due to our work, we will resolve it at no extra charge." },
  { q: "How quickly can you come?", a: "For most services, we can schedule within 24 hours. Emergency slots are available for urgent issues like water leaks or electrical faults — call directly for fastest response." },
];

export default function HomeServicesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "white" }}
    >
      {/* ── NAV ── Practical, instant clarity */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "white",
          borderBottom: "2px solid #F59E0B",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              background: "#1E293B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
            }}
          >
            <span style={{ color: "#F59E0B", fontWeight: 900, fontSize: "0.875rem" }}>FK</span>
          </div>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#1E293B" }}>FixKaro</div>
            <div style={{ fontSize: "0.5rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748B" }}>Home Services · Pune</div>
          </div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Services", "Areas", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "#374151", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.625rem" }}>
          <a
            href="#contact"
            style={{
              padding: "0.5rem 1rem",
              background: "#F59E0B",
              color: "#1E293B",
              fontWeight: 800,
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "0.875rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            📞 Get Estimate
          </a>
        </div>
      </nav>

      {/* ── HERO ── Immediate problem/solution, CTA above fold */}
      <section
        style={{
          paddingTop: "60px",
          background: "#1E293B",
          padding: "0",
        }}
      >
        {/* Real hero photo strip */}
        <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
          <Image
            src="/work/images/home-services-hero.jpg"
            alt="Professional technician servicing a home appliance in a clean Indian apartment"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(30,41,59,0.55)" }} />
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3.5rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  background: "#F59E0B",
                  color: "#1E293B",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "4px",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                🛠 Pune&apos;s Home Service Pros
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: "white",
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                }}
              >
                Home Problems Fixed.
                <br />
                <span style={{ color: "#F59E0B" }}>Fast. Fairly Priced.</span>
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.65)",
                  marginBottom: "2rem",
                  maxWidth: "440px",
                }}
              >
                AC repair, plumbing, electrical, deep cleaning and more — verified technicians
                across Pune. Check slot availability when you call.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
                <a
                  href="#contact"
                  style={{
                    padding: "0.9375rem 2rem",
                    background: "#F59E0B",
                    color: "#1E293B",
                    fontWeight: 800,
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  📞 Get Free Estimate
                </a>
                <a
                  href="#contact"
                  style={{
                    padding: "0.9375rem 2rem",
                    background: "#25D366",
                    color: "white",
                    fontWeight: 700,
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>

            {/* Quick service selector */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "1.5rem",
              }}
            >
              <div style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "1rem" }}>
                Popular Services
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                {services.filter(s => s.badge === "Popular" || ["AC Service & Repair", "Plumbing", "Electrical Work", "Deep Cleaning"].includes(s.name)).slice(0, 6).map((s) => (
                  <div
                    key={s.name}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      padding: "0.875rem",
                      position: "relative",
                    }}
                  >
                    {s.badge && (
                      <div style={{ position: "absolute", top: "-8px", right: "8px", background: "#F59E0B", color: "#1E293B", fontSize: "0.5625rem", fontWeight: 800, padding: "1px 6px", borderRadius: "3px" }}>
                        {s.badge}
                      </div>
                    )}
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>{s.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ background: "#F59E0B", padding: "0.75rem 1.5rem", display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          {["Verified Technicians", "Transparent Pricing", "On-Time Service", "Pay After Job Done"].map((t) => (
            <span key={t} style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1E293B" }}>✓ {t}</span>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "4rem 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.025em" }}>
              All Services
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {services.map((service) => (
              <div
                key={service.name}
                style={{
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  position: "relative",
                }}
              >
                {service.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "1rem",
                      background: "#F59E0B",
                      color: "#1E293B",
                      fontSize: "0.625rem",
                      fontWeight: 800,
                      padding: "2px 8px",
                      borderRadius: "3px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {service.badge}
                  </div>
                )}
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1E293B", marginBottom: "0.5rem" }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "#64748B" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE PRICING ── */}
      <section id="pricing" style={{ padding: "4rem 0", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.025em" }}>
              Sample Pricing
            </h2>
            <p style={{ fontSize: "0.875rem", color: "#64748B", marginTop: "0.5rem" }}>
              Starting prices for common jobs. Final quote confirmed after inspection.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1px", background: "#E2E8F0", border: "1px solid #E2E8F0", borderRadius: "12px", overflow: "hidden" }}>
            {pricingExamples.map((p) => (
              <div key={p.service} style={{ background: "white", padding: "1.5rem" }}>
                <div style={{ fontSize: "0.875rem", color: "#475569", marginBottom: "0.5rem" }}>{p.service}</div>
                <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#1E293B" }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "4rem 0", background: "#1E293B" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "white", letterSpacing: "-0.025em", marginBottom: "2.5rem" }}>
            How It Works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <div key={step.label} style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#F59E0B",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    color: "#1E293B",
                    fontSize: "0.875rem",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.375rem" }}>{step.label}</div>
                  <div style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section id="areas" style={{ padding: "4rem 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.025em" }}>
              Areas We Cover
            </h2>
            <p style={{ fontSize: "0.875rem", color: "#64748B", marginTop: "0.5rem" }}>
              Serving most of Pune city. Not sure? Call us — we&apos;ll let you know.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
            {areas.map((area) => (
              <div
                key={area}
                style={{
                  padding: "0.5rem 1.125rem",
                  border: "1px solid #E2E8F0",
                  borderRadius: "100px",
                  fontSize: "0.875rem",
                  color: "#374151",
                  fontWeight: 500,
                }}
              >
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "4rem 0", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1E293B", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
            Common Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1E293B", marginBottom: "0.625rem" }}>{faq.q}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#4B5563" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA / CONTACT ── Portfolio demo — no real number */}
      <section id="contact" style={{ padding: "3.5rem 1.5rem", background: "#F59E0B", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 900, color: "#1E293B", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Got a Problem at Home?
        </h2>
        <p style={{ fontSize: "1rem", color: "#374151", marginBottom: "1.5rem" }}>
          Contact the team for a free estimate. Slots available across Pune, Maharashtra.
        </p>
        <div style={{ background: "rgba(30,41,59,0.08)", border: "1px solid rgba(30,41,59,0.15)", borderRadius: "10px", padding: "1.25rem 2rem", display: "inline-block", marginBottom: "1rem", fontSize: "0.875rem", color: "#374151" }}>
          Portfolio demonstration &nbsp;·&nbsp;{" "}
          <Link href="/#pricing" style={{ color: "#1E293B", fontWeight: 800 }}>Get this kind of website for your business →</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0F172A", padding: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ fontWeight: 800, color: "white" }}>
          FixKaro <span style={{ color: "#F59E0B" }}>Home Services</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "#334155" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#F59E0B", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
