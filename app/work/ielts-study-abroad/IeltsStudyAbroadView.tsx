"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  id: string;
  country: string;
  flag: string;
  heroCity: string;
  image: string;
  workPermit: string;
  intakes: string;
  faculties: string[];
  keyHighlights: string[];
}

const destinations: Destination[] = [
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    heroCity: "Toronto & Vancouver",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    workPermit: "Up to 3-Year Post-Graduation Work Permit (PGWP)",
    intakes: "Fall (Sept) · Winter (Jan) · Summer (May)",
    faculties: ["Data Science & Artificial Intelligence", "Business Analytics & Finance", "Engineering & Construction", "Healthcare Management"],
    keyHighlights: ["Part-time work rights during academic sessions (20-24 hrs/wk)", "Clear post-study work visa framework", "World-ranked polytechnics & research universities"],
  },
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    heroCity: "London & Manchester",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=80",
    workPermit: "2-Year Graduate Immigration Route",
    intakes: "Autumn (Sept/Oct) · Spring (Jan/Feb)",
    faculties: ["Fintech & Investment Banking", "Computer Science & Cybersecurity", "Supply Chain Management", "Architecture & Built Environment"],
    keyHighlights: ["1-Year intensive Master's degrees reducing living expenses", "Globally prestigious Russell Group universities", "London as the global capital of finance and tech innovation"],
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    heroCity: "Melbourne & Sydney",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=80",
    workPermit: "2–4 Year Temporary Graduate Visa (Subclass 485)",
    intakes: "Semester 1 (Feb/March) · Semester 2 (July)",
    faculties: ["Mining & Civil Engineering", "Agricultural Biotechnology", "Biomedical Science", "Information Technology"],
    keyHighlights: ["High minimum hourly wage protections for international students", "World-renowned Group of Eight (Go8) research powerhouses", "Regional campus incentives and extended graduate work permits"],
  },
  {
    id: "germany",
    country: "Germany",
    flag: "🇩🇪",
    heroCity: "Munich & Berlin",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80",
    workPermit: "18-Month Job Seeker Residence Permit",
    intakes: "Winter (Oct) · Summer (April)",
    faculties: ["Automotive & Mechanical Systems", "Robotics & Automation", "Renewable Energy", "Applied Computational Mathematics"],
    keyHighlights: ["Zero tuition fee policy at premier public state universities", "Strong industrial internship ecosystem with German enterprises", "Part-time student employment permits (140 full days per year)"],
  },
];

export function IeltsStudyAbroadView() {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const [activeExam, setActiveExam] = useState<"ielts" | "pte" | "toefl">("ielts");
  const [counsellingModal, setCounsellingModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Canada",
    exam: "IELTS Academic",
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#0A1128] text-[#DCE6F5] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Education & Study Abroad Institute Website Design</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed & engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#F59E0B] hover:text-[#fbbf24] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── INTAKES ANNOUNCEMENT ── */}
      <div className="bg-[#1E3A8A] text-white text-xs font-semibold py-2 px-4 text-center">
        <span>🎓 Showcase Spec · Study Abroad Advisory & Test Prep Concept · Ludhiana & Online</span>
      </div>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white font-black text-xl shadow-md">
              A
            </div>
            <div>
              <Link href="/work/ielts-study-abroad" className="group">
                <span className="text-xl font-extrabold tracking-tight text-[#0F172A] block leading-none">
                  ARISE GLOBAL<span className="text-[#F59E0B]">.</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#64748B] uppercase block mt-0.5">
                  Showcase Institute · Test Prep & Study Advisory
                </span>
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#475569]">
            <a href="#destinations" className="hover:text-[#1E3A8A] transition-colors">
              Study Destinations
            </a>
            <a href="#test-prep" className="hover:text-[#1E3A8A] transition-colors">
              Test Prep Academy
            </a>
            <a href="#roadmap" className="hover:text-[#1E3A8A] transition-colors">
              5-Stage Roadmap
            </a>
            <a href="#faq" className="hover:text-[#1E3A8A] transition-colors">
              Admissions FAQ
            </a>
          </nav>

          <button
            onClick={() => setCounsellingModal(true)}
            className="px-6 py-3 bg-[#1E3A8A] hover:bg-[#152a65] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            Free Counselling Session
          </button>
        </div>
      </header>

      {/* ── ASPIRATIONAL STUDENT HERO ── */}
      <section className="relative bg-[#0A1128] text-white py-16 lg:py-24 overflow-hidden border-b border-white/10">
        {/* Campus background with gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80"
            alt="International University Campus Architecture"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/95 to-[#0A1128]/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-full px-3.5 py-1 text-[#F59E0B] text-xs font-bold tracking-wider uppercase mb-5">
                <span>✦</span> Study Abroad & Test Prep Concept
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                Turn Your Global Ambition <br />
                <span className="text-[#F59E0B]">Into an International</span> <br />
                University Degree.
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-xl mb-8">
                Targeted IELTS & PTE coaching combined with personalized university shortlisting, SOP framing, and end-to-end visa documentation for Canada, the UK, Australia, and Germany.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCounsellingModal(true)}
                  className="px-8 py-4 bg-[#F59E0B] hover:bg-[#d97706] text-[#0A1128] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Book 1-on-1 Profile Assessment →
                </button>
                <a
                  href="#destinations"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors backdrop-blur-sm"
                >
                  Explore Destinations
                </a>
              </div>

              {/* Destination quick pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-10 pt-8 border-t border-white/15 text-xs text-[#94A3B8]">
                <span className="font-bold text-white uppercase text-[11px] tracking-wider">Target Countries:</span>
                {["🇨🇦 Canada", "🇬🇧 United Kingdom", "🇦🇺 Australia", "🇩🇪 Germany", "🇮🇪 Ireland"].map((c) => (
                  <span key={c} className="bg-white/10 px-2.5 py-1 rounded-md text-white font-medium text-[11px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Student Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] bg-[#1E293B]">
                <Image
                  src="/work/images/ielts-hero.jpg"
                  alt="Student preparing for international admissions"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-block bg-[#F59E0B] text-[#0A1128] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                    Structured Preparation
                  </div>
                  <p className="text-sm font-bold text-white">Dedicated Speaking & Writing Simulation Labs</p>
                  <p className="text-xs text-[#CBD5E1]">Ludhiana Campus & Intensive Online Batches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STUDY DESTINATION EXPLORER ── */}
      <section id="destinations" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] mb-1">Global Pathways</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Explore Study Destinations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Compare intake cycles, post-graduation work rights, and popular academic faculties across top international destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Country Selector Buttons */}
            <div className="lg:col-span-4 space-y-2.5">
              {destinations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDestination(d)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border flex items-center justify-between ${
                    activeDestination.id === d.id
                      ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md"
                      : "bg-[#F8FAFC] text-[#334155] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{d.flag}</span>
                    <div>
                      <h3 className="text-sm font-bold">{d.country}</h3>
                      <p className={`text-[11px] ${activeDestination.id === d.id ? "text-[#CBD5E1]" : "text-[#64748B]"}`}>
                        {d.heroCity}
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-bold ml-2">→</span>
                </button>
              ))}
            </div>

            {/* Destination Deep-Dive Card */}
            <div className="lg:col-span-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full bg-[#1E293B]">
                <Image src={activeDestination.image} alt={activeDestination.country} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/30 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-2xl mr-2">{activeDestination.flag}</span>
                  <span className="text-xl sm:text-2xl font-black">{activeDestination.country}</span>
                  <p className="text-xs text-[#CBD5E1] mt-0.5">{activeDestination.workPermit}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      Primary Intake Cycles
                    </h4>
                    <p className="text-xs font-semibold text-[#0F172A] bg-white p-3 rounded-xl border border-[#E2E8F0]">
                      {activeDestination.intakes}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      Post-Study Work Frame
                    </h4>
                    <p className="text-xs font-semibold text-[#0F172A] bg-white p-3 rounded-xl border border-[#E2E8F0]">
                      {activeDestination.workPermit}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">
                    Leading Academic Streams
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDestination.faculties.map((fac) => (
                      <div key={fac} className="text-xs text-[#334155] bg-white p-2.5 rounded-lg border border-[#E2E8F0] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                        {fac}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#64748B]">
                    Personalized counselling tailored to your undergraduate GPA & budget.
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, destination: activeDestination.country });
                      setCounsellingModal(true);
                    }}
                    className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#152a65] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    Apply for {activeDestination.country} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEST PREPARATION ACADEMY ── */}
      <section id="test-prep" className="py-20 bg-[#F1F5F9] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Examination Mastery</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-1">
              Test Preparation Academy
            </h2>
            <p className="text-sm text-[#475569] mt-2">
              Structured modular curriculum designed to build proficiency for international admissions and language benchmark requirements.
            </p>

            <div className="inline-flex p-1 bg-white rounded-xl border border-[#CBD5E1] mt-6">
              {[
                { id: "ielts", label: "IELTS Academic / General" },
                { id: "pte", label: "PTE Academic (AI Scored)" },
                { id: "toefl", label: "TOEFL iBT Program" },
              ].map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveExam(ex.id as "ielts" | "pte" | "toefl")}
                  className={`text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    activeExam === ex.id ? "bg-[#1E3A8A] text-white shadow-sm" : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {activeExam === "ielts" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  module: "Listening Module",
                  target: "Comprehensive Listening Curriculum",
                  desc: "Mastery of varied international accents (British, Australian, North American) with audio prediction techniques.",
                },
                {
                  module: "Reading Module",
                  target: "Academic Reading Methodology",
                  desc: "Skimming, scanning, and identifying True/False/Not Given patterns across complex academic research texts.",
                },
                {
                  module: "Writing (Task 1 & 2)",
                  target: "Structured Writing Framework",
                  desc: "Grammar cohesion, academic vocabulary, data trend analysis for graphs, and high-scoring essay thesis structures.",
                },
                {
                  module: "Speaking Rehearsals",
                  target: "Interactive Speaking Practice",
                  desc: "One-on-one simulated examiner interviews with live audio playback review to eliminate hesitations and fillers.",
                },
              ].map((m) => (
                <div key={m.module} className="bg-white p-6 rounded-2xl border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#F59E0B] uppercase">{m.target}</span>
                    <h3 className="font-bold text-base text-[#0F172A] mt-2 mb-2">{m.module}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#F1F5F9] text-[11px] font-semibold text-[#1E3A8A]">
                    ✓ Weekly Mock Tests Included
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeExam === "pte" && (
            <div className="bg-white p-8 rounded-2xl border border-[#CBD5E1] shadow-sm max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">Computer-Delivered Testing</span>
              <h3 className="text-2xl font-black text-[#0F172A] mt-1 mb-3">PTE Academic Intensive Program</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Computer-delivered mock tests aligned with standard test formats. Students practice with structured diagnostic analysis for oral fluency, pronunciation rhythm, and repeat-sentence accuracy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center">
                  <div className="text-lg font-black text-[#1E3A8A]">3–4 Weeks</div>
                  <div className="text-[11px] text-[#64748B]">Batch Duration</div>
                </div>
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center">
                  <div className="text-lg font-black text-[#1E3A8A]">Full Simulation</div>
                  <div className="text-[11px] text-[#64748B]">Automated Mock Labs</div>
                </div>
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] text-center">
                  <div className="text-lg font-black text-[#1E3A8A]">Daily Doubts</div>
                  <div className="text-[11px] text-[#64748B]">Individual Analysis</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setFormData({ ...formData, exam: "PTE Academic" });
                  setCounsellingModal(true);
                }}
                className="px-6 py-3 bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#152a65] transition-colors cursor-pointer"
              >
                Enroll for PTE Batch →
              </button>
            </div>
          )}

          {activeExam === "toefl" && (
            <div className="bg-white p-8 rounded-2xl border border-[#CBD5E1] shadow-sm max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">American & Global Standard</span>
              <h3 className="text-2xl font-black text-[#0F172A] mt-1 mb-3">TOEFL iBT Comprehensive Preparation</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Optimized for US university admissions and international scholarships requiring rigorous academic integrated tasks. Focus on campus conversation comprehension and integrated writing syntheses.
              </p>
              <button
                onClick={() => {
                  setFormData({ ...formData, exam: "TOEFL iBT" });
                  setCounsellingModal(true);
                }}
                className="px-6 py-3 bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#152a65] transition-colors cursor-pointer"
              >
                Enroll for TOEFL Batch →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5-STAGE STUDENT JOURNEY ROADMAP ── */}
      <section id="roadmap" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Structured Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-1">
              Your 5-Stage Study Abroad Journey
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              From your initial profile assessment to airport departure, we remove guesswork and paperwork anxiety at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Profile Assessment",
                desc: "Evaluation of academic GPA, budget limits, career targets, and country preferences.",
              },
              {
                step: "02",
                title: "Test Preparation",
                desc: "Targeted IELTS/PTE training to hit language minimums demanded by desired faculties.",
              },
              {
                step: "03",
                title: "University Selection",
                desc: "Stratified shortlisting across Dream, Target, and Safe university options.",
              },
              {
                step: "04",
                title: "SOP & File Framing",
                desc: "Guidance on original Statements of Purpose, recommendation letters, and financial trail.",
              },
              {
                step: "05",
                title: "Documentation & Pre-Departure",
                desc: "Checklist guidance for visa application readiness, housing resources, and pre-departure briefings.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#F59E0B] font-mono">{s.step}</span>
                  <h3 className="font-bold text-sm text-[#0F172A] mt-2 mb-2">{s.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNSELLING REQUEST FORM ── */}
      <section id="contact" className="py-20 bg-[#F1F5F9] border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#CBD5E1] shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Admissions Desk</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1">
                Book a Free 1-on-1 Profile Assessment
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                Sample advising consultation interface. Explore academic requirements and university selection criteria.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center bg-[#EFF6FF] rounded-2xl border border-[#BFDBFE]">
                <span className="text-3xl mb-2 block">🎓</span>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">Counselling Session Scheduled</h3>
                <p className="text-xs text-[#475569] max-w-md mx-auto">
                  Thank you! In a live website deployment, an advisor receives your academic parameters and contacts you with available appointment slots.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#1E3A8A] hover:underline"
                >
                  Book another student session
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
                      Student Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Kaur"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Mobile Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Target Country
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#1E3A8A]"
                    >
                      {destinations.map((d) => (
                        <option key={d.id}>{d.country}</option>
                      ))}
                      <option>Undecided / Need Counselling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                      Test Preparation Needed
                    </label>
                    <select
                      value={formData.exam}
                      onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#1E3A8A]"
                    >
                      <option>IELTS Academic</option>
                      <option>PTE Academic</option>
                      <option>TOEFL iBT</option>
                      <option>Already Have Test Score</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1E3A8A] hover:bg-[#152a65] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Confirm Free Assessment Request (Demo) →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS FAQ ── */}
      <section id="faq" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">Information Hub</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the typical lead time required before a target intake?",
                a: "We recommend commencing test preparation and document assembly 8 to 12 months prior to your desired course commencement. For example, for a September Fall intake, applications should ideally be filed between November and February.",
              },
              {
                q: "Can I receive university shortlisting if I have not yet taken IELTS or PTE?",
                a: "Yes. We evaluate your current academic transcripts and provide conditional shortlists based on expected band targets. You can sit for coaching while initial university documentation is structured.",
              },
              {
                q: "What is the key difference between IELTS Academic and PTE Academic?",
                a: "Both tests are widely accepted by global immigration authorities and universities. IELTS is conducted with human examiners for speaking, whereas PTE is completely computerized with automated speech recognition.",
              },
              {
                q: "Do you guide on education loans and GIC accounts?",
                a: "Yes, we explain legitimate financial documentation procedures, bank solvency certificates, and Canadian GIC account funding through regulated banking channels.",
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

      {/* ── FOOTER ── */}
      <footer className="bg-[#0A1128] text-[#94A3B8] py-14 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="text-lg font-black text-white block mb-2">ARISE GLOBAL INSTITUTE</span>
              <p className="leading-relaxed text-[#64748B] max-w-xs">
                Comprehensive IELTS/PTE preparation and international study abroad counselling in Ludhiana, Punjab.
              </p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-2">Advisory Schedule (Sample)</p>
              <p className="text-[#64748B]">Monday to Saturday: 9:00 AM – 6:30 PM</p>
              <p className="text-[#64748B]">Showcase Concept · Ludhiana, Punjab</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#64748B]">
                Showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates education UX and counselling lead capture.
              </p>
              <Link href="/#work" className="text-[#F59E0B] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B] gap-2">
            <div>© 2026 Arise Global Institute Showcase. All rights reserved.</div>
            <div>Designed & engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>

      {/* ── COUNSELLING MODAL ── */}
      {counsellingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-[#E2E8F0]">
            <button
              onClick={() => setCounsellingModal(false)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] p-2 text-sm cursor-pointer"
            >
              ✕
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]">Showcase Advising Flow</span>
            <h3 className="text-xl font-black text-[#0F172A] mt-1 mb-2">Student Profile Evaluation</h3>
            <p className="text-xs text-[#64748B] mb-5">
              Sample profile evaluation request for international study programs.
            </p>
            <div className="space-y-3.5">
              <input
                type="text"
                placeholder="Student Full Name"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none"
              />
              <input
                type="tel"
                placeholder="WhatsApp Phone Number"
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none"
              />
              <button
                onClick={() => {
                  alert("Counselling session simulated! In live deployment, an advisor contacts the student.");
                  setCounsellingModal(false);
                }}
                className="w-full py-3.5 bg-[#1E3A8A] hover:bg-[#152a65] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Schedule Assessment (Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
