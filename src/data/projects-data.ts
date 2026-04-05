export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: { live: string, apple: string, google: string };
  type: "web" | "mobile";
  isAvailable: boolean;
};

const Project: ProjectItem[] = [

  {
    id: 1,
    title: "Intelizzz Mobile",
    description:
      "Fleet, installer workflows, and live tracking — Scandit, maps, OneSignal.",
    image:
      "/images/projects/intelizzz.jpeg",
    tags: ["React Native", "Redux Toolkit", "Maps", "Scandit"],
    links: { live: "https://www.intelizzz.co.uk/", apple: "https://apps.apple.com/gb/app/intelizzz/id1533605708", google: "https://play.google.com/store/apps/details?id=com.intelizzz.installer" },
    type: "mobile",
    isAvailable: true,
  },
  {
    id: 2,
    title: "FruityChat",
    description:
      "Social feed, chat, marketplace, jobs, maps, bookings, businessess and more — React Native at scale.",
    image:
      "/images/projects/fruitychat.png",
    tags: ["React Native", "Socket.io", "Stripe", "Firebase"],
    links: { live: "https://fruitychat.com",
       apple: "https://apps.apple.com/us/app/fruity-chat-connecting-people/id6737190863",
        google: "https://play.google.com/store/apps/details?id=com.digitalhelpuk.fruitychatapp&hl=en"
      },
    type: "mobile",
    isAvailable: true,
  },
  {
    id: 3,
    title: "Real Exchange App",
    description:
      "Full-featured real estate marketplace for buy, sell, and rent — Mapbox, JazzCash, IAP.",
    image:
      "/images/projects/realexchange.webp",
    tags: ["React Native", "Redux", "REST APIs", "Mapbox"],
    links: { live: "https://root.real-exchange.com/", apple: "https://apps.apple.com/pk/app/real-exchange/id6475013131", google: "https://play.google.com/store/apps/details?id=com.techanzy.realexchange" },
    type: "mobile",
    isAvailable: true,
  },
  {
    id: 4,
    title: "Real Exchange Backend",
    description:
      "Flask APIs, MySQL, JazzCash & IAP validation — deployed on Contabo with Nginx + Gunicorn.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Python", "Flask", "MySQL", "REST"],
    links: { live: "", apple: "", google: "" },
    type: "web",
    isAvailable: false,
  },
  {
    id: 5,
    title: "RealtorMFI Web",
    description:
      "SEO-friendly Next.js property listings and services — fast SSR and responsive UI.",
    image:
      "/images/projects/rmfi.png",
    tags: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    links: { live: "https://realtormfi.com", apple: "", google: "" },
    type: "web",
    isAvailable: true,
  },

];

export default Project;
