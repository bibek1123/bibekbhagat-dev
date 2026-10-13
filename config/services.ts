// =============================================================
// Services / Features configuration
// =============================================================

export interface ServiceFeature {
  icon: string; // emoji or SVG path name
  title: string;
  description: string;
}

export const coreFeatures: ServiceFeature[] = [
  {
    icon: "monitor",
    title: "Responsive Design",
    description:
      "Your website looks polished and professional on every screen — desktop, tablet, and mobile.",
  },
  {
    icon: "smartphone",
    title: "Mobile Friendly",
    description:
      "Designed mobile-first so your customers get a great experience wherever they are.",
  },
  {
    icon: "message-circle",
    title: "WhatsApp Integration",
    description:
      "A WhatsApp button lets customers reach you instantly — the way they prefer to communicate.",
  },
  {
    icon: "phone",
    title: "Click-to-Call",
    description:
      "One tap on mobile calls your business directly. No friction, no lost leads.",
  },
  {
    icon: "mail",
    title: "Contact / Enquiry Form",
    description:
      "Capture enquiries 24/7 with a clean, simple form that lands in your inbox.",
  },
  {
    icon: "map-pin",
    title: "Google Maps",
    description:
      "Show customers exactly where you are with an embedded map — great for walk-in businesses.",
  },
  {
    icon: "search",
    title: "Basic On-Page SEO",
    description:
      "Your website is structured so search engines can find and understand your business.",
  },
  {
    icon: "zap",
    title: "Fast Performance",
    description:
      "Optimized for speed so visitors don't leave before your page loads.",
  },
  {
    icon: "globe",
    title: "Domain Connection",
    description:
      "We connect your domain to your new website so everything works seamlessly.",
  },
  {
    icon: "lock",
    title: "SSL / HTTPS",
    description:
      "Your website loads securely — the padlock customers look for when they trust a business.",
  },
];

export const addOnCategories = [
  {
    icon: "shopping-bag",
    title: "Ecommerce",
    description: "Sell products online with a full shopping cart and checkout experience.",
  },
  {
    icon: "calendar",
    title: "Appointment Booking",
    description: "Let customers book appointments directly from your website.",
  },
  {
    icon: "credit-card",
    title: "Payment Integration",
    description: "Accept payments online through Razorpay, PayU, or UPI integrations.",
  },
  {
    icon: "file-plus",
    title: "Additional Pages",
    description: "Need more than your package includes? I can quote extra pages individually.",
  },
  {
    icon: "settings",
    title: "Custom Functionality",
    description: "Custom calculators, portals, integrations — I can build custom solutions for your business.",
  },
];
