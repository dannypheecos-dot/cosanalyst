import type { BookBias } from "@/lib/ledger";

export type BookView = {
  id: string;
  publishedAt: string;
  title: string;
  summary: string;
  bias: BookBias;
  sourceSlug?: string;
};

/** Only timestamped, published Cos book views belong here. Do not fabricate cards. */
export const bookViews: BookView[] = [];

export function publishedBookViews(now = new Date()): BookView[] {
  return bookViews.filter((view) => {
    const stamp = Date.parse(view.publishedAt);
    return Number.isFinite(stamp) && stamp <= now.getTime() && view.title && view.bias;
  });
}
