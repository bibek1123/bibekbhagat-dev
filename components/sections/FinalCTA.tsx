import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";

export function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="py-24 md:py-36 bg-[#090A10] text-white relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Decorative tilted project screen fragments in background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 select-none"
      >
        {/* Fragment 1: Atelier Aura */}
        <div className="absolute -top-12 -right-20 w-[420px] sm:w-[540px] aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl transform rotate-6 scale-90 hidden md:block">
          <Image
            src="/work/previews/interior-design-desktop.png"
            alt=""
            fill
            sizes="540px"
            className="object-cover object-top opacity-70"
          />
        </div>
        {/* Fragment 2: Kaasni */}
        <div className="absolute -bottom-20 -right-10 w-[380px] sm:w-[480px] aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl transform -rotate-3 scale-85 hidden md:block">
          <Image
            src="/work/previews/ecommerce-desktop.png"
            alt=""
            fill
            sizes="480px"
            className="object-cover object-top opacity-60"
          />
        </div>
        {/* Fragment 3: The Ember Room */}
        <div className="absolute top-1/3 right-1/4 w-[320px] aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl transform rotate-12 scale-75 hidden lg:block">
          <Image
            src="/work/previews/restaurant-desktop.png"
            alt=""
            fill
            sizes="320px"
            className="object-cover object-top opacity-50"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          {/* Price badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">
              Websites Starting at ₹6,999 · 50% Advance
            </span>
          </div>

          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] m-0"
          >
            Ready to give your business a website that actually looks like this?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
            You&apos;ve seen what I build. Tell me about your business, your goals,
            and any references you like. I&apos;ll help you choose the right package
            and get your site live in 7–14 days.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <WhatsAppButton
              size="lg"
              ctaLocation="final_cta"
              className="font-bold text-base shadow-xl hover:scale-105 transition-transform"
            >
              Get a Free Quote on WhatsApp →
            </WhatsAppButton>

            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-semibold text-gray-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              Or email: {siteConfig.email}
            </a>
          </div>

          {/* Direct trust footer row */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>Direct WhatsApp conversation with Bibek</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>No spam, sales calls, or obligation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>Fast 7–14 working days delivery</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
