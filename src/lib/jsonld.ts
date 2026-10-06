import { SITE, WHATSAPP_NUMBER, SERVICES, type Case } from "./content";

const ORG_ID = `${SITE.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "sales",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
    ...(SITE.email && { email: SITE.email }),
    sameAs: [SITE.instagram, SITE.linkedin].filter((u) => u && !u.endsWith("/")),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: `${SITE.name}_`,
    url: SITE.url,
    description:
      "Consultoria digital que atua como a área de produto das empresas. Sites, bots com IA, automações, apps e sistemas de gestão sob medida.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "BR",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.7172,
      longitude: -38.5433,
    },
    parentOrganization: { "@id": ORG_ID },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name}_`,
    url: SITE.url,
    publisher: { "@id": ORG_ID },
  };
}

export function servicesSchema() {
  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "BR" },
  }));
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function caseBreadcrumb(c: Case) {
  return breadcrumbSchema([
    { name: "ProdTech", url: SITE.url },
    { name: "Cases", url: `${SITE.url}/#cases` },
    { name: c.title, url: `${SITE.url}/cases/${c.slug}` },
  ]);
}
