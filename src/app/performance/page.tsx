import type { Metadata } from "next";
import { UnpublishedLedger } from "@/components/UnpublishedLedger";

export const metadata: Metadata = {
  title: "Performance",
  robots: { index: false, follow: true },
  alternates: { canonical: "/performance/" },
};

export default function Page() {
  return (
    <UnpublishedLedger kicker="Ledger" title="Performance">
      <p>
        No backfilled track record, CAGR, or audited results. The route is
        reserved for when a Cos ledger is actually published.
      </p>
    </UnpublishedLedger>
  );
}
