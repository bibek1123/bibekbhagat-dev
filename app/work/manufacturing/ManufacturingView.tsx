"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Capability {
  id: string;
  name: string;
  tagline: string;
  materials: string[];
  tolerance: string;
  applications: string;
  image: string;
  description: string;
  processSpecs: string[];
}

const capabilities: Capability[] = [
  {
    id: "5axis-cnc",
    name: "5-Axis High-Speed CNC Milling",
    tagline: "Complex sculpted geometries machined in single-setup chucking",
    materials: ["Titanium Ti-6Al-4V", "Inconel 718", "Aerospace Aluminium 7075-T6", "SS 316L"],
    tolerance: "±0.005 mm (5 Microns)",
    applications: "Impeller blisks, turbine housings, structural flight brackets",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80",
    description:
      "Simultaneous 5-axis toolpaths eliminating compound setup errors. Engineered for aerospace structural brackets, manifold blocks, and complex contoured molds requiring uniform surface micro-roughness.",
    processSpecs: ["24,000 RPM Spindles", "Thermal Growth Compensation", "Renishaw Optical In-Process Probing", "Through-Spindle High Pressure Coolant"],
  },
  {
    id: "cnc-turning",
    name: "Precision Multi-Axis Mill-Turn Centers",
    tagline: "Simultaneous twin-spindle turning and live-tool milling",
    materials: ["Alloy Steels 4140/4340", "Bearing Bronze SAE 660", "Brass C360", "17-4 PH Stainless"],
    tolerance: "±0.008 mm (8 Microns)",
    applications: "High-pressure hydraulic spools, splined shafts, aerospace bushings",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
    description:
      "Sub-spindle transfer capability enabling complete machining from bar stock to finished part in a single continuous operational cycle with tight concentricity controls.",
    processSpecs: ["Live Tooling (Y-Axis)", "Bar Feeder Automated Loading", "Twin Opposed Spindles", "Sub-Micron Encoder Resolution"],
  },
  {
    id: "wire-edm",
    name: "Wire Electrical Discharge Machining (EDM)",
    tagline: "Ultra-fine contouring of hardened conductive alloys with zero mechanical stress",
    materials: ["Carbide Tungsten", "Tool Steels D2 / H13", "Hardened Inconel (62 HRC)"],
    tolerance: "±0.003 mm (3 Microns)",
    applications: "Extrusion dies, precision micro-slots, keyways, punch tooling",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&auto=format&fit=crop&q=80",
    description:
      "Submerged brass wire spark erosion cutting hardened alloys without introducing heat-affected stress micro-cracks. Ideal for deep keyways and sharp internal radii.",
    processSpecs: ["0.20 mm Submerged Brass Wire", "Anti-Electrolysis Generator", "Auto Wire Threading in Gap", "Ra 0.18 µm Surface Finish"],
  },
  {
    id: "cmm-metrology",
    name: "Coordinate Metrology & Quality Profiling",
    tagline: "Automated 3D contact scanning and non-contact optical inspection",
    materials: ["Dimensional verification across all machinable engineering alloys"],
    tolerance: "Measuring Uncertainty: 0.9 µm + L/350",
    applications: "First Article Inspection Reports (FAIR), GD&T compliance, CMM batch audits",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    description:
      "Temperature-controlled metrology laboratory outfitted with portal CMMs and optical surface profilometers providing full geometric dimensioning and tolerancing (GD&T) documentation.",
    processSpecs: ["Zeiss 3D Scanning Sensor", "Mitutoyo Surface Roughness Testers", "Optical Comparator 50x", "Full Traceable Calibration"],
  },
];

const industries = [
  {
    name: "Aerospace & Defense",
    icon: "🚀",
    desc: "Lightweight structural titanium brackets, valve manifolds, and airframe hinge fittings machined to flight-safety specifications.",
  },
  {
    name: "Automotive Powertrain",
    icon: "⚙️",
    desc: "High-torque transmission shafts, splined hubs, and common-rail fuel injection precision sleeves built for extreme endurance.",
  },
  {
    name: "Medical Technologies",
    icon: "🔬",
    desc: "Biocompatible surgical robotic linkages, orthopedic bone screw prototypes, and stainless endoscope component housings.",
  },
  {
    name: "Energy & Hydraulics",
    icon: "⚡",
    desc: "High-pressure proportional valve spools, offshore directional drilling components, and gas turbine seal assemblies.",
  },
];

export function ManufacturingView() {
  const [activeCapability, setActiveCapability] = useState<Capability>(capabilities[0]);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqForm, setRfqForm] = useState({
    name: "",
    company: "",
    email: "",
    material: "Titanium Ti-6Al-4V",
    batchSize: "Prototype (1–10 pcs)",
    drawingNotes: "",
  });

  return (
    <div className="min-h-screen bg-[#0A1017] text-[#E2E8F0] font-sans antialiased selection:bg-[#F97316] selection:text-black">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#05080C] text-[#94A3B8] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Industrial Precision Engineering &amp; Manufacturing Web Design</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed &amp; engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#F97316] hover:text-[#fb923c] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── TECHNICAL HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#0A1017]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/work/manufacturing" className="group">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white block leading-none font-mono">
                  DHRUV<span className="text-[#F97316]">.</span>PRECISION
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#64748B] uppercase block mt-1">
                Engineering &amp; CNC Machining Concept
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
            <a href="#capabilities" className="hover:text-[#F97316] transition-colors">
              Capabilities
            </a>
            <a href="#sectors" className="hover:text-[#F97316] transition-colors">
              Industries Served
            </a>
            <a href="#quality" className="hover:text-[#F97316] transition-colors">
              Metrology Standard
            </a>
            <a href="#rfq" className="hover:text-[#F97316] transition-colors">
              Request for Quote
            </a>
          </nav>

          <button
            onClick={() => setRfqModalOpen(true)}
            className="px-5 py-2.5 bg-[#F97316] hover:bg-[#ea580c] text-black text-xs font-mono font-black uppercase tracking-wider rounded-sm transition-all shadow-md cursor-pointer"
          >
            Submit RFQ Drawing
          </button>
        </div>
      </header>

      {/* ── CINEMATIC INDUSTRIAL HERO (SANSERA INSPIRATION) ── */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-end overflow-hidden border-b border-white/10">
        {/* Full-bleed machining photography */}
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&auto=format&fit=crop&q=80"
          alt="Heavy industrial CNC spark erosion and machining center"
          fill
          priority
          className="object-cover object-center opacity-65"
          sizes="100vw"
        />

        {/* Technical gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1017] via-[#0A1017]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1017]/95 via-[#0A1017]/60 to-transparent hidden lg:block" />

        {/* Industrial grid lines overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#F97316] mb-4 bg-[#F97316]/10 px-3 py-1 rounded-xs border border-[#F97316]/30">
              <span>⚙</span> Advanced Contract Manufacturing &amp; Machining
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
              Precision Machined. <br />
              <span className="text-[#F97316]">Sub-Micron Tolerances.</span> <br />
              Mission-Critical Reliability.
            </h1>

            <p className="text-sm sm:text-base text-[#94A3B8] font-mono leading-relaxed max-w-xl mb-8">
              A high-precision engineering showcase concept designed for Indian aerospace, automotive powertrain, and energy sectors. Multiaxis CNC milling, mill-turn centers, and traceable CMM inspection.
            </p>

            <div className="flex flex-wrap items-center gap-4 font-mono">
              <button
                onClick={() => setRfqModalOpen(true)}
                className="px-8 py-3.5 bg-[#F97316] hover:bg-[#ea580c] text-black text-xs font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg cursor-pointer"
              >
                Upload CAD for Quote →
              </button>
              <a
                href="#capabilities"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors backdrop-blur-xs"
              >
                Inspect Machining Specs
              </a>
            </div>
          </div>

          {/* Technical metric ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/15 font-mono text-xs">
            <div>
              <p className="text-[#F97316] tracking-wider uppercase text-[10px]">Positional Accuracy</p>
              <p className="text-base font-bold text-white mt-1">±0.003 mm</p>
            </div>
            <div>
              <p className="text-[#F97316] tracking-wider uppercase text-[10px]">Alloy Capabilities</p>
              <p className="text-base font-bold text-white mt-1">Titanium · Inconel · Steel</p>
            </div>
            <div>
              <p className="text-[#F97316] tracking-wider uppercase text-[10px]">Machining Envelope</p>
              <p className="text-base font-bold text-white mt-1">Up to 1,200 mm Ø</p>
            </div>
            <div>
              <p className="text-[#F97316] tracking-wider uppercase text-[10px]">Verification Model</p>
              <p className="text-base font-bold text-white mt-1">3D CMM Contact Metrology</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CAPABILITIES DEEP-DIVE ── */}
      <section id="capabilities" className="py-20 lg:py-28 bg-[#0D1520] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F97316]">
                Engineering Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Precision Manufacturing Capabilities
              </h2>
            </div>
            <p className="font-mono text-xs text-[#94A3B8] max-w-md">
              Select an engineering division to examine dimensional tolerances, toolpath parameters, and verified alloy processing envelopes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Capability Selection List */}
            <div className="lg:col-span-5 space-y-3">
              {capabilities.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCapability(c)}
                  className={`w-full text-left p-5 rounded-sm transition-all cursor-pointer border flex flex-col justify-between ${
                    activeCapability.id === c.id
                      ? "bg-[#142030] border-[#F97316] text-white shadow-lg"
                      : "bg-[#090F17] border-white/10 text-[#94A3B8] hover:bg-[#101924] hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F97316]">
                      {c.tolerance}
                    </span>
                    <span className="text-xs font-mono font-bold">→</span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white">{c.name}</h3>
                  <p className="text-xs text-[#64748B] mt-1 font-mono line-clamp-1">{c.tagline}</p>
                </button>
              ))}
            </div>

            {/* Active Capability Deep Dive Card */}
            <div className="lg:col-span-7 bg-[#090F17] border border-white/15 rounded-sm p-6 sm:p-8 shadow-2xl">
              <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden mb-6 bg-[#142030]">
                <Image
                  src={activeCapability.image}
                  alt={activeCapability.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 font-mono">
                  <span className="text-[10px] bg-[#F97316] text-black px-2 py-0.5 font-bold uppercase rounded-2xs inline-block mb-1">
                    Machining Specification
                  </span>
                  <h4 className="text-lg font-bold text-white">{activeCapability.name}</h4>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-xs">
                <div>
                  <span className="text-[#64748B] uppercase text-[10px] block">Verified Tolerance</span>
                  <span className="text-white font-bold text-sm">{activeCapability.tolerance}</span>
                </div>
                <div>
                  <span className="text-[#64748B] uppercase text-[10px] block">Primary Applications</span>
                  <span className="text-white font-bold text-sm">{activeCapability.applications}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6 font-mono">
                {activeCapability.description}
              </p>

              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] block mb-3">
                  Technical Machine &amp; Process Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCapability.processSpecs.map((spec) => (
                    <div
                      key={spec}
                      className="text-xs font-mono text-[#CBD5E1] bg-white/5 border border-white/10 p-2.5 rounded-xs flex items-center gap-2"
                    >
                      <span className="text-[#F97316]">■</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono">
                <div className="text-[11px] text-[#64748B]">
                  CAD files accepted: STEP, IGES, DXF, Parasolid
                </div>
                <button
                  onClick={() => setRfqModalOpen(true)}
                  className="px-4 py-2 bg-[#F97316] hover:bg-[#ea580c] text-black text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  Quote this Process →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION SECTORS ── */}
      <section id="sectors" className="py-20 bg-[#0A1017] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F97316]">
              End Markets
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
              Engineered for Critical Sectors
            </h2>
            <p className="font-mono text-xs text-[#94A3B8] mt-2">
              Our components serve environments where mechanical failure is not an option.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-[#0D1520] border border-white/10 p-6 rounded-xs hover:border-[#F97316]/60 transition-colors"
              >
                <span className="text-3xl mb-3 block">{ind.icon}</span>
                <h3 className="text-base font-bold text-white mb-2 font-mono">{ind.name}</h3>
                <p className="text-xs text-[#94A3B8] font-mono leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METROLOGY & QUALITY ASSURANCE ── */}
      <section id="quality" className="py-20 bg-[#080E14] border-b border-white/10 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-[#F97316]">
                Quality Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1 mb-4">
                Full Metrology Traceability
              </h2>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                From raw stock mill test certificates (MTC) to final Coordinate Measuring Machine (CMM) volumetric inspection, every production run includes complete dimensional reporting.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Raw Material Spectroscopy & Hardness",
                    desc: "Verification of chemical alloy composition and core Rockwell/Brinell hardness before cutting commences.",
                  },
                  {
                    step: "02",
                    title: "In-Process Renishaw Probing",
                    desc: "Automated machine spindle probing calibrating critical reference datums and tool wear offsets during roughing and finishing.",
                  },
                  {
                    step: "03",
                    title: "3D CMM Final Article Inspection",
                    desc: "Full contact scanning validating true geometric positioning, concentricity, perpendicularity, and surface Ra roughness.",
                  },
                ].map((s) => (
                  <div key={s.step} className="border-l-2 border-[#F97316] pl-4 py-1">
                    <span className="text-[10px] text-[#F97316] font-bold block">{s.step} PROTOCOL</span>
                    <h3 className="text-xs font-bold text-white">{s.title}</h3>
                    <p className="text-[11px] text-[#64748B] mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0D1520] border border-white/15 p-8 rounded-xs shadow-2xl">
                <span className="text-xs text-[#F97316] uppercase tracking-wider block mb-2">
                  Sample Dimensional Inspection Certificate
                </span>
                <div className="bg-black/60 p-4 rounded-xs border border-white/10 font-mono text-[11px] text-[#94A3B8] space-y-2">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span>Part No: DP-4429-TI</span>
                    <span className="text-[#10B981]">STATUS: PASS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nominal Bore Ø: 42.000 mm</span>
                    <span>Actual: 42.002 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>True Position: 0.010 mm</span>
                    <span>Actual: 0.004 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Surface Finish (Ra): 0.4 µm</span>
                    <span>Actual: 0.28 µm</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 text-[10px] text-[#64748B]">
                    Document Format: Standard AS9102 / Inspection Spec Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL RFQ MODAL ── */}
      {rfqModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs font-mono">
          <div className="bg-[#0D1520] w-full max-w-lg p-6 sm:p-8 rounded-xs shadow-2xl relative border border-white/20">
            <button
              onClick={() => {
                setRfqModalOpen(false);
                setRfqSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 text-sm cursor-pointer"
            >
              ✕
            </button>

            {rfqSubmitted ? (
              <div className="py-8 text-center">
                <span className="text-4xl mb-3 block">📐</span>
                <h3 className="text-xl font-bold text-white mb-2">RFQ Demonstration Submitted</h3>
                <p className="text-xs text-[#94A3B8] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you! In a live production environment, the engineering estimating team receives CAD drawings, performs DFM feasibility checks, and replies with formal quotation and tooling schedule.
                </p>
                <button
                  onClick={() => {
                    setRfqModalOpen(false);
                    setRfqSubmitted(false);
                  }}
                  className="px-6 py-3 bg-[#F97316] text-black text-xs font-bold uppercase tracking-wider rounded-xs"
                >
                  Close Specification Modal
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#F97316] block mb-1">
                  Technical Estimating Desk
                </span>
                <h3 className="text-xl font-bold text-white mb-1">Request for Quotation (RFQ)</h3>
                <p className="text-xs text-[#64748B] mb-5">
                  Simulate drawing submission for contract machining feasibility.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRfqSubmitted(true);
                  }}
                  className="space-y-4 text-xs"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#94A3B8] mb-1">Engineer Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Rao"
                        value={rfqForm.name}
                        onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                        className="w-full px-3 py-2 bg-black/50 border border-white/20 text-white outline-none rounded-xs focus:border-[#F97316]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#94A3B8] mb-1">Company / Organization</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. AeroDynamics Ltd"
                        value={rfqForm.company}
                        onChange={(e) => setRfqForm({ ...rfqForm, company: e.target.value })}
                        className="w-full px-3 py-2 bg-black/50 border border-white/20 text-white outline-none rounded-xs focus:border-[#F97316]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#94A3B8] mb-1">Material Class</label>
                      <select
                        value={rfqForm.material}
                        onChange={(e) => setRfqForm({ ...rfqForm, material: e.target.value })}
                        className="w-full px-3 py-2 bg-black/50 border border-white/20 text-white outline-none rounded-xs focus:border-[#F97316]"
                      >
                        <option>Titanium Ti-6Al-4V</option>
                        <option>Inconel 718</option>
                        <option>Aerospace Aluminium 7075-T6</option>
                        <option>Stainless Steel 316L</option>
                        <option>Tool Steel D2 (Hardened)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#94A3B8] mb-1">Batch Run Size</label>
                      <select
                        value={rfqForm.batchSize}
                        onChange={(e) => setRfqForm({ ...rfqForm, batchSize: e.target.value })}
                        className="w-full px-3 py-2 bg-black/50 border border-white/20 text-white outline-none rounded-xs focus:border-[#F97316]"
                      >
                        <option>Prototype (1–10 pcs)</option>
                        <option>Pre-Series (25–100 pcs)</option>
                        <option>Production (500–5000 pcs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#94A3B8] mb-1">
                      CAD Drawing Attachment (Demonstration Field)
                    </label>
                    <div className="border border-dashed border-white/30 p-4 text-center rounded-xs bg-white/[0.02]">
                      <span className="text-[#64748B] text-[11px] block">
                        Drag and drop STEP, IGES, or PDF 2D drawing (Demo only)
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#F97316] hover:bg-[#ea580c] text-black font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    Transmit RFQ Package (Demo) →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── INDUSTRIAL FOOTER ── */}
      <footer className="bg-[#05080C] text-[#64748B] py-14 border-t border-white/10 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="text-lg font-bold text-white block mb-2">DHRUV PRECISION COMPONENTS</span>
              <p className="leading-relaxed text-[#64748B] max-w-xs">
                Precision contract manufacturing showcase concept inspired by Sansera Engineering. Specializing in multi-axis CNC machining, titanium alloys, and traceable CMM inspection.
              </p>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider mb-2">Engineering Facility Spec</p>
              <p className="text-[#64748B]">Showcase Concept · Rajkot Industrial Corridor, Gujarat</p>
              <p className="text-[#64748B] mt-1">Estimating Desk: rfq@dhruvprecision.demo</p>
            </div>
            <div>
              <p className="text-white uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#64748B]">
                Fictional engineering showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates industrial visual hierarchy, technical credibility, and B2B RFQ flows.
              </p>
              <Link href="/#work" className="text-[#F97316] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#475569] gap-2">
            <div>© 2026 Dhruv Precision Components Showcase. All rights reserved.</div>
            <div>Designed &amp; engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
