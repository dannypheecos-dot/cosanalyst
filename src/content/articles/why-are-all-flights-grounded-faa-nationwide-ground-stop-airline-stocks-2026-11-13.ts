import type { Article } from "@/content/types";

const AP = "https://apnews.com/article/flights-halted-airports-faa-f81b0904331dafad6133f291e5f531a8";
const WAPO = "https://www.washingtonpost.com/transportation/2026/11/13/faa-grounds-flights-all-us-airports-citing-communications-issue/";
const NPR = "https://www.npr.org/2026/11/13/nx-s1-6040403/faa-nationwide-groundstop-airports";
const USAT = "https://www.usatoday.com/story/news/nation/2026/11/13/faa-orders-nationwide-groundstop-at-us-airports-citing-safety/92765499007/";
const BBC = "https://www.bbc.com/news/live/c6z9dwn12037t";
const DUFFY = "https://x.com/SecDuffy/status/2121351591106072679";
const FAA_TELECOM = "https://x.com/financialjuice/status/2121363554041581901";
const FAA_ACCOUNTED = "https://x.com/financialjuice/status/2121363483480736148";
const DHS = "https://x.com/financialjuice/status/2121364354905841749";
const NWS = "https://x.com/financialjuice/status/2121362903572070638";
const CNN_CYBER = "https://x.com/WatcherGuru/status/2121359635131126082";
const FLIGHTAWARE = "https://x.com/DeItaone/status/2121356471220785413";
const AIRBORNE = "https://x.com/Cointelegraph/status/2121363394125058201";
const CNBC_2023 = "https://www.cnbc.com/2023/01/11/faa-orders-airlines-to-pause-departures-until-9-am-et-after-system-outage.html";
const WRTV_2023 = "https://www.wrtv.com/news/airline-stocks-rise-on-wall-street-despite-faa-outage-grounding-us-flights/";
const CNBC_DELTA = "https://www.cnbc.com/2024/07/31/delta-ceo-crowdstrike-microsoft-outage-cost-the-airline-500-million.html";
const MSFT = "/articles/why-didnt-microsoft-stock-drop-after-todays-outlook-outage-2026-11-12/";
const ALT =
  "CosAnalyst cream card: Every U.S. departure is grounded. About 7,000 flights hit, JETS down 1.2% after hours.";

const article: Article = {
  "slug": "why-are-all-flights-grounded-faa-nationwide-ground-stop-airline-stocks-2026-11-13",
  "title": "Why Are All Flights Grounded? The FAA Nationwide Ground Stop, Explained, and What It Means for Airline Stocks",
  "titleTag": "Why Are All US Flights Grounded? FAA Ground Stop Explained",
  "dek": "The FAA halted every departure from U.S. airports just before 1 PM PT Friday after a communications failure hit all of its regional air traffic control centers. The FAA calls it a temporary telecom outage, CNN reports it does not appear to be a cyberattack, and nearly 7,000 flights were delayed or canceled. Airline stocks slipped after hours. Here is what we know, the 2023 precedent, and what to watch into Monday's open.",
  "metaDescription": "Why are all US flights grounded? The FAA issued a nationwide ground stop Nov 13 after a telecom outage hit all air traffic control centers. Is it a cyberattack, when flights resume, and what it means for UAL, DAL, AAL and JETS.",
  "date": "2026-11-13",
  "section": "markets",
  "also": ["equities"],
  "kicker": "FAA Ground Stop",
  "asOf": "As of about 2:10 PM PT Nov 13, 2026",
  "displayTime": "Nov 13, 2026 · 2:10 PM PT",
  "publishedAt": "2026-11-13T14:13:00-08:00",
  "ogImage": "/og/why-are-all-flights-grounded-faa-nationwide-ground-stop-airline-stocks-2026-11-13-og.png",
  "ogAlt": ALT,
  "body": [
    { "type": "figure", "src": "/og/why-are-all-flights-grounded-faa-nationwide-ground-stop-airline-stocks-2026-11-13.png", "alt": ALT, "caption": "Sources: FAA and Transportation Secretary statements, FlightAware via Bloomberg headlines, TradingView after-hours quotes as of about 2:10 PM PT Nov 13, 2026." },
    { "type": "lede", "text": "Short answer: all U.S. flights are grounded because the FAA lost communications at its Air Route Traffic Control Centers, the 22 regional centers that guide planes between airports. Transportation Secretary Sean Duffy said the nationwide ground stop followed \"a communication issue impacting all Air Route Traffic Control Centers\" ([Duffy on X](" + DUFFY + "), [AP](" + AP + ")). The FAA later called it a temporary telecom outage and said all flights were halted as a precaution ([FAA via FinancialJuice](" + FAA_TELECOM + "))." },
    { "type": "p", "text": "The stop hit just before 1 PM PT, about 3:54 PM ET, six minutes before the stock market closed. That means Wall Street has not had a full session with this news in it yet. The first real test for airline stocks is Monday's open." },
    { "type": "stats", "items": [
      { "label": "Flights delayed or canceled", "value": "~7,000", "note": "FlightAware, per Bloomberg headline (DeItaone)" },
      { "label": "Planes in the air", "value": "~3,100", "note": "Reportedly en route to U.S. airports when the stop hit (Cointelegraph, flight trackers)" },
      { "label": "JETS (airline ETF)", "value": "-1.2%", "note": "After hours, $28.48 vs $28.84 close (TradingView)" },
      { "label": "Nationwide stops since 9/11", "value": "2", "note": "This one and January 2023 (Washington Post)" }
    ] },
    { "type": "h2", "text": "What we know so far" },
    { "type": "list", "items": [
      "The FAA ordered all departing aircraft to stay on the ground \"due to extraordinary circumstances and for reasons of safety\" ([AP](" + AP + "), [USA Today](" + USAT + ")).",
      "Planes already in the air were not ordered to land immediately. International flights heading to the U.S. are being handled case by case ([USA Today](" + USAT + ")).",
      "The FAA said every flight is accounted for ([FAA via FinancialJuice](" + FAA_ACCOUNTED + ")).",
      "Major airports including Atlanta, Reagan National, Miami, BWI and Houston Bush confirmed the stop ([BBC](" + BBC + ")).",
      "The National Weather Service separately reported nationwide internet and communication disruptions around the same time ([NWS via FinancialJuice](" + NWS + ")). Officials have not said whether the two are linked.",
      "As of about 2:10 PM PT, the FAA had not given a time for the stop to be lifted."
    ] },
    { "type": "h2", "text": "Is it a cyberattack?" },
    { "type": "p", "text": "Not according to early reporting. CNN reported the ground stop does not appear to be a cyberattack ([via Watcher.Guru](" + CNN_CYBER + ")), and the FAA described a temporary telecom outage. Homeland Security Secretary Markwayne Mullin said there is no cause for public alarm and that the president has been briefed ([via FinancialJuice](" + DHS + ")). He also said officials are not excluding any options at this stage, so treat \"not a cyberattack\" as preliminary until the FAA finishes its review." },
    { "type": "p", "text": "It lands at the end of a rough week for critical systems. Microsoft's 365 and Outlook outage stretched across two days ([our Microsoft outage page](" + MSFT + ")), and Google searches for \"is there a cyber attack going on right now\" were trending in the U.S. on Friday afternoon (Google Trends)." },
    { "type": "h2", "text": "What happened last time: the January 2023 precedent" },
    { "type": "p", "text": "The closest comparison is January 11, 2023, when the FAA's NOTAM pilot-alert system failed and the agency paused all domestic departures until about 9 AM ET. More than 9,500 U.S. flights were delayed and more than 1,300 canceled that day ([CNBC](" + CNBC_2023 + "))." },
    { "type": "p", "text": "The stock reaction is the part traders should remember. Airline shares dipped in premarket, then rose during the session, with United up 3.9% that afternoon ([WRTV/AP](" + WRTV_2023 + ")). A one-day federal outage that gets fixed fast has historically been a headline, not an earnings event." },
    { "type": "p", "text": "The counterexample is a long tail. Delta's July 2024 meltdown after the CrowdStrike software failure ran for days, forced more than 5,000 cancellations, and cost the airline about $500 million ([CNBC](" + CNBC_DELTA + ")). Duration is what turns a scary headline into a real cost." },
    { "type": "h2", "text": "Airline stocks after hours" },
    { "type": "table", "columns": ["Ticker", "Friday close", "After hours", "Move after hours"], "rows": [
      ["JETS (airline ETF)", "$28.84 (-0.7%)", "$28.48", "-1.2%"],
      ["UAL (United)", "$109.31 (-1.7%)", "$107.65", "-1.5%"],
      ["DAL (Delta)", "$86.25 (-0.3%)", "$84.90", "-1.6%"],
      ["AAL (American)", "$13.17 (-1.1%)", "$12.95", "-1.7%"],
      ["LUV (Southwest)", "$44.94 (-0.6%)", "$44.70", "-0.5%"],
      ["JBLU (JetBlue)", "$3.76 (-1.3%)", "$3.64", "-3.2%"],
      ["SPY (S&P 500)", "$754.37 (-0.4%)", "$751.85", "-0.3%"]
    ], "caption": "Source: TradingView, after-hours quotes as of about 2:10 PM PT Nov 13, 2026. Thin after-hours volume; levels move." },
    { "type": "p", "text": "So far that is an orderly move, roughly 1.5% for the big carriers. The weekend matters more than tonight. Friday afternoon is one of the busiest travel windows of the week, so every hour the stop runs means more rebookings, crew timeouts and hotel bills that land on the airlines, not the FAA." },
    { "type": "h2", "text": "What to watch: if/then" },
    { "type": "list", "items": [
      "If the FAA lifts the stop tonight and gives a clear technical cause, the 2023 playbook says airline stocks can recover Monday. Watch whether JETS reclaims Friday's $28.84 close.",
      "If the stop drags into Saturday, expect cancellations to snowball the way they did for Delta in 2024. That is when JETS breaking under its after-hours $28.48 starts to matter.",
      "If officials link the FAA and Weather Service outages to one telecom provider, that provider's stock and network-security names become the story on Monday.",
      "If the cause turns out to be malicious, the move is no longer about airlines. Expect a risk-off open and a bid for cybersecurity stocks.",
      "If JetBlue (JBLU) keeps underperforming, it is the weakest balance sheet in the group and the most sensitive to a lost weekend."
    ] },
    { "type": "h2", "text": "FAQ" },
    { "type": "h3", "text": "Why are all flights grounded today?" },
    { "type": "p", "text": "The FAA issued a nationwide ground stop on Friday, Nov. 13, 2026, after a communications failure affected all of its Air Route Traffic Control Centers. The FAA called it a temporary telecom outage." },
    { "type": "h3", "text": "When will flights resume?" },
    { "type": "p", "text": "As of about 2:10 PM PT, the FAA had not given a time. Check your airline's app directly. In January 2023, the nationwide stop lasted about 90 minutes, but delays rippled through the rest of the day." },
    { "type": "h3", "text": "Is the FAA ground stop a cyberattack?" },
    { "type": "p", "text": "Early reporting says no. CNN reported it does not appear to be a cyberattack, and the FAA described a telecom outage. Homeland Security said officials are not ruling anything out yet." },
    { "type": "h3", "text": "How many nationwide ground stops have there been?" },
    { "type": "p", "text": "This is only the second nationwide ground stop since Sept. 11, 2001, according to the Washington Post. The other was the January 2023 NOTAM outage." },
    { "type": "h3", "text": "What does this mean for airline stocks?" },
    { "type": "p", "text": "Airline stocks were down about 1.5% to 3% after hours Friday. History says a short outage is a headline, while a multi-day disruption can cost an airline hundreds of millions. How long it lasts is the whole trade." },
    { "type": "callout", "text": "Not financial advice. Flight counts, statements and after-hours quotes are snapshots as of about 2:10 PM PT Nov 13, 2026 and can change quickly. Nothing here guarantees any market outcome." },
    { "type": "p", "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst), like the [CosAnalyst Facebook Page](https://www.facebook.com/profile.php?id=61595911140925) for plain-English market notes, and join our Telegram at [@CosAnalystSignals](https://t.me/CosAnalystSignals)." },
    { "type": "p", "text": "**Your call:** Is this a one-night headline that airline stocks shrug off by Monday like January 2023, or the start of a Delta-2024-style weekend meltdown? Pick a side in the comments." }
  ]
};

export default article;
