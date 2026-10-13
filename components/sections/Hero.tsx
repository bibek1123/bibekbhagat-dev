"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { heroFeaturedProjects } from "@/config/work";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeProject = heroFeaturedProjects[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroFeaturedProjects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroFeaturedProjects.length - 1 : prev - 1
    );
  }, []);

  // Cycle slides every 5.5 seconds unless paused or reduced motion
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isPaused || prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide();
      setIsPaused(true);
    } else if (e.key === "ArrowLeft") {
      prevSlide();
      setIsPaused(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
      setIsPaused(true);
    } else if (diff < -50) {
      prevSlide();
      setIsPaused(true);
    }
    setTouchStart(null);
  };

  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-[#FAFAF8]"
      aria-labelledby="hero-heading"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Subtle architectural dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#111827 1px, transparent 1px), radial-gradient(#111827 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />

      {/* Ambient background glow matching active project accent */}
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl transition-all duration-1000 ease-out opacity-20"
        style={{
          background: `radial-gradient(circle, ${activeProject.accentHex} 0%, transparent 70%)`,
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── LEFT COLUMN: Value Proposition & Clear Offer ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Price badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/70 w-fit mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse shrink-0" />
              <span className="text-xs font-bold text-indigo-900 tracking-wide">
                Professional Websites · Starting at ₹6,999
              </span>
            </div>

            {/* Main H1 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-gray-950 tracking-tight leading-[1.1] m-0"
            >
              Professional websites that make your business{" "}
              <span className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                look established.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              Modern, mobile-first websites crafted for Indian businesses — clinics,
              salons, interior designers, stores, and local enterprises.
              Direct with developer. No agency markups.
            </p>

            {/* Primary CTAs */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                size="lg"
                ctaLocation="hero_primary"
                className="font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Get a Free Quote →
              </WhatsAppButton>

              <Link
                href="/#work"
                className="inline-flex items-center justify-center h-13 px-6 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg shadow-2xs hover:border-gray-400 transition-colors text-decoration-none"
              >
                View Selected Work
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-7 pt-5 border-t border-gray-200/80 flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" className="shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast Delivery: Starter (1–2 Days) · Business (3–5 Days)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" className="shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Fixed Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" className="shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Mobile Optimized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5" className="shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Direct With Developer</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: High-Impact Layered Portfolio Showcase ── */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Visual Stage Container with Subtle Perspective */}
            <div className="relative mx-auto max-w-[620px] lg:max-w-none">
              {/* Background stacked depth card (giving rich layered feel) */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-[90%] h-[90%] rounded-2xl bg-gradient-to-br from-gray-200/60 to-gray-300/40 border border-gray-300/50 shadow-sm pointer-events-none transform rotate-1 scale-[0.98] transition-all duration-700"
              />

              {/* Main Desktop Browser Frame */}
              <div className="relative rounded-xl overflow-hidden border border-gray-900/10 bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-500">
                {/* Browser top chrome */}
                <div className="h-8 bg-[#222329] border-b border-white/10 flex items-center justify-between px-3.5 select-none shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 max-w-[320px] mx-3 h-5 bg-black/40 rounded-md border border-white/10 flex items-center px-2.5">
                    <span className="text-[10px] text-gray-300 font-mono truncate">
                      bibekbhagat.dev{activeProject.href}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold">Live Preview</span>
                  </div>
                </div>

                {/* Desktop Screenshot display area */}
                <div className="relative aspect-[16/10] w-full bg-gray-950 overflow-hidden group">
                  {heroFeaturedProjects.map((project, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <div
                        key={project.slug}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          isActive
                            ? "opacity-100 scale-100 z-10"
                            : "opacity-0 scale-[1.02] pointer-events-none z-0"
                        }`}
                      >
                        <Image
                          src={project.previewImage}
                          alt={project.previewImageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          priority={idx === 0}
                          className="object-cover object-top"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Overlapping Mobile Smartphone Mockup */}
              <div
                className="absolute -bottom-6 right-0 sm:-bottom-8 sm:-right-4 w-[110px] sm:w-[150px] md:w-[165px] z-20 rounded-[20px] sm:rounded-[28px] overflow-hidden border-[3px] sm:border-[4px] border-gray-950 bg-gray-950 shadow-[0_24px_45px_rgba(0,0,0,0.25)] transition-all duration-500"
              >
                {/* Phone Speaker Notch */}
                <div className="h-3 sm:h-4 bg-gray-950 flex items-center justify-center shrink-0">
                  <div className="w-8 sm:w-10 h-1 sm:h-1.5 rounded-full bg-gray-800" />
                </div>
                {/* Mobile screen */}
                <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-black">
                  {heroFeaturedProjects.map((project, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <div
                        key={`m-${project.slug}`}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          isActive
                            ? "opacity-100 scale-100 z-10"
                            : "opacity-0 scale-[1.03] pointer-events-none z-0"
                        }`}
                      >
                        <Image
                          src={project.mobilePreview}
                          alt={project.mobilePreviewAlt}
                          fill
                          sizes="180px"
                          priority={idx === 0}
                          className="object-cover object-top"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Showcase Meta Card (Bottom Left Floating Badge) */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3 sm:p-4 max-w-[240px] sm:max-w-[280px]">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: activeProject.accentHex }}
                  />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 truncate">
                    {activeProject.category}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight m-0 truncate">
                    {activeProject.brand}
                  </h2>
                  <Link
                    href={activeProject.href}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 shrink-0 text-decoration-none"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>

            {/* Carousel Controls & Slide Indicators */}
            <div className="mt-10 sm:mt-12 flex items-center justify-between gap-4 px-2">
              {/* Slide Dots / Pill Indicators */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Featured projects">
                {heroFeaturedProjects.map((project, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={project.slug}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Show ${project.brand} (${project.category})`}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsPaused(true);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${
                        isActive
                          ? "w-8 bg-indigo-600"
                          : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Prev / Next Chevrons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    prevSlide();
                    setIsPaused(true);
                  }}
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Previous project"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    nextSlide();
                    setIsPaused(true);
                  }}
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Next project"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
