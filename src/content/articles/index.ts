import type { Article } from "@/content/types";
import type { SectionId } from "@/lib/site";
import flip717 from "./717-flip-ism-jolts";
import energyLoad from "./energy-load-not-a-ticket";
import hormuz from "./hormuz-larak-not-a-90-breakout";
import japan from "./japan-10y-highest-since-1996";
import noWarsh from "./no-warsh-tuesday";
import qqq from "./qqq-0dte-close-vs-midday";
import robustness from "./robustness-is-the-edge";
import spy from "./spy-friday-gamma";
import printZero from "./the-print-was-zero";
import wti from "./wti-not-a-ticket";

export const articles: Article[] = [
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
