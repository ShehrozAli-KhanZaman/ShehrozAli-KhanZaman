import { person } from "@/lib/content";

/** Documented production URL (see `person.portfolioUrl`). */
export const canonicalSiteUrl = person.portfolioUrl;

/**
 * Absolute site origin for metadata, OG, sitemap, JSON-LD.
 * On Vercel, set `NEXT_PUBLIC_SITE_URL` to `https://shehrozali.vercel.app` (no trailing slash).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

const baseDescription =
  `${person.name} — software engineer and React Native developer. ` +
  `Portfolio: mobile apps, fleet & marketplace platforms, full-stack and front-end work. ` +
  `Team lead at Astra (Intelizzz). Open to collaboration and freelance projects.`;

export const seo = {
  titleDefault: `${person.name} | React Native & Full-Stack Software Engineer Portfolio`,
  titleTemplate: `%s | ${person.name}`,
  description: baseDescription,
  /** Broad coverage for discovery; primary ranking still depends on content & authority */
  keywords: [
    "Shehroz Ali Khan Zaman",
    "Shehroz Ali Khan",
    "Shehroz",
    "React Native",
    "React Native developer",
    "React Native team lead",
    "senior software engineer",
    "software engineer",
    "software engineer portfolio",
    "developer portfolio",
    "full stack developer",
    "full-stack developer",
    "mobile app developer",
    "TypeScript developer",
    "JavaScript developer",
    "freelance developer",
    "portfolio",
    "Intelizzz",
    "Astra",
    "Pakistan developer",
    "Team lead",
    "Team leader",
    "Team leader portfolio",
    "Team leader developer",
    "Team leader developer portfolio",
    "Team leader developer portfolio",
  ] as const,
  ogImagePath: "/images/shehroz.png" as const,
  locale: "en_US",
} as const;

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path.startsWith("/")) return `${base}${path}`;
  return `${base}/${path}`;
}
