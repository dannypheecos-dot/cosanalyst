import type { Article } from "@/content/types";

const REU = "https://www.reuters.com/markets/us/nasdaq-set-correction-investors-reassess-ai-spending-boom-2026-11-05/";
const NPR = "https://www.npr.org/2026/11/05/nx-s1-6031987/stock-markets-ai-midterm-elections";
const CNBC = "https://www.cnbc.com/2026/11/06/jobs-report-october-2026.html";
const CD = "https://www.coindesk.com/daybook-us/2026/11/06/over-usd1-billion-in-bullish-bets-liquidated-while-etf-flows-suggest-no-help-in-spot-market";
const PM = "https://polymarket.com/event/fed-decision-in-december";
const CORR = "/articles/nasdaq-100-correction-apple-palantir-earnings-stock-market-close-recap-2026-11-02/";
const FED = "/articles/will-the-fed-raise-rates-in-december-2026-hike-odds-pce-live-updates/";
const SWEEP = "/articles/is-a-democratic-sweep-good-for-trump-what-it-means-for-stocks-2026-11-04/";
const FUT = "/articles/why-are-stock-futures-falling-tonight-democrats-sweep-midterms-nasdaq-2026-11-03/";
const ALT = "CosAnalyst cream card: Nasdaq -5.5%. AI fears hit. Chips bounce.";

const article: Article = {
  "slug": "why-did-the-stock-market-crash-nasdaq-ai-selloff-nvidia-2026-11-06",
  "title": "Why Did the Stock Market Crash? Nasdaq Falls 5.5% on AI Fears After Midterms",
  "titleTag": "Why Did the Stock Market Crash? Nasdaq -5.5% on AI Fears",
  "dek": "The Nasdaq Composite plunged 5.52% on Thursday, wiping more than $2 trillion, as traders priced a Democratic midterm sweep as tighter AI rules and a harder road for data-center buildouts.",
  "date": "2026-11-06",
  "section": "markets",
  "also": ["equities"],
  "kicker": "Morning Recap",
  "asOf": "As of about 7:25 AM PT Nov 6, 2026",
  "displayTime": "Nov 6, 2026 · 7:25 AM PT",
  "publishedAt": "2026-11-06T07:25:00-08:00",
  "ogImage": "/og/why-did-the-stock-market-crash-nasdaq-ai-selloff-nvidia-2026-11-06-og.png",
  "ogAlt": ALT,
  "body": [
    { "type": "figure", "src": "/og/why-did-the-stock-market-crash-nasdaq-ai-selloff-nvidia-2026-11-06.png", "alt": ALT, "caption": "Sources: Yahoo Finance, NPR, CNBC, Polymarket, CoinDesk. Thursday closes Nov. 5; Friday intraday as of about 7:25 AM PT, Nov. 6, 2026." },
    { "type": "lede", "text": "Wall Street woke up Friday still measuring the hole. On Thursday the Nasdaq Composite closed at 24,315, down 5.52%, its worst session since April 2025. The S&P 500 fell 4.36% to 7,353.73. The Dow Jones Industrial Average dropped 3.44% to 51,523.06. More than $2 trillion in market value was wiped as traders pivoted from midterm relief to AI regulation and data-center fears ([NPR](" + NPR + "), [Reuters](" + REU + "))." },
    { "type": "p", "text": "Friday morning the tape is trying to repair it. As of about 7:25 AM PT, the Nasdaq was near 24,748 (+1.8%), the S&P near 7,431 (+1.0%), and the Dow roughly flat near 51,585. Nvidia and AMD led a chip bounce. October payrolls also beat: +165,000 jobs. None of that erases Thursday. It reframes the session." },
    { "type": "h2", "text": "What happened Thursday: indexes, chips, VIX" },
    { "type": "p", "text": "The damage was concentrated where AI spending lives:" },
    { "type": "table", "columns": ["Name", "Nov 5 close", "Day move", "Note"], "rows": [
      ["Nasdaq Composite", "24,315", "-5.52%", "Worst day since Apr 2025"],
      ["S&P 500", "7,353.73", "-4.36%", "Broke under 7,400"],
      ["Dow Jones", "51,523.06", "-3.44%", "Gave back Wed rally"],
      ["QQQ", "647.05", "-6.5%", "Nasdaq-100 proxy"],
      ["Nvidia (NVDA)", "$181.60", "-9.26%", "AI bellwether"],
      ["AMD", "$404.40", "-17.26%", "Worst of the megachips"],
      ["VIX", "28.18", "+69.7%", "Fear spike"]
    ], "caption": "Source: Yahoo Finance daily closes, Nov. 5, 2026. QQQ percent vs Nov. 4 close 691.95." },
    { "type": "p", "text": "That tape sits on top of an already bruised tech complex. The Nasdaq 100 had already entered correction territory earlier in the week ([our Nov. 2 close recap](" + CORR + ")). Thursday turned a grind into a flush." },
    { "type": "h2", "text": "Why: Dem sweep, AI rules, data-center pushback" },
    { "type": "p", "text": "Wednesday's midterm rally treated the Democratic sweep as clarity. Thursday treated it as a policy risk. NPR reported that investors priced a Democratic Congress, and Democratic wins in state races, as a crackdown on AI and a revolt against data-center projects that voters blame for water and power strain ([NPR](" + NPR + ")). Our own election-night framing covered the political map ([Dem-sweep stock take](" + SWEEP + "); [futures selloff night of](" + FUT + "))." },
    { "type": "p", "text": "The trade logic is simple even if the politics are messy. Hyperscalers need more data centers to keep training and serving models. If Congress and governors slow permits, power deals, or AI rules, the spend cycle that has carried Nvidia, AMD, and the AI builders gets a haircut. That is the fear that hit the tape on Thursday, not a single company guide." },
    { "type": "h2", "text": "Friday bounce, jobs beat, Fed hike odds" },
    { "type": "p", "text": "As of about 7:25 AM PT Friday, the rebound was led by the same names that got hit:" },
    { "type": "list", "items": [
      "**Nasdaq** near 24,748, about +1.8% from Thursday's close.",
      "**S&P 500** near 7,431, about +1.0%.",
      "**Dow** near 51,585, roughly flat.",
      "**VIX** near 24.1, down from 28.18.",
      "**Nvidia** near $191, about +5.4%.",
      "**AMD** near $446, about +10%.",
      "**QQQ** near 661, about +2.1%."
    ] },
    { "type": "p", "text": "The labor print helped the risk tone. The U.S. added 165,000 jobs in October, well above the roughly 65,000 expected, and unemployment printed 4.1% ([CNBC](" + CNBC + ")). A hot-enough jobs number usually leans hawkish for the Fed, and the rates market already was. On Polymarket, as of about 7:25 AM PT, a December 25 basis-point hike was near 78%, with no-change near 21% ([Polymarket Fed Decision in December](" + PM + "); [our live Dec odds hub](" + FED + "))." },
    { "type": "h2", "text": "Bitcoin near $75,000 and the liquidation wave" },
    { "type": "p", "text": "Crypto did not get a free pass. Bitcoin traded around $75,600 as of about 7:25 AM PT after dipping under $75,000 overnight (Yahoo Finance BTC-USD). CoinDesk flagged more than $1 billion in bullish crypto bets liquidated across the complex as the AI-equity rout spilled into risk assets ([CoinDesk](" + CD + ")). When Nasdaq chips gap down that hard, bitcoin often follows the risk channel even when the crypto news is thin." },
    { "type": "h2", "text": "If/then for the session" },
    { "type": "list", "items": [
      "If Nvidia and AMD hold the morning bounce into the 1:00 PM PT close, Thursday looks more like a flush than the start of a multi-day AI de-rating.",
      "If fresh regulation or data-center headlines hit midday, the Friday bounce can reverse fast; the VIX already proved it can reprice fear in one session.",
      "If December hike odds on Polymarket stay near 78% after the jobs beat, rates stay a second headwind even if AI fear cools.",
      "If bitcoin loses $75,000 again with another liquidation wave, treat crypto as a risk-off tell, not a separate story."
    ] },
    { "type": "callout", "text": "Not financial advice. Intraday numbers move and can change by the close. Nothing here guarantees any outcome." },
    { "type": "p", "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst) for the close, and join our Telegram at [@CosAnalystSignals](https://t.me/CosAnalystSignals) for market notes through the day." },
    { "type": "p", "text": "**Your call:** Was Thursday the start of a real AI-regulation de-rating that Friday cannot fix, or a one-day midterm hangover that smart money already starts buying? Pick a side in the comments." }
  ]
};

export default article;
