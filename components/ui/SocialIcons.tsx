import React from "react";
import { siteConfig } from "@/config/site";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export function GitHubIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.864c.354.047.706.071 1.058.071 2.213 0 4.238-1.238 5.247-3.208l1.417-2.756a1.374 1.374 0 0 0-.614-1.849 1.376 1.376 0 0 0-1.85.614l-1.417 2.756a3.528 3.528 0 0 1-3.158 1.933c-.22 0-.441-.015-.662-.045a3.447 3.447 0 0 1-2.799-2.244 3.23 3.23 0 0 1-.203-.591 3.21 3.21 0 0 1-.036-1.373c.032-.199.09-.395.174-.582a3.06 3.06 0 0 1 .703-1.224l3.854-4.126 5.406-5.788a1.375 1.375 0 0 0-.992-2.31zM18.847 9.873a1.375 1.375 0 0 0-1.375 1.375v2.75a1.375 1.375 0 0 0 2.75 0v-2.75a1.375 1.375 0 0 0-1.375-1.375z" />
    </svg>
  );
}

export function HackerRankIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm3.89 16.59h-2.14V13.3H10.2v3.29H8.06V7.41h2.14v3.39h3.55V7.41h2.14v9.18z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const socialLinksList = [
  {
    name: "LinkedIn",
    handle: "in/bibekbhagat",
    url: siteConfig.social.linkedin,
    brandColor: "#0A66C2",
    hoverBg: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    hoverText: "hover:text-[#0A66C2]",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    handle: "@bibek1123",
    url: siteConfig.social.github,
    brandColor: "#ffffff",
    hoverBg: "hover:bg-white hover:text-gray-950 hover:border-white",
    hoverText: "hover:text-white",
    icon: GitHubIcon,
  },
  {
    name: "LeetCode",
    handle: "u/bibek1123",
    url: siteConfig.social.leetcode,
    brandColor: "#FFA116",
    hoverBg: "hover:bg-[#FFA116] hover:text-black hover:border-[#FFA116]",
    hoverText: "hover:text-[#FFA116]",
    icon: LeetCodeIcon,
  },
  {
    name: "HackerRank",
    handle: "bibek1123",
    url: siteConfig.social.hackerrank,
    brandColor: "#00EA64",
    hoverBg: "hover:bg-[#00EA64] hover:text-black hover:border-[#00EA64]",
    hoverText: "hover:text-[#00EA64]",
    icon: HackerRankIcon,
  },
];

/**
 * Reusable row of social icon link buttons
 */
export function SocialLinksRow({
  className = "",
  size = "md",
  theme = "dark",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
}) {
  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-8.5 h-8.5 text-sm",
    lg: "w-10 h-10 text-base",
  }[size];

  const iconSizes = {
    sm: 13,
    md: 15,
    lg: 18,
  }[size];

  const baseTheme =
    theme === "dark"
      ? "bg-white/[0.04] border-white/10 text-gray-400"
      : "bg-gray-100/90 border-gray-200/80 text-gray-600";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinksList.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses} ${baseTheme} ${item.hoverBg} rounded-xl border flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105 active:scale-95 group`}
            aria-label={`${item.name} (${item.handle})`}
            title={`${item.name} — ${item.handle}`}
          >
            <IconComponent size={iconSizes} />
          </a>
        );
      })}
    </div>
  );
}
