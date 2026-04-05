"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { person } from "@/lib/content";
import { glowSocialLinkClass } from "@/lib/social-glow";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { CheckIcon, Github, Linkedin, Loader2Icon, Mail, SendIcon } from "lucide-react";
import { type ReactNode, useState } from "react";
import { toast } from "react-toastify";

const serviceId ="service_x04mxnf"; // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId ="template_2n9kkmr"; // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = "5f4I18g0_6FsEneC9" // process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const receiverEmail = "shehrozalikhanzaman@gmail.com" // process.env.NEXT_PUBLIC_RECEIVER_EMAIL;

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function SocialButtons() {
  const items: {
    href: string;
    label: string;
    glow: "blue" | "green";
    node: ReactNode;
  }[] = [
    {
      href: person.social.linkedin,
      label: "LinkedIn",
      glow: "blue",
      node: <Linkedin className="h-6 w-6" strokeWidth={1.5} />,
    },
    {
      href: person.social.github,
      label: "GitHub",
      glow: "green",
      node: <Github className="h-6 w-6" strokeWidth={1.5} />,
    },
    {
      href: person.social.whatsApp,
      label: "WhatsApp",
      glow: "green",
      node: <WhatsAppGlyph className="h-6 w-6" />,
    },
    {
      href: `mailto:${person.email}`,
      label: "Email",
      glow: "blue",
      node: <Mail className="h-6 w-6" strokeWidth={1.5} />,
    },
  ];

  return (
    <div
      className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 lg:flex-col lg:gap-5 lg:pt-2"
      aria-label="Social and contact links"
    >
      {items.map(({ href, label, glow, node }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className={glowSocialLinkClass(glow)}
          aria-label={label}
        >
          {node}
        </a>
      ))}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      toast.info(
        "Email service is not configured. Reach me directly at shehrozalikhanzaman@gmail.com",
        { position: "top-right", autoClose: 5000 },
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          to_name: "Shehroz",
          email: formData.email,
          to_email: receiverEmail ?? "shehrozalikhanzaman@gmail.com",
          message: formData.message,
          subject: "Contact Form Submission",
        },
        publicKey,
      );
      setIsSubmitting(false);
      toast.success("Thank you! I will get back to you as soon as possible.", {
        position: "top-right",
        autoClose: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again or email directly.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-xl" />

      <div className="relative z-10">
        <h2 className="mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-left text-3xl font-bold tracking-tight text-transparent">
          Let&apos;s Connect
        </h2>
        <p className="mb-8 max-w-[90%] text-left text-muted-foreground">
          Drop a message in the digital bottle
        </p>

        {isSubmitted ? (
          <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-background to-primary/5 p-8">
            <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <div className="relative flex flex-col items-center justify-center space-y-3 py-6">
              <div className="rounded-full bg-primary/10 p-3">
                <CheckIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Message in flight!</h3>
              <p className="text-center text-muted-foreground">Your words are on their way.</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12">
            <form onSubmit={handleSubmit} className="min-w-0 space-y-6">
              <div className="space-y-4">
              <div
                className={cn(
                  "relative overflow-hidden rounded-xl border transition-all duration-300",
                  activeField === "name" ? "shadow-lg shadow-primary/10" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-10 transition-opacity duration-300",
                    activeField === "name"
                      ? "from-primary/20 to-primary/5 opacity-100"
                      : "from-transparent to-transparent",
                  )}
                />
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  placeholder="Your Name"
                  required
                  className="relative z-10 h-14 border-0 bg-transparent pl-5 pr-5 placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <div
                className={cn(
                  "relative overflow-hidden rounded-xl border transition-all duration-300",
                  activeField === "email" ? "shadow-lg shadow-primary/10" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-10 transition-opacity duration-300",
                    activeField === "email"
                      ? "from-primary/20 to-primary/5 opacity-100"
                      : "from-transparent to-transparent",
                  )}
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  placeholder="Your Email"
                  required
                  className="relative z-10 h-14 border-0 bg-transparent pl-5 pr-5 placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              <div
                className={cn(
                  "relative overflow-hidden rounded-xl border transition-all duration-300",
                  activeField === "message" ? "shadow-lg shadow-primary/10" : "shadow",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-10 transition-opacity duration-300",
                    activeField === "message"
                      ? "from-primary/20 to-primary/5 opacity-100"
                      : "from-transparent to-transparent",
                  )}
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  placeholder="Your Message"
                  required
                  className="relative z-10 min-h-[140px] resize-none border-0 bg-transparent pl-5 pr-5 pt-4 placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="relative mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
              >
                <span className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2Icon className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="transition-transform duration-300 group-hover:translate-x-[-4px]">
                        Send Message
                      </span>
                      <SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </>
                  )}
                </div>
              </Button>

              <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary/30" />
              <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-primary/30" />
            </div>
            </form>

            <aside className="flex justify-center lg:justify-start lg:pl-2">
              <SocialButtons />
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
