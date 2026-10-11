"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  rating: string;
  reviewsCount: string;
  size: string;
  badge?: string;
  badgeBg?: string;
  image: string;
  keyActives: string[];
  concern: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: "vit-c-serum",
    name: "Radiance Dew 10% Vitamin C Serum",
    tagline: "Brightens dark spots & defends against pollution without irritation.",
    price: 695,
    originalPrice: 849,
    rating: "4.9",
    reviewsCount: "1.2k",
    size: "30 ml",
    badge: "BESTSELLER",
    badgeBg: "#D97706",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
    keyActives: ["10% Ethyl Ascorbic Acid", "1% Ferulic Acid", "Kakadu Plum"],
    concern: "brightening",
    inStock: true,
  },
  {
    id: "ceramide-cream",
    name: "BarrierLock Ceramide Deep Moisturizer",
    tagline: "Rebuilds compromised skin barriers for 72-hour sustained hydration.",
    price: 545,
    originalPrice: 650,
    rating: "4.8",
    reviewsCount: "940",
    size: "50 g",
    badge: "STAFF PICK",
    badgeBg: "#059669",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",
    keyActives: ["Ceramides NP, AP, EOP", "2% Oat Beta Glucan", "Centella"],
    concern: "barrier",
    inStock: true,
  },
  {
    id: "hybrid-sunscreen",
    name: "Matte-Shield Ultralight Sunscreen SPF 50",
    tagline: "Invisible sweat-proof protection with PA++++ and zero white cast.",
    price: 495,
    originalPrice: 599,
    rating: "5.0",
    reviewsCount: "2.1k",
    size: "50 ml",
    badge: "MOST LOVED",
    badgeBg: "#E11D48",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    keyActives: ["Hybrid UV Filters", "1% Niacinamide", "Cica Extract"],
    concern: "sun",
    inStock: true,
  },
  {
    id: "salicylic-cleanser",
    name: "Clarifying Gentle 1.5% BHA Gel Cleanser",
    tagline: "Clears deep sebum and unclogs pores without post-wash tightness.",
    price: 425,
    originalPrice: 499,
    rating: "4.7",
    reviewsCount: "810",
    size: "120 ml",
    badge: "NEW",
    badgeBg: "#7C3AED",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=80",
    keyActives: ["1.5% Encapsulated Salicylic", "Green Tea", "Panthenol"],
    concern: "acne",
    inStock: true,
  },
  {
    id: "night-restoration-oil",
    name: "Midnight Botanical Elixir Oil",
    tagline: "Replenishes lipid matrix overnight for plumper morning radiance.",
    price: 795,
    originalPrice: 950,
    rating: "4.9",
    reviewsCount: "620",
    size: "30 ml",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
    keyActives: ["Olive Squalane", "Cold-Pressed Rosehip", "CoQ10"],
    concern: "barrier",
    inStock: true,
  },
  {
    id: "hyaluronic-essence",
    name: "HydroPlump Multi-Molecular Essence",
    tagline: "Multi-depth hydration booster that quenches dehydrated pores.",
    price: 585,
    originalPrice: 699,
    rating: "4.8",
    reviewsCount: "740",
    size: "100 ml",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=80",
    keyActives: ["4D Hyaluronic Acid", "Ectoin", "Birch Sap Juice"],
    concern: "hydration",
    inStock: true,
  },
];

const categories = [
  { name: "Sun Protection", label: "SPF 50 PA++++", count: "3 Products", id: "sun", icon: "☀️" },
  { name: "Barrier Repair", label: "Ceramide Care", count: "4 Products", id: "barrier", icon: "🛡️" },
  { name: "Active Serums", label: "Targeted Glow", count: "6 Products", id: "brightening", icon: "✨" },
  { name: "Daily Cleansers", label: "Non-Stripping", count: "3 Products", id: "acne", icon: "💧" },
  { name: "Deep Hydration", label: "Multi-Molecule", count: "4 Products", id: "hydration", icon: "🌊" },
];

const concerns = [
  { id: "all", label: "All Formulations" },
  { id: "brightening", label: "Dark Spots & Dullness" },
  { id: "barrier", label: "Damaged Barrier & Dryness" },
  { id: "sun", label: "Sun Damage & Tan" },
  { id: "acne", label: "Clogged Pores & Blemishes" },
];

export function EcommerceView() {
  const [selectedConcern, setSelectedConcern] = useState("all");
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([
    { product: products[0], quantity: 1 },
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"step1" | "step2" | "step3">("step1");
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const filteredProducts = selectedConcern === "all"
    ? products
    : products.filter((p) => p.concern === selectedConcern);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setAddedNotice(product.name);
    setTimeout(() => setAddedNotice(null), 3000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#201815] font-sans antialiased selection:bg-[#E07A5F] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#1C1412] text-[#E8DCCF] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: D2C E-commerce Website Design</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed & engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#E07A5F] hover:text-[#f29479] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── COMMERCE ANNOUNCEMENT BAR ── */}
      <div className="bg-[#E07A5F] text-white text-xs font-semibold py-2 px-4 text-center tracking-wide uppercase flex items-center justify-center gap-3">
        <span>✨ Monsoon Glow Offer: Flat ₹200 OFF on orders above ₹999</span>
        <span className="opacity-40">|</span>
        <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] tracking-widest font-mono">CODE: GLOW200</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <span className="hidden sm:inline">Free Shipping Pan-India</span>
      </div>

      {/* ── STICKY COMMERCE HEADER ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D9] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-8">
            <Link href="/work/ecommerce" className="group flex flex-col">
              <span className="text-2xl font-black tracking-tight text-[#1F1614] group-hover:text-[#E07A5F] transition-colors">
                KAASNI<span className="text-[#E07A5F]">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-[#8C7A74] uppercase -mt-1">
                Skin Science · India
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-[#54433E]">
              <a href="#bestsellers" className="hover:text-[#E07A5F] transition-colors">
                Bestsellers
              </a>
              <a href="#categories" className="hover:text-[#E07A5F] transition-colors">
                Shop By Category
              </a>
              <a href="#concerns" className="hover:text-[#E07A5F] transition-colors">
                Skin Concerns
              </a>
              <a href="#routine" className="hover:text-[#E07A5F] transition-colors">
                The Routine
              </a>
              <a href="#ingredients" className="hover:text-[#E07A5F] transition-colors">
                Active Science
              </a>
            </nav>
          </div>

          {/* Commerce Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center bg-[#F3EFE9] rounded-full px-3.5 py-1.5 border border-[#E4DDD3]">
              <svg className="w-3.5 h-3.5 text-[#8C7A74] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search actives, SPF, serums..."
                className="bg-transparent text-xs text-[#201815] placeholder-[#8C7A74] outline-none w-36 lg:w-48"
                readOnly
              />
            </div>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-[#201815] hover:text-[#E07A5F] transition-colors flex items-center gap-2 cursor-pointer"
              aria-label={`Open shopping cart with ${totalItems} items`}
            >
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-[#E07A5F] text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold tracking-wider">BAG</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── ADDED TO BAG TOAST NOTIFICATION ── */}
      {addedNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F1614] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/10 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          <div className="text-xs">
            <span className="font-semibold text-white">Added to Bag:</span> {addedNotice}
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="ml-2 bg-[#E07A5F] hover:bg-[#d66f54] text-white text-[11px] font-bold px-3 py-1 rounded-md transition-colors"
          >
            View Bag
          </button>
        </div>
      )}

      {/* ── HERO: PRODUCT-FIRST D2C EDITORIAL ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF5EE] via-[#F3EBE1] to-[#EBE0D2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E3DBD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 bg-[#E07A5F]/10 border border-[#E07A5F]/30 rounded-full px-3.5 py-1 text-[#E07A5F] text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]" />
                Next-Gen Indian Skin Science
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1F1614] tracking-tight leading-[1.08] mb-6">
                Active Formulas. <br />
                <span className="text-[#E07A5F]">Zero Greasiness.</span> <br />
                Engineered for Indian Skin.
              </h1>

              <p className="text-[#64534E] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Clinically calibrated molecular actives formulated specifically for humid summers, dry winters, and high UV indices. Instant absorption, deep cellular hydration, and zero pore congestion.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#bestsellers"
                  className="w-full sm:w-auto px-8 py-4 bg-[#1F1614] hover:bg-[#E07A5F] text-white text-sm font-bold tracking-wide uppercase rounded-xl transition-all duration-200 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                >
                  Shop Best Sellers →
                </a>
                <a
                  href="#routine"
                  className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-white text-[#1F1614] border border-[#D5C9BD] text-sm font-bold tracking-wide uppercase rounded-xl transition-all duration-200 text-center"
                >
                  Explore 3-Step Routine
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#DCD3C7] w-full">
                {[
                  { title: "Non-Comedogenic", desc: "No pore-clogging waxes" },
                  { title: "No Harsh Sulfates", desc: "Gentle on natural lipids" },
                  { title: "Cruelty-Free", desc: "100% Vegan & Safe" },
                  { title: "Climate Adaptive", desc: "Sweat & humidity proof" },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-xs font-bold text-[#1F1614] flex items-center gap-1.5">
                      <span className="text-[#E07A5F]">✓</span> {item.title}
                    </p>
                    <p className="text-[11px] text-[#786660] mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Product Showcase Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative soft blur */}
                <div className="absolute inset-0 bg-[#E07A5F]/15 rounded-3xl filter blur-2xl transform scale-95" />

                {/* Hero Card Container */}
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5DFD5]">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5EFEB] mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000&auto=format&fit=crop&q=80"
                      alt="Kaasni 10% Vitamin C Radiance Dew Serum"
                      fill
                      priority
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    <div className="absolute top-4 left-4 bg-[#E07A5F] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      FEATURED HERO FORMULA
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-amber-500 text-xs">★★★★★</span>
                        <span className="text-[11px] font-semibold text-[#786660]">4.9 (1.2k+ Reviews)</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1F1614]">Radiance Dew 10% Vitamin C</h3>
                      <p className="text-xs text-[#6E5D57] mt-0.5">30ml · Ethyl Ascorbic Acid + Ferulic</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-[#1F1614]">₹695</div>
                      <div className="text-xs text-[#9E8E88] line-through">₹849</div>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(products[0])}
                    className="mt-6 w-full py-3.5 bg-[#E07A5F] hover:bg-[#d66f54] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Quick Add to Bag · ₹695
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY DISCOVERY ── */}
      <section id="categories" className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#EBE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#E07A5F] uppercase mb-1">Curation</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1F1614] tracking-tight">
                Explore by Skincare Category
              </h2>
            </div>
            <p className="text-xs text-[#786660] mt-2 sm:mt-0 max-w-xs">
              Every formula is purposefully crafted to solve specific environmental and physiological skin triggers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setSelectedConcern(cat.id === "sun" ? "sun" : cat.id === "barrier" ? "barrier" : "all");
                  const el = document.getElementById("bestsellers");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group bg-white p-5 rounded-2xl border border-[#E7DFD4] hover:border-[#E07A5F] hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#1F1614] group-hover:text-[#E07A5F] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#7A6963] mt-0.5">{cat.label}</p>
                  <p className="text-[10px] font-semibold text-[#A89892] mt-2 uppercase tracking-wider">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESTSELLERS MERCHANDISING GRID ── */}
      <section id="bestsellers" className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-[#E07A5F] uppercase mb-2">
                <span>✦</span> Formulated For Real Results
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1F1614] tracking-tight">
                Bestselling Formulations
              </h2>
            </div>

            {/* Concern Filter Tabs */}
            <div id="concerns" className="flex flex-wrap items-center gap-2">
              {concerns.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcern(c.id)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    selectedConcern === c.id
                      ? "bg-[#1F1614] text-white shadow-sm"
                      : "bg-[#F3EFE9] text-[#695852] hover:bg-[#EAE4DB]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-[#FAF7F2] rounded-2xl p-5 border border-[#E9E2D8] hover:border-[#D5C7B8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image Frame */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {p.badge && (
                        <span
                          style={{ backgroundColor: p.badgeBg || "#E07A5F" }}
                          className="text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md shadow-sm"
                        >
                          {p.badge}
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-sm text-[#1F1614] text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {p.size}
                      </span>
                    </div>

                    {/* Discount Pill */}
                    <div className="absolute bottom-3 right-3 bg-[#1F1614] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 text-xs text-[#8C7A74] mb-1.5">
                    <span className="text-amber-500 font-bold">★ {p.rating}</span>
                    <span>({p.reviewsCount} reviews)</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-black text-base text-[#1F1614] leading-snug group-hover:text-[#E07A5F] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#6E5D57] mt-1.5 line-clamp-2 leading-relaxed">
                    {p.tagline}
                  </p>

                  {/* Actives Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.keyActives.map((act) => (
                      <span
                        key={act}
                        className="text-[10px] font-medium bg-white border border-[#E5DED4] text-[#5C4B45] px-2 py-0.5 rounded"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Add to Bag CTA */}
                <div className="mt-5 pt-4 border-t border-[#E8E0D5] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-base font-black text-[#1F1614]">₹{p.price}</div>
                    <div className="text-xs text-[#9C8C85] line-through">₹{p.originalPrice}</div>
                  </div>
                  <button
                    onClick={() => addToCart(p)}
                    className="flex-1 py-2.5 px-4 bg-[#1F1614] hover:bg-[#E07A5F] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>+ Add to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE 3-STEP CLIMATE-ADAPTIVE ROUTINE ── */}
      <section id="routine" className="py-16 sm:py-24 bg-[#FAF5EE] border-b border-[#E8E1D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.25em] text-[#E07A5F] uppercase">
              Simplified Daily Regimen
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1F1614] tracking-tight mt-2">
              The 3-Step Indian Climate Routine
            </h2>
            <p className="text-sm text-[#6C5B55] mt-3">
              You don&apos;t need 10 complicated steps. Three biocompatible layers formulated to withstand heat, sweat, and environmental stressors.
            </p>

            {/* Interactive Step Switcher */}
            <div className="inline-flex p-1 bg-white rounded-xl border border-[#E3DBD0] mt-6">
              {[
                { id: "step1", label: "01. Cleanse" },
                { id: "step2", label: "02. Treat & Restore" },
                { id: "step3", label: "03. Shield & Protect" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id as "step1" | "step2" | "step3")}
                  className={`text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    activeTab === s.id ? "bg-[#E07A5F] text-white shadow-sm" : "text-[#6C5B55] hover:text-[#1F1614]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Presentation */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7DFD4] shadow-lg max-w-4xl mx-auto">
            {activeTab === "step1" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF5EE]">
                  <Image
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=80"
                    alt="Step 1 Cleanse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#E07A5F] tracking-widest uppercase">Phase 01 · Morning & Evening</span>
                  <h3 className="text-2xl font-black text-[#1F1614] mt-1 mb-3">Cleanse Without Stripping Lipids</h3>
                  <p className="text-sm text-[#6C5B55] leading-relaxed mb-4">
                    Most Indian face washes use harsh sulfated surfactants that strip natural moisture, triggering compensatory oil production. Our BHA-infused gel balances pH at 5.5 while clearing urban particulate matter.
                  </p>
                  <ul className="text-xs text-[#52423D] space-y-2 mb-6">
                    <li className="flex items-center gap-2">✓ Melts sebum without tightness or burning</li>
                    <li className="flex items-center gap-2">✓ Calms visible post-sun redness with green tea</li>
                    <li className="flex items-center gap-2">✓ Zero synthetic dyes or heavy fragrances</li>
                  </ul>
                  <button
                    onClick={() => addToCart(products[3])}
                    className="px-6 py-3 bg-[#1F1614] hover:bg-[#E07A5F] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                  >
                    Add Step 1 to Bag · ₹425
                  </button>
                </div>
              </div>
            )}

            {activeTab === "step2" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF5EE]">
                  <Image
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
                    alt="Step 2 Treat & Restore"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#E07A5F] tracking-widest uppercase">Phase 02 · Treatment Layer</span>
                  <h3 className="text-2xl font-black text-[#1F1614] mt-1 mb-3">Targeted Cellular Radiance</h3>
                  <p className="text-sm text-[#6C5B55] leading-relaxed mb-4">
                    Deliver stable, non-oxidizing 10% Ethyl Ascorbic Acid directly into the dermal layer to fade hyperpigmentation, fade acne scars, and stimulate collagen synthesis.
                  </p>
                  <ul className="text-xs text-[#52423D] space-y-2 mb-6">
                    <li className="flex items-center gap-2">✓ High-stability formula that won&apos;t turn brown</li>
                    <li className="flex items-center gap-2">✓ Absorbs in 15 seconds with no sticky residue</li>
                    <li className="flex items-center gap-2">✓ Ferulic acid stabilizes antioxidant potency</li>
                  </ul>
                  <button
                    onClick={() => addToCart(products[0])}
                    className="px-6 py-3 bg-[#1F1614] hover:bg-[#E07A5F] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                  >
                    Add Step 2 to Bag · ₹695
                  </button>
                </div>
              </div>
            )}

            {activeTab === "step3" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF5EE]">
                  <Image
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80"
                    alt="Step 3 Shield & Protect"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#E07A5F] tracking-widest uppercase">Phase 03 · Final Defense</span>
                  <h3 className="text-2xl font-black text-[#1F1614] mt-1 mb-3">Broad-Spectrum Matte Shield</h3>
                  <p className="text-sm text-[#6C5B55] leading-relaxed mb-4">
                    High-protection broad spectrum SPF 50 PA++++ formulated to feel like a whisper on Indian skin tones. Tested to leave zero ghost-like white cast and zero greasy shine under makeup.
                  </p>
                  <ul className="text-xs text-[#52423D] space-y-2 mb-6">
                    <li className="flex items-center gap-2">✓ Certified PA++++ against deep UVA photo-aging</li>
                    <li className="flex items-center gap-2">✓ Sweat-resistant through tropical humidity</li>
                    <li className="flex items-center gap-2">✓ Enriched with cica to prevent sun-induced heat flush</li>
                  </ul>
                  <button
                    onClick={() => addToCart(products[2])}
                    className="px-6 py-3 bg-[#1F1614] hover:bg-[#E07A5F] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
                  >
                    Add Step 3 to Bag · ₹495
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── ACTIVE INGREDIENT TRANSPARENCY ── */}
      <section id="ingredients" className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#E07A5F] uppercase">Biocompatible Science</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1F1614] tracking-tight mt-1">
              What Goes In. Why It Works.
            </h2>
            <p className="text-sm text-[#6E5E58] mt-2">
              Every percentage is disclosed. We combine bio-fermented botanical soothing agents with high-performance laboratory actives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                active: "Ethyl Ascorbic Acid (10%)",
                purpose: "Targeted Melanocyte Regulation",
                desc: "An ultra-stable etherified derivative that converts directly to L-Ascorbic Acid inside the skin without oxidizing in the bottle.",
                origin: "Biotechnology Ferment",
              },
              {
                active: "Ceramide Complex (NP, AP, EOP)",
                purpose: "Stratum Corneum Lipid Cement",
                desc: "Identical to human intercellular lipids to replenish structural lipids lost to aggressive weather and hard water.",
                origin: "Plant-Derived Phytosphingosines",
              },
              {
                active: "Centella Asiatica (Cica)",
                purpose: "Anti-Inflammatory Barrier Rescue",
                desc: "Rich in madecassoside to rapidly soothe irritation, sunburns, and flare-ups caused by pollution and humidity.",
                origin: "Botanical Extract · Western Ghats",
              },
              {
                active: "Multi-Weight Hyaluronic (4D)",
                purpose: "Multi-Depth Hydration Reservoir",
                desc: "Four distinct molecular weights that hold up to 1,000x their weight in water across both epidermal and deep dermal planes.",
                origin: "Bio-Fermented Yeast",
              },
            ].map((ing) => (
              <div key={ing.active} className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EAE3D9] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#E07A5F] uppercase">{ing.origin}</span>
                  <h3 className="font-bold text-base text-[#1F1614] mt-2 mb-1">{ing.active}</h3>
                  <p className="text-xs font-semibold text-[#8C7B75] mb-3">{ing.purpose}</p>
                  <p className="text-xs text-[#63534D] leading-relaxed">{ing.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E1D6] flex items-center justify-between text-[11px] font-medium text-[#8C7B75]">
                  <span>Transparency: 100%</span>
                  <span className="text-[#10B981]">✓ Verified Safe</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-COMMERCE FOOTER ── */}
      <footer className="bg-[#1C1412] text-[#D8CDC1] pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <span className="text-2xl font-black text-white tracking-tight">
                KAASNI<span className="text-[#E07A5F]">.</span>
              </span>
              <p className="text-xs text-[#B5A599] mt-3 max-w-sm leading-relaxed">
                High-performance skincare co-formulated for Indian climate conditions. Honest percentages, zero fragrance hype, genuine skin transformation.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs font-semibold text-white/80">Accepted Payments:</span>
                <span className="bg-white/10 text-white text-[10px] font-mono px-2 py-0.5 rounded">UPI</span>
                <span className="bg-white/10 text-white text-[10px] font-mono px-2 py-0.5 rounded">RuPay</span>
                <span className="bg-white/10 text-white text-[10px] font-mono px-2 py-0.5 rounded">Cards</span>
                <span className="bg-white/10 text-white text-[10px] font-mono px-2 py-0.5 rounded">NetBanking</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">Shop Collections</h4>
              <ul className="text-xs space-y-2.5 text-[#B5A599]">
                <li><a href="#bestsellers" className="hover:text-white transition-colors">Vitamin C Radiance</a></li>
                <li><a href="#bestsellers" className="hover:text-white transition-colors">Ceramide Barrier Lock</a></li>
                <li><a href="#bestsellers" className="hover:text-white transition-colors">Ultralight Sunscreens</a></li>
                <li><a href="#bestsellers" className="hover:text-white transition-colors">Clarifying BHA Cleansers</a></li>
              </ul>
            </div>

            {/* Skin Guide */}
            <div>
              <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">Skin Science</h4>
              <ul className="text-xs space-y-2.5 text-[#B5A599]">
                <li><a href="#ingredients" className="hover:text-white transition-colors">Ingredient Glossary</a></li>
                <li><a href="#routine" className="hover:text-white transition-colors">Routine Builder</a></li>
                <li><a href="#concerns" className="hover:text-white transition-colors">Skin Concern Diagnostic</a></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Indian Weather Protocol</span></li>
              </ul>
            </div>

            {/* Portfolio Notice */}
            <div>
              <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-4">Showcase Info</h4>
              <p className="text-xs text-[#B5A599] leading-relaxed">
                This storefront is a demonstration of e-commerce user experience created for the web design portfolio of bibekbhagat.dev.
              </p>
              <div className="mt-4">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E07A5F] hover:text-[#f3957b] transition-colors"
                >
                  ← Return to Portfolio Overview
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F7E74] gap-4">
            <div>© 2026 Kaasni Skincare Showcase. All rights reserved.</div>
            <div>Web Design & Full-Stack Implementation by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>

      {/* ── SHOPPING CART DRAWER (INTERACTIVE UX DEMO) ── */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-[#E8E2D9] flex items-center justify-between bg-[#FAF7F2]">
                <div>
                  <h2 className="text-lg font-black text-[#1F1614]">Your Shopping Bag</h2>
                  <p className="text-xs text-[#7A6963] mt-0.5">{totalItems} item{totalItems === 1 ? "" : "s"} selected</p>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-[#7A6963] hover:text-[#1F1614] rounded-lg cursor-pointer"
                  aria-label="Close cart drawer"
                >
                  ✕
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-6 py-3 bg-[#F3EFE9] border-b border-[#E8E2D9]">
                <div className="flex items-center justify-between text-xs font-semibold text-[#1F1614] mb-1.5">
                  <span>
                    {subtotal >= freeShippingThreshold
                      ? "🎉 You unlocked FREE Pan-India Shipping!"
                      : `Add ₹${freeShippingThreshold - subtotal} more for Free Shipping`}
                  </span>
                  <span>{progressToFreeShipping}%</span>
                </div>
                <div className="w-full bg-[#DCD4C9] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#E07A5F] h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#EFE9DF]">
                {cart.length === 0 ? (
                  <div className="py-16 text-center">
                    <p className="text-4xl mb-3">🛍️</p>
                    <p className="text-base font-bold text-[#1F1614]">Your bag is currently empty</p>
                    <p className="text-xs text-[#7A6963] mt-1 mb-6">Discover our climate-tested skincare formulations.</p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="px-6 py-2.5 bg-[#E07A5F] text-white text-xs font-bold uppercase rounded-xl"
                    >
                      Browse Best Sellers
                    </button>
                  </div>
                ) : (
                  cart.map(({ product, quantity }) => (
                    <div key={product.id} className="py-4 flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#E9E3D9]">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-bold text-xs text-[#1F1614] leading-snug">{product.name}</h4>
                            <span className="font-black text-xs text-[#1F1614]">₹{product.price * quantity}</span>
                          </div>
                          <p className="text-[11px] text-[#8C7B75] mt-0.5">{product.size}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-[#DED6CC] rounded-lg overflow-hidden bg-[#FAF7F2]">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="px-2.5 py-0.5 text-xs text-[#52423D] hover:bg-[#EDE5DA] cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-bold text-[#1F1614]">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="px-2.5 py-0.5 text-xs text-[#52423D] hover:bg-[#EDE5DA] cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => updateQuantity(product.id, -quantity)}
                            className="text-[11px] text-[#A65B47] hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer Checkout Summary */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-[#E8E2D9] bg-[#FAF7F2]">
                  <div className="flex items-center justify-between text-xs text-[#7A6963] mb-1">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#1F1614]">₹{subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#7A6963] mb-3">
                    <span>Shipping</span>
                    <span className="font-semibold text-[#1F1614]">
                      {subtotal >= freeShippingThreshold ? "FREE" : "₹70"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-black text-[#1F1614] pt-3 border-t border-[#E8E2D9] mb-4">
                    <span>Estimated Total</span>
                    <span>₹{subtotal + (subtotal >= freeShippingThreshold ? 0 : 70)}</span>
                  </div>

                  <button
                    onClick={() => {
                      alert("This is a portfolio showcase demonstration. Checkout experience successfully simulated!");
                    }}
                    className="w-full py-4 bg-[#E07A5F] hover:bg-[#d66f54] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout (Demo) →</span>
                  </button>
                  <p className="text-[10px] text-center text-[#9E8E88] mt-2.5">
                    100% Secure Checkout · UPI, Credit/Debit Cards & Net Banking
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
