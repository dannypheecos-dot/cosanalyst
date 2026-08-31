import { readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    if (name.endsWith(".map")) {
      rmSync(path);
      console.log(`stripped ${path}`);
    }
  }
}

walk("out");
