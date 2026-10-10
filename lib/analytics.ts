"use client";

// =============================================================
// Analytics event tracking — GA4 + Meta Pixel
// Gracefully no-ops if IDs are not configured.
// =============================================================

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// GA4 event
function trackGA4(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// Meta Pixel event
function trackPixel(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
}

// =============================================================
// Typed conversion events
// =============================================================

export function trackWhatsAppClick(params?: {
  cta_location?: string;
  package?: string;
}) {
  trackGA4("whatsapp_click", params);
  trackPixel("Contact", params);
}

export function trackPricingCtaClick(params?: {
  cta_location?: string;
  package?: string;
}) {
  trackGA4("pricing_cta_click", params);
  trackPixel("InitiateCheckout", params);
}

export function trackWorkSampleView(params?: {
  work_sample?: string;
  category?: string;
}) {
  trackGA4("work_sample_view", params);
}

export function trackContactSubmit(params?: { form_location?: string }) {
  trackGA4("contact_submit", params);
  trackPixel("Lead", params);
}
