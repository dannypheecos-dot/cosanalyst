export const site = {
  name: "CosAnalyst",
  oneWord: "CosAnalyst",
  url: "https://cosanalyst.com",
  email: "desk@cosanalyst.com",
  handle: "@CosAnalyst",
  xUrl: "https://x.com/CosAnalyst",
  sectorSelector: false as const,
  sectorSelectorUrl: "https://sectorselector.ai",
  newsletter: "The CosAnalyst Market Brief",
  tagline: "BOOK FACT · NOT A TICKET",
  publisherLine: "Publisher + AI-assisted",
  description:
    "CosAnalyst is a research desk publication. Book fact. Not a ticket. Simulated research. Not advice.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/markets/", label: "Markets" },
  { href: "/macro/", label: "Macro" },
  { href: "/equities/", label: "Equities" },
  { href: "/options/", label: "Options" },
  { href: "/commodities/", label: "Commodities" },
  { href: "/crypto/", label: "Crypto" },
  { href: "/0dte-challenge/", label: "0DTE Challenge" },
  { href: "/research/", label: "Research" },
  { href: "/projects/", label: "Projects" },
  { href: "/newsletter/", label: "Newsletter" },
] as const;

export type SectionId =
  | "markets"
  | "macro"
  | "equities"
  | "options"
  | "commodities"
  | "crypto"
  | "research";

export const sections: Record<
  SectionId,
  { title: string; dek: string }
> = {
  markets: {
    title: "Markets",
    dek: "Desk tape versus the echo. Cash close, not the midday card.",
  },
  macro: {
    title: "Macro",
    dek: "CMT, blackout, jobs, and Japan. No invented FedWatch.",
  },
  equities: {
    title: "Equities",
    dek: "Index cash, sector ranking, and what a Friday map will and will not do.",
  },
  options: {
    title: "Options",
    dek: "GEX snapshots, weekly OPEX, and books that do not agree on delta.",
  },
  commodities: {
    title: "Commodities",
    dek: "Oil is $WTI. Never $CL. A headline is not a breakout.",
  },
  crypto: {
    title: "Crypto",
    dek: "No Cos-verified crypto tape on the desk this week.",
  },
  research: {
    title: "Research",
    dek: "Desk notes. Simulated. Publisher + AI-assisted. Not a ticket.",
  },
};

export function absUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean}`;
}
