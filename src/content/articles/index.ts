import type { Article } from "@/content/types";
import type { SectionId } from "@/lib/site";
import brazilRecap from "./brazil-stocks-lula-ewz-premarket-2026-10-26";
import oilPriceThisWeek from "./oil-price-this-week-wti-dow-close-2026-10-23";
import oilAbove100 from "./oil-above-100-wti-brent-dow-2026-10-23";
import rotationHoldsClose from "./rotation-holds-dow-530-ai-lags-netflix-close-oct-2026";
import rotationInReverse from "./fridays-rotation-runs-in-reverse-earnings-week-oct-2026";
import nasdaqWeeklyLossClose from "./close-nasdaq-first-weekly-loss-in-five-weeks-qqq-down-5-5-percent-oct-2026";
import nasdaqWeeklyLossMidday from "./first-nasdaq-weekly-loss-in-five-weeks-ai-cyber-selloff-opex-oct-2026";
import flip717 from "./717-flip-ism-jolts";
import cpiCloseRecap from "./hot-core-cpi-close-tech-sells-defensives-bid-oct-2026";
import cpiDayCoreHot from "./september-cpi-2026-core-hot-fed-october-hike-odds";
import calmBeforeCpi from "./calm-before-cpi-has-no-cushion-oct-2026";
import cpiTomorrow from "./cpi-tomorrow-hot-headline-soft-core-oct-2026";
import banksBeat from "./banks-beat-stocks-sold-oct-2026";
import latencyLeaders from "./latency-leaders-ai-stocks-long-term";
import importPricesMorningRecap from "./import-prices-september-2026-2-year-yield-barely-moves-opex-oct-2026";
import warshHeardHold from "./warsh-didnt-say-hold-market-heard-it-oct-2026";
import eveningCloseRecap from "./close-sp-500-green-despite-hot-ppi-10-year-yield-falls-oct-2026";
import eiaMiddayRecap from "./eia-crude-inventories-plunge-energy-stocks-slip-oct-2026";
import ppiMorningRecap from "./ppi-september-2026-producer-prices-jump-10-year-falls-oct-2026";
import seoulCircuitBreaker from "./seoul-circuit-breaker-10y-fell-anyway-oct-2026";
import seoulChips from "./seoul-chips-cracked-sp-yawned-oct-2026";
import energyInto66 from "./energy-into-66-xle-sep-2026";
import lightningX402 from "./lightning-x402-ai-agents-pay-sep-2026";
import energyLoad from "./energy-load-not-a-ticket";
import fedCreditJunk from "./fed-says-credit-is-fine-junk-market-disagrees-oct-2026";
import fedHikeOdds from "./fed-hike-odds-october-december-2026";
import gammaFlip from "./gamma-flip";
import hormuz from "./hormuz-larak-not-a-90-breakout";
import innovationExemption from "./innovation-exemption-tokenized-nms-sandbox";
import japan from "./japan-10y-highest-since-1996";
import laborDay from "./labor-day-hangover";
import noWarsh from "./no-warsh-tuesday";
import positiveVsNegativeGamma from "./positive-vs-negative-gamma";
import qqq from "./qqq-0dte-close-vs-midday";
import robustness from "./robustness-is-the-edge";
import spy from "./spy-friday-gamma";
import printZero from "./the-print-was-zero";
import twoClocks from "./two-clocks-triple-witching-sp-rebalance-sep-2026";
import washToRepair from "./wash-to-repair-week-sep-5-11";
import whatIsGammaExposure from "./what-is-gamma-exposure";
import wti from "./wti-not-a-ticket";
import qqqBreadth from "./qqq-breadth-nasdaq-100-200-day-50-percent-oct-2026";
import { publishedAt as stamps } from "./timestamps";

const rawArticles: Article[] = [
  brazilRecap,
  oilPriceThisWeek,
  oilAbove100,
  qqqBreadth,
  rotationHoldsClose,
  rotationInReverse,
  nasdaqWeeklyLossClose,
  nasdaqWeeklyLossMidday,
  importPricesMorningRecap,
  warshHeardHold,
  eveningCloseRecap,
  eiaMiddayRecap,
  ppiMorningRecap,
  seoulCircuitBreaker,
  cpiCloseRecap,
  cpiDayCoreHot,
  latencyLeaders,
  cpiTomorrow,
  banksBeat,
  seoulChips,
  calmBeforeCpi,
  fedCreditJunk,
  gammaFlip,
  positiveVsNegativeGamma,
  whatIsGammaExposure,
  fedHikeOdds,
  lightningX402,
  energyInto66,
  innovationExemption,
  twoClocks,
  washToRepair,
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
];

export const articles: Article[] = rawArticles
  .map((article) => ({
    ...article,
    publishedAt: article.publishedAt ?? stamps[article.slug] ?? `${article.date}T12:00:00-04:00`,
  }))
  .sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    const aTime = a.publishedAt ?? "";
    const bTime = b.publishedAt ?? "";
    if (aTime !== bTime) return aTime < bTime ? 1 : -1;
    return a.slug.localeCompare(b.slug);
  });

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
  publishedAt?: string;
  updatedAt?: string;
  displayTime?: string;
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
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    displayTime: article.displayTime,
    section: article.section,
    ogImage: article.ogImage,
    ogAlt: article.ogAlt,
  };
}

export function articleTeasers(list: Article[] = articles): ArticleTeaser[] {
  return list.map(toTeaser);
}

const SECTOR_RELEVANT = new Set([
  "energy-into-66-xle-sep-2026",
  "robustness-is-the-edge",
  "energy-load-not-a-ticket",
  "wti-not-a-ticket",
]);

export function isSectorRelevant(slug: string): boolean {
  return SECTOR_RELEVANT.has(slug);
}
