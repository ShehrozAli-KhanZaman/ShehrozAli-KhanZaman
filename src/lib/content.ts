export const person = {
  name: "Shehroz Ali Khan Zaman",
  shortName: "Shehroz",
  /** Canonical live site (set the same value in Vercel: `NEXT_PUBLIC_SITE_URL`) */
  portfolioUrl: "https://shehrozali.vercel.app" as const,
  birthDate: "March 23, 2000",
  email: "shehrozalikhanzaman@gmail.com",
  location: "Building products remotely · Astra & collaborators",
  headline:
    "React Native developer and team lead shipping fleet, marketplace, and social platforms end to end.",
  summary:
    "I design and build cross-platform mobile apps and supporting APIs— from installer workflows and live maps to payments and production deployments. At Astra I lead the React Native team on Intelizzz (fleet management & field installs). I also work with E Networks and CODE MORE OFFICIAL, and take on freelance full-stack and front-end work.",
  roles: [
    "Software Engineer · Freelancer",
    "Full stack developer",
    "Front end developer",
  ],
  social: {
    github: "https://github.com/ShehrozAli-KhanZaman" as string,
    linkedin: "https://www.linkedin.com/in/shehrozali143/" as string,
    stackOverflow: "https://stackoverflow.com/users/22878684/shehroz-ali" as string,
    whatsApp: "https://wa.me/923184037903" as string,
    resume: "https://drive.google.com/file/d/1HMxEgbrgPHrIWVCuY7L5-xo6cHUMqTw5/view?usp=drive_link" as string,
  },
  currentFocus: {
    company: "Astra",
    project: "Intelizzz",
    role: "React Native team lead",
  },
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  note?: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "React Native Developer & Team Lead",
    company: "Astra",
    period: "Sep 2025 – Present",
    note: "Intelizzz — fleet management & installer field app",
    bullets: [
      "Lead the React Native team: sprints, PR reviews, and coordination with backend and QA.",
      "Own major UI flows for the installer module: scanning, guided install/uninstall, documentation uploads.",
      "Integrate Scandit, maps, OneSignal, and persisted Redux Toolkit state for scalable features.",
    ],
  },
  {
    title: "React Native Developer",
    company: "E Networks",
    period: "Sep 2024 – Present",
    note: "Full-time for ~12 months; part-time from Sep 2025 alongside Astra",
    bullets: [
      "Delivered production features on a long-running React Native codebase.",
      "Balanced capacity across concurrent engagements while keeping release quality high.",
    ],
  },
  {
    title: "Software Engineer",
    company: "CODE MORE OFFICIAL",
    period: "Dec 2023 – Present",
    bullets: [
      "Full-stack and mobile delivery across client products using modern React and React Native stacks.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Techanzy Pvt Ltd",
    period: "Feb 2023 – Nov 2023",
    bullets: [
      "Built responsive web interfaces and collaborated on product UI with design and backend teams.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  role?: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  body?: string[];
  problemSolution?: { problem: string; solution: string };
};

export const projects: Project[] = [
  {
    slug: "real-exchange-app",
    title: "Real Exchange App",
    subtitle: "React Native · Property marketplace",
    tagline:
      "A complete mobile marketplace for modern real estate transactions.",
    role: "Lead mobile implementation",
    featured: true,
    stack: [
      "React Native CLI",
      "Redux",
      "REST APIs",
      "Mapbox",
      "JazzCash",
      "IAP",
    ],
    highlights: [
      "Listings for rent, sale, and investment with rich filters and Mapbox-powered discovery.",
      "JazzCash plus in-app purchases for premium visibility and monetization.",
      "Optimized lists, scalable architecture, and polished mobile UX.",
    ],
    body: [
      "Real Exchange is a full-featured real estate app for buying, selling, and renting— with secure payments and listing promotion built in.",
    ],
  },
  {
    slug: "real-exchange-backend",
    title: "Real Exchange Backend",
    subtitle: "Flask · MySQL · VPS",
    tagline: "Scalable Flask APIs powering real-time property systems.",
    featured: true,
    stack: ["Python", "Flask", "MySQL", "Nginx", "Gunicorn", "Linux VPS"],
    highlights: [
      "REST APIs for properties, users, and transactions with auth and protected routes.",
      "Payment validation hooks for JazzCash and in-app purchase flows.",
      "Deployed on Contabo with Nginx + Gunicorn for production traffic.",
    ],
    body: [
      "The backend is the core engine for Real Exchange— data, auth, and secure integrations for the mobile clients.",
    ],
    problemSolution: {
      problem:
        "Mobile clients needed reliable, secure APIs and payment-aware workflows at production scale.",
      solution:
        "A Flask service with clear domain boundaries, MySQL persistence, and a hardened VPS deployment path.",
    },
  },
  {
    slug: "realtormfi",
    title: "RealtorMFI Web",
    subtitle: "Next.js · SEO · Production",
    tagline:
      "Fast, SEO-optimized real estate platform built with Next.js.",
    featured: true,
    stack: ["Next.js (App Router)", "React", "Tailwind CSS", "REST APIs", "Nginx"],
    highlights: [
      "SSR for performance and SEO; responsive layouts across devices.",
      "Reusable components and API integration for live listing data.",
    ],
    body: [
      "RealtorMFI.com complements the mobile products with a marketing- and search-friendly web presence.",
    ],
  },
  {
    slug: "fruitychat",
    title: "FruityChat",
    subtitle: "React Native · Social & commerce",
    tagline:
      "Cross-platform social, messaging, marketplace, jobs, and bookings in one app.",
    role: "Lead React Native developer",
    featured: false,
    stack: [
      "React Native 0.75",
      "Redux Toolkit",
      "Socket.io",
      "WebRTC",
      "Stripe",
      "Mapbox",
      "Firebase",
    ],
    highlights: [
      "Feed, stories/reels, real-time chat, and WebRTC voice calls.",
      "Company pages, maps, cart/checkout with Stripe, jobs, and growth features (wallet, referrals, ads).",
      "i18n, analytics, push notifications, and store-ready native integrations.",
    ],
    body: [
      "Shipping FruityChat meant one navigation and state model across social, commerce, and business tools— with careful handling of sockets, WebRTC lifecycle, and deep links across modules.",
      "As lead, I set patterns for screens and API layers, reviewed code, and aligned releases with backend and design.",
    ],
  },
  {
    slug: "intelizzz",
    title: "Intelizzz Mobile",
    subtitle: "Fleet · Installers · Live tracking",
    tagline:
      "Cross-platform fleet, installer workflows, and real-time tracking in one app.",
    role: "React Native developer & team lead @ Astra",
    featured: false,
    stack: [
      "React Native 0.82",
      "Redux Toolkit",
      "Scandit",
      "React Native Maps",
      "OneSignal",
      "Formik / Yup",
    ],
    highlights: [
      "Dashboard module: device status, alerts, hierarchy, and reporting.",
      "Installer flows: VIN/device scanning, guided install/uninstall, photo documentation.",
      "Go Locate: live tracking, map navigation, and locate mode with real-time updates.",
    ],
    problemSolution: {
      problem:
        "Fleet teams needed one mobile surface for monitoring, field installs, and live visibility.",
      solution:
        "A modular React Native app with role-based access, barcode scanning, maps, and push alerts.",
    },
    body: [
      "I contribute across installer UX, integrations (Scandit, maps, OneSignal), and Redux architecture— while leading sprint planning and release coordination for the mobile team.",
    ],
  },
];
