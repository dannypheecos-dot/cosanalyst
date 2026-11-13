import type { Article } from "@/content/types";

const CNBC_YIELDS =
  "https://www.cnbc.com/2026/11/13/treasury-yields-fed-rates.html";
const CNBC_THU =
  "https://www.cnbc.com/2026/11/12/us-treasurys-bonds-yields.html";
const CNBC_PPI =
  "https://www.cnbc.com/2026/11/13/ppi-inflation-report-october-2026.html";
const BLS_PPI = "https://www.bls.gov/ppi/";
const HAVER =
  "https://www.haver.com/articles/producer-prices-in-october-better-than-expected-but-still-firmer-than-desired";
const REUTERS_CPI =
  "https://www.reuters.com/5f374b32b07b/world/us/us-consumer-prices-rise-above-expectations-october-2026-11-10/";
const REUTERS_FED =
  "https://www.investing.com/news/economy-news/us-treasury-chief-says-fed-should-not-hike-rates-over-energy-shock-tied-to-iran-war-5025640";
const INFOMAX = "https://en.infomaxai.com/news/articleView.html?idxno=148358";
const TBONDS =
  "https://treasurybonds.com/news/2026-11-12-bond-market-wrap-up-treasuries-slide-after-the-veterans-day-break-10-year-hits-510/";
const FREDDIE = "https://www.freddiemac.com/pmms";
const USNEWS =
  "https://money.usnews.com/loans/mortgages/articles/mortgage-rates-today-november-13-2026";
const BANKRATE = "https://www.bankrate.com/mortgages/mortgage-rates/";
const FED_HUB =
  "/articles/will-the-fed-raise-rates-in-december-2026-hike-odds-pce-live-updates/";
const ALT =
  "CosAnalyst cream card: The 10-year is back above 5%. 5.17% intraday high, up 27 basis points this week.";

const article: Article = {
  "slug": "why-is-the-10-year-treasury-yield-above-5-percent-stocks-mortgage-rates-2026-11-13",
  "title": "Why Is the 10-Year Treasury Yield Above 5%? What It Means for Stocks and Mortgage Rates",
  "titleTag": "10-Year Treasury Yield Today: Why It's Above 5%",
  "dek": "The 10-year Treasury yield hit 5.17% on Friday and was near 5.13% as of about 9:55 AM PT, up roughly 27 basis points since last Friday. Hot inflation data, a market that now prices a December Fed hike as a lock, an oil bounce, and heavy Treasury supply all pushed it there. Here is why it matters for your mortgage quote and for tech stocks, and the levels to watch.",
  "metaDescription": "Why the 10-year Treasury yield is above 5% today: PPI at 6.5%, a fully priced December Fed hike, oil and supply. What it means for mortgage rates and stocks, with levels to watch.",
  "date": "2026-11-13",
  "section": "macro",
  "also": ["markets", "equities"],
  "kicker": "10-Year Yield",
  "asOf": "As of about 9:55 AM PT Nov 13, 2026",
  "displayTime": "Nov 13, 2026 · 9:55 AM PT",
  "publishedAt": "2026-11-13T09:58:00-08:00",
  "ogImage": "/og/why-is-the-10-year-treasury-yield-above-5-percent-stocks-mortgage-rates-2026-11-13-og.png",
  "ogAlt": ALT,
  "body": [
    { "type": "figure", "src": "/og/why-is-the-10-year-treasury-yield-above-5-percent-stocks-mortgage-rates-2026-11-13.png", "alt": ALT, "caption": "Sources: TradingView (TVC:US10Y) daily bars and live quote, CNBC, as of about 9:55 AM PT Nov 13, 2026. Yields move all day." },
    { "type": "lede", "text": "Short answer: the 10-year Treasury yield is above 5% because inflation keeps running hot, the bond market now treats a December Fed rate hike as a sure thing, oil jumped on Thursday, and the government is selling a lot of debt into a nervous market. It touched 5.17% this morning and was near 5.13% as of about 9:55 AM PT, up about 27 basis points from last Friday's close of 4.86%, per TradingView." },
    { "type": "p", "text": "That number is not just a bond-desk story. The 10-year is the rate that mortgage lenders, auto lenders, and stock valuation models all lean on. When it moves 27 basis points in a week, your mortgage quote, your car loan, and the price of growth stocks all feel it." },
    { "type": "stats", "items": [
      { "label": "10-year yield", "value": "5.13%", "note": "High 5.17% today; 4.86% last Friday (TradingView)" },
      { "label": "2-year yield", "value": "4.85%", "note": "Roughly flat today after +15 bps Thursday (CNBC)" },
      { "label": "October PPI", "value": "6.5% y/y", "note": "Highest since Nov 2022 (BLS, CNBC)" },
      { "label": "December hike odds", "value": "100%", "note": "86% for 25 bps, about 14% for 50 bps (CME FedWatch via CNBC)" }
    ] },
    { "type": "h2", "text": "What happened to Treasury yields this week" },
    { "type": "table", "columns": ["Day", "10-year close", "What moved it"], "rows": [
      ["Fri Nov 6", "4.86%", "Starting point for the week"],
      ["Mon Nov 9", "4.88%", "Quiet before the inflation data"],
      ["Tue Nov 10", "5.00%", "October CPI rose 0.4%, above expectations; core up 0.3% for a third straight month"],
      ["Wed Nov 11", "Closed", "Veterans Day, bond market shut"],
      ["Thu Nov 12", "5.13%", "Oil jumped on Iran comments, weak-ish 30-year auction, 2-year up about 15 bps"],
      ["Fri Nov 13", "about 5.13% (live)", "PPI 0.3% m/m vs 0.4% expected, but 6.5% y/y; intraday high 5.17%"]
    ], "caption": "Closes are TradingView TVC:US10Y daily bars; Friday is a live read as of about 9:55 AM PT Nov 13, 2026. Day notes: Reuters (CPI), CNBC, Yonhap Infomax and TreasuryBonds.com (Thursday), BLS and CNBC (PPI)." },
    { "type": "h2", "text": "Why is the 10-year yield going up? Four reasons" },
    { "type": "h3", "text": "1. Inflation is not cooling, and it is spreading" },
    { "type": "p", "text": "Tuesday's October consumer price index rose 0.4%, more than expected, and core prices rose 0.3% for a third straight month ([Reuters](" + REUTERS_CPI + ")). Friday's producer price index rose 0.3% in October, a touch below the 0.4% forecast, but it is up 6.5% over 12 months, the biggest annual gain since November 2022 ([BLS](" + BLS_PPI + "), [CNBC](" + CNBC_PPI + ")). Core PPI, which strips out food and energy, is up 5.0% from a year ago, matching the fastest pace in years, and goods prices are up 10.2% over 12 months ([Haver Analytics](" + HAVER + "), [CNBC](" + CNBC_PPI + "))." },
    { "type": "p", "text": "The part that worries the Fed most is that this is no longer only about oil. On CNBC Friday morning, the Chicago Fed president said inflation is broad-based, including services and medical care that do not track oil prices. \"Are we on a path back to 2%? My feeling right now is we are not,\" he said ([Reuters via Investing.com](" + REUTERS_FED + "))." },
    { "type": "h3", "text": "2. The market now treats a December hike as locked in" },
    { "type": "p", "text": "Traders price 100% odds of a rate hike at the Fed's Dec. 8-9 meeting, with about 86% on a quarter point and about 14% on a half point, according to CME FedWatch as cited by [CNBC](" + CNBC_YIELDS + "). Goldman Sachs added another hike to its forecast on Wednesday ([CNBC](" + CNBC_THU + "))." },
    { "type": "p", "text": "Not everyone in Washington agrees. The Treasury secretary told CNBC on Friday that this is an \"energy supply shock\" and that hiking \"too much\" into it would be a mistake ([Reuters via Investing.com](" + REUTERS_FED + ")). The bond market is siding with the Fed for now. For the full odds picture, see our [December Fed odds live page](" + FED_HUB + ")." },
    { "type": "h3", "text": "3. Oil bounced, and it feeds straight into inflation fears" },
    { "type": "p", "text": "On Thursday the president posted that the U.S. does not \"need a deal with Iran,\" and oil jumped. WTI crude closed up more than 2% at $88.74 and Brent rose more than 3% to $95.82 ([CNBC](" + CNBC_THU + ")). That is the day the 10-year jumped more than 13 basis points. Oil was calmer Friday, with WTI near $88.55 as of about 9:55 AM PT (TradingView), but the damage to yields stuck." },
    { "type": "h3", "text": "4. A lot of new debt, and buyers asked for more yield" },
    { "type": "p", "text": "Thursday's $25 billion 30-year bond auction cleared at 5.441%, slightly above where it traded before the sale, with a bid-to-cover of 2.36 against a 2.43 average ([Yonhap Infomax](" + INFOMAX + "), [TreasuryBonds.com](" + TBONDS + ")). TreasuryBonds.com also reported a $404.0 billion October deficit, above the $300 billion consensus. When buyers are a little thinner and supply keeps coming, they demand a higher yield to take it." },
    { "type": "p", "text": "One twist worth knowing: the Nvidia news did not push yields up at first. When bond trading reopened Thursday morning, the 10-year briefly dropped toward 4.88% as investors grabbed safety, then reversed as the oil story took over ([Yonhap Infomax](" + INFOMAX + ")). Today's yield move is a rates-and-inflation story, not an Nvidia story." },
    { "type": "h2", "text": "What a 5% 10-year means for mortgage rates" },
    { "type": "p", "text": "Mortgage rates do not follow the 10-year one-for-one, but they move in the same direction, usually within a day or two. That shows up in today's daily quotes. Zillow data via [U.S. News](" + USNEWS + ") put the average 30-year fixed purchase rate at 7.393% on Friday, up from 7.287% Thursday. [Bankrate](" + BANKRATE + ")'s national average was 7.19% as of 6:30 AM ET Friday." },
    { "type": "p", "text": "Freddie Mac's weekly survey says 7.11% for the week ended Nov. 12, down from 7.18% ([Freddie Mac](" + FREDDIE + ")). Do not let that headline fool you. Freddie's number averages applications from the prior Thursday through Wednesday, so it mostly missed Thursday's spike. If the 10-year stays above 5%, expect next week's survey to look worse, not better." },
    { "type": "p", "text": "For a sense of scale, Freddie Mac said the 30-year averaged 6.24% a year ago. That gap is the difference between a house that pencils out and one that does not for a lot of buyers." },
    { "type": "h2", "text": "What it means for stocks today" },
    { "type": "p", "text": "Higher yields hit the most expensive, longest-duration stocks first, because future profits are worth less today when the risk-free rate is higher. That is what the tape shows. As of about 9:55 AM PT, per TradingView:" },
    { "type": "table", "columns": ["Market", "Move", "Read"], "rows": [
      ["SPY (S&P 500)", "-0.67%", "Broad market down, but not panicking"],
      ["QQQ (Nasdaq 100)", "-1.58%", "Growth and tech hit hardest"],
      ["SMH (chip stocks)", "-3.90%", "Rates plus the chip selloff"],
      ["DIA (Dow)", "-0.06%", "Value-heavy, barely moving"],
      ["IWM (small caps)", "-0.58%", "Borrowing-cost sensitive, modestly lower"],
      ["XLP (consumer staples)", "+1.33%", "Money rotating to defensives"],
      ["XLU (utilities)", "+0.56%", "Defensive bid"],
      ["XHB (homebuilders)", "+0.79%", "Up despite higher rates, likely helped by the defensive rotation (est.)"],
      ["VIX", "19.67, +5.2%", "Fear rising, still below 20"],
      ["Bitcoin", "about $68,930, -3.4%", "Below $70,000 for the first time in nearly three months (Yahoo Finance)"]
    ], "caption": "Source: TradingView live quotes as of about 9:55 AM PT Nov 13, 2026; bitcoin context from Yahoo Finance. Intraday levels move." },
    { "type": "p", "text": "Yahoo Finance's live coverage tied the selloff to the chip rout, the hot annual PPI number, and the bond selloff, with the 10-year hitting its highest level since October. The dollar index was near 103.40, close to a 19-month high, which adds pressure on multinationals and on bitcoin." },
    { "type": "h2", "text": "What to watch: if/then levels" },
    { "type": "list", "items": [
      "If the 10-year closes above today's 5.17% high, the next reference is the early October peak near 5.37% (TradingView daily bars). That would likely keep pressure on QQQ and on mortgage quotes.",
      "If it falls back under 5.00%, Tuesday's close, the rate scare is fading and growth stocks get room to breathe.",
      "If the 2-year (now about 4.85%) climbs faster than the 10-year, the market is pricing a more aggressive Fed. Watch the 50 basis point odds on CME FedWatch; above roughly 14% means traders are leaning harder.",
      "If WTI crude pushes back above Thursday's $88.74 close and toward $90, inflation fears and yields likely stay elevated.",
      "If mortgage quotes from Zillow and Bankrate keep rising while Freddie Mac's weekly number lags, trust the daily quotes for a lock decision this week.",
      "If defensives like XLP and XLU keep leading while QQQ lags, the market is treating 5% as a real valuation problem, not a one-day blip."
    ] },
    { "type": "h2", "text": "FAQ" },
    { "type": "h3", "text": "What is the 10-year Treasury yield today?" },
    { "type": "p", "text": "About 5.13% as of about 9:55 AM PT Friday, Nov. 13, 2026, after an intraday high of 5.17%, per TradingView and CNBC. It closed last Friday at 4.86%." },
    { "type": "h3", "text": "Why are Treasury yields rising?" },
    { "type": "p", "text": "Hot inflation data (CPI up 0.4% in October, PPI up 6.5% from a year ago), a December Fed hike priced at 100%, an oil jump on Thursday, and heavy Treasury supply with a slightly soft 30-year auction." },
    { "type": "h3", "text": "Do higher Treasury yields mean higher mortgage rates?" },
    { "type": "p", "text": "Usually, yes, with a short lag. Daily Zillow data showed the 30-year fixed at 7.393% Friday, up from 7.287% Thursday. Freddie Mac's weekly 7.11% mostly predates Thursday's jump." },
    { "type": "h3", "text": "Why do rising yields hurt tech stocks?" },
    { "type": "p", "text": "Tech valuations lean on profits far in the future. A higher risk-free rate makes those future profits worth less today, so growth stocks usually fall more than value stocks when yields jump. Friday's tape fit that pattern, with QQQ down more than the Dow." },
    { "type": "h3", "text": "Will the Fed raise rates in December?" },
    { "type": "p", "text": "Markets price a hike as a certainty for Dec. 8-9, with about 86% odds on a quarter point and about 14% on a half point, per CME FedWatch via CNBC. Odds can change with new data. Our [live Fed odds page](" + FED_HUB + ") tracks it." },
    { "type": "callout", "text": "Not financial advice. Yields, quotes, and odds are live snapshots as of about 9:55 AM PT Nov 13, 2026 and can change through the close. Nothing here guarantees any market outcome." },
    { "type": "p", "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst), like the [CosAnalyst Facebook Page](https://www.facebook.com/profile.php?id=61595911140925) for plain-English market notes, and join our Telegram at [@CosAnalystSignals](https://t.me/CosAnalystSignals)." },
    { "type": "p", "text": "**Your call:** Is 5% on the 10-year the top of this rate scare, or the floor for a run back toward October's 5.37%? Pick a side in the comments." }
  ]
};

export default article;
