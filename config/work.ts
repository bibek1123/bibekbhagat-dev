// =============================================================
// Work samples configuration — 10 Indian-business showcases
// All brands are fictional, created for portfolio demonstration.
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
  /** Path to hero preview image used in OurWork cards. Local /public path or full URL. */
  previewImage: string;
  previewImageAlt: string;
  /** Flagship: shown with editorial treatment at top of Our Work */
  flagship?: boolean;
  /** Display order number */
  number: number;
}

export const workSamples: WorkSample[] = [
  // ── FLAGSHIP 1 ─────────────────────────────────────────────
  {
    slug: "ecommerce",
    title: "E-commerce / D2C Store",
    brand: "Kaasni",
    category: "E-commerce",
    location: "Pan-India",
    description:
      "A premium D2C skincare storefront — editorial commerce hero, product collections, ingredient transparency, cart experience, and a full mobile shopping UX. Quoted separately from standard business packages.",
    shortDescription: "Premium Indian D2C skincare brand — full commerce experience with cart and product discovery.",
    href: "/work/ecommerce",
    accentHex: "#7B3F8A",
    tags: ["E-commerce", "D2C", "Commerce UX"],
    previewImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop",
    previewImageAlt: "Premium skincare products on a clean minimalist surface — D2C brand editorial",
    flagship: true,
    number: 1,
  },
  // ── FLAGSHIP 2 ─────────────────────────────────────────────
  {
    slug: "interior-design",
    title: "Interior Design Studio",
    brand: "Atelier Aura",
    category: "Interior Design",
    location: "Bengaluru",
    description:
      "An architectural, editorial website for a premium interior design studio — spacious layout, project portfolio, services, and a studio consultation CTA.",
    shortDescription: "Editorial premium website for an interior design studio in Bengaluru.",
    href: "/work/interior-design",
    accentHex: "#B8A082",
    tags: ["Portfolio", "Services", "Contact"],
    previewImage: "/work/images/interior-design-hero.jpg",
    previewImageAlt: "Luxury modern Indian living room interior with warm ivory tones and brass accents",
    flagship: true,
    number: 2,
  },
  // ── FLAGSHIP 3 ─────────────────────────────────────────────
  {
    slug: "dental-clinic",
    title: "Dental Clinic",
    brand: "PureSmile Dental",
    category: "Healthcare",
    location: "Chandigarh",
    description:
      "A clean, trustworthy website for a modern dental clinic — featuring treatments, team profiles, clinic hours, and a prominent book-appointment CTA.",
    shortDescription: "Professional, appointment-focused website for a dental clinic in Chandigarh.",
    href: "/work/dental-clinic",
    accentHex: "#0D7A8A",
    tags: ["Healthcare", "Appointments", "Treatments"],
    previewImage: "/work/images/dental-clinic-hero.jpg",
    previewImageAlt: "Modern dental clinic treatment room with teal and white palette",
    flagship: true,
    number: 3,
  },
  // ── MORE WORK ──────────────────────────────────────────────
  {
    slug: "ielts-study-abroad",
    title: "IELTS & Study Abroad",
    brand: "Arise Global Institute",
    category: "Education",
    location: "Ludhiana",
    description:
      "An ambitious, bold website for an IELTS coaching and study abroad counselling institute — destinations, courses, process, and free counselling CTA.",
    shortDescription: "Ambitious education website for an IELTS & study abroad institute in Ludhiana.",
    href: "/work/ielts-study-abroad",
    accentHex: "#2A3FBF",
    tags: ["Education", "IELTS", "Study Abroad"],
    previewImage: "/work/images/ielts-hero.jpg",
    previewImageAlt: "Indian student studying at a desk with world map and international context",
    number: 4,
  },
  {
    slug: "beauty-salon",
    title: "Salon & Beauty Studio",
    brand: "Velvet Room Studio",
    category: "Beauty & Wellness",
    location: "Gurugram",
    description:
      "A fashion-editorial website for a premium salon — full-black hero, service menu with pricing, booking CTA, and a studio-personality brand.",
    shortDescription: "Fashion-editorial website for a luxury beauty studio in Gurugram.",
    href: "/work/beauty-salon",
    accentHex: "#C8A97A",
    tags: ["Beauty", "Services", "Appointments"],
    previewImage: "/work/images/beauty-salon-hero.jpg",
    previewImageAlt: "Sleek luxury beauty salon interior with black and gold tones, arched mirrors",
    number: 5,
  },
  {
    slug: "home-services",
    title: "Home Services",
    brand: "FixKaro",
    category: "Home Services",
    location: "Pune",
    description:
      "A conversion-focused website for a home services company — service list, sample pricing, area coverage, and an inline contact CTA that demonstrates the enquiry flow.",
    shortDescription: "Conversion-first home services website with service listing and lead-gen layout in Pune.",
    href: "/work/home-services",
    accentHex: "#F59E0B",
    tags: ["Local Business", "Services", "Lead Gen"],
    previewImage: "/work/images/home-services-hero.jpg",
    previewImageAlt: "Professional technician servicing an air conditioner in a clean Indian home",
    number: 6,
  },
  {
    slug: "stationery-printing",
    title: "Stationery & Print Shop",
    brand: "Roshni Stationery & Print",
    category: "Retail",
    location: "Delhi",
    description:
      "A modern retail website for a stationery and printing store — category browsing, printing price list, bulk order enquiry, and WhatsApp ordering.",
    shortDescription: "Organised retail website for a stationery and print store in Delhi.",
    href: "/work/stationery-printing",
    accentHex: "#F5C518",
    tags: ["Retail", "Printing", "WhatsApp Order"],
    previewImage:
      "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=900&q=80&auto=format&fit=crop",
    previewImageAlt: "Neatly arranged desk stationery — notebooks, pens, and office supplies",
    number: 7,
  },
  {
    slug: "manufacturing",
    title: "Industrial Manufacturer",
    brand: "Dhruv Precision Components",
    category: "Manufacturing",
    location: "Rajkot",
    description:
      "A corporate B2B website for an industrial fastener manufacturer — product families, technical specs, capabilities, industries served, and RFQ.",
    shortDescription: "Corporate B2B website for an industrial fastener manufacturer in Rajkot.",
    href: "/work/manufacturing",
    accentHex: "#E8601C",
    tags: ["B2B", "Manufacturing", "Industrial"],
    previewImage:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80&auto=format&fit=crop",
    previewImageAlt: "Precision industrial steel bolts and fasteners on a dark metal surface",
    number: 8,
  },
  {
    slug: "restaurant",
    title: "Restaurant / Cafe",
    brand: "The Ember Room",
    category: "Hospitality",
    location: "Mumbai",
    description:
      "An atmospheric, immersive website for a contemporary Indian restaurant — live-fire hero, à la carte menu, gallery, reservation form, and hospitality brand identity.",
    shortDescription: "Immersive restaurant website for a contemporary Indian dining experience in Mumbai.",
    href: "/work/restaurant",
    accentHex: "#E8A840",
    tags: ["Restaurant", "Menu", "Reservations"],
    previewImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop",
    previewImageAlt: "Atmospheric contemporary restaurant interior with warm amber candlelight",
    number: 9,
  },
  {
    slug: "real-estate",
    title: "Real Estate / Property",
    brand: "Arya Properties",
    category: "Real Estate",
    location: "Bengaluru · Hyderabad · Goa",
    description:
      "An architectural, high-ticket property developer website — project listings, 2–4 BHK configurations, amenities, enquiry flow, and sophisticated brand presentation.",
    shortDescription: "Premium property developer website demonstrating project discovery and enquiry flow.",
    href: "/work/real-estate",
    accentHex: "#4A9B8F",
    tags: ["Real Estate", "Property", "Enquiry"],
    previewImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop",
    previewImageAlt: "Premium modern residential building exterior with architectural landscaping",
    number: 10,
  },
];

/** The three flagship projects for editorial homepage treatment */
export const flagshipWork = workSamples.filter((s) => s.flagship);

/** Remaining 7 projects for the More Work grid */
export const moreWork = workSamples.filter((s) => !s.flagship);
