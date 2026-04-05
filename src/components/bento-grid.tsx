"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Laptop, Server, Smartphone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const IMG = {
  mobile: "/images/about/mobile.webp", // "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  web: "/images/about/web.jpeg", // "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  backend:
    "/images/about/backend.jpg", // "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  deploy: "/images/about/deploy.jpg", // "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  full: "/images/about/full.jpg", // "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
};

export default function BentoGrid() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full overflow-hidden py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center space-y-4 text-left"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Crafting web and mobile apps, full-stack systems, and seamless deployments — turning ideas into real products — all in one place.
            </p>
          </div>
        </motion.div>

        {isLoaded && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative col-span-full flex flex-col justify-between overflow-hidden rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm transition-all hover:shadow-md md:row-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Mobile Development</h3>
                <p className="mb-4 text-muted-foreground">
                  Cross-platform apps with React Native and Flutter — performance, maps, payments, and store
                  releases.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["React Native", "Flutter", "EAS", "iOS", "Android"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mt-auto h-50 w-full overflow-hidden rounded-lg">
                <img
                  src={IMG.mobile}
                  alt="Mobile development"
                  className="mx-auto h-50 transform object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-1 rounded-full bg-violet-500"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative col-span-full flex flex-col justify-between overflow-hidden rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm transition-all hover:shadow-md lg:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Web Development</h3>
                  <p className="mb-4 text-muted-foreground">
                  Creating fast, accessible, and high-performance web experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind","WordPress"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative h-50 overflow-hidden rounded-lg md:h-auto md:w-1/3">
                  <img
                    src={IMG.web}
                    alt="Web development"
                    className="mx-auto h-50 transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/30 to-transparent"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative col-span-full flex flex-col justify-between overflow-hidden rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm transition-all hover:shadow-md lg:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-6 md:flex-row">
                <div className="relative order-2 h-50 overflow-hidden rounded-lg md:order-1 md:h-auto md:w-1/3">
                  <img
                    src={IMG.backend}
                    alt="Backend"
                    className="h-50 transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-0 left-0 top-0 w-1/3 bg-gradient-to-r from-emerald-500/30 to-transparent"
                  />
                </div>
                <div className="order-1 flex-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Server className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Backend Development</h3>
                  <p className="mb-4 text-muted-foreground">
                  Making everything behind the scenes work — APIs, data, auth, and payments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Flask", "MySQL", "REST", "VPS","Node.js","Express","Nginx","CronJobs"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative col-span-full flex flex-col justify-between overflow-hidden rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm transition-all hover:shadow-md lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Deployment</h3>
                <p className="mb-4 text-muted-foreground">
                  Shipping to Contabo, VPS, and app stores — deployed with Nginx, Gunicorn, CronJobs, and Contabo.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["Contabo", "VPS", "Play Store","App Store","Netlify","Hostinger","Vercel","Nginx"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative mt-auto h-50 w-full overflow-hidden rounded-lg">
                <img
                  src={IMG.deploy}
                  alt="Deployment"
                  className="mx-auto h-50 transform object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500"
                >
                  <Database className="h-4 w-4 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative col-span-full overflow-hidden rounded-xl border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm transition-all hover:shadow-md lg:col-span-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">
                <div className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Laptop className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Full Stack Development</h3>
                  <p className="mb-4 max-w-2xl text-muted-foreground">
                  From interface to backend — I build complete, working products.
                  </p>
                  <div className="hidden md:block">
                    <Link
                      href="/projects"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 group-hover:scale-105"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
                <div className="relative h-50 w-full overflow-hidden rounded-lg md:h-64 md:w-1/3">
                  <img
                    src={IMG.full}
                    alt="Full stack"
                    className="mx-auto h-65 transform object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-transparent to-pink-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 100 100"
                      className="opacity-80"
                      aria-hidden
                    >
                      <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="mt-6 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
