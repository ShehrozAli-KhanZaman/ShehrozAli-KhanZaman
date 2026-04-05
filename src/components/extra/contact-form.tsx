"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { CheckIcon, Loader2Icon, SendIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const serviceId ="service_x04mxnf"; // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId ="template_2n9kkmr"; // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = "5f4I18g0_6FsEneC9" // process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const receiverEmail = "shehrozalikhanzaman@gmail.com" // process.env.NEXT_PUBLIC_RECEIVER_EMAIL;

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
    <div className="relative mx-auto w-full max-w-md">
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
        )}
      </div>
    </div>
  );
}
