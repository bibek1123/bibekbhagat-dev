import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { DentalClinicView } from "./DentalClinicView";

export const metadata: Metadata = {
  title: "PureSmile Dental — Modern Dental Clinic Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: a modern dental clinic website for an Indian healthcare practice in Chandigarh. Demonstrating patient-first treatment discovery, clinical standards, and appointment request UX. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/dental-clinic` },
  openGraph: {
    title: "PureSmile Dental — Healthcare Web Design Portfolio | bibekbhagat.dev",
    description: "Discover modern, reassuring dental clinic web design and patient conversion flow built by bibekbhagat.dev.",
    type: "website",
  },
};

export default function DentalClinicPage() {
  return <DentalClinicView />;
}
