import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, footerLinks } from "@/config/site";

// Year is evaluated at build time — no manual update needed
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-400 py-14" aria-label="Footer">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md w-fit"
              aria-label="Bibek Bhagat — Home"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Bibek Bhagat
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 inline-block text-sm text-indigo-400 hover:text-indigo-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                {siteConfig.email}
              </a>
            )}
          </div>

          {/* Main nav */}
          <nav aria-label="Footer navigation — main">
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal nav */}
          <nav aria-label="Footer navigation — legal">
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {CURRENT_YEAR} Bibek Bhagat. All rights reserved.
          </p>
          <p className="text-xs">
            Professional websites for Indian businesses.
          </p>
        </div>
      </Container>
    </footer>
  );
}
