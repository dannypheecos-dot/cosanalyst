import type { Article } from "@/content/types";

const article: Article = {
  slug: "the-print-was-zero",
  title:
    "The $4.243 Billion Print Was $0. The 10Y Is 4.75 — Tied, Not a New High.",
  dek: "Monday NY Fed printed SRP $0 / $2mm. ON RRP $6.726bn drain. Official 10Y CMT 4.75 — tied Jul 31, not a new high. GEX snapshot 13:01:20 PT paused. Simulated. Not a ticket.",
  date: "2026-08-31",
  section: "markets",
  also: ["macro", "options", "research"],
  ogImage: "/og/the-print-was-zero.png",
  ogAlt:
    "The siren is not the desk: echo chamber $4.243B vs desk tape $0 / $2mm",
  body: [
    {
      type: "lede",
      text: "QQQ cash close 716.76 (+0.05%), day range 713.16–717.58. After-hours 716.84–716.94. GEX snapshot 13:01:20 PT (Data Refresh Paused): spot 716.68, net GEX +68.20M, HVL 716, C1 717. The midday −$222.07M card expired. It is not the cash close. Tuesday is Barr, JOLTS, and ISM — not Warsh. Friday is NFP. Hidden risk is duration, $WTI, and jobs. Not a secret injection.",
    },
    { type: "h2", text: "1. Where we are" },
    {
      type: "stats",
      items: [
        { label: "QQQ cash close", value: "716.76", note: "+0.05% · Aug 31" },
        { label: "Day range", value: "713.16–717.58" },
        { label: "After-hours", value: "716.84–716.94" },
        { label: "Midday card", value: "−$222.07M", note: "Expired · not the close" },
      ],
    },
    {
      type: "stats",
      items: [
        { label: "GEX snapshot", value: "13:01:20 PT", note: "Data Refresh Paused" },
        { label: "Spot", value: "716.68" },
        { label: "Net GEX", value: "+68.20M" },
        { label: "HVL / C1", value: "716 / 717" },
      ],
    },
    {
      type: "p",
      text: "US cash is closed. After-hours is open. QQQ cash close 716.76 (+0.05%). Day range 713.16–717.58. AH 716.84–716.94. GEX snapshot, 13:01:20 PT, Data Refresh Paused: spot 716.68, net GEX +68.20M, HVL 716, C1 717. The midday −$222.07M card expired. Do not read it as the cash close.",
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
      type: "stats",
      items: [
        { label: "NQ1!", value: "29,509", note: "+0.06%" },
        { label: "ES", value: "7,701", note: "−0.27%" },
        { label: "$WTI", value: "86.17", note: "+3.26%" },
        { label: "XLE", value: "63.96" },
      ],
    },
    {
      type: "p",
      text: "NQ1! 29,509 (+0.06%) vs ES 7,701 (−0.27%). $WTI 86.17 (+3.26%). XLE 63.96. Oil is $WTI, never $CL.",
    },
    {
      type: "stats",
      items: [
        { label: "CMT 2Y", value: "4.34" },
        { label: "CMT 10Y", value: "4.75", note: "Tied Jul 31" },
        { label: "CMT 30Y", value: "5.25" },
        { label: "2s10s", value: "41 bp" },
      ],
    },
    {
      type: "stats",
      items: [
        { label: "US10Y TV", value: "4.756–4.758" },
        { label: "TV month high", value: "4.768", note: "Not a CMT high" },
        { label: "US30Y", value: "5.252%" },
        { label: "Japan 10Y (Tokyo)", value: "2.950%" },
      ],
    },
    {
      type: "p",
      text: "Official CMT close, Aug 31: 2Y 4.34 · 10Y 4.75 · 30Y 5.25. 2s10s 41 bp. Japan 10Y 2.950% (Tokyo). US10Y TV 4.756–4.758, month high 4.768. Official CMT 10Y 4.75 still ties Jul 31 — not a new CMT high. US30Y 5.252%.",
    },
    {
      type: "p",
      text: "A morning note said August is closing with the lowest August high since 2018, then waved at October 2016. Vol-regime teaching, not a Cos-verified monthly-high series. Intraday Aug 5 still tagged 18.43. Calm is a regime, not a forecast. Friday NFP plus $WTI is the vol event.",
    },
    { type: "h2", text: "2. The echo chamber vs the desk" },
    {
      type: "figure",
      src: "/og/the-print-was-zero.png",
      alt: "Echo chamber $4.243B Warsh print versus desk tape $0 / $2mm, 10Y CMT 4.75, hike odds about 64 percent and moving",
      caption:
        "Echo chamber vs desk tape · Treasury CMT Aug 31 close · NY Fed Aug 31 results",
    },
    {
      type: "p",
      text: "Sunday a post claimed the Fed would inject $4,243,000,000 at 9:00 a.m. ET, that Warsh had ordered printing to stop a crash. “Tomorrow” from Sunday was Monday. Monday printed.",
    },
    {
      type: "p",
      text: "Standing Repo is a ceiling. ON RRP is a floor. Not QE. Nine a.m. is ordinary morning settlement.",
    },
    {
      type: "stats",
      items: [
        { label: "Morning SRP", value: "$0" },
        { label: "ON RRP", value: "$6.726bn", note: "A drain" },
        { label: "Afternoon SRP", value: "$2 million" },
        { label: "$4.243B operation", value: "None" },
      ],
    },
    {
      type: "p",
      text: "Monday NY Fed: morning SRP $0. ON RRP $6.726 billion — a drain. Afternoon SRP $2 million. No $4.243 billion operation. Aug 14–Sep 14 is ~$17bn reinvestment and zero reserve-management purchases.",
    },
    { type: "h2", text: "3. The Treasury story" },
    {
      type: "p",
      text: "Kobeissi said 12 days after intervention, 10Y is a new 19-month high, 2 bp from 2007, cannot afford 5%+.",
    },
    {
      type: "p",
      text: "Treasury sb0607 (Aug 19) was a buyback size hike: $2bn → at least $4bn, 10s–30s, effective Sep 9. Not QE. Not a yield cap. [Treasury sb0607](https://home.treasury.gov/news/press-releases/sb0607).",
    },
    {
      type: "stats",
      items: [
        { label: "CMT 10Y vs Jul 31", value: "Tied" },
        { label: "vs Jan 13, 2025 4.79", value: "4 bp below" },
        { label: "vs 5%", value: "25 bp below" },
        { label: "30Y “since 2007”", value: "5.31 Aug 17" },
      ],
    },
    {
      type: "p",
      text: "On official CMT: 10Y 4.75 ties Jul 31, 4 bp below Jan 13, 2025 4.79. Neighborhood, not a new high. 4.75 is 25 bp below 5%. US10Y TV 4.756–4.758, month high 4.768 — a TV print, not a new CMT high. The “since 2007” print is the 30Y: 5.31 on Aug 17. Official CMT 30Y 5.25 is 6 bp under that. US30Y 5.252%. Jobs Friday is the duration event. New-size buybacks start Wed Sep 9.",
    },
    { type: "h2", text: "4. No Warsh Tuesday" },
    {
      type: "p",
      text: "Tue 9:05 ET: Gov. Barr, inclusion venue, not Warsh. Wed 2:00: Beige Book. Thu 8:30: Waller. Blackout Sat Sep 5. FOMC Sep 15–16. Warsh at JH: “a discipline, not a decision.”",
    },
    { type: "h2", text: "5. This week’s test" },
    {
      type: "list",
      items: [
        "Tue 9:05 — Barr (not Warsh) · 10:00 JOLTS + ISM mfg",
        "Wed 8:15 ADP · 10:30 EIA ($WTI) · 2:00 Beige Book",
        "Thu 8:30 claims + Waller · 10:00 ISM Services",
        "Fri 8:30 August jobs — the print",
      ],
    },
    {
      type: "p",
      text: "Labor Day is next week. PPI/CPI next week, in blackout, still before FOMC.",
    },
    {
      type: "figure",
      src: "/brand/week-ahead-2026-09-01-calendar.png",
      alt: "This week’s test calendar Sep 1–4 2026: Barr not Warsh, ISM and JOLTS, ADP, Beige Book, Waller and claims, ISM Services, August jobs the print. All times ET.",
      caption: "This week’s test · Sep 1–4, 2026 · all times ET",
    },
    { type: "h2", text: "6. Japan 10Y is real. BoJ 91% is a wager." },
    {
      type: "p",
      text: "Tokyo 10Y 2.950%, highest since Sep 1996. JGB auction Tuesday is Japan’s test. CME hike odds ~64% at 3:45 p.m. EDT — a moving number, not a lock. FedWatch was not pulled. We do not invent it.",
    },
    { type: "h2", text: "7. How to read the week" },
    {
      type: "list",
      items: [
        "Do not wait for Warsh on TV.",
        "Do not treat 64% as a decision.",
        "Do not invent FedWatch — it was not pulled.",
        "Do not treat 4.75 as a new 19-month CMT high.",
        "Do not treat the midday −$222.07M card as the cash close.",
        "Do not treat $6.726bn of ON RRP as an injection.",
        "Do not treat a 2016 VIX analog as a roadmap.",
      ],
    },
    {
      type: "callout",
      text: "Hidden risk = duration + $WTI + jobs. Not a secret print.",
    },
    {
      type: "p",
      text: "This note first ran as a desk card on Sector Selector and on X. [CosAnalyst.com](/articles/the-print-was-zero/) is the publication home going forward. Prior copies: [sectorselector.ai/research/the-print-was-zero.html](https://sectorselector.ai/research/the-print-was-zero.html) · [X status 2094544273605906659](https://x.com/CosAnalyst/status/2094544273605906659).",
    },
  ],
};

export default article;
