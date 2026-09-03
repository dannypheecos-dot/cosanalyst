#!/usr/bin/env node
/**
 * Three-model accounting test — Peak Opportunity, All-or-Nothing, Managed Execution
 * must never conflate. Trade Zero is the canonical fixture.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const blotterPath = join("public", "0dte-challenge", "odte-blotter.json");
const raw = readFileSync(blotterPath, "utf8");
const data = JSON.parse(raw);

const tradeZero = data.trades.find((t) => t.id === "2026-09-01-qqq-707p");
if (!tradeZero) {
  console.error("FAIL: Trade Zero not found");
  process.exit(1);
}

const failures = [];

function assert(cond, msg) {
  if (!cond) failures.push(msg);
}

// Managed result
assert(tradeZero.pnl === -160, `Managed P&L expected −$160, got ${tradeZero.pnl}`);
assert(
  tradeZero.managedExecution.dollarResult === -160,
  "managedExecution.dollarResult must be −160"
);
assert(data.modelCash === 9840, `modelCash expected 9840, got ${data.modelCash}`);

// Charted peak — separate from verified executable
assert(
  tradeZero.chartedPeak.pct === 28.6,
  `Charted peak expected +28.6%, got ${tradeZero.chartedPeak.pct}`
);
assert(tradeZero.chartedPeak.high === 2.83, "Charted high expected $2.83");
assert(
  tradeZero.chartedPeak.excludedFromOfficialPeak === true,
  "Charted peak must be excluded from official peak aggregates"
);

// Verified executable peak — NOT PRESERVED (not AWAITING)
const notPreserved = "NOT PRESERVED — insufficient historical quote evidence";
assert(
  tradeZero.peakOpportunityLabel === notPreserved,
  `peakOpportunityLabel must be NOT PRESERVED, got ${tradeZero.peakOpportunityLabel}`
);
assert(tradeZero.peakExecutableBid == null, "peakExecutableBid must be null");
assert(
  tradeZero.peakOpportunityLabel !== "AWAITING VERIFIED QUOTE DATA",
  "Expired contract must not show AWAITING"
);

// All-or-nothing must not mutate model cash
assert(
  data.allOrNothing.mutatesModelCash === false,
  "allOrNothing must not mutate modelCash"
);
assert(
  tradeZero.allOrNothingOutcome.excludedFromOfficial === true,
  "Trade Zero AON must be excluded from official totals"
);

// Qualified alerts — Trade Zero pre-rule does not count
assert(
  data.progress.qualifiedAlerts === 0,
  `qualifiedAlerts expected 0, got ${data.progress.qualifiedAlerts}`
);

// Three targets separated in extended schema
const targets = tradeZero.targets;
assert(targets, "targets block required");
assert(
  targets.peakOpportunity.verifiedExecutableLabel === notPreserved,
  "targets.peakOpportunity verified label must be NOT PRESERVED"
);
assert(
  targets.profitActuallyCaptured.pnl === -160,
  "profitActuallyCaptured must match managed −$160"
);

if (failures.length) {
  console.error("three-model accounting test: FAIL");
  failures.forEach((f) => console.error(" -", f));
  process.exit(1);
}

console.log("three-model accounting test: PASS");
console.log("Trade Zero managed: −$160 · charted peak +28.6% · verified peak NOT PRESERVED");
console.log("modelCash: $9,840 · qualifiedAlerts: 0");
