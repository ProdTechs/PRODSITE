import type { MetadataRoute } from "next";
import { CASES, SITE } from "@/lib/content";

const capabilities = [
  "descoberta-e-estrategia",
  "experiencias-digitais",
  "operacao-inteligente",
  "receita-e-relacionamento",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/v2`, changeFrequency: "monthly", priority: 0.9 },
    ...capabilities.map((slug) => ({ url: `${SITE.url}/v2/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...CASES.map((item) => ({ url: `${SITE.url}/cases/${item.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
    { url: `${SITE.url}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
