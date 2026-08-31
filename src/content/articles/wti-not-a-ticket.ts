import type { Article } from "@/content/types";

const article: Article = {
  slug: "wti-not-a-ticket",
  title: "$WTI 86.17 Is Tape. It Is Not a Ticket.",
  dek: "TV USOIL 86.17 on the Aug 31 close. EIA Wednesday 10:30 ET. Oil is $WTI. Never $CL. Book fact. Not a ticket.",
  date: "2026-08-31",
  section: "commodities",
  also: ["markets", "research"],
  ogImage: "/og/wti-not-a-ticket.png",
  ogAlt: "TV USOIL 86.17 — $WTI is tape, not a ticket. EIA Wednesday 10:30 ET",
  body: [
    {
      type: "lede",
      text: "TV USOIL 86.17 on the Aug 31 close (+3.26%). XLE 63.96. That is Monday tape. It is not a Cos ticket, not a Sector Selector auto-rotate, and not a $90 $WTI breakout.",
    },
    { type: "h2", text: "The print we will say" },
    {
      type: "stats",
      items: [
        { label: "TV USOIL", value: "86.17", note: "+3.26% · Aug 31 close" },
        { label: "XLE", value: "63.96" },
        { label: "EIA", value: "Wed 10:30 ET" },
        { label: "Ticker", value: "$WTI", note: "Never $CL" },
      ],
    },
    {
      type: "p",
      text: "Oil on this desk is $WTI. We will not print $CL. TV USOIL 86.17 is the Aug 31 close Cos will carry. Sunday’s session high was $85.69 with $WTI ~$84.59 around 5:00 PM PT. A Brent session high near $90.62 is a Brent print. See [Hormuz / Larak is not a $90 $WTI breakout](/articles/hormuz-larak-not-a-90-breakout/).",
    },
    { type: "h2", text: "Wednesday is EIA. Friday is still jobs." },
    {
      type: "p",
      text: "EIA is Wed 10:30 ET. That is the oil inventory card on this week’s test. Friday 8:30 ET is August jobs. Hidden risk on the Aug 31 desk note was duration + $WTI + jobs. A Monday print at 86.17 does not retire that sentence.",
    },
    {
      type: "p",
      text: "XLE 87 was HOLD on the Friday 28 Aug map. We do not auto-rotate into Energy because $WTI printed 86.17. Re-rank Energy relative strength Friday if oil sticks.",
    },
    {
      type: "callout",
      text: "TV USOIL 86.17. EIA Wed 10:30 ET. $WTI, never $CL. Book fact · not a ticket.",
    },
  ],
};

export default article;
