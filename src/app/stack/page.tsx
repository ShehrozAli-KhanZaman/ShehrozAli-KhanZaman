import StackPage from "@/components/pages/stack-page";
import { person } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: `Technologies and tools used by ${person.name} — React Native, TypeScript, full-stack stack.`,
  alternates: { canonical: "/stack" },
  openGraph: {
    title: `Tech Stack | ${person.name}`,
    description: `Skills and technologies: React Native, JavaScript, TypeScript, and more.`,
    url: "/stack",
  },
};

export default function Stack() {
  return <StackPage />;
}
