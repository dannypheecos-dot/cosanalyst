"use client";

import { asset } from "@/lib/asset";
import {
  trackSectorSelectorBanner,
  type BannerPlacement,
} from "@/lib/analytics";
import { site } from "@/lib/site";

const ALT =
  "Featured research project Sector Selector — Follow the rotation. Find the leadership. Explore SectorSelector.ai";

function CompassMark() {
  return (
    <svg className="ss-compass" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="#1b4332" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#f4efe4" strokeWidth="1.25" />
      <path d="M32 12 L36.5 32 L32 29.5 L27.5 32 Z" fill="#f4efe4" />
      <path d="M32 52 L27.5 32 L32 34.5 L36.5 32 Z" fill="#c4171d" />
      <circle cx="32" cy="32" r="2.2" fill="#f4efe4" />
      <text x="32" y="9.2" textAnchor="middle" fill="#f4efe4" fontSize="6.5" fontFamily="sans-serif" fontWeight="700">N</text>
      <text x="56.5" y="34.2" textAnchor="middle" fill="#f4efe4" fontSize="5.5" fontFamily="sans-serif" fontWeight="700">E</text>
      <text x="32" y="60.2" textAnchor="middle" fill="#f4efe4" fontSize="5.5" fontFamily="sans-serif" fontWeight="700">S</text>
      <text x="7.6" y="34.2" textAnchor="middle" fill="#f4efe4" fontSize="5.5" fontFamily="sans-serif" fontWeight="700">W</text>
    </svg>
  );
}

export function SectorSelectorBanner({
  placement,
  compact = false,
}: {
  placement: BannerPlacement;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <a
        className="ss-compact"
        href={site.sectorSelectorUrl}
        onClick={() => trackSectorSelectorBanner(placement)}
      >
        <CompassMark />
        <p className="ss-compact-title">SECTOR SELECTOR</p>
        <p className="ss-compact-dek">Follow the rotation. Find the leadership.</p>
        <span className="ss-cta">Explore SectorSelector.ai</span>
      </a>
    );
  }

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
