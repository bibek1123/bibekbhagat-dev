// =============================================================
// Site-wide configuration — single source of truth
// =============================================================

export const siteConfig = {
  name: "Bibek Bhagat",
  tagline: "Professional Websites for Indian Businesses",
  description:
    "Modern, mobile-friendly websites for startups, local businesses, and MSMEs — professionally built without expensive agency pricing. Starting at ₹6,999.",
  url: "https://bibekbhagat.dev",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@bibekbhagat.dev",
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://instagram.com/bibekbhagat.dev",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  },
} as const;

// WhatsApp configuration
// number is empty string when NEXT_PUBLIC_WHATSAPP_NUMBER is not configured.
// Consumers must check isWhatsAppConfigured() before building wa.me links.
export const whatsappConfig = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  defaultMessage:
    "Hi Bibek, I'm interested in a website for my business.",
  starterMessage:
    "Hi Bibek, I'm interested in the ₹6,999 Starter website package.",
  businessMessage:
    "Hi Bibek, I'm interested in the ₹12,999 Business website package.",
  customMessage:
    "Hi Bibek, I'd like to discuss a custom website requirement.",
} as const;

/** True only when a real WhatsApp number has been set via environment variable. */
export function isWhatsAppConfigured(): boolean {
  return (
    typeof process.env.NEXT_PUBLIC_WHATSAPP_NUMBER === "string" &&
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.trim().length > 0
  );
}

// Analytics configuration
export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
} as const;

// Navigation links
export const navLinks = [
  { label: "Our Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
] as const;

// Footer navigation
export const footerLinks = {
  main: [
    { label: "Our Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "How It Works", href: "/#process" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
