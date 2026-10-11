import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { InteriorDesignView } from "./InteriorDesignView";

export const metadata: Metadata = {
  title: "Atelier Aura — Luxury Interior Design Studio | bibekbhagat.dev",
  description:
    "Portfolio showcase: an architectural interior design studio website for a Bengaluru residential and commercial design practice. Demonstrating bespoke case studies, space discovery, and turnkey consultation. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/interior-design` },
  openGraph: {
    title: "Atelier Aura — Interior Architecture Web Design Portfolio | bibekbhagat.dev",
    description: "Experience the architectural interior design portfolio crafted for luxury Bengaluru residences by bibekbhagat.dev.",
    type: "website",
  },
};

export default function InteriorDesignPage() {
  return <InteriorDesignView />;
}
