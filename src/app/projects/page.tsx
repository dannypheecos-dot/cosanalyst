import type { Metadata } from "next";
import { TelegramMark } from "@/components/TelegramMark";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Sector Selector and Free SPY, QQQ & IWM Trade Alerts. CosAnalyst stays the publication.",
  alternates: { canonical: "/projects/" },
};

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="page-head">
          <p className="kicker">Research projects</p>
          <h1>Projects</h1>
          <p>
            {site.name} is the publication. Projects are separate desks. This
            site does not embed Sector Selector. Config: sectorSelector is
            false.
          </p>
        </div>
        <div className="grid">
          <a className="card" href={site.sectorSelectorUrl}>
            <div className="meta">Research project</div>
            <h3>Sector Selector</h3>
            <p>
              Friday-close 11-sector ranking. Skip is a first-class state. XLV
              95 is a ranking, not a prophecy. The product lives at
              sectorselector.ai. It is not this publication and not an
              auto-enroll into {site.newsletter}.
            </p>
          </a>
          <article className="card project-card">
            <img
              className="art"
              src={asset("/projects/fox-alerts.png")}
              width={1200}
              height={630}
              alt="FOX ALERTS on black, with the red line Every trade gets a receipt, beside a phone of SPY, QQQ and IWM alerts showing entry, stop, T1 and T2."
            />
            <div className="copy">
              <div className="meta">Live</div>
              <h3>{site.channelAlertsLabel}</h3>
              <p>
                {site.channelAlertsSubline} Fox Alerts is one alert type.
                Educational only, not financial advice.
              </p>
              <a
                className="join-tg"
                href={site.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramMark />
                Join free on Telegram
              </a>
            </div>
          </article>
          <div className="card" aria-label="Future desks">
            <div className="meta">Future desks</div>
            <h3>More when they are public</h3>
            <p>
              Additional projects will appear here when they have a published
              desk. We do not advertise an empty product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
