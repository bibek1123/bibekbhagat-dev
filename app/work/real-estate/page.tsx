import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { RealEstateView } from "./RealEstateView";

export const metadata: Metadata = {
  title: "Arya Properties — Boutique Real Estate Discovery Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: a boutique real estate and property discovery website inspired by 99acres UX. Demonstrates property search filters, listing presentation, micro-market guides, and walkthrough booking flows. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/real-estate` },
  openGraph: {
    title: "Arya Properties — Real Estate Web Design Portfolio | bibekbhagat.dev",
    description: "Explore the property discovery search interface and private walkthrough booking experience designed by bibekbhagat.dev.",
    type: "website",
  },
};

export default function RealEstatePage() {
  return <RealEstateView />;
}
