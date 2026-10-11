"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { navLinks } from "@/config/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Prevent scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/98 backdrop-blur-sm border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                textDecoration: "none",
              }}
              aria-label="Bibek Bhagat — Home"
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "7px",
                  background: "#4F46E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: "0.875rem",
                    lineHeight: 1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  B
                </span>
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "0.9375rem",
                  color: "#0D0D12",
                  letterSpacing: "-0.02em",
                }}
              >
                Bibek Bhagat
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center"
              style={{ gap: "0.125rem" }}
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#4B5563",
                    textDecoration: "none",
                    borderRadius: "6px",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <WhatsAppButton
                size="sm"
                ctaLocation="header"
                showIcon={false}
              >
                Get a Free Quote
              </WhatsAppButton>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer border-0 bg-transparent"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <nav
        className={cn(
          "fixed top-[60px] left-0 right-0 z-40 bg-white border-b border-gray-100 md:hidden transition-all duration-250",
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <Container className="py-4">
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 0.75rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#374151",
                    textDecoration: "none",
                    borderRadius: "8px",
                  }}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #F3F4F6" }}>
            <WhatsAppButton
              size="lg"
              ctaLocation="mobile_header"
              className="w-full justify-center"
            >
              Get a Free Quote
            </WhatsAppButton>
          </div>
        </Container>
      </nav>

      <style>{`
        .nav-link:hover {
          color: #0D0D12 !important;
          background: rgba(0,0,0,0.04) !important;
        }
        .mobile-nav-link:hover {
          background: rgba(79,70,229,0.05) !important;
          color: #4F46E5 !important;
        }
      `}</style>
    </>
  );
}
