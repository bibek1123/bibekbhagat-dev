import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "IELTS & Study Abroad Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: an ambitious education website for an IELTS coaching and study abroad institute. Demonstrates course listing, destinations, process flow, and counselling CTA. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/ielts-study-abroad` },
};

const services = [
  {
    code: "IELTS",
    name: "IELTS Coaching",
    desc: "Structured preparation for all four bands — Listening, Reading, Writing, Speaking — with practice tests and personalised feedback.",
    duration: "4–8 weeks",
    mode: "Classroom & Online",
  },
  {
    code: "PTE",
    name: "PTE Academic",
    desc: "Computer-based PTE preparation with mock tests, AI-scored practice, and strategy sessions for faster results.",
    duration: "3–6 weeks",
    mode: "Classroom & Online",
  },
  {
    code: "SA",
    name: "Study Abroad Counselling",
    desc: "Country selection, university shortlisting, SOP guidance, application review, and pre-departure support.",
    duration: "Ongoing",
    mode: "In-person",
  },
];

const destinations = [
  { country: "Canada", programs: "Undergraduate · Postgraduate · PR Pathway" },
  { country: "United Kingdom", programs: "Undergraduate · Postgraduate · Diplomas" },
  { country: "Australia", programs: "Bachelor · Master · TAFE" },
  { country: "Germany", programs: "Technical Universities · Research Programs" },
  { country: "New Zealand", programs: "Undergraduate · Postgraduate" },
  { country: "Ireland", programs: "Bachelor · Master Programs" },
];

const process = [
  { step: "01", title: "Free Counselling", desc: "Tell us about your goals, qualifications, and preferred destinations. We assess your profile honestly." },
  { step: "02", title: "Course Enrolment", desc: "Join the appropriate coaching batch for your exam and target band score." },
  { step: "03", title: "University Shortlisting", desc: "Based on your profile, we identify realistic and aspirational university options." },
  { step: "04", title: "Application Support", desc: "We guide your SOP, LOR, and document preparation for each application." },
  { step: "05", title: "Offer & Visa Guidance", desc: "Once you receive offers, we help with offer acceptance, fee payments, and visa documentation." },
];

const faqs = [
  {
    q: "What IELTS band score do I need for Canada?",
    a: "Requirements vary by program and institution. Most Canadian universities require 6.0–6.5 overall, with no band below 6.0. Express Entry programs typically require 6.0+. Your counsellor will advise based on your specific goal.",
  },
  {
    q: "Is PTE accepted for study visas?",
    a: "Yes, PTE Academic is accepted by most universities in Australia, the UK, Canada, and other countries. Some institutions may prefer IELTS — we'll confirm based on your target universities.",
  },
  {
    q: "Can I counsel without enrolling in coaching?",
    a: "Yes. Study abroad counselling is available independently of coaching. If you already have your language test score, we can move directly to the application process.",
  },
  {
    q: "Do you provide SOP and LOR writing support?",
    a: "We provide guidance and review for your SOP and LOR. The content should genuinely reflect your background and goals — we help you present it effectively.",
  },
];

export default function IeltsStudyAbroadPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#F8F9FF" }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E0E4F0",
          padding: "0 2rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#0F1040", letterSpacing: "-0.02em" }}>
            Arise Global
          </div>
          <div style={{ fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4358C8", fontWeight: 600 }}>
            Institute · Ludhiana
          </div>
        </div>

        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Courses", "Destinations", "Process", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "#2D3560", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            padding: "0.625rem 1.375rem",
            background: "#2A3FBF",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Free Counselling
        </a>
      </nav>

      {/* ── HERO ── Bold ambitious, real photography behind gradient */}
      <section
        style={{
          paddingTop: "68px",
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Real hero photography behind gradient */}
        <Image
          src="/work/images/ielts-hero.jpg"
          alt="Indian student reviewing international university materials with world map and study context"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Navy gradient overlay — left heavier for text legibility, right lighter to show photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, rgba(15,16,64,0.82) 0%, rgba(28,37,128,0.72) 50%, rgba(42,63,191,0.50) 100%)",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem 4rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div style={{ paddingTop: "1rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(201,170,80,0.15)",
                  border: "1px solid rgba(201,170,80,0.3)",
                  borderRadius: "4px",
                  padding: "0.375rem 0.875rem",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#C9AA50", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Ludhiana, Punjab
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  color: "white",
                  letterSpacing: "-0.04em",
                  marginBottom: "1.5rem",
                }}
              >
                Your Path to
                <br />
                <span style={{ color: "#C9AA50" }}>Study Abroad</span>
                <br />
                Starts Here.
              </h1>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "460px",
                  marginBottom: "2.5rem",
                }}
              >
                Expert IELTS & PTE coaching combined with end-to-end study abroad
                counselling for Canada, UK, Australia, and beyond.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href="#contact"
                  style={{
                    padding: "0.9375rem 2rem",
                    background: "#C9AA50",
                    color: "#0F1040",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "0.9375rem",
                  }}
                >
                  Book Free Session
                </a>
                <a
                  href="#courses"
                  style={{
                    padding: "0.9375rem 2rem",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "white",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "0.9375rem",
                  }}
                >
                  Explore Courses
                </a>
              </div>
            </div>

            {/* Destination ticker cards */}
            <div>
              <div style={{ marginBottom: "1rem", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
                Popular Destinations
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {destinations.slice(0, 4).map((dest) => (
                  <div
                    key={dest.country}
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "white", fontSize: "0.9375rem" }}>
                      {dest.country}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(201,170,80,0.8)" }}>
                      {dest.programs.split(" · ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            background: "#C9AA50",
            padding: "0.875rem 2rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            fontFamily: "system-ui, sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: "#0F1040",
          }}
        >
          {["IELTS Coaching", "PTE Coaching", "Study Abroad Counselling", "Application Support"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" style={{ padding: "5rem 0", background: "#F8F9FF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4358C8", fontWeight: 600, marginBottom: "0.75rem" }}>
              Courses & Services
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F1040", letterSpacing: "-0.03em" }}>
              How We Help
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {services.map((service) => (
              <div
                key={service.code}
                style={{
                  background: "white",
                  border: "1px solid #E0E4F0",
                  borderRadius: "16px",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    background: "#EEF1FC",
                    borderRadius: "6px",
                    padding: "0.25rem 0.625rem",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    color: "#2A3FBF",
                    letterSpacing: "0.05em",
                  }}
                >
                  {service.code}
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0F1040", marginBottom: "0.75rem" }}>
                  {service.name}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#3D4D80", marginBottom: "1.5rem" }}>
                  {service.desc}
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <div style={{ fontSize: "0.8125rem", color: "#3D4D80" }}>
                    <span style={{ fontWeight: 700, color: "#0F1040" }}>Duration:</span> {service.duration}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "#3D4D80" }}>
                    <span style={{ fontWeight: 700, color: "#0F1040" }}>Mode:</span> {service.mode}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section id="destinations" style={{ padding: "5rem 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4358C8", fontWeight: 600, marginBottom: "0.75rem" }}>
              Where Our Students Go
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F1040", letterSpacing: "-0.03em" }}>
              Destinations We Counsel For
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {destinations.map((dest, i) => (
              <div
                key={dest.country}
                style={{
                  padding: "1.5rem",
                  background: i % 3 === 0 ? "#0F1040" : "#F8F9FF",
                  border: `1px solid ${i % 3 === 0 ? "transparent" : "#E0E4F0"}`,
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: i % 3 === 0 ? "white" : "#0F1040", marginBottom: "0.5rem" }}>
                  {dest.country}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: i % 3 === 0 ? "#C9AA50" : "#4358C8" }}>
                  {dest.programs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "5rem 0", background: "#0F1040" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9AA50", fontWeight: 600, marginBottom: "0.75rem" }}>
              Your Journey
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
              How It Works
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5px", background: "rgba(201,170,80,0.15)", border: "1px solid rgba(201,170,80,0.15)", borderRadius: "16px", overflow: "hidden" }}>
            {process.map((step) => (
              <div key={step.step} style={{ padding: "2rem 1.5rem", background: "#0F1040" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#C9AA50", marginBottom: "1rem", letterSpacing: "-0.05em" }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white", marginBottom: "0.75rem" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "5rem 0", background: "white" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#0F1040", letterSpacing: "-0.03em" }}>
              Common Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                style={{
                  border: "1px solid #E0E4F0",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0F1040", marginBottom: "0.625rem" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#3D4D80" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "5rem 0", background: "#F8F9FF" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F1040", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Start with a Free Counselling Session
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#3D4D80", marginBottom: "2rem" }}>
            No commitment. Just an honest conversation about your goals, profile, and the best path forward.
          </p>
          <div style={{ background: "#0F1040", border: "1px solid rgba(201,170,80,0.2)", borderRadius: "8px", padding: "1.5rem 2rem", marginBottom: "1.5rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
            <strong style={{ color: "white" }}>Portfolio demonstration.</strong> This is a fictional showcase website.
            {" "}<Link href="/#pricing" style={{ color: "#C9AA50", fontWeight: 700 }}>Get this kind of website for your institute →</Link>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "#5A6A99" }}>
            Ludhiana, Punjab
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0F1040", padding: "1.75rem 2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ fontWeight: 800, color: "white", fontSize: "1rem" }}>Arise Global Institute</div>
        <div style={{ fontSize: "0.75rem", color: "#3D4D80" }}>
          Website by{" "}
          <Link href="/" style={{ color: "#C9AA50", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
