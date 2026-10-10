import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interior Design Studio Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a premium interior design studio website for an Indian residential and commercial design practice. Created as part of the bibekbhagat.dev web design portfolio.",
  alternates: { canonical: `${siteConfig.url}/work/interior-design` },
  openGraph: {
    title: "Interior Design Studio — Web Design Portfolio | bibekbhagat.dev",
    description: "See how a modern interior design studio website looks when built by bibekbhagat.dev.",
    type: "website",
  },
};

const projects = [
  { name: "Whitefield Residence", type: "Residential", scope: "4BHK Full Interior", year: "2024", accent: "#B8A082", bg: "#F5EFE6",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Modern Indian living room with warm tones and wooden accents" },
  { name: "Brigade Gateway Office", type: "Commercial", scope: "Corporate Workspace", year: "2024", accent: "#8B7D6B", bg: "#EDE8E1",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Contemporary open-plan office workspace with natural light" },
  { name: "Koramangala Studio Apartment", type: "Residential", scope: "Compact Living", year: "2023", accent: "#A09070", bg: "#F0EAE0",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Minimalist apartment interior with smart space planning" },
  { name: "Indiranagar Café", type: "Hospitality", scope: "F&B Interior", year: "2023", accent: "#7A6858", bg: "#E8E0D6",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=75&auto=format&fit=crop",
    imgAlt: "Warm café interior with exposed brick and ambient lighting" },
];

const services = [
  { title: "Residential Design", body: "Full-home and apartment interiors — from concept to handover. Spaces that feel like you." },
  { title: "Commercial & Workspace", body: "Offices, showrooms, and studios designed for how your team actually works." },
  { title: "Space Planning", body: "Intelligent layouts that make every square foot count — light, flow, and function." },
  { title: "Material & Furniture Sourcing", body: "Procurement of furniture, fixtures, and finishes — coordinated and delivered." },
  { title: "3D Visualisation", body: "See your space before a single wall changes. Detailed renders that remove the guesswork." },
  { title: "Hospitality & Retail", body: "Cafes, restaurants, and stores with environments that reflect your brand." },
];

export default function InteriorDesignPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FAF7F2" }}>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(250,247,242,0.94)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(43,34,22,0.08)", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.625rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9C8B78" }}>Interior Design · Bengaluru</div>
          <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#2B2216", letterSpacing: "-0.02em" }}>Atelier Aura</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div className="hidden md:flex" style={{ gap: "2rem", fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem" }}>
            {["Projects", "Services", "Studio", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#6B5D4E", fontWeight: 500, textDecoration: "none" }}>{item}</a>
            ))}
          </div>
          <a href="#contact" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", fontWeight: 600, padding: "0.5rem 1.25rem", border: "1px solid #2B2216", color: "#2B2216", background: "transparent", textDecoration: "none" }}>
            Book Consultation
          </a>
        </div>
      </nav>

      {/* ── HERO ── Real photography */}
      <section style={{ paddingTop: "64px" }}>
        {/* Full-bleed hero image */}
        <div style={{ position: "relative", height: "min(70vh, 600px)", overflow: "hidden" }}>
          <Image
            src="/work/images/interior-design-hero.jpg"
            alt="Luxury modern living room interior — warm ivory tones, teak wood, brass accents, natural light"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Dark overlay for text legibility */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(43,34,22,0.7) 0%, rgba(43,34,22,0.2) 60%, rgba(43,34,22,0.1) 100%)" }} />

          {/* Hero copy over image */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: "3rem 2rem", maxWidth: "1280px", margin: "0 auto", left: 0, right: 0 }}>
            <div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A97A", marginBottom: "1rem" }}>
                Studio · Est. Bengaluru
              </p>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.0, color: "#FAF7F2", letterSpacing: "-0.03em", margin: "0 0 1.5rem", maxWidth: "600px" }}>
                Spaces Designed
                <br />
                <em style={{ fontStyle: "italic", color: "#C9A97A" }}>to Last.</em>
              </h1>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "rgba(250,247,242,0.8)", maxWidth: "440px", margin: "0 0 2rem" }}>
                Residential and commercial interiors designed with rigour and restraint — spaces that work for how you live.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="#projects" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", fontWeight: 600, padding: "0.875rem 2rem", background: "#C9A97A", color: "#2B2216", textDecoration: "none" }}>
                  View Projects
                </a>
                <a href="#contact" style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", fontWeight: 500, padding: "0.875rem 2rem", border: "1px solid rgba(201,169,122,0.6)", color: "#C9A97A", textDecoration: "none" }}>
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Discipline tags */}
        <div style={{ background: "#F0E8DC", padding: "1.25rem 2rem", display: "flex", gap: "2rem", flexWrap: "wrap", borderBottom: "1px solid rgba(43,34,22,0.1)", fontFamily: "system-ui, sans-serif" }}>
          {["Residential", "Commercial", "Hospitality", "Bengaluru, Karnataka"].map((t) => (
            <span key={t} style={{ fontSize: "0.75rem", color: "#7A6858", letterSpacing: "0.05em" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "5rem 0", background: "#FAF7F2" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9C8B78", marginBottom: "0.75rem" }}>Selected Projects</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#2B2216", letterSpacing: "-0.025em", margin: 0 }}>Recent Work</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5px" }}>
            {projects.map((project, i) => (
              <div key={project.name} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", background: "#DDD5C8" }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1, aspectRatio: "16/9", minHeight: "240px", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={project.img}
                    alt={project.imgAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(43,34,22,0.3)" }} />
                  <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", background: "rgba(43,34,22,0.55)", padding: "0.25rem 0.625rem", backdropFilter: "blur(4px)" }}>
                    {project.type}
                  </div>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0, background: "#FAF7F2", padding: "clamp(2rem, 5vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C8B78", marginBottom: "1rem" }}>
                    {project.scope} · {project.year}
                  </div>
                  <h3 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", fontWeight: 700, color: "#2B2216", letterSpacing: "-0.02em", margin: "0 0 1rem" }}>{project.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "1.5rem", height: "1px", background: project.accent }} />
                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", color: "#7A6858" }}>Bengaluru, Karnataka</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#2B2216", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0", borderTop: "1px solid rgba(201,169,122,0.15)", borderLeft: "1px solid rgba(201,169,122,0.15)" }}>
            <div style={{ gridColumn: "1 / -1", padding: "3rem 2.5rem", borderBottom: "1px solid rgba(201,169,122,0.15)", borderRight: "1px solid rgba(201,169,122,0.15)" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A97A", marginBottom: "1rem" }}>What We Do</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#FAF7F2", letterSpacing: "-0.025em", margin: 0 }}>Services</h2>
            </div>
            {services.map((service) => (
              <div key={service.title} style={{ padding: "2.5rem", borderBottom: "1px solid rgba(201,169,122,0.15)", borderRight: "1px solid rgba(201,169,122,0.15)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#FAF7F2", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{service.title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", lineHeight: 1.7, color: "#9C8B78", margin: 0 }}>{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO ── */}
      <section id="studio" style={{ background: "#F0E8DC", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9C8B78", marginBottom: "1.5rem" }}>The Studio</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#2B2216", letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>Design That Earns Its Place</h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, color: "#5C4E3E", marginBottom: "1.25rem" }}>
                Atelier Aura takes on a limited number of projects at a time. Every space receives full attention — from the initial brief to the final finish.
              </p>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", lineHeight: 1.75, color: "#5C4E3E" }}>
                We work with residential clients, developers, and business owners who want interiors designed with care — not by the square foot.
              </p>
            </div>
            <div style={{ background: "#2B2216", padding: "3rem 2.5rem" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A97A", marginBottom: "2rem" }}>Our Approach</p>
              {[
                { step: "01", label: "Brief", desc: "Understanding your needs, lifestyle, and vision" },
                { step: "02", label: "Concept", desc: "Mood, material direction, and spatial layout" },
                { step: "03", label: "Design", desc: "Drawings, specifications, and 3D visualisation" },
                { step: "04", label: "Execution", desc: "Sourcing, coordination, and installation" },
              ].map((s, i) => (
                <div key={s.step} style={{ display: "flex", gap: "1.5rem", paddingBottom: i < 3 ? "1.5rem" : 0, marginBottom: i < 3 ? "1.5rem" : 0, borderBottom: i < 3 ? "1px solid rgba(201,169,122,0.12)" : "none" }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", color: "#C9A97A", fontWeight: 700, minWidth: "24px", paddingTop: "2px" }}>{s.step}</span>
                  <div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FAF7F2", marginBottom: "0.25rem" }}>{s.label}</div>
                    <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", color: "#9C8B78", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── No fake phone/email — demo CTA only */}
      <section id="contact" style={{ background: "#FAF7F2", padding: "5rem 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.6875rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9C8B78", marginBottom: "1.5rem" }}>Let&apos;s Work Together</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#2B2216", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>Ready to Begin?</h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.7, color: "#6B5D4E", maxWidth: "520px", margin: "0 auto 2rem" }}>
            Tell us about your space and what you have in mind. We&apos;ll schedule an initial conversation to understand your project.
          </p>

          {/* Demo notice + real CTA back to bibekbhagat.dev */}
          <div style={{ background: "#F0E8DC", border: "1px solid rgba(43,34,22,0.1)", padding: "2rem 2.5rem", marginBottom: "2rem", maxWidth: "560px", margin: "0 auto 2rem" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", color: "#6B5D4E", marginBottom: "1.25rem" }}>
              This is a portfolio demonstration website. Want a website like this for your business?
            </p>
            <Link
              href="/#pricing"
              style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", fontWeight: 700, padding: "0.875rem 2.5rem", background: "#2B2216", color: "#FAF7F2", textDecoration: "none", display: "inline-block" }}
            >
              Get a Quote from bibekbhagat.dev →
            </Link>
          </div>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", color: "#9C8B78" }}>
            Bengaluru, Karnataka
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2B2216", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(201,169,122,0.15)" }}>
        <div style={{ fontSize: "1rem", fontWeight: 700, color: "#FAF7F2", letterSpacing: "-0.01em" }}>Atelier Aura</div>
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#6B5D4E" }}>
          Portfolio website by{" "}
          <Link href="/" style={{ color: "#C9A97A", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
