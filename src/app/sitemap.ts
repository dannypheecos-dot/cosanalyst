import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { absUrl, sitemapPaths } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-09-04T20:00:00.000Z");

  const routes: MetadataRoute.Sitemap = sitemapPaths.map((path) => ({
    url: absUrl(path),
    lastModified: now,
    changeFrequency: (path === "/" || path === "/0dte-challenge/"
      ? "daily"
      : "weekly") as "daily" | "weekly",
    priority:
      path === "/" ? 1 : path === "/0dte-challenge/" ? 0.85 : path === "/research/" ? 0.8 : 0.7,
  }));

  const notes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absUrl(`/articles/${article.slug}/`),
    lastModified: new Date(`${article.date}T20:00:00.000Z`),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...notes];
}
