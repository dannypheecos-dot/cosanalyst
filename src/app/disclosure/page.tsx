import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosure",
  description:
    "CosAnalyst is simulated research. Not advice. Book fact. Not a ticket.",
  alternates: { canonical: "/disclosure/" },
};

export default function Page() {
  return (
    <section className="section legal-page">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Legal</p>
          <h1>Disclosure</h1>
          <p>
            {site.name} publishes independent market research. Simulated.{" "}
            {site.publisherLine}. Educational commentary — not investment
            advice, not a solicitation, and not a ticket.
          </p>
        </div>
        <p>
          Nothing on this site is an offer to buy or sell any security or
          derivative. Past prints are not a track record. We do not advertise
          audited results, AUM, or institutional adoption we do not have.
        </p>
        <p>
          Sector Selector and the 0DTE Challenge are research projects, not
          signal services. {site.newsletter} is a separate opt-in.
        </p>
        <p>
          <strong>{site.bookFact}</strong>
        </p>
        <p>
          Desk: <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
