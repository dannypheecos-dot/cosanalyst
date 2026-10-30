import type { Article } from "@/content/types";

const slug = "what-happens-after-qqq-drops-4-percent-in-a-day-2026-10-30";
const img = (name: string) => `/articles/${slug}/${name}`;

const article: Article = {
  slug,
  title: "What Happens After QQQ Drops 4% in a Day? 128 Cases Since 1999",
  titleTag: "What Happens After QQQ Drops 4% in a Day? 128 Cases",
  dek: "We studied every QQQ close down 4% or more since 1999. Outside the 2000-02 and 2008 bear markets, the median 21-day return was +3.19% and 69% of cases were higher.",
  date: "2026-10-30",
  section: "research",
  also: ["markets"],
  kicker: "Research",
  asOf: "Data through Oct 23, 2026 close",
  displayTime: "Oct 30, 2026 · 12:15 PM PT",
  publishedAt: "2026-10-30T12:15:00-07:00",
  updatedAt: "2026-10-30T12:15:00-07:00",
  ogImage: `/og/${slug}-og.png`,
  ogAlt: "CosAnalyst card: QQQ -4% days, what came next? 128 events since 1999",
  body: [
    {
      type: "figure",
      src: `/og/${slug}.png`,
      alt: "CosAnalyst card: QQQ -4% days. Median 21-day return +0.40% for all 128 events, +3.19% excluding 2000-02 and 2008, +2.39% in the last 10 years",
      caption: "BOOK FACT · NOT A TICKET",
    },
    {
      type: "lede",
      text: "QQQ fell about 4.3% as of 11:36 AM PT today, with the Nasdaq 100 near -5% intraday in an Intel-led chip selloff ([why QQQ is down today](/articles/why-is-qqq-down-today-intel-chip-selloff-vix-20-2026-10-30/)). So what usually happens next? We pulled every QQQ close down 4% or more since 1999. There are 128 of them, and the answer depends heavily on whether the market was in a bear market at the time.",
    },
    {
      type: "stats",
      items: [
        { label: "Events since 1999", value: "128", note: "QQQ closes down 4% or more" },
        { label: "Median next day", value: "+0.17%", note: "All events, 52% positive" },
        { label: "Median 21 days, ex 2000-02 & 2008", value: "+3.19%", note: "36 events, 69% positive" },
        { label: "Another -4% day within 5 days", value: "47%", note: "All events" },
      ],
    },
    { type: "h2", text: "What happens after QQQ drops 4% in a day?" },
    {
      type: "p",
      text: "Across all 128 events, the typical result was close to flat. The median next-day return was +0.17%, the median return to the end of the following week was +0.02%, and the median 21-trading-day return was +0.40%. QQQ was higher about half the time at every horizon (52%, 50% and 52%). Averages ran higher than medians (+0.39%, +0.67% and +1.05%) because of a few very large rebounds.",
    },
    {
      type: "figure",
      src: img("qqq-4pct-median-forward-returns.png"),
      alt: "Bar chart of median QQQ returns after a 4% drop. All events: next day +0.17%, next week +0.02%, 21 days +0.40%. Excluding 2000-02 and 2008: +0.79%, +0.55%, +3.19%. Last 10 years: +1.01%, +0.79%, +2.39%.",
      caption: "Median forward return after a QQQ close down 4% or more, by group.",
    },
    { type: "h2", text: "Why the bear markets change the answer" },
    {
      type: "p",
      text: "Most of these drops happened in two stretches. 75 of the 128 events came in 2000 through 2002, during the dot-com bust, and 17 more came in 2008. That is 92 of 128, or about 72%. In those periods a 4% drop was often followed by more selling, which pulls the full-sample numbers toward zero.",
    },
    {
      type: "figure",
      src: img("qqq-4pct-events-timeline.png"),
      alt: "Timeline of all 128 QQQ drops of 4% or more since 1999. 75 in 2000-2002, 17 in 2008, 9 in 2020, 8 in 2022, 4 in 2025-26. The deepest was -11.98% on March 16, 2020.",
      caption: "Every QQQ close down 4% or more, March 1999 to October 23, 2026.",
    },
    {
      type: "p",
      text: "Remove 2000-2002 and 2008 and 36 events remain. Their median returns were +0.79% the next day, +0.55% to the end of the next week and +3.19% over 21 trading days. In the last 10 years (since Oct 30, 2016), the 24 events showed +1.01%, +0.79% and +2.39%. The deepest single drop in the data was -11.98% on March 16, 2020.",
    },
    { type: "h2", text: "How often was QQQ higher after a 4% drop?" },
    {
      type: "figure",
      src: img("qqq-4pct-percent-positive.png"),
      alt: "Bar chart of the share of QQQ 4% drop events with a positive return. All: 52% next day, 50% next week, 52% at 21 days. Excluding 2000-02 and 2008: 67%, 56%, 69%. Last 10 years: 71%, 54%, 62%.",
      caption: "Share of events with a positive return at each horizon.",
    },
    {
      type: "list",
      items: [
        "**All 128 events:** higher 52% of the time the next day, 50% by the end of next week and 52% after 21 trading days.",
        "**Excluding 2000-02 and 2008 (36):** 67%, 56% and 69%.",
        "**Last 10 years (24):** 71%, 54% and 62%.",
      ],
    },
    {
      type: "p",
      text: "The end-of-next-week window was the weakest in every group. Big down days tend to come in clusters: 47% of all events were followed by another 4% drop within five trading days. That rate was 28% excluding 2000-02 and 2008, and 33% in the last 10 years.",
    },
    { type: "h2", text: "The 10 most recent QQQ 4% drops" },
    {
      type: "figure",
      src: img("qqq-4pct-recent-10-table.png"),
      alt: "Table of the 10 most recent QQQ drops of 4% or more, from May 5, 2022 to June 5, 2026, with next-day, next-week and 21-day returns.",
      caption: "Returns measured from the drop-day close.",
    },
    {
      type: "table",
      columns: ["Date", "Drop day", "Next day", "Next week", "21 days"],
      rows: [
        ["Jun 5, 2026", "-4.80%", "+1.56%", "+2.31%", "+1.02%"],
        ["Apr 10, 2025", "-4.25%", "+1.84%", "-0.47%", "+13.82%"],
        ["Apr 4, 2025", "-6.21%", "+0.24%", "+7.51%", "+13.90%"],
        ["Apr 3, 2025", "-5.35%", "-6.21%", "+0.83%", "+7.83%"],
        ["Sep 13, 2022", "-5.48%", "+0.79%", "-6.02%", "-10.41%"],
        ["Aug 26, 2022", "-4.10%", "-0.99%", "-3.99%", "-10.56%"],
        ["Jun 16, 2022", "-4.04%", "+1.22%", "+8.77%", "+10.13%"],
        ["Jun 13, 2022", "-4.65%", "+0.18%", "+7.18%", "+4.29%"],
        ["May 18, 2022", "-4.91%", "-0.54%", "+6.17%", "-5.65%"],
        ["May 5, 2022", "-5.04%", "-1.20%", "-3.53%", "-1.85%"],
      ],
      caption: "Source: Yahoo Finance daily adjusted closes. Next week = last close of the following calendar week.",
    },
    {
      type: "p",
      text: "The recent record is split. The April 2025 drops were followed by strong 21-day gains, while the 2022 drops, which came during a bear market, were often followed by further losses.",
    },
    { type: "h2", text: "Methodology" },
    {
      type: "list",
      items: [
        "**Data:** QQQ daily adjusted closes from Yahoo Finance, March 10, 1999 to October 23, 2026. Today's drop is not in the study because the data source had no bars after October 23 at the time of the pull.",
        "**Event:** an adjusted close at least 4.00% below the prior adjusted close. Intraday drops that recovered above -4% by the close do not count.",
        "**Next day:** close to close, the following trading day.",
        "**Next week:** from the event close to the last close of the following calendar week (Monday to Friday).",
        "**21 days:** 21 trading days after the event close, about one month.",
        "**Groups:** all 128 events; 36 events excluding 2000-2002 and 2008; 24 events since October 30, 2016.",
        "**Limits:** overlapping events are each counted, so clusters weigh more. Past results do not predict future returns.",
      ],
    },
    { type: "h2", text: "FAQ" },
    { type: "h3", text: "What happens after QQQ drops 4% in a day?" },
    {
      type: "p",
      text: "Across 128 QQQ closes down 4% or more from 1999 to October 23, 2026, the median return was +0.17% the next day and +0.40% after 21 trading days, and QQQ was higher about half the time. Excluding the 2000-02 and 2008 bear markets, the median 21-day return was +3.19% and 69% of cases were higher.",
    },
    { type: "h3", text: "How often does QQQ fall 4% in one day?" },
    {
      type: "p",
      text: "It happened 128 times from March 1999 to October 23, 2026, but 92 of those came in 2000-2002 and 2008. In the last 10 years there were 24 such days, including 9 in 2020 and 8 in 2022.",
    },
    { type: "h3", text: "Does QQQ usually bounce the day after a 4% drop?" },
    {
      type: "p",
      text: "Slightly more often than not. QQQ rose the next day in 52% of all cases, 67% excluding 2000-02 and 2008, and 71% in the last 10 years. But 47% of all events were followed by another 4% drop within five trading days.",
    },
    { type: "h3", text: "Is the stock market going to keep falling?" },
    {
      type: "p",
      text: "No one can say. History shows a wide range of outcomes after a 4% QQQ drop, from strong rebounds in April 2025 to further losses in 2022. These figures describe the past and are not a forecast.",
    },
    {
      type: "callout",
      text: "Disclaimer: This article is for informational and educational purposes only and is not financial advice. Past performance does not guarantee future results. Do your own research or talk to a licensed professional before making investment decisions.",
    },
    {
      type: "p",
      text: "Source: Yahoo Finance daily adjusted closes for QQQ, March 1999 to October 23, 2026. Calculations by CosAnalyst.",
    },
    {
      type: "p",
      text: "Follow [@CosAnalyst on X](https://x.com/CosAnalyst) for live market reads, and join our free Telegram channel [@CosAnalystSignals](https://t.me/CosAnalystSignals).",
    },
  ],
};

export default article;
