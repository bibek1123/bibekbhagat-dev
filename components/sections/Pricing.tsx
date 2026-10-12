"use client";

import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { pricingPackages, pricingNotes } from "@/config/pricing";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50/70 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-900 m-0">
              Clear & Transparent Pricing
            </p>
          </div>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.08] m-0"
          >
            Fixed packages. No agency markups.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Straightforward pricing tailored for Indian small businesses, clinics, and startups.
            Fixed scope, honest deliverables, and zero surprise fees.
          </p>
        </div>

        {/* ── Two Packages Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {pricingPackages.map((pkg) => {
            const isBusiness = pkg.highlighted;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isBusiness
                    ? "bg-[#0F172A] text-white shadow-[0_20px_50px_rgba(15,23,42,0.25)] border-2 border-indigo-500/30"
                    : "bg-white text-gray-900 border-2 border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* Most Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400 text-amber-950 shadow-sm">
                      ★ {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title & Price */}
                  <div className="flex items-baseline justify-between gap-4 pb-6 border-b border-gray-200/20 mb-6">
                    <div>
                      <h3
                        className={`text-xl font-bold tracking-tight m-0 ${
                          isBusiness ? "text-indigo-300" : "text-gray-900"
                        }`}
                      >
                        {pkg.name}
                      </h3>
                      <p
                        className={`text-xs mt-1 m-0 ${
                          isBusiness ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {pkg.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none block">
                        {pkg.price}
                      </span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider ${
                          isBusiness ? "text-gray-400" : "text-gray-400"
                        }`}
                      >
                        One-Time
                      </span>
                    </div>
                  </div>

                  {/* Feature Deliverables List */}
                  <div className="mb-8">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider mb-3.5 ${
                        isBusiness ? "text-indigo-200" : "text-gray-500"
                      }`}
                    >
                      Included Deliverables:
                    </p>
                    <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                            isBusiness ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isBusiness ? "#818CF8" : "#4F46E5"}
                            strokeWidth="2.5"
                            className="shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Package CTA */}
                <div>
                  <WhatsAppButton
                    variant={pkg.id as "starter" | "business"}
                    size="lg"
                    ctaLocation={`pricing_${pkg.id}`}
                    className={`w-full justify-center font-bold text-sm shadow-md transition-all ${
                      isBusiness
                        ? "bg-white text-indigo-900 hover:bg-indigo-50 border-0"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 border-0"
                    }`}
                  >
                    Get Started with {pkg.name} →
                  </WhatsAppButton>
                  <p
                    className={`text-center text-[11px] mt-2.5 m-0 font-medium ${
                      isBusiness ? "text-gray-400" : "text-gray-400"
                    }`}
                  >
                    Direct discussion on WhatsApp · Fast kick-off
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Transparent Payment Terms & Exclusions ── */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gray-50 border border-gray-200/80 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-gray-200">
            {/* Advance payment schedule */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 m-0">50% Advance to Start</h4>
                <p className="text-xs text-gray-600 mt-1 m-0 leading-relaxed">
                  Work begins immediately upon receipt of the advance and project requirements.
                </p>
              </div>
            </div>

            {/* Launch payment schedule */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 m-0">50% Before Production Launch</h4>
                <p className="text-xs text-gray-600 mt-1 m-0 leading-relaxed">
                  Final payment is made after you review and approve the completed website before go-live.
                </p>
              </div>
            </div>
          </div>

          {/* Scope clarifications */}
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 m-0">
              Scope & Third-Party Clarifications:
            </p>
            <ul className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500 leading-relaxed">
              {pricingNotes.slice(1).map((note, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-gray-400">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
