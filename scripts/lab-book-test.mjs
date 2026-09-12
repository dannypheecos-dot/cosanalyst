#!/usr/bin/env node
/**
 * Daily Options Lab book + quantity rules.
 * The live scorecard must stay empty until a real TV paper fill is appended.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const bookPath = join(root, "public/0dte-challenge/lab.json");
const schemaPath = join(root, "public/0dte-challenge/lab.schema.json");
const prevPath = join(root, "public/0dte-challenge/previous-format/odte-blotter.json");
const evidencePath = join(
  root,
  "public/0dte-challenge/previous-format/evidence/trade-zero-qqq-707p-2026-09-02-0930-1m.png",
);

const failures = [];
function assert(cond, msg) {
  if (!cond) failures.push(msg);
}

assert(existsSync(bookPath), "lab.json missing");
assert(existsSync(schemaPath), "lab.schema.json missing");
assert(existsSync(prevPath), "previous-format blotter missing");
assert(existsSync(evidencePath), "Trade Zero evidence screenshot missing");
assert(!existsSync(join(root, "public/0dte-challenge/challenge.css")), "old challenge.css still present");
assert(!existsSync(join(root, "public/0dte-challenge/app.js")), "old app.js still present");
assert(!existsSync(join(root, "public/0dte-challenge/index.html")), "old standalone index.html still present");

const book = JSON.parse(readFileSync(bookPath, "utf8"));
assert(book.version === 1, "lab version must be 1");
assert(book.name === "THE COSANALYST DAILY OPTIONS LAB", "lab name mismatch");
assert(book.today.status === "SELECTING", "live today status must be SELECTING until a fill exists");
assert(book.today.entryId === null, "live today must not point at a dummy entry");
assert(Array.isArray(book.entries) && book.entries.length === 0, "live entries must be empty — no dummy trades");
assert(book.learningNotes.length === 0, "live learning notes must be empty");
assert(book.lastUpdatedEt === null, "lastUpdatedEt must stay null until a real log");

const prev = JSON.parse(readFileSync(prevPath, "utf8"));
assert(prev.trades?.some((t) => t.id === "2026-09-01-qqq-707p"), "Trade Zero must remain in previous-format archive");
assert(prev.modelCash === 9840, "archived modelCash must stay 9840");

function contractQuantity(fillPremium) {
  const perContract = Math.round(fillPremium * 100);
  if (perContract > 500) {
    return { quantity: 1, capitalUnitException: true, debit: perContract };
  }
  const quantity = Math.max(1, Math.floor(500 / perContract));
  return { quantity, capitalUnitException: false, debit: quantity * perContract };
}

const q1 = contractQuantity(1.25);
assert(q1.quantity === 4 && q1.capitalUnitException === false && q1.debit === 500, "qty for $1.25 fill should be 4");
const q2 = contractQuantity(6);
assert(q2.quantity === 1 && q2.capitalUnitException === true && q2.debit === 600, ">$500 premium is a capital-unit exception");
const q3 = contractQuantity(2.2);
assert(q3.quantity === 2 && q3.debit === 440, "qty for $2.20 fill should be 2");

if (failures.length) {
  console.error("lab book test: FAIL");
  failures.forEach((f) => console.error(" -", f));
  process.exit(1);
}

console.log("lab book test: PASS");
console.log("live book empty SELECTING · previous Trade Zero archived · qty rules ok");
