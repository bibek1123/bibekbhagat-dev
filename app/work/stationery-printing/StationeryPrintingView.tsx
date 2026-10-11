"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: "journals" | "planners" | "art" | "print" | "gifts";
  price: string;
  tag: string;
  paperSpec: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "linen-dot-journal",
    name: "Heritage Linen Hardcover Journal",
    category: "journals",
    price: "₹649",
    tag: "Bestseller",
    paperSpec: "120 GSM Bamboo Cream · Dot Grid · 200 Pages",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    description: "Hand-bound woven Belgian linen journal featuring lay-flat 180° binding, archival zero-bleed paper, and dual silk ribbon bookmarks.",
  },
  {
    id: "undated-yearly-planner",
    name: "The Focus Weekly & Yearly Planner",
    category: "planners",
    price: "₹899",
    tag: "Design Award",
    paperSpec: "100 GSM FSC Acid-Free Ivory · Undated 52 Weeks",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80",
    description: "Structured habit trackers, priority quarterly matrices, and unruled reflection spreads encased in a foil-stamped vegan leather cover.",
  },
  {
    id: "letterpress-cards",
    name: "Cotton Letterpress Business Cards",
    category: "print",
    price: "₹1,450 / 100 pcs",
    tag: "Bespoke Print",
    paperSpec: "450 GSM Crane Lettra 100% Cotton · Foil Stamped",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
    description: "Deep tactile impression letterpress cards on archival cotton stock with metallic copper foil edging and customizable typography.",
  },
  {
    id: "brass-fountain-pen",
    name: "Artisan Solid Brass Fountain Pen",
    category: "art",
    price: "₹1,250",
    tag: "Tactile Luxury",
    paperSpec: "Medium Nib · Schmidt Iridium German Feed",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80",
    description: "Substantial machined raw brass barrel designed to develop a rich organic patina over years of daily journal reflection and signature writing.",
  },
  {
    id: "botanical-watercolor-set",
    name: "Half-Pan Botanical Artist Watercolors",
    category: "art",
    price: "₹1,150",
    tag: "Artist Grade",
    paperSpec: "18 Pigment Pans · Hand-Poured Honey Base",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80",
    description: "Lightfast natural mineral pigments formulated with gum arabic and wild mountain honey for velvety washes and luminous glazing.",
  },
  {
    id: "bespoke-curated-giftbox",
    name: "The Executive Stationery Gift Suite",
    category: "gifts",
    price: "₹2,499",
    tag: "Curated Box",
    paperSpec: "Embossed Keepsake Box · Wax Seal Kit Included",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=80",
    description: "A luxury presentation box housing a custom linen journal, brass ruler, beeswax sealing wax, personalized brass seal, and archival black ink.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Items", icon: "✨" },
  { id: "journals", label: "Journals & Notebooks", icon: "📖" },
  { id: "planners", label: "Daily Planners", icon: "🗓" },
  { id: "print", label: "Custom Print Studio", icon: "🖨" },
  { id: "art", label: "Fine Writing & Art", icon: "✒️" },
  { id: "gifts", label: "Curated Gift Sets", icon: "🎁" },
];

export function StationeryPrintingView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartAlert, setCartAlert] = useState<string | null>(null);

  // Print Calculator State
  const [printType, setPrintType] = useState<"cards" | "invitations" | "packaging">("cards");
  const [paperStock, setPaperStock] = useState<"cotton" | "kraft" | "linen">("cotton");
  const [quantity, setQuantity] = useState<number>(250);
  const [finish, setFinish] = useState<"standard" | "gold-foil" | "emboss">("gold-foil");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const estimatedPrintCost = useMemo(() => {
    let baseRate = printType === "cards" ? 8 : printType === "invitations" ? 22 : 45;
    if (paperStock === "cotton") baseRate *= 1.4;
    if (paperStock === "linen") baseRate *= 1.25;
    if (finish === "gold-foil") baseRate += 4.5;
    if (finish === "emboss") baseRate += 3.8;
    return Math.round(baseRate * quantity);
  }, [printType, paperStock, quantity, finish]);

  const handleAddToCart = (product: Product) => {
    setCartCount((c) => c + 1);
    setCartAlert(`Added "${product.name}" to cart (Simulated).`);
    setTimeout(() => setCartAlert(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] font-sans antialiased selection:bg-[#E05A47] selection:text-white">
      {/* ── DEMO NOTICE BANNER (PORTFOLIO SPEC) ── */}
      <div className="bg-[#1C1917] text-[#E7E5E4] text-xs py-1.5 px-4 flex items-center justify-between border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium text-white/90">Portfolio Showcase: Artisan Stationery &amp; Print Storefront</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/60">Designed &amp; engineered by Bibek Bhagat</span>
          </div>
          <Link
            href="/#work"
            className="text-[#FBBF24] hover:text-[#FDE68A] font-medium transition-colors ml-4 flex items-center gap-1"
          >
            ← Back to bibekbhagat.dev
          </Link>
        </div>
      </div>

      {/* ── VIBRANT INK-INSPIRED ANNOUNCEMENT BAR ── */}
      <div className="bg-[#E05A47] text-white text-xs font-semibold py-2 px-4 text-center tracking-wide">
        <span>🍂 The Autumn Parchment &amp; Botanical Ink Edition · Sample Showcase Catalogue</span>
      </div>

      {/* ── ARTISANAL HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/work/stationery-printing" className="group">
              <span className="text-2xl font-serif font-black tracking-tight text-[#1C1917] block leading-none">
                ROSHNI<span className="text-[#E05A47]">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#78716C] uppercase block mt-1">
                Paperie &amp; Print Studio
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#57534E]">
            <a href="#catalogue" className="hover:text-[#E05A47] transition-colors">
              Curated Catalogue
            </a>
            <a href="#custom-print" className="hover:text-[#E05A47] transition-colors">
              Custom Print Studio
            </a>
            <a href="#materiality" className="hover:text-[#E05A47] transition-colors">
              Paper Materiality
            </a>
            <a href="#gifting" className="hover:text-[#E05A47] transition-colors">
              Corporate Gifting
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                alert("Cart is simulated! In live deployment, this opens your shopping bag.");
              }}
              className="relative p-2.5 bg-white border border-[#E7E2D8] hover:border-[#CBD5E1] rounded-xl text-xs font-bold text-[#1C1917] transition-all cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>🛍️ Cart</span>
              <span className="bg-[#E05A47] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── TEMPORARY CART TOAST NOTIFICATION ── */}
      {cartAlert && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-medium border border-white/20 animate-fade-in flex items-center gap-2">
          <span>✓</span> {cartAlert}
        </div>
      )}

      {/* ── RICH PRODUCT-LED HERO (INKARTO STYLE) ── */}
      <section className="relative bg-gradient-to-br from-[#F5EFEB] via-[#FAF8F5] to-[#F1E8DF] py-16 lg:py-24 border-b border-[#E7E2D8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#E05A47]/10 text-[#E05A47] border border-[#E05A47]/20 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase mb-5 font-mono">
                <span>✦</span> Tactile Paper Goods &amp; Bespoke Print
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#1C1917] tracking-tight leading-[1.08] mb-6">
                Stationery for Thinkers, <br />
                <span className="italic text-[#E05A47]">Makers, &amp; Curators.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl mb-8 font-normal">
                Indulge in archival 120 GSM paper, hand-stitched linen journals, tactile letterpress business cards, and honey-based watercolor pans. Designed in India for lovers of slow, tactile craft.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#catalogue"
                  className="px-8 py-4 bg-[#E05A47] hover:bg-[#c94937] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Explore Catalogue
                </a>
                <a
                  href="#custom-print"
                  className="px-8 py-4 bg-white hover:bg-[#F5F5F4] text-[#1C1917] border border-[#D6D3D1] text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shadow-xs"
                >
                  Configure Custom Print
                </a>
              </div>

              {/* Tactile Highlights Ribbon */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#E7E2D8]">
                <div>
                  <span className="font-mono text-xs font-bold text-[#E05A47] block">120 GSM</span>
                  <span className="text-[11px] text-[#78716C] mt-0.5 block">Zero-Bleed Ivory Stock</span>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#E05A47] block">100% Cotton</span>
                  <span className="text-[11px] text-[#78716C] mt-0.5 block">Letterpress Impression</span>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#E05A47] block">FSC Certified</span>
                  <span className="text-[11px] text-[#78716C] mt-0.5 block">Sustainable Fiber Mills</span>
                </div>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#E7E5E4]">
                <Image
                  src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=80"
                  alt="Aesthetic stationery desk flatlay with journals and art materials"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FBBF24] block mb-1">
                    Artisan Collection
                  </span>
                  <p className="text-sm font-serif font-bold">Linen Journals &amp; Fine Point Calligraphy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY RAIL & PRODUCT CATALOGUE ── */}
      <section id="catalogue" className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E05A47]">
                Merchandise Discovery
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1C1917] tracking-tight mt-1">
                Featured Paperie &amp; Crafts
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer border ${
                    activeCategory === tab.id
                      ? "bg-[#1C1917] text-white border-[#1C1917] shadow-sm"
                      : "bg-white text-[#57534E] border-[#E7E2D8] hover:bg-[#F5F5F4] hover:text-[#1C1917]"
                  }`}
                >
                  <span className="mr-1.5">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-[#E7E2D8] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-[#F5F5F4] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-xs text-white text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md">
                      {p.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E05A47] block mb-1">
                      {p.paperSpec}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-2 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#78716C] leading-relaxed mb-4 line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#F5F5F4] flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] text-[#A8A29E] block">Retail Price</span>
                    <span className="font-mono text-base font-bold text-[#1C1917]">{p.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="px-3.5 py-2 border border-[#D6D3D1] hover:border-[#1C1917] text-xs font-bold rounded-lg text-[#1C1917] transition-colors cursor-pointer"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="px-4 py-2 bg-[#E05A47] hover:bg-[#c94937] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      + Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CUSTOM PRINT ESTIMATOR ── */}
      <section id="custom-print" className="py-20 bg-[#F2EBE3] border-t border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E05A47]">
                Letterpress &amp; Foil Studio
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1C1917] tracking-tight mt-1 mb-4">
                Configure Bespoke Print Runs
              </h2>
              <p className="text-sm text-[#57534E] leading-relaxed mb-6 font-normal">
                Explore custom paper weights, artisan foil stamping, and deep debossing. Select parameters to estimate live production rates through this interactive spec calculator.
              </p>

              <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#D6D3D1] text-xs">
                <div className="flex items-center gap-2 text-[#44403C]">
                  <span className="text-[#E05A47]">✓</span> Heidelberg Platen hot-foil stamping
                </div>
                <div className="flex items-center gap-2 text-[#44403C]">
                  <span className="text-[#E05A47]">✓</span> FSC-certified cotton &amp; recycled kraft pulps
                </div>
                <div className="flex items-center gap-2 text-[#44403C]">
                  <span className="text-[#E05A47]">✓</span> Custom die-cutting &amp; edge gilding options
                </div>
              </div>
            </div>

            {/* Right Estimator Card */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#D6D3D1] shadow-xl">
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-6 pb-3 border-b border-[#E7E2D8]">
                Interactive Print Cost Estimator
              </h3>

              <div className="space-y-6">
                {/* Print Product Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2 font-mono">
                    Product Format
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "cards", label: "Business Cards" },
                      { id: "invitations", label: "Event Invitations" },
                      { id: "packaging", label: "Rigid Box Sleeves" },
                    ].map((fmt) => (
                      <button
                        key={fmt.id}
                        onClick={() => setPrintType(fmt.id as "cards" | "invitations" | "packaging")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          printType === fmt.id
                            ? "bg-[#1C1917] text-white border-[#1C1917]"
                            : "bg-[#FAF8F5] text-[#57534E] border-[#E7E2D8] hover:bg-[#F5F5F4]"
                        }`}
                      >
                        {fmt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paper Stock */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2 font-mono">
                    Artisan Paper Stock
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "cotton", label: "450 GSM Cotton" },
                      { id: "linen", label: "350 GSM Woven Linen" },
                      { id: "kraft", label: "300 GSM Recycled Kraft" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setPaperStock(st.id as "cotton" | "kraft" | "linen")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          paperStock === st.id
                            ? "bg-[#1C1917] text-white border-[#1C1917]"
                            : "bg-[#FAF8F5] text-[#57534E] border-[#E7E2D8] hover:bg-[#F5F5F4]"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finishing */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#78716C] mb-2 font-mono">
                    Specialty Finish
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "standard", label: "Crisp Black Letterpress" },
                      { id: "gold-foil", label: "Metallic Gold Foil" },
                      { id: "emboss", label: "Blind Deep Emboss" },
                    ].map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFinish(f.id as "standard" | "gold-foil" | "emboss")}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          finish === f.id
                            ? "bg-[#1C1917] text-white border-[#1C1917]"
                            : "bg-[#FAF8F5] text-[#57534E] border-[#E7E2D8] hover:bg-[#F5F5F4]"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#78716C] mb-2 font-mono">
                    <span>Quantity</span>
                    <span className="text-[#1C1917] font-bold">{quantity} Pieces</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-[#E05A47] cursor-pointer"
                  />
                </div>

                {/* Calculation Summary Bar */}
                <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E7E2D8] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#78716C] block">Estimated Spec Budget</span>
                    <span className="text-2xl font-mono font-bold text-[#1C1917]">
                      ₹{estimatedPrintCost.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      alert("Print consultation simulated! In live deployment, this submits specs to the print coordinator.");
                    }}
                    className="px-6 py-3 bg-[#E05A47] hover:bg-[#c94937] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Request Sample Kit (Demo) →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK VIEW PRODUCT MODAL ── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative border border-[#D6D3D1] overflow-hidden">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 text-sm cursor-pointer z-10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto h-full min-h-[300px] bg-[#F5F5F4]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E05A47] block mb-1">
                    {selectedProduct.paperSpec}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917] mb-2 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <div className="font-mono text-xl font-bold text-[#1C1917] mb-4">
                    {selectedProduct.price}
                  </div>
                  <p className="text-xs text-[#78716C] leading-relaxed mb-6 font-normal">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E7E2D8]">
                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-3.5 bg-[#E05A47] hover:bg-[#c94937] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Add to Bag (Simulated)
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full py-2.5 text-xs text-[#78716C] hover:text-[#1C1917] font-semibold"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1917] text-[#A8A29E] py-14 border-t border-white/10 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
            <div>
              <span className="font-serif text-xl font-bold text-white block mb-2">ROSHNI PAPERIE</span>
              <p className="leading-relaxed text-[#78716C] max-w-xs">
                Showcase stationery catalogue and print atelier concept inspired by Inkarto. Celebrating slow craft, fountain pen inks, and tactile paper goods.
              </p>
            </div>
            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-2">Atelier &amp; Print Studio</p>
              <p className="text-[#78716C]">Design Showcase · New Delhi &amp; Jaipur</p>
              <p className="text-[#78716C] mt-1">Catalogue Inquiries: hello@roshniprint.demo</p>
            </div>
            <div>
              <p className="font-mono text-white uppercase tracking-wider mb-2">Portfolio Notice</p>
              <p className="text-[#78716C]">
                Showcase website created for the web design portfolio of bibekbhagat.dev. Demonstrates merchandise richness, product filtering, and custom print configuration.
              </p>
              <Link href="/#work" className="text-[#E05A47] hover:underline block mt-2">
                ← Return to Portfolio Overview
              </Link>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78716C] gap-2">
            <div>© 2026 Roshni Stationery Showcase. All rights reserved.</div>
            <div>Designed &amp; engineered by Bibek Bhagat.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
