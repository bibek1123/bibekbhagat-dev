"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

interface ServiceFeatureItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  deliverables: string[];
}

const serviceTabs: ServiceFeatureItem[] = [
  {
    id: "mobile-first",
    number: "01",
    title: "Mobile-First Design",
    tagline: "Flawless on smartphones, tablets, and wide monitors",
    category: "Design & Mobile Experience",
    deliverables: [
      "Crafted for how Indian customers browse — on smartphones",
      "Fluid responsive breakpoints from 360px up to 4K displays",
      "Touch-optimized buttons, accessible menus, and thumb-friendly CTAs",
    ],
  },
  {
    id: "whatsapp-enquiry",
    number: "02",
    title: "WhatsApp & Instant Enquiries",
    tagline: "Turn website visitors into direct customer conversations",
    category: "Customer Enquiries",
    deliverables: [
      "Direct WhatsApp buttons with prefilled contextual messages",
      "Click-to-call phone buttons for instant mobile calls",
      "Clean 24/7 contact enquiry forms and Google Maps integration",
    ],
  },
  {
    id: "professional-trust",
    number: "03",
    title: "Professional Presentation",
    tagline: "Elevate your business credibility and brand perception",
    category: "Brand & Credibility",
    deliverables: [
      "Curated typography and balanced visual hierarchy",
      "Clear service catalogs and transparent pricing presentations",
      "HTTPS/SSL security and clean professional layouts",
    ],
  },
  {
    id: "performance",
    number: "04",
    title: "Fast Performance & Modern Tech",
    tagline: "Sub-second load times built on modern production architecture",
    category: "Performance & Technical Setup",
    deliverables: [
      "Built with Next.js & React for modern web speed",
      "Optimized images, lightweight scripts, and zero unnecessary bloat",
      "Fast page loads so visitors never bounce while waiting",
    ],
  },
  {
    id: "search-foundations",
    number: "05",
    title: "Search Foundations & Discovery",
    tagline: "Help search engines discover and understand your business",
    category: "Search & Visibility",
    deliverables: [
      "Semantic HTML5 heading structure (h1, h2, h3)",
      "Accurate meta titles, descriptions, and OpenGraph social preview tags",
      "Clean canonical URLs and structured schema for local businesses",
    ],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState("mobile-first");

  const currentTab = serviceTabs.find((t) => t.id === activeTab) || serviceTabs[0];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 m-0">
              What Every Website Includes
            </p>
          </div>
          <h2
            id="services-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.1] m-0"
          >
            Built for how Indian businesses actually win customers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Every website I build is focused on commercial clarity: clear design,
            frictionless WhatsApp conversion, mobile excellence, and rock-solid technical setup.
          </p>
        </div>

        {/* ── Interactive Split-Screen Demonstration ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Feature Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3" role="tablist" aria-label="Services capabilities">
            {serviceTabs.map((tab) => {
              const isSelected = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#FAF9F6] border-indigo-600 shadow-sm ring-1 ring-indigo-600"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                      {tab.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-gray-400">
                      {tab.number}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight m-0">
                    {tab.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 m-0 leading-normal">
                    {tab.tagline}
                  </p>

                  {/* Expanded deliverables when active */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-gray-200/80">
                      <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
                        {tab.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-relaxed"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#4F46E5"
                              strokeWidth="2.5"
                              className="shrink-0 mt-0.5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Visual Demonstration Sandbox */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-2xl border border-gray-200/90 bg-[#FBFBFA] shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden min-h-[480px] flex flex-col">
              {/* Window Header */}
              <div className="h-10 bg-gray-100/90 border-b border-gray-200/80 px-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="ml-2 text-xs font-mono font-medium text-gray-500">
                    Interactive Demonstration
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                  <span>{currentTab.title}</span>
                </div>
              </div>

              {/* Dynamic Demonstration Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                {/* ── DEMO 1: Mobile-First Design ── */}
                {activeTab === "mobile-first" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Responsive Transformation
                      </span>
                      <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        Fluid 360px → 1440px
                      </span>
                    </div>

                    {/* Dual comparison mock */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      {/* Desktop Wireframe snippet */}
                      <div className="sm:col-span-7 rounded-xl border border-gray-200 bg-white p-4 shadow-2xs">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
                          <div className="w-16 h-3 bg-gray-200 rounded" />
                          <div className="flex gap-2">
                            <div className="w-8 h-2 bg-gray-100 rounded" />
                            <div className="w-8 h-2 bg-gray-100 rounded" />
                            <div className="w-12 h-3 bg-indigo-100 rounded" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="w-3/4 h-4 bg-gray-800 rounded" />
                          <div className="w-1/2 h-2.5 bg-gray-300 rounded" />
                          <div className="grid grid-cols-3 gap-2 pt-2">
                            <div className="h-12 bg-gray-50 rounded border border-gray-100" />
                            <div className="h-12 bg-gray-50 rounded border border-gray-100" />
                            <div className="h-12 bg-gray-50 rounded border border-gray-100" />
                          </div>
                        </div>
                        <p className="text-[10px] text-gray-400 font-mono mt-3 m-0 text-center">
                          Desktop Viewport (1440px)
                        </p>
                      </div>

                      {/* Mobile Smartphone Frame snippet */}
                      <div className="sm:col-span-5 mx-auto w-[160px] rounded-2xl border-2 border-gray-900 bg-white p-3 shadow-md">
                        <div className="w-8 h-1 bg-gray-800 rounded-full mx-auto mb-2" />
                        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 mb-2">
                          <div className="w-8 h-2 bg-indigo-600 rounded" />
                          <div className="w-3 h-2 bg-gray-300 rounded" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="w-full h-3 bg-gray-800 rounded" />
                          <div className="w-4/5 h-2 bg-gray-200 rounded" />
                          <div className="h-8 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                            <span className="text-[9px] font-bold text-indigo-700">Tap to Call / Chat</span>
                          </div>
                        </div>
                        <p className="text-[9px] text-gray-400 font-mono mt-2 m-0 text-center">
                          Mobile Viewport (390px)
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-indigo-50/80 border border-indigo-100/90 p-3 text-xs text-indigo-950 font-medium">
                      💡 <strong>Mobile-first reality:</strong> Over 75% of prospective customers in India visit via mobile links from WhatsApp, Instagram, or Google Search. Every button and phone CTA is optimized for one-thumb taps.
                    </div>
                  </div>
                )}

                {/* ── DEMO 2: WhatsApp Enquiries ── */}
                {activeTab === "whatsapp-enquiry" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Zero Friction Lead Generation
                      </span>
                      <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        One-Tap Direct Chat
                      </span>
                    </div>

                    {/* Simulated WhatsApp conversation bubble */}
                    <div className="rounded-xl border border-gray-200 bg-[#EFEAE2] p-4 sm:p-5 shadow-inner">
                      <div className="flex items-center gap-2.5 pb-3 border-b border-gray-300/40 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-xs">
                          WA
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Your Business Official</div>
                          <div className="text-[10px] text-emerald-600 font-semibold">Online · Direct Enquiries</div>
                        </div>
                      </div>

                      {/* Customer Incoming Message */}
                      <div className="bg-white rounded-lg p-3 max-w-[85%] shadow-2xs mb-3 ml-auto border border-gray-100">
                        <p className="text-xs text-gray-800 m-0">
                          &quot;Hi, I found your website. I&apos;m interested in getting a quote for my business.&quot;
                        </p>
                        <span className="text-[9px] text-gray-400 block text-right mt-1">10:42 AM · Sent via Website</span>
                      </div>

                      {/* Automated Welcome / Quick Response */}
                      <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[85%] shadow-2xs border border-[#C5E1A5]">
                        <p className="text-xs text-gray-800 m-0">
                          &quot;Hello! Thank you for reaching out. We&apos;d love to help you. What services are you looking for?&quot;
                        </p>
                        <span className="text-[9px] text-gray-400 block text-right mt-1">10:43 AM</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-950 font-medium">
                      💬 <strong>Why this converts:</strong> Indian business prospects overwhelmingly prefer WhatsApp to filling out lengthy forms. I configure instant prefilled messages so prospects don&apos;t even have to type.
                    </div>
                  </div>
                )}

                {/* ── DEMO 3: Professional Presentation ── */}
                {activeTab === "professional-trust" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Trust Architecture
                      </span>
                      <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        Enterprise Credibility
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">🔒</span>
                          <span className="text-xs font-bold text-gray-900">SSL / HTTPS Security</span>
                        </div>
                        <p className="text-xs text-gray-500 m-0">
                          Zero security warnings. Padlock icon verified across all browsers.
                        </p>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">📍</span>
                          <span className="text-xs font-bold text-gray-900">Google Maps Embed</span>
                        </div>
                        <p className="text-xs text-gray-500 m-0">
                          Direct physical store directions for walk-in retail or clinic clients.
                        </p>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">🏷️</span>
                          <span className="text-xs font-bold text-gray-900">Transparent Pricing</span>
                        </div>
                        <p className="text-xs text-gray-500 m-0">
                          Structured service rate-cards that build instant customer confidence.
                        </p>
                      </div>

                      <div className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">🌐</span>
                          <span className="text-xs font-bold text-gray-900">Custom Domain Setup</span>
                        </div>
                        <p className="text-xs text-gray-500 m-0">
                          Connected seamlessly to your official .in or .com business domain.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-gray-100 p-3 text-xs text-gray-700 font-medium">
                      🎯 <strong>First impression test:</strong> Customers judge your business legitimacy in less than 3 seconds. High-contrast typography and clear layout immediately communicate that your company is reputable.
                    </div>
                  </div>
                )}

                {/* ── DEMO 4: Fast Performance ── */}
                {activeTab === "performance" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Production Architecture
                      </span>
                      <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Zero Bloat Engine
                      </span>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-900 text-gray-200 p-4 font-mono text-xs shadow-md space-y-2">
                      <div className="flex items-center justify-between text-gray-400 border-b border-gray-800 pb-2">
                        <span>COMPONENT</span>
                        <span>IMPLEMENTATION</span>
                      </div>
                      <div className="flex items-center justify-between text-emerald-400">
                        <span>⚡ Core Framework</span>
                        <span>Next.js 16 + React 19</span>
                      </div>
                      <div className="flex items-center justify-between text-indigo-300">
                        <span>🖼️ Image Pipeline</span>
                        <span>Next/Image · Responsive WebP/AVIF</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-300">
                        <span>📦 CSS Bundle</span>
                        <span>Tailwind CSS 4 · Zero Runtime Overhead</span>
                      </div>
                      <div className="flex items-center justify-between text-sky-300">
                        <span>🛡️ Hosting & CDN</span>
                        <span>Global Edge Network with Instant SSL</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-indigo-50 border border-indigo-100 p-3 text-xs text-indigo-950 font-medium">
                      ⚡ <strong>Why speed matters:</strong> Slow websites cost you paying clients. Every site is built with optimized Next.js server rendering, lean asset bundling, and clean code that loads smoothly even on 4G cellular connections.
                    </div>
                  </div>
                )}

                {/* ── DEMO 5: Search Foundations ── */}
                {activeTab === "search-foundations" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Search Result Preview
                      </span>
                      <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        Structured On-Page SEO
                      </span>
                    </div>

                    {/* Google Search Result Preview Card */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">
                          B
                        </div>
                        <span className="text-xs text-gray-700 font-medium">yourbusiness.com</span>
                        <span className="text-[10px] text-gray-400">https://yourbusiness.com</span>
                      </div>
                      <h4 className="text-base font-bold text-[#1a0dab] hover:underline cursor-pointer m-0">
                        Your Business Name — Official Website
                      </h4>
                      <p className="text-xs text-[#4d5156] mt-1 m-0 leading-normal">
                        Professional services in your city. Browse our complete catalog, view transparent pricing, and contact us directly via WhatsApp or phone.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-gray-100 flex gap-4 text-[11px] text-[#1a0dab]">
                        <span className="hover:underline cursor-pointer font-medium">Services</span>
                        <span className="hover:underline cursor-pointer font-medium">Pricing</span>
                        <span className="hover:underline cursor-pointer font-medium">Contact & Location</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-blue-50 border border-blue-100 p-3 text-xs text-blue-950 font-medium">
                      🔍 <strong>Honest SEO:</strong> I build clean semantic code, meta tags, and structured schema so Google and social networks accurately crawl and display your business. I provide the strongest foundation without promising unrealistic overnight rankings.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
