"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { pricingPackages, pricingNotes } from "@/config/pricing";
import { cn } from "@/lib/utils";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-indigo-500 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. No hourly billing. Fixed packages that deliver real business results."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                pkg.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200/60 ring-2 ring-indigo-600"
                  : "bg-white border border-gray-200 shadow-sm"
              )}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-400 text-amber-900 shadow-sm">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3
                  className={cn(
                    "text-lg font-bold",
                    pkg.highlighted ? "text-white" : "text-gray-900"
                  )}
                >
                  {pkg.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      pkg.highlighted ? "text-white" : "text-gray-900"
                    )}
                  >
                    {pkg.price}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    pkg.highlighted ? "text-indigo-200" : "text-gray-500"
                  )}
                >
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    {pkg.highlighted ? (
                      <svg
                        className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span
                      className={
                        pkg.highlighted ? "text-indigo-100" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <WhatsAppButton
                variant={pkg.id as "starter" | "business"}
                size="lg"
                ctaLocation={`pricing_${pkg.id}`}
                className={cn(
                  "w-full justify-center",
                  pkg.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : ""
                )}
              >
                {pkg.cta}
              </WhatsAppButton>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 max-w-2xl mx-auto">
          <ul className="space-y-2">
            {pricingNotes.map((note, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-500"
              >
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
