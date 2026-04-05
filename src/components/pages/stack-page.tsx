"use client";

import Tabs from "@/data/TechStacks";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function StackPage() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16">
      <h2 className="mb-12 text-left text-3xl font-bold">Technical Skills</h2>

      <div className="mb-12 flex flex-wrap justify-start gap-2">
        {Tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full transition-all duration-500 backdrop-blur-sm border whitespace-nowrap flex-shrink-0 hover:scale-105 hover:shadow-lg cursor-pointer bg-primary/10 border-primary/30 text-primary shadow-lg shadow-primary/20",
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80",
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 -z-10 rounded-full bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative min-h-[300px] rounded-xl bg-muted/30 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20">
                {Tabs.find((tab) => tab.id === activeTab)?.icon}
              </div>
              <h3 className="text-2xl font-semibold">
                {Tabs.find((tab) => tab.id === activeTab)?.label}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {Tabs.find((tab) => tab.id === activeTab)?.content.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-lg bg-background p-4 text-sm shadow-sm transition-shadow hover:shadow-md hover:scale-105 hover:shadow-lg cursor-pointer shadow-lg shadow-primary/20"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
