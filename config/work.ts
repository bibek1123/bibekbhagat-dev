// =============================================================
// Work samples configuration — 10 Indian-business showcases
// High-fidelity showcase websites demonstrating commercial design quality.
// =============================================================

export interface WorkSample {
  slug: string;
  title: string;
  brand: string;
  category: string;
  location: string;
  description: string;
  shortDescription: string;
  href: string;
  accentHex: string;
  tags: string[];
  /** Path to high-res desktop screenshot */
  previewImage: string;
  previewImageAlt: string;
  /** Path to mobile screenshot */
  mobilePreview: string;
  mobilePreviewAlt: string;
  /** Display order number */
  number: number;
}

export const workSamples: WorkSample[] = [
  // ── 01 KAASNI ──────────────────────────────────────────────
  {
    slug: "ecommerce",
    title: "E-commerce / D2C Store",
    brand: "Kaasni",
    category: "E-commerce & D2C",
    location: "Pan-India",
    description:
      "An editorial direct-to-consumer skincare experience featuring rich collection curation, transparent ingredient storytelling, responsive slide-out cart, and intuitive mobile shopping workflows.",
    shortDescription:
      "Editorial D2C skincare experience with rich product discovery and slide-out cart UX.",
    href: "/work/ecommerce",
    accentHex: "#7B3F8A",
    tags: ["D2C Brand", "Product Showcase", "Commerce UX"],
    previewImage: "/work/previews/ecommerce-desktop.png",
    previewImageAlt: "Kaasni D2C skincare website — desktop store layout with product discovery and cart",
    mobilePreview: "/work/previews/ecommerce-mobile.png",
    mobilePreviewAlt: "Kaasni D2C skincare website — mobile shopping interface",
    number: 1,
  },
  // ── 02 ATELIER AURA ────────────────────────────────────────
  {
    slug: "interior-design",
    title: "Interior Design Studio",
    brand: "Atelier Aura",
    category: "Interior Design",
    location: "Bengaluru",
    description:
      "An architectural studio website for a high-end interior practice — spacious editorial project galleries, detailed design service breakdowns, and an effortless consultation enquiry journey.",
    shortDescription:
      "Spacious editorial portfolio and consultation layout for a premier interior design studio.",
    href: "/work/interior-design",
    accentHex: "#B8A082",
    tags: ["Architecture", "Editorial Portfolio", "Design Studio"],
    previewImage: "/work/previews/interior-design-desktop.png",
    previewImageAlt: "Atelier Aura interior design studio website — architectural portfolio layout",
    mobilePreview: "/work/previews/interior-design-mobile.png",
    mobilePreviewAlt: "Atelier Aura interior design studio website — mobile responsive layout",
    number: 2,
  },
  // ── 03 PURESMILE DENTAL ────────────────────────────────────
  {
    slug: "dental-clinic",
    title: "Dental Clinic",
    brand: "PureSmile Dental",
    category: "Healthcare",
    location: "Chandigarh",
    description:
      "A welcoming, reassurance-driven clinic website featuring clear treatment pathways, patient care guides, modern clinic photography presentation, and a frictionless appointment booking call-to-action.",
    shortDescription:
      "Reassurance-focused clinic website with clean treatment pathways and prominent appointment CTA.",
    href: "/work/dental-clinic",
    accentHex: "#0D7A8A",
    tags: ["Healthcare", "Treatment Guides", "Online Booking"],
    previewImage: "/work/previews/dental-clinic-desktop.png",
    previewImageAlt: "PureSmile Dental clinic website — modern healthcare layout with appointment booking",
    mobilePreview: "/work/previews/dental-clinic-mobile.png",
    mobilePreviewAlt: "PureSmile Dental clinic website — mobile appointment booking interface",
    number: 3,
  },
  // ── 04 ARISE GLOBAL INSTITUTE ──────────────────────────────
  {
    slug: "ielts-study-abroad",
    title: "IELTS & Study Abroad",
    brand: "Arise Global Institute",
    category: "Education & Coaching",
    location: "Ludhiana",
    description:
      "A structured education consultancy website presenting international study destinations, course test preparation tracks, student visa steps, and a high-converting free counselling application flow.",
    shortDescription:
      "Bold educational institute website presenting course pathways, study destinations, and counselling capture.",
    href: "/work/ielts-study-abroad",
    accentHex: "#2A3FBF",
    tags: ["Education", "Study Abroad", "Lead Generation"],
    previewImage: "/work/previews/ielts-study-abroad-desktop.png",
    previewImageAlt: "Arise Global Institute website — study abroad pathways and course counselling",
    mobilePreview: "/work/previews/ielts-study-abroad-mobile.png",
    mobilePreviewAlt: "Arise Global Institute website — mobile counselling form",
    number: 4,
  },
  // ── 05 VELVET ROOM STUDIO ──────────────────────────────────
  {
    slug: "beauty-salon",
    title: "Salon & Beauty Studio",
    brand: "Velvet Room Studio",
    category: "Beauty & Wellness",
    location: "Gurugram",
    description:
      "A fashion-editorial luxury salon experience featuring signature service menus, transparent treatment pricing guides, ambiance gallery highlights, and one-tap appointment scheduling.",
    shortDescription:
      "Fashion-editorial salon website with transparent treatment menus and instant booking.",
    href: "/work/beauty-salon",
    accentHex: "#C8A97A",
    tags: ["Luxury Salon", "Service Menus", "Direct Booking"],
    previewImage: "/work/previews/beauty-salon-desktop.png",
    previewImageAlt: "Velvet Room Studio website — luxury beauty salon editorial layout",
    mobilePreview: "/work/previews/beauty-salon-mobile.png",
    mobilePreviewAlt: "Velvet Room Studio website — mobile treatment menu and booking",
    number: 5,
  },
  // ── 06 FIXKARO ─────────────────────────────────────────────
  {
    slug: "home-services",
    title: "Home Services",
    brand: "FixKaro",
    category: "Home Services",
    location: "Pune",
    description:
      "A conversion-optimized local services website with transparent service menus, upfront diagnostic pricing, coverage area map, and instant quote enquiry workflows.",
    shortDescription:
      "Conversion-first local home services website with clear pricing tiers and lead capture.",
    href: "/work/home-services",
    accentHex: "#F59E0B",
    tags: ["Local Services", "Pricing Tiers", "Instant Booking"],
    previewImage: "/work/previews/home-services-desktop.png",
    previewImageAlt: "FixKaro home services website — service catalog and booking interface",
    mobilePreview: "/work/previews/home-services-mobile.png",
    mobilePreviewAlt: "FixKaro home services website — mobile lead capture view",
    number: 6,
  },
  // ── 07 ROSHNI STATIONERY & PRINT ───────────────────────────
  {
    slug: "stationery-printing",
    title: "Stationery & Print Shop",
    brand: "Roshni Stationery & Print",
    category: "Retail & Print Services",
    location: "Delhi",
    description:
      "A practical retail and corporate printing website with structured product catalogs, transparent printing rate cards, bulk order specification forms, and direct WhatsApp ordering.",
    shortDescription:
      "Organized retail and commercial printing storefront with bulk quoting and WhatsApp ordering.",
    href: "/work/stationery-printing",
    accentHex: "#D97706",
    tags: ["Retail", "Print Rate Cards", "WhatsApp Ordering"],
    previewImage: "/work/previews/stationery-printing-desktop.png",
    previewImageAlt: "Roshni Stationery & Print website — catalog and printing rate card layout",
    mobilePreview: "/work/previews/stationery-printing-mobile.png",
    mobilePreviewAlt: "Roshni Stationery & Print website — mobile ordering workflow",
    number: 7,
  },
  // ── 08 DHRUV PRECISION COMPONENTS ──────────────────────────
  {
    slug: "manufacturing",
    title: "Industrial Manufacturer",
    brand: "Dhruv Precision Components",
    category: "Manufacturing & B2B",
    location: "Rajkot",
    description:
      "A technical corporate B2B website showcasing precision fastener catalogs, engineering tolerance specifications, facility machinery capabilities, and direct RFQ lead generation.",
    shortDescription:
      "Corporate industrial manufacturer website with technical specs, catalog, and RFQ workflows.",
    href: "/work/manufacturing",
    accentHex: "#EA580C",
    tags: ["B2B Industrial", "Engineering Specs", "RFQ Workflow"],
    previewImage: "/work/previews/manufacturing-desktop.png",
    previewImageAlt: "Dhruv Precision Components website — industrial product catalog and specs",
    mobilePreview: "/work/previews/manufacturing-mobile.png",
    mobilePreviewAlt: "Dhruv Precision Components website — mobile RFQ interface",
    number: 8,
  },
  // ── 09 THE EMBER ROOM ──────────────────────────────────────
  {
    slug: "restaurant",
    title: "Restaurant & Hospitality",
    brand: "The Ember Room",
    category: "Hospitality & Dining",
    location: "Mumbai",
    description:
      "An atmospheric dining experience with live-fire culinary highlights, interactive à la carte menus, private dining information, and integrated table reservation capture.",
    shortDescription:
      "Atmospheric hospitality website with live-fire culinary menus and table reservation booking.",
    href: "/work/restaurant",
    accentHex: "#D97706",
    tags: ["Hospitality", "Interactive Menu", "Table Booking"],
    previewImage: "/work/previews/restaurant-desktop.png",
    previewImageAlt: "The Ember Room restaurant website — immersive dining menu and reservation layout",
    mobilePreview: "/work/previews/restaurant-mobile.png",
    mobilePreviewAlt: "The Ember Room restaurant website — mobile reservation interface",
    number: 9,
  },
  // ── 10 ARYA PROPERTIES ─────────────────────────────────────
  {
    slug: "real-estate",
    title: "Real Estate & Property",
    brand: "Arya Properties",
    category: "Real Estate & Property",
    location: "Bengaluru · Hyderabad · Goa",
    description:
      "A sophisticated real estate development website highlighting luxury residential towers, interactive 2–4 BHK floor plans, architectural amenities, and site-visit scheduling.",
    shortDescription:
      "Premium property developer showcase with architectural project galleries and visit scheduling.",
    href: "/work/real-estate",
    accentHex: "#0D9488",
    tags: ["Real Estate", "Floor Plans", "Site Visit Booking"],
    previewImage: "/work/previews/real-estate-desktop.png",
    previewImageAlt: "Arya Properties website — luxury property listings and site visit scheduler",
    mobilePreview: "/work/previews/real-estate-mobile.png",
    mobilePreviewAlt: "Arya Properties website — mobile project inquiry view",
    number: 10,
  },
];

/** Top 5 projects featured in Hero showcase */
export const heroFeaturedProjects = [
  workSamples[0], // Kaasni (Ecommerce)
  workSamples[1], // Atelier Aura (Interior Design)
  workSamples[2], // PureSmile (Dental)
  workSamples[8], // The Ember Room (Restaurant)
  workSamples[9], // Arya Properties (Real Estate)
];
