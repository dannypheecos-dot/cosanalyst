import Link from "next/link";
import type { Article } from "@/content/types";

export function NoteCard({ article }: { article: Article }) {
  return (
    <Link className="card" href={`/articles/${article.slug}/`}>
      <div className="meta">
        {article.date} · {article.section}
      </div>
      <h3>{article.title}</h3>
      <p>{article.dek}</p>
    </Link>
  );
}
