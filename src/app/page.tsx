import HomePage from "@/components/pages/home-page";
import { seo } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: seo.titleDefault,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.titleDefault,
    description: seo.description,
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
