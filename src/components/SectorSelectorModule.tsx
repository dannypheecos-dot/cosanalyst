"use client";

import { trackSectorSelectorBanner } from "@/lib/analytics";
import { site } from "@/lib/site";

export function SectorSelectorModule() {
  return (
    <aside className="ss-module" aria-label="Sector Selector">
      <p className="kicker">Research project</p>
      <h2>Sector Selector</h2>
      <p>
        Friday-close eleven-sector ranking. Follow the rotation. Find the
        leadership. A map, not a prophecy.
      </p>
      <a
        className="btn"
        href={site.sectorSelectorUrl}
        aria-label="Explore Sector Selector, a CosAnalyst research project"
        onClick={() => trackSectorSelectorBanner("article")}
      >
        Explore Sector Selector →
      </a>
    </aside>
  );
}
