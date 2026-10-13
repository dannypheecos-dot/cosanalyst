import { Barlow_Condensed } from "next/font/google";
import { toString as qrToString } from "qrcode";
import { TelegramMark } from "@/components/TelegramMark";
import { telegramPromo } from "@/content/telegramPromo";

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-condensed",
});

function accentedHeadline(text: string, accent: string) {
  const at = text.lastIndexOf(accent);
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <span className="tg-accent">{accent}</span>
      {text.slice(at + accent.length)}
    </>
  );
}

/** Build-time SVG from the qrcode library. Static HTML, no client script. */
async function telegramQrSvg(url: string): Promise<string> {
  const svg = await qrToString(url, {
    type: "svg",
    errorCorrectionLevel: "Q",
    margin: 2,
    color: { dark: "#141210", light: "#f6f1e6" },
  });
  const trimmed = svg.trim();
  if (!trimmed.startsWith("<svg") || trimmed.includes("<script")) {
    throw new Error("QR library did not return an SVG.");
  }
  return trimmed.replace("<svg ", '<svg aria-hidden="true" focusable="false" ');
}

const qrSvgPromise = telegramQrSvg(telegramPromo.href);

export async function TelegramPromo({
  titleId,
  compact = false,
}: {
  titleId: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <section
        className={`tg-promo tg-compact ${condensed.variable}`}
        aria-labelledby={titleId}
      >
        <div className="tg-promo-in">
          <p className="tg-eyebrow">{telegramPromo.eyebrow}</p>
          <h2 id={titleId} className="tg-headline">
            {accentedHeadline(telegramPromo.headline, telegramPromo.headlineAccent)}
          </h2>
          <ul className="tg-bullets">
            {telegramPromo.compactBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <a
            className="tg-cta"
            href={telegramPromo.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramMark />
            {telegramPromo.cta}
          </a>
        </div>
      </section>
    );
  }

  const qrSvg = await qrSvgPromise;

  return (
    <section className={`tg-promo ${condensed.variable}`} aria-labelledby={titleId}>
      <div className="tg-promo-in">
        <div className="tg-layout">
          <div className="tg-kicker">
            <p className="tg-eyebrow">{telegramPromo.eyebrow}</p>
            <span className="tg-live">
              <span className="tg-live-dot" aria-hidden="true" />
              {telegramPromo.live}
            </span>
          </div>
          <h2 id={titleId} className="tg-headline">
            {accentedHeadline(telegramPromo.headline, telegramPromo.headlineAccent)}
          </h2>
          <ul className="tg-bullets">
            {telegramPromo.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <div className="tg-visual">
            <div className="tg-devices">
              <div className="tg-phone" aria-hidden="true">
                <div className="tg-phone-speaker" />
                <div className="tg-phone-screen">
                  {telegramPromo.phoneNotes.map((note) => (
                    <p className="tg-phone-row" key={note}>
                      <span className="tg-phone-mark" />
                      <span>{note}</span>
                    </p>
                  ))}
                </div>
              </div>
              <a
                className="tg-qr-link"
                href={telegramPromo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={telegramPromo.cta}
              >
                <span className="tg-qr" dangerouslySetInnerHTML={{ __html: qrSvg }} />
              </a>
            </div>
            <a
              className="tg-cta"
              href={telegramPromo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramMark />
              {telegramPromo.cta}
            </a>
          </div>
          <div className="tg-foot">
            <p className="tg-soon">
              <span className="tg-soon-mark" aria-hidden="true" />
              {telegramPromo.soon}
            </p>
            <p className="tg-fine">{telegramPromo.finePrint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
