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
            The brief is a separate opt-in. This page does not enroll you, does
            not attach a capture form, and does not pipe an address anywhere.
            Write the desk if you want it.
          </p>
        </div>
        <p>
          Desk: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="empty">
          {site.tagline}. {site.publisherLine}. Not a ticket.
        </p>
      </div>
    </section>
  );
}
