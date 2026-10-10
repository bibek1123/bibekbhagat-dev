"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function MobileWhatsAppBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      // Show after scrolling past the hero (~100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom"
      aria-label="Get a free quote via WhatsApp"
    >
      <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-3 pb-safe">
        <WhatsAppButton
          size="lg"
          ctaLocation="mobile_sticky_bar"
          className="w-full justify-center"
        >
          Get a Free Quote on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
