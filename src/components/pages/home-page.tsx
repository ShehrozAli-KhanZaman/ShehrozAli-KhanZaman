"use client";

import BlurText from "@/components/animations/TextAnimation";
import Mac from "@/components/extra/mac";
import { Button } from "@/components/ui/button";
import { person } from "@/lib/content";
import { glowSocialLinkClass } from "@/lib/social-glow";
import { ArrowRight, ChartBarStacked, DownloadIcon, Github, Linkedin } from "lucide-react";
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
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={glowSocialLinkClass("green", "sm")}
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={glowSocialLinkClass("blue", "sm")}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={stackOverflowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={glowSocialLinkClass("blue", "sm")}
                aria-label="Stack Overflow"
              >
                <ChartBarStacked className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={glowSocialLinkClass("green", "sm")}
                aria-label="WhatsApp"
              >
                <WhatsAppGlyph className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Mac />
      </div>
    </>
  );
}


function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}