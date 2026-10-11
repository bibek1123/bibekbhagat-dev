"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  name: string;
  category: "ac" | "electrical" | "plumbing" | "cleaning" | "carpentry" | "painting";
  price: string;
  duration: string;
  ratingBadge?: string;
  image: string;
  description: string;
  inclusions: string[];
}

const serviceCategories = [
  { id: "all", name: "All Services", icon: "⚡" },
  { id: "ac", name: "AC & Appliances", icon: "❄️" },
  { id: "electrical", name: "Electrician", icon: "💡" },
  { id: "plumbing", name: "Plumbing", icon: "🔧" },
  { id: "cleaning", name: "Deep Cleaning", icon: "✨" },
  { id: "carpentry", name: "Carpentry", icon: "🪚" },
  { id: "painting", name: "Painting", icon: "🎨" },
];

const allServices: ServiceItem[] = [
  {
    id: "ac-foam-jet",
    name: "Foam Jet AC Deep Service",
    category: "ac",
    price: "₹499",
    duration: "45 mins",
    ratingBadge: "Most Booked",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    description: "High-pressure jet wash eliminating deep dirt, mold, and odor from indoor and outdoor coils.",
    inclusions: ["Coil foam wash & jet rinse", "Filter & drain tray sanitization", "Gas pressure check", "Cooling performance test"],
  },
  {
    id: "ac-repair-diagnostic",
    name: "AC Repair & Diagnostic Visit",
    category: "ac",
    price: "₹249",
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    description: "Thorough inspection for water leakage, cooling loss, PCB errors, or compressor noise.",
    inclusions: ["Comprehensive multimeter diagnostics", "Coolant leak identification", "Upfront spare estimate provided", "Inspection fee adjusted in repair"],
  },
  {
    id: "switchboard-repair",
    name: "Switchboard & Socket Installation",
    category: "electrical",
    price: "₹199",
    duration: "30 mins",
    ratingBadge: "Quick 30-min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: "Replacement or repair of burnt sockets, loose modular switches, and MCB breaker trips.",
    inclusions: ["Safe line voltage check", "Modular plate mounting", "Load testing with connected appliance", "Safety earthing verification"],
  },
  {
    id: "fan-installation",
    name: "Ceiling Fan Installation & Repair",
    category: "electrical",
    price: "₹249",
    duration: "40 mins",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    description: "Downrod assembly, blade balancing, regulator capacitor check, and vibration-free mounting.",
    inclusions: ["Hook assembly & safety wiring", "Blade angle alignment", "Capacitor speed check", "Noise-free operation test"],
  },
  {
    id: "tap-pipe-repair",
    name: "Tap, Mixer & Pipe Leak Fix",
    category: "plumbing",
    price: "₹199",
    duration: "30 mins",
    ratingBadge: "High Demand",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
    description: "Fixing dripping spouts, quarter-turn spindle replacements, and bathroom angle valves.",
    inclusions: ["Thread seal tape application", "Spindle or washer replacement", "Line pressure test", "Clean finish with zero leaks"],
  },
  {
    id: "drain-clog-clear",
    name: "Sink & Drain Blockage Clearing",
    category: "plumbing",
    price: "₹349",
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80",
    description: "Manual mechanical rodding and pressure flushing to eliminate kitchen sink and floor trap clogs.",
    inclusions: ["P-trap disassembly & cleaning", "Mechanical steel auger pass", "High-flow hot water flush", "Deodorizing residue wash"],
  },
  {
    id: "bathroom-deep-clean",
    name: "Intense Bathroom Sanitization",
    category: "cleaning",
    price: "₹699",
    duration: "60 mins",
    ratingBadge: "Popular",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&auto=format&fit=crop&q=80",
    description: "Deep descaling of wall tiles, hard water stain removal from chrome fittings, and floor scrubbing.",
    inclusions: ["Hard water scale buffing", "WC bowl disinfection", "Mirror & partition glass polish", "High-grade grout scrub"],
  },
  {
    id: "sofa-shampoo",
    name: "Sofa & Upholstery Foam Shampoo",
    category: "cleaning",
    price: "₹899",
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    description: "Fabric dry-vacuuming followed by deep chemical foam injection and moisture extraction.",
    inclusions: ["High-power dust extraction", "Foam shampoo stain agitation", "Vacuum moisture extraction", "Fabric freshness treatment"],
  },
  {
    id: "furniture-assembly",
    name: "Modular Furniture Assembly",
    category: "carpentry",
    price: "₹499",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80",
    description: "Precision assembly for flat-pack wardrobes, study desks, shoe racks, and TV console units.",
    inclusions: ["Hardware component sorting", "Level-checked frame jointing", "Door hinge & drawer alignment", "Packaging disposal guidance"],
  },
  {
    id: "door-lock-repair",
    name: "Door Lock & Handle Fitting",
    category: "carpentry",
    price: "₹299",
    duration: "40 mins",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&auto=format&fit=crop&q=80",
    description: "Installation or fixing of mortise locks, cylindrical handles, and latch alignment.",
    inclusions: ["Mortise chisel adjustment", "Deadbolt alignment", "Smooth key action calibration", "Strike plate secure fastening"],
  },
  {
    id: "wall-patch-touchup",
    name: "Wall Seepage Patch & Paint Touchup",
    category: "painting",
    price: "₹799",
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
    description: "Surface scraping, waterproof putty application, and color-matched emulsion coat.",
    inclusions: ["Loose plaster scraping", "Waterproof polymer primer", "Double coat acrylic putty", "Smooth sand finish & color coat"],
  },
];

export function HomeServicesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("Delhi NCR");
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    address: "",
    slot: "Morning (9:00 AM – 12:00 PM)",
    date: "Tomorrow",
  });

  const filteredServices = useMemo(() => {
    return allServices.filter((s) => {
      const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#4F46E5] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#0F172A] text-[#E2E8F0] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: On-Demand Home Services Platform Design</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed & engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#818CF8] hover:text-[#A5B4FC] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── URBAN COMPANY STYLE PRACTICAL NAV ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand & City selector */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/work/home-services" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white font-black text-lg shadow-sm">
                F
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-[#0F172A] block leading-none">
                  FixKaro<span className="text-[#4F46E5]">.</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#64748B] block mt-0.5">
                  Home Services
                </span>
              </div>
            </Link>

            {/* City selector dropdown */}
            <div className="hidden sm:flex items-center gap-1.5 bg-[#F1F5F9] px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-xs font-semibold text-[#334155]">
              <span>📍</span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent outline-none cursor-pointer text-xs font-medium text-[#1E293B]"
              >
                <option>Delhi NCR</option>
                <option>Bengaluru</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Hyderabad</option>
              </select>
            </div>
          </div>

          {/* Quick Header Search input for desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search for 'AC service', 'Tap leak', 'Fan repair'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#4F46E5] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="#services"
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </header>

      {/* ── FAST SERVICE-DISCOVERY HERO ── */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] pt-8 pb-12 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#4F46E5] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 border border-[#E0E7FF]">
              <span>⚡</span> On-Demand Home Maintenance
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.15] mb-3">
              Home Services Made Simple. <br />
              <span className="text-[#4F46E5]">Transparent Pricing.</span> Fast Doorstep Visits.
            </h1>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl">
              From seasonal AC maintenance to urgent plumbing and electrical fittings, discover standardized services designed for seamless home upkeep in {selectedCity}.
            </p>
          </div>

          {/* Mobile Search input */}
          <div className="md:hidden mb-6">
            <div className="relative w-full">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search 'AC service', 'Tap leak', 'Fan'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Horizontal Category Rail (Urban Company Discovery Pattern) */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
              Explore by Category
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
              {serviceCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSearchQuery("");
                    }}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all cursor-pointer border text-center ${
                      isSelected
                        ? "bg-[#EEF2FF] border-[#4F46E5] text-[#4F46E5] shadow-xs"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#334155] hover:bg-white hover:border-[#CBD5E1]"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl mb-1.5">{cat.icon}</span>
                    <span className="text-[11px] sm:text-xs font-bold leading-tight line-clamp-1">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR SERVICES CAROUSEL / RAIL ── */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] block">
                Trending This Season
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                Most Requested Services
              </h2>
            </div>
            <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
              Swipe or scroll to preview
            </span>
          </div>

          {/* Horizontal scroll container with scroll snap */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
            {allServices.slice(0, 5).map((service) => (
              <div
                key={service.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col justify-between snap-start shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#E2E8F0]">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    {service.ratingBadge && (
                      <span className="absolute top-3 left-3 bg-[#0F172A]/85 text-white text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                        ✦ {service.ratingBadge}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-white/90 text-[#0F172A] font-mono text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      ⏱ {service.duration}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-1 leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#64748B] line-clamp-2 mb-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0 flex items-center justify-between border-t border-[#E2E8F0]/60 mt-auto">
                  <div>
                    <span className="text-[10px] text-[#64748B] block font-medium">Standard Spec</span>
                    <span className="text-base font-black text-[#0F172A] font-mono">{service.price}</span>
                  </div>
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className="px-4 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    View &amp; Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES BROWSER WITH FILTERING ── */}
      <section id="services" className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
                Service Catalogue
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1">
                {selectedCategory === "all"
                  ? "Complete Rate Card & Services"
                  : `${serviceCategories.find((c) => c.id === selectedCategory)?.name} Solutions`}
              </h2>
            </div>
            <div className="text-xs text-[#64748B]">
              Showing <span className="font-bold text-[#0F172A]">{filteredServices.length}</span> curated services
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-[#CBD5E1]">
              <span className="text-3xl mb-2 block">🔎</span>
              <h3 className="font-bold text-base text-[#0F172A] mb-1">No services found</h3>
              <p className="text-xs text-[#64748B] mb-4">
                We couldn&apos;t find any service matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-xs font-bold text-[#4F46E5] hover:underline"
              >
                Clear filters and view all
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#CBD5E1] transition-all shadow-xs hover:shadow-md"
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full">
                        {service.category}
                      </span>
                      <span className="text-xs font-mono text-[#64748B] font-semibold">
                        ⏱ {service.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] mb-2">{service.name}</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-4">{service.description}</p>

                    <div className="bg-[#F8FAFC] rounded-xl p-3 border border-[#E2E8F0] space-y-1.5 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                        Included in this service:
                      </span>
                      {service.inclusions.slice(0, 3).map((inc) => (
                        <div key={inc} className="text-xs text-[#334155] flex items-center gap-2">
                          <span className="text-[#10B981] font-bold text-xs">✓</span>
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#64748B] block">Standard Rate</span>
                      <span className="text-lg font-black text-[#0F172A] font-mono">{service.price}</span>
                    </div>
                    <button
                      onClick={() => setActiveServiceModal(service)}
                      className="px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
                    >
                      Book Service →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── TRANSPARENT PRICING & SERVICE PROMISE ── */}
      <section className="py-16 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">
              Service Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mt-1">
              How FixKaro Operates
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Simple, transparent booking workflow with zero hidden inspection surprise fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Select & Schedule",
                desc: "Choose the exact service you require from our itemized rate card and pick a convenient date & time slot.",
              },
              {
                num: "02",
                title: "Upfront Diagnosis",
                desc: "Clear itemized pricing before work starts. If spare parts are needed, cost is shared upfront before fitting.",
              },
              {
                num: "03",
                title: "Job Completion Review",
                desc: "Work completed with post-service testing and a digital invoice shared immediately on your phone.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] relative">
                <span className="text-2xl font-black text-[#4F46E5] font-mono">{step.num}</span>
                <h3 className="font-bold text-base text-[#0F172A] mt-2 mb-2">{step.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMULATED SERVICE DETAIL & BOOKING MODAL ── */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative border border-[#CBD5E1] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setActiveServiceModal(null);
                setBookingSuccess(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 text-sm cursor-pointer z-10"
            >
              ✕
            </button>

            {bookingSuccess ? (
              <div className="p-8 text-center">
                <span className="text-4xl mb-3 block">🎉</span>
                <h3 className="text-xl font-black text-[#0F172A] mb-2">Service Request Simulated!</h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you! In a live production environment, this booking is routed to the nearest service partner and confirmed via SMS / WhatsApp notification.
                </p>
                <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] text-left text-xs mb-6">
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Service</span>
                    <span className="font-bold text-[#0F172A]">{activeServiceModal.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Estimated Rate</span>
                    <span className="font-bold font-mono text-[#4F46E5]">{activeServiceModal.price}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#64748B]">Slot Selected</span>
                    <span className="font-bold text-[#0F172A]">{bookingForm.date} · {bookingForm.slot}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveServiceModal(null);
                    setBookingSuccess(false);
                  }}
                  className="w-full py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Close Demo Modal
                </button>
              </div>
            ) : (
              <div>
                <div className="relative aspect-[16/9] w-full bg-[#E2E8F0]">
                  <Image
                    src={activeServiceModal.image}
                    alt={activeServiceModal.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#4F46E5] px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {activeServiceModal.category}
                    </span>
                    <h3 className="text-xl font-black">{activeServiceModal.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#E2E8F0]">
                    <div>
                      <span className="text-xs text-[#64748B]">Standard Rate</span>
                      <div className="text-2xl font-black text-[#0F172A] font-mono">
                        {activeServiceModal.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#64748B]">Estimated Duration</span>
                      <div className="text-xs font-bold text-[#0F172A]">
                        ⏱ {activeServiceModal.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      Inclusions &amp; Scope:
                    </h4>
                    <ul className="space-y-1.5">
                      {activeServiceModal.inclusions.map((inc) => (
                        <li key={inc} className="text-xs text-[#334155] flex items-center gap-2">
                          <span className="text-[#10B981] font-bold">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingSuccess(true);
                    }}
                    className="space-y-4 pt-4 border-t border-[#E2E8F0]"
                  >
                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#4F46E5]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#4F46E5]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1">
                          Preferred Slot
                        </label>
                        <select
                          value={bookingForm.slot}
                          onChange={(e) => setBookingForm({ ...bookingForm, slot: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#4F46E5]"
                        >
                          <option>Morning (9 AM – 12 PM)</option>
                          <option>Afternoon (12 PM – 4 PM)</option>
                          <option>Evening (4 PM – 8 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1">
                        Service Address (Locality)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sector 43, Gurugram"
                        value={bookingForm.address}
                        onChange={(e) => setBookingForm({ ...bookingForm, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0F172A] outline-none focus:border-[#4F46E5]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Confirm Booking Request (Demo) →
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="bg-[#0F172A] text-[#94A3B8] py-12 text-xs border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            <div>
              <span className="text-lg font-black text-white block mb-2">FixKaro</span>
              <p className="leading-relaxed text-[#64748B] max-w-xs">
                Showcase on-demand home services web platform concept. Engineered for high-speed service discovery, transparent pricing, and instant booking flows.
              </p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-2">Coverage (Showcase)</p>
              <p className="text-[#64748B]">Delhi NCR · Bengaluru · Mumbai · Pune · Hyderabad</p>
              <p className="text-[#64748B] mt-1">Operating Hours: 8:00 AM – 9:00 PM</p>
            </div>
            <div>
              <p className="text-white font-bold uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#64748B]">
                Fictional showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates utility-driven home services UX inspired by Urban Company.
              </p>
              <Link href="/#work" className="text-[#818CF8] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B] gap-2">
            <div>© 2026 FixKaro Showcase. All rights reserved.</div>
            <div>Designed & engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
