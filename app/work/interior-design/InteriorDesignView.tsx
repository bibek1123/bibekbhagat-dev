"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCase {
  id: string;
  title: string;
  category: "residential" | "commercial" | "hospitality";
  location: string;
  scope: string;
  area: string;
  year: string;
  materials: string[];
  image: string;
  description: string;
}

const projects: ProjectCase[] = [
  {
    id: "whitefield-penthouse",
    title: "Duplex Penthouse Concept",
    category: "residential",
    location: "Spatial Study · Bengaluru",
    scope: "Architectural Interior & Joinery Concept",
    area: "Duplex Study",
    year: "Concept Spec",
    materials: ["Smoked European Oak", "Statuario Marble", "Aged Brass", "Lime Wash"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    description:
      "A serene double-height duplex study balancing monumental daylight with tactile warmth. Monolithic stone islands, custom floating staircase joinery, and floor-to-ceiling slatted acoustic partitions.",
  },
  {
    id: "koramangala-villa",
    title: "Modern Villa Concept",
    category: "residential",
    location: "Courtyard Residence Study · Bengaluru",
    scope: "Atrium Architecture & Interior Concept",
    area: "Villa Study",
    year: "Concept Spec",
    materials: ["Cast Concrete", "Teakwood Slats", "Fluted Glass", "Belgian Linen"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    description:
      "Sculptural restraint meets tropical modernism. An expansive open-plan layout wrapped around an internal courtyard, anchored by an integrated travertine dining console.",
  },
  {
    id: "indiranagar-culinary",
    title: "Bespoke Kitchen Concept",
    category: "residential",
    location: "Modular Kitchen Study · Bengaluru",
    scope: "Chef Ergonomics & Cabinetry Concept",
    area: "Kitchen Study",
    year: "Concept Spec",
    materials: ["Fenix NTM Charcoal", "Nero Marquina", "Integrated LED", "Solid Walnut"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format&fit=crop&q=80",
    description:
      "High-performance culinary ergonomics framed in seamless architectural cabinetry. Motorized pocket doors, concealed prep zones, and a cantilevered dining slab.",
  },
  {
    id: "lavelle-executive-suite",
    title: "Executive Studio Concept",
    category: "commercial",
    location: "Workplace Architecture Study · Bengaluru",
    scope: "Acoustic Workspace & Studio Concept",
    area: "Studio Study",
    year: "Concept Spec",
    materials: ["Acoustic Wool Felt", "Natural Ash", "Anodized Black Steel", "Leather"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    description:
      "Calm, distraction-free corporate environment designed for strategic focus. Timber workstations, concealed cable routing, and sound-isolated acoustic meeting pods.",
  },
];

const spaces = [
  {
    id: "living",
    name: "Living Salons",
    tagline: "Expansive Gathering & Ambient Lounges",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "kitchen",
    name: "Modular Kitchens",
    tagline: "Architectural Precision & Chef Ergonomics",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "bedroom",
    name: "Master Suites",
    tagline: "Tactile Sanctuaries for Restful Sleep",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "dining",
    name: "Dining & Wine Rooms",
    tagline: "Intimate Entertaining & Material Elegance",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop&q=80",
  },
];

export function InteriorDesignView() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Duplex / Penthouse",
    size: "3,000 - 5,000 sq.ft",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#1C1A18] font-serif antialiased selection:bg-[#C5A059] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#141211] text-[#E8E2D5] text-xs py-1.5 px-4 font-sans flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Interior Design Studio Architecture</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed & engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#C5A059] hover:text-[#e0bb70] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── ARCHITECTURAL FLOATING NAV ── */}
      <header className="sticky top-0 z-40 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-[#E7E2D5] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <Link href="/work/interior-design" className="group">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1817] font-serif block">
                ATELIER AURA
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#8A7E73] block -mt-1">
                Studio Concept · Bengaluru
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#574E45]">
            <a href="#projects" className="hover:text-[#C5A059] transition-colors">
              Selected Concepts
            </a>
            <a href="#spaces" className="hover:text-[#C5A059] transition-colors">
              Spaces
            </a>
            <a href="#method" className="hover:text-[#C5A059] transition-colors">
              The Method
            </a>
            <a href="#materials" className="hover:text-[#C5A059] transition-colors">
              Materiality
            </a>
          </nav>

          <button
            onClick={() => setConsultationOpen(true)}
            className="px-5 py-2.5 border border-[#1A1817] hover:bg-[#1A1817] hover:text-white text-[#1A1817] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer font-sans"
          >
            Book Consultation
          </button>
        </div>
      </header>

      {/* ── CINEMATIC FULL-BLEED HERO ── */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-end overflow-hidden">
        {/* Full-bleed high-res background photography */}
        <Image
          src="/work/images/interior-design-hero.jpg"
          alt="Atelier Aura Luxury Living Room Bengaluru"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Sophisticated Architectural Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-[#141211]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141211]/80 via-transparent to-transparent hidden lg:block" />

        {/* Hero Narrative Overlay */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-[#C5A059] mb-4">
              <span>✦</span> Interior Architecture & Design Concept
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F8F6F0] tracking-tight leading-[1.05] mb-6">
              Spaces Designed <br />
              <span className="italic text-[#E5D5BA]">with Restraint.</span> <br />
              Built to Endure.
            </h1>

            <p className="text-sm sm:text-base text-[#D4C9BC] font-sans font-normal leading-relaxed max-w-xl mb-8">
              An architectural interior studio concept for bespoke residences, duplex penthouses, and private commercial suites. Grounded in timeless materiality, natural daylight, and precision joinery.
            </p>

            <div className="flex flex-wrap items-center gap-4 font-sans">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#b08d47] text-[#141211] text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
              >
                Explore Design Concepts
              </a>
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-colors cursor-pointer"
              >
                Discuss a Project
              </button>
            </div>
          </div>

          {/* Architectural specs ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/15 font-sans">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">Location</p>
              <p className="text-sm font-semibold text-white mt-1">Studio Concept · Bengaluru</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">Discipline</p>
              <p className="text-sm font-semibold text-white mt-1">Architecture & Interiors</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">Approach</p>
              <p className="text-sm font-semibold text-white mt-1">Design Architecture</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">Scope</p>
              <p className="text-sm font-semibold text-white mt-1">Concept to Specification</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROOM DISCOVERY: SPATIAL EXPERIENCES ── */}
      <section id="spaces" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#E7E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059] mb-2">Typologies</p>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1817] tracking-tight">
                Curated Spatial Environments
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#73685E] max-w-md">
              Each space is calibrated for its functional rhythm — from dramatic formal hosting salons to acoustically dampened private retreats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaces.map((sp) => (
              <div key={sp.id} className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1A1817]">
                <Image
                  src={sp.image}
                  alt={sp.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-[#141211]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 font-sans">
                  <h3 className="text-lg font-serif font-normal text-white">{sp.name}</h3>
                  <p className="text-xs text-[#C5A059] mt-1 font-mono tracking-wide">{sp.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED ARCHITECTURAL WORKS (EDITORIAL SPREADS) ── */}
      <section id="projects" className="py-20 lg:py-32 bg-[#F3EFE7] border-b border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 font-sans">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059]">Concepts</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1A1817] tracking-tight mt-1">
                Selected Concepts
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Concepts" },
                { id: "residential", label: "Residential" },
                { id: "commercial", label: "Commercial" },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setFilter(b.id as "all" | "residential" | "commercial")}
                  className={`text-xs uppercase tracking-wider sm:tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 transition-all cursor-pointer font-bold ${
                    filter === b.id
                      ? "bg-[#1A1817] text-white"
                      : "bg-white/60 text-[#6B5F54] hover:bg-white hover:text-[#1A1817]"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial alternating layout */}
          <div className="space-y-24 lg:space-y-36">
            {filteredProjects.map((p, idx) => (
              <div
                key={p.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Large Project Image */}
                <div className={`lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-sm shadow-xl ${
                  idx % 2 === 1 ? "lg:col-start-6" : ""
                }`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#141211]/85 backdrop-blur-sm text-white text-[11px] font-mono tracking-widest px-3 py-1 uppercase font-sans">
                    {p.area} · {p.year}
                  </div>
                </div>

                {/* Project Context Narrative */}
                <div className={`lg:col-span-5 font-sans ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="font-mono text-[11px] text-[#C5A059] tracking-widest uppercase mb-2">
                    {p.location}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1817] leading-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#665B51] leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>

                  <div className="mb-6 pt-4 border-t border-[#DDD5C7]">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8A7C6E] mb-2">Scope of Work</p>
                    <p className="text-xs font-semibold text-[#1A1817]">{p.scope}</p>
                  </div>

                  {/* Materials tags */}
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#8A7C6E] mb-2">Material Palette</p>
                    <div className="flex flex-wrap gap-2">
                      {p.materials.map((m) => (
                        <span
                          key={m}
                          className="text-[11px] bg-white border border-[#DDD5C7] text-[#453D35] px-2.5 py-1 font-mono rounded-xs"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALITY & FINISHES LIBRARY ── */}
      <section id="materials" className="py-20 lg:py-28 bg-[#181615] text-[#F8F6F0] border-b border-white/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059]">Tactility</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight mt-1">
              Honest Materiality
            </h2>
            <p className="text-xs sm:text-sm text-[#A89E92] mt-3 leading-relaxed">
              Curated natural materials selected for architectural longevity and tactile balance. Highlighting natural timbers, quarried stones, and artisan metal finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "European Smoked Oak",
                use: "Architectural Millwork & Floor Planks",
                desc: "Fumed natural grain with deep organic chocolate hues, sealed with zero-VOC micro-wax.",
              },
              {
                name: "Italian Statuario Marble",
                use: "Monolithic Kitchen Islands & Baths",
                desc: "Book-matched quarried slabs featuring prominent feather veining on pristine ivory ground.",
              },
              {
                name: "Hand-Brushed Brass",
                use: "Bespoke Hardware & Inlays",
                desc: "Living architectural alloy with unlacquered hand-rubbed satin texture that ages gracefully.",
              },
              {
                name: "Venetian Lime Plaster",
                use: "Seamless Monolithic Wall Planes",
                desc: "Breathable mineral plaster applied in three troweled coats for subtle depth and light diffusion.",
              },
            ].map((mat) => (
              <div key={mat.name} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059]">Finishing Spec</span>
                <h3 className="font-serif text-lg font-normal text-white mt-2 mb-1">{mat.name}</h3>
                <p className="text-xs text-[#C5A059] font-mono mb-3">{mat.use}</p>
                <p className="text-xs text-[#A89E92] leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE 4-PHASE ATELIER METHOD ── */}
      <section id="method" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#E7E2D5] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059]">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1817] tracking-tight mt-1">
              From Blueprint to Handover
            </h2>
            <p className="text-xs sm:text-sm text-[#73685E] mt-2">
              A structured four-stage process ensuring absolute aesthetic alignment and budget certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Spatial Audit & Concept",
                desc: "Deep analysis of natural light, spatial circulation, and client lifestyle patterns. We deliver zoning sketches and 2D spatial layouts.",
              },
              {
                step: "02",
                title: "3D Renders & Specification",
                desc: "Photorealistic 3D visualization of every room. Complete material sample boards presented in person before procurement starts.",
              },
              {
                step: "03",
                title: "Joinery & Site Fabrication",
                desc: "Off-site precision factory fabrication of modular units paired with disciplined on-site architectural execution and MEP integration.",
              },
              {
                step: "04",
                title: "White-Glove Staging",
                desc: "Installation of custom furniture, art placement, detailed styling, and technical documentation of lighting controls.",
              },
            ].map((st) => (
              <div key={st.step} className="border-t border-[#1A1817] pt-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-[#C5A059]">{st.step}</span>
                  <h3 className="font-serif text-lg font-normal text-[#1A1817] mt-3 mb-2">{st.title}</h3>
                  <p className="text-xs text-[#6B5F54] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION & STUDIO INQUIRY ── */}
      <section id="consultation" className="py-20 lg:py-28 bg-[#EDE7DC] border-b border-[#DDD5C7] font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059]">Consultation</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#1A1817] tracking-tight mt-2 mb-4">
            Discuss Your Space
          </h2>
          <p className="text-sm text-[#665B50] max-w-lg mx-auto mb-10 leading-relaxed">
            Whether exploring a full residence architecture or a penthouse study, we invite you to explore project parameters through this interactive consultation planner.
          </p>

          <div className="bg-white p-8 sm:p-12 shadow-xl rounded-sm border border-[#D5CCBE] text-left">
            {submitted ? (
              <div className="py-8 text-center">
                <span className="text-3xl mb-3 block">🏛️</span>
                <h3 className="font-serif text-2xl text-[#1A1817] mb-2">Consultation Request Received</h3>
                <p className="text-xs text-[#6B5F54] max-w-md mx-auto">
                  Thank you for sharing your project parameters. In a live production environment, the design team reviews spatial requirements and reaches out to schedule a consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono uppercase text-[#C5A059] hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#73685E] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#DDD5C7] text-xs text-[#1A1817] outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#73685E] mb-2">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#DDD5C7] text-xs text-[#1A1817] outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#73685E] mb-2">
                      Property Typology
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#DDD5C7] text-xs text-[#1A1817] outline-none focus:border-[#C5A059]"
                    >
                      <option>Duplex / Penthouse</option>
                      <option>Independent Villa</option>
                      <option>Luxury Apartment (3BHK / 4BHK)</option>
                      <option>Boutique Commercial Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#73685E] mb-2">
                      Approximate Carpet Area
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F6F0] border border-[#DDD5C7] text-xs text-[#1A1817] outline-none focus:border-[#C5A059]"
                    >
                      <option>1,800 - 3,000 sq.ft</option>
                      <option>3,000 - 5,000 sq.ft</option>
                      <option>5,000 - 8,000+ sq.ft</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1A1817] hover:bg-[#C5A059] text-white hover:text-[#141211] text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Schedule Studio Consultation (Demo) →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#141211] text-[#A89E92] py-14 font-sans border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10 text-xs">
            <div>
              <span className="font-serif text-xl text-white block mb-2">ATELIER AURA</span>
              <p className="leading-relaxed text-[#8A7F73] max-w-xs">
                Architectural interior design showcase concept. Crafted for those who appreciate restraint.
              </p>
            </div>
            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-2">Studio Schedule</p>
              <p className="text-[#8A7F73]">Consultation by prior appointment.</p>
              <p className="text-[#8A7F73]">Studio Concept · Bengaluru</p>
            </div>
            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#8A7F73]">
                Showcase project created for the web design portfolio of bibekbhagat.dev.
              </p>
              <Link href="/#work" className="text-[#C5A059] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#73685E] gap-2">
            <div>© 2026 Atelier Aura Showcase. All rights reserved.</div>
            <div>Designed & engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>

      {/* ── MODAL CONSULTATION ── */}
      {consultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-sans">
          <div className="bg-[#F8F6F0] w-full max-w-lg p-8 rounded-sm shadow-2xl relative border border-[#DDD5C7]">
            <button
              onClick={() => setConsultationOpen(false)}
              className="absolute top-4 right-4 text-[#73685E] hover:text-[#1A1817] p-2 text-sm cursor-pointer"
            >
              ✕
            </button>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059]">Atelier Aura</span>
            <h3 className="font-serif text-2xl text-[#1A1817] mt-1 mb-2">Private Studio Consultation</h3>
            <p className="text-xs text-[#6B5F54] mb-6 leading-relaxed">
              Discuss spatial requirements, aesthetic direction, and feasibility through this showcase consultation interface.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-xs text-[#1A1817] outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number / WhatsApp"
                className="w-full px-4 py-3 bg-white border border-[#DDD5C7] text-xs text-[#1A1817] outline-none"
              />
              <button
                onClick={() => {
                  alert("Consultation request simulated! In production, this notifies the studio team.");
                  setConsultationOpen(false);
                }}
                className="w-full py-3.5 bg-[#1A1817] hover:bg-[#C5A059] text-white hover:text-[#141211] text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Confirm Consultation Request (Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
