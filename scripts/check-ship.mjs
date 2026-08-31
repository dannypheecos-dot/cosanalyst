import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = "out";
if (!existsSync(root)) {
  console.error("check-ship: missing out/");
  process.exit(1);
}

const maps = [];
const hits = [];

const forbidden = [
  { name: "personal", re: /danny[\s._-]*phee|danny-phee|\bdphee\b|dannyphee|yahoo\.com/gi },
  { name: "tanuki-brand", re: /tanuki|tanukitrade|gex\s*live/gi },
];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    if (name.endsWith(".map")) maps.push(path);
    const text = readFileSync(path);
    // Skip binary-ish files
    if (text.includes(0)) continue;
    const body = text.toString("utf8");
    for (const rule of forbidden) {
      const found = body.match(rule.re);
      if (found) {
        hits.push(`${rule.name} ${path}: ${[...new Set(found)].join(", ")}`);
      }
    }
  }
}

walk(root);

const cname = readFileSync(join(root, "CNAME"), "utf8").trim();
if (cname !== "cosanalyst.com") {
  hits.push(`CNAME must be exactly cosanalyst.com (got ${JSON.stringify(cname)})`);
}

let rgHits = "";
try {
  rgHits = execSync(
    'rg -n -i -e "tanuki" -e "tanukitrade" -e "gex live" -e "dannyphee" -e "danny-phee" -e "dphee" -e "yahoo\\\\.com" out',
    { encoding: "utf8" },
  ).trim();
} catch (error) {
  const err = error;
  const status = typeof err === "object" && err && "status" in err ? err.status : 1;
  const stdout = typeof err === "object" && err && "stdout" in err ? String(err.stdout) : "";
  if (status === 1 && !stdout.trim()) {
    rgHits = "";
  } else if (status === 127) {
    rgHits = "";
  } else {
    rgHits = stdout.trim();
  }
}

if (maps.length) {
  console.error("check-ship: source maps remain:\n" + maps.join("\n"));
  process.exit(1);
}

if (hits.length || rgHits) {
  console.error("check-ship: forbidden tokens in production output");
  if (hits.length) console.error(hits.join("\n"));
  if (rgHits) console.error(rgHits);
  process.exit(1);
}

console.log("anonymity + brand grep: clean");
console.log("Tanuki / TanukiTrade / GEX Live: zero hits");
console.log("personal tokens: zero hits");
console.log("CNAME: cosanalyst.com");
