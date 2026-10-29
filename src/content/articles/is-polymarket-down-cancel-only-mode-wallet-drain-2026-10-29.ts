import type { Article } from "@/content/types";

const article: Article = {
  "slug": "is-polymarket-down-cancel-only-mode-wallet-drain-2026-10-29",
  "title": "Polymarket Trading Resumes After Cancel-Only Freeze and Wallet Drain: Is Polymarket Down?",
  "titleTag": "Is Polymarket Down? Trading Resumes After Third-Party Compromise and Wallet Drain Reports",
  "dek": "Is Polymarket down? Trading resumed after a cancel-only freeze. Polymarket says a third party provider was compromised and that anyone impacted will be made whole.",
  "date": "2026-10-29",
  "section": "crypto",
  "also": [
    "markets"
  ],
  "kicker": "Update",
  "asOf": "Polymarket status page checked at 12:25 PM PT; incident marked resolved at 12:05 PM PT",
  "displayTime": "Oct 29, 2026 · 11:34 AM PT",
  "publishedAt": "2026-10-29T11:34:00-07:00",
  "updatedAt": "2026-10-29T12:25:00-07:00",
  "ogImage": "/og/is-polymarket-down-cancel-only-mode-wallet-drain-2026-10-29-og.png",
  "ogAlt": "CosAnalyst card: Polymarket goes cancel-only. Don't sign. Breaking, Thu Oct 29, 2026. BOOK FACT · NOT A TICKET",
  "body": [
    {
      "type": "figure",
      "src": "/og/is-polymarket-down-cancel-only-mode-wallet-drain-2026-10-29.png",
      "alt": "Paper-cut collage of a charcoal padlock pinned over a stack of ivory and mint order slips, one slip torn with a red edge, CosAnalyst",
      "caption": "BOOK FACT · NOT A TICKET"
    },
    {
      "type": "p",
      "text": "**BOOK FACT · NOT A TICKET**"
    },
    {
      "type": "p",
      "text": "**As of 12:25 PM PT on Thu Oct 29, 2026.** Status details are from Polymarket's official status page. Loss figures are user claims and press reports unless Polymarket has confirmed them. Polymarket has not published a loss figure."
    },
    {
      "type": "p",
      "text": "**UPDATE 12:25 PM PT: Polymarket marked the incident resolved at 12:05 PM PT and its status page now shows all systems operational, including the CLOB trading API. The company said one of its third party providers was compromised, the issue is fixed, the matter has been referred to law enforcement, and anyone impacted \"will be made whole.\" It has not published a loss figure. (Source: status.polymarket.com)**"
    },
    {
      "type": "p",
      "text": "**UPDATE 12:10 PM PT: Traders can't sell positions right now. Cancel-only mode lets you pull open orders, but the order book won't match new ones, so there is no exit until trading resumes. Guidance on withdrawals is below.**"
    },
    {
      "type": "lede",
      "text": "If you tried to place a bet on Polymarket this morning and nothing happened, it was not your wallet. The exchange was frozen on purpose. Trading has since resumed."
    },
    {
      "type": "p",
      "text": "At **11:05 AM PT** (18:05 UTC), Polymarket's [status page](https://status.polymarket.com/) flagged a **major outage** on its Predictions Trading API (CLOB) with this note: \"The exchange is currently in cancel-only mode and relayer actions paused while we investigate an incident.\""
    },
    {
      "type": "p",
      "text": "Later updates on that same page: at **11:37 AM PT** Polymarket said it had identified and fixed the issue on Polymarket.com, that one of its third party providers was compromised, that the matter was referred to law enforcement, and that anyone impacted will be made whole. It also said trading was temporarily halted. At **11:55 AM PT** it said trading would resume at about 12:00 PM PT (3:00 PM ET). At **12:05 PM PT** it marked the incident resolved. The page then showed all systems operational, including the CLOB and on-chain settlement."
    },
    {
      "type": "p",
      "text": "The freeze came about 20 minutes after a well known trader, Car (@CarOnPolymarket), posted at 10:45 AM PT: \"If you are a Polymarket user, lock down your account. I just got drained $800,000.\" He added that a friend lost $600,000 and urged people not to interact with the site. Those are his own claims and have not been verified."
    },
    {
      "type": "stats",
      "items": [
        {
          "label": "Exchange status",
          "value": "Operational",
          "note": "resolved 12:05 PM PT"
        },
        {
          "label": "Relayer",
          "value": "No separate note",
          "note": "incident marked resolved"
        },
        {
          "label": "Largest single claim",
          "value": "$800K",
          "note": "self-reported, unverified"
        },
        {
          "label": "Official cause",
          "value": "Third party provider",
          "note": "Polymarket, 11:37 AM PT"
        }
      ]
    },
    {
      "type": "h2",
      "text": "Is Polymarket down right now?"
    },
    {
      "type": "p",
      "text": "No. As of 12:05 PM PT on Oct 29, Polymarket's status page shows all systems operational after a roughly one hour incident. From 11:05 AM PT the Predictions Trading API (CLOB) was in major outage, first in cancel-only mode with relayer actions paused, then fully halted. At 11:55 AM PT Polymarket said trading would resume at about 12:00 PM PT, and at 12:05 PM PT it marked the incident resolved."
    },
    {
      "type": "h2",
      "text": "What cancel-only mode meant for positions"
    },
    {
      "type": "list",
      "items": [
        "**You could:** cancel open orders already resting on the book.",
        "**You could not:** place new orders, so you could not open or exit a position through the order book while the freeze lasted.",
        "**Relayer actions paused:** relayers submit transactions on users' behalf, so gasless actions that run through Polymarket's relayer were on hold too.",
        "**Existing positions were not cancelled** by this mode. Nothing official said they changed."
      ]
    },
    {
      "type": "p",
      "text": "One reason exchanges do this: if someone holds stolen shares or a compromised session, a freeze stops them from dumping into the book. The cost is that honest traders are stuck too."
    },
    {
      "type": "h2",
      "text": "Can I sell my Polymarket positions right now?"
    },
    {
      "type": "p",
      "text": "Yes, as of 12:05 PM PT. Polymarket says the incident is resolved and the CLOB trading API is operational, so order placement and fills should work again. Between 11:05 AM and about 12:00 PM PT the exchange was in cancel-only mode, then fully halted, so only cancels were possible. Check [status.polymarket.com](https://status.polymarket.com/) before trading."
    },
    {
      "type": "h2",
      "text": "What users are reporting, and what is not confirmed"
    },
    {
      "type": "p",
      "text": "Starting around 10:45 AM PT, users on X and Discord reported unauthorized withdrawals and suspicious signature prompts, and several pointed to a possibly compromised frontend, meaning the website itself rather than the smart contracts (The Block, Crypto Briefing). The Block cited Arkham data on a wallet address being tracked in connection with the reports. Larger running totals circulating on X, in the low millions of dollars, are unconfirmed. The WSJ reported the pause and the user drain reports."
    },
    {
      "type": "p",
      "text": "**Not confirmed:** the total amount lost, the number of affected accounts, whether any smart contract was exploited, and the name of the third party provider. Claims on X naming a specific analytics script are unconfirmed. Crypto Briefing reported no evidence so far of a core smart contract exploit. Polymarket's main X account had not posted about the incident as of 12:25 PM PT."
    },
    {
      "type": "h2",
      "text": "What should Polymarket users do?"
    },
    {
      "type": "list",
      "items": [
        "**The company says the issue is fixed.** Verify every transaction and signature request before signing, and revoke unfamiliar approvals.",
        "**Made whole:** Polymarket says anyone impacted will be made whole. It has not said how or when, or how much was lost.",
        "**Watch official channels only:** [status.polymarket.com](https://status.polymarket.com/) and Polymarket's verified X account. Scammers often post fake \"claim\" or \"refund\" links during incidents. Do not use links from DMs or replies.",
        "**Approvals:** if Polymarket posts revoke steps, follow those instructions rather than random links."
      ]
    },
    {
      "type": "h2",
      "text": "Can I withdraw my funds from Polymarket right now?"
    },
    {
      "type": "p",
      "text": "This is guidance based on the status page and on reports, not a withdraw instruction from Polymarket."
    },
    {
      "type": "p",
      "text": "Relayer actions were paused from 11:05 AM PT. Withdrawals run through that relayer. Polymarket has since marked the incident resolved with all systems operational, but has not posted a separate note saying withdrawals specifically resumed. If a withdrawal fails, check the status page and do not retry through links from DMs or replies."
    },
    {
      "type": "p",
      "text": "Earlier reports said the site's frontend may have been compromised and that the reported drains involved users signing on it. Funds in an account are not moved unless the owner signs a transaction. Verify every signature before signing."
    },
    {
      "type": "h2",
      "text": "Not Polymarket's first security scare this year"
    },
    {
      "type": "p",
      "text": "Per Crypto Briefing, this is at least the third incident of 2026: an internal POL wallet breach in May with estimated losses of $573,200 to $700,000, and a June supply-chain attack through a compromised third-party script that drained about $3 million in pUSD from fewer than 15 user wallets. Those figures have not been independently verified."
    },
    {
      "type": "h2",
      "text": "What to watch next"
    },
    {
      "type": "list",
      "items": [
        "How and when Polymarket makes impacted users whole, and whether it publishes a loss figure.",
        "Whether it names the third party provider. Claims on X naming a specific analytics script are unconfirmed.",
        "Any separate note that withdrawals through the relayer have resumed.",
        "On-chain tracing of the reported attacker wallet on Polygon."
      ]
    },
    {
      "type": "h2",
      "text": "FAQ"
    },
    {
      "type": "h3",
      "text": "Is Polymarket down right now?"
    },
    {
      "type": "p",
      "text": "No. As of 12:05 PM PT on Oct 29, Polymarket's status page shows all systems operational after a roughly one hour incident."
    },
    {
      "type": "h3",
      "text": "Is Polymarket down today, Oct. 29, 2026?"
    },
    {
      "type": "p",
      "text": "It was, for about an hour. From 11:05 AM PT the trading API was in cancel-only mode and relayer actions were paused, then trading was fully halted. Polymarket marked the incident resolved at 12:05 PM PT, and the status page then showed all systems operational."
    },
    {
      "type": "h3",
      "text": "What is Polymarket cancel-only mode?"
    },
    {
      "type": "p",
      "text": "You can cancel existing orders but cannot place new ones. Polymarket switched it on at 11:05 AM PT while it investigated an incident, then halted trading before bringing the platform back."
    },
    {
      "type": "h3",
      "text": "What caused it?"
    },
    {
      "type": "p",
      "text": "Polymarket says one of its third party providers was compromised. It has not officially named the provider. Claims on X naming a specific analytics script are unconfirmed."
    },
    {
      "type": "h3",
      "text": "Was Polymarket hacked?"
    },
    {
      "type": "p",
      "text": "Polymarket says one of its third party providers was compromised, the issue is fixed, and the matter has been referred to law enforcement. It has not named the provider or published a loss figure. User reports of drained wallets are not a confirmed dollar total."
    },
    {
      "type": "h3",
      "text": "Will drained users get refunds?"
    },
    {
      "type": "p",
      "text": "Polymarket says \"anyone who has been impacted will be made whole.\" It has not said how or when, or how much was lost."
    },
    {
      "type": "h3",
      "text": "Is it safe to use?"
    },
    {
      "type": "p",
      "text": "The company says the issue is fixed. Verify every transaction and signature request before signing, and revoke unfamiliar approvals."
    },
    {
      "type": "h3",
      "text": "Is my money safe on Polymarket?"
    },
    {
      "type": "p",
      "text": "Polymarket says the issue is fixed and that anyone impacted will be made whole. It has not said how or when. Verify every signature, and rely on its status page and verified X account rather than links from replies or DMs."
    },
    {
      "type": "h3",
      "text": "When will Polymarket trading resume?"
    },
    {
      "type": "p",
      "text": "It has. Polymarket said trading would resume at about 12:00 PM PT and marked the incident resolved at 12:05 PM PT. The status page then showed the CLOB operational."
    },
    {
      "type": "h3",
      "text": "Can I sell my Polymarket positions right now?"
    },
    {
      "type": "p",
      "text": "Yes, as of 12:05 PM PT. Polymarket says the incident is resolved and the CLOB trading API is operational, so order placement and fills should work again. Between 11:05 AM and about 12:00 PM PT the exchange was in cancel-only mode, then fully halted, so only cancels were possible. Check status.polymarket.com before trading."
    },
    {
      "type": "h3",
      "text": "Can I withdraw from Polymarket right now?"
    },
    {
      "type": "p",
      "text": "Relayer actions were paused from 11:05 AM PT. Polymarket has since marked the incident resolved with all systems operational, but has not posted a separate note saying withdrawals specifically resumed. If a withdrawal fails, check the status page and do not retry through links from DMs or replies."
    },
    {
      "type": "h2",
      "text": "Bottom line"
    },
    {
      "type": "p",
      "text": "Polymarket froze trading at 11:05 AM PT after users reported drained wallets, then said a third party provider was compromised. It marked the incident resolved at 12:05 PM PT and the status page shows all systems operational. It has not published a loss figure. It says anyone impacted will be made whole. Verify every signature before signing."
    },
    {
      "type": "p",
      "text": "**Follow** [@CosAnalyst on X](https://x.com/CosAnalyst) **for updates as Polymarket responds, and join the free Telegram channel** [@CosAnalystSignals](https://t.me/CosAnalystSignals) **for desk updates.**"
    },
    {
      "type": "callout",
      "text": "**BOOK FACT · NOT A TICKET.** This is news reporting, not security, legal or investment advice."
    },
    {
      "type": "p",
      "text": "Sources: Polymarket status page (status.polymarket.com) history checked at 12:25 PM PT (Investigating 11:05 AM PT, Identified 11:37 AM PT, Monitoring 11:55 AM PT, Resolved 12:05 PM PT); @CarOnPolymarket on X, 10:45 AM PT; The Block on X, 11:26 AM PT; Crypto Briefing, Polymarket restricts trading to cancel-only mode amid wallet drain reports, 11:12 AM PT; Polymarket's X account timeline checked at 12:25 PM PT, no incident post found; WSJ reported the pause and user drain reports."
    }
  ]
};

export default article;
