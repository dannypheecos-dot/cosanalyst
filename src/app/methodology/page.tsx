import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How CosAnalyst prints: verified tape, named sources, no invented books.",
  alternates: { canonical: "/methodology/" },
};

export default function Page() {
  return (
    <section className="section legal-page">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">How the desk prints</p>
          <h1>Methodology</h1>
          <p>
            A note is published when the desk can name the print. If two books
            disagree, Cos carries both. If a figure was not pulled, it is not
            invented.
          </p>
        </div>
        <p>
          Cash close beats a midday card. A headline is not a breakout. Oil is
          $WTI. Public GEX language is “GEX snapshot.” Cos does not print G-D+.
        </p>
        <p>
          The Cos Book, when it is populated, uses only timestamped published
          views. Bias terms are BULLISH, BEARISH, NEUTRAL, or WATCHING — never
          BUY or SELL. {site.bookFact}.
        </p>
        <p>
          The 0DTE Challenge is simulated research on a public blotter. Losers
          stay. No advertised hit rate is manufactured to fill a page.
        </p>
        <p>
          Sector Selector is a Friday-close ranking. A ranking is not a
          prophecy and not an auto-enroll into {site.newsletter}.
        </p>
      </div>
    </section>
  );
}
