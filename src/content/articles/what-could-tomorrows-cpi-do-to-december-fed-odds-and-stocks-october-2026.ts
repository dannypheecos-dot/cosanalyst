import type { Article } from "@/content/types";

const BLS = "https://www.bls.gov/news.release/cpi.nr0.htm";
const BLS_FAQ = "https://www.bls.gov/cpi/additional-resources/2025-federal-government-shutdown-impact-cpi-faq.htm";
const BLS_CAL = "https://www.bls.gov/schedule/news_release/cpi.htm";
const CNBC = "https://www.cnbc.com/2026/11/09/october-cpi-report-2026-inflation.html";
const CLEV = "https://www.clevelandfed.org/indicators-and-data/inflation-nowcasting";
const FOMC = "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm";
const POLY = "https://polymarket.com/event/fed-decision-in-december-20260729232808632";
const FED = "/articles/will-the-fed-raise-rates-in-december-2026-hike-odds-pce-live-updates/";
const JOBS = "/articles/what-do-todays-jobs-numbers-mean-for-the-stock-market-october-2026-jobs-report/";
const RECAP = "/articles/fed-decision-recap-did-the-fed-raise-rates-warsh-vote-2026-10-28/";
const CRASH = "/articles/why-did-the-stock-market-crash-nasdaq-ai-selloff-nvidia-2026-11-06/";
const ALT =
  "CosAnalyst cream card: CPI tomorrow. Core is the tell. December hangs on it. Consensus 0.3% / 0.2%. No official year rate.";

const article: Article = {
  "slug": "what-could-tomorrows-cpi-do-to-december-fed-odds-and-stocks-october-2026",
  "title": "What Could Tomorrow's CPI Report Do to December Fed Odds and Stocks?",
  "titleTag": "October CPI Preview: December Fed Odds and Stocks",
  "dek": "The Bureau of Labor Statistics releases October CPI Tuesday at 5:30 AM PT. Wall Street expects 0.3% headline and 0.2% core, and there will be no official year-over-year rate. Here is how a hot, in-line, or soft core could swing December hike odds, the 10-year, and QQQ into year-end.",
  "date": "2026-11-09",
  "section": "markets",
  "also": ["macro"],
  "kicker": "CPI Preview",
  "asOf": "As of about 9:00 PM PT Nov 9, 2026",
  "displayTime": "Nov 9, 2026 · 9:00 PM PT",
  "publishedAt": "2026-11-09T21:00:00-08:00",
  "ogImage": "/og/what-could-tomorrows-cpi-do-to-december-fed-odds-and-stocks-october-2026-og.png",
  "ogAlt": ALT,
  "body": [
    { "type": "figure", "src": "/og/what-could-tomorrows-cpi-do-to-december-fed-odds-and-stocks-october-2026.png", "alt": ALT, "caption": "October CPI is scheduled for 8:30 AM ET / 5:30 AM PT Tuesday, Nov. 10, 2026. Consensus and the missing annual rate are explained in the tables below. Conceptual art, not a chart of the print." },
    { "type": "lede", "text": "Tomorrow morning, at 5:30 AM PT, the last official consumer price index before the Federal Reserve's December meeting hits the tape. It will not look like a normal CPI report. Because of last year's government shutdown, the Bureau of Labor Statistics will not publish a year-over-year inflation rate for most indexes, including headline and core. What Wall Street still gets, and what the market will trade, is the monthly change." },
    { "type": "p", "text": "The [Dow Jones consensus, via CNBC](" + CNBC + "), is 0.3% for headline CPI and 0.2% for core, which strips out food and energy. That would be a slowdown from September, when headline jumped 0.6% and core rose 0.3% ([BLS](" + BLS + ")). It would not, on its own, tell you inflation is back at the Fed's 2% goal. And it arrives one trading day after $QQQ bounced 3.5% and $SPY 2.4%, with December hike odds already near 80%." },
    { "type": "h2", "text": "The numbers in one table" },
    { "type": "table", "columns": ["Item", "Reading", "Source"], "rows": [
      ["Release", "Tue Nov 10, 8:30 AM ET / 5:30 AM PT", "BLS schedule"],
      ["Headline CPI, m/m consensus", "0.3%", "Dow Jones via CNBC"],
      ["Core CPI, m/m consensus", "0.2%", "Dow Jones via CNBC"],
      ["September headline / core, m/m", "0.6% / 0.3%", "BLS"],
      ["September headline / core, y/y", "3.7% / 2.6%", "BLS"],
      ["Official October y/y rate", "Not published for most indexes", "BLS FAQ"],
      ["Cleveland Fed October nowcast, m/m", "0.24% headline, 0.21% core", "Cleveland Fed, updated Nov 9"],
      ["December FOMC", "Dec 8-9, with a Summary of Economic Projections", "Federal Reserve calendar"],
      ["November CPI (next print)", "Dec 10, the day after the decision", "BLS schedule"]
    ], "caption": "Sources: [BLS September CPI](" + BLS + "), [BLS shutdown FAQ](" + BLS_FAQ + "), [BLS release schedule](" + BLS_CAL + "), [CNBC](" + CNBC + "), [Cleveland Fed Inflation Nowcasting](" + CLEV + "), [FOMC calendar](" + FOMC + ")." },
    { "type": "h2", "text": "Why there is no official annual rate" },
    { "type": "p", "text": "This is not a delay. It is a missing base month. BLS could not collect October 2025 survey data during the lapse in appropriations, did not issue an October 2025 CPI news release, and will not publish 12-month percent changes for October 2026 \"for indexes where October 2025 data are not available\" ([BLS FAQ, question 16](" + BLS_FAQ + ")). Monthly changes are still published. Unofficial annual estimates will circulate anyway. Bank of America, interpolating the missing baseline, put the annual rates at 3.8% headline and 2.7% core, both a tenth above September, according to [CNBC](" + CNBC + "). The Cleveland Fed's model, which uses its own nowcast in place of the missing October 2025 CPI, was at 3.74% and 2.48% as of Nov. 9 ([Cleveland Fed](" + CLEV + ")). Those are models, not the official print. Treat any year-over-year figure you see tomorrow as an estimate." },
    { "type": "p", "text": "The expected cooling in the monthly headline is mostly about gasoline. In September, gasoline rose 9.1% and accounted for more than half of the 0.6% headline increase ([BLS](" + BLS + ")). CNBC, citing the Energy Information Administration, said pump prices declined by more than 4% in October. That is why a 0.3% headline would not automatically mean the underlying trend improved. Core is the tell." },
    { "type": "h2", "text": "Where December odds and the tape stand tonight" },
    { "type": "p", "text": "The Fed held the federal funds target at 3.75% to 4% on Oct. 28 in a 10-2 vote. Governor Lisa Cook and Cleveland Fed President Beth Hammack wanted a quarter-point hike that day. Chair Kevin Warsh called the stretch to December an \"information-rich interval\" and would not pre-commit ([our Oct. 28 recap](" + RECAP + ")). We have been tracking the odds on our [December Fed odds hub](" + FED + ")." },
    { "type": "p", "text": "As of about 8:50 PM PT Nov. 9, [Polymarket's December 2026 decision market](" + POLY + ") had a 25 basis point hike at a 79.5% mid (79¢ bid, 80¢ ask). A hold was at 18.5%. A 50 basis point hike and any cut were each under 1%. Kalshi's matching market, pulled at the same time, had the 25 basis point hike at 80¢ bid and 81¢ ask, and a hold at 19¢ bid and 20¢ ask. We could not load the live CME FedWatch page at publish. [CNBC](" + CNBC + "), writing Monday afternoon, said FedWatch was pricing a better than 80% chance of a quarter-point hike in December. That is the same neighborhood as the prediction markets, not a precise live reading from the tool." },
    { "type": "p", "text": "Those odds are already up from where they sat after an in-line September PCE in late October. Friday's jobs report is part of the reason: employers added 165,000 jobs in October, almost three times the forecast, and unemployment slipped to 4.1% ([our jobs explainer](" + JOBS + ")). The market is walking into CPI with a hike as the base case, not a close call." },
    { "type": "p", "text": "The stock market just put a large bounce on top of that setup. On Monday, $QQQ closed at 679.35, up 3.5%, and $SPY closed at 752.69, up 2.4%, per TradingView. The 10-year Treasury yield closed at 4.87%. The VIX closed at 19.92, down from 25.64 on Friday. That bounce started from a hard week: $QQQ closed at 647.05 on Thursday, Nov. 5, during the [Nasdaq selloff on AI fears](" + CRASH + "), then 656.10 on Friday. Monday's close recovered a lot of the damage, but it did not take $QQQ back to the Nov. 4 close at 691.95. Friday's 656.10 close is the first line worth quoting if the bounce starts to unwind." },
    { "type": "h2", "text": "If/then: three ways the print can price into year-end" },
    { "type": "p", "text": "This is the last CPI the FOMC will have before it meets Dec. 8-9, a meeting that also includes a Summary of Economic Projections ([Fed calendar](" + FOMC + ")). November's CPI does not arrive until Dec. 10, the day after the decision ([BLS schedule](" + BLS_CAL + ")). So tomorrow's monthly figures, especially core, are what traders will use to reprice December and the path into year-end. None of the paths below is a forecast. They are the reactions that usually follow this kind of print." },
    { "type": "h3", "text": "If core is hot (0.3% or higher)" },
    { "type": "p", "text": "A core reading that matches or exceeds September's 0.3%, especially if the gain is broad rather than one noisy category, would give the two October dissenters more company and make a December hike look closer to locked in. Odds would likely move up from about 80%. The 10-year, already at 4.87%, would be the first place that shows up. For stocks, Monday's bounce would be the obvious thing to fade. On $QQQ, 656.10, Friday's close, becomes the first line; a break of Thursday's 647.05 close would say the rebound failed. $SPY has the same map at Friday's 735.29 and Thursday's 733.00. Rate-sensitive tech would likely feel it first, and a hotter print would travel with the market into the December meeting rather than get forgotten by midweek." },
    { "type": "h3", "text": "If the print is in line (headline 0.3%, core 0.2%)" },
    { "type": "p", "text": "This is the consensus path, and it is not a relief print. It would be slower than September, but it would not reopen a live debate about whether inflation is done. Bank of America economist Stephen Juneau told clients that if the bank's forecast is right, it \"would effectively lock in another 25bp hike, all else equal,\" and that only an \"indisputably soft 0.1%\" monthly print would, in that shop's view, talk the Fed out of December; the bigger risk to the call, he said, is financial markets ([CNBC](" + CNBC + ")). That is one firm's base case, not a guarantee. In this scenario, December odds would likely stay elevated near 80%, the 10-year could hold near 4.87%, and stocks would go back to trading last week's Nasdaq damage, the Nvidia headlines, and year-end positioning rather than a new rates shock. An in-line number can still leave $QQQ heavy above 656.10 without forcing a retest of 647." },
    { "type": "h3", "text": "If core is soft (0.1% or a clear miss)" },
    { "type": "p", "text": "A clearly soft core, especially if goods and services both cool, is the one path that could knock December odds off the high-80s track and give Warsh's \"information-rich interval\" some room. Odds would likely fall from about 80%, and the 10-year could ease from 4.87%. $QQQ would have a better chance of holding Monday's bounce and looking back toward the Nov. 4 area near 692. That is not a green light. One soft month does not erase September's 0.3% core, a 165,000-job payroll print, or a funds rate the committee already declined to cut. It would only reopen the chance of a hold, which is the minority price tonight." },
    { "type": "p", "text": "The Cleveland Fed's nowcast, updated Nov. 9, sits a touch under consensus at 0.24% headline and 0.21% core ([Cleveland Fed](" + CLEV + ")). If the official figures land there, they will probably be read as in line, not as a miss, after rounding." },
    { "type": "h2", "text": "What this means for the next few weeks" },
    { "type": "p", "text": "Year-end will not be priced off one decimal. It will be priced off whether tomorrow's core confirms the hike already in the odds, or whether it gives the 10 voters who held in October a reason to wait. If odds stay high, duration and richly priced tech can stay heavy into the Dec. 8-9 meeting, even if the index bounces around Monday's close. If odds fall, the tape can start to trade a year-end relief stretch, with 656.10 on $QQQ as the line that says the bounce is still intact. Fed speakers, and any further labor-market data, will still get a vote. The November CPI just will not arrive in time to change the December decision." },
    { "type": "callout", "text": "Not financial advice. Market reactions change through the session, and nothing here guarantees any outcome for rates or stocks." },
    { "type": "h2", "text": "FAQ" },
    { "type": "h3", "text": "When is the October CPI report released?" },
    { "type": "p", "text": "Tuesday, Nov. 10, 2026, at 8:30 AM ET, which is 5:30 AM PT. Futures, Treasuries, and the dollar usually react within seconds of the release ([BLS schedule](" + BLS_CAL + "))." },
    { "type": "h3", "text": "What is the October CPI forecast?" },
    { "type": "p", "text": "The Dow Jones consensus is a 0.3% monthly increase in headline CPI and a 0.2% increase in core CPI, which excludes food and energy ([CNBC](" + CNBC + ")). The Cleveland Fed's Nov. 9 nowcast was slightly softer, at 0.24% and 0.21%." },
    { "type": "h3", "text": "Why is there no year-over-year CPI this month?" },
    { "type": "p", "text": "BLS could not collect most October 2025 prices during last year's government shutdown and never published an October 2025 index for most series. Without that base month, it will not publish 12-month percent changes for October 2026 where the October 2025 data are missing ([BLS FAQ](" + BLS_FAQ + ")). Monthly changes are still coming. Any annual rate you see will be an unofficial estimate." },
    { "type": "h3", "text": "Will the Fed raise rates in December 2026?" },
    { "type": "p", "text": "Markets lean yes, but it is not a done decision. As of about 8:50 PM PT Nov. 9, Polymarket priced a 25 basis point December hike at 79.5% and Kalshi at about 80 to 81 cents. The Fed held at 3.75% to 4% on Oct. 28 in a 10-2 vote. The committee meets Dec. 8-9. Market prices are not forecasts. We track the odds on our [December Fed odds hub](" + FED + ")." },
    { "type": "h3", "text": "How could this CPI report affect stocks into year-end?" },
    { "type": "p", "text": "A hot core would likely lift December hike odds and put pressure back on Monday's bounce, with $QQQ's Friday close at 656.10 as the first line. An in-line 0.2% core would probably leave odds near 80% and send the tape back to Nvidia and year-end positioning. A clearly soft core is the path that could pull odds down and give the bounce more room. None of those reactions is guaranteed." },
    { "type": "p", "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst), like the [CosAnalyst Facebook Page](https://www.facebook.com/profile.php?id=61595911140925) for plain-English market notes, and join our Telegram at [@CosAnalystSignals](https://t.me/CosAnalystSignals)." },
    { "type": "p", "text": "**Your call:** If core comes in at the 0.2% consensus, is a December hike already locked in, or does the Fed still have room to wait? Pick a side in the comments." }
  ]
};

export default article;
