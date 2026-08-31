import type { Article } from "@/content/types";

const article: Article = {
  slug: "spy-friday-gamma",
  title: "SPY Friday Gamma: +$4.78B Thursday, −$0.93B Friday",
  dek: "Independent EOD book flipped +$4.78B Thursday to −$0.93B Friday. Spot ~769.35. Gamma negative at the close. Cos does not print G-D+.",
  date: "2026-08-28",
  section: "options",
  also: ["equities", "research"],
  ogImage: "/og/spy-friday-gamma.png",
  ogAlt:
    "SPY Friday gamma: independent EOD book +$4.78B Thursday to −$0.93B Friday, spot about 769.35",
  body: [
    {
      type: "lede",
      text: "As of Friday 28 Aug 2026 close, SPY weekly options expiration positioning prints gamma NEGATIVE. An independent EOD book flipped from +$4.78B Thursday to −$0.93B Friday. Spot ~769.35. Cos does not print G-D+.",
    },
    { type: "h2", text: "What Cos will print" },
    {
      type: "stats",
      items: [
        { label: "Close", value: "Fri 28 Aug 2026" },
        { label: "Spot", value: "~769.35" },
        { label: "Gamma", value: "NEGATIVE" },
        { label: "Independent EOD", value: "+$4.78B → −$0.93B" },
      ],
    },
    {
      type: "p",
      text: "An independent end-of-day book flipped from +$4.78B Thursday to −$0.93B Friday. That is a sign change in one book over one session. It is not a Cos fill, not a premium, and not a paper ticket. Spot ~769.35 is the cash neighborhood Cos will carry for that close.",
    },
    {
      type: "stats",
      items: [
        { label: "Delta sign", value: "Not agreed across books" },
        { label: "G-D+", value: "Cos does not print it" },
        { label: "Gamma meaning", value: "Size warning, not direction" },
        { label: "Friday map rewrite", value: "No" },
      ],
    },
    {
      type: "p",
      text: "Delta sign is not agreed across books. Cos does not print G-D+. We will not flatten two disagreeing dealer books into one Cos-verified headline.",
    },
    {
      type: "p",
      text: "Gamma = how far. Delta = which way. Until the books agree on the sign of delta, a single “positioning” number is a vendor claim, not a Cos figure.",
    },
    {
      type: "callout",
      text: "Thu +$4.78B → Fri −$0.93B. Spot ~769.35. No G-D+. Book fact · not a ticket.",
    },
    {
      type: "p",
      text: "This is structure context for the Friday map. It is not a Sector Selector play and not an invitation to chase an expiration print. Health Care still led that map: [Robustness is the edge](/articles/robustness-is-the-edge/).",
    },
  ],
};

export default article;
