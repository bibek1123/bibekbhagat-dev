import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BeautySalonView } from "./BeautySalonView";

export const metadata: Metadata = {
  title: "Velvet Room Studio — Luxury Salon & Beauty Studio Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: a high-fashion editorial website for an intimate luxury salon and beauty studio in Gurugram. Demonstrating hair couture lookbook, signature treatments, and bespoke reservation UX. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/beauty-salon` },
  openGraph: {
    title: "Velvet Room Studio — Luxury Beauty Web Design Portfolio | bibekbhagat.dev",
    description: "Explore the high-fashion editorial salon web design and reservation UX built by bibekbhagat.dev.",
    type: "website",
  },
};

export default function BeautySalonPage() {
  return <BeautySalonView />;
}
