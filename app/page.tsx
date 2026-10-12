import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { OurWork } from "@/components/sections/OurWork";
import { Services } from "@/components/sections/Services";
import { CustomSolutions } from "@/components/sections/CustomSolutions";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { MobileWhatsAppBar } from "@/components/sections/MobileWhatsAppBar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Professional Websites for Indian Businesses`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

// Structured data for rich search presence
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      serviceType: "Website Development",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      priceRange: "₹6,999 – ₹12,999",
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Bibek Bhagat",
      url: siteConfig.url,
      jobTitle: "Full-Stack Web Developer",
      sameAs: [
        "https://linkedin.com/in/bibekbhagat",
        "https://github.com/bibek1123",
        "https://leetcode.com/u/bibek1123",
        "https://hackerrank.com/bibek1123",
      ],
      knowsAbout: [
        "Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Cloud Deployment",
        "Business Website Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <OurWork />
        <Services />
        <CustomSolutions />
        <Pricing />
        <HowItWorks />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileWhatsAppBar />
    </>
  );
}
