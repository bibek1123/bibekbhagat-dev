import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dental Clinic Website — Portfolio Example | bibekbhagat.dev",
  description:
    "Portfolio showcase: a modern dental clinic website for an Indian healthcare practice. Demonstrates appointment flow, treatment pages, and clinical trust design. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/dental-clinic` },
};

const treatments = [
  { name: "Dental Implants", tagline: "Permanent tooth replacement", desc: "Natural-looking implants that restore your smile and bite function. A long-term solution for missing teeth.", color: "#0D7A8A" },
  { name: "Clear Aligners", tagline: "Discreet teeth straightening", desc: "Straighten your teeth without visible braces. Custom aligners designed around your treatment plan.", color: "#0D7A8A" },
  { name: "Root Canal Treatment", tagline: "Save your natural tooth", desc: "Modern, comfortable root canal treatment to relieve pain and preserve your natural tooth.", color: "#0D7A8A" },
  { name: "Cosmetic Dentistry", tagline: "Transform your smile", desc: "Veneers, bonding, and smile design — crafted for natural aesthetics that complement your face.", color: "#0D7A8A" },
  { name: "Teeth Whitening", tagline: "Professional-grade results", desc: "Safe, effective whitening treatments that deliver noticeably brighter results.", color: "#0D7A8A" },
  { name: "General Dentistry", tagline: "Preventive & restorative care", desc: "Regular check-ups, cleaning, fillings, and routine care to keep your teeth healthy.", color: "#0D7A8A" },
];

const team = [
  { name: "Dr. Harleen Kaur", role: "Lead Dental Surgeon", qualification: "BDS, MDS", focus: "Implantology & Cosmetic Dentistry" },
  { name: "Dr. Raghav Sharma", role: "Endodontist", qualification: "BDS, MDS", focus: "Root Canal & Restorations" },
];

const faqs = [
  { q: "Are dental implants painful?", a: "The procedure is performed under local anaesthesia. Most patients report feeling pressure but not significant pain during treatment. Post-procedure discomfort is usually manageable with standard pain relief." },
  { q: "How long do aligners take to work?", a: "Treatment duration varies by case complexity. Your dentist will assess your teeth and provide an estimated timeline during your consultation." },
  { q: "Do you see patients on weekends?", a: "The clinic is open Monday to Saturday. Sunday appointments may be available for urgent cases — call to check availability." },
  { q: "Is teeth whitening safe?", a: "Professional whitening in a clinical setting is safe for most patients. Suitability is assessed before recommending treatment." },
];

export default function DentalClinicPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#FFFFFF" }}>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5EFF2", padding: "0 2rem", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
          <div style={{ width: "36px", height: "36px", background: "#0D7A8A", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 4 6 4 10c0 3.5 2 6.5 4 8.5C9.5 20 11 21 12 21s2.5-1 4-2.5c2-2 4-5 4-8.5 0-4-4-8-8-8z" /></svg>
          </div>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1A1C", lineHeight: 1.2 }}>PureSmile Dental</div>
            <div style={{ fontSize: "0.625rem", color: "#0D7A8A", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Chandigarh</div>
          </div>
        </div>
        <div className="hidden md:flex" style={{ gap: "2rem" }}>
          {["Treatments", "Our Team", "Clinic", "FAQ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} style={{ fontSize: "0.875rem", fontWeight: 500, color: "#3A5560", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
        <a href="#appointments" style={{ fontSize: "0.875rem", fontWeight: 600, padding: "0.625rem 1.375rem", background: "#0D7A8A", color: "white", textDecoration: "none", borderRadius: "8px" }}>Book Appointment</a>
      </nav>

      {/* ── HERO ── Real clinic photo + appointment card */}
      <section style={{ paddingTop: "68px" }}>
        {/* Clinic image */}
        <div style={{ position: "relative", height: "min(55vh, 480px)", overflow: "hidden" }}>
          <Image
            src="/work/images/dental-clinic-hero.jpg"
            alt="Modern dental clinic treatment room with teal and white interior, professional equipment"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,26,28,0.2) 0%, rgba(15,26,28,0.5) 100%)" }} />
          <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(13,122,138,0.9)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1rem" }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6EE7B7" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "white" }}>Accepting New Patients</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, color: "white", letterSpacing: "-0.03em", maxWidth: "500px" }}>
              Dental Care That<br /><span style={{ color: "#7EDBE8" }}>Feels Different.</span>
            </h1>
          </div>
        </div>

        {/* Sub-nav band */}
        <div style={{ background: "linear-gradient(150deg, #F0F8FA 0%, #E5F4F6 100%)", padding: "1.5rem 2rem", display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "#3A5560", maxWidth: "500px", margin: 0 }}>
            Modern dentistry in a calm, clinical environment — from routine check-ups to implants and cosmetic work. Chandigarh.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#appointments" style={{ fontSize: "0.875rem", fontWeight: 700, padding: "0.625rem 1.5rem", background: "#0D7A8A", color: "white", textDecoration: "none", borderRadius: "8px" }}>Book Appointment</a>
          </div>
        </div>
      </section>

      {/* ── APPOINTMENTS ── Demo panel — no real number */}
      <section id="appointments" style={{ padding: "4rem 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D7A8A", fontWeight: 600, marginBottom: "0.75rem" }}>Consultations</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0F1A1C", letterSpacing: "-0.03em", marginBottom: "1rem" }}>Book Your Visit</h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#3A5560", marginBottom: "1.5rem" }}>Call the clinic directly to schedule an appointment at a time that suits you.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  "All major treatments under one roof",
                  "Digital X-rays & modern equipment",
                  "Separate waiting area for children",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(13,122,138,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0D7A8A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "#3A5560" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "2.5rem", boxShadow: "0 8px 40px rgba(13,122,138,0.12)", border: "1px solid #D9EFF2" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0F1A1C", marginBottom: "0.5rem" }}>Clinic Hours</h3>
              <p style={{ fontSize: "0.875rem", color: "#5A7A85", marginBottom: "1.5rem" }}>Contact the clinic to book your preferred slot.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {[
                  { day: "Monday – Saturday", time: "9:00 AM – 7:30 PM" },
                  { day: "Sunday", time: "By Appointment" },
                ].map((h) => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", padding: "0.5rem 0", borderBottom: "1px solid #E5EFF2" }}>
                    <span style={{ color: "#5A7A85" }}>{h.day}</span>
                    <span style={{ fontWeight: 600, color: "#0F1A1C" }}>{h.time}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#5A7A85" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Chandigarh, India
              </div>
              {/* Portfolio demo notice */}
              <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#F0F8FA", borderRadius: "8px", fontSize: "0.8125rem", color: "#3A5560" }}>
                <strong>Portfolio demonstration.</strong>{" "}
                <Link href="/#pricing" style={{ color: "#0D7A8A", fontWeight: 600 }}>Get a website like this →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TREATMENTS ── */}
      <section id="treatments" style={{ padding: "5rem 0", background: "#F0F8FA" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D7A8A", fontWeight: 600, marginBottom: "0.75rem" }}>What We Treat</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F1A1C", letterSpacing: "-0.03em" }}>Comprehensive Dental Treatments</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5px", background: "#E5EFF2", border: "1.5px solid #E5EFF2", borderRadius: "16px", overflow: "hidden" }}>
            {treatments.map((t) => (
              <div key={t.name} style={{ background: "white", padding: "2rem" }}>
                <div style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#0D7A8A", marginBottom: "1.25rem" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F1A1C", marginBottom: "0.375rem" }}>{t.name}</h3>
                <p style={{ fontSize: "0.8125rem", color: "#0D7A8A", fontWeight: 600, marginBottom: "0.75rem" }}>{t.tagline}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "#4A6B78" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="our-team" style={{ padding: "5rem 0", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D7A8A", fontWeight: 600, marginBottom: "0.75rem" }}>Our Dentists</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F1A1C", letterSpacing: "-0.03em" }}>Your Care Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {team.map((member) => (
              <div key={member.name} style={{ background: "white", border: "1px solid #D9EFF2", borderRadius: "16px", padding: "2rem" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #0D7A8A22, #0D7A8A11)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", border: "2px solid #D9EFF2" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D7A8A" strokeWidth="1.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0F1A1C", marginBottom: "0.25rem" }}>{member.name}</h3>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#0D7A8A", marginBottom: "0.375rem" }}>{member.role}</p>
                <p style={{ fontSize: "0.8125rem", color: "#5A7A85", marginBottom: "0.5rem" }}>{member.qualification}</p>
                <p style={{ fontSize: "0.8125rem", color: "#3A5560" }}>Focus: {member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "5rem 0", background: "#F0F8FA" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "#0F1A1C", letterSpacing: "-0.03em", marginBottom: "2rem" }}>Common Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ border: "1px solid #D9EFF2", borderRadius: "12px", padding: "1.5rem", background: "white" }}>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0F1A1C", marginBottom: "0.625rem" }}>{faq.q}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#4A6B78" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0D7A8A", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: "1rem" }}>Your Next Appointment</h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginBottom: "2rem" }}>
          Mon – Sat: 9 AM – 7:30 PM &nbsp;·&nbsp; Chandigarh, India
        </p>
        <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", padding: "1.25rem 2rem", display: "inline-block", fontSize: "0.875rem", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>
          Portfolio demonstration &nbsp;·&nbsp;{" "}
          <Link href="/" style={{ color: "#7EDBE8", fontWeight: 700 }}>Get this kind of website for your clinic →</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0A1A1E", padding: "1.75rem 2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "white" }}>PureSmile Dental</div>
        <div style={{ fontSize: "0.75rem", color: "#3A5560" }}>
          Portfolio website by{" "}
          <Link href="/" style={{ color: "#0D7A8A", textDecoration: "none" }}>bibekbhagat.dev</Link>
        </div>
      </footer>
    </div>
  );
}
