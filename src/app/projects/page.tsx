import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Sector Selector is a CosAnalyst research project. The publication stays here.",
  alternates: { canonical: "/projects/" },
};

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Research projects</p>
          <h1>Projects</h1>
          <p>
            {site.name} is the publication. Projects are separate desks. This
            site does not embed Sector Selector. Config: sectorSelector is
            false.
          </p>
        </div>
        <div className="grid">
          <a className="card" href="/0dte-challenge/">
            <div className="meta">Live experiment</div>
            <h3>0DTE Challenge</h3>
            <p>
              A public, timestamped experiment in same-day options using market
              structure, GEX snapshots, and defined-risk rules. Simulated
              research — not a signal service.
            </p>
          </a>
          <a className="card" href={site.sectorSelectorUrl} rel="noopener noreferrer">
            <div className="meta">Research project</div>
            <h3>Sector Selector</h3>
            <p>
              Friday-close 11-sector ranking. Skip is a first-class state. XLV
              95 is a ranking, not a prophecy. The product lives at
              sectorselector.ai. It is not this publication and not an
              auto-enroll into {site.newsletter}.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
