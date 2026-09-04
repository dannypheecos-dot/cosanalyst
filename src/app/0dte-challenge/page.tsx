import type { Metadata } from "next";
import { UnregisterLegacyCache } from "@/app/0dte-challenge/UnregisterLegacyCache";
import { labBook, todaysEntry } from "@/content/daily-options-lab/lab";
import {
  previousChallenge,
  previousEvidenceSrc,
} from "@/content/daily-options-lab/previous";
import { buildScorecard } from "@/content/daily-options-lab/scorecard";
import {
  LAB_CANONICAL,
  LAB_DESCRIPTION,
  LAB_NAME,
  LAB_PATH,
  LAB_TAGLINE,
} from "@/content/daily-options-lab/types";
import { money, pct } from "@/lib/lab";
import { site } from "@/lib/site";
import "./lab.css";

const title = LAB_NAME;
const description = LAB_DESCRIPTION;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: LAB_PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    url: LAB_CANONICAL,
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: `${LAB_NAME} — simulated research experiment`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.handle,
    title,
    description,
    images: ["/og/home.png"],
  },
};

function LabJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: LAB_NAME,
    headline: LAB_NAME,
    description: LAB_DESCRIPTION,
    url: LAB_CANONICAL,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    about: "Simulated options research — not live trading",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="lab-stat">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      {note ? <div className="note">{note}</div> : null}
    </div>
  );
}

export default function DailyOptionsLabPage() {
  const today = todaysEntry();
  const scorecard = buildScorecard(labBook);
  const tradeZero = previousChallenge.trades[0];
  const evidence = tradeZero?.evidence;

  return (
    <div className="lab">
      <UnregisterLegacyCache />
      <LabJsonLd />

      <section className="lab-hero" id="lab-top">
        <div className="wrap lab-hero-copy">
          <p className="kicker">Public research experiment</p>
          <h1>The CosAnalyst Daily Options Lab</h1>
          <p className="dek">{LAB_TAGLINE}</p>
          <div className="lab-banners" role="status">
            <span className="lab-banner ink">
              Simulated research — not live trading
            </span>
            <span className="lab-banner">{site.bookFact}</span>
          </div>
          <p className="dek">{LAB_DESCRIPTION}</p>
          <p>
            Exactly one simulated options entry per regular U.S. equity session.
            Official fills come from the TradingView paper desk — timestamped
            ET, never backdated. The live scorecard is empty until that fill
            exists.
          </p>
          <nav className="lab-jump" aria-label="On this page">
            <a href="#today">Today</a>
            <a href="#tracking">Tracking</a>
            <a href="#scorecard">Scorecard</a>
            <a href="#archive">Archive</a>
            <a href="#learning">Learning</a>
            <a href="#method">Method</a>
            <a href="#disclosure">Disclosure</a>
            <a href="#previous-format">Previous format</a>
          </nav>
        </div>
      </section>

      <section className="lab-section" id="today">
        <div className="wrap">
          <article className="lab-dark">
            <p className="kicker">Today</p>
            <h2>Today’s Daily Test Entry</h2>
            <p>
              <span className="lab-status">{labBook.today.status}</span>
            </p>
            {today ? (
              <p className="lab-empty">
                {today.underlying} {today.strike}
                {today.side === "CALL" ? "C" : "P"} · {today.expirationKind}
              </p>
            ) : (
              <>
                <p className="lab-empty">No Daily Test Entry on the book.</p>
                <p className="lab-empty-note">{labBook.today.note}</p>
              </>
            )}
          </article>
        </div>
      </section>

      <section className="lab-section" id="tracking">
        <div className="wrap">
          <article className="lab-dark">
            <p className="kicker">Live contract</p>
            <h2>Current Contract Tracking</h2>
            {today &&
            (today.status === "ENTRY LOGGED" || today.status === "TRACKING") ? (
              <p className="lab-empty">
                Tracking {today.underlying} {today.strike}
                {today.side === "CALL" ? "C" : "P"}.
              </p>
            ) : (
              <>
                <p className="lab-empty">No contract is being tracked.</p>
                <p className="lab-empty-note">
                  Tracking starts after an official TradingView paper fill —
                  fill time ET plus screenshot. Workflow is stubbed until that
                  log exists. ~4:15 PM ET evidence will record entry, final,
                  high, and low after the fill, plus MFE and MAE. Next-session
                  tickets get an entry-day note and an expiration-day note.
                </p>
              </>
            )}
          </article>
        </div>
      </section>

      <section className="lab-section" id="scorecard">
        <div className="wrap">
          <article className="lab-dark">
            <div className="section-head">
              <div>
                <p className="kicker section-kicker">Live book</p>
                <h2>Scorecard</h2>
              </div>
              <p className="asof">New lab format only · no CAGR</p>
            </div>
            <p className="intro">
              Two numbers, never mixed. Official simulated P&amp;L is realized.
              Maximum opportunity after alert is not realized — it is the
              largest post-alert move the evidence can support.
            </p>
            <div className="lab-grid dense">
              <Stat label="Sessions" value={String(scorecard.sessions)} />
              <Stat label="Entries" value={String(scorecard.entries)} />
              <Stat
                label="Wins / losses"
                value={`${scorecard.wins} / ${scorecard.losses}`}
              />
              <Stat
                label="Official cum P&L"
                value={
                  scorecard.entries
                    ? money(scorecard.cumulativeOfficialPnl)
                    : "—"
                }
                note="Realized only"
              />
              <Stat
                label="Return"
                value={pct(scorecard.returnPct)}
                note="No CAGR"
              />
              <Stat
                label="Average P&L"
                value={money(scorecard.averageOfficialPnl)}
              />
              <Stat
                label="Median P&L"
                value={money(scorecard.medianOfficialPnl)}
              />
              <Stat label="Avg MFE" value={money(scorecard.averageMfe)} />
              <Stat label="Avg MAE" value={money(scorecard.averageMae)} />
              <Stat
                label="Max drawdown"
                value={money(scorecard.maxDrawdown)}
              />
              <Stat
                label="QQQ"
                value={
                  scorecard.byTicker.QQQ.entries
                    ? money(scorecard.byTicker.QQQ.officialPnl)
                    : "—"
                }
                note={`${scorecard.byTicker.QQQ.entries} entries`}
              />
              <Stat
                label="SPY"
                value={
                  scorecard.byTicker.SPY.entries
                    ? money(scorecard.byTicker.SPY.officialPnl)
                    : "—"
                }
                note={`${scorecard.byTicker.SPY.entries} entries`}
              />
              <Stat
                label="IWM"
                value={
                  scorecard.byTicker.IWM.entries
                    ? money(scorecard.byTicker.IWM.officialPnl)
                    : "—"
                }
                note={`${scorecard.byTicker.IWM.entries} entries`}
              />
              <Stat
                label="0DTE"
                value={
                  scorecard.byExpiration.zeroDte.entries
                    ? money(scorecard.byExpiration.zeroDte.officialPnl)
                    : "—"
                }
                note={`${scorecard.byExpiration.zeroDte.entries} entries`}
              />
              <Stat
                label="Next-session"
                value={
                  scorecard.byExpiration.nextSession.entries
                    ? money(scorecard.byExpiration.nextSession.officialPnl)
                    : "—"
                }
                note={`${scorecard.byExpiration.nextSession.entries} entries`}
              />
              <Stat
                label="Last updated"
                value={scorecard.lastUpdatedEt ?? "Building"}
              />
            </div>
            <div className="lab-metrics">
              <dl className="lab-metric">
                <dt>Official simulated P&amp;L</dt>
                <dd>
                  {scorecard.entries
                    ? money(scorecard.cumulativeOfficialPnl)
                    : "—"}
                </dd>
                <span className="disc">Realized on closed Daily Test Entries only.</span>
              </dl>
              <dl className="lab-metric">
                <dt>Maximum opportunity after alert</dt>
                <dd>—</dd>
                <span className="disc">
                  Not realized. Not mixed with official P&amp;L.
                </span>
              </dl>
            </div>
            <p className="lab-empty-note">{scorecard.learningFocus}</p>
          </article>
        </div>
      </section>

      <section className="lab-section" id="archive">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">New format</p>
              <h2>Results Archive</h2>
            </div>
          </div>
          {labBook.entries.length ? (
            <div className="grid">
              {labBook.entries.map((entry) => (
                <article className="lab-paper" key={entry.id}>
                  <p className="kicker">{entry.label}</p>
                  <h3>
                    {entry.sessionDate} · {entry.underlying} {entry.strike}
                    {entry.side === "CALL" ? "C" : "P"}
                  </h3>
                  <p>
                    {entry.expirationKind} · {entry.status}
                    {entry.officialSimulatedPnl != null
                      ? ` · ${money(entry.officialSimulatedPnl)}`
                      : ""}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="lab-archive-empty">
              <strong>No new-format results yet.</strong>
              <p>
                Completed Daily Test Entries will append here. They will not be
                blended with the previous challenge ledger.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="lab-section" id="learning">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">Forward only</p>
              <h2>What the System Is Learning</h2>
            </div>
          </div>
          {labBook.learningNotes.length ? (
            <div className="stack-cards">
              {labBook.learningNotes.map((note) => (
                <article className="lab-paper" key={note.id}>
                  <p className="kicker">{note.sessionDate}</p>
                  <p>{note.body}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="lab-learn-empty">
              <strong>No lab learning note yet.</strong>
              <p>
                A daily note appends after each RESULT COMPLETE. Prior challenge
                lessons stay under Previous Challenge Format — they do not
                rewrite this book.
              </p>
              <p style={{ marginTop: "0.7rem" }}>{labBook.learningFocus}</p>
            </div>
          )}
        </div>
      </section>

      <section className="lab-section" id="method">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">How a day is logged</p>
              <h2>Simple Methodology</h2>
            </div>
          </div>
          <ol className="lab-list">
            <li>
              One simulated options entry per regular U.S. equity session. Label:{" "}
              <strong>DAILY TEST ENTRY</strong> — never A+.
            </li>
            <li>
              Underlyings: <strong>QQQ · SPY · IWM</strong>. Calls or puts.
            </li>
            <li>
              Capital unit is up to <strong>$500</strong> of option premium.
              Quantity is floor(500 ÷ (fill × 100)). If one contract costs more
              than $500, the desk logs a <strong>CAPITAL-UNIT EXCEPTION</strong>{" "}
              and still takes one contract.
            </li>
            <li>
              Morning may use true 0DTE. Afternoon generally uses next-session
              expiration. Every ticket explains the expiration choice.
            </li>
            <li>
              Official fill is the TradingView paper desk fill time ET plus
              screenshot. Fills are never backdated. If execution fails, the
              day is a <strong>TECHNICAL EXCEPTION</strong>.
            </li>
            <li>
              Statuses: SELECTING · ENTRY LOGGED · TRACKING · RESULT COMPLETE ·
              TECHNICAL EXCEPTION.
            </li>
            <li>
              Around 4:15 PM ET the desk keeps entry, final, high, and low after
              the fill, plus MFE and MAE. Next-session tickets carry entry-day
              and expiration-day observations.
            </li>
            <li>
              Two metrics only: official simulated P&amp;L (realized) and
              maximum opportunity after alert (not realized). No CAGR on this
              book.
            </li>
            <li>
              A learning note appends after each result. Records are
              append-only. Corrections are visible additions, never silent
              overwrites.
            </li>
          </ol>
        </div>
      </section>

      <section className="lab-section" id="disclosure">
        <div className="wrap legal-page">
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">Read first</p>
              <h2>Disclosure</h2>
            </div>
          </div>
          <p>
            This is simulated research. Not live trading. Not a signal service.
            Not investment advice. {site.publisherLine}. {site.bookFact}.
          </p>
          <p>
            A long option can lose 100% of the premium paid. Stops and
            invalidations are management instructions, not guaranteed fills.
            Commissions and slippage are not modeled unless a row says they
            are. SPY, QQQ, and IWM are ETF options — verify the product cutoff
            (typically 4:15 PM ET on regular sessions).
          </p>
          <p>
            Maximum opportunity after alert is not realized profit and does not
            mean anyone captured the move. Official simulated P&amp;L is the
            only realized number on the live scorecard.
          </p>
          <p>
            CosAnalyst is not a registered investment adviser, broker-dealer,
            or commodity trading advisor. Nothing here is an offer to buy or
            sell any security or option.
          </p>
          <p>
            <a href="/disclosure/">Site disclosure</a>
            {" · "}
            <a href="/methodology/">Publication methodology</a>
          </p>
        </div>
      </section>

      <section className="lab-section lab-prev" id="previous-format">
        <div className="wrap">
          <p className="lab-prev-flag">Previous challenge format</p>
          <div className="section-head">
            <div>
              <p className="kicker section-kicker">Archived ledger</p>
              <h2>Previous Challenge Format</h2>
            </div>
            <p className="asof">{previousChallenge.asOfLabel}</p>
          </div>
          <p className="intro">
            The CosAnalyst 0DTE Challenge (1 Sep 2026 – 1 Oct 2026 window)
            remains on the public record. Its Trade Zero, evidence, and
            lessons are archived here. They are not part of the Daily Options
            Lab scorecard and are not restated as new-format results.
          </p>
          <p className="intro">{previousChallenge.disclosure}</p>

          {tradeZero ? (
            <article className="lab-prev-card">
              <p className="kicker">{tradeZero.statusLabel}</p>
              <h3>{tradeZero.contract}</h3>
              <p>{tradeZero.thesis}</p>
              <dl className="lab-dl">
                <div>
                  <dt>Entry</dt>
                  <dd>
                    ${tradeZero.entry.toFixed(2)} · {tradeZero.openedAlerted}
                  </dd>
                </div>
                <div>
                  <dt>Exit</dt>
                  <dd>
                    {tradeZero.exit != null
                      ? `$${tradeZero.exit.toFixed(2)}`
                      : "—"}{" "}
                    · {tradeZero.exitLabel}
                  </dd>
                </div>
                <div>
                  <dt>Official managed P&amp;L</dt>
                  <dd>{tradeZero.pnlLabel}</dd>
                </div>
                <div>
                  <dt>Official peak</dt>
                  <dd>{tradeZero.peakOpportunityLabel ?? "—"}</dd>
                </div>
                <div>
                  <dt>Charted peak</dt>
                  <dd>
                    {tradeZero.chartedPeak
                      ? `${tradeZero.chartedPeak.label} · $${tradeZero.chartedPeak.high.toFixed(2)} · ${tradeZero.chartedPeak.atLabel}`
                      : "—"}
                  </dd>
                </div>
                <div>
                  <dt>Model cash after Trade Zero</dt>
                  <dd>
                    ${previousChallenge.modelCash.toLocaleString("en-US")}
                  </dd>
                </div>
              </dl>
              <p>{tradeZero.commentary}</p>
              {evidence ? (
                <figure className="lab-shot">
                  <img
                    src={previousEvidenceSrc(evidence.path)}
                    alt={`TradingView ${evidence.timeframe.toLowerCase()} chart of ${evidence.contract}, ${evidence.candleTime}`}
                  />
                  <figcaption>
                    {evidence.platform} · {evidence.timeframe} ·{" "}
                    {evidence.candleTime}. OHLC ${evidence.ohlc.open.toFixed(2)} / $
                    {evidence.ohlc.high.toFixed(2)} / $
                    {evidence.ohlc.low.toFixed(2)} / $
                    {evidence.ohlc.close.toFixed(2)}. {evidence.evidenceLevel}.{" "}
                    {evidence.executableBidVerification}.
                  </figcaption>
                </figure>
              ) : null}
            </article>
          ) : null}

          <div className="lab-prev-card">
            <h3>Archived session cards</h3>
            {previousChallenge.days.map((day) => (
              <p key={day.date}>
                <strong>{day.label}.</strong> {day.officialRecord}.{" "}
                {day.observation ?? day.whyNoneQualified ?? day.officialLabel}
              </p>
            ))}
          </div>

          {previousChallenge.lessons.map((lesson) => (
            <article className="lab-prev-card" key={lesson.id}>
              <p className="kicker">
                Lesson {lesson.number} · {lesson.effectiveLabel}
              </p>
              <h3>{lesson.title}</h3>
              <p>{lesson.body}</p>
            </article>
          ))}

          <details className="lab-details">
            <summary>Open the archived timeline</summary>
            <ol className="lab-timeline">
              {previousChallenge.timeline.map((event) => (
                <li key={event.id} id={event.id}>
                  <p className="action">{event.action}</p>
                  <time>{event.atLabel}</time>
                  <p>{event.summary}</p>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </section>
    </div>
  );
}
