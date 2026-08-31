import { NoteCard } from "@/components/NoteCard";
import { articlesFor } from "@/content/articles";
import { sections, type SectionId } from "@/lib/site";

export function SectionPage({ id }: { id: SectionId }) {
  const meta = sections[id];
  const notes = articlesFor(id);

  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Desk · {id}</p>
          <h1>{meta.title}</h1>
          <p>{meta.dek}</p>
        </div>
        {notes.length ? (
          <div className="grid">
            {notes.map((article) => (
              <NoteCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="empty">
            No Cos-verified {meta.title.toLowerCase()} tape on the desk this
            week. We do not invent a print to fill the page.
          </p>
        )}
      </div>
    </section>
  );
}
