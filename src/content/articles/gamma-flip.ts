import type { Article } from "@/content/types";

const article: Article = {
  "slug": "gamma-flip",
  "title": "What Is a Gamma Flip? The HVL Sign Change",
  "dek": "The gamma flip is where dealer gamma changes sign. Cos prints it as HVL. Thursday QQQ crossed 739. Regime boundary, not a magnet.",
  "date": "2026-09-29",
  "section": "options",
  "kicker": "evergreen",
  "asOf": "Tue Sep 29, 2026, ~12:56 AM PT (overnight desk; worked example Thu Sep 24 US cash)",
  "ogImage": "/og/gamma-flip.png",
  "ogAlt": "What is a gamma flip: above dampen, below amplify. Thu QQQ crossed HVL 739. @CosAnalyst. BOOK FACT · NOT A TICKET",
  "also": ["research", "equities", "markets"],
  "body": [
  {
    "type": "figure",
    "src": "/og/gamma-flip.png",
    "alt": "What is a gamma flip: above dampen, below amplify. Thu QQQ crossed HVL 739. @CosAnalyst. BOOK FACT · NOT A TICKET",
    "caption": "Regime boundary, not a magnet. · BOOK FACT · NOT A TICKET"
  },
  {
    "type": "callout",
    "text": "As of Tue Sep 29, 2026, ~12:56 AM PT. Worked example Thu Sep 24 US cash. Fri Sep 25 contrast. No live Tuesday flip stamped. BOOK FACT · NOT A TICKET · SIMULATED RESEARCH"
  },
  {
    "type": "lede",
    "text": "The **gamma flip** is an estimated price where dealer gamma changes sign. Cos prints it as **HVL** on the sheet. Above that level, hedges are more likely to fade extremes and dampen the tape. Below it, they are more likely to chase and amplify. Crossing the flip changes how the session behaves. The number is a regime boundary, not a magnet, and it moves with price, time, and new open interest."
  },
  {
    "type": "p",
    "text": "A line on a map should not be this interesting. Thursday's 739 was."
  },
  {
    "type": "p",
    "text": "QQQ crossed that **gamma flip**, and the session on the other side did not behave like the morning that printed 734.62."
  },
  {
    "type": "p",
    "text": "Overnight into Tuesday is quiet: ES **7746.25**, NQ **30586**, VIX **16.01**, the 10-year **5.232%**, SPY cash last **765.61**, QQQ **736.53**, bitcoin about **83971.57**. Soft tape, no spike, no invented Tuesday HVL. The flip still matters because re-hedging can switch from chasing to fading, or the other way, when cash walks through it. Not because price has to stop on the number."
  },
  {
    "type": "h2",
    "text": "What is the gamma flip level?"
  },
  {
    "type": "p",
    "text": "The **gamma flip level** is the price where a gamma-exposure map estimates dealer gamma goes from negative to positive, or from positive to negative."
  },
  {
    "type": "p",
    "text": "An option's **delta** is how much it moves with the stock. **Gamma** is how fast that delta changes. Dealers, the firms on the other side of a lot of listed options, hedge in QQQ, SPY, or the futures. Positive estimated gamma near the current price: hedges tend to lean against the move. Negative: they tend to chase."
  },
  {
    "type": "p",
    "text": "The flip is the modeled zero. Cos labels it **HVL**. It is built from listed open interest and an assumption about who holds what. True dealer inventory is not public. Cos stamps a time and treats the print as a map."
  },
  {
    "type": "p",
    "text": "Thursday, September 24, 2026. QQQ: open **735.29**, high **742.66**, low **734.62**, close **741.10**. Cos map at 11:14 PT: put wall **736**, HVL flip **739**, call wall **742**. Midday profile: **Negative Gamma**. Net gamma exposure about **-$331 million**."
  },
  {
    "type": "p",
    "text": "Opened under 736, printed 734.62, reclaimed the put wall, crossed **739**, tagged toward 742, closed **741.10**. Above the flip, under the call wall. SPY closed **767.18**. VIX about **15.67**."
  },
  {
    "type": "figure",
    "src": "/og/gamma-flip-01.png",
    "alt": "Gamma flip: above HVL dampen, below amplify.",
    "caption": "The flip is a sign change.** Above HVL, dampening is more likely. Below it, amplification is more likely."
  },
  {
    "type": "p",
    "text": "Parent map: [What is gamma exposure?](https://cosanalyst.com/articles/what-is-gamma-exposure/). The two signs: [positive vs negative gamma](https://cosanalyst.com/articles/positive-vs-negative-gamma/)."
  },
  {
    "type": "h2",
    "text": "What does gamma flip mean in options?"
  },
  {
    "type": "p",
    "text": "In options, a **gamma flip** means the estimated dealer book has changed which job the hedge is doing near the current price. Not a buy. Not a sell. A change in mechanical flow. Thursday morning sat under the put wall in a Negative Gamma book. That is the amplifier setup. Reclaiming 736 was the first repair. Crossing **739** was the job change."
  },
  {
    "type": "p",
    "text": "Friday showed the relocated version. QQQ: open **742.83**, high **745.92**, low **739.64**, close **744.5**. Cos at 12:14 PT: call wall **745**, HVL **738**, put wall **736**. Net GEX about **+$591 million**. Profile: **Positive Gamma**. Cash closed **under C1** and **above HVL**. The flip had already moved, 739 to 738. Price held above it. The tape felt stickier than Thursday morning."
  },
  {
    "type": "figure",
    "src": "/og/gamma-flip-02.png",
    "alt": "Thursday QQQ path crossing HVL 739 from under 736 toward 742, close 741.10.",
    "caption": "Thursday's QQQ walk through the flip.** Under 736, reclaim, cross HVL 739, tag toward 742, close 741.10 above the flip."
  },
  {
    "type": "p",
    "text": "The call wall and put wall around that crossing get their own explainer next in this series. They are the crowded strikes."
  },
  {
    "type": "h2",
    "text": "Can gamma exposure flip during the day?"
  },
  {
    "type": "p",
    "text": "Yes. Two different things can change inside a session."
  },
  {
    "type": "p",
    "text": "**Price can cross a stamped flip.** Thursday did that at **739**. The 11:14 PT map still read Negative Gamma midday. The close sat above HVL anyway. A stamp is a snapshot."
  },
  {
    "type": "p",
    "text": "**The flip itself can move.** Friday's HVL was **738**, not 739. New open interest, same-day options, time decay, and a different price rewrite the estimated zero. Thursday's 11:14 PT print is not Friday's 12:14 PT print, and neither is Tuesday's live sheet."
  },
  {
    "type": "p",
    "text": "Overnight is not a substitute stamp. QQQ last **736.53** sits near Thursday's old put wall, a coincidence until the next Cos map says otherwise. Do not drag 739 forward and call it live."
  },
  {
    "type": "figure",
    "src": "/og/gamma-flip-03.png",
    "alt": "Thu HVL 739 vs Fri HVL 738 vs no live Tue stamp.",
    "caption": "The level moves.** Thursday HVL 739. Friday HVL 738. Same object, new book. Timestamp the map."
  },
  {
    "type": "h2",
    "text": "Two scenarios for the next session"
  },
  {
    "type": "p",
    "text": "These are regimes, not predictions."
  },
  {
    "type": "p",
    "text": "**A. Price holds above a stamped flip.** Dealer hedges near the current price are more likely to **dampen**. Moves can still print. They often look smaller than the headline. Friday's close under C1 **745** and above HVL **738** is that corridor. Thursday afternoon between **739** and **742** is the same idea after a repair."
  },
  {
    "type": "p",
    "text": "**B. Price loses the flip, then the put wall, while the book is still estimated short gamma.** That is the amplifier setup. Thursday opened under **736** in Negative Gamma and printed **734.62** before the reclaim. Losing the HVL is the first job change. Losing P1 in a still-negative book is when swings can stretch past the news."
  },
  {
    "type": "p",
    "text": "Neither path is a ticket."
  },
  {
    "type": "h2",
    "text": "Levels from the Cos book"
  },
  {
    "type": "p",
    "text": "Stamped maps. Interim until the next Cos print. Thursday's 739 is the classroom, not Tuesday's live flip."
  },
  {
    "type": "p",
    "text": "**Thu Sep 24 (11:14 PT), Negative Gamma, the worked cross**"
  },
  {
    "type": "list",
    "items": [
      "**QQQ HVL / flip 739.** The job-change print. Close **741.10** finished above it.",
      "**Between 739 and 742:** afternoon corridor. Flip held. Call wall C1 **742** not accepted on the close.",
      "**Below 736 (P1):** put wall lost. In a still-negative book, swings can stretch. Thursday's low **734.62** lived there first."
    ]
  },
  {
    "type": "p",
    "text": "**Fri Sep 25 (12:14 PT), Positive Gamma contrast**"
  },
  {
    "type": "list",
    "items": [
      "**QQQ C1 745 / HVL 738 / P1 736.** Close **744.5** UNDER C1 / ABOVE HVL. The flip had already relocated."
    ]
  },
  {
    "type": "h2",
    "text": "What should you watch next?"
  },
  {
    "type": "list",
    "items": [
      "**Whether cash is above or below the next stamped HVL.** Thursday's 739 taught the idea. It is not the live number.",
      "**The put wall relative to that flip.** Holding the HVL keeps a repaired read. Losing P1 while the book is still estimated short gamma is when the amplifier tends to show up.",
      "**A new Cos stamp.** Open interest and same-day flow rewrite the zero. Friday's HVL was already a different print than Thursday's.",
      "**JOLTS at 10:00 AM ET today.** Watch item only. This note is not a print reaction.",
      "**The calendar that can rewrite a book.** Next monthly options expiration: **Friday, October 16, 2026**. Next FOMC: **October 27-28** and **December 8-9, 2026**. Event days can move the flip because new options print and implied vol jumps. Overnight VIX about **16.01**, Thursday close near **15.67**."
    ]
  },
  {
    "type": "h2",
    "text": "FAQ"
  },
  {
    "type": "h3",
    "text": "What is the gamma flip level?"
  },
  {
    "type": "p",
    "text": "The estimated price where dealer gamma is modeled to change sign. Cos prints it as HVL. Above it, dampening is more likely. Below it, amplification is more likely."
  },
  {
    "type": "h3",
    "text": "What does gamma flip mean in options?"
  },
  {
    "type": "p",
    "text": "The estimated dealer hedge near the current price may switch jobs, from chasing to fading or from fading to chasing. Not a directional ticket."
  },
  {
    "type": "h3",
    "text": "Can gamma exposure flip during the day?"
  },
  {
    "type": "p",
    "text": "Yes. Price can cross a stamped HVL, as QQQ did through 739 on Thursday. The HVL itself can also relocate as open interest, same-day options, and price change."
  },
  {
    "type": "h3",
    "text": "Is the gamma flip a magnet?"
  },
  {
    "type": "p",
    "text": "No. Thursday crossed 739 and kept going toward 742. The fact is the change in hedge character, not a stall on the number."
  },
  {
    "type": "h3",
    "text": "Why does Cos call it HVL?"
  },
  {
    "type": "p",
    "text": "HVL is the Cos sheet label for that estimated zero. Same object as the gamma flip."
  },
  {
    "type": "h2",
    "text": "The aha"
  },
  {
    "type": "p",
    "text": "People treat the **gamma flip** like a line the market is supposed to respect. That is the wrong picture."
  },
  {
    "type": "p",
    "text": "The flip is a job description for the hedge. Thursday opened under 736, crossed 739, and closed 741.10 above it. Friday the same index sat above a moved flip at 738, in Positive Gamma, and the tape felt sticky instead of stretched. The number changed. The idea did not. Read HVL as the estimated place the book changes sign, and 739 stops looking like a target. It looks like the moment the tape's job changed."
  },
  {
    "type": "p",
    "text": "Full research archive: https://cosanalyst.com/articles/gamma-flip/"
  },
  {
    "type": "p",
    "text": "BOOK FACT · NOT A TICKET"
  },
  {
    "type": "p",
    "text": "SIMULATED RESEARCH"
  },
  {
    "type": "p",
    "text": "Not financial advice."
  }
]
};

export default article;
