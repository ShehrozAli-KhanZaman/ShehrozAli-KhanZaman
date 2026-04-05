import ContactForm from "@/components/extra/contact-form";
import { person } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${person.name} — ${person.email}. Send a message or reach out via LinkedIn, GitHub, or WhatsApp.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${person.name}`,
    description: `Get in touch with ${person.name}, software engineer and React Native developer.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden">
      <ContactForm />
    </div>
  );
}
