import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CosAnalyst is an independent research desk. Book fact. Not a ticket.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return (
    <section className="section legal-page">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">The desk</p>
          <h1>About CosAnalyst</h1>
          <p>
            CosAnalyst is one word. An independent market-research desk.
            Publisher + AI-assisted. Simulated research. Not a broker, not a
            signal service, and not a ticket.
          </p>
        </div>
        <p>
          The publication follows a simple order: media, then research, then
          track record, then membership. We look established by being careful —
          not by inventing CAGR, subscriber counts, testimonials, AUM, or live
          quotes we did not print.
        </p>
        <p>
          Desk notes live here. Sector Selector is a research project at{" "}
          <a href={site.sectorSelectorUrl}>sectorselector.ai</a>. The 30-Day AI
          0DTE Challenge is a public, timestamped experiment at{" "}
          <a href="/0dte-challenge/">/0dte-challenge/</a>.
        </p>
        <p>
          Oil is $WTI. Never $CL. Public copy says GEX snapshot, never a vendor
          brand. We do not invent GEX, CMT, or FedWatch.
        </p>
        <p>
          {site.bookFact}. Desk:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.{" "}
          <a href={site.xUrl} target="_blank" rel="noopener noreferrer">
            {site.handle}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
