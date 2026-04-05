import { person } from "@/lib/content";
import { absoluteUrl, getSiteUrl, seo } from "@/lib/site-config";

export function JsonLd() {
  const url = getSiteUrl();
  const imageUrl = absoluteUrl(seo.ogImagePath);

  const graph = [
    {
      "@type": "Person",
      "@id": `${url}/#person`,
      name: person.name,
      alternateName: ["Shehroz Ali Khan", person.shortName],
      description: person.summary,
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      url,
      email: person.email,
      jobTitle: person.roles[0] ?? "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: person.currentFocus.company,
      },
      knowsAbout: [
        "React Native",
        "React",
        "JavaScript",
        "TypeScript",
        "Mobile development",
        "Full-stack development",
        "Software engineering",
      ],
      sameAs: [
        person.social.github,
        person.social.linkedin,
        person.social.stackOverflow,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#website`,
      name: `${person.name} — Portfolio`,
      url,
      description: person.headline,
      publisher: { "@id": `${url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}/#profilepage`,
      name: `${person.name} — Portfolio`,
      url,
      mainEntity: { "@id": `${url}/#person` },
      isPartOf: { "@id": `${url}/#website` },
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
