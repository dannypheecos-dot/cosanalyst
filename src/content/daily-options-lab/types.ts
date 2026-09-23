/** Canonical Daily Options Lab types. Append-only live book lives in public/0dte-challenge/lab.json. */

export const LAB_NAME = "THE COSANALYST DAILY OPTIONS LAB";
export const LAB_TAGLINE = "One session. One entry. A transparent record.";
export const LAB_DESCRIPTION =
  "A public simulated-research experiment testing whether GEX-informed analysis can produce a profitable track record over time through better ticker selection, direction, expiration and entry timing.";
export const LAB_PATH = "/0dte-challenge/";
export const LAB_CANONICAL = "https://cosanalyst.com/0dte-challenge/";
export const LAB_ENTRY_LABEL = "DAILY TEST ENTRY";
export const CAPITAL_UNIT_USD = 500;
export const LAB_BOOK_VERSION = 1 as const;

export const LAB_UNDERLYINGS = ["QQQ", "SPY", "IWM"] as const;
export type LabUnderlying = (typeof LAB_UNDERLYINGS)[number];

export const LAB_SIDES = ["CALL", "PUT"] as const;
export type LabSide = (typeof LAB_SIDES)[number];

export const LAB_STATUSES = [
  "SELECTING",
  "ENTRY LOGGED",
  "TRACKING",
  "RESULT COMPLETE",
  "TECHNICAL EXCEPTION",
] as const;
export type LabStatus = (typeof LAB_STATUSES)[number];

export const EXPIRATION_KINDS = ["0DTE", "NEXT_SESSION"] as const;
export type ExpirationKind = (typeof EXPIRATION_KINDS)[number];

export type FillSource = "TRADINGVIEW_PAPER";

export type LabCorrection = {
  id: string;
  appendedAtEt: string;
  body: string;
};

export type LabObservation = {
  sessionDate: string;
  note: string;
  capturedAtEt?: string;
};

export type LabEvidence = {
  /** ~4:15 PM ET evidence window on the relevant session. */
  capturedAtEt: string;
  entryPremium: number;
  finalPremium: number;
  highPostFill: number;
  lowPostFill: number;
  mfe: number;
  mae: number;
  entryScreenshot?: string;
  finalScreenshot?: string;
  highScreenshot?: string;
  lowScreenshot?: string;
  nextSession?: {
    entryDay: LabObservation;
    expirationDay: LabObservation;
  };
};

export type LabFill = {
  source: FillSource;
  /** Official fill = TradingView paper desk fill time ET. Never backdated. */
  filledAtEt: string;
  fillPremium: number;
  screenshot?: string;
  neverBackdated: true;
};

export type LabEntry = {
  id: string;
  sessionDate: string;
  status: LabStatus;
  label: typeof LAB_ENTRY_LABEL;
  underlying: LabUnderlying;
  side: LabSide;
  strike: number;
  expiration: string;
  expirationKind: ExpirationKind;
  expirationRationale: string;
  fill?: LabFill;
  quantity: number;
  capitalUnitUsd: typeof CAPITAL_UNIT_USD;
  capitalUnitException: boolean;
  officialSimulatedPnl?: number;
  officialSimulatedPnlPct?: number;
  maxOpportunityAfterAlert?: {
    dollar: number;
    pct: number;
    /** Always disclose: this is NOT realized P&L. */
    notRealized: true;
    note: string;
  };
  evidence?: LabEvidence;
  learningNote?: string;
  corrections: LabCorrection[];
  technicalException?: {
    reason: string;
    atEt: string;
  };
};

export type LabToday = {
  sessionDate: string | null;
  status: LabStatus;
  entryId: string | null;
  note: string;
};

export type LabBook = {
  version: typeof LAB_BOOK_VERSION;
  name: typeof LAB_NAME;
  tagline: typeof LAB_TAGLINE;
  description: typeof LAB_DESCRIPTION;
  lastUpdatedEt: string | null;
  learningFocus: string;
  today: LabToday;
  entries: LabEntry[];
  learningNotes: Array<{
    id: string;
    entryId: string;
    sessionDate: string;
    appendedAtEt: string;
    body: string;
  }>;
  corrections: LabCorrection[];
};

export type BucketStats = {
  entries: number;
  wins: number;
  losses: number;
  officialPnl: number;
};

export type LabScorecard = {
  sessions: number;
  entries: number;
  wins: number;
  losses: number;
  cumulativeOfficialPnl: number;
  returnPct: number | null;
  averageOfficialPnl: number | null;
  medianOfficialPnl: number | null;
  averageMfe: number | null;
  averageMae: number | null;
  maxDrawdown: number | null;
  byTicker: Record<LabUnderlying, BucketStats>;
  byExpiration: {
    zeroDte: BucketStats;
    nextSession: BucketStats;
  };
  learningFocus: string;
  lastUpdatedEt: string | null;
};
