import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Real Estate Website Design — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a premium Indian property developer website demonstrating project discovery, property browsing, configuration presentation, and enquiry flow. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/real-estate` },
};

// Fictional projects — no real addresses, no RERA, no guarantees
const projects = [
  {
    id: "verdant-hills",
    name: "Verdant Hills",
    tagline: "Residences in the clouds",
    location: "Whitefield, Bengaluru",
    status: "Under Construction",
    statusColor: "#E8A840",
    configs: ["2 BHK", "3 BHK", "4 BHK Penthouse"],
    priceRange: "₹1.2 Cr – ₹3.8 Cr",
    units: "148 homes",
    area: "1,100 – 3,200 sq ft",
    highlight: "Surrounded by 2 acres of landscaped greens. Rooftop infinity pool and resident sky lounge.",
    bg: "linear-gradient(135deg, #0F1F2E 0%, #162A3A 100%)",
    accent: "#4A9B8F",
  },
  {
    id: "the-arc",
    name: "The Arc",
    tagline: "Architectural living, Hyderabad",
    location: "Financial District, Hyderabad",
    status: "Accepting Bookings",
    statusColor: "#6BB86B",
    configs: ["3 BHK", "4 BHK"],
    priceRange: "₹2.4 Cr – ₹5.2 Cr",
    units: "64 homes",
    area: "1,800 – 3,800 sq ft",
    highlight: "Curved tower with panoramic city views. Dedicated work-from-home suites in every home.",
    bg: "linear-gradient(135deg, #1A1A2E 0%, #242440 100%)",
    accent: "#8B8BE8",
  },
  {
    id: "palmeira",
    name: "Palmeira",
    tagline: "Goa's most anticipated address",
    location: "Porvorim, Goa",
    status: "Pre-Launch",
    statusColor: "#E87A40",
    configs: ["2 BHK Villa", "3 BHK Villa"],
    priceRange: "₹3.6 Cr – ₹7.8 Cr",
    units: "36 private villas",
    area: "2,400 – 4,200 sq ft",
    highlight: "Private plunge pools. 800m from the beach. A development of only 36 private villas.",
    bg: "linear-gradient(135deg, #1A1208 0%, #2C1E0A 100%)",
    accent: "#D4A060",
  },
];

const amenityGroups = [
  {
    label: "Wellness",
    items: ["Infinity Pool", "Fitness Centre", "Yoga Studio", "Spa Deck"],
  },
  {
    label: "Family",
    items: ["Children's Play Zone", "Creche", "Open Green Lawn", "Cycling Track"],
  },
  {
    label: "Community",
    items: ["Resident Lounge", "Co-working Space", "Mini Theatre", "Terrace Garden"],
  },
  {
    label: "Convenience",
    items: ["Concierge Desk", "EV Charging", "Visitor Parking", "24h Security"],
  },
];

const processSteps = [
  { num: "01", title: "Explore Projects", body: "Browse our current developments. View unit configurations, floor plans, and location details." },
  { num: "02", title: "Schedule a Visit", body: "Book a site visit or a virtual walkthrough. Our team will walk you through the development." },
  { num: "03", title: "Discuss Financing", body: "We work with leading banks. Our team can help you understand home loan options and payment plans." },
  { num: "04", title: "Secure Your Home", body: "Once you've chosen, we guide you through the booking process step by step." },
];

export default function RealEstatePage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#FAFAF8" }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(10,16,22,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "0 2rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          {/* Wordmark logo */}
          <div>
            <div style={{ fontSize: "0.5rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1px" }}>Arya</div>
            <div style={{ fontSize: "1.1875rem", fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1 }}>Properties</div>
          </div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Projects", "Amenities", "Process", "Enquire"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
              {item}
            </a>
          ))}
        </div>

        <a
          href="#enquire"
          style={{
            padding: "0.5625rem 1.5rem",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            fontWeight: 600,
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.8125rem",
          }}
        >
          Book a Visit
        </a>
      </nav>

      {/* ── HERO ── Architectural, structured */}
      <section
        style={{
          paddingTop: "68px",
          minHeight: "95vh",
          background: "#0A1016",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Architectural grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient light source */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(ellipse 100% 80% at 70% 40%, rgba(74,155,143,0.1) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 20% 60%, rgba(139,139,232,0.06) 0%, transparent 60%)",
          }}
        />

        {/* Project number indicator */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "3rem",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
          className="hidden md:flex"
        >
          {["01", "02", "03"].map((n, i) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: i === 0 ? "24px" : "12px", height: "1px", background: i === 0 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)", transition: "width 0.2s" }} />
              <span style={{ fontSize: "0.625rem", color: i === 0 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)", fontWeight: 600 }}>{n}</span>
            </div>
          ))}
        </div>

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
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "2rem" }}>
                <span style={{ fontSize: "0.6875rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>Arya Properties</span>
                <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.15)" }} />
                <span style={{ fontSize: "0.6875rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>South India</span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: "white",
                  letterSpacing: "-0.04em",
                }}
              >
                Homes
                <br />
                Designed
                <br />
                <span style={{ color: "#4A9B8F" }}>for Life.</span>
              </h1>
            </div>

            <div style={{ textAlign: "right", paddingBottom: "0.5rem", maxWidth: "320px" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}>
                Arya Properties creates residences that are designed as carefully as they are built — in Bengaluru, Hyderabad, and Goa.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", justifyContent: "flex-end" }}>
                <a
                  href="#projects"
                  style={{
                    padding: "0.875rem 1.75rem",
                    background: "#4A9B8F",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  View Projects
                </a>
                <a
                  href="#enquire"
                  style={{
                    padding: "0.875rem 1.75rem",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 500,
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  Book a Visit
                </a>
              </div>
            </div>
          </div>

          {/* Project count stats */}
          <div style={{ display: "flex", gap: "0", marginTop: "5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem" }}>
            {[
              { label: "Active Projects", value: "3" },
              { label: "Cities", value: "3" },
              { label: "Configurations", value: "2–4 BHK" },
              { label: "Price Range", value: "₹1.2 Cr+" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ flex: 1, paddingRight: "2rem", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}>
                <div style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 900, color: "white", letterSpacing: "-0.03em" }}>{stat.value}</div>
                <div style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.25rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "6rem 0", background: "#FAFAF8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A9B8F", fontWeight: 700, marginBottom: "0.75rem" }}>Current Developments</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A1016", letterSpacing: "-0.04em" }}>Our Projects</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1.5fr 1fr" : "1fr 1.5fr",
                  minHeight: "380px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Visual panel */}
                <div
                  style={{
                    background: project.bg,
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    order: index % 2 === 0 ? 0 : 1,
                  }}
                >
                  {/* Architecture grid visual */}
                  <div style={{ position: "relative", flex: 1 }}>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                    {/* Project name typographic block */}
                    <div style={{ position: "relative", paddingTop: "2rem" }}>
                      <div style={{ width: "24px", height: "2px", background: project.accent, marginBottom: "1.5rem" }} />
                      <h3
                        style={{
                          fontSize: "clamp(2rem, 4vw, 3.5rem)",
                          fontWeight: 900,
                          color: "white",
                          letterSpacing: "-0.04em",
                          lineHeight: 1.0,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {project.name}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>{project.tagline}</p>
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div>
                    <div style={{ display: "inline-flex", padding: "0.25rem 0.75rem", background: `${project.statusColor}20`, borderRadius: "3px", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "0.625rem", fontWeight: 700, color: project.statusColor, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.status}</span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>📍 {project.location}</div>
                  </div>
                </div>

                {/* Info panel */}
                <div
                  style={{
                    background: "white",
                    padding: "3rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: index % 2 === 0 ? 1 : 0,
                  }}
                >
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#5A6A7A", marginBottom: "2rem" }}>{project.highlight}</p>

                  {/* Configs */}
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9AABB8", fontWeight: 700, marginBottom: "0.75rem" }}>Configurations</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {project.configs.map((c) => (
                        <span
                          key={c}
                          style={{
                            padding: "0.3125rem 0.75rem",
                            border: "1px solid rgba(0,0,0,0.1)",
                            borderRadius: "4px",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: "#1A2A3A",
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                    {[
                      { label: "Starting from", value: project.priceRange },
                      { label: "Total Homes", value: project.units },
                      { label: "Carpet Area", value: project.area },
                      { label: "Location", value: project.location },
                    ].map((m) => (
                      <div key={m.label}>
                        <div style={{ fontSize: "0.625rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9AABB8", fontWeight: 600 }}>{m.label}</div>
                        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A2A3A", marginTop: "0.25rem" }}>{m.value}</div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#enquire"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#4A9B8F",
                      textDecoration: "none",
                    }}
                  >
                    Request Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section id="amenities" style={{ padding: "5rem 0", background: "#0A1016" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A9B8F", fontWeight: 700, marginBottom: "0.75rem" }}>Across all developments</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "white", letterSpacing: "-0.04em" }}>What&apos;s included</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", overflow: "hidden" }}>
            {amenityGroups.map((group) => (
              <div key={group.label} style={{ background: "#0A1016", padding: "2rem" }}>
                <div style={{ fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4A9B8F", fontWeight: 700, marginBottom: "1.25rem" }}>{group.label}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {group.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "1.5rem" }}>
            Amenities may vary by project. Confirm availability with the sales team.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "5rem 0", background: "#FAFAF8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A9B8F", fontWeight: 700, marginBottom: "0.75rem" }}>How We Work</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "#0A1016", letterSpacing: "-0.04em" }}>From First Visit to Keys</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1px", background: "rgba(0,0,0,0.06)", borderRadius: "12px", overflow: "hidden" }}>
            {processSteps.map((step) => (
              <div key={step.num} style={{ background: "#FAFAF8", padding: "2.5rem 2rem" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "rgba(0,0,0,0.06)", letterSpacing: "-0.05em", marginBottom: "1.25rem" }}>{step.num}</div>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#0A1016", marginBottom: "0.625rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.7, color: "#5A6A7A" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY ── */}
      <section id="enquire" style={{ padding: "5rem 0", background: "#0A1016" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4A9B8F", fontWeight: 700, marginBottom: "0.75rem" }}>Get in Touch</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, color: "white", letterSpacing: "-0.04em" }}>Book a Site Visit</h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", marginTop: "1rem" }}>Our team will contact you to schedule a visit or virtual walkthrough.</p>
          </div>

          <div style={{ background: "#111822", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "2.5rem" }}>
            {[
              { label: "Full Name", placeholder: "Your name", type: "text" },
              { label: "Mobile Number", placeholder: "For our team to reach you", type: "tel" },
              { label: "City of Interest", placeholder: "Bengaluru / Hyderabad / Goa", type: "text" },
            ].map((field) => (
              <div key={field.label} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.375rem" }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "0.875rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.375rem" }}>Project of Interest</label>
              <select style={{ width: "100%", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", color: "white", fontSize: "0.875rem", outline: "none", boxSizing: "border-box" }}>
                <option value="" style={{ background: "#111822" }}>Select a project</option>
                {projects.map((p) => <option key={p.id} value={p.id} style={{ background: "#111822" }}>{p.name} — {p.location}</option>)}
              </select>
            </div>

            <div style={{ background: "rgba(74,155,143,0.08)", border: "1px solid rgba(74,155,143,0.2)", borderRadius: "6px", padding: "0.875rem", marginBottom: "1.25rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", textAlign: "center" }}>
              <strong style={{ color: "rgba(255,255,255,0.7)" }}>Portfolio demonstration.</strong> This is a fictional real-estate showcase website.{" "}
              <Link href="/#pricing" style={{ color: "#4A9B8F", fontWeight: 700 }}>Get this kind of website →</Link>
            </div>

            <button
              style={{
                width: "100%",
                padding: "1rem",
                background: "#4A9B8F",
                color: "white",
                fontWeight: 700,
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.9375rem",
                letterSpacing: "-0.01em",
              }}
            >
              Submit Enquiry
            </button>

            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", textAlign: "center", marginTop: "1rem" }}>
              All developments are fictional, created for website portfolio demonstration only. No RERA registration, no possession guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#060A0E", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div>
          <div style={{ fontSize: "0.5rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "2px" }}>Arya</div>
          <div style={{ fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>Properties</div>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
          All projects are fictional portfolio demonstrations.{" "}Website by{" "}
          <Link href="/" style={{ color: "#4A9B8F", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
