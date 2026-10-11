import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { EcommerceView } from "./EcommerceView";

export const metadata: Metadata = {
  title: "Kaasni Skincare — D2C E-commerce Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: a high-performance Indian D2C skincare storefront demonstrating product discovery, category browsing, cart experience, and modern commerce UX. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/ecommerce` },
  openGraph: {
    title: "Kaasni Skincare — D2C E-commerce Web Design Portfolio | bibekbhagat.dev",
    description: "Explore the high-converting D2C e-commerce design and interactive shopping experience built by bibekbhagat.dev.",
    type: "website",
  },
};

export default function EcommercePage() {
  return <EcommerceView />;
}
