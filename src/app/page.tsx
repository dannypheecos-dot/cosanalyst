import Link from "next/link";
import { NoteCard } from "@/components/NoteCard";
import { SectorSelectorBanner } from "@/components/SectorSelectorBanner";
import { publishedBookViews } from "@/content/book";
import { articles, toTeaser } from "@/content/articles";
import { formatDate } from "@/lib/format";
import { site } from "@/lib/site";

export default function HomePage() {
  const latest = articles[0];
  const secondary = articles.slice(1, 4);
  const latestHref = latest ? `/articles/${latest.slug}/` : "/research/";
  const book = publishedBookViews();

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">Independent market research</p>
            <h1>Markets are cause and effect.</h1>
            <p className="dek">
              CosAnalyst reads the tape, the calendar, and the structure —
              cause first, then effect — and prints what can be verified. Not
              the siren. Not the echo. Independent research. Simulated.{" "}
              {site.publisherLine}.
            </p>
            <Link className="btn" href={latestHref}>
              Read the latest research →
            </Link>
          </div>
          <aside className="desk-card" aria-label="The CosAnalyst desk">
            <p className="kicker">Desk</p>
            <h2>The CosAnalyst Desk</h2>
            {latest ? (
              <Link className="desk-row" href={latestHref}>
                <span className="label">Latest research</span>
                <span className="value">{latest.title}</span>
              </Link>
            ) : null}
            <Link className="desk-row" href="/0dte-challenge/">
              <span className="label">Active project</span>
              <span className="value">Daily Options Lab</span>
            </Link>
            <a className="desk-row" href={site.sectorSelectorUrl}>
              <span className="label">Sector research</span>
              <span className="value">Sector Selector</span>
            </a>
            <p className="desk-foot">{site.bookFact}</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">Publication</p>
              <h2>Latest research</h2>
            </div>
            <Link className="btn btn-ghost" href="/research/">
              View all research →
            </Link>
          </div>
          {latest ? (
            <div className="lead-grid">
              <NoteCard article={toTeaser(latest)} lead />
              <div className="stack-cards">
                {secondary.map((article) => (
                  <NoteCard key={article.slug} article={toTeaser(article)} />
                ))}
              </div>
            </div>
          ) : (
            <p className="empty">No Cos-verified notes on the desk yet.</p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap-wide">
          <SectorSelectorBanner placement="homepage" />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">The desk</p>
              <h2>Three pillars</h2>
            </div>
          </div>
          <div className="pillar-grid">
            <article className="pillar">
              <p className="kicker">01</p>
              <h3>Market Intelligence</h3>
              <p>
                Desk notes on macro, equities, options, and commodities.
                Verified tape. No invented prints.
              </p>
              <Link className="btn btn-ghost" href="/research/">
                Read the research →
              </Link>
            </article>
            <article className="pillar">
              <p className="kicker">02</p>
              <h3>Sector Selector</h3>
              <p>
                Friday-close eleven-sector ranking. Leadership and rotation — a
                map, not a prophecy.
              </p>
              <a className="btn btn-ghost" href={site.sectorSelectorUrl}>
                Explore Sector Selector →
              </a>
            </article>
            <article className="pillar">
              <p className="kicker">03</p>
              <h3>Daily Options Lab</h3>
              <p>
                One session. One entry. A transparent simulated-research record
                — not a signal service.
              </p>
              <Link className="btn btn-ghost" href="/0dte-challenge/">
                Enter the lab →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">The Cos Book</p>
              <h2>What the desk is watching.</h2>
            </div>
          </div>
          {book.length ? (
            <div className="book-grid">
              {book.map((view) => (
                <article className="book-card" key={view.id}>
                  <p className="bias">{view.bias}</p>
                  <h3>{view.title}</h3>
                  <p>{view.summary}</p>
                  <p className="meta">{formatDate(view.publishedAt.slice(0, 10))}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="book-empty">
              <strong>The book is building.</strong>
              <p>
                The desk publishes timestamped views when they are ready. Bias
                is BULLISH, BEARISH, NEUTRAL, or WATCHING — never BUY or SELL.
              </p>
              <p className="desk-foot" style={{ border: 0 }}>
                {site.bookFact}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap brief-band">
          <div>
            <p className="kicker">Mail</p>
            <h2>The CosAnalyst Market Brief</h2>
            <p className="dek">
              The live desk is on X. The brief is a separate opt-in — write the
              desk if you want it. No invented cadence.
            </p>
          </div>
          <div className="brief-actions">
            <a
              className="btn"
              href={site.xUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow {site.handle} →
            </a>
            <a className="btn btn-ghost" href={`mailto:${site.email}?subject=Join%20the%20Market%20Brief`}>
              Join the brief
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
