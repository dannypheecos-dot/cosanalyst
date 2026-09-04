import type { Metadata } from "next";
import { NoteCard } from "@/components/NoteCard";
import { articles, toTeaser } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Verified CosAnalyst desk notes. Book fact. Not a ticket.",
  alternates: { canonical: "/articles/" },
};

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Publication</p>
          <h1>Articles</h1>
          <p>
            {articles.length} verified notes. CosAnalyst.com is the publication
            home. The searchable archive lives at{" "}
            <a href="/research/">/research/</a>.
          </p>
        </div>
        <div className="grid">
          {articles.map((article) => (
            <NoteCard key={article.slug} article={toTeaser(article)} />
          ))}
        </div>
      </div>
    </section>
  );
}
