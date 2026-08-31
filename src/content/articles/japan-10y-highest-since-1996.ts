import type { Article } from "@/content/types";

const article: Article = {
  slug: "japan-10y-highest-since-1996",
  title: "Japan 10Y: Tokyo 2.950% vs TV 2.941%. Do Not Blend.",
  dek: "Tokyo 2.950%, highest since Sep 1996. TV 2.941% is a different book. Do not blend. BoJ 91% is a wager. FedWatch was not pulled.",
  date: "2026-08-31",
  section: "macro",
  also: ["markets", "research"],
  ogImage: "/og/japan-10y-highest-since-1996.png",
  ogAlt: "Japan 10Y Tokyo 2.950% versus TV 2.941% — do not blend the books",
  body: [
    {
      type: "lede",
      text: "Tokyo 10Y 2.950%, highest since Sep 1996. TV printed 2.941%. Those are two books. Cos will not blend them into one “Japan 10Y” headline. BoJ 91% is a wager, not a decision.",
    },
    { type: "h2", text: "Two books. Do not blend." },
    {
      type: "stats",
      items: [
        { label: "Tokyo 10Y", value: "2.950%", note: "Highest since Sep 1996" },
        { label: "TV 10Y", value: "2.941%", note: "A different book" },
        { label: "Blend", value: "No" },
        { label: "BoJ 91%", value: "A wager" },
      ],
    },
    {
      type: "p",
      text: "Official CMT close, Aug 31, carries Japan 10Y (Tokyo) 2.950%. That is the Cos Tokyo print. TV 2.941% is a TV print. We will not average them, not round them into 2.95, and not treat a vendor screen as the Tokyo close.",
    },
    {
      type: "p",
      text: "Tokyo 2.950% is real duration. It is the highest since Sep 1996. JGB auction Tuesday is Japan’s test. A 3% handle is a threshold other desks are watching. Cos does not invent the next tick.",
    },
    { type: "h2", text: "BoJ 91% is a wager" },
    {
      type: "p",
      text: "A 91% BoJ hike number is a wager. It is not a Cos-verified lock and not a decision. Treat it the same way we treat CME hike odds ~64% at 3:45 p.m. EDT: a moving number, not a vote.",
    },
    {
      type: "p",
      text: "FedWatch was not pulled. We do not invent a FedWatch print for Japan or for the FOMC. If a later note cites a pulled screen, it will say so. This one does not.",
    },
    {
      type: "callout",
      text: "Tokyo 2.950% vs TV 2.941%. Do not blend. BoJ 91% is a wager. Book fact · not a ticket.",
    },
    {
      type: "p",
      text: "US official CMT, same close: 2Y 4.34 · 10Y 4.75 (tied Jul 31) · 30Y 5.25. 2s10s 41 bp. Japan is the overseas duration fact on that card. See [The print was $0](/articles/the-print-was-zero/).",
    },
  ],
};

export default article;
