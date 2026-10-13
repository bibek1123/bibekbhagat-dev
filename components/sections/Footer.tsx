"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, developerProfiles } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const showcaseLinks = [
  { label: "Kaasni", category: "D2C E-commerce", href: "/work/ecommerce" },
  { label: "Atelier Aura", category: "Interior Design", href: "/work/interior-design" },
  { label: "PureSmile Dental", category: "Healthcare Clinic", href: "/work/dental-clinic" },
  { label: "The Ember Room", category: "Restaurant & Dining", href: "/work/restaurant" },
  { label: "FixKaro", category: "Home Services", href: "/work/home-services" },
  { label: "Arya Properties", category: "Luxury Real Estate", href: "/work/real-estate" },
];

const navigationLinks = [
  { label: "Selected Work (10 Projects)", href: "/#work" },
  { label: "What Every Website Includes", href: "/#services" },
  { label: "Starter Package (₹6,999)", href: "/#pricing" },
  { label: "Business Package (₹12,999)", href: "/#pricing" },
  { label: "Custom Solutions (Quoted Separately)", href: "/#custom-solutions" },
  { label: "How It Works (5 Steps)", href: "/#process" },
  { label: "Direct Developer Partnership", href: "/#about" },
  { label: "Frequently Asked Questions", href: "/#faq" },
];

const techStackBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Cloud Deployment",
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
      className="bg-[#08090E] text-gray-400 relative overflow-hidden pt-16 pb-28 sm:pb-14"
    >
      {/* Iridescent top border line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 via-emerald-500/30 to-transparent"
      />

      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* ── Top Feature Strip: Live Partnership & Availability ── */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-start sm:items-center gap-3.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0 mt-1 sm:mt-0 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-white tracking-tight">
                  Available for Next Website Projects
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Starts Within 48 Hrs
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 m-0">
                Work 1:1 directly with Bibek Bhagat. Fast 7–14 days launch with 100% source code ownership.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>IST (UTC+5:30) • Pan-India</span>
            </div>
            <WhatsAppButton
              size="sm"
              variant="default"
              ctaLocation="footer_live_strip"
              className="w-full sm:w-auto"
            >
              Start WhatsApp Chat →
            </WhatsAppButton>
          </div>
        </div>

        {/* ── Main 4-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-14 border-b border-white/[0.08]">
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 text-white no-underline group mb-4"
                aria-label="Bibek Bhagat — Home"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-transform group-hover:scale-105">
                  B
                </div>
                <div>
                  <span className="font-extrabold text-base tracking-tight text-white block leading-none">
                    Bibek Bhagat
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 block mt-1">
                    Websites For Business
                  </span>
                </div>
              </Link>

              <p className="text-xs leading-relaxed text-gray-400 max-w-sm mb-6">
                Independent full-stack engineer building fast, modern, and high-converting websites for Indian businesses, clinics, salons, studios, and startups. Direct 1:1 collaboration with zero agency bureaucracy.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-2 text-xs">
                <a
                  href="https://wa.me/918708310549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-emerald-400 transition-colors group"
                >
                  <div className="w-6 h-6 rounded bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-mono">+91 87083 10549</span>
                  <span className="text-[10px] text-gray-500 font-mono group-hover:text-emerald-400">Direct WhatsApp</span>
                </a>

                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-gray-300 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-center text-indigo-400 shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="font-mono">{siteConfig.email}</span>
                  </a>
                )}

                <div className="flex items-center gap-2.5 text-gray-400 pt-1">
                  <div className="w-6 h-6 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>Delhi NCR &amp; Pan-India Remote</span>
                </div>
              </div>
            </div>

            {/* Micro guarantee badge */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-gray-400 font-mono">
              <span className="text-emerald-400 font-bold">100% OWNERSHIP:</span>
              <span>All code &amp; credentials transferred at launch</span>
            </div>
          </div>

          {/* Column 2: Selected Showcase Websites (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Selected Work</span>
              <span className="text-[10px] font-mono text-gray-500">10 SITES</span>
            </h3>

            <ul className="space-y-2.5 m-0 p-0 list-none text-xs">
              {showcaseLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between group py-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="font-medium group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-indigo-400 transition-colors">
                      {item.category}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Browse All 10 Projects</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Packages (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Navigation</span>
            </h3>

            <ul className="space-y-2 m-0 p-0 list-none text-xs">
              {navigationLinks.map((nav) => (
                <li key={nav.label}>
                  <Link
                    href={nav.href}
                    className="block py-0.5 text-gray-400 hover:text-white transition-colors"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Profiles & Stack (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Verified Profiles</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">
                PROVEN
              </span>
            </h3>

            {/* 4 Interactive Profile Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {developerProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.06] transition-all duration-200 group flex items-center justify-between"
                  aria-label={`${p.name} profile (${p.handle})`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white block group-hover:text-indigo-300 transition-colors">
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 truncate block">
                        {p.handle}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-white transition-colors shrink-0">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Production Tech Stack Mini Badges */}
            <div className="mt-5 pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Core Production Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {techStackBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/50 text-gray-300 border border-white/10 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Copyright, Legal & Back to Top ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <p className="m-0">
              © {CURRENT_YEAR} <span className="text-gray-300 font-semibold">Bibek Bhagat</span>. All rights reserved.
            </p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <p className="m-0 text-gray-400">
              Fixed Transparent Pricing • 50/50 Advance • Zero Agency Markup
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

