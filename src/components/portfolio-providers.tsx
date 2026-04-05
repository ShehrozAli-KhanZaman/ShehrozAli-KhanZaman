"use client";

import { HorizontalNav } from "@/components/layout/horizontal-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OnBoardingLoader() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <img
        className="block w-[clamp(120px,30vw,320px)] dark:hidden"
        src="/images/Logo-2-black.png"
        alt="Logo"
      />
      <img
        className="hidden w-[clamp(120px,30vw,320px)] dark:block"
        src="/images/Logo-2-white.png"
        alt="Logo"
      />
    </div>
  );
}

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HorizontalNav />
      <main className="app-root w-full">{children}</main>
    </>
  );
}

export function PortfolioProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="shehroz-ui-theme">
      {loading ? (
        <OnBoardingLoader />
      ) : (
        <AppShell>{children}</AppShell>
      )}
      <ToastContainer theme="dark" position="top-right" />
    </ThemeProvider>
  );
}
