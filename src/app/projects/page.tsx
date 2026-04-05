import ProjectsPage from "@/components/pages/projects-page";
import { person } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${person.name} — React Native apps, web platforms, fleet & marketplace products.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${person.name}`,
    description: `Portfolio projects: mobile and web applications by ${person.name}.`,
    url: "/projects",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
