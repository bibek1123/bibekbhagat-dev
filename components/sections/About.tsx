import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Cloud Deployment",
];

const onlineProfiles = [
  {
    name: "GitHub",
    handle: "bibek1123",
    url: "https://github.com/bibek1123",
    category: "Code & Repositories",
    borderColor: "hover:border-purple-400/80 hover:bg-purple-950/30",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "in/bibekbhagat",
    url: "https://linkedin.com/in/bibekbhagat",
    category: "Professional Network",
    borderColor: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/15",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    handle: "u/bibek1123",
    url: "https://leetcode.com/u/bibek1123",
    category: "Algorithms & Logic",
    borderColor: "hover:border-[#FFA116] hover:bg-[#FFA116]/15",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(255,161,22,0.3)]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFA116" aria-hidden="true">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.864c.354.047.706.071 1.058.071 2.213 0 4.238-1.238 5.247-3.208l1.417-2.756a1.374 1.374 0 0 0-.614-1.849 1.376 1.376 0 0 0-1.85.614l-1.417 2.756a3.528 3.528 0 0 1-3.158 1.933c-.22 0-.441-.015-.662-.045a3.447 3.447 0 0 1-2.799-2.244 3.23 3.23 0 0 1-.203-.591 3.21 3.21 0 0 1-.036-1.373c.032-.199.09-.395.174-.582a3.06 3.06 0 0 1 .703-1.224l3.854-4.126 5.406-5.788a1.375 1.375 0 0 0-.992-2.31zM18.847 9.873a1.375 1.375 0 0 0-1.375 1.375v2.75a1.375 1.375 0 0 0 2.75 0v-2.75a1.375 1.375 0 0 0-1.375-1.375z" />
      </svg>
    ),
  },
  {
    name: "HackerRank",
    handle: "bibek1123",
    url: "https://hackerrank.com/bibek1123",
    category: "Problem Solving",
    borderColor: "hover:border-[#00EA64] hover:bg-[#00EA64]/15",
    glowColor: "group-hover:shadow-[0_0_15px_rgba(0,234,100,0.3)]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#00EA64" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm3.89 16.59h-2.14V13.3H10.2v3.29H8.06V7.41h2.14v3.39h3.55V7.41h2.14v9.18z" />
      </svg>
    ),
  },
];

const proofPillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: "1:1 WhatsApp Collaboration",
    subtitle: "Zero Middlemen",
    description: "Every discussion, feedback note, and decision happens directly with me on WhatsApp. No ticketing queues or waiting for an account manager to reply.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
    title: "Production Full-Stack Code",
    subtitle: "Built to Convert",
    description: "Engineered with Next.js, React, TypeScript, Tailwind CSS, Node.js, and Cloud Deployment. Fast, scalable architecture designed for high conversion.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "100% Client Ownership",
    subtitle: "No Monthly Lock-In",
    description: "You own every single asset upon launch: source code repository, domain DNS, hosting access, and business credentials. No hostage retainer contracts.",
  },
];

const comparisonData = [
  {
    aspect: "Who builds your site?",
    agency: "Interns or outsourced freelancers",
    direct: "Bibek personally (4+ yrs experience)",
  },
  {
    aspect: "Communication speed",
    agency: "2–4 days via formal ticketing / emails",
    direct: "Direct WhatsApp chat & voice notes (< 2 hrs)",
  },
  {
    aspect: "Pricing & Overhead",
    agency: "Marked up to cover office & sales commissions",
    direct: "Fixed transparent pricing (Starts ₹6,999)",
  },
  {
    aspect: "Delivery Turnaround",
    agency: "4–8 weeks with bureaucratic delays",
    direct: "7–14 business days launch target",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Decorative architectural background accents */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#111827 1px, transparent 1px), radial-gradient(#111827 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      {/* Subtle ambient gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── Left Column: Editorial & Authentic Value Framing ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>Direct Developer Partnership • Zero Agency Markup</span>
            </div>

            <h2
              id="about-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-[1.1] m-0"
            >
              Work directly with the engineer who builds your website.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              I&apos;m <span className="font-semibold text-gray-950">Bibek Bhagat</span>, an independent full-stack web developer. I craft fast, high-converting digital websites for Indian businesses, clinics, salons, interior studios, and modern brands.
            </p>

            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              When you hire a traditional web agency, much of your payment funds sales commissions, creative directors, and office overhead — while the actual website is often handed down to interns. With me, you eliminate every middleman.
            </p>

            {/* Creative Agency vs Direct Comparison Card */}
            <div className="mt-7 rounded-2xl bg-white border border-gray-200/90 shadow-sm overflow-hidden">
              <div className="bg-gray-900 px-4 py-2.5 flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                  <span className="ml-2 font-semibold text-white">THE PARTNERSHIP DIFFERENCE</span>
                </span>
                <span className="text-indigo-400 text-[11px]">Pan-India Delivery</span>
              </div>
              <div className="divide-y divide-gray-100 text-xs">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-3 sm:p-3.5 gap-2 items-center hover:bg-gray-50/60 transition-colors">
                    <div className="sm:col-span-4 font-bold text-gray-900">
                      {item.aspect}
                    </div>
                    <div className="sm:col-span-4 text-gray-500 flex items-center gap-1.5 line-through decoration-red-400/60">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span>{item.agency}</span>
                    </div>
                    <div className="sm:col-span-4 text-emerald-800 font-semibold flex items-center gap-1.5 bg-emerald-50/80 px-2 py-1 rounded-md border border-emerald-100">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{item.direct}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Core Value Proof Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {proofPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-gray-50/90 border border-gray-200/80 shadow-2xs hover:bg-white hover:shadow-xs hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100/80 flex items-center justify-center mb-3 text-indigo-600">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xs font-bold text-gray-950 mt-0.5 mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 m-0 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Tech Stack Badges */}
            <div className="mt-7 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 inline-block" />
                Tech Stack:
              </span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200/80 font-mono shadow-2xs hover:bg-white hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Verified Online Profiles */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                Online Profiles:
              </span>
              {onlineProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 transition-colors shadow-2xs group"
                  aria-label={`${p.name} profile (${p.handle})`}
                >
                  <span className="shrink-0">{p.icon}</span>
                  <span>{p.name}</span>
                  <span className="text-[10px] text-gray-400 group-hover:text-indigo-600 font-mono">↗</span>
                </a>
              ))}
            </div>

            {/* Direct Call to Action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton size="lg" ctaLocation="about_direct">
                Chat With Bibek on WhatsApp →
              </WhatsAppButton>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 shadow-2xs transition-colors"
              >
                <span>View Fixed Pricing (₹6,999)</span>
                <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Creative Executive Founder / Developer Showcase Pass ── */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[430px]">
              {/* Decorative dynamic ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-indigo-500/25 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -left-12 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"
              />

              {/* Main Creative Executive Pass Container */}
              <div className="relative rounded-3xl bg-[#0B0F19] border border-gray-800 p-3.5 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden group transition-all duration-300 hover:border-indigo-500/40">
                {/* Top Pass Header Bar */}
                <div className="flex items-center justify-between pb-3 px-1 border-b border-gray-800/80 mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    <span className="font-mono text-[11px] font-bold tracking-wider text-gray-300 uppercase">
                      FOUNDER &amp; LEAD ENGINEER
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-[10px] font-mono font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>AVAILABLE NOW</span>
                  </div>
                </div>

                {/* Studio Portrait Display Frame */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-950 border border-white/10 shadow-inner">
                  <Image
                    src="/images/bibek-studio.png"
                    alt="Bibek Bhagat — Independent Full-Stack Web Developer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 430px"
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  {/* Gradient bottom overlay for clean contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/45 to-transparent pointer-events-none" />

                  {/* Top Floating Badge: Experience */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-bold text-indigo-300 font-mono shadow-sm">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>4+ Years Full-Stack</span>
                    </div>
                  </div>

                  {/* Top Floating Badge: Verification */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-emerald-300 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Verified Partner</span>
                    </div>
                  </div>

                  {/* Bottom Identity Block inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-white m-0">
                          Bibek Bhagat
                        </h3>
                        <p className="text-xs text-indigo-300 font-medium mt-0.5 m-0 flex items-center gap-1.5">
                          <span>Principal Full-Stack Engineer</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-300 font-mono text-[11px]">Delhi NCR</span>
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-2.5 py-1 rounded-md border border-emerald-700/80 shadow-xs">
                          100% DIRECT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stylized Developer Protocol Terminal Card */}
                <div className="mt-3.5 p-3.5 rounded-xl bg-black/60 border border-gray-800/90 font-mono text-[11px] text-gray-300 space-y-1.5 select-none">
                  <div className="flex items-center justify-between text-gray-400 pb-1.5 border-b border-gray-800 text-[10px]">
                    <span className="text-indigo-400 font-bold">{"// DEVELOPER COMMITMENT"}</span>
                    <span className="text-gray-500">ID: BB-DEV-2026</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-gray-400">Accountability:</span>
                    <span className="text-emerald-400 font-bold">Direct 1:1 With Bibek</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Agency Middlemen:</span>
                    <span className="text-red-400 font-bold">0 (Zero Bureaucracy)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">WhatsApp Speed:</span>
                    <span className="text-indigo-300 font-bold">&lt; 2 Hours Response</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Code Transfer:</span>
                    <span className="text-white font-bold">100% Source Code &amp; DNS</span>
                  </div>
                  <div className="pt-2 border-t border-gray-800/80 text-[10px] space-y-1.5">
                    <div className="flex items-center justify-between text-gray-400">
                      <span className="text-gray-500 font-bold uppercase tracking-wider">Production Stack:</span>
                      <span className="text-emerald-400 font-mono">Modern Full-Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-gray-900 border border-gray-700/80 text-[10px] font-mono text-amber-300 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verified Engineering Profiles Card Grid */}
                <div className="mt-3.5 p-3 rounded-xl bg-black/60 border border-gray-800/90 font-mono text-[11px] text-gray-300">
                  <div className="flex items-center justify-between text-gray-400 pb-2 border-b border-gray-800 text-[10px]">
                    <span className="text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span>{"// VERIFIED ONLINE PROFILES"}</span>
                    </span>
                    <span className="text-emerald-400 font-mono text-[9px] bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">
                      LIVE PROOF
                    </span>
                  </div>

                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    {onlineProfiles.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg bg-gray-950/90 border border-gray-800/80 transition-all duration-200 group flex flex-col justify-between ${p.borderColor} ${p.glowColor}`}
                        aria-label={`${p.name} Profile - ${p.handle}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                            <span className="shrink-0">{p.icon}</span>
                            <span>{p.name}</span>
                          </div>
                          <span className="text-[10px] text-gray-500 group-hover:text-white transition-colors">↗</span>
                        </div>
                        <p className="mt-1 text-[10px] text-gray-400 truncate font-mono m-0">
                          {p.handle}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Floating Micro-Card: Direct WhatsApp Toast */}
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <p className="text-[11px] text-gray-200 truncate m-0">
                      Direct WhatsApp Voice &amp; Chat
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-900/60 px-2 py-0.5 rounded">
                    FAST REPLY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

