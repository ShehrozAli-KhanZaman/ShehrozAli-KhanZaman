import ExperiencesPage from "@/components/pages/experiences-page";
import { person } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work experience of ${person.name} — React Native team lead, software engineer roles at Astra and collaborators.`,
  alternates: { canonical: "/experiences" },
  openGraph: {
    title: `Experience | ${person.name}`,
    description: `Professional experience: ${person.headline}`,
    url: "/experiences",
  },
};

export default function Experiences() {
  return <ExperiencesPage />;
}
