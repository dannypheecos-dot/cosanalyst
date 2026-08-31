import { NoteCard } from "@/components/NoteCard";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="kicker">Research desk · publication</p>
          <h1>The siren is not the desk.</h1>
          <p className="dek">
            {site.name} prints verified tape, not the echo. One word. Fox.
            Charcoal and mint. {site.publisherLine}. {site.tagline}.
          </p>
          <div className="fact-bar">
            <span className="pill">Oil is $WTI</span>
            <span className="pill">No invented FedWatch</span>
            <span className="pill">{site.newsletter}</span>
            <span className="pill">{site.email}</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Desk notes</h2>
          <div className="grid">
            {articles.map((article) => (
              <NoteCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
