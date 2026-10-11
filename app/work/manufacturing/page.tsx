import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ManufacturingView } from "./ManufacturingView";

export const metadata: Metadata = {
  title: "Dhruv Precision Components — Industrial Engineering Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: an industrial precision engineering and CNC machining manufacturer website inspired by Sansera Engineering. Demonstrates multiaxis machining capabilities, metrology standards, and B2B RFQ flows. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/manufacturing` },
  openGraph: {
    title: "Dhruv Precision Components — B2B Manufacturing Web Design | bibekbhagat.dev",
    description: "Explore the technical engineering hierarchy and RFQ workflow designed by bibekbhagat.dev.",
    type: "website",
  },
};

export default function ManufacturingPage() {
  return <ManufacturingView />;
}
