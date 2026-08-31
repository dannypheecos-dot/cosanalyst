import type { Article } from "@/content/types";

const article: Article = {
  slug: "no-warsh-tuesday",
  title: "No Warsh Tuesday. Barr, JOLTS, ISM. Then Jobs.",
  dek: "Tue 9:05 ET is Barr, not Warsh. JOLTS + ISM, ADP, Waller, NFP. Blackout Sat Sep 5. FOMC Sep 15–16. FedWatch was not pulled.",
  date: "2026-08-31",
  section: "macro",
  also: ["markets", "research"],
  ogImage: "/og/no-warsh-tuesday.png",
  ogAlt:
    "This week’s test Sep 1–4 2026: Barr not Warsh, JOLTS and ISM, ADP, Waller, August jobs",
  body: [
    {
      type: "lede",
      text: "Tuesday 9:05 ET is Gov. Barr at an inclusion venue. It is not Warsh. The week is JOLTS + ISM, ADP, Waller, and Friday’s August jobs print. Blackout starts Sat Sep 5. FOMC Sep 15–16. FedWatch was not pulled. We do not invent it.",
    },
    { type: "h2", text: "The calendar is the card" },
    {
      type: "figure",
      src: "/brand/week-ahead-2026-09-01-calendar.png",
      alt: "This week’s test calendar Sep 1–4 2026 all times ET: Tuesday Barr 9:05 not Warsh and ISM plus JOLTS 10:00; Wednesday ADP 8:15 and Beige Book 2:00; Thursday Waller plus claims 8:30 and ISM Services 10:00; Friday August jobs 8:30 the print. Blackout starts Sat Sep 5. FOMC Sep 15–16. Buybacks size-up Sep 9.",
      caption: "This week’s test · Sep 1–4, 2026 · all times ET",
    },
    {
      type: "list",
      items: [
        "Tue Sep 1 · 9:05 ET — Barr (not Warsh)",
        "Tue Sep 1 · 10:00 ET — JOLTS + ISM manufacturing",
        "Wed Sep 2 · 8:15 ET — ADP",
        "Wed Sep 2 · 10:30 ET — EIA ($WTI)",
        "Wed Sep 2 · 2:00 ET — Beige Book",
        "Thu Sep 3 · 8:30 ET — Waller + claims",
        "Thu Sep 3 · 10:00 ET — ISM Services",
        "Fri Sep 4 · 8:30 ET — August jobs — the print",
      ],
    },
    {
      type: "p",
      text: "Warsh at Jackson Hole: “a discipline, not a decision.” Do not wait for Warsh on TV on Tuesday.",
    },
    { type: "h2", text: "Blackout, FOMC, buybacks" },
    {
      type: "stats",
      items: [
        { label: "Blackout starts", value: "Sat Sep 5" },
        { label: "FOMC", value: "Sep 15–16" },
        { label: "Buybacks size-up", value: "Sep 9" },
        { label: "FedWatch", value: "Not pulled" },
      ],
    },
    {
      type: "p",
      text: "Blackout starts Sat Sep 5. FOMC Sep 15–16. Treasury buybacks size-up Wed Sep 9 ($2bn → at least $4bn, 10s–30s, [sb0607](https://home.treasury.gov/news/press-releases/sb0607)). Labor Day is next week. PPI/CPI next week, in blackout, still before FOMC.",
    },
    {
      type: "p",
      text: "CME hike odds ~64% at 3:45 p.m. EDT on Aug 31 — a moving number, not a lock. We do not invent FedWatch. If a later note cites a pulled screen, it will say so.",
    },
    {
      type: "callout",
      text: "Barr Tuesday. Jobs Friday. Blackout Saturday. Not a Warsh show. Book fact · not a ticket.",
    },
  ],
};

export default article;
