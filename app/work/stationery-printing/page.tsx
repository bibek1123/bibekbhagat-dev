import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { StationeryPrintingView } from "./StationeryPrintingView";

export const metadata: Metadata = {
  title: "Roshni Stationery & Print — Artisan Catalogue Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: a colorful, tactile Indian stationery and bespoke print catalogue inspired by Inkarto. Demonstrates merchandise richness, custom print configuration, and e-commerce discovery. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/stationery-printing` },
  openGraph: {
    title: "Roshni Stationery & Print — Web Design Portfolio | bibekbhagat.dev",
    description: "Explore the vibrant stationery catalogue and interactive print estimator designed by bibekbhagat.dev.",
    type: "website",
  },
};

export default function StationeryPrintingPage() {
  return <StationeryPrintingView />;
}
