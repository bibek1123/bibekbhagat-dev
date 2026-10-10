import { Container } from "@/components/ui/Container";

const skills = [
  "JavaScript & TypeScript",
  "Node.js & Next.js",
  "React",
  "REST APIs",
  "Databases",
  "Cloud & Deployment",
];

const advantages = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Work Directly With the Developer",
    description:
      "No project managers, no middle layers. You communicate directly with the person building your website.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fixed, Transparent Pricing",
    description:
      "You know exactly what you're paying before we start. No surprise invoices at the end.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    title: "Built for Business, Not for Awards",
    description:
      "Every design decision is made to help your business grow — not to impress other designers.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile-First",
    description:
      "Your customers are on their phones. Every website is designed and tested for mobile first.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: About */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-indigo-600 mb-3">
              About
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
            >
              Work Directly With the Developer Building Your Website
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I&apos;m Bibek Bhagat, a full-stack developer with 4+ years of
              experience building web products. I work with small businesses to
              create websites that look professional, load fast, and bring in
              customers — at a price that makes sense for growing businesses.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              When you work with me, you get direct communication, honest advice,
              and a website that genuinely serves your business — not a templated
              deliverable from a faceless agency.
            </p>

            {/* Tech mention — subtle */}
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-3">
                Technical background
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Advantages */}
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-indigo-50/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-indigo-600 mb-4">
                  {adv.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
