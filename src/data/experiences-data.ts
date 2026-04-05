export type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  image: string;
};

const Experience: ExperienceItem[] = [
  {
    id: 0,
    role: "Senior React Native Developer",
    company: "Astra Innovation",
    period: "Sep 2025 – Present",
    description:
      "Leading the React Native team on Intelizzz: installer flows, Scandit, maps, OneSignal, Redux persistence. Optimize app performance, memory usage, and startup times across iOS and Android platforms. Integrate RESTful and GraphQL APIs while maintaining secure authentication flows. Release coordination with backend and QA.",
    skills: [
      "React Native",
      "Redux Toolkit",
      "Scandit",
      "Maps",
      "Team lead",
      "OneSignal",
    ],
    image:
      "/images/companies/astra_protocol_logo.jfif",
  },
  {
    id: 1,
    role: "Senior React Native Developer",
    company: "E Networks",
    period: "Sep 2024 – Present",
    description:
      "Design, develop, and maintain cross-platform mobile apps with React Native. Lead project planning, defining scope, objectives, and timelines. Mentor junior developers and perform code reviews. Integrate external APIs and ensure data security. Publish and maintain apps on both Apple TestFlight and Google Play Store",
    skills: ["React Native", "REST APIs", "Mobile UX", "Stripe", "Firebase", "Push Notifications", "In App Purchases"],
    image:
      "/images/companies/enetwroks.png",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Code More",
    period: "Dec 2023 – Present",
    description:
      "Full-stack and mobile delivery across client products with modern React and React Native stacks.",
    skills: ["React", "Node.js", "REST", "Next.js"],
    image:
      "/images/companies/codemore.jpeg",
  },
  {
    id: 3,
    role: "Front End Developer",
    company: "Techanzy Pvt Ltd",
    period: "Feb 2023 – Nov 2023",
    description:
      "Responsive web interfaces and collaboration with design and backend teams. Implement responsive UI components, optimize page load times, and integrate payment gateways for secure transactions. Ensure cross-browser compatibility and accessibility standards are met.",
    skills: ["React Native", "Mapbox", "JazzCash Payment Gateway", "IAP", "Expo Push Notifications"],
    image:
      "/images/companies/techanzy_logo.jpeg",
  },
];

export default Experience;
