"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, developerProfiles } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const showcaseLinks = [
  { label: "Kaasni", category: "D2C E-commerce", href: "/work/ecommerce", color: "#EC4899" },
  { label: "Atelier Aura", category: "Interior Design", href: "/work/interior-design", color: "#F59E0B" },
  { label: "PureSmile Dental", category: "Healthcare Clinic", href: "/work/dental-clinic", color: "#06B6D4" },
  { label: "The Ember Room", category: "Restaurant & Dining", href: "/work/restaurant", color: "#EF4444" },
  { label: "FixKaro", category: "Home Services", href: "/work/home-services", color: "#10B981" },
  { label: "Arya Properties", category: "Luxury Real Estate", href: "/work/real-estate", color: "#8B5CF6" },
];

const navigationLinks = [
  { label: "Selected Work (10 Projects)", href: "/#work", highlight: false },
  { label: "What Every Website Includes", href: "/#services", highlight: false },
  { label: "Starter Package (₹6,999)", href: "/#pricing", highlight: true },
  { label: "Business Package (₹12,999)", href: "/#pricing", highlight: true },
  { label: "Custom Solutions (Quoted Separately)", href: "/#custom-solutions", highlight: false },
  { label: "How It Works (5 Transparent Steps)", href: "/#process", highlight: false },
  { label: "Direct Developer Partnership", href: "/#about", highlight: false },
  { label: "Frequently Asked Questions", href: "/#faq", highlight: false },
];

const techStackBadges = [
  { name: "Next.js 16", desc: "App Router" },
  { name: "React 19", desc: "Server Components" },
  { name: "TypeScript", desc: "Type Safe" },
  { name: "Tailwind CSS", desc: "Responsive Design" },
  { name: "Node.js", desc: "Full Stack" },
  { name: "Cloud Vercel", desc: "Edge CDN" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-[#05070D] text-gray-400 relative overflow-hidden pt-20 pb-28 sm:pb-16"
    >
      {/* Iridescent top border line with glowing gradients */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/70 via-purple-500/50 via-emerald-400/60 to-transparent"
      />

      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-emerald-500/[0.07] blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-purple-600/[0.05] blur-[140px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* ── Top Feature Command Card: Live Availability & Kickoff ── */}
        <div className="mb-16 relative group">
          {/* Subtle outer animated glow gradient */}
          <div
            aria-hidden="true"
            className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-emerald-500/25 to-purple-500/30 opacity-70 blur-xs transition duration-500 group-hover:opacity-100"
          />

          <div className="relative rounded-3xl p-6 sm:p-8 md:p-9 bg-[#0A0D17]/95 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left side: Status, headline, and timeline commitment */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                {/* Radar pulse ping indicator */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 shadow-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Available for New Projects
                  </span>
                </div>

                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300 bg-indigo-950/70 px-2.5 py-1 rounded-full border border-indigo-800/50">
                  Starts Within 48 Hrs
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight m-0">
                Ready to build a website that actually grows your business?
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 mt-2.5 m-0 leading-relaxed">
                Work 1:1 directly with Bibek Bhagat. Fast delivery:{" "}
                <span className="text-gray-200 font-semibold">Starter (1–2 working days)</span> ·{" "}
                <span className="text-gray-200 font-semibold">Business (3–5 working days)</span> with 100% source code ownership.
              </p>
            </div>

            {/* Right side: Direct interactive actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>IST (UTC+5:30) · Pan-India</span>
              </div>

              <WhatsAppButton
                size="md"
                variant="default"
                ctaLocation="footer_live_strip"
                className="w-full sm:w-auto shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
              >
                Start WhatsApp Chat →
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* ── Main 4-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/[0.08]">
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo with glowing gradient badge */}
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-white no-underline group mb-5"
                aria-label="Bibek Bhagat — Home"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 flex items-center justify-center text-white font-black text-base shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-indigo-400/30 transition-transform group-hover:scale-105">
                  B
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                      Bibek Bhagat
                    </span>
                    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 block mt-1">
                    Independent Web Developer
                  </span>
                </div>
              </Link>

              <p className="text-xs leading-relaxed text-gray-400 max-w-sm mb-6">
                Designing and engineering modern, fast, and high-converting websites for Indian businesses, clinics, salons, studios, and startups. Direct 1:1 collaboration with zero agency markups.
              </p>

              {/* Direct Touchpoint Cards */}
              <div className="space-y-2.5 text-xs">
                <a
                  href="https://wa.me/918708310549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 hover:border-emerald-500/60 hover:bg-emerald-950/50 transition-all duration-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-mono text-gray-200 block font-semibold group-hover:text-emerald-400 transition-colors">
                        +91 87083 10549
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono">WhatsApp (Direct Chat)</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-emerald-400 transition-colors">
                    ↗
                  </span>
                </a>

                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 hover:border-indigo-500/60 hover:bg-indigo-950/50 transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-mono text-gray-200 block font-semibold group-hover:text-indigo-400 transition-colors">
                          {siteConfig.email}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">Direct Email</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-indigo-400 transition-colors">
                      ↗
                    </span>
                  </a>
                )}

                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-gray-400">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-300 block font-medium">Delhi NCR, India</span>
                    <span className="text-[10px] text-gray-500 font-mono">Serving Clients Across India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ownership Seal badge */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2.5 text-[11px] text-gray-400 font-mono bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>
                <strong className="text-emerald-400 font-bold">100% OWNERSHIP:</strong> Full source code, domain, and credentials transferred at launch.
              </span>
            </div>
          </div>

          {/* Column 2: Selected Showcase Websites (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Selected Work</span>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/60 font-semibold">
                10 SITES
              </span>
            </h3>

            <ul className="space-y-1.5 m-0 p-0 list-none text-xs">
              {showcaseLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="p-2 -mx-2 rounded-xl flex items-center justify-between group hover:bg-white/[0.05] transition-all duration-200 text-decoration-none"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-semibold text-gray-300 group-hover:text-white transition-colors truncate">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-mono text-gray-500 group-hover:text-indigo-400 transition-colors">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-300 hover:text-white hover:bg-indigo-500/20 transition-all text-decoration-none group"
                >
                  <span>Browse All 10 Live Showcases</span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Packages (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Explore &amp; Scope</span>
            </h3>

            <ul className="space-y-1.5 m-0 p-0 list-none text-xs">
              {navigationLinks.map((nav) => (
                <li key={nav.label}>
                  <Link
                    href={nav.href}
                    className={`block py-1 px-2 -mx-2 rounded-lg transition-all duration-200 text-decoration-none ${
                      nav.highlight
                        ? "text-indigo-300 font-semibold hover:text-white hover:bg-indigo-950/40"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Profiles & Tech Stack (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Verified Profiles</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                PROVEN
              </span>
            </h3>

            {/* 4 Interactive Profile Badges with Platform Glows */}
            <div className="grid grid-cols-1 gap-2">
              {developerProfiles.map((p) => {
                const getHoverBorder = () => {
                  if (p.name === "LinkedIn") return "hover:border-[#0A66C2]/70 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_20px_rgba(10,102,194,0.18)]";
                  if (p.name === "GitHub") return "hover:border-white/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]";
                  if (p.name === "LeetCode") return "hover:border-[#FFA116]/70 hover:bg-[#FFA116]/10 hover:shadow-[0_0_20px_rgba(255,161,22,0.18)]";
                  if (p.name === "HackerRank") return "hover:border-[#00EA64]/70 hover:bg-[#00EA64]/10 hover:shadow-[0_0_20px_rgba(0,234,100,0.18)]";
                  return "hover:border-indigo-500/50 hover:bg-white/[0.06]";
                };

                return (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/10 transition-all duration-200 group flex items-center justify-between text-decoration-none ${getHoverBorder()}`}
                    aria-label={`${p.name} profile (${p.handle})`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs group-hover:scale-125 transition-transform"
                        style={{ backgroundColor: p.color }}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-white transition-colors">
                            {p.name}
                          </span>
                          <span className="text-[10px] font-mono text-gray-500">
                            {p.category}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-gray-400 truncate block group-hover:text-gray-200 transition-colors">
                          {p.handle}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Core Production Stack */}
            <div className="mt-5 pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                Core Production Stack:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {techStackBadges.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-2 py-1 rounded-lg bg-black/50 border border-white/10 shadow-2xs flex flex-col"
                  >
                    <span className="text-[11px] font-mono font-bold text-gray-200">
                      {tech.name}
                    </span>
                    <span className="text-[9px] font-mono text-gray-500">
                      {tech.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Architectural Watermark in Background ── */}
        <div
          aria-hidden="true"
          className="w-full overflow-hidden select-none pointer-events-none py-6 opacity-[0.025] text-center"
        >
          <span className="text-[10vw] font-black uppercase tracking-tighter leading-none bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent block">
            BIBEK BHAGAT
          </span>
        </div>

        {/* ── Bottom Bar: Copyright, Legal & Back to Top ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-center sm:text-left">
            <p className="m-0">
              © {CURRENT_YEAR} <span className="text-gray-200 font-semibold">Bibek Bhagat</span>. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p className="m-0 text-gray-400">
              Fixed Transparent Pricing • 50/50 Advance • Zero Agency Markup
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-decoration-none"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-decoration-none"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer shadow-2xs"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
