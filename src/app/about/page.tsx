import BentoGrid from "@/components/bento-grid";
import { person } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `${person.name} — background, skills, and focus. ${person.headline}`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${person.name}`,
    description: person.summary.slice(0, 160),
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <BentoGrid />
    </div>
  );
}
