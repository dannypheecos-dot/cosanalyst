import blotter from "../../../public/0dte-challenge/previous-format/odte-blotter.json";

export type PreviousTrade = {
  id: string;
  date: string;
  entryDate: string;
  exitDate?: string;
  dteLabel: string;
  underlying: string;
  contract: string;
  entry: number;
  openedAlerted: string;
  exit?: number;
  exitLabel?: string;
  statusLabel: string;
  pnl: number;
  pnlLabel: string;
  thesis: string;
  commentary: string;
  chartedPeak?: {
    pct: number;
    high: number;
    atLabel: string;
    label: string;
    note: string;
  };
  peakOpportunityLabel?: string;
  evidence?: {
    path: string;
    platform: string;
    contract: string;
    timeframe: string;
    candleTime: string;
    ohlc: { open: number; high: number; low: number; close: number };
    evidenceLevel: string;
    executableBidVerification: string;
    quoteSource: string;
  };
};

export type PreviousDay = {
  date: string;
  label: string;
  officialRecord: string;
  officialLabel: string;
  sameDayPnl: number | null;
  observation?: string;
  whyNoneQualified?: string;
};

export type PreviousLesson = {
  id: string;
  number: string;
  title: string;
  effectiveLabel: string;
  body: string;
};

export type PreviousEvent = {
  id: string;
  atLabel: string;
  action: string;
  summary: string;
};

export type PreviousBlotter = {
  challengeTitle: string;
  asOfLabel: string;
  windowStart: string;
  windowEnd: string;
  startingCash: number;
  modelCash: number;
  disclosure: string;
  ledgerNote: string;
  lessons: PreviousLesson[];
  days: PreviousDay[];
  timeline: PreviousEvent[];
  trades: PreviousTrade[];
};

export const previousChallenge = blotter as unknown as PreviousBlotter;

export const previousEvidenceBase = "/0dte-challenge/previous-format/";

export function previousEvidenceSrc(path: string): string {
  return `${previousEvidenceBase}${path}`;
}
