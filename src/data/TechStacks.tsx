import { Code, Database, Layers, Server, Smartphone } from "lucide-react";
import type { ReactElement } from "react";

export type StackTab = {
  id: string;
  label: string;
  icon: ReactElement;
  content: string[];
};

const Tabs: StackTab[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layers className="h-5 w-5" />,
    content: [
      "React.js",
      "Vite",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Redux",
      "HTML",
      "CSS",
      "Vanilla JS",
      "Responsive UI",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="h-5 w-5" />,
    content: [
      "Python",
      "Flask",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "MySQL",
      "Cloud Services",
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: <Code className="h-5 w-5" />,
    content: [
      "Contabo",
      "VPS",
      "Play Store",
      "App Store",
      "Netlify",
      "Hostinger",
      "Vercel",
      "Nginx",
      "EAS",
      "GCP",
      "Payment Gateways",
    ],
  },
  {
    id: "mobile",
    label: "Mobile App",
    icon: <Smartphone className="h-5 w-5" />,
    content: [
      "React Native",
      "iOS",
      "Android",
      "Mobile UI/UX",
      "Play Store",
      "App Store",
      "Optimization",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: <Database className="h-5 w-5" />,
    content: ["MongoDB", "MySQL", "Firebase","Supabase"],
  },
];

export default Tabs;
