import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Tell me about your business",
    subtitle: "Discovery & References",
    description:
      "Send a message on WhatsApp or email. Share your business profile, target audience, preferred references, and existing brand materials.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Choose package + 50% advance",
    subtitle: "Scope & Kick-Off",
    description:
      "We confirm the right package (Starter ₹6,999 or Business ₹12,999) or custom quote. Work kicks off upon receipt of the 50% advance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design & development",
    subtitle: "Production Build",
    description:
      "I personally design and build your website with modern code and responsive layouts (Starter: 1–2 working days, Business: 3–5 working days).",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Review & revisions",
    subtitle: "Feedback & Polish",
    description:
      "You review a working preview of your website. We implement your consolidated feedback according to the revision rounds in your package.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Final payment + launch",
    subtitle: "Go-Live & Handover",
    description:
      "Once approved, pay the remaining 50%. We connect your domain, activate SSL, and launch your website live to the world with full credential handover.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 md:py-32 bg-[#F6F5F3] relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 m-0">
              How It Works
            </p>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.08] m-0"
          >
            Five straightforward steps. Zero surprises.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            No endless sales meetings or complex agency tiers.
            A direct, structured collaboration from our first conversation to launch day.
          </p>
        </div>

        {/* ── DESKTOP: Connected Horizontal Journey ── */}
        <div className="hidden lg:block relative">
          {/* Continuous Connecting Line Behind Cards */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 left-10 right-10 h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600 z-0"
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200/90 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Top node & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-xs shadow-2xs">
                      {step.icon}
                    </div>
                    <span className="text-xl font-black font-mono text-gray-300">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-sm font-extrabold text-gray-900 tracking-tight leading-snug m-0">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mt-4 pt-3 border-t border-gray-100 m-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: Connected Vertical Timeline ── */}
        <div className="lg:hidden relative pl-6 sm:pl-8">
          {/* Vertical Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-3 sm:left-4 w-0.5 bg-gradient-to-b from-indigo-300 via-indigo-500 to-indigo-700"
          />

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Node circle on timeline */}
                <div className="absolute -left-6 sm:-left-8 top-4 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center shadow-xs">
                  <span className="text-[9px] font-black font-mono text-indigo-700">
                    {step.number}
                  </span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                      {step.subtitle}
                    </span>
                    <span className="text-gray-400 text-xs font-mono font-bold">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight m-0">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 m-0 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
