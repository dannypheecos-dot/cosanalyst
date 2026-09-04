import type { Metadata } from "next";
import { UnpublishedLedger } from "@/components/UnpublishedLedger";

export const metadata: Metadata = {
  title: "Portfolio",
  robots: { index: false, follow: true },
  alternates: { canonical: "/portfolio/" },
};

export default function Page() {
  return (
    <UnpublishedLedger kicker="Ledger" title="Portfolio">
      <p>
        No invented book of positions. This path exists so a future Cos ledger
        has a home — not so an empty portfolio can be advertised.
      </p>
    </UnpublishedLedger>
  );
}
