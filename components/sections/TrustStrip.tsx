import { Container } from "@/components/ui/Container";

const trustItems = [
  {
    title: "Fast Delivery",
    subtitle: "Starter: 1–2 working days · Business: 3–5 working days",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Fixed Pricing",
    subtitle: "Starting ₹6,999 · Zero hidden fees",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Mobile-First",
    subtitle: "Engineered for phones, tablets & desktops",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Direct With Developer",
    subtitle: "One accountable person · No middlemen",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section
      className="relative z-20 -mt-6 sm:-mt-8 mb-4"
      aria-label="Core service guarantees"
    >
      <Container>
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
            {trustItems.map((item, idx) => (
              <div
                key={item.title}
                className={`flex items-start gap-3.5 ${
                  idx > 0 ? "pt-4 sm:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900 tracking-tight m-0">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed m-0 font-medium">
                    {item.subtitle}
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
