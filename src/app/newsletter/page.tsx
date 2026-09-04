import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `${site.newsletter} — write the desk. No auto-enroll.`,
  alternates: { canonical: "/newsletter/" },
};

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Mail</p>
          <h1>{site.newsletter}</h1>
          <p>
            The brief is a separate opt-in. This page does not enroll you and
            does not invent a cadence. Prefer the live feed.
          </p>
        </div>
        <div className="brief-actions">
          <a
            className="btn"
            href={site.xUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow {site.handle} →
          </a>
          <a
            className="btn btn-ghost"
            href={`mailto:${site.email}?subject=Join%20the%20Market%20Brief`}
          >
            Join the brief
          </a>
        </div>
        <p className="empty" style={{ marginTop: "1.4rem" }}>
          {site.bookFact}. {site.publisherLine}. Not a ticket.
        </p>
      </div>
    </section>
  );
}
