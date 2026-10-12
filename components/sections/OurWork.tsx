"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { workSamples } from "@/config/work";
import { trackWorkSampleView } from "@/lib/analytics";

export function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const total = workSamples.length;
  const current = workSamples[activeIndex];

  const goToSlide = useCallback((index: number) => {
    const nextIdx = (index + total) % total;
    setActiveIndex(nextIdx);
    trackWorkSampleView({
      work_sample: workSamples[nextIdx].slug,
      category: workSamples[nextIdx].category,
    });
  }, [total]);

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) nextSlide();
    else if (diff < -40) prevSlide();
    setTouchStart(null);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 md:py-32 bg-[#F5F4F0] relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Subtle decorative background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10 mb-10 md:mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-300/70">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 m-0">
                10 Showcase Websites · Built for Indian Businesses
              </p>
            </div>
            <h2
              id="work-heading"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight m-0"
            >
              Selected Work
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
              Browse complete websites built across 10 commercial categories.
              Click any project to inspect the full design, responsiveness, and conversion flow.
            </p>
          </div>
        </div>

        {/* Quick project tabs selector (Pills) */}
        <div className="mt-6 -mx-4 px-4 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-1.5 min-w-max" role="tablist" aria-label="Projects list">
            {workSamples.map((sample, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={sample.slug}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => goToSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-gray-950 text-white border-gray-950 shadow-sm"
                      : "bg-white/80 hover:bg-white text-gray-600 border-gray-200/90 hover:text-gray-900"
                  }`}
                >
                  <span className="opacity-50 mr-1.5 font-mono">
                    {String(sample.number).padStart(2, "0")}
                  </span>
                  {sample.brand}
                </button>
              );
            })}
          </div>
        </div>
      </Container>

      {/* ── MAIN HORIZONTAL SHOWCASE STAGE ── */}
      <div
        className="w-full relative px-4 sm:px-6 lg:px-8 max-w-[1520px] mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="relative rounded-2xl md:rounded-3xl bg-white border border-gray-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-6 sm:p-8 lg:p-12 transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ── Left Column: Project Overview & Specs ── */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: current.accentHex }}
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      {current.category}
                    </span>
                  </div>
                  <span className="text-sm font-black font-mono text-gray-400">
                    {String(current.number).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.05] m-0">
                  {current.brand}
                </h3>

                {/* Location indicator */}
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-2 mb-4">
                  {current.location}
                </p>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed mt-2 mb-6 max-w-lg">
                  {current.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Navigation */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-indigo-600 text-white font-bold text-sm shadow-md transition-all duration-200 group text-decoration-none"
                >
                  <span>View Live Showcase</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                {/* Direct Previous / Next Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous showcase project"
                    className="w-10 h-10 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next showcase project"
                    className="w-10 h-10 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors cursor-pointer shadow-2xs"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Right Column: Large Browser Frame + Overlapping Mobile Frame ── */}
            <div className="lg:col-span-7 relative">
              <div className="relative mx-auto max-w-full">
                {/* Desktop Browser Mockup */}
                <div className="rounded-xl overflow-hidden border border-gray-900/10 bg-gray-900 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  {/* Chrome header */}
                  <div className="h-8 bg-[#222329] border-b border-white/10 flex items-center justify-between px-3.5 select-none shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 max-w-[280px] sm:max-w-[360px] mx-3 h-5 bg-black/40 rounded-md border border-white/10 flex items-center px-2.5">
                      <span className="text-[10px] text-gray-300 font-mono truncate">
                        bibekbhagat.dev{current.href}
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider hidden sm:block">
                      1440 × 900
                    </div>
                  </div>

                  {/* Screenshot display container */}
                  <Link
                    href={current.href}
                    className="block relative aspect-[16/10] w-full bg-gray-950 overflow-hidden cursor-pointer group"
                    aria-label={`Open ${current.brand} live website`}
                  >
                    <Image
                      src={current.previewImage}
                      alt={current.previewImageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 840px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-lg bg-gray-950/90 text-white font-bold text-xs backdrop-blur-sm shadow-md">
                        Explore {current.brand} →
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Overlapping Mobile Device Mockup */}
                <div className="absolute -bottom-5 right-0 sm:-bottom-7 sm:-right-5 w-[110px] sm:w-[145px] md:w-[160px] z-20 rounded-[20px] sm:rounded-[26px] overflow-hidden border-[3px] sm:border-[4px] border-gray-950 bg-gray-950 shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
                  <div className="h-3 sm:h-4 bg-gray-950 flex items-center justify-center shrink-0">
                    <div className="w-8 sm:w-10 h-1 sm:h-1.5 rounded-full bg-gray-800" />
                  </div>
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-black">
                    <Image
                      src={current.mobilePreview}
                      alt={current.mobilePreviewAlt}
                      fill
                      sizes="180px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
              />
            </div>
            <div className="shrink-0 text-xs font-bold text-gray-500 font-mono">
              Project {activeIndex + 1} of {total}
            </div>
          </div>
        </div>

        {/* Next project teaser pill at bottom */}
        <div className="mt-6 flex items-center justify-between px-2 text-xs text-gray-500">
          <span>
            Upcoming next:{" "}
            <button
              type="button"
              onClick={nextSlide}
              className="font-bold text-gray-900 underline hover:text-indigo-600 cursor-pointer bg-transparent border-0 p-0 ml-1"
            >
              {workSamples[(activeIndex + 1) % total].brand} (
              {workSamples[(activeIndex + 1) % total].category})
            </button>
          </span>
          <span className="hidden sm:inline">Use ← → arrow keys or swipe to navigate</span>
        </div>
      </div>
    </section>
  );
}
