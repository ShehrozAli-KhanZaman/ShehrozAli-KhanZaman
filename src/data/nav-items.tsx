import type { LucideIcon } from "lucide-react";
import {
  Compass,
  FolderCheck,
  House,
  Info,
  Layers,
  MessageSquareText,
} from "lucide-react";

export type NavItem = {
  id: number;
  title: string;
  icon: LucideIcon;
  link: string;
};

const NavUls: NavItem[] = [
  { id: 0, title: "Home", icon: House, link: "/" },
  { id: 1, title: "About", icon: Info, link: "/about" },
  { id: 2, title: "My Stack", icon: Layers, link: "/stack" },
  { id: 3, title: "Experience", icon: Compass, link: "/experiences" },
  { id: 4, title: "Projects", icon: FolderCheck, link: "/projects" },
  { id: 5, title: "Contact", icon: MessageSquareText, link: "/contact" },
];

export default NavUls;
