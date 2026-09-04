import type { Metadata } from "next";
import { UnpublishedLedger } from "@/components/UnpublishedLedger";

export const metadata: Metadata = {
  title: "Pricing",
  robots: { index: false, follow: true },
  alternates: { canonical: "/pricing/" },
};

export default function Page() {
  return (
    <UnpublishedLedger kicker="Membership" title="Pricing">
      <p>
        No pricing, no urgency, no invented subscriber count. The desk is free
        to read until membership is actually switched on.
      </p>
    </UnpublishedLedger>
  );
}
