"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  name: string;
  price: string;
  duration: string;
  description: string;
}

interface MenuCategory {
  id: string;
  category: string;
  subtitle: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "hair",
    category: "Hair Couture",
    subtitle: "Precision Cutting, Bespoke Dimensional Balayage & Botanical Smoothing",
    items: [
      {
        name: "Precision Cut & Signature Runway Blowout",
        price: "₹1,800 onwards",
        duration: "60 mins",
        description: "Bespoke structural hair sculpting harmonized with your bone structure, followed by an ultra-gloss round-brush finish.",
      },
      {
        name: "Dimensional Lived-In Balayage & Gloss",
        price: "₹6,500 onwards",
        duration: "180 mins",
        description: "Hand-painted multi-tonal highlights infused with bond-protective plex, sealed with an acidic high-shine tone glaze.",
      },
      {
        name: "Caviar Keratin Smoothing Treatment",
        price: "₹5,800 onwards",
        duration: "150 mins",
        description: "Formaldehyde-free micro-protein infusion that tames humidity-induced frizz while preserving natural bounce and volume.",
      },
      {
        name: "Japanese Scalp Rejuvenation & Head Spa",
        price: "₹2,400 onwards",
        duration: "60 mins",
        description: "Deep ultrasonic follicular cleanse, stimulating shiatsu micro-massage, and targeted botanical scalp serum infusion.",
      },
      {
        name: "Botanical Bond-Repair Mask & Steam Ritual",
        price: "₹3,200 onwards",
        duration: "45 mins",
        description: "Intense cellular repair for color-treated strands utilizing cold-pressed argan, phytokeratins, and ultrasonic nano-mist.",
      },
    ],
  },
  {
    id: "skin",
    category: "Skin Aesthetics",
    subtitle: "Advanced Dermal Infusions, Lymphatic Drainage & Cryo-Firming",
    items: [
      {
        name: "The Velvet Signature Hydra-Infusion",
        price: "₹4,200 onwards",
        duration: "75 mins",
        description: "7-phase vortex suction, gentle lactic resurfacing, peptide infusion, and soothing chilled cryo-firming globes.",
      },
      {
        name: "24K Gold Illuminating Facial",
        price: "₹5,500 onwards",
        duration: "90 mins",
        description: "Luxury cellular revitalization featuring colloidal gold sheets, hyaluronic serum iontophoresis, and radiant LED therapy.",
      },
      {
        name: "Deep Pore Enzymatic Clarifying Treatment",
        price: "₹2,400 onwards",
        duration: "60 mins",
        description: "Gentle ultrasonic extraction, botanical purifying mask, and high-frequency antibacterial ozone wand pass.",
      },
      {
        name: "Cryo-Oxygen Skin Sculpt & Lift",
        price: "₹4,800 onwards",
        duration: "60 mins",
        description: "Sub-zero pressurized oxygen jet infusing essential vitamins and marine collagen for immediate facial contour definition.",
      },
    ],
  },
  {
    id: "nails",
    category: "Artisanal Nails",
    subtitle: "Dry Russian Cuticle Precision, Sculpted Gel Extensions & Chrome Art",
    items: [
      {
        name: "Luxury Dry Russian Manicure & BIAB Gel",
        price: "₹2,200 onwards",
        duration: "75 mins",
        description: "E-file micro-cuticle precision, strengthening builder-in-a-bottle (BIAB) overlay, and long-wear pigment seal.",
      },
      {
        name: "Sculpted Gel Extensions & Custom Minimalist Art",
        price: "₹3,800 onwards",
        duration: "105 mins",
        description: "Custom hand-sculpted lightweight gel extensions with metallic chrome glaze, French micro-tips, or hand-painted art.",
      },
      {
        name: "Botanical Spa Pedicure with Hot Stone Massage",
        price: "₹2,600 onwards",
        duration: "60 mins",
        description: "Aromatherapy soak, Himalayan salt exfoliation, warm volcanic stone muscle relief, and clean cuticle detailing.",
      },
    ],
  },
  {
    id: "bridal",
    category: "Bridal & Occasion",
    subtitle: "Contemporary Indian Luxury Bridal Hair Architecture & Radiant Makeup",
    items: [
      {
        name: "The Royal Velvet Bridal Experience",
        price: "₹28,000 onwards",
        duration: "240 mins",
        description: "Pre-event skin glow priming, long-wear HD waterproof airbrush base, couture dupatta draping, and customized floral hair architecture.",
      },
      {
        name: "Sangeet / Cocktail Glam & Hair Styling",
        price: "₹12,000 onwards",
        duration: "120 mins",
        description: "Sculpted evening glow, dramatic eye artistry, and red-carpet textured waves designed to withstand dancing and humidity.",
      },
      {
        name: "Pre-Bridal Radiant Glow Package (3 Sessions)",
        price: "₹18,000 onwards",
        duration: "3 visits",
        description: "Curated sequence of chemical peels, hydra-dermabrasion, full-body polishing, and intensive hair glossing prior to wedding week.",
      },
    ],
  },
];

const lookbook = [
  {
    title: "Dimensional Hazelnut Balayage",
    category: "Hair Couture",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=80",
    description: "Seamless root melt fading into warm hazelnut and toasted caramel ribbons.",
  },
  {
    title: "Precision Textured French Bob",
    category: "Hair Couture",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=80",
    description: "Blunt baseline with subtle internal weight removal for effortless movement.",
  },
  {
    title: "Minimalist Glazed Chrome Nails",
    category: "Artisanal Nails",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=80",
    description: "Milky neutral base buffed with pearlescent oyster chrome powder.",
  },
  {
    title: "Private Styling Salon Sanctuary",
    category: "Studio Experience",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
    description: "Individual styling suites designed for privacy, personal consultation, and calm.",
  },
];

export function BeautySalonView() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [bookingModal, setBookingModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Dimensional Lived-In Balayage & Gloss",
    day: "Saturday",
    time: "2:00 PM",
  });

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-[#F5F2EB] font-sans antialiased selection:bg-[#C8A97A] selection:text-[#0D0B0A]">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#050404] text-[#D8CFB4] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Luxury Salon & Beauty Studio Website Design</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed & engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#C8A97A] hover:text-[#e4c492] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── LOCATION & RESERVATION BANNER ── */}
      <div className="bg-[#1A1412] text-[#C8A97A] text-xs font-semibold py-2 px-4 text-center border-b border-[#2D2420]">
        <span>✦ Showcase Studio Concept · Hair Couture &amp; Skin Aesthetics · Gurugram</span>
      </div>

      {/* ── HIGH-FASHION EDITORIAL HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#0D0B0A]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/work/beauty-salon" className="group">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-white block leading-none">
                VELVET ROOM
              </span>
              <span className="text-[9px] font-mono tracking-[0.35em] text-[#C8A97A] uppercase block mt-1">
                Showcase Studio · Gurugram
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#B5A599]">
            <a href="#lookbook" className="hover:text-[#C8A97A] transition-colors">
              Lookbook
            </a>
            <a href="#menu" className="hover:text-[#C8A97A] transition-colors">
              Service Menu
            </a>
            <a href="#standard" className="hover:text-[#C8A97A] transition-colors">
              The Standard
            </a>
            <a href="#studio" className="hover:text-[#C8A97A] transition-colors">
              The Studio
            </a>
          </nav>

          <button
            onClick={() => setBookingModal(true)}
            className="px-6 py-2.5 bg-[#C8A97A] hover:bg-[#b89562] text-[#0D0B0A] text-xs font-black uppercase tracking-widest rounded-sm transition-all shadow-md cursor-pointer"
          >
            Reserve Slot
          </button>
        </div>
      </header>

      {/* ── DRAMATIC HIGH-FASHION HERO ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden border-b border-white/10">
        {/* Full-bleed salon photography */}
        <Image
          src="/work/images/beauty-salon-hero.jpg"
          alt="Velvet Room Studio Gurugram Arched Mirrors"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B0A]/90 via-[#0D0B0A]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-[#C8A97A] mb-4">
              <span>✦</span> Hair Couture & Skin Aesthetics
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.05] mb-6">
              Couture Hair. <br />
              <span className="italic text-[#C8A97A]">Illuminated Skin.</span> <br />
              Uncompromising Artistry.
            </h1>

            <p className="text-sm sm:text-base text-[#D4C8B8] leading-relaxed max-w-xl mb-8">
              An intimate salon and aesthetic lounge concept. Where master colorists and aesthetic specialists tailor every cut, dimensional balayage, and dermal infusion to your individuality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setBookingModal(true)}
                className="px-8 py-3.5 bg-[#C8A97A] hover:bg-[#b89562] text-[#0D0B0A] text-xs font-black uppercase tracking-widest transition-colors shadow-lg cursor-pointer"
              >
                Reserve Your Appointment →
              </button>
              <a
                href="#menu"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-widest transition-colors backdrop-blur-sm"
              >
                Explore Service Menu
              </a>
            </div>
          </div>

          {/* Editorial Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/15 text-xs">
            <div>
              <p className="text-[#C8A97A] font-mono uppercase tracking-widest text-[11px]">Location</p>
              <p className="text-white font-medium mt-1">Showcase Concept · Gurugram</p>
            </div>
            <div>
              <p className="text-[#C8A97A] font-mono uppercase tracking-widest text-[11px]">Atmosphere</p>
              <p className="text-white font-medium mt-1">Private Styling Suites</p>
            </div>
            <div>
              <p className="text-[#C8A97A] font-mono uppercase tracking-widest text-[11px]">Color Systems</p>
              <p className="text-white font-medium mt-1">Ammonia-Free & Vegan</p>
            </div>
            <div>
              <p className="text-[#C8A97A] font-mono uppercase tracking-widest text-[11px]">Access</p>
              <p className="text-white font-medium mt-1">By Prior Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL LOOKBOOK GALLERY ── */}
      <section id="lookbook" className="py-20 lg:py-28 bg-[#14100E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A97A] mb-1">Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
                Editorial Lookbook
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A8988B] max-w-md">
              A glimpse into signature transformations envisioned for the studio lookbook — calibrated for high shine, natural movement, and low maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lookbook.map((item) => (
              <div key={item.title} className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#0D0B0A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#C8A97A] uppercase">{item.category}</span>
                  <h3 className="font-serif text-base text-white mt-1 mb-1">{item.title}</h3>
                  <p className="text-xs text-[#A8988B] line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE SERVICE MENU (TABBED EXPERIENCE) ── */}
      <section id="menu" className="py-20 lg:py-28 bg-[#0D0B0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A97A] mb-1">Menu & Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight">
                Signature Treatment Menu
              </h2>
            </div>

            {/* Category Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {menuCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c)}
                  className={`text-xs uppercase tracking-widest px-4 py-2 transition-all cursor-pointer font-bold ${
                    activeCategory.id === c.id
                      ? "bg-[#C8A97A] text-[#0D0B0A]"
                      : "bg-white/5 text-[#A8988B] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {c.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Description Header */}
          <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C8A97A]">{activeCategory.category}</span>
            <p className="text-xs text-[#C5B7AA] mt-1">{activeCategory.subtitle}</p>
          </div>

          {/* Service Items List */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
              >
                <div className="max-w-xl">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-lg text-white group-hover:text-[#C8A97A] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[#8C7B6E]">({item.duration})</span>
                  </div>
                  <p className="text-xs text-[#9E8E81] mt-1 leading-relaxed">{item.description}</p>
                </div>

                <div className="flex items-center gap-6 justify-between md:justify-end">
                  <span className="font-mono text-sm font-bold text-[#C8A97A]">{item.price}</span>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, service: item.name });
                      setBookingModal(true);
                    }}
                    className="px-4 py-2 border border-[#C8A97A]/40 hover:border-[#C8A97A] hover:bg-[#C8A97A] hover:text-[#0D0B0A] text-[#C8A97A] text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE VELVET STUDIO STANDARD ── */}
      <section id="standard" className="py-20 lg:py-28 bg-[#14100E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A97A]">Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight mt-1">
              The Studio Standard
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] mt-2 leading-relaxed">
              We operate deliberately by appointment. No crowded waiting lounges, no hurried styling, and no compromises on product purity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Bespoke 15-Min Dialogue",
                desc: "Every appointment begins with an in-depth texture, lifestyle, and facial harmony consultation before a single drop of color or scissor stroke.",
              },
              {
                num: "02",
                title: "Ammonia-Free Botanical Color",
                desc: "We exclusively formulate with micro-pigmented, vegan color systems that nourish the internal cortex while imparting high-luster reflection.",
              },
              {
                num: "03",
                title: "Private Styling Suites",
                desc: "Dedicated personal stations with acoustic separation and personalized lighting for unhurried comfort and complete discretion.",
              },
              {
                num: "04",
                title: "Prescribed Home Rituals",
                desc: "Your specialist formulates a targeted at-home maintenance prescription to extend the longevity and vitality of your salon investment.",
              },
            ].map((std) => (
              <div key={std.num} className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl font-bold text-[#C8A97A]">{std.num}</span>
                  <h3 className="font-serif text-lg text-white mt-2 mb-2">{std.title}</h3>
                  <p className="text-xs text-[#9E8E81] leading-relaxed">{std.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 text-[11px] font-mono text-[#C8A97A]">
                  ✦ Studio Protocol
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT RESERVATIONS ── */}
      <section id="studio" className="py-20 lg:py-28 bg-[#0D0B0A] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#14100E] p-8 sm:p-12 rounded-sm border border-white/15 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C8A97A]">Reservations</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight mt-1">
                Reserve Your Studio Appointment
              </h2>
              <p className="text-xs text-[#A8988B] mt-2">
                Sample salon reservation interface. Select your preferred day and treatment to preview the flow.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center bg-white/5 rounded-sm border border-[#C8A97A]/40">
                <span className="text-3xl mb-2 block">✨</span>
                <h3 className="font-serif text-xl text-white mb-1">Reservation Request Simulated</h3>
                <p className="text-xs text-[#A8988B] max-w-md mx-auto">
                  Thank you! In a live website deployment, the studio concierge reviews pod availability and confirms your booking via SMS / WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase text-[#C8A97A] hover:underline cursor-pointer"
                >
                  Book another reservation
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Khanna"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-xs text-white outline-none focus:border-[#C8A97A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-1.5">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-xs text-white outline-none focus:border-[#C8A97A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-1.5">
                      Primary Treatment
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1C1614] border border-white/15 text-xs text-white outline-none focus:border-[#C8A97A]"
                    >
                      <option>Dimensional Lived-In Balayage & Gloss</option>
                      <option>Precision Cut & Signature Runway Blowout</option>
                      <option>Caviar Keratin Smoothing Treatment</option>
                      <option>The Velvet Signature Hydra-Infusion</option>
                      <option>Luxury Dry Russian Manicure & BIAB Gel</option>
                      <option>The Royal Velvet Bridal Experience</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-1.5">
                      Preferred Day
                    </label>
                    <select
                      value={formData.day}
                      onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1C1614] border border-white/15 text-xs text-white outline-none focus:border-[#C8A97A]"
                    >
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C8A97A] hover:bg-[#b89562] text-[#0D0B0A] text-xs font-black uppercase tracking-widest transition-colors cursor-pointer shadow-lg"
                >
                  Confirm Studio Reservation (Demo) →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#050404] text-[#8C7E73] py-14 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="font-serif text-lg text-white block mb-2">VELVET ROOM STUDIO</span>
              <p className="leading-relaxed text-[#73665C] max-w-xs">
                Luxury hair couture, advanced dermal skin aesthetics, and artisanal Russian manicures at Horizon Plaza, Gurugram.
              </p>
            </div>
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-2">Studio Schedule (Sample)</p>
              <p className="text-[#73665C]">Tuesday to Sunday: 10:00 AM – 8:00 PM</p>
              <p className="text-[#73665C]">Showcase Concept · Gurugram</p>
            </div>
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#73665C]">
                Showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates high-fashion salon UX and service booking.
              </p>
              <Link href="/#work" className="text-[#C8A97A] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#61554C] gap-2">
            <div>© 2026 Velvet Room Studio Showcase. All rights reserved.</div>
            <div>Designed & engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>

      {/* ── BOOKING MODAL ── */}
      {bookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#14100E] w-full max-w-md p-6 sm:p-8 rounded-sm shadow-2xl relative border border-white/20">
            <button
              onClick={() => setBookingModal(false)}
              className="absolute top-4 right-4 text-[#8C7E73] hover:text-white p-2 text-sm cursor-pointer"
            >
              ✕
            </button>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C8A97A]">Showcase Reservation Flow</span>
            <h3 className="font-serif text-xl text-white mt-1 mb-2">Reserve a Salon Experience</h3>
            <p className="text-xs text-[#8C7E73] mb-5">
              Sample appointment booking interface for boutique luxury salons.
            </p>
            <div className="space-y-3.5">
              <input
                type="text"
                placeholder="Guest Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-xs text-white outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number / WhatsApp"
                className="w-full px-4 py-3 bg-white/5 border border-white/15 text-xs text-white outline-none"
              />
              <button
                onClick={() => {
                  alert("Reservation simulated! In live deployment, concierge contacts guest.");
                  setBookingModal(false);
                }}
                className="w-full py-3.5 bg-[#C8A97A] hover:bg-[#b89562] text-[#0D0B0A] text-xs font-black uppercase tracking-widest transition-colors cursor-pointer"
              >
                Confirm Slot (Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
