export type BannerPlacement = "homepage" | "article" | "archive";

type AnalyticsWindow = Window & {
  gtag?: (command: string, event: string, params?: Record<string, string>) => void;
  plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
};

export function track(event: string, props?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  if (typeof w.gtag === "function") {
    w.gtag("event", event, props);
  }
  if (typeof w.plausible === "function") {
    w.plausible(event, props ? { props } : undefined);
  }
}

export function trackSectorSelectorBanner(placement: BannerPlacement): void {
  track("sector_selector_banner_click", { placement });
}
