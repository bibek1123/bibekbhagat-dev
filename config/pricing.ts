// =============================================================
// Pricing packages configuration
// =============================================================

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  badge?: string;
  description: string;
  features: string[];
  cta: string;
  whatsappMessageKey: "starterMessage" | "businessMessage";
  highlighted: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹6,999",
    priceNumeric: 6999,
    description:
      "A clean, professional website to get your business online and looking great.",
    features: [
      "1–3 pages",
      "Professional responsive design",
      "Mobile optimized",
      "WhatsApp call-to-action",
      "Click-to-call button",
      "Contact / enquiry form",
      "Google Maps embed",
      "Basic on-page SEO",
      "Domain connection",
      "SSL / HTTPS setup",
      "1 revision round",
    ],
    cta: "Get Started",
    whatsappMessageKey: "starterMessage",
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    price: "₹12,999",
    priceNumeric: 12999,
    badge: "Most Popular",
    description:
      "A fully customized website with more pages, deeper content, and built-in analytics setup.",
    features: [
      "Up to 5 pages",
      "Everything in Starter",
      "More customized layout & design",
      "Additional business sections",
      "Google Analytics setup",
      "Google Search Console setup",
      "Expanded content presentation",
      "2 revision rounds",
    ],
    cta: "Get Started",
    whatsappMessageKey: "businessMessage",
    highlighted: true,
  },
];

export const pricingNotes = [
  "50% advance to start. Remaining 50% before launch.",
  "Domain registration, paid hosting, premium assets, and functionality outside the package scope may cost extra.",
  "All prices are quoted in Indian Rupees (₹).",
];

export const addOnServices = [
  "Ecommerce / online store",
  "Appointment & booking functionality",
  "Payment gateway integration",
  "Additional pages beyond package",
  "Advanced or multi-step forms",
  "Custom integrations",
  "Custom backend functionality",
];
