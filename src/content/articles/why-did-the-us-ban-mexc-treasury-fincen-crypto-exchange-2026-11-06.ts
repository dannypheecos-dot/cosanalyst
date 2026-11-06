import type { Article } from "@/content/types";

const TREAS =
  "https://home.treasury.gov/news/press-releases/sb0685/";
const CRASH =
  "/articles/why-did-the-stock-market-crash-nasdaq-ai-selloff-nvidia-2026-11-06/";
const ALT =
  "CosAnalyst cream card: Treasury cuts MEXC off from U.S. banks. FinCEN order.";

const article: Article = {
  "slug": "why-did-the-us-ban-mexc-treasury-fincen-crypto-exchange-2026-11-06",
  "title": "Why Did the US Ban MEXC? Treasury Cuts Crypto Exchange Off From US Banks",
  "titleTag": "Why Did the US Ban MEXC? FinCEN Cuts Off US Banks",
  "dek": "The U.S. Treasury's FinCEN issued an order cutting MEXC Global off from the U.S. financial system, citing at least $16 billion in illicit flows tied to Iran, North Korea, and Russia sanctions evasion. Here is what the order does, what Treasury says MEXC facilitated, when it takes effect, and what to watch next.",
  "date": "2026-11-06",
  "section": "crypto",
  "also": ["markets", "macro"],
  "kicker": "MEXC Ban",
  "asOf": "As of about 12:15 PM PT Nov 6, 2026",
  "displayTime": "Nov 6, 2026 · 12:15 PM PT",
  "publishedAt": "2026-11-06T12:15:00-08:00",
  "ogImage": "/og/why-did-the-us-ban-mexc-treasury-fincen-crypto-exchange-2026-11-06-og.png",
  "ogAlt": ALT,
  "body": [
    { "type": "figure", "src": "/og/why-did-the-us-ban-mexc-treasury-fincen-crypto-exchange-2026-11-06.png", "alt": ALT, "caption": "Source: U.S. Treasury press release sb0685, Nov. 6, 2026 (Operation Economic Outcast / FinCEN order)." },
    { "type": "lede", "text": "The U.S. Department of the Treasury's Financial Crimes Enforcement Network (FinCEN) issued an order that effectively cuts MEXC Global off from the U.S. financial system ([Treasury press release](" + TREAS + ")). Treasury says the crypto exchange facilitated at least $16 billion in illicit transactions tied to Iranian, North Korean, and Russian sanctions evasion, plus cybercrime." },
    { "type": "p", "text": "The action is part of Operation Economic Outcast. It lands in a week when crypto and AI risk appetite were already under pressure after Thursday's Nasdaq selloff ([our morning recap](" + CRASH + ")). This is a primary U.S. regulator move against a top-20 exchange, not a rumor." },
    { "type": "h2", "text": "The facts in one table" },
    { "type": "table", "columns": ["Item", "What happened", "Why it matters"], "rows": [
      ["Action", "FinCEN order severs MEXC Global from U.S. financial system", "U.S. banks cannot process funds to or from MEXC"],
      ["Allegation", "At least $16B in illicit flows (May 2021–May 2026)", "Scale puts MEXC in major-illicit-finance territory"],
      ["Iran angle", "~$1B with Iranian CVC exchangers; ~$22M tied to Central Bank of Iran and IRGC-Qods Force", "Treasury frames this as cutting an IRGC funding channel"],
      ["Russia angle", "~$1.5B Russian sanctions-evasion linked; still dealing with Garantex/Grinex into June 2026", "Order cites Combating Russian Money Laundering Act authority"],
      ["Timing", "Effective 30 days after Federal Register publication", "Not an instant kill switch; compliance window is built in"]
    ], "caption": "Source: U.S. Treasury / FinCEN press release sb0685, Nov. 6, 2026. Figures are Treasury's." },
    { "type": "h2", "text": "What MEXC is, in plain English" },
    { "type": "p", "text": "MEXC Global is a convertible virtual currency exchanger founded in 2018. As of September 2026, Treasury says it processed more than $1 billion in daily transactions and held about $5 billion in reserves, ranking among the world's top 20 crypto exchanges. It offers trading in more than 50 currencies and access to more than 3,000 cryptocurrencies and tokenized assets." },
    { "type": "p", "text": "MEXC already lists the United States as a prohibited jurisdiction in its own user terms, so this order is not mainly about retail Americans opening new accounts. It is about cutting the exchange's access to U.S. dollar banking rails: the pipes U.S. banks use to move money." },
    { "type": "h2", "text": "What Treasury says went wrong" },
    { "type": "p", "text": "Treasury argues MEXC claimed to run AML and customer checks, and even barred users from Iran and North Korea on paper, while \"severe deficiencies\" in those controls let prohibited-jurisdiction activity through. Between May 2021 and May 2026, Treasury says the platform moved at least $16 billion connected to sanctions evasion, cybercrime, and other illicit activity." },
    { "type": "p", "text": "On Russia, Treasury cites nearly $1.5 billion in linked sanctions-evasion activity, including $232 million in direct deals with U.S., EU, and UK sanctioned entities. It says MEXC was still processing transactions with OFAC-sanctioned Garantex and its successor Grinex as recently as June 2026, more than four years after Garantex's April 2022 designation. It also flags about $26 million tied to the Russia-based A7 sanctions-evasion network and almost $200 million connected to the A7A5 stablecoin." },
    { "type": "p", "text": "On Iran, Treasury says MEXC sent or received about $1 billion with more than 40 Iranian crypto exchangers, and facilitated about $22 million for the sanctioned Central Bank of Iran and the IRGC and its Qods Force. Secretary Scott Bessent framed the choice bluntly: support the Iranian regime, or keep access to the U.S. financial system." },
    { "type": "h2", "text": "What the order actually does" },
    { "type": "p", "text": "The order was issued under section 9714(a) of the Combating Russian Money Laundering Act. It prohibits U.S. financial institutions from engaging in any transmittal of funds from or to MEXC Global. Violations can bring civil or criminal penalties. Treasury says it does not rewrite Bank Secrecy Act duties or OFAC sanctions rules already on the books." },
    { "type": "p", "text": "Effective date: 30 days after publication in the Federal Register. That means banks and counterparties get a short runway to unwind rails, not a same-day freeze. Whistleblowers who tip FinCEN on related sanctions or BSA violations that lead to penalties over $1 million may be eligible for awards under FinCEN's program." },
    { "type": "h2", "text": "If/then: what to watch next" },
    { "type": "list", "items": [
      "If MEXC publishes a detailed rebuttal with on-chain and banking evidence, expect the narrative to shift from \"cut off\" to \"fight the order.\"",
      "If other large offshore exchanges get similar FinCEN or OFAC actions in the next few weeks, treat this as a sector compliance wave, not a one-off.",
      "If U.S. banking partners and dollar on-ramps quietly drop MEXC before the 30-day effective date, the practical cutoff arrives early.",
      "If BTC and major exchange tokens barely move while MX and MEXC-specific pairs wobble, the market is pricing this as exchange-specific risk, not a systemic crypto ban."
    ] },
    { "type": "callout", "text": "Not financial advice. Regulatory actions and market reactions change. Nothing here guarantees any outcome." },
    { "type": "p", "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst), like the [CosAnalyst Facebook Page](https://www.facebook.com/profile.php?id=61595911140925) for plain-English market notes, and join our Telegram at [@CosAnalystSignals](https://t.me/CosAnalystSignals)." },
    { "type": "p", "text": "**Your call:** Is cutting MEXC off from U.S. banks a overdue cleanup of a bad actor, or a warning shot that will push more crypto volume into even murkier venues? Pick a side in the comments." }
  ]
};

export default article;
