import type { Metadata } from "next";
import { ResearchArchive } from "@/components/ResearchArchive";
import { articleTeasers, articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Research archive",
  description:
    "Searchable CosAnalyst desk notes. Simulated. Publisher + AI-assisted. Not a ticket.",
  alternates: { canonical: "/research/archive/" },
};

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Publication</p>
          <h1>Research archive</h1>
          <p>
            {articles.length} verified desk notes. Same book as{" "}
            <a href="/research/">/research/</a>.
          </p>
        </div>
        <ResearchArchive articles={articleTeasers()} />
      </div>
    </section>
  );
}
