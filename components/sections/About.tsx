import { Container } from "@/components/ui/Container";

const proofPoints = [
  {
    title: "Direct 1:1 Communication",
    description: "You speak directly with the developer building your site — no account managers or sales middlemen.",
  },
  {
    title: "4+ Years Full-Stack Experience",
    description: "Professional background across Next.js, React, TypeScript, and high-performance cloud architecture.",
  },
  {
    title: "100% Client Ownership",
    description: "All source files, domain configurations, and credentials are completely handed over upon launch.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Cloud Deployment",
  "Tailwind CSS",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Editorial & Value Framing ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 m-0">
                Direct Developer Partnership
              </p>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.08] m-0"
            >
              Work directly with the person building your website.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              I&apos;m Bibek Bhagat, an independent full-stack developer with 4+ years of
              experience crafting production web applications and business websites.
            </p>

            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              When you hire an agency, your budget often pays for office overhead, account managers,
              and sales executives, while your project is handed to junior interns.
              With me, you work directly with one accountable developer from the first WhatsApp
              message to production launch.
            </p>

            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Every design choice is made for your business and your customers: clear typography,
              sub-second loading speeds, and frictionless contact paths so visitors convert into enquiries.
            </p>

            {/* Technical Background Chips */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 m-0">
                Engineering Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200/80 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Proof Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {proofPoints.map((point) => (
                <div key={point.title} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <h3 className="text-xs font-bold text-gray-950 m-0">{point.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-1 m-0 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Intentional Graphic Identity Treatment ── */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px] rounded-3xl bg-[#0B0F19] border border-gray-800 p-7 sm:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.18)] overflow-hidden">
              {/* Subtle ambient interior glow */}
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none"
              />

              {/* Monogram Crest */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800/80">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <span className="text-white text-3xl font-black tracking-tight leading-none">
                    B
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/50">
                    4+ Years Exp.
                  </span>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                    Independent Developer
                  </span>
                </div>
              </div>

              {/* Developer identity stamp */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white tracking-tight m-0">
                  Bibek Bhagat
                </h3>
                <p className="text-xs text-gray-400 font-medium mt-1 m-0">
                  Full-Stack Web Engineer &amp; Designer
                </p>
              </div>

              {/* Stylized Code Architectural Fragment */}
              <div className="rounded-xl bg-black/60 border border-gray-800 p-4 font-mono text-[11px] text-gray-300 leading-relaxed space-y-1 select-none">
                <div className="text-gray-500">{"// direct collaboration schema"}</div>
                <div>
                  <span className="text-purple-400">interface</span>{" "}
                  <span className="text-yellow-300">Project</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">developer</span>:{" "}
                  <span className="text-emerald-300">&quot;Bibek Bhagat&quot;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">middlemen</span>:{" "}
                  <span className="text-red-400">0</span>;
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">accountability</span>:{" "}
                  <span className="text-emerald-300">&quot;100%&quot;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-indigo-300">stack</span>: [
                  <span className="text-yellow-200">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-yellow-200">&quot;TypeScript&quot;</span>];
                </div>
                <div>&#125;</div>
              </div>

              {/* Accountability pledge */}
              <div className="mt-6 pt-5 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new projects
                </span>
                <span className="text-[11px] font-mono text-gray-500">Pan-India</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
