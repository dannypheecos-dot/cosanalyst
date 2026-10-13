import { site } from "@/lib/site";

/**
 * Promo card copy for the free Telegram channel.
 * Edit this object when the channel owner updates the value props.
 * Bullets: keep 3, 4, or 5. Do not add win rates, a discussion group,
 * webinars, or trainings.
 */
type ThreeToFive =
  | readonly [string, string, string]
  | readonly [string, string, string, string]
  | readonly [string, string, string, string, string];

export const telegramPromo = {
  href: site.telegramUrl,
  eyebrow: "NEVER MISS AN ALERT",
  live: "LIVE",
  headline: "Free 0DTE index signals. Every trade gets a receipt.",
  headlineAccent: "receipt",
  bullets: [
    "Free live SPY, QQQ and IWM 0DTE signals with entry, stop and two targets",
    "Every trade gets a public receipt, win or loss",
    "Signals post instantly and automatically, nothing cherry-picked",
    "Premarket levels and a daily recap, plus a simple rulebook for trading the levels",
  ] as const satisfies ThreeToFive,
  /** Phone mockup labels only. No prices and no extra claims. */
  phoneNotes: ["Premarket levels", "SPY, QQQ, IWM", "Daily recap"] as const,
  /** Homepage stack only. Two short lines, so the card stays about one note tall. */
  compactBullets: [
    "SPY, QQQ, IWM. Entry, stop, two targets.",
    "A public receipt, win or loss.",
  ] as const,
  soon: "Mag 7 signals coming soon.",
  cta: "Join free on Telegram",
  finePrint: "Free to join. Educational only, not financial advice.",
} as const;

if (!telegramPromo.headline.includes(telegramPromo.headlineAccent)) {
  throw new Error("Telegram promo headline accent must appear in the headline.");
}
