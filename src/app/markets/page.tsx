import type { Metadata } from "next";
import Link from "next/link";
import { articlesFor, toTeaser } from "@/content/articles";
import { formatDate } from "@/lib/format";
import { sections, type SectionId } from "@/lib/site";

export const metadata: Metadata = {
  title: "Markets",
  description: "Desk tape versus the echo. Cash close, not the midday card.",
  alternates: { canonical: "/markets/" },
};

const COVERAGE: SectionId[] = [
  "macro",
  "equities",
  "options",
  "commodities",
  "crypto",
];

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Coverage</p>
          <h1>Markets</h1>
          <p>
            A dashboard of what the desk covers. No live prints are invented to
            fill a quote board. Cash close, not the midday card.
          </p>
        </div>
        <div className="coverage-grid">
          {COVERAGE.map((id) => {
            const meta = sections[id];
            const notes = articlesFor(id);
            const latest = notes[0];
            return (
              <Link className="coverage-card" href={`/${id}/`} key={id}>
                <p className="kicker">{notes.length} notes</p>
                <h2>{meta.title}</h2>
                <p>{meta.dek}</p>
                {latest ? (
                  <p className="latest">
                    Latest: {toTeaser(latest).title} · {formatDate(latest.date)}
                  </p>
                ) : (
                  <p className="empty">
                    No Cos-verified {meta.title.toLowerCase()} tape on the desk
                    this week.
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
