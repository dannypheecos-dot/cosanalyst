import Link from "next/link";
import type { ArticleTeaser } from "@/content/articles";
import { formatDate, sectionLabel } from "@/lib/format";

export function NoteCard({
  article,
  lead = false,
}: {
  article: ArticleTeaser;
  lead?: boolean;
}) {
  const meta = `${sectionLabel(article.section)} · ${formatDate(article.date)}`;

  if (lead) {
    return (
      <Link className="note-card lead" href={`/articles/${article.slug}/`}>
        <img className="art" src={article.ogImage} alt={article.ogAlt} />
        <div className="copy">
          <div className="meta">{meta}</div>
          <h3>{article.title}</h3>
          <p>{article.dek}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link className="note-card" href={`/articles/${article.slug}/`}>
      <div className="meta">{meta}</div>
      <h3>{article.title}</h3>
      <p>{article.dek}</p>
    </Link>
  );
}
