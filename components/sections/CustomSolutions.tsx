import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function CustomSolutions() {
  return (
    <section
      id="custom-solutions"
      aria-labelledby="custom-heading"
      className="py-20 md:py-32 bg-[#F6F5F3] relative overflow-hidden scroll-mt-16"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── Left Column: Value Framing & CTA ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-300/80 bg-amber-50/80 w-fit mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span className="text-xs font-bold text-amber-900 tracking-wide uppercase">
                Quoted Separately from Standard Packages
              </span>
            </div>

            <h2
              id="custom-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.1] m-0"
            >
              Need something beyond a standard business website?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              If your business requires online sales, custom booking calendars,
              Indian payment gateways (UPI / Cards), or custom administrative dashboards,
              we design and engineer custom software solutions tailored to your workflow.
            </p>

            {/* Clear Scope Distinction */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 m-0">
                Custom Scope Examples:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                <div className="flex items-center gap-1.5">
                  <span className="text-indigo-600 font-bold">✓</span> E-commerce & D2C Stores
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-indigo-600 font-bold">✓</span> Appointment Booking Engines
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-indigo-600 font-bold">✓</span> Razorpay / UPI Gateways
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-indigo-600 font-bold">✓</span> Custom Portals & Backend
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-950 text-xs font-semibold">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-700 shrink-0"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Custom Features: Timeline confirmed before work begins</span>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                variant="custom"
                size="lg"
                ctaLocation="custom_solutions"
                className="font-bold shadow-md"
              >
                Discuss a Custom Project →
              </WhatsAppButton>
            </div>
            <p className="text-xs text-gray-500 mt-3 m-0 font-medium">
              Share your requirements directly with Bibek for a detailed scope and custom quote. Timeline confirmed before work begins.
            </p>
          </div>

          {/* ── Right Column: Sophisticated UI Collage of Capabilities ── */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-[580px] lg:max-w-none grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fragment 1: E-commerce Product & Cart UX */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                    E-Commerce UX
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">Cart & Checkout</span>
                </div>
                {/* Product preview */}
                <div className="rounded-lg bg-gray-50 border border-gray-100 p-3 flex gap-3 items-center mb-3">
                  <div className="w-12 h-12 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center text-xs font-bold text-purple-700 shrink-0">
                    SKIN
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-gray-900 truncate">Hydrating Elixir 50ml</div>
                    <div className="text-[11px] font-bold text-purple-700">₹1,499</div>
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                    Qty: 1
                  </div>
                </div>
                {/* Cart total */}
                <div className="flex items-center justify-between text-xs font-bold text-gray-900 pt-1">
                  <span>Subtotal (incl. GST)</span>
                  <span>₹1,499</span>
                </div>
                <div className="mt-2.5 h-7 rounded-lg bg-gray-900 text-white text-[11px] font-bold flex items-center justify-center">
                  Proceed to Checkout →
                </div>
              </div>

              {/* Fragment 2: Appointment Booking Calendar */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                    Online Booking
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">Calendar Engine</span>
                </div>
                <div className="text-xs font-bold text-gray-900 mb-2">Select Preferred Date & Slot:</div>
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  <div className="rounded-md border border-gray-200 py-1.5 text-center text-[10px] font-semibold text-gray-600 bg-gray-50">
                    10:00 AM
                  </div>
                  <div className="rounded-md border border-emerald-500 py-1.5 text-center text-[10px] font-bold text-emerald-700 bg-emerald-50">
                    02:30 PM ✓
                  </div>
                  <div className="rounded-md border border-gray-200 py-1.5 text-center text-[10px] font-semibold text-gray-600 bg-gray-50">
                    05:00 PM
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-gray-600 font-medium">Service: Consultation</span>
                  <span className="text-emerald-600 font-bold">Confirmed</span>
                </div>
              </div>

              {/* Fragment 3: Indian Payment Gateway Integration */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    Payment Gateway
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">UPI / Cards / NetBanking</span>
                </div>
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center justify-between p-2 rounded-lg border border-blue-200 bg-blue-50/60 text-xs">
                    <span className="font-bold text-blue-950 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" /> UPI (GPay / PhonePe / Paytm)
                    </span>
                    <span className="text-[10px] font-bold text-blue-700">Recommended</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg border border-gray-200 bg-gray-50 text-xs text-gray-600">
                    <span className="font-semibold">Credit & Debit Cards</span>
                    <span className="text-[10px] text-gray-400">Visa / Master</span>
                  </div>
                </div>
                <div className="text-[10px] text-gray-500 text-center flex items-center justify-center gap-1 font-medium">
                  <span>🔒 256-Bit SSL Encrypted Checkout</span>
                </div>
              </div>

              {/* Fragment 4: Business Management & Admin Overview */}
              <div className="rounded-2xl border border-gray-200/90 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transform transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                    Operations Portal
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">Management UI</span>
                </div>
                <div className="space-y-2 mb-2">
                  <div className="flex items-center justify-between text-[11px] p-1.5 bg-gray-50 rounded border border-gray-100">
                    <span className="font-semibold text-gray-800">New Order #4082</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 rounded">Paid</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] p-1.5 bg-gray-50 rounded border border-gray-100">
                    <span className="font-semibold text-gray-800">Table Reservation #104</span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 rounded">Upcoming</span>
                  </div>
                </div>
                <div className="text-[10px] text-gray-400 font-mono text-right">
                  Custom CMS & API Integrations
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
