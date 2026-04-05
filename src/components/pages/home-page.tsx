"use client";

import BlurText from "@/components/animations/TextAnimation";
import Mac from "@/components/extra/mac";
import { Button } from "@/components/ui/button";
import { person } from "@/lib/content";
import { ArrowRight, ChartBarStacked, DownloadIcon, Github, Linkedin, MessageCircleCode } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const githubUrl = person.social.github || "https://github.com/";
  const linkedinUrl = person.social.linkedin || "https://www.linkedin.com/";
  const stackOverflowUrl = person.social.stackOverflow || "https://stackoverflow.com/";
  const whatsAppUrl = person.social.whatsApp || "https://wa.me/+923494040587";
  const resumeUrl = person.social.resume || "https://drive.google.com/file/d/1HMxEgbrgPHrIWVCuY7L5-xo6cHUMqTw5/view?usp=drive_link";
  return (
    <>
      <div className="py-10 flex flex-col items-center justify-center">
        <div className="mb-16 text-center">
          <BlurText
            text="Ideas Refined, Products Defined."
            delay={150}
            animateBy="words"
            direction="top"
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
          />
          <p className="mb-8 max-w-2xl text-left text-lg text-gray-400">
            Turning raw ideas into products people actually use.
          </p>
          <div className={`flex flex-wrap gap-4`}>
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                See What I’ve Built <ArrowRight className="ml-2 h-4 w-4 arrow transition-transform" />
              </Link>
            </Button>
            <a href={resumeUrl} download={person.shortName} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="cursor-pointer">
                <DownloadIcon className="h-5 w-5" />
                Resume
              </Button>
            </a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={stackOverflowUrl} target="_blank" rel="noopener noreferrer">
                  <ChartBarStacked className="h-8 w-8" />
                  <span className="sr-only">Stack Overflow</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircleCode className="h-8 w-8" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Mac />
      </div>
    </>
  );
}
