import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write the CosAnalyst desk. desk@cosanalyst.com.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <section className="section legal-page">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Desk</p>
          <h1>Contact</h1>
          <p>
            Write the desk. Follow the live notes on X. There is no sales floor
            and no membership checkout on this publication yet.
          </p>
        </div>
        <p>
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          X:{" "}
          <a href={site.xUrl} target="_blank" rel="noopener noreferrer">
            {site.handle}
          </a>
        </p>
        <p>{site.bookFact}.</p>
      </div>
    </section>
  );
}
