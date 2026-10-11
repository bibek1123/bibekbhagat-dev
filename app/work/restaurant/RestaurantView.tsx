"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Dish {
  id: string;
  name: string;
  course: string;
  description: string;
  pairing?: string;
  price: string;
  tag?: string;
}

const tastingMenu: Dish[] = [
  {
    id: "course-1",
    course: "Course I · Amuse",
    name: "Smoked Burrata & Morel Mushroom Kulcha",
    description: "Truffle butter emulsion, wild Himalayan morels, micro fenugreek cress, fermented chilli honey glaze.",
    pairing: "Pommery Brut Royal Champagne NV",
    price: "₹750",
    tag: "Signature",
  },
  {
    id: "course-2",
    course: "Course II · Small Plate",
    name: "Seared Scallop & Tellicherry Pepper Ghee Roast",
    description: "Hand-dived king scallop, Chettinad shallot reduction, crispy curry leaf oil, tempered cauliflower purée.",
    pairing: "Cloudy Bay Sauvignon Blanc, Marlborough",
    price: "₹1,250",
  },
  {
    id: "course-3",
    course: "Course III · Robata Grill",
    name: "Dry-Aged Lamb Chops with Black Garlic Rogan Josh",
    description: "45-day aged lamb rack, Kashmiri walnut chutney, smoked bone marrow reduction, saffron sheermal crisp.",
    pairing: "Antinori Tignanello Super Tuscan, 2019",
    price: "₹1,850",
    tag: "Woodfire Hearth",
  },
  {
    id: "course-4",
    course: "Course IV · Mains",
    name: "Lobster & Mangalorean Gassi Rice Flakes",
    description: "Butter-poached bay lobster, roasted byadgi chilli broth, cold-pressed coconut milk, crisp red rice hopper.",
    pairing: "Domaine Leflaive Puligny-Montrachet, 2020",
    price: "₹2,100",
  },
  {
    id: "course-5",
    course: "Course V · Dessert",
    name: "Old Monk Rum Halwa & Smoked Jaggery Gelato",
    description: "Dark chocolate fondant core, spiced almond crumble, edible gold leaf, infused single-estate dark rum glaze.",
    pairing: "Taylor's 20-Year-Old Tawny Port",
    price: "₹850",
    tag: "Pastry Studio",
  },
];

const menuCategories = [
  { id: "tasting", label: "Chef's Tasting Menu (7 Courses)" },
  { id: "starters", label: "Small Plates & Hearth" },
  { id: "mains", label: "Robata Grills & Curries" },
  { id: "cocktails", label: "Botanical Cocktail Lab" },
];

const aLaCarteDishes: Record<string, Dish[]> = {
  starters: [
    {
      id: "s1",
      course: "Small Plate",
      name: "Truffle & Truffled Edamame Gujiya",
      description: "Crispy pastry envelope, black truffle carpaccio, spiced yogurt mousse, tamarind gel.",
      price: "₹650",
      tag: "Vegetarian",
    },
    {
      id: "s2",
      course: "Small Plate",
      name: "Duck Seekh Kebab with Cherry Chutney",
      description: "Smoked duck breast mince, mace flower, charred shallots, sour cherry reduction.",
      price: "₹950",
    },
    {
      id: "s3",
      course: "Small Plate",
      name: "Charred Avocado & Pomelo Chaat",
      description: "Charcoal-grilled Hass avocado, Kerala pomelo, sev crumble, mint-coriander emulsion.",
      price: "₹590",
      tag: "Vegetarian",
    },
  ],
  mains: [
    {
      id: "m1",
      course: "Robata Main",
      name: "Kashmiri Morel & Saffron Pulao",
      description: "Aged Basmati, slow-braised Himalayan morels, saffron broth, crispy fried shallots, smoked raita.",
      price: "₹1,450",
      tag: "Signature",
    },
    {
      id: "m2",
      course: "Robata Main",
      name: "Kerala Sea Bass in Banana Leaf",
      description: "Line-caught Chilean sea bass, raw mango shallot masala, steamed in banana leaf with appam crisp.",
      price: "₹1,950",
    },
    {
      id: "m3",
      course: "Robata Main",
      name: "Paneer Mille-Feuille Makhani",
      description: "Layers of buffalo milk paneer, sundried tomato fenugreek reduction, smoked butter.",
      price: "₹1,150",
      tag: "Vegetarian",
    },
  ],
  cocktails: [
    {
      id: "c1",
      course: "Signature Cocktail",
      name: "The Ember Smoked Old Fashioned",
      description: "Bourbon infused with toasted betel leaf, smoked applewood, Angostura bitters, jaggery syrup.",
      price: "₹950",
      tag: "Table Smoke Ritual",
    },
    {
      id: "c2",
      course: "Signature Cocktail",
      name: "Deccan Highball with Kokum & Gin",
      description: "Hapusa Himalayan juniper gin, clarified kokum cordial, soda, fresh pink peppercorn rim.",
      price: "₹850",
    },
    {
      id: "c3",
      course: "Signature Cocktail",
      name: "Marigold Spritz (Low-ABV)",
      description: "French vermouth infused with edible marigold petals, dry tonic water, elderflower spray.",
      price: "₹750",
    },
  ],
};

export function RestaurantView() {
  const [activeTab, setActiveTab] = useState<string>("tasting");
  const [reservationModal, setReservationModal] = useState(false);
  const [reservationDone, setReservationDone] = useState(false);
  const [resForm, setResForm] = useState({
    name: "",
    phone: "",
    guests: "2 Guests",
    diningArea: "Main Dining Room",
    timeSlot: "Dinner · 8:00 PM",
    date: "This Friday",
  });

  return (
    <div className="min-h-screen bg-[#0E0C0A] text-[#F3EFEA] font-serif antialiased selection:bg-[#E8A840] selection:text-black">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#070605] text-[#A8A29E] text-xs py-1.5 px-4 font-sans flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Modern Fine Dining Hospitality Web Experience</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed &amp; engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#E8A840] hover:text-[#f3be6a] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── RESTRAINED EDITORIAL NAV (INDIAN ACCENT STYLE) ── */}
      <header className="sticky top-0 z-40 bg-[#0E0C0A]/95 backdrop-blur-md border-b border-white/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/work/restaurant" className="group">
            <span className="text-xl sm:text-2xl font-serif font-normal tracking-[0.2em] text-white block uppercase leading-none">
              THE EMBER ROOM
            </span>
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#E8A840] block mt-1">
              Contemporary Indian Gastronomy Concept
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-[#BFA89B]">
            <a href="#philosophy" className="hover:text-[#E8A840] transition-colors">
              Philosophy
            </a>
            <a href="#menu" className="hover:text-[#E8A840] transition-colors">
              The Menu
            </a>
            <a href="#spaces" className="hover:text-[#E8A840] transition-colors">
              Atmosphere
            </a>
            <a href="#reservations" className="hover:text-[#E8A840] transition-colors">
              Private Dining
            </a>
          </nav>

          <button
            onClick={() => setReservationModal(true)}
            className="px-6 py-2.5 border border-[#E8A840] text-[#E8A840] hover:bg-[#E8A840] hover:text-[#0E0C0A] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer"
          >
            Reserve Table
          </button>
        </div>
      </header>

      {/* ── CINEMATIC FULL-BLEED HERO ── */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-end overflow-hidden border-b border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80"
          alt="Warm candlelit dining room at The Ember Room"
          fill
          priority
          className="object-cover object-center brightness-75 scale-102 transition-transform duration-1000"
          sizes="100vw"
        />

        {/* Ambient Darkened Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A]/90 via-[#0E0C0A]/40 to-transparent hidden lg:block" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] uppercase text-[#E8A840] mb-4">
              <span>✦</span> Live-Fire Gastronomy &amp; Single-Estate Pairings
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#FBF8F3] tracking-tight leading-[1.05] mb-6">
              Indian Culinary Memory, <br />
              <span className="italic text-[#E8A840]">Reimagined over Embers.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#D5CBC3] font-sans font-normal leading-relaxed max-w-xl mb-8">
              An intimate fine dining room celebrating seasonal subcontinent heritage through open-hearth robata grilling, progressive fermentations, and rare biodynamic cellar selections.
            </p>

            <div className="flex flex-wrap items-center gap-4 font-sans">
              <button
                onClick={() => setReservationModal(true)}
                className="px-8 py-3.5 bg-[#E8A840] hover:bg-[#d69630] text-[#0E0C0A] text-xs font-bold uppercase tracking-widest transition-colors shadow-xl cursor-pointer"
              >
                Experience the Tasting Menu
              </button>
              <a
                href="#menu"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-bold uppercase tracking-widest backdrop-blur-xs transition-colors"
              >
                Explore Menus
              </a>
            </div>
          </div>

          {/* Hospitality Specs Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/15 font-sans">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E8A840] font-mono">Format</p>
              <p className="text-sm font-semibold text-white mt-1">7-Course Tasting &amp; À La Carte</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E8A840] font-mono">Kitchen Hearth</p>
              <p className="text-sm font-semibold text-white mt-1">Lychee Wood &amp; Binchotan</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E8A840] font-mono">Wine Program</p>
              <p className="text-sm font-semibold text-white mt-1">Over 240 Biodynamic Labels</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E8A840] font-mono">Seating</p>
              <p className="text-sm font-semibold text-white mt-1">42 Covers · Prior Reservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULINARY PHILOSOPHY (RESTRAINED EDITORIAL) ── */}
      <section id="philosophy" className="py-24 lg:py-32 bg-[#0E0C0A] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8A840] block mb-3">
            Culinary Ethos
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-8">
            &ldquo;We treat ancient culinary heritage not as a museum relic, but as living, evolving fire.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-[#B5A59B] leading-relaxed max-w-2xl mx-auto font-sans font-light">
            Every dish begins with regional Indian provenance — hand-pounded Tellicherry black peppercorns, wild Himalayan morels, and sun-ripened Byadgi chillies. We apply slow binchotan embers and classical reduction techniques to unlock unexpected aromatic complexity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 font-sans text-left">
            <div>
              <span className="font-mono text-xs text-[#E8A840] block mb-2">01 / PROVENANCE</span>
              <h3 className="font-serif text-lg text-white mb-2">Single-Origin Terroir</h3>
              <p className="text-xs text-[#8C7B6E] leading-relaxed">
                Direct partnerships with artisanal spice growers in Idukki, co-operative fisherman in Mangalore, and Himalayan foraged botanicals.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-[#E8A840] block mb-2">02 / THE HEARTH</span>
              <h3 className="font-serif text-lg text-white mb-2">Binchotan Live Fire</h3>
              <p className="text-xs text-[#8C7B6E] leading-relaxed">
                White oak charcoal and aged lychee wood impart subtle smoked sweetness rather than harsh acrid flame.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-[#E8A840] block mb-2">03 / HARMONY</span>
              <h3 className="font-serif text-lg text-white mb-2">Cellar Curations</h3>
              <p className="text-xs text-[#8C7B6E] leading-relaxed">
                Low-intervention orange wines, vintage Champagnes, and botanical zero-proof shrubs tailored to complex spice profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MENU DISCOVERY ── */}
      <section id="menu" className="py-20 lg:py-28 bg-[#14100D] border-b border-white/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E8A840]">
                Curated Offerings
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight mt-1">
                Seasonal Degustation &amp; Robata
              </h2>
            </div>

            {/* Menu Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {menuCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`text-xs uppercase tracking-widest px-4 py-2.5 transition-all cursor-pointer font-medium ${
                    activeTab === c.id
                      ? "bg-[#E8A840] text-[#0E0C0A] font-bold"
                      : "bg-white/5 text-[#A8988B] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Menu Content */}
          {activeTab === "tasting" ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="p-4 bg-white/5 border border-white/10 text-center rounded-xs mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E8A840]">
                  Chef&apos;s Signature Degustation · ₹4,800 per guest
                </span>
                <p className="text-xs text-[#B5A59B] mt-1">
                  Optional Sommelier Reserve Wine Flight available (+₹3,200)
                </p>
              </div>

              {tastingMenu.map((dish) => (
                <div
                  key={dish.id}
                  className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#E8A840]/40 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-4 group"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-[11px] text-[#E8A840] uppercase tracking-wider">
                        {dish.course}
                      </span>
                      {dish.tag && (
                        <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-2xs font-mono">
                          {dish.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl text-white group-hover:text-[#E8A840] transition-colors mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#A8988B] leading-relaxed mb-3">
                      {dish.description}
                    </p>
                    {dish.pairing && (
                      <p className="text-[11px] font-mono text-[#D4B996] flex items-center gap-1.5">
                        <span>🍷 Suggested Wine:</span>
                        <span>{dish.pairing}</span>
                      </p>
                    )}
                  </div>

                  <span className="font-mono text-sm font-bold text-white/80 self-start md:self-center">
                    {dish.price}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(aLaCarteDishes[activeTab] || []).map((dish) => (
                <div
                  key={dish.id}
                  className="p-6 bg-white/[0.02] border border-white/10 hover:border-[#E8A840]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-[#E8A840] uppercase">
                        {dish.course}
                      </span>
                      {dish.tag && (
                        <span className="text-[9px] bg-white/10 text-white px-1.5 py-0.5 rounded-2xs font-mono">
                          {dish.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-white mb-2">{dish.name}</h3>
                    <p className="text-xs text-[#A8988B] leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#8C7B6E]">A La Carte</span>
                    <span className="text-white font-bold">{dish.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ATMOSPHERIC SPACES GALLERY ── */}
      <section id="spaces" className="py-20 lg:py-28 bg-[#0E0C0A] border-b border-white/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E8A840]">
              Spatial Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight mt-1">
              Sanctuaries of Warmth &amp; Stone
            </h2>
            <p className="text-xs sm:text-sm text-[#A8988B] mt-2">
              Raw sandstone, fluted brass partitions, and bespoke walnut furniture create a calm, distraction-free environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "The Hearth Dining Room",
                spec: "Seating for 32 · Central Open Hearth",
                image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=80",
                desc: "Low-lit tables wrapping around the hearth where the evening degustation unfolds with theatrical intimacy.",
              },
              {
                name: "The Sommelier Cellar Room",
                spec: "Private Dining for 10 · Temperature Controlled",
                image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
                desc: "Surrounded by floor-to-ceiling glass wine cabinets, featuring personalized tasting menus with our cellar master.",
              },
              {
                name: "The Botanical Cocktail Lounge",
                spec: "Cocktail Bar · Hand-Carved Granite Counter",
                image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
                desc: "An acoustic lounge dedicated to cold-pressed botanical extractions, aperitifs, and quiet conversation.",
              },
            ].map((space) => (
              <div key={space.name} className="group relative aspect-[3/4] overflow-hidden rounded-xs bg-[#1A1613]">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-[10px] text-[#E8A840] uppercase tracking-wider block mb-1">
                    {space.spec}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-2">{space.name}</h3>
                  <p className="text-xs text-[#A8988B] leading-relaxed">{space.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVATIONS FLOW ── */}
      <section id="reservations" className="py-20 lg:py-28 bg-[#14100D] border-b border-white/10 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E8A840]">
            Table Bookings
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight mt-2 mb-4">
            Secure Your Table
          </h2>
          <p className="text-xs sm:text-sm text-[#A8988B] max-w-lg mx-auto mb-10 leading-relaxed font-normal">
            Due to our 42-seat capacity and multi-course dining rhythm, reservations are released 14 days in advance.
          </p>

          <div className="bg-[#0E0C0A] p-8 sm:p-12 rounded-sm border border-white/15 shadow-2xl text-left">
            {reservationDone ? (
              <div className="py-8 text-center">
                <span className="text-3xl mb-3 block">🕯️</span>
                <h3 className="font-serif text-2xl text-white mb-2">Reservation Request Simulated</h3>
                <p className="text-xs text-[#A8988B] max-w-md mx-auto mb-6">
                  Thank you! In a live restaurant deployment, the concierge team receives party parameters and confirms availability via SMS / email confirmation.
                </p>
                <button
                  onClick={() => setReservationDone(false)}
                  className="text-xs font-mono uppercase text-[#E8A840] hover:underline"
                >
                  Reserve another slot
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReservationDone(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-2">
                      Guest Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={resForm.name}
                      onChange={(e) => setResForm({ ...resForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-xs text-white outline-none focus:border-[#E8A840]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-2">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={resForm.phone}
                      onChange={(e) => setResForm({ ...resForm, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 text-xs text-white outline-none focus:border-[#E8A840]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-2">
                      Party Size
                    </label>
                    <select
                      value={resForm.guests}
                      onChange={(e) => setResForm({ ...resForm, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1C1614] border border-white/15 text-xs text-white outline-none focus:border-[#E8A840]"
                    >
                      <option>2 Guests</option>
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>Private Room (8–10 Guests)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-2">
                      Dining Section
                    </label>
                    <select
                      value={resForm.diningArea}
                      onChange={(e) => setResForm({ ...resForm, diningArea: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1C1614] border border-white/15 text-xs text-white outline-none focus:border-[#E8A840]"
                    >
                      <option>Main Dining Room</option>
                      <option>Chef Hearth Counter</option>
                      <option>Wine Cellar Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8988B] mb-2">
                      Preferred Seating Time
                    </label>
                    <select
                      value={resForm.timeSlot}
                      onChange={(e) => setResForm({ ...resForm, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1C1614] border border-white/15 text-xs text-white outline-none focus:border-[#E8A840]"
                    >
                      <option>Dinner · 7:00 PM</option>
                      <option>Dinner · 8:15 PM</option>
                      <option>Dinner · 9:30 PM</option>
                      <option>Lunch · 1:00 PM (Fri–Sun)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E8A840] hover:bg-[#d69630] text-[#0E0C0A] text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Confirm Table Request (Demo) →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── MODAL RESERVATION FLOW ── */}
      {reservationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs font-sans">
          <div className="bg-[#14100D] w-full max-w-md p-6 sm:p-8 rounded-sm shadow-2xl relative border border-white/20">
            <button
              onClick={() => setReservationModal(false)}
              className="absolute top-4 right-4 text-[#A8988B] hover:text-white p-2 text-sm cursor-pointer"
            >
              ✕
            </button>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8A840]">Dining Room Concierge</span>
            <h3 className="font-serif text-xl text-white mt-1 mb-2">Reserve an Ember Table</h3>
            <p className="text-xs text-[#A8988B] mb-5">
              Demonstration table booking interface.
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
                  alert("Reservation simulated! In production, this notifies the dining room maître d'.");
                  setReservationModal(false);
                }}
                className="w-full py-3.5 bg-[#E8A840] hover:bg-[#d69630] text-[#0E0C0A] text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Confirm Reservation (Demo)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── RESTAURANT FOOTER ── */}
      <footer className="bg-[#070605] text-[#8C7B6E] py-14 border-t border-white/10 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="font-serif text-lg text-white block mb-2">THE EMBER ROOM</span>
              <p className="leading-relaxed text-[#73655A] max-w-xs">
                Contemporary Indian fine dining showcase concept inspired by Indian Accent. Celebrating live-fire robata grilling and progressive subcontinent cuisine.
              </p>
            </div>
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-2">Dining Schedule (Sample)</p>
              <p className="text-[#73655A]">Dinner: Tuesday to Sunday · 7:00 PM – 11:30 PM</p>
              <p className="text-[#73655A]">Lunch: Friday to Sunday · 12:30 PM – 3:30 PM</p>
            </div>
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#73655A]">
                Fictional restaurant showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates food-forward storytelling, atmospheric UX, and reservation conversion.
              </p>
              <Link href="/#work" className="text-[#E8A840] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5C5047] gap-2">
            <div>© 2026 The Ember Room Showcase. All rights reserved.</div>
            <div>Designed &amp; engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
