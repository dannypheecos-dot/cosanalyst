import type { Article } from "@/content/types";
import type { SectionId } from "@/lib/site";
import flip717 from "./717-flip-ism-jolts";
import energyLoad from "./energy-load-not-a-ticket";
import hormuz from "./hormuz-larak-not-a-90-breakout";
import japan from "./japan-10y-highest-since-1996";
import laborDay from "./labor-day-hangover";
import noWarsh from "./no-warsh-tuesday";
import qqq from "./qqq-0dte-close-vs-midday";
import robustness from "./robustness-is-the-edge";
import spy from "./spy-friday-gamma";
import printZero from "./the-print-was-zero";
import wti from "./wti-not-a-ticket";

export const articles: Article[] = [
  laborDay,
  flip717,
  energyLoad,
  printZero,
  qqq,
  japan,
  noWarsh,
  wti,
  hormuz,
  robustness,
  spy,
].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function articlesFor(section: SectionId): Article[] {
  return articles.filter(
    (article) => article.section === section || article.also.includes(section),
  );
}

export type ArticleTeaser = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  section: SectionId;
  ogImage: string;
  ogAlt: string;
};

export function toTeaser(article: Article): ArticleTeaser {
  return {
    slug: article.slug,
    title: article.title,
    dek: article.dek,
    date: article.date,
    section: article.section,
    ogImage: article.ogImage,
    ogAlt: article.ogAlt,
  };
}

export function articleTeasers(list: Article[] = articles): ArticleTeaser[] {
  return list.map(toTeaser);
}

const SECTOR_RELEVANT = new Set([
  "robustness-is-the-edge",
  "energy-load-not-a-ticket",
  "wti-not-a-ticket",
]);

export function isSectorRelevant(slug: string): boolean {
  return SECTOR_RELEVANT.has(slug);
}
