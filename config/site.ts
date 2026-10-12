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
    linkedin: "https://linkedin.com/in/bibekbhagat",
    github: "https://github.com/bibek1123",
    hackerrank: "https://hackerrank.com/bibek1123",
    leetcode: "https://leetcode.com/u/bibek1123",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://instagram.com/bibekbhagat.dev",
  },
} as const;

export const developerProfiles = [
  {
    name: "LinkedIn",
    handle: "in/bibekbhagat",
    url: "https://linkedin.com/in/bibekbhagat",
    label: "LinkedIn Profile",
    category: "Professional Network",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    handle: "bibek1123",
    url: "https://github.com/bibek1123",
    label: "GitHub Repositories",
    category: "Open Source Code",
    color: "#F3F4F6",
  },
  {
    name: "LeetCode",
    handle: "bibek1123",
    url: "https://leetcode.com/u/bibek1123",
    label: "LeetCode Profile",
    category: "Algorithms & DSA",
    color: "#FFA116",
  },
  {
    name: "HackerRank",
    handle: "bibek1123",
    url: "https://hackerrank.com/bibek1123",
    label: "HackerRank Profile",
    category: "Problem Solving",
    color: "#00EA64",
  },
] as const;

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
