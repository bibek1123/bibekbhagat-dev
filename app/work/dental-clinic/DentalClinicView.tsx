"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Treatment {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  duration: string;
  recovery: string;
  highlights: string[];
}

const treatments: Treatment[] = [
  {
    id: "aligners",
    name: "Clear Aligners & Orthodontics",
    category: "Smile Alignment",
    tagline: "Discreet teeth straightening without metal brackets or wires.",
    description:
      "Digitally customized transparent trays that gently guide your teeth into optimal alignment. Removable for meals and daily brushing, engineered with precision 3D intraoral simulation.",
    duration: "6–18 months typical",
    recovery: "Zero downtime",
    highlights: ["Virtually invisible in daily conversations", "Custom 3D computerized progression plan", "No dietary restrictions"],
  },
  {
    id: "implants",
    name: "Precision Guided Dental Implants",
    category: "Restorative Dentistry",
    tagline: "Permanent tooth replacement restoring natural bite force.",
    description:
      "Biocompatible titanium fixtures surgically placed with computer-guided accuracy to fuse with natural jawbone. Crown restorations crafted from high-translucency monolithic zirconia.",
    duration: "Single surgical appointment + healing",
    recovery: "1–3 days mild rest",
    highlights: ["Restores full 100% natural mastication", "Preserves adjacent healthy tooth enamel", "Lifelong structural durability"],
  },
  {
    id: "root-canal",
    name: "Modern Gentle Endodontics",
    category: "Tooth Preservation",
    tagline: "Single-visit comfort engineered to relieve pain and save natural teeth.",
    description:
      "Advanced rotary instruments and digital apex locators eliminate infected pulp with minimal vibration and noise. Performed under profound local anaesthesia for a quiet, gentle experience.",
    duration: "45–60 minutes per visit",
    recovery: "Same-day normal routine",
    highlights: ["Quiet rotary instrumentation", "Digital apex tracking for microscopic accuracy", "Preserves your natural biological tooth"],
  },
  {
    id: "cosmetic",
    name: "Aesthetic Smile Designing & Veneers",
    category: "Cosmetic Dentistry",
    tagline: "Ultra-thin porcelain laminates harmonized with facial aesthetics.",
    description:
      "Hand-sculpted ceramic veneers that correct chipped edges, persistent discoloration, and minor gaps with minimal enamel preparation. Designed to match natural light translucency.",
    duration: "2 clinical visits",
    recovery: "Immediate confidence",
    highlights: ["Shade-matched to your natural skin undertones", "Stain-resistant ceramic surface", "Custom wax mock-up preview before bonding"],
  },
  {
    id: "whitening",
    name: "In-Clinic Laser Teeth Whitening",
    category: "Preventive & Aesthetics",
    tagline: "Safe, effective whitening without damaging protective enamel.",
    description:
      "Professional cold-light activated peroxide formulation applied with rubber-dam gum protection to lift coffee, tea, and tobacco staining safely and evenly.",
    duration: "45 minutes",
    recovery: "Immediate results",
    highlights: ["Up to 6–8 shades noticeable lightening", "Dedicated sensitivity-prevention varnish", "Custom at-home touch-up tray included"],
  },
  {
    id: "preventive",
    name: "Preventive Hygiene & Airflow Polishing",
    category: "Preventive Wellness",
    tagline: "Deep sub-gingival plaque elimination and remineralizing polish.",
    description:
      "Ultrasonic cavitation combined with gentle glycine airflow powder lifts bio-film and tartar without scraping enamel surfaces. Concludes with fluoride varnish remineralization.",
    duration: "30–45 minutes",
    recovery: "Immediate refreshed feel",
    highlights: ["Painless ultrasonic tartar removal", "Stain-lifting airflow glycine spray", "Comprehensive periodontal health audit"],
  },
];

export function DentalClinicView() {
  const [activeTreatment, setActiveTreatment] = useState(treatments[0]);
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "Clear Aligners & Orthodontics",
    slot: "Morning (10:00 AM – 1:00 PM)",
  });

  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-sans antialiased selection:bg-[#0D7A8A] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#0F2A30] text-[#D1E7EC] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Modern Dental Clinic Website Design</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed & engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#5EEAD4] hover:text-[#99f6e4] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── PATIENT ASSURANCE BANNER ── */}
      <div className="bg-[#F0FDFA] border-b border-[#CCFBF1] text-[#0F766E] text-xs font-semibold py-2 px-4 text-center">
        <span>📍 Sector 35-B, Chandigarh · Welcoming New Patients · 100% Class-B Autoclave Sterilisation Protocols</span>
      </div>

      {/* ── CLINIC NAVIGATION ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D7A8A] flex items-center justify-center text-white font-black text-xl shadow-md">
              P
            </div>
            <div>
              <Link href="/work/dental-clinic" className="group">
                <span className="text-xl font-extrabold tracking-tight text-[#0F172A] block leading-none">
                  PureSmile<span className="text-[#0D7A8A]">Dental</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#64748B] uppercase block mt-0.5">
                  Clinic · Sector 35-B, Chandigarh
                </span>
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#475569]">
            <a href="#treatments" className="hover:text-[#0D7A8A] transition-colors">
              Treatments
            </a>
            <a href="#standards" className="hover:text-[#0D7A8A] transition-colors">
              Clinical Standards
            </a>
            <a href="#first-visit" className="hover:text-[#0D7A8A] transition-colors">
              Your First Visit
            </a>
            <a href="#faq" className="hover:text-[#0D7A8A] transition-colors">
              Patient FAQ
            </a>
          </nav>

          <button
            onClick={() => setAppointmentModal(true)}
            className="px-6 py-3 bg-[#0D7A8A] hover:bg-[#0b6370] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            Request Appointment
          </button>
        </div>
      </header>

      {/* ── REASSURING CLINIC HERO ── */}
      <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#F0FDFA] to-[#E6FFFA] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E2E8F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Reassuring Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#0D7A8A]/10 border border-[#0D7A8A]/20 rounded-full px-3.5 py-1 text-[#0D7A8A] text-xs font-bold tracking-wide uppercase mb-5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Modern & Gentle Dentistry
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                Dental Care Designed <br />
                <span className="text-[#0D7A8A]">for Your Comfort.</span> <br />
                Rooted in Precision.
              </h1>

              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Experience quiet, patient-first dentistry in Sector 35-B, Chandigarh. From clear aligners to single-visit dental implants, we pair advanced 3D digital diagnostic imaging with a gentle touch.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setAppointmentModal(true)}
                  className="px-8 py-4 bg-[#0D7A8A] hover:bg-[#0b6370] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Book Your Consultation →
                </button>
                <a
                  href="#treatments"
                  className="px-8 py-4 bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                >
                  Explore Treatments
                </a>
              </div>

              {/* Clinic Assurances Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#E2E8F0]">
                {[
                  { title: "Zero Anxiety", desc: "Gentle pain-free care" },
                  { title: "3D Digital Scanning", desc: "No messy impression goop" },
                  { title: "Hospital Sterilisation", desc: "Class B autoclave cycles" },
                  { title: "Transparent Pricing", desc: "Clear itemized estimates" },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                      <span className="text-[#0D7A8A]">✓</span> {item.title}
                    </p>
                    <p className="text-[11px] text-[#64748B] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Clinic Photography Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#E2E8F0]">
                <Image
                  src="/work/images/dental-clinic-hero.jpg"
                  alt="PureSmile Dental Clinic Treatment Suite Chandigarh"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block bg-[#0D7A8A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                    Sector 35-B Suite
                  </div>
                  <p className="text-sm font-bold">Ergonomic Patient Suites with Ambient Light</p>
                  <p className="text-xs text-white/80">Equipped with computerized dental units and digital imaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TREATMENT EXPLORER ── */}
      <section id="treatments" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D7A8A] mb-1">Comprehensive Care</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Dental Treatments & Solutions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Every procedure is preceded by high-resolution digital scanning and a comprehensive explanation of treatment choices.
            </p>
          </div>

          {/* Interactive Treatment Tabs & Details Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector List */}
            <div className="lg:col-span-5 space-y-2.5">
              {treatments.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTreatment(t)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border flex items-center justify-between ${
                    activeTreatment.id === t.id
                      ? "bg-[#0D7A8A] text-white border-[#0D7A8A] shadow-md"
                      : "bg-[#F8FAFC] text-[#334155] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block ${
                        activeTreatment.id === t.id ? "text-[#CCFBF1]" : "text-[#0D7A8A]"
                      }`}
                    >
                      {t.category}
                    </span>
                    <h3 className="text-sm font-bold mt-0.5">{t.name}</h3>
                  </div>
                  <span className="text-base font-bold ml-2">→</span>
                </button>
              ))}
            </div>

            {/* Right Active Treatment Deep-Dive Card */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold text-[#0D7A8A] bg-[#CCFBF1]/60 px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeTreatment.category}
                </span>
                <div className="text-xs font-semibold text-[#64748B]">
                  Recovery: <span className="text-[#0F172A] font-bold">{activeTreatment.recovery}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-[#0F172A] mb-2">{activeTreatment.name}</h3>
              <p className="text-sm font-semibold text-[#0D7A8A] mb-4">{activeTreatment.tagline}</p>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">{activeTreatment.description}</p>

              <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                  Key Treatment Advantages
                </h4>
                <ul className="space-y-2">
                  {activeTreatment.highlights.map((h) => (
                    <li key={h} className="text-xs font-medium text-[#1E293B] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D7A8A]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                <div className="text-xs text-[#64748B]">
                  Estimated Timing: <span className="font-bold text-[#0F172A]">{activeTreatment.duration}</span>
                </div>
                <button
                  onClick={() => {
                    setFormData({ ...formData, treatment: activeTreatment.name });
                    setAppointmentModal(true);
                  }}
                  className="px-5 py-2.5 bg-[#0D7A8A] hover:bg-[#0b6370] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Consult for This Treatment →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PURESMILE CLINICAL STANDARDS ── */}
      <section id="standards" className="py-20 bg-[#F0FDFA] border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D7A8A]">Infection Control & Safety</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-1">
              Rigorous Clinical Hygiene Protocols
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              We adhere strictly to medical hospital sterilisation guidelines to safeguard the health of every patient and staff member.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Class-B Autoclave Sterilisation",
                desc: "Medical vacuum autoclaves operate at 134°C under high pressure. All reusable handpieces are sealed in individual sterile pouches.",
              },
              {
                step: "02",
                title: "Digital 3D Intraoral Scanning",
                desc: "Zero nausea-inducing chemical impressions. High-accuracy optical scans generate full digital teeth models in 90 seconds.",
              },
              {
                step: "03",
                title: "Low-Dose Digital RVG Imaging",
                desc: "Advanced sensor technology reduces diagnostic radiation exposure by up to 80% compared to traditional dental film.",
              },
              {
                step: "04",
                title: "Private Operatory Suites",
                desc: "Sound-isolated treatment rooms provide complete personal privacy, filtered air, and a tranquil, reassuring environment.",
              },
            ].map((std) => (
              <div key={std.step} className="bg-white p-6 rounded-2xl border border-[#CCFBF1] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xl font-black text-[#0D7A8A] font-mono">{std.step}</span>
                  <h3 className="font-bold text-base text-[#0F172A] mt-2 mb-2">{std.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{std.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#F1F5F9] text-[11px] font-semibold text-[#0D7A8A]">
                  ✓ Verified Protocol
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR FIRST VISIT: 3-STEP JOURNEY ── */}
      <section id="first-visit" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D7A8A]">Patient Journey</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-1">
              What to Expect on Your First Visit
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              No hurried treatments, no unexpected surprises. We explain all clinical findings transparently before any work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "Comprehensive Examination & Scan",
                desc: "Your clinician reviews oral health history, takes high-definition intraoral photos, and performs a gentle diagnostic review.",
              },
              {
                num: "2",
                title: "Transparent Plan & Cost Estimate",
                desc: "We display your scan on a monitor, explain any treatment options in plain language, and provide an itemized written estimate.",
              },
              {
                num: "3",
                title: "Gentle Care at Your Pace",
                desc: "You decide when and how to proceed. We pace appointments comfortably, ensuring you remain completely pain-free.",
              },
            ].map((st) => (
              <div key={st.num} className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#E2E8F0] relative">
                <div className="w-10 h-10 rounded-full bg-[#0D7A8A] text-white font-bold flex items-center justify-center text-sm mb-4">
                  {st.num}
                </div>
                <h3 className="font-bold text-base text-[#0F172A] mb-2">{st.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT REQUEST SECTION ── */}
      <section id="appointments" className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#CBD5E1] shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D7A8A]">Appointments</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1">
                Schedule Your Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                Convenient appointment slots available Monday through Saturday. Fill out the request and our patient coordinator will confirm your visit.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center bg-[#F0FDFA] rounded-2xl border border-[#CCFBF1]">
                <span className="text-3xl mb-2 block">🦷</span>
                <h3 className="text-xl font-bold text-[#0F766E] mb-1">Appointment Request Simulated</h3>
                <p className="text-xs text-[#475569] max-w-md mx-auto">
                  Thank you! In a live clinic website, the reception team receives this notification and calls to confirm your selected timing.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#0D7A8A] hover:underline"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#0D7A8A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#0D7A8A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Treatment Needed / Interest
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#0D7A8A]"
                    >
                      {treatments.map((t) => (
                        <option key={t.id}>{t.name}</option>
                      ))}
                      <option>General Checkup & Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#0D7A8A]"
                    >
                      <option>Morning (10:00 AM – 1:00 PM)</option>
                      <option>Afternoon (2:00 PM – 5:00 PM)</option>
                      <option>Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0D7A8A] hover:bg-[#0b6370] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Confirm Appointment Request (Demo) →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── PATIENT FAQ ── */}
      <section id="faq" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D7A8A]">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does the clear aligner process begin?",
                a: "We begin with a 3D digital intraoral scan. The software produces a preview simulation of your teeth aligning week by week, and you receive customized aligner trays that you switch every 10–14 days.",
              },
              {
                q: "Are dental implants safe for adults of any age?",
                a: "Yes, adult patients with healthy gums and adequate jawbone density are viable candidates. 3D digital radiographic imaging confirms bone volume before scheduling placement.",
              },
              {
                q: "Do root canal treatments cause severe discomfort?",
                a: "Modern dentistry uses targeted profound anaesthesia and quiet rotary motors. Most patients compare the experience to receiving a routine filling.",
              },
              {
                q: "What measures protect patients against clinical cross-contamination?",
                a: "We employ strict multi-stage Class-B vacuum autoclave sterilisation, disposable barriers for all touchpoints, and individualized instrument trays opened in your presence.",
              },
            ].map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
                <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">{faq.q}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC FOOTER ── */}
      <footer className="bg-[#0F172A] text-[#94A3B8] py-14 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="text-lg font-black text-white block mb-2">PureSmile Dental Clinic</span>
              <p className="leading-relaxed text-[#64748B] max-w-xs">
                Comprehensive modern dentistry in Sector 35-B, Chandigarh. Clean clinical excellence, digital intraoral diagnostics, and gentle care.
              </p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-2">Clinic Hours</p>
              <p className="text-[#64748B]">Monday to Saturday: 10:00 AM – 8:00 PM</p>
              <p className="text-[#64748B]">Sundays: Consultation by prior appointment.</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#64748B]">
                Fictional showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates healthcare UX, appointment conversion, and trust design.
              </p>
              <Link href="/#work" className="text-[#5EEAD4] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B] gap-2">
            <div>© 2026 PureSmile Dental Showcase. All rights reserved.</div>
            <div>Designed & engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>

      {/* ── APPOINTMENT MODAL ── */}
      {appointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-[#E2E8F0]">
            <button
              onClick={() => setAppointmentModal(false)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] p-2 text-sm cursor-pointer"
            >
              ✕
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7A8A]">Quick Booking</span>
            <h3 className="text-xl font-black text-[#0F172A] mt-1 mb-2">Book a Dental Visit</h3>
            <p className="text-xs text-[#64748B] mb-5">
              Sector 35-B, Chandigarh. We will confirm your preferred timing.
            </p>
            <div className="space-y-3.5">
              <input
                type="text"
                placeholder="Patient Full Name"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number / WhatsApp"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none"
              />
              <button
                onClick={() => {
                  alert("Appointment simulated! In live deployment, this confirms with clinic management.");
                  setAppointmentModal(false);
                }}
                className="w-full py-3.5 bg-[#0D7A8A] hover:bg-[#0b6370] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Confirm Appointment (Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
