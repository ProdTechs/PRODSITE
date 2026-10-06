import type { MetadataRoute } from "next";
import { CASES, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    ...CASES.map((item) => ({
      url: `${SITE.url}/cases/${item.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    { url: `${SITE.url}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
