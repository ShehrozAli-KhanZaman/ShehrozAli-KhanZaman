import { JsonLd } from "@/components/seo/json-ld";
import { PortfolioProviders } from "@/components/portfolio-providers";
import { person } from "@/lib/content";
import { absoluteUrl, getSiteUrl, seo } from "@/lib/site-config";
import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
const ogImage = absoluteUrl(seo.ogImagePath);

// Tab / “Add to Home Screen” icons: `src/app/icon.png` + `apple-icon.png` (Next.js app directory convention).

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.titleDefault,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: `${person.name} Portfolio`,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  publisher: person.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: siteUrl,
    siteName: `${person.name} — Portfolio`,
    title: seo.titleDefault,
    description: seo.description,
    images: [
      {
        url: ogImage,
        alt: `${person.name} — software engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titleDefault,
    description: seo.description,
    images: [ogImage],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <JsonLd />
        <PortfolioProviders>{children}</PortfolioProviders>
      </body>
    </html>
  );
}
