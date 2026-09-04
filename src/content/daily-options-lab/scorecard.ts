import { average, median } from "@/lib/lab";
import type { BucketStats, LabBook, LabScorecard, LabUnderlying } from "./types";
import { LAB_UNDERLYINGS } from "./types";

function emptyBucket(): BucketStats {
  return { entries: 0, wins: 0, losses: 0, officialPnl: 0 };
}

function addToBucket(bucket: BucketStats, pnl: number | undefined): void {
  bucket.entries += 1;
  if (pnl == null) return;
  bucket.officialPnl += pnl;
  if (pnl > 0) bucket.wins += 1;
  else if (pnl < 0) bucket.losses += 1;
}

function maxDrawdown(pnls: number[]): number | null {
  if (!pnls.length) return null;
  let equity = 0;
  let peak = 0;
  let worst = 0;
  for (const pnl of pnls) {
    equity += pnl;
    peak = Math.max(peak, equity);
    worst = Math.min(worst, equity - peak);
  }
  return Math.abs(worst);
}

export function buildScorecard(book: LabBook): LabScorecard {
  const completed = book.entries.filter(
    (entry) => entry.status === "RESULT COMPLETE" || entry.officialSimulatedPnl != null,
  );
  const pnls = completed
    .map((entry) => entry.officialSimulatedPnl)
    .filter((value): value is number => value != null);
  const mfes = completed
    .map((entry) => entry.evidence?.mfe)
    .filter((value): value is number => value != null);
  const maes = completed
    .map((entry) => entry.evidence?.mae)
    .filter((value): value is number => value != null);

  const byTicker = Object.fromEntries(
    LAB_UNDERLYINGS.map((ticker) => [ticker, emptyBucket()]),
  ) as Record<LabUnderlying, BucketStats>;
  const byExpiration = {
    zeroDte: emptyBucket(),
    nextSession: emptyBucket(),
  };

  for (const entry of completed) {
    addToBucket(byTicker[entry.underlying], entry.officialSimulatedPnl);
    addToBucket(
      entry.expirationKind === "0DTE" ? byExpiration.zeroDte : byExpiration.nextSession,
      entry.officialSimulatedPnl,
    );
  }

  const cumulativeOfficialPnl = pnls.reduce((sum, value) => sum + value, 0);
  const wins = pnls.filter((value) => value > 0).length;
  const losses = pnls.filter((value) => value < 0).length;

  return {
    sessions: completed.length,
    entries: completed.length,
    wins,
    losses,
    cumulativeOfficialPnl,
    returnPct: null,
    averageOfficialPnl: average(pnls),
    medianOfficialPnl: median(pnls),
    averageMfe: average(mfes),
    averageMae: average(maes),
    maxDrawdown: maxDrawdown(pnls),
    byTicker,
    byExpiration,
    learningFocus: book.learningFocus,
    lastUpdatedEt: book.lastUpdatedEt,
  };
}
