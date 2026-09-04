import type { Metadata } from "next";
import { UnpublishedLedger } from "@/components/UnpublishedLedger";

export const metadata: Metadata = {
  title: "Members",
  robots: { index: false, follow: true },
  alternates: { canonical: "/members/" },
};

export default function Page() {
  return (
    <UnpublishedLedger kicker="Membership" title="Members">
      <p>
        Membership is architected and not activated. Sign in and subscribe stay
        off the public chrome until that changes.
      </p>
    </UnpublishedLedger>
  );
}
