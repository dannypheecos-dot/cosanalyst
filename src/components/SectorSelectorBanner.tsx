"use client";

import { asset } from "@/lib/asset";
import {
  trackSectorSelectorBanner,
  type BannerPlacement,
} from "@/lib/analytics";
import { site } from "@/lib/site";

const ALT =
  "Featured research project Sector Selector — Follow the rotation. Find the leadership. Explore SectorSelector.ai";

export function SectorSelectorBanner({
  placement,
}: {
  placement: BannerPlacement;
}) {
  return (
    <a
      className="ss-banner"
      href={site.sectorSelectorUrl}
      aria-label="Explore Sector Selector, a CosAnalyst research project"
      onClick={() => trackSectorSelectorBanner(placement)}
    >
      <img
        className="ss-banner-img"
        src={asset("/assets/images/sector-selector-featured-research-banner.png")}
        alt={ALT}
        width={1536}
        height={560}
      />
      <div className="ss-banner-stack">
        <p className="kicker">Featured Research Project</p>
        <h2>Sector Selector</h2>
        <p className="ss-dek">Follow the rotation. Find the leadership.</p>
        <p className="ss-attr">A CosAnalyst Research Project</p>
        <span className="ss-cta">Explore Sector Selector →</span>
      </div>
    </a>
  );
}
