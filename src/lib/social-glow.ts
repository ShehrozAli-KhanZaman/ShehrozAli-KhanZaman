import { cn } from "@/lib/utils";

const glowBlue =
  "shadow-[0_0_22px_rgba(56,189,248,0.45)] hover:shadow-[0_0_32px_rgba(56,189,248,0.65)] hover:border-sky-500/40";
const glowGreen =
  "shadow-[0_0_22px_rgba(74,222,128,0.4)] hover:shadow-[0_0_32px_rgba(74,222,128,0.6)] hover:border-green-500/40";

/** Shared neon circular social link — contact page uses `default` (56px); hero can use `sm` (44px). */
export function glowSocialLinkClass(glow: "blue" | "green", size: "default" | "sm" = "default") {
  return cn(
    "flex shrink-0 items-center justify-center rounded-full border border-zinc-700/60 bg-zinc-950/90 transition-transform duration-200 hover:scale-105",
    size === "default" && "h-14 w-14",
    size === "sm" && "h-10 w-10",
    glow === "blue" && ["text-sky-400", glowBlue],
    glow === "green" && ["text-green-400", glowGreen],
  );
}
