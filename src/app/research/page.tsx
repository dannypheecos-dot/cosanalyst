import type { Metadata } from "next";
import { NoteCard } from "@/components/NoteCard";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Research",
  description:
    "CosAnalyst desk notes. Simulated. Publisher + AI-assisted. Not a ticket.",
  alternates: { canonical: "/research/" },
};

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Publication</p>
          <h1>Research</h1>
          <p>
            Ten verified desk notes. CosAnalyst.com is the publication home.
            We do not invent GEX, CMT, or FedWatch.
          </p>
        </div>
        <div className="grid">
          {articles.map((article) => (
            <NoteCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
