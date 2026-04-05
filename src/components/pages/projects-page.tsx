"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Project from "@/data/projects-data";
import { motion } from "framer-motion";
import { Apple, ExternalLink, Globe, Play, Smartphone } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all" ? Project : Project.filter((p) => p.type === activeTab);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-16 space-y-2 text-center">
        <h2 className="text-left text-3xl font-bold tracking-tighter md:text-4xl">My Projects</h2>
        <p className="max-w-[700px] text-left text-muted-foreground">
          A collection of my recent work in mobile and web development
        </p>
      </div>

      <Tabs value={activeTab} className="mb-12" onValueChange={setActiveTab}>
        <div className="flex justify-start">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">
              <Globe className="mr-2 h-4 w-4" />
              Web
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-lg"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute right-3 top-3">
                <Badge variant={project.type === "web" ? "default" : "secondary"}>
                  {project.type === "web" ? (
                    <Globe className="mr-1 h-3 w-3" />
                  ) : (
                    <Smartphone className="mr-1 h-3 w-3" />
                  )}
                  {project.type}
                </Badge>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={`flex gap-2 pt-3 ${project.isAvailable ? "block" : "hidden"}`}>
                
                {project.links.google && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.links.google} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-1 h-4 w-4" />
                    Play
                  </a>
                </Button>
                )}
                {project.links.apple && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.links.apple} target="_blank" rel="noopener noreferrer">
                    <Apple className="mr-1 h-4 w-4" />
                   iOS
                  </a>
                </Button>
                )}
                {project.links.live && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Website
                  </a>
                </Button>
                )}
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
