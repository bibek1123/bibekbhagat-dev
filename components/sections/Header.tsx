"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { navLinks } from "@/config/site";
import { SocialLinksRow } from "@/components/ui/SocialIcons";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "bg-white/85 backdrop-blur-sm"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-14" : "h-16"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-decoration-none group"
              aria-label="Bibek Bhagat — Professional Websites for Indian Businesses"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <span className="text-white font-black text-sm tracking-tight leading-none">
                  B
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[0.9375rem] text-gray-900 tracking-tight leading-snug">
                  Bibek Bhagat
                </span>
                <span className="text-[0.625rem] text-gray-500 font-semibold tracking-wider uppercase -mt-0.5">
                  Websites for Business
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/4 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA & Socials */}
            <div className="hidden md:flex items-center gap-2.5">
              <SocialLinksRow size="sm" theme="light" />
              <div className="h-4 w-px bg-gray-200 mx-0.5" aria-hidden="true" />
              <WhatsAppButton
                size="sm"
                ctaLocation="header"
                showIcon={true}
                className="font-semibold"
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
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
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
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <nav
        className={`fixed top-[56px] left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-gray-100 md:hidden transition-all duration-300 shadow-xl ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <Container className="py-5">
          <ul className="m-0 p-0 list-none flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-3.5 py-2.5 text-base font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-gray-400 text-sm font-normal">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <WhatsAppButton
              size="lg"
              ctaLocation="mobile_header"
              className="w-full justify-center"
            >
              Get a Free Quote
            </WhatsAppButton>

            {/* Direct Developer Profiles Row in Mobile Menu */}
            <div className="flex flex-col items-center gap-2 pt-2 border-t border-gray-100">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                Direct Developer Profiles
              </span>
              <SocialLinksRow size="md" theme="light" />
            </div>

            <p className="text-center text-xs text-gray-400 m-0">
              Direct conversation with Bibek · Starting ₹6,999
            </p>
          </div>
        </Container>
      </nav>
    </>
  );
}
