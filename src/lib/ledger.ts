/**
 * Cos ledger data shapes for routes that are prepared but not advertised.
 * Do not backfill fake track record, CAGR, AUM, or subscriber counts.
 */

export const BOOK_BIAS = ["BULLISH", "BEARISH", "NEUTRAL", "WATCHING"] as const;
export type BookBias = (typeof BOOK_BIAS)[number];

export type LedgerEntry = {
  id: string;
  publishedAt: string;
  instrument: string;
  bias: BookBias;
  note: string;
  sourceSlug?: string;
};

export type PerformancePeriod = {
  id: string;
  label: string;
  startedAt: string;
  closedAt?: string;
};

export type PortfolioPosition = {
  id: string;
  instrument: string;
  openedAt: string;
  closedAt?: string;
  bias: BookBias;
  status: "open" | "closed";
  sourceSlug?: string;
};

export type MembershipState = {
  activated: false;
  signInVisible: false;
  subscribeVisible: false;
};

export const membership: MembershipState = {
  activated: false,
  signInVisible: false,
  subscribeVisible: false,
};

export const ledgerEntries: LedgerEntry[] = [];
export const performancePeriods: PerformancePeriod[] = [];
export const portfolioPositions: PortfolioPosition[] = [];
