"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: string;
  title: string;
  type: "buy" | "rent" | "commercial";
  category: "Apartment" | "Penthouse" | "Villa" | "Commercial Suite";
  locality: string;
  city: string;
  price: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  statusBadge: string;
  image: string;
  description: string;
  features: string[];
}

const properties: Property[] = [
  {
    id: "the-luminary-penthouse",
    title: "The Luminary Sky Penthouse",
    type: "buy",
    category: "Penthouse",
    locality: "Golf Course Ext. Road",
    city: "Gurugram",
    price: "₹6.85 Cr",
    area: "4,650 sq.ft",
    bedrooms: "4 BHK + Lounge",
    bathrooms: "5 Baths",
    statusBadge: "Showcase Spec",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80",
    description:
      "Double-height glass living volume with panoramic skyline vistas. Features private heated terrace plunge pool, Italian marble flooring, and integrated smart automation.",
    features: ["Private Terrace Pool", "Double-Height 22ft Ceiling", "3 Dedicated Stilt Parkings", "Resident Sky Club Access"],
  },
  {
    id: "elysian-villas",
    title: "Elysian Private Courtyard Villa",
    type: "buy",
    category: "Villa",
    locality: "Whitefield",
    city: "Bengaluru",
    price: "₹8.40 Cr",
    area: "5,800 sq.ft",
    bedrooms: "5 BHK Villa",
    bathrooms: "6 Baths",
    statusBadge: "Ready to Move Concept",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&auto=format&fit=crop&q=80",
    description:
      "Biophilic architectural villa wrapped around an internal water courtyard. Solid teakwood pergolas, bespoke chef&apos;s kitchen island, and subterranean home theatre.",
    features: ["Internal Reflecting Pool", "Private Landscaped Lawn", "Subterranean Lounge & Cinema", "Solar Energy Grid"],
  },
  {
    id: "aurelia-residences",
    title: "Aurelia High-Rise Residence",
    type: "buy",
    category: "Apartment",
    locality: "Worli Sea Face",
    city: "Mumbai",
    price: "₹11.50 Cr",
    area: "3,250 sq.ft",
    bedrooms: "3 BHK + Study",
    bathrooms: "4 Baths",
    statusBadge: "Sea View Concept",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80",
    description:
      "Uninterrupted Arabian Sea panoramic balconies with cross-ventilation architecture. Acoustically isolated acoustic glass, walk-in dry bar, and direct private elevator foyer.",
    features: ["Unobstructed Arabian Sea Balcony", "Direct Elevator Foyer Entry", "Concierge Valet Service", "Olympics-Length Infinity Pool"],
  },
  {
    id: "horizon-executive-suites",
    title: "Horizon Prime Commercial Suite",
    type: "commercial",
    category: "Commercial Suite",
    locality: "Financial District",
    city: "Hyderabad",
    price: "₹3.80 Cr",
    area: "2,800 sq.ft",
    bedrooms: "Executive Floor",
    bathrooms: "Private Restrooms",
    statusBadge: "Grade-A Spec",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80",
    description:
      "Pre-fitted boutique commercial workspace with acoustic conference pods, reception gallery, and private boardrooms overlooking the financial corridor.",
    features: ["High-Speed Fiber Infrastructure", "100% DG Power Redundancy", "LEED Platinum Envelope", "6 Basement Reserved Bays"],
  },
  {
    id: "verdant-residence-lease",
    title: "Verdant Garden High-Rise Flat",
    type: "rent",
    category: "Apartment",
    locality: "Indiranagar",
    city: "Bengaluru",
    price: "₹1.45 Lakh / mo",
    area: "2,400 sq.ft",
    bedrooms: "3 BHK Premium",
    bathrooms: "3 Baths",
    statusBadge: "Available for Lease",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=80",
    description:
      "Fully designer furnished residence surrounded by canopy tree foliage. Custom built-in wardrobes, German kitchen appliances, and quiet residential neighborhood access.",
    features: ["Fully Furnished with Designer Items", "Wrap-Around Verandah", "2 Stilt Parking Slots", "Clubhouse & Gym"],
  },
];

export function RealEstateView() {
  const [activeTypeTab, setActiveTypeTab] = useState<"buy" | "rent" | "commercial">("buy");
  const [selectedLocality, setSelectedLocality] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePropertyModal, setActivePropertyModal] = useState<Property | null>(null);
  const [walkthroughSubmitted, setWalkthroughSubmitted] = useState(false);
  const [walkthroughForm, setWalkthroughForm] = useState({
    name: "",
    phone: "",
    preferredDate: "This Weekend",
    preferredTime: "Morning (11:00 AM)",
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesType = p.type === activeTypeTab;
      const matchesLocality = selectedLocality === "all" || p.city === selectedLocality;
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      return matchesType && matchesLocality && matchesCategory;
    });
  }, [activeTypeTab, selectedLocality, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#C59B27] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#0B132B] text-[#CBD5E1] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span className="font-medium text-white/90 truncate">Portfolio Showcase: Boutique Real Estate</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed &amp; engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#C59B27] hover:text-[#e0b746] font-medium transition-colors ml-3 sm:ml-4 shrink-0 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── ARCHITECTURAL REAL ESTATE NAV ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/work/real-estate" className="group">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-[#0B132B] block leading-none font-serif">
                ARYA<span className="text-[#C59B27]">.</span>PROPERTIES
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#64748B] uppercase block mt-1 truncate">
                Boutique Advisory &amp; Prime Estates
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#475569]">
            <a href="#discover" className="hover:text-[#C59B27] transition-colors">
              Property Search
            </a>
            <a href="#featured" className="hover:text-[#C59B27] transition-colors">
              Prime Inventory
            </a>
            <a href="#localities" className="hover:text-[#C59B27] transition-colors">
              Micro-Markets
            </a>
            <a href="#advisory" className="hover:text-[#C59B27] transition-colors">
              Private Advisory
            </a>
          </nav>

          <a
            href="#advisory"
            className="px-3.5 py-2 sm:px-5 sm:py-2.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            Consult Advisory
          </a>
        </div>
      </header>

      {/* ── 99ACRES-INSPIRED PROPERTY DISCOVERY HERO ── */}
      <section className="relative bg-[#0B132B] text-white pt-8 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&auto=format&fit=crop&q=80"
            alt="Contemporary architectural residential estate"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/95 to-[#0B132B]/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-[#C59B27]/20 border border-[#C59B27]/30 text-[#C59B27] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 font-mono">
              <span>🏛️</span> Prime Indian Residential &amp; Commercial Real Estate
            </div>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.15] sm:leading-[1.1] mb-2.5 sm:mb-4 text-white">
              Discover Distinctive Residences. <br />
              <span className="italic text-[#C59B27]">Curated for Discerning Living.</span>
            </h1>
            <p className="text-xs sm:text-base text-[#94A3B8] leading-relaxed max-w-xl font-normal mb-0">
              Explore bespoke penthouses, private courtyard villas, and prime commercial suites across Gurugram, Mumbai, and Bengaluru through our focused discovery experience.
            </p>
          </div>

          {/* Interactive Property Search Filter Box (99acres UX Principle) */}
          <div id="discover" className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 text-[#0F172A] shadow-2xl border border-[#CBD5E1] max-w-4xl">
            {/* Buy / Rent / Commercial Tabs */}
            <div className="grid grid-cols-3 gap-1.5 sm:flex sm:gap-3 border-b border-[#E2E8F0] pb-3 sm:pb-4 mb-4 sm:mb-6">
              {[
                { id: "buy", label: "Buy Property", shortLabel: "Buy", icon: "🏡" },
                { id: "rent", label: "Luxury Rent", shortLabel: "Rent", icon: "🔑" },
                { id: "commercial", label: "Commercial", shortLabel: "Commercial", icon: "🏢" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTypeTab(tab.id as "buy" | "rent" | "commercial")}
                  className={`px-2 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTypeTab === tab.id
                      ? "bg-[#0B132B] text-white shadow-sm"
                      : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A]"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              ))}
            </div>

            {/* Filter selectors row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1 font-mono">
                  City / Micro-Market
                </label>
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="w-full px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs font-semibold text-[#0F172A] outline-none focus:border-[#C59B27]"
                >
                  <option value="all">All Prime Cities</option>
                  <option value="Gurugram">Gurugram (Golf Course Ext)</option>
                  <option value="Mumbai">Mumbai (Worli Sea Face)</option>
                  <option value="Bengaluru">Bengaluru (Whitefield / Indiranagar)</option>
                  <option value="Hyderabad">Hyderabad (Financial District)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#64748B] mb-1 font-mono">
                  Property Typology
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 sm:py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs font-semibold text-[#0F172A] outline-none focus:border-[#C59B27]"
                >
                  <option value="all">All Typologies</option>
                  <option value="Penthouse">Sky Penthouses</option>
                  <option value="Villa">Courtyard Villas</option>
                  <option value="Apartment">Luxury Apartments</option>
                  <option value="Commercial Suite">Commercial Suites</option>
                </select>
              </div>

              <div className="flex items-end">
                <a
                  href="#featured"
                  className="w-full py-2.5 sm:py-3.5 bg-[#C59B27] hover:bg-[#b0871d] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-1.5"
                >
                  View ({filteredProperties.length}) Properties →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES GRID ── */}
      <section id="featured" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27] font-mono">
                Curated Showcase Inventory
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B132B] tracking-tight mt-1">
                Featured Prime Properties
              </h2>
            </div>
            <div className="text-xs text-[#64748B]">
              Displaying <span className="font-bold text-[#0B132B]">{filteredProperties.length}</span> curated residences
            </div>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-[#CBD5E1]">
              <span className="text-4xl mb-2 block">🏡</span>
              <h3 className="font-bold text-base text-[#0B132B] mb-1">No matching residences found</h3>
              <p className="text-xs text-[#64748B] mb-4">
                No active showcase listings match the selected combination of city and typology.
              </p>
              <button
                onClick={() => {
                  setSelectedLocality("all");
                  setSelectedCategory("all");
                }}
                className="text-xs font-bold text-[#C59B27] hover:underline cursor-pointer"
              >
                Reset filters and show all
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Property Image & Status Badges */}
                    <div className="relative aspect-[16/10] w-full bg-[#E2E8F0] overflow-hidden">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover group-hover:scale-104 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 bg-[#0B132B]/85 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-md">
                        {prop.statusBadge}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/95 text-[#0B132B] font-mono text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                        📍 {prop.locality}, {prop.city}
                      </div>
                    </div>

                    {/* Content & Specs */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C59B27] font-bold">
                          {prop.category}
                        </span>
                        <span className="text-xl font-bold font-mono text-[#0B132B]">
                          {prop.price}
                        </span>
                      </div>

                      <h3 className="text-2xl font-serif font-normal text-[#0B132B] mb-3 leading-tight">
                        {prop.title}
                      </h3>

                      <p className="text-xs text-[#64748B] leading-relaxed mb-6 font-normal">
                        {prop.description}
                      </p>

                      {/* Property Specs Pill Grid */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E2E8F0] mb-6 text-xs text-[#334155] font-semibold text-center font-mono">
                        <div className="bg-[#F8FAFC] py-2 rounded-lg">
                          <span className="block text-[10px] text-[#64748B]">AREA</span>
                          <span>{prop.area}</span>
                        </div>
                        <div className="bg-[#F8FAFC] py-2 rounded-lg">
                          <span className="block text-[10px] text-[#64748B]">LAYOUT</span>
                          <span>{prop.bedrooms}</span>
                        </div>
                        <div className="bg-[#F8FAFC] py-2 rounded-lg">
                          <span className="block text-[10px] text-[#64748B]">BATHS</span>
                          <span>{prop.bathrooms}</span>
                        </div>
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-1.5">
                        {prop.features.slice(0, 3).map((f) => (
                          <div key={f} className="text-xs text-[#475569] flex items-center gap-2">
                            <span className="text-[#C59B27] font-bold">✦</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 mt-auto">
                    <button
                      onClick={() => setActivePropertyModal(prop)}
                      className="w-full sm:w-auto px-4 sm:px-5 py-2.5 border border-[#CBD5E1] hover:border-[#0B132B] text-xs font-bold rounded-xl text-[#0B132B] transition-colors cursor-pointer text-center"
                    >
                      View Specifications
                    </button>
                    <button
                      onClick={() => setActivePropertyModal(prop)}
                      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Book Walkthrough →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PRIVATE ADVISORY & CONSULTATION ── */}
      <section id="advisory" className="py-20 bg-white border-t border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C59B27]">
            Client Representation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B132B] tracking-tight mt-2 mb-4">
            Private Real Estate Advisory
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            Whether seeking an off-market penthouse acquisition or prime commercial floor plate, our advisory team conducts confidential mandate representation.
          </p>

          <div className="bg-[#F8FAFC] p-8 sm:p-12 rounded-3xl border border-[#CBD5E1] shadow-xl text-left">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Advisory inquiry simulated! In live deployment, a property consultant reaches out.");
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Client Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singhania"
                    className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0B132B] outline-none focus:border-[#C59B27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Mobile / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0B132B] outline-none focus:border-[#C59B27]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Target Investment Range
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0B132B] outline-none focus:border-[#C59B27]">
                    <option>₹5 Cr – ₹10 Cr</option>
                    <option>₹10 Cr – ₹20 Cr</option>
                    <option>₹20 Cr+ Bespoke Mandate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Preferred Micro-Market
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-[#CBD5E1] rounded-xl text-xs text-[#0B132B] outline-none focus:border-[#C59B27]">
                    <option>Gurugram (Golf Course Road / Ext)</option>
                    <option>South Mumbai &amp; Worli Sea Face</option>
                    <option>Bengaluru (Whitefield / Indiranagar)</option>
                    <option>Hyderabad (Financial District)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                Schedule Private Consultation (Demo) →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── PROPERTY DETAIL & WALKTHROUGH MODAL ── */}
      {activePropertyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative border border-[#CBD5E1] overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setActivePropertyModal(null);
                setWalkthroughSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 text-sm cursor-pointer z-10"
            >
              ✕
            </button>

            {walkthroughSubmitted ? (
              <div className="p-8 text-center">
                <span className="text-4xl mb-3 block">🗝️</span>
                <h3 className="font-serif text-2xl text-[#0B132B] mb-2">Walkthrough Scheduled (Demo)</h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you! In a live website deployment, the private estate manager coordinates building security clearances and sends your visitor pass.
                </p>
                <button
                  onClick={() => {
                    setActivePropertyModal(null);
                    setWalkthroughSubmitted(false);
                  }}
                  className="px-6 py-3 bg-[#0B132B] text-white text-xs font-bold uppercase tracking-wider rounded-xl"
                >
                  Close Specification Modal
                </button>
              </div>
            ) : (
              <div>
                <div className="relative aspect-[16/9] w-full bg-[#E2E8F0]">
                  <Image
                    src={activePropertyModal.image}
                    alt={activePropertyModal.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C59B27] block mb-1">
                      {activePropertyModal.category} · {activePropertyModal.locality}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif">{activePropertyModal.title}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0]">
                    <div>
                      <span className="text-xs text-[#64748B]">Listing Price</span>
                      <div className="text-2xl font-bold font-mono text-[#0B132B]">
                        {activePropertyModal.price}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#64748B]">Super Built-up Area</span>
                      <div className="text-xs font-bold text-[#0B132B]">
                        {activePropertyModal.area}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-6 font-normal">
                    {activePropertyModal.description}
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setWalkthroughSubmitted(true);
                    }}
                    className="space-y-4 pt-4 border-t border-[#E2E8F0]"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B132B] block">
                      Request Private Walkthrough (Demonstration)
                    </span>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-[#64748B] mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. S. Mehra"
                          value={walkthroughForm.name}
                          onChange={(e) => setWalkthroughForm({ ...walkthroughForm, name: e.target.value })}
                          className="w-full px-3 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0B132B] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-[#64748B] mb-1">Contact Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={walkthroughForm.phone}
                          onChange={(e) => setWalkthroughForm({ ...walkthroughForm, phone: e.target.value })}
                          className="w-full px-3 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-xs text-[#0B132B] outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Confirm Walkthrough Request (Demo) →
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── REAL ESTATE FOOTER ── */}
      <footer className="bg-[#0B132B] text-[#94A3B8] py-14 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="font-serif text-xl font-bold text-white block mb-2">ARYA PROPERTIES</span>
              <p className="leading-relaxed text-[#64748B] max-w-xs">
                Boutique Indian luxury real estate discovery and private advisory showcase concept inspired by 99acres property search UX.
              </p>
            </div>
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-2">Advisory Desks</p>
              <p className="text-[#64748B]">Gurugram · Mumbai · Bengaluru</p>
              <p className="text-[#64748B] mt-1">Showcase Desk: advisory@aryaproperties.demo</p>
            </div>
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#64748B]">
                Fictional real estate showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates property search filters, listing presentation, and private walkthrough lead capture.
              </p>
              <Link href="/#work" className="text-[#C59B27] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B] gap-2">
            <div>© 2026 Arya Properties Showcase. All rights reserved.</div>
            <div>Designed &amp; engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
