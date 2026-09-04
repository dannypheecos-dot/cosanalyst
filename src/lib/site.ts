export const site = {
  name: "CosAnalyst",
  oneWord: "CosAnalyst",
  url: "https://cosanalyst.com",
  email: "desk@cosanalyst.com",
  handle: "@CosAnalyst",
  xUrl: "https://x.com/CosAnalyst",
  sectorSelector: false as const,
  sectorSelectorUrl: "https://sectorselector.ai/",
  newsletter: "The CosAnalyst Market Brief",
  tagline: "BOOK FACT · NOT A TICKET",
  bookFact: "BOOK FACT • NOT A TICKET",
  publisherLine: "Publisher + AI-assisted",
  description:
    "CosAnalyst is an independent research desk. Book fact. Not a ticket. Simulated research. Not advice.",
  /** Membership UI stays architected until this flips. Do not show Sign in / Subscribe. */
  membershipActivated: false,
  /** No Kit / ConvertKit action is wired on this publication yet. */
  kitFormAction: "" as const,
} as const;

export type NavChild = {
  href: string;
  label: string;
  external?: boolean;
};

export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

export const primaryNav: readonly NavItem[] = [
  { href: "/research/", label: "Research" },
  { href: "/markets/", label: "Markets" },
  {
    href: "/projects/",
    label: "Projects",
    children: [
      {
        href: "https://sectorselector.ai/",
        label: "Sector Selector",
        external: true,
      },
      {
        href: "/0dte-challenge/",
        label: "30-Day AI 0DTE Challenge",
      },
    ],
  },
  { href: "/about/", label: "About" },
];

export const footerNav = [
  { href: "/research/", label: "Research" },
  { href: "/markets/", label: "Markets" },
  { href: "/projects/", label: "Projects" },
  { href: "https://sectorselector.ai/", label: "Sector Selector", external: true },
  { href: "/0dte-challenge/", label: "0DTE Challenge" },
  { href: "/about/", label: "About" },
  { href: "/methodology/", label: "Methodology" },
  { href: "/disclosure/", label: "Disclosure" },
  { href: "/contact/", label: "Contact" },
] as const;

/** Advertised public routes for the sitemap. Future ledger paths stay off this list. */
export const sitemapPaths = [
  "/",
  "/research/",
  "/research/archive/",
  "/markets/",
  "/macro/",
  "/equities/",
  "/options/",
  "/commodities/",
  "/crypto/",
  "/projects/",
  "/about/",
  "/methodology/",
  "/disclosure/",
  "/contact/",
  "/newsletter/",
  "/articles/",
  "/0dte-challenge/",
] as const;

/** @deprecated Prefer primaryNav. Kept so existing section routes stay first-class. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/research/", label: "Research" },
  { href: "/markets/", label: "Markets" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/macro/", label: "Macro" },
  { href: "/equities/", label: "Equities" },
  { href: "/options/", label: "Options" },
  { href: "/commodities/", label: "Commodities" },
  { href: "/crypto/", label: "Crypto" },
  { href: "/0dte-challenge/", label: "0DTE Challenge" },
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

export const sections: Record<SectionId, { title: string; dek: string }> = {
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

export function shareOnXUrl(title: string, path: string): string {
  const url = new URL("https://x.com/intent/tweet");
  url.searchParams.set("text", title);
  url.searchParams.set("url", absUrl(path));
  return url.toString();
}
