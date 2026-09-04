import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function UnpublishedLedger({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section legal-page">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          {children}
        </div>
        <p className="empty">
          This ledger is not published. {site.bookFact}. Back to{" "}
          <Link href="/">Home</Link> or <Link href="/research/">Research</Link>.
        </p>
      </div>
    </section>
  );
}
