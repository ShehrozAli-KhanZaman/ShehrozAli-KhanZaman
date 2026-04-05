"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavUls from "@/data/nav-items";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex flex-col gap-0 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-1", className)}>
      {NavUls.map((item) => {
        const active = pathname === item.link;
        return (
          <li
            key={item.id}
            className={cn(
              active ? "bg-white shadow-md dark:bg-black" : "border-b",
              "md:rounded-sm",
            )}
          >
            <Link
              href={item.link}
              onClick={onNavigate}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function HorizontalNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-8 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            className="ml-[-10px] block h-10 w-auto dark:hidden"
            src="/images/Logo.svg"
            alt="Shehroz Ali"
          />
          <img
            className="ml-[-10px] hidden h-10 w-auto dark:block"
            src="/images/Logo-2.svg"
            alt="Shehroz Ali"
          />
          {/* <span className="text-sm font-semibold">Shehroz</span> */}
        </Link>

        <nav className="hidden flex-1 md:flex md:justify-center" aria-label="Main">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,18rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6" aria-label="Mobile main">
                <NavLinks onNavigate={() => setOpen(false)} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
