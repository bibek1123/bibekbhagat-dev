import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HomeServicesView } from "./HomeServicesView";

export const metadata: Metadata = {
  title: "FixKaro — On-Demand Home Services Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: an on-demand home services website concept inspired by Urban Company. Demonstrates fast service discovery, category browsing, transparent rate cards, and instant booking UX. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/home-services` },
  openGraph: {
    title: "FixKaro — Home Services Platform Web Design | bibekbhagat.dev",
    description: "Explore the utility-driven home services interface and booking flow designed by bibekbhagat.dev.",
    type: "website",
  },
};

export default function HomeServicesPage() {
  return <HomeServicesView />;
}
