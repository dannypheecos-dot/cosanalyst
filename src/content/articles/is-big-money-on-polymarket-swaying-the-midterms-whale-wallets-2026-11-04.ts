import type { Article } from "@/content/types";

const article: Article = {
  "slug": "is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04",
  "title": "Is Big Money on Polymarket Swaying the Midterms? We Traced the Whale Wallets",
  "titleTag": "Is Big Money on Polymarket Swaying the Midterms? Whale Wallets Traced",
  "dek": "Some commentators say Democratic donors bought Polymarket's midterm odds to sway voters. We traced 240,150 trades and 634 big wallets. Who is behind the money is inconclusive, and the patterns the theory predicts did not show up.",
  "date": "2026-11-04",
  "section": "research",
  "also": ["markets", "crypto"],
  "kicker": "On-chain study",
  "asOf": "Data pulled evening of Nov 3, 2026 PT",
  "displayTime": "Nov 4, 2026 · PT",
  "publishedAt": "2026-11-04T06:00:00-08:00",
  "ogImage": "/og/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04-og.png",
  "ogAlt": "CosAnalyst dark chart card: Whales bought the blue wave? We traced the wallets.",
  "body": [
    {
      "type": "figure",
      "src": "/og/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04.png",
      "alt": "CosAnalyst dark chart card: Whales bought the blue wave? We traced the wallets.",
      "caption": "Data pulled Nov. 3, 2026, evening PT, from Polymarket's public Gamma and Data (v2) APIs, Polygon public RPC and Kalshi's public API."
    },
    {
      "type": "lede",
      "text": "A theory spread fast this cycle: that big donors, PACs or NGOs were pouring money into Democratic \"sweep\" bets on Polymarket to make a blue wave look inevitable and discourage Republican turnout. Grant Cardone said on X he is \"convinced Democrats are using political funds to manipulate Polymarket odds\" ([post](https://x.com/GrantCardone/status/2117248559154171957)) and later called it \"election interference\" ([post](https://x.com/GrantCardone/status/2117761071033307563)). We pulled the public on-chain record to test the claim."
    },
    {
      "type": "callout",
      "text": "Verdict: inconclusive on who, not supported on how. On-chain data cannot tell us who owns a wallet, so we can't prove or rule out that a donor, PAC or NGO is behind any account. But the patterns the theory predicts did not show up in what we could measure."
    },
    {
      "type": "stats",
      "items": [
        {
          "label": "Partisan midterm markets scanned",
          "value": "1,483",
          "note": "$356.7M listed volume"
        },
        {
          "label": "Pre-Election-Day fills analyzed",
          "value": "240,150",
          "note": "11 largest control/Senate markets"
        },
        {
          "label": "Dollars bought on D side",
          "value": "77%"
        },
        {
          "label": "Shares bought on R side",
          "value": "54%"
        }
      ]
    },
    {
      "type": "h2",
      "text": "Is big money on Polymarket swaying the midterms? The short answer"
    },
    {
      "type": "p",
      "text": "The D-side dollar lead mostly reflects Democrats being the favorite, since favorites cost more per share. R-side buyers actually bought more shares. Large wallets on both sides are mostly seasoned and multi-market. Three of the four shared funding sources look like public infrastructure used by both sides. Big trades didn't leave lasting price moves, and Polymarket stayed within a few points of Kalshi, a separate US-regulated exchange."
    },
    {
      "type": "h2",
      "text": "1. Follow the money, three ways"
    },
    {
      "type": "p",
      "text": "Across the 11 largest House/Senate control, sweep and marquee Senate markets, traders bought $34.9M of D-side positions and $10.5M of R-side positions before Election Day. Dollars alone exaggerate the gap. A share pays $1 if it wins, and Democrats were priced as the favorite (House around 94%, Senate around 75% the day before), so each D share cost more. Counted in shares, which measures what each side stands to win or lose, R-side buyers took 51.4M shares against 44.5M for D-side buyers. D-side buyers outnumbered R-side buyers, 26,273 wallets to 14,589."
    },
    {
      "type": "figure",
      "src": "/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/02_flow_lenses.png",
      "alt": "Same trades in dollars, shares and wallets, D vs R",
      "caption": "Same trades, three lenses. Source: data-api.polymarket.com/v2/trades. Fills before Nov. 3, 00:00 PT."
    },
    {
      "type": "figure",
      "src": "/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/01_flow_d_vs_r.png",
      "alt": "Monthly USDC bought by side",
      "caption": "Monthly USDC bought by side. $29.7M of the D side and $8.0M of the R side landed in the final 60 days."
    },
    {
      "type": "p",
      "text": "On Election Day itself another $18.6M went to the D side, much of it after results began coming in."
    },
    {
      "type": "h2",
      "text": "2. Who are the whales? New vs seasoned"
    },
    {
      "type": "p",
      "text": "We flagged every wallet that bought at least $10k in these markets before Election Day: 634 wallets, 502 leaning D ($28.5M) and 132 leaning R ($6.1M). For each one, we found its first-ever Polymarket activity. Freshly created accounts are sometimes cited as a possible sign of coordination, though they prove nothing on their own."
    },
    {
      "type": "table",
      "columns": [
        "",
        "D-leaning",
        "R-leaning"
      ],
      "rows": [
        [
          "New (first activity 60 days ago or less)",
          "76 of 502 (15%)",
          "24 of 132 (18%)"
        ],
        [
          "Dollars from new wallets",
          "$3.4M (12%)",
          "$1.8M (30%)"
        ],
        [
          "Median wallet age",
          "342 days",
          "331 days"
        ],
        [
          "Election-focused (90%+ of recent activity political)",
          "49 (10%)",
          "15 (11%)"
        ],
        [
          "Median distinct events traded (recent history)",
          "about 66",
          "29"
        ]
      ]
    },
    {
      "type": "figure",
      "src": "/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/03_wallet_age.png",
      "alt": "Wallet age histogram for large D and R wallets",
      "caption": "Wallet age = time since first activity on data-api v2. A brand-new account isn't proof of anything."
    },
    {
      "type": "p",
      "text": "New money showed up on both sides, and it was actually a bigger share of R-side dollars. The largest brand-new whale in our set (Wallet F, first active 13 days before the election) bet the R side. In both camps, the typical large wallet had nearly a year of history across dozens of events, which looks more like regular traders than single-use accounts. 93 of the 634 large wallets bought meaningful amounts on both sides, a pattern consistent with hedging or market-making."
    },
    {
      "type": "h2",
      "text": "3. Concentration: is one giant moving the board?"
    },
    {
      "type": "p",
      "text": "We ranked the holders of every market with at least $1M in volume (40 markets) by shares held. The median top-10 share was 71% on the D side and 73% on the R side, with Gini coefficients of 0.94 and 0.95. Both sides are top-heavy to about the same degree, which is normal for prediction markets. Among large D-leaning wallets, the top 10 accounted for 21% of large-wallet D dollars. On the R side, the top 10 accounted for 47%. By this measure, R-side money was more concentrated."
    },
    {
      "type": "figure",
      "src": "/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/04_concentration.png",
      "alt": "Holder concentration by side",
      "caption": "Source: data-api.polymarket.com/v2/holders (up to 5,000 holders per side; 2 of 2,966 market sides hit that cap)."
    },
    {
      "type": "h2",
      "text": "4. Funding trails: one hidden bankroll?"
    },
    {
      "type": "p",
      "text": "For the 60 largest wallets, we scanned Polygon for the USDC transfers that arrived in the roughly 2,000 blocks (about an hour) before each wallet's first trade. We identified a funding source for 51 of the 60. Four sources appeared more than once:"
    },
    {
      "type": "table",
      "columns": [
        "Funder",
        "Wallets funded",
        "D-leaning",
        "R-leaning"
      ],
      "rows": [
        [
          "Token mint (0x0)",
          "13",
          "9",
          "4"
        ],
        [
          "High-throughput hot wallet (3.3M txs)",
          "9",
          "7",
          "2"
        ],
        [
          "0xf0fc…f52e",
          "3",
          "2",
          "1"
        ],
        [
          "Large contract (22KB code)",
          "11",
          "11",
          "0"
        ]
      ]
    },
    {
      "type": "figure",
      "src": "/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/05_funding_clusters.png",
      "alt": "Funding-source network for the top 60 wallets",
      "caption": "Gold = funder; blue/red = wallet lean; node size = dollars bought. In a roughly 17-minute sample the large contract paid 8 distinct, unrelated recipients."
    },
    {
      "type": "p",
      "text": "Three of the four shared sources look like public infrastructure: the token mint, a hot wallet with about 3.3 million transactions (per its Polygon transaction count), and a busy routing contract that in a roughly 17-minute sample paid out to 8 distinct recipients. That routing contract funded 11 D-leaning wallets and no R-leaning ones, but its wide payout pattern looks like shared infrastructure rather than one person's bankroll. The fourth source looks like a private address. It funded only 3 wallets, two D-leaning and one R-leaning, so any read on it rests on those 3 wallets, and that mix doesn't fit a single partisan cluster. Exchange and bridge deposits break the trail, so these hops can't show who ultimately supplied the money."
    },
    {
      "type": "h2",
      "text": "5. Timing and price impact: pushed, then abandoned?"
    },
    {
      "type": "p",
      "text": "A manipulation campaign usually leaves a footprint: a big buy pushes the price, then nobody defends it and it falls back. In the D-House market, we checked every fill of at least $50k against the price before it and 1 hour and 24 hours after. Across 31 measurable fills, the median move in the trade's direction was 0.0 points at both 1 hour and 24 hours. The market absorbed the big trades without being pushed. We found 16 ten-minute windows where three or more large wallets each bought at least $10k on the D side, and 1 such window on the R side. That is a lead worth noting, but large D-leaning wallets also outnumbered R-leaning ones about 4 to 1, and these bursts didn't leave sustained price moves."
    },
    {
      "type": "figure",
      "src": "/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/06_odds_large_trades.png",
      "alt": "Polymarket D-House price with large fills and Kalshi daily close",
      "caption": "Polymarket \"Yes D\" fills (line), fills of $50k or more (dots, blue = D direction, red = R direction, sized by dollars) and Kalshi's daily close (gold)."
    },
    {
      "type": "h2",
      "text": "6. Did Polymarket drift from other markets?"
    },
    {
      "type": "p",
      "text": "If Polymarket's odds were being propped up, they should drift away from other venues. Over the final 60 days, Polymarket's daily D-Senate price ran an average of 2.0 points above Kalshi's daily close (largest gap 6 points). For D-House, the average was 1.3 points above (largest gap 3 points). That's a small, steady Democratic lean, and the two snapshots are taken at slightly different times of day. On the day before the election, the venues were about half a point apart on the Senate (75.5% on Polymarket's last fill of the day vs 76% at Kalshi's daily close, both from the venues' public APIs). As of Nov. 3 evening PT, both venues showed Democrats at about 99.9% for House and Senate control. We didn't compare against polling averages in this pass."
    },
    {
      "type": "h2",
      "text": "What on-chain data can and can't tell you"
    },
    {
      "type": "list",
      "items": [
        "**Can show:** wallet sizes, timing, which side each wallet bought, account age, how many kinds of markets it trades, the funding hops just before its first trade, and how prices reacted.",
        "**Can't show:** who owns a wallet. A donor, PAC, NGO, hedge fund or retiree all look the same on-chain, and exchange or bridge deposits break the trail. Nothing here shows anyone's intent, or whether any trader meant to influence voters.",
        "**Access:** Polymarket International states that US persons are prohibited from trading there. US traders are directed to [Polymarket US](https://polymarket.com/transparency), a CFTC-designated exchange operated by QCX LLC. Polymarket US trading happens off this chain and isn't covered here.",
        "**Coverage:** trade-level data covers the 11 largest markets. Holder snapshots cover all 1,483. Funding traces cover the top 60 wallets. Recent-activity breadth is capped at 2,000 records per wallet. Listed volume counts differently from the dollar totals of filled trades."
      ]
    },
    {
      "type": "h2",
      "text": "Bottom line"
    },
    {
      "type": "p",
      "text": "The public record can't prove or disprove who's behind any wallet, so the donor/PAC/NGO question is inconclusive. The specific pattern the theory predicts doesn't show up in the data we measured: one-sided new-wallet floods, a shared partisan bankroll, price pushes that fade, or a gap from other markets. The D-side dollar lead is consistent with Democrats being the favorite, and that favorite status matched both Kalshi and the results as they came in on election night."
    },
    {
      "type": "h2",
      "text": "Evidence appendix"
    },
    {
      "type": "p",
      "text": "Downloads: [markets.csv](/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/markets.csv) (every market and side: volume, holders, top-10 share, Gini, source URL) · [big_wallets.csv](/articles/is-big-money-on-polymarket-swaying-the-midterms-whale-wallets-2026-11-04/big_wallets.csv) (634 large wallets, shortened addresses)."
    },
    {
      "type": "table",
      "columns": [
        "Market",
        "Volume"
      ],
      "rows": [
        [
          "[Will the Democratic Party control the House after the 2026 Midterm elections?](https://polymarket.com/event/which-party-will-win-the-house-in-2026)",
          "$36.1M"
        ],
        [
          "[2026 Balance of Power: R Senate, R House](https://polymarket.com/event/balance-of-power-2026-midterms)",
          "$26.2M"
        ],
        [
          "[Will the Republican Party control the House after the 2026 Midterm elections?](https://polymarket.com/event/which-party-will-win-the-house-in-2026)",
          "$25.8M"
        ],
        [
          "[2026 Balance of Power: D Senate, D House](https://polymarket.com/event/balance-of-power-2026-midterms)",
          "$19.5M"
        ],
        [
          "[Will the Democratic Party control the Senate after the 2026 Midterm elections?](https://polymarket.com/event/which-party-will-win-the-senate-in-2026)",
          "$16.8M"
        ],
        [
          "[Will the Republican Party control the Senate after the 2026 Midterm elections?](https://polymarket.com/event/which-party-will-win-the-senate-in-2026)",
          "$14.2M"
        ],
        [
          "[Will the Republicans win the Texas Senate race in 2026?](https://polymarket.com/event/texas-senate-election-winner)",
          "$11.7M"
        ],
        [
          "[Will the Democrats win the Texas Senate race in 2026?](https://polymarket.com/event/texas-senate-election-winner)",
          "$10.0M"
        ],
        [
          "[Will Republicans lose the Alaska, Iowa, Kansas, Maine, Michigan, Ohio, and Texas Senate seats?](https://polymarket.com/event/which-tossup-senate-states-will-republicans-win-ak-ia-ks-me-mi-oh-tx)",
          "$9.1M"
        ],
        [
          "[Will the Democrats win the Michigan Senate race in 2026?](https://polymarket.com/event/michigan-senate-election-winner)",
          "$7.6M"
        ],
        [
          "[Will the Republicans win the Michigan Senate race in 2026?](https://polymarket.com/event/michigan-senate-election-winner)",
          "$5.3M"
        ],
        [
          "[Will the Republicans win the Texas governor race in 2026?](https://polymarket.com/event/texas-governor-winner-2026)",
          "$4.8M"
        ],
        [
          "[Will the Republicans win the Florida governor race in 2026?](https://polymarket.com/event/florida-governor-winner-2026)",
          "$4.0M"
        ],
        [
          "[Will Republicans win Iowa, and lose Alaska, Kansas, Maine, Michigan, Ohio, and Texas?](https://polymarket.com/event/which-tossup-senate-states-will-republicans-win-ak-ia-ks-me-mi-oh-tx)",
          "$3.5M"
        ],
        [
          "[Will the Democrats win the Maine Senate race in 2026?](https://polymarket.com/event/maine-senate-election-winner)",
          "$3.4M"
        ],
        [
          "[Will Republicans win Iowa and Kansas, and lose Alaska, Maine, Michigan, Ohio, and Texas?](https://polymarket.com/event/which-tossup-senate-states-will-republicans-win-ak-ia-ks-me-mi-oh-tx)",
          "$3.3M"
        ],
        [
          "[Will the Republicans win the Maine Senate race in 2026?](https://polymarket.com/event/maine-senate-election-winner)",
          "$2.7M"
        ],
        [
          "[Will Republicans win Alaska, Iowa, Kansas, Michigan, and Texas, and lose Maine and Ohio?](https://polymarket.com/event/which-tossup-senate-states-will-republicans-win-ak-ia-ks-me-mi-oh-tx)",
          "$2.6M"
        ],
        [
          "[Will the Democrats win the Ohio Senate race in 2026?](https://polymarket.com/event/ohio-senate-election-winner)",
          "$2.6M"
        ],
        [
          "[Will the Democrats win the Texas governor race in 2026?](https://polymarket.com/event/texas-governor-winner-2026)",
          "$2.5M"
        ]
      ],
      "caption": "Top 20 markets by listed volume. Source: Polymarket Gamma API."
    },
    {
      "type": "table",
      "columns": [
        "Label",
        "Lean",
        "Bought D / R",
        "Age",
        "Wallet",
        "Proof"
      ],
      "rows": [
        [
          "Wallet A",
          "D",
          "$1,089k / $250k",
          "222d",
          "[0xfea3…d227](https://polygonscan.com/address/0xfea31bc088000ff909be1dfd8d0e3f2c7ef2d227)",
          "[first trade](https://polygonscan.com/tx/0xbb222cea1241ac5945c7851dcff2bcbbea2594b5f51c8a338630df6153aeeb68) · [funding tx](https://polygonscan.com/tx/0x5f9bff42ea5ae7802ed3f7a31b727d1e1c94802034bce7bc56ae2aacdfec8ae8)"
        ],
        [
          "Wallet B",
          "D",
          "$774k / $456k",
          "218d",
          "[0xdc41…dd7e](https://polygonscan.com/address/0xdc41c39b95453c943174f369926018f6963bdd7e)",
          "[first trade](https://polygonscan.com/tx/0x6360edc0a57e0e7823ea4ee7810841b75af7efd7d666f1b73b5b9a979ac12a80) · [funding tx](https://polygonscan.com/tx/0xfaa0ae9a6d9038caf7fdabd3fa71a6c6253277d6c55aacd7c4004342232594f0)"
        ],
        [
          "Wallet C",
          "D",
          "$846k / $0k",
          "503d",
          "[0xc4d1…8ce8](https://polygonscan.com/address/0xc4d1a863e9cc45d02ba22d3a1ae9ba7822018ce8)",
          "[first trade](https://polygonscan.com/tx/0xb9df0a89698a7ecfb9463e2bb7c7409561c7ab975660e2334d3d578f0ff5b5f0) · [funding tx](https://polygonscan.com/tx/0x9abc3b13ff1a56903230bb80f26b82576e162141cc327cd0e13903523d8358fe)"
        ],
        [
          "Wallet D",
          "D",
          "$492k / $177k",
          "209d",
          "[0x2b59…9db6](https://polygonscan.com/address/0x2b5920274740ca61745eeb077587bf5bb4ff9db6)",
          "[first trade](https://polygonscan.com/tx/0xa406e8e75ade3fbcc5762322b07fdf91651dfc234b19aa81441266fa4abc4f7a) · [funding tx](https://polygonscan.com/tx/0x0ef42511f7962ad922453c6052ce0d9854f47ed3848d72cfcf5aa18d7550da49)"
        ],
        [
          "Wallet E",
          "D",
          "$623k / $0k",
          "413d",
          "[0x9c99…7250](https://polygonscan.com/address/0x9c99d17ed70d628cff56c5d7bec2eaf567137250)",
          "[first trade](https://polygonscan.com/tx/0x4a0edafc7aa3e2eb76cfaee189bbf32abde10611716976413f787abcf37971e1) · [funding tx](https://polygonscan.com/tx/0x3be7e2189a9641155e000d1e4c7ca148c34d4a5cd303becf33a03dc4495cd9a0)"
        ],
        [
          "Wallet F",
          "R",
          "$0k / $560k",
          "13d (new)",
          "[0x60bf…942d](https://polygonscan.com/address/0x60bf706d142f4620e28a2701cfafb5565a85942d)",
          "[first trade](https://polygonscan.com/tx/0x33cd00f9d2bb23248f2cb9f906e774495cd26b566456e7d357a4b9721de3c535) · [funding tx](https://polygonscan.com/tx/0x212c03d37301a1f57cffdfef88cec7dde2c0cf44382ce6d7d6e60568044d57e0)"
        ],
        [
          "Wallet G",
          "D",
          "$483k / $0k",
          "42d (new)",
          "[0xf4c9…f88c](https://polygonscan.com/address/0xf4c95b636c71243531dfc82a97565a94c106f88c)",
          "[first trade](https://polygonscan.com/tx/0x83d8911e67b2cec23b14ae1aad12f512d012a5c625d1e5cfb7ad765365db8dbf) · [funding tx](https://polygonscan.com/tx/0x70f8676d4b07127dc6400faac671eb84a284ca28413491e35865faac5d46fa5c)"
        ],
        [
          "Wallet H",
          "D",
          "$476k / $0k",
          "1017d",
          "[0xed10…d2e5](https://polygonscan.com/address/0xed107a85a4585a381e48c7f7ca4144909e7dd2e5)",
          "[first trade](https://polygonscan.com/tx/0x8621fab2676a329fd20a4eede0eb3a03d91106f1b23a79d7b786652ebdde0b67) · [funding tx](https://polygonscan.com/tx/0x8621fab2676a329fd20a4eede0eb3a03d91106f1b23a79d7b786652ebdde0b67)"
        ],
        [
          "Wallet I",
          "D",
          "$469k / $5k",
          "486d",
          "[0x212f…7fd2](https://polygonscan.com/address/0x212f7fc77c18c6ce34bb1dae43e9198ab19b7fd2)",
          "[first trade](https://polygonscan.com/tx/0x3442eed9779fc491c8ab3ef01f342605ce8df899f8e94c2108becdf1f482d02d) · [funding tx](https://polygonscan.com/tx/0xfb85f611cbe72ff235654df685f89daad6dca4476dcb07e2326342bf015e0616)"
        ],
        [
          "Wallet J",
          "R",
          "$0k / $424k",
          "126d",
          "[0x3a6a…458e](https://polygonscan.com/address/0x3a6a2e7a7707c720219228eb8efa7398bc0e458e)",
          "[first trade](https://polygonscan.com/tx/0x0d53ffad19c672d3a3ad4c11b6f14ee442f0ae240a82208d1e4f781e0a105403) · [funding tx](https://polygonscan.com/tx/0xea9120b846549e2a6fb828068f3612b9942dfbb098e64078f9b25b15a40c8e05)"
        ],
        [
          "Wallet K",
          "D",
          "$408k / $0k",
          "736d",
          "[0x1489…1307](https://polygonscan.com/address/0x1489046ca0f9980fc2d9a950d103d3bec02c1307)",
          "[first trade](https://polygonscan.com/tx/0x081ac3103c56357d608161279e0cf455e57c83eabaf8903b0919e4e81ab09c73) · [funding tx](https://polygonscan.com/tx/0x1bb4cbbae87b3c40c5ab187e5ac91a752e78e47d9d00e58fbce51fe2bb959f35)"
        ],
        [
          "Wallet L",
          "D",
          "$334k / $67k",
          "174d",
          "[0x032e…2a9e](https://polygonscan.com/address/0x032eb1bc893940263ad0b01889f262fc232f2a9e)",
          "[first trade](https://polygonscan.com/tx/0xb6ddaa08545dba6cb44668ac79cd94311f1dd3d09670cd4b689affa051f4490c) · [funding tx](https://polygonscan.com/tx/0xb164d7e5ad0bd51b4158c58f3ba9b893bf1b7e5571be5a440ff41e481997eac1)"
        ],
        [
          "Wallet M",
          "D",
          "$389k / $0k",
          "341d",
          "[0x4b29…716f](https://polygonscan.com/address/0x4b2995b6c8cc2cf56899ad62ee87c3f70c97716f)",
          "[first trade](https://polygonscan.com/tx/0x1fdd443a3bc8b3dc828d2321f0d12c5edc7f7db3e73bfc0d6c2c454b71512fa2) · n/a"
        ],
        [
          "Wallet N",
          "D",
          "$358k / $20k",
          "754d",
          "[0x4488…e319](https://polygonscan.com/address/0x448861155279dbf833d041b963e3ac854599e319)",
          "[first trade](https://polygonscan.com/tx/0x00a4e9bb28a970a945388eb028e521e891d072601d24e8dba1e7c523d99fb4da) · [funding tx](https://polygonscan.com/tx/0x64dd60db04ff2d7d7507f3a9f478b96318752647e4c0ad8f36dc4c65de543d70)"
        ],
        [
          "Wallet O",
          "D",
          "$345k / $0k",
          "756d",
          "[0x7f9e…3a0e](https://polygonscan.com/address/0x7f9e2d1df78614564a70becc7fa14aa9a6623a0e)",
          "[first trade](https://polygonscan.com/tx/0x02da40fede77888a9801fa1a5965f033b9010fb22423333974c5699acdc1193d) · [funding tx](https://polygonscan.com/tx/0xb0c652dc8c1cd5c268f4b9fc6815abd0dff5ec6128e721114f383f72bbd68d2f)"
        ]
      ],
      "caption": "Top 15 wallets by pre-Election-Day dollars bought. Labels are assigned by those dollars. Links go to Polygonscan."
    },
    {
      "type": "h2",
      "text": "FAQ"
    },
    {
      "type": "h3",
      "text": "Did Democrats buy Polymarket odds to sway the midterms?"
    },
    {
      "type": "p",
      "text": "The public data can't say who owns any wallet, so that question is inconclusive. The footprints a campaign like that would usually leave (one-sided new-wallet floods, a shared partisan bankroll, pushed-then-abandoned prices, drift from Kalshi) did not show up in our measurements."
    },
    {
      "type": "h3",
      "text": "Why was so much more money on the Democratic side?"
    },
    {
      "type": "p",
      "text": "Democrats were the favorite, so each D share cost more. Counted in shares, R-side buyers actually bought more."
    },
    {
      "type": "h2",
      "text": "Sources and disclaimer"
    },
    {
      "type": "callout",
      "text": "Disclaimer: This article is for informational and educational purposes only. It is not financial, betting or political advice, and nothing here guarantees any outcome. On-chain data shows transactions, not identities or intent."
    },
    {
      "type": "p",
      "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst) for more data-led market breakdowns."
    },
    {
      "type": "p",
      "text": "**Your call:** Is it fair to call big prediction-market bets election interference, or is a favorite simply costing more to back? Pick a side in the comments."
    }
  ]
};

export default article;
