import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { absUrl, nav } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-01T20:00:00.000Z");

  const routes: MetadataRoute.Sitemap = [
    ...nav.map((item) => ({
      url: absUrl(item.href),
      lastModified: now,
      changeFrequency: (item.href === "/" ? "daily" : "weekly") as
        | "daily"
        | "weekly",
      priority: item.href === "/" ? 1 : 0.7,
    })),
    {
      url: absUrl("/articles/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  const notes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absUrl(`/articles/${article.slug}/`),
    lastModified: new Date(`${article.date}T20:00:00.000Z`),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...notes];
}
