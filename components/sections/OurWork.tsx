import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workSamples } from "@/config/work";

// Category → tag color
const categoryColor: Record<string, string> = {
  "Interior Design": "text-amber-700 bg-amber-50",
  "Healthcare": "text-teal-700 bg-teal-50",
  "Education": "text-indigo-700 bg-indigo-50",
  "Beauty & Wellness": "text-rose-700 bg-rose-50",
  "Home Services": "text-orange-700 bg-orange-50",
  "Retail": "text-yellow-800 bg-yellow-50",
  "Manufacturing": "text-slate-700 bg-slate-100",
};

export function OurWork() {
  const featured = workSamples.slice(0, 3);
  const rest = workSamples.slice(3);

  return (
    <section
      id="work"
      className="py-20 md:py-28"
      style={{ background: "#F4F5F7" }}
      aria-labelledby="work-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Websites That Mean Business"
          subtitle="Seven industry-specific websites — each with its own identity, layout, and business focus. This is the standard of website your business gets."
        />

        {/* ── Featured three — large cards ── */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((sample) => (
            <Link
              key={sample.slug}
              href={sample.href}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 border border-gray-200/80"
              aria-label={`View ${sample.brand} portfolio project — ${sample.category} website`}
            >
              {/* Real screenshot preview */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={sample.previewImage}
                  alt={sample.previewImageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`inline-flex items-center text-xs font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full ${categoryColor[sample.category] ?? "text-gray-600 bg-gray-100"}`}
                  >
                    {sample.category}
                  </span>
                  <span className="text-xs text-gray-400">{sample.location}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {sample.brand}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                  {sample.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                  View Website
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Remaining four — compact strip ── */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((sample) => (
            <Link
              key={sample.slug}
              href={sample.href}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 border border-gray-200/80"
              aria-label={`View ${sample.brand} portfolio project — ${sample.category} website`}
            >
              {/* Real preview image — compact */}
              <div className="relative h-36 overflow-hidden bg-gray-100">
                <Image
                  src={sample.previewImage}
                  alt={sample.previewImageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content — compact */}
              <div className="px-4 py-3.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{sample.category}</span>
                  <span className="text-xs text-gray-400">{sample.location}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {sample.brand}
                </h3>
                <div className="mt-2.5 flex items-center gap-1 text-xs font-semibold text-indigo-500">
                  View →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
