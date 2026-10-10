"use client";

import Image from "next/image";
import Link from "next/link";
import { flagshipWork, moreWork } from "@/config/work";
import type { WorkSample } from "@/config/work";

// ─── Browser-frame wrapper ─────────────────────────────────────────────────
function BrowserFrame({
  src,
  alt,
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        background: "#E8E8EA",
      }}
    >
      {/* Minimal browser chrome */}
      <div
        style={{
          background: "#E8E8EA",
          height: "28px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "0 10px",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          flexShrink: 0,
        }}
      >
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF5F57" }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FEBC2E" }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#28C840" }} />
        <div style={{ flex: 1, marginLeft: "8px", height: "14px", background: "rgba(0,0,0,0.08)", borderRadius: "4px" }} />
      </div>
      {/* Screenshot */}
      <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes={sizes}
          priority={priority}
        />
      </div>
    </div>
  );
}

// ─── Mobile-frame wrapper ──────────────────────────────────────────────────
function MobileFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "160px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "2px solid rgba(0,0,0,0.12)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          background: "#1A1A1A",
        }}
      >
        {/* Phone notch */}
        <div style={{ background: "#1A1A1A", height: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "40px", height: "6px", borderRadius: "3px", background: "#333" }} />
        </div>
        {/* Screen */}
        <div style={{ position: "relative", aspectRatio: "9/19.5", overflow: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="160px"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Flagship project (editorial alternating layout) ──────────────────────
function FlagshipProject({
  sample,
  index,
}: {
  sample: WorkSample;
  index: number;
}) {
  const desktopSrc = `/work/previews/${sample.slug}-desktop.png`;
  const mobileSrc = `/work/previews/${sample.slug}-mobile.png`;
  const hasMobile = sample.flagship && index < 3;
  const isEven = index % 2 === 0;

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
      className="flagship-project"
    >
      {/* Project number + meta row */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
        <span
          style={{
            fontVariantNumeric: "tabular-nums",
            fontSize: "0.6875rem",
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: "rgba(0,0,0,0.18)",
          }}
        >
          {String(sample.number).padStart(2, "0")}
        </span>
        <div style={{ width: "40px", height: "1px", background: "rgba(0,0,0,0.1)", alignSelf: "center" }} />
        <span
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: sample.accentHex,
          }}
        >
          {sample.category}
        </span>
      </div>

      {/* Desktop content grid */}
      <div
        className="flagship-content"
        style={{
          display: "grid",
          gap: "3rem",
          alignItems: "center",
          gridTemplateColumns: isEven ? "2fr 3fr" : "3fr 2fr",
        }}
      >
        {/* Info side */}
        <div style={{ order: isEven ? 0 : 1 }}>
          <h3
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              fontWeight: 900,
              color: "#0D0D12",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "0.875rem",
            }}
          >
            {sample.brand}
          </h3>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(0,0,0,0.38)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "1.25rem",
            }}
          >
            {sample.location}
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "#3D3D4A",
              maxWidth: "380px",
              marginBottom: "2rem",
            }}
          >
            {sample.description}
          </p>
          <Link
            href={sample.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#0D0D12",
              textDecoration: "none",
              borderBottom: "2px solid currentColor",
              paddingBottom: "2px",
            }}
            aria-label={`View ${sample.brand} portfolio project`}
          >
            View Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Screenshot side */}
        <div
          style={{
            order: isEven ? 1 : 0,
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {/* Desktop browser */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <BrowserFrame
              src={desktopSrc}
              alt={`${sample.brand} website desktop preview`}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
          {/* Mobile device */}
          {hasMobile && (
            <MobileFrame
              src={mobileSrc}
              alt={`${sample.brand} website mobile preview`}
            />
          )}
        </div>
      </div>
    </article>
  );
}

// ─── More Work compact item ────────────────────────────────────────────────
function MoreWorkItem({ sample }: { sample: WorkSample }) {
  const desktopSrc = `/work/previews/${sample.slug}-desktop.png`;

  return (
    <Link
      href={sample.href}
      className="group more-work-item"
      style={{ display: "block", textDecoration: "none" }}
      aria-label={`View ${sample.brand} — ${sample.category} website`}
    >
      {/* Screenshot */}
      <div style={{ marginBottom: "1rem" }}>
        <BrowserFrame
          src={desktopSrc}
          alt={`${sample.brand} website preview`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
        />
      </div>

      {/* Info */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <div
            style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.35)",
              marginBottom: "0.375rem",
            }}
          >
            <span style={{ color: "rgba(0,0,0,0.18)", marginRight: "0.625rem" }}>{String(sample.number).padStart(2, "0")}</span>
            {sample.category}
          </div>
          <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0D0D12", letterSpacing: "-0.02em", margin: 0 }}>
            {sample.brand}
          </h3>
          <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.38)", marginTop: "0.25rem" }}>
            {sample.location}
          </p>
        </div>
        <div
          style={{
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: "#0D0D12",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            opacity: 0.5,
            transition: "opacity 0.2s",
          }}
          className="view-arrow"
        >
          View →
        </div>
      </div>
    </Link>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────
export function OurWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      style={{
        background: "#F6F5F3",
        paddingBottom: "6rem",
      }}
    >
      {/* ── SECTION INTRO ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.4)",
                marginBottom: "1rem",
              }}
            >
              Our Work
            </p>
            <h2
              id="work-heading"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 900,
                color: "#0D0D12",
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                margin: 0,
              }}
            >
              Selected Work
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "#5A5A6A",
              maxWidth: "420px",
            }}
          >
            Distinct websites designed for different kinds of Indian businesses. Explore each project to see the full experience.
          </p>
        </div>
      </div>

      {/* ── FLAGSHIP PROJECTS (1–3) ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {flagshipWork.map((sample, i) => (
          <FlagshipProject key={sample.slug} sample={sample} index={i} />
        ))}
      </div>

      {/* ── MORE WORK (4–10) ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem 0",
        }}
      >
        {/* More Work header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            paddingTop: "3rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
              fontWeight: 900,
              color: "#0D0D12",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            More Work
          </h2>
          <p style={{ fontSize: "0.8125rem", color: "rgba(0,0,0,0.4)" }}>
            04 – 10
          </p>
        </div>

        {/* 2-column grid */}
        <div
          className="more-work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))",
            gap: "3.5rem 2.5rem",
          }}
        >
          {moreWork.map((sample) => (
            <MoreWorkItem key={sample.slug} sample={sample} />
          ))}
        </div>
      </div>

      {/* ── Inline CSS for hover states & responsive ── */}
      <style>{`
        .more-work-item:hover .view-arrow {
          opacity: 1 !important;
        }

        @media (max-width: 900px) {
          .flagship-content {
            grid-template-columns: 1fr !important;
          }
          .flagship-content > * {
            order: unset !important;
          }
        }

        @media (max-width: 640px) {
          .more-work-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .more-work-item,
          .flagship-project * {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
