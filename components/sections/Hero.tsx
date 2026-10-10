"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  return (
    <section
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
      style={{ background: "#FAFAF8" }}
      aria-labelledby="hero-heading"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 90% 10%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div>
            {/* Price pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
              style={{ background: "rgba(99,102,241,0.05)", borderColor: "rgba(99,102,241,0.18)" }}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold" style={{ color: "#4338CA" }}>
                Starting at ₹6,999
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black tracking-tight leading-[1.05]"
              style={{ color: "#111118" }}
            >
              Professional Websites{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4338CA 0%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                for Indian Businesses
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: "#4B5563" }}>
              Modern, mobile-friendly websites for startups, local businesses, and MSMEs —
              professionally built without expensive agency pricing.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5 mt-7">
              {[
                { icon: "⚡", label: "Fast Delivery" },
                { icon: "💰", label: "Fixed Pricing" },
                { icon: "📱", label: "Mobile-First" },
              ].map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "#374151" }}
                >
                  <span aria-hidden="true">{signal.icon}</span>
                  {signal.label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <WhatsAppButton size="lg" ctaLocation="hero">
                Get a Free Quote
              </WhatsAppButton>
              <Link
                href="/#work"
                className="inline-flex items-center justify-center px-7 text-base font-semibold border rounded-lg transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                style={{ height: "52px", color: "#111118", borderColor: "#D1D5DB", background: "white" }}
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Real portfolio photo in browser chrome ── */}
          <div className="relative lg:pl-4" aria-hidden="true">
            {/* Browser mockup frame */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border"
              style={{ borderColor: "#E5E7EB" }}
            >
              {/* Chrome bar */}
              <div
                className="flex items-center gap-1.5 px-4 py-3 border-b"
                style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#FC8181" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FBBF24" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#6EE7B7" }} />
                <div
                  className="ml-3 flex-1 h-5 rounded-md flex items-center px-2"
                  style={{ background: "#F3F4F6" }}
                >
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>
                    bibekbhagat.dev/work/interior-design
                  </span>
                </div>
              </div>

              {/* Actual portfolio screenshot */}
              <div className="relative" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/work/images/interior-design-hero.jpg"
                  alt="Atelier Aura interior design website — luxury Indian living room with warm ivory tones and brass accents"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Floating price badge */}
            <div
              className="absolute -top-4 -left-4 sm:-left-8 bg-white rounded-xl shadow-lg border p-3 sm:p-4"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="text-2xl font-black" style={{ color: "#111118" }}>₹6,999</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: "#6B7280" }}>starting price</div>
            </div>

            {/* Floating "7 industries" badge */}
            <div className="absolute -bottom-3 -right-2 sm:-right-6 bg-indigo-600 text-white rounded-xl shadow-lg px-3 py-2 sm:px-4 sm:py-3">
              <div className="text-sm font-bold">7 Industries</div>
              <div className="text-xs opacity-80 mt-0.5">View showcase →</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
