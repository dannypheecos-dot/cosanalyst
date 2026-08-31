import type { Article } from "@/content/types";

const article: Article = {
  slug: "qqq-0dte-close-vs-midday",
  title: "QQQ 0DTE: GEX Snapshot Close vs the Midday Card",
  dek: "GEX snapshot 13:01:20 PT paused: spot 716.68, net GEX +68.20M, HVL 716, C1 717. Midday −$222.07M expired. Cash close 716.76 is the close.",
  date: "2026-08-31",
  section: "options",
  also: ["equities", "markets", "research"],
  ogImage: "/og/qqq-0dte-close-vs-midday.png",
  ogAlt:
    "QQQ 0DTE GEX snapshot 13:01:20 PT versus expired midday −$222.07M card",
  body: [
    {
      type: "lede",
      text: "The midday −$222.07M card expired. It is not the cash close. GEX snapshot 13:01:20 PT (Data Refresh Paused) is the last Cos-verified QQQ 0DTE book on the desk: spot 716.68, net GEX +68.20M, HVL 716, C1 717.",
    },
    { type: "h2", text: "Cash close is the close" },
    {
      type: "stats",
      items: [
        { label: "QQQ cash close", value: "716.76", note: "+0.05%" },
        { label: "Day range", value: "713.16–717.58" },
        { label: "After-hours", value: "716.84–716.94" },
        { label: "Midday card", value: "−$222.07M", note: "Expired" },
      ],
    },
    {
      type: "p",
      text: "QQQ cash close 716.76 (+0.05%). Day range 713.16–717.58. After-hours 716.84–716.94. US cash is closed. After-hours is open. Do not read an expired midday card as the cash close.",
    },
    { type: "h2", text: "GEX snapshot · 13:01:20 PT · Data Refresh Paused" },
    {
      type: "stats",
      items: [
        { label: "GEX snapshot", value: "13:01:20 PT", note: "Paused" },
        { label: "Spot", value: "716.68" },
        { label: "Net GEX", value: "+68.20M" },
        { label: "HVL / C1", value: "716 / 717" },
      ],
    },
    {
      type: "p",
      text: "GEX snapshot, 13:01:20 PT, Data Refresh Paused: spot 716.68, net GEX +68.20M, HVL 716, C1 717. That is the final QQQ snapshot Cos will print for Aug 31. We do not invent a later GEX print.",
    },
    {
      type: "stats",
      items: [
        { label: "SPX", value: "7683.95" },
        { label: "SPX net GEX", value: "−233.79M" },
        { label: "SPX HVL", value: "7705" },
        { label: "NQ vs ES", value: "29509 / 7701" },
      ],
    },
    {
      type: "p",
      text: "SPX 7683.95, net GEX −233.79M, HVL 7705. NQ 29509 vs ES 7701. Same desk, same close. A QQQ midday card that expired is not a rewrite of either book.",
    },
    {
      type: "callout",
      text: "Midday −$222.07M expired. GEX snapshot 13:01:20 PT is the last QQQ 0DTE card. Not a ticket.",
    },
    {
      type: "p",
      text: "The same close is in [The $4.243 billion print was $0](/articles/the-print-was-zero/). This note exists so the 0DTE book is not buried under the repo rumor.",
    },
  ],
};

export default article;
