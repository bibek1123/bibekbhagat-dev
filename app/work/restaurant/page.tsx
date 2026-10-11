import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { RestaurantView } from "./RestaurantView";

export const metadata: Metadata = {
  title: "The Ember Room — Fine Dining Restaurant Website Design | bibekbhagat.dev",
  description:
    "Portfolio showcase: an atmospheric contemporary Indian fine dining restaurant website inspired by Indian Accent. Demonstrates food-led storytelling, tasting menu presentation, and table reservation flows. Created by bibekbhagat.dev.",
  alternates: { canonical: `${siteConfig.url}/work/restaurant` },
  openGraph: {
    title: "The Ember Room — Restaurant Web Design Portfolio | bibekbhagat.dev",
    description: "Explore the culinary storytelling and table reservation experience designed by bibekbhagat.dev.",
    type: "website",
  },
};

export default function RestaurantPage() {
  return <RestaurantView />;
}
