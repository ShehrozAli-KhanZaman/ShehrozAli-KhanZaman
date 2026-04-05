import { PortfolioProviders } from "@/components/portfolio-providers";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shehroz Ali Khan Zaman — Portfolio",
  description:
    "React Native developer and full-stack engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <PortfolioProviders>{children}</PortfolioProviders>
      </body>
    </html>
  );
}
