import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { IeltsStudyAbroadView } from "./IeltsStudyAbroadView";

export const metadata: Metadata = {
  title: "Arise Global Institute — IELTS Coaching & Study Abroad Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: an international education and IELTS test preparation website in Ludhiana, Punjab. Demonstrating country destination exploration, structured test academy, and counselling lead generation. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/ielts-study-abroad` },
  openGraph: {
    title: "Arise Global Institute — Education Web Design Portfolio | bibekbhagat.dev",
    description: "Explore the ambitious study abroad portal and test prep UX designed by bibekbhagat.dev.",
    type: "website",
  },
};

export default function IeltsStudyAbroadPage() {
  return <IeltsStudyAbroadView />;
}
