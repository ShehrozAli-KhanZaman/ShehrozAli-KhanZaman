"use client";

import Experience from "@/data/experiences-data";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ExperiencesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="mx-auto w-full px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Experience & Growth</h2>

      <div className="relative">
        <div className="absolute left-0 h-full w-px bg-gray-200 dark:bg-gray-700 md:left-1/2 md:-translate-x-1/2" />

        {Experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative mb-12 md:mb-16 ${index % 2 === 0
              ? "md:ml-0 md:mr-auto md:pr-12"
              : "md:ml-auto md:mr-0 md:pl-12 "
              } w-full pl-10 md:w-1/2 md:pl-0  md:px-12 sm:px-0`}
          >
            <div className={`absolute left-0 top-0 h-4 w-4 -translate-y-1/4 rounded-full bg-primary transform md:translate-x-2 ${index % 2 === 0 ? "md:left-auto md:right-0" : "md:left-0 md:right-auto md:hidden"}`} />
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleExpand(exp.id);
              }}
              className="cursor-pointer rounded-lg border border-gray-100 bg-white/80 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/80 hover:scale-105 hover:shadow-lg cursor-pointer shadow-primary/20 transition-all duration-300 hover:bg-primary/20"
              onClick={() => toggleExpand(exp.id)}
            >
              
              <div className="flex cursor-pointer items-center justify-between">
              <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 my-2 rounded-xl sm:rounded-2xl p-2 sm:p-3   bg-primary/10 border border-primary/20" /> 
              {expandedId === exp.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-black dark:text-gray-400" />
                )}
                {/* {expandedId === exp.id ? (
                  <ChevronUpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 my-2 rounded-xl sm:rounded-2xl p-2 sm:p-3   bg-primary/10 border border-primary/20" />
                ) : (
                  <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 my-2 rounded-xl sm:rounded-2xl p-2 sm:p-3   bg-primary/10 border border-primary/20" />
                )} */}
              </div>
              <h3 className="text-xl font-bold text-left mt-1">{exp.role}</h3>

              <div className="flex items-center gap-4 py-4">
                {/* Left: Image */}
                <img
                  src={exp.image}
                  className="h-10 w-10 sm:h-16 sm:w-16 rounded-md object-cover border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
                  alt=""
                />

                {/* Right: Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <p className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500/80 transition-all duration-300 text-lg">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-500/80 transition-all duration-300" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </div>

              {expandedId === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <p className="mb-3 text-gray-600 dark:text-gray-300">{exp.description}</p>

                  {exp.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
