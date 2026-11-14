import type { Article } from "@/content/types";

const SLUG = "is-the-us-about-to-strike-iran-what-it-means-for-oil-and-stocks-2026-11-13";
const IMG = "/articles/" + SLUG + "/";

const AP_VANCE = "https://apnews.com/article/trump-iran-vance-negotiations-d9671cbf66e3c2e337f4fb3485ad07d0";
const NBC_DEAL = "https://www.nbcnews.com/politics/donald-trump/us-doesnt-need-peace-deal-iran-vance-corruption-trump-rcna609027";
const WAPO_DEAL = "https://www.washingtonpost.com/politics/2026/11/12/trump-shuts-down-vance-iran-negotiating-efforts-says-no-deal-needed/";
const RFERL = "https://www.rferl.org/a/iran-us-sirik-bahrain-war-nuclear-talks/33897951.html";
const AP_BAHRAIN = "https://apnews.com/article/iran-us-bahrain-radar-strait-hormuz-5d73a23b5b8647d2515c35b267b36c08";
const DW = "https://www.dw.com/en/iran-bahrain-us-radar-attacks/a-79942640";
const CNBC_OIL = "https://www.cnbc.com/2026/11/13/oil-prices-set-for-second-weekly-decline-as-trump-to-stay-with-iran-blockade.html";
const CNBC_BESSENT = "https://www.cnbc.com/2026/11/13/cnbc-excerpts-us-treasury-secretary-scott-bessent-speaks-with-cnbcs-squawk-box-today.html";
const CNBC_BESSENT_MOVE = "https://www.cnbc.com/2026/11/11/us-iran-war-trump-hormuz-bessent-threats.html";
const IRANINTL_WARN = "https://www.iranintl.com/en/202611123239";
const IRANINTL_GULF = "https://www.iranintl.com/en/202611130463";
const CBC_HOLD = "https://www.cbc.ca/news/world/trump-will-hold-off-on-fresh-iran-strikes-9.7416010";
const AP_LAKENHEATH = "https://apnews.com/article/drone-military-base-uk-us-40644fc3f0d12f57d5c1f429d8d1d1e8";
const BBC_LAKENHEATH = "https://www.bbc.com/news/articles/cwj3k1g55nypo";
const STRIPES = "https://www.stripes.com/theaters/europe/2026-11-13/eucom-iran-russia-bases-threats-23452807.html";
const XINHUA_OIL = "https://english.news.cn/20261114/754f202267ed4bb493f98681c351e83a/c.html";
const REUTERS_IAEA = "https://www.al-monitor.com/originals/2026/11/iaea-increasingly-concerned-about-iranian-enrichment-plant-its-report-says";
const AP_IAEA = "https://www.latimes.com/world-nation/story/2026-11-13/iran-tells-u-n-nuclear-agency-that-monitoring-cannot-proceed-while-it-is-under-threat";
const FAA = "/articles/why-are-all-flights-grounded-faa-nationwide-ground-stop-airline-stocks-2026-11-13/";
const TENYEAR = "/articles/why-is-the-10-year-treasury-yield-above-5-percent-stocks-mortgage-rates-2026-11-13/";
const QESHM = "/articles/why-is-oil-up-today-us-strike-iran-qeshm-island-2026-11-03/";
const MIDTERMS = "/articles/will-us-strike-iran-after-midterms-november-4-oil-stocks-2026-10-30/";

const ALT =
  "CosAnalyst cream card: Drones at Bahrain, threats in D.C., oil shrugs. Brent $95.84 flat, S&P tagged 7,499.";

const article: Article = {
  "slug": SLUG,
  "title": "Is the US About to Strike Iran? What It Means for Oil and Stocks",
  "titleTag": "Is the US About to Strike Iran? Oil, Stocks and Monday's Open",
  "schemaHeadline": "Is the US About to Strike Iran? What It Means for Oil and Stocks",
  "dek": "In 48 hours the president said the US no longer needs a deal with Iran, pulled the vice president off the talks, warned Tehran over threats to a cabinet officer, and watched US forces shoot down Iranian drones aimed at Bahrain. Oil barely moved. Here is what is confirmed, what is only claimed, and the if/then map for Monday's open.",
  "metaDescription": "Is the US about to strike Iran? Trump says no deal is needed, Iranian drones were shot down over Bahrain, Bessent moved to a military base, and Gulf allies asked for restraint. What it means for oil, defense stocks and the S&P 500 Monday.",
  "date": "2026-11-13",
  "section": "macro",
  "also": ["commodities", "markets"],
  "kicker": "Iran Escalation",
  "asOf": "As of about 4:15 PM PT Nov 13, 2026",
  "displayTime": "Nov 13, 2026 · 4:15 PM PT",
  "publishedAt": "2026-11-13T14:30:00-08:00",
  "updatedAt": "2026-11-13T19:15:00-08:00",
  "ogImage": "/og/" + SLUG + "-og.png",
  "ogAlt": ALT,
  "schemaImages": [
    "/og/" + SLUG + ".png",
    "/og/" + SLUG + "-4x3.png",
    "/og/" + SLUG + "-1x1.png"
  ],
  "body": [
    { "type": "figure", "src": "/og/" + SLUG + ".png", "alt": ALT, "width": 1600, "height": 900, "caption": "Sources: CENTCOM statement via RFE/RL and AP, Truth Social post via NBC News, CNBC, TradingView settlement data as of the Nov 13, 2026 close." },
    { "type": "lede", "text": "Short answer: not yet, and the people closest to the decision are pulling in opposite directions. President Trump said Thursday the US doesn't need a deal with Iran (\"Those days have long since passed... we've got their Strait!\") and moved Vice President Vance off the negotiations ([AP](" + AP_VANCE + "), [NBC News](" + NBC_DEAL + ")). Hours later Iran sent two attack drones toward Bahrain, home of the Navy's Fifth Fleet, and US forces shot both down ([RFE/RL](" + RFERL + ")). But Trump also says Saudi Arabia and four other Gulf states asked him to hold off on bigger strikes, and he is holding off for now ([Iran International](" + IRANINTL_GULF + ")). Oil closed the day flat." },
    { "type": "p", "text": "**UPDATE 7:15 PM PT, Nov 13**" },
    { "type": "p", "text": "**Secretary of State Marco Rubio said Friday that more US military action against Iran is not needed. In a speech to the Federalist Society, he said \"the economic pain that we are inflicting on that regime is so great that there's no need for military action because we've weakened them so much,\" and added that victory means Iran never gets a nuclear weapon (AP). Separately, the administration extended the Jones Act shipping waiver for another 90 days, starting Nov 16 and running through Feb 14, 2027, so foreign-flagged ships can keep moving oil and other commodities between US ports (CBP notice, Reuters). For traders, Rubio's words lower the odds of a fresh US strike this weekend, but Friday's Iranian drone launch toward Bahrain and the mine claims in the Strait of Hormuz keep the risk alive. Oil futures reopen Sunday at 3 PM PT.**" },
    { "type": "p", "text": "**UPDATE 4:15 PM PT, Nov 13**" },
    { "type": "p", "text": "**The UN nuclear watchdog says it is \"increasingly concerned\" about Iran's underground Isfahan Fuel Enrichment Plant, which Iran declared in June 2025 but has never let inspectors visit. In a confidential report to member states seen by **[Reuters](" + REUTERS_IAEA + ")** and **[the Associated Press](" + AP_IAEA + ")**, the IAEA said it \"does not know IFEP's exact location, status for safeguards purposes or whether it contains nuclear material.\" Iran told the agency that inspections cannot resume while the US president keeps threatening strikes on its nuclear facilities.**" },
    { "type": "p", "text": "**Why it matters for markets: the nuclear file is the clearest trigger for the strike case. A fresh watchdog warning plus Tehran's refusal gives hawks a new argument, even as the White House leans on the blockade instead of bombs. Oil futures are closed until Sunday at 3 PM PT, so that open is the first market read on it.**" },
    { "type": "p", "text": "That gap between loud headlines and a quiet oil tape is the whole setup for Monday. This page sorts what is confirmed from what is only claimed, then lays out what each path means for oil, defense names and the S&P 500. We will update it, and publish fresh pieces, as the weekend develops." },
    { "type": "h2", "text": "What happened in the last 48 hours" },
    { "type": "list", "items": [
      "**Thursday, Nov 12: no deal needed.** In a Truth Social post, Trump wrote \"We don't need a deal with Iran. Those days have long since passed. We've got their money, Hundreds of Billions of Dollars, and we've got their Strait!\" He told Vance to focus on crime and corruption at home instead ([NBC News](" + NBC_DEAL + "), [Washington Post](" + WAPO_DEAL + ")). The Post reported he is leaning on the naval blockade and economic pressure rather than talks.",
      "**Thursday night: a strike at Sirik.** Iran's IRNA said an \"enemy\" strike hit a telecommunications tower in Sirik, Hormozgan Province, on the Hormuz coast. It did not name the attacker. Sirik hosts part of Iran's radar and communications network watching the strait ([RFE/RL](" + RFERL + ")).",
      "**Friday, Nov 13: drones at Bahrain.** Iran's Revolutionary Guard (IRGC) said it destroyed a US early-warning radar in Bahrain in retaliation. CENTCOM called that false: \"The IRGC launched two one-way attack drones toward Bahrain and both were shot down by US forces. There were no injuries or damage\" ([RFE/RL](" + RFERL + "), [AP](" + AP_BAHRAIN + "), [DW](" + DW + ")).",
      "**Tankers in the strait.** Iran's military said Thursday that four oil tankers were hit by explosions in the Strait of Hormuz after ignoring warnings, and its army said two caught fire after hitting naval mines. Reuters could not independently verify the Iranian accounts ([CNBC/Reuters](" + CNBC_OIL + "), [RFE/RL](" + RFERL + "))."
    ] },
    { "type": "figure", "src": IMG + "strait-of-hormuz-map-cia-2009.webp", "srcSet": [[IMG + "strait-of-hormuz-map-cia-2009-800w.webp", 800], [IMG + "strait-of-hormuz-map-cia-2009.webp", 1200]], "width": 1200, "height": 1292, "alt": "Map of the Strait of Hormuz showing Iran, Oman, the UAE, shipping lanes and Sirik-e Kohneh, reference map", "caption": "Reference map: the Strait of Hormuz and its shipping lanes, with Sirik on Iran's coast, October 2009. Map: U.S. Central Intelligence Agency (public domain, via [Library of Congress](https://www.loc.gov/item/2009583341/) and [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2009_Iran_Strait_of_Hormuz_by_the_CIA.png)).", "credit": "U.S. Central Intelligence Agency", "license": "Public domain", "licenseUrl": "https://commons.wikimedia.org/wiki/File:2009_Iran_Strait_of_Hormuz_by_the_CIA.png", "sourcePage": "https://commons.wikimedia.org/wiki/File:2009_Iran_Strait_of_Hormuz_by_the_CIA.png" },
    { "type": "h2", "text": "The threats against a cabinet officer" },
    { "type": "p", "text": "Treasury Secretary Bessent confirmed Friday on CNBC that he moved from his Washington home to a military base on Secret Service instructions after Iranian death threats. \"I'm not going to be cowered that they have initiated death threats against me, the other members of the cabinet,\" he said, adding that the threats show the Treasury's \"Operation Economic Outcast\" sanctions campaign is working ([CNBC](" + CNBC_BESSENT + ")). CNBC first confirmed the move on Wednesday through a person familiar with the situation ([CNBC](" + CNBC_BESSENT_MOVE + "))." },
    { "type": "p", "text": "Asked in a Salem News Channel interview Thursday what would happen if Iran killed a senior US official, Trump said Iran would \"not exist very long any longer\" ([Iran International](" + IRANINTL_WARN + "), [RFE/RL](" + RFERL + ")). Some outlets render the quote slightly differently, but the meaning is the same. In the same interview he said he would have \"no hesitation\" using force to stop Iran threatening allies and ships." },
    { "type": "figure", "src": IMG + "uss-new-orleans-mina-salman-pier-bahrain-file-photo-2009.webp", "srcSet": [[IMG + "uss-new-orleans-mina-salman-pier-bahrain-file-photo-2009-800w.webp", 800], [IMG + "uss-new-orleans-mina-salman-pier-bahrain-file-photo-2009.webp", 1600]], "width": 1600, "height": 1071, "alt": "Navy amphibious ship USS New Orleans pulling into Mina Salman pier in Bahrain, file photo", "caption": "File photo: USS New Orleans pulls into Mina Salman pier in Bahrain, where the Navy's Fifth Fleet is based, March 2009. Photo: U.S. Navy / Mass Communication Specialist 2nd Class David K. Simmons (public domain, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:US_Navy_090321-N-8053S-130_The_amphibious_transport_dock_ship_USS_New_Orleans_(LPD_18)_pulls_into_Mina_Salman_pier_in_Bahrain.jpg)).", "credit": "U.S. Navy / MC2 David K. Simmons", "license": "Public domain", "licenseUrl": "https://commons.wikimedia.org/wiki/File:US_Navy_090321-N-8053S-130_The_amphibious_transport_dock_ship_USS_New_Orleans_(LPD_18)_pulls_into_Mina_Salman_pier_in_Bahrain.jpg", "sourcePage": "https://commons.wikimedia.org/wiki/File:US_Navy_090321-N-8053S-130_The_amphibious_transport_dock_ship_USS_New_Orleans_(LPD_18)_pulls_into_Mina_Salman_pier_in_Bahrain.jpg" },
    { "type": "h2", "text": "Why a bigger strike is not locked in" },
    { "type": "p", "text": "The brake is the neighbors. \"Saudi Arabia has asked me to please just let it be the way it is now for a while,\" Trump said in a White House interview Thursday, adding that Qatar, Kuwait, the UAE and Bahrain want the same. \"I'm not sure I agree with it,\" he said, and asked if he would have launched more attacks without those requests: \"Yes, I would\" ([Iran International](" + IRANINTL_GULF + "))." },
    { "type": "p", "text": "He first said he would hold off on new strikes on Monday, Nov 9, after meeting Qatar's prime minister, the main go-between with Tehran, while keeping the naval blockade in place ([CBC/Reuters](" + CBC_HOLD + ")). So the current policy is pressure without a new air campaign. The question for the weekend is whether drones, tankers and threats push him off it. Our earlier pieces on [whether the US would strike after the midterms](" + MIDTERMS + ") and the [Qeshm island strike](" + QESHM + ") cover how we got here." },
    { "type": "h2", "text": "US bases in England on high alert" },
    { "type": "p", "text": "The tension is not only in the Gulf. On Monday, Nov 9, at least nine KC-135 tankers and three CV-22 Ospreys left RAF Mildenhall after what the Wall Street Journal reported was a threat from Iran, and Mildenhall and nearby RAF Lakenheath were raised to Force Protection Condition Charlie, the second-highest level, according to multiple reports ([Stars and Stripes](" + STRIPES + "))." },
    { "type": "p", "text": "On Friday evening UK time, Air Force security forces at Lakenheath responded to \"suspected unauthorized drone activity.\" The Air Force said no personnel, aircraft or infrastructure were affected ([AP](" + AP_LAKENHEATH + ")), and the local MP said the incident is resolved with no threat to the public ([BBC](" + BBC_LAKENHEATH + ")). No one has publicly said who flew the drones." },
    { "type": "figure", "src": IMG + "f-35-fighter-jets-raf-lakenheath-england-file-photo-2025.webp", "srcSet": [[IMG + "f-35-fighter-jets-raf-lakenheath-england-file-photo-2025-800w.webp", 800], [IMG + "f-35-fighter-jets-raf-lakenheath-england-file-photo-2025.webp", 1600]], "width": 1600, "height": 1064, "alt": "F-35 fighter jets on the flight line at RAF Lakenheath, England, under a rainbow, file photo", "caption": "File photo: U.S. Air Force and Royal Air Force F-35s during hot-pit refueling at RAF Lakenheath, England, January 2025. Photo: U.S. Air Force / Senior Airman Seleena Muhammad-Ali (public domain, via [DVIDS](https://www.dvidshub.net/image/8854624)).", "credit": "U.S. Air Force / SrA Seleena Muhammad-Ali", "license": "Public domain", "licenseUrl": "https://www.dvidshub.net/about/copyright", "sourcePage": "https://www.dvidshub.net/image/8854624" },
    { "type": "h2", "text": "Is the FAA ground stop connected?" },
    { "type": "p", "text": "Not according to officials. Friday's nationwide FAA ground stop was blamed on a telecom outage, and Homeland Security said there was no sign of an attack. No official has linked it to Iran. Our [FAA ground stop explainer](" + FAA + ") has the details." },
    { "type": "h2", "text": "What the market did Friday" },
    { "type": "p", "text": "For all the noise, oil traders mostly shrugged. WTI crude for December settled at $88.56, down 18 cents, and Brent for January settled at $95.84, up 2 cents ([Xinhua](" + XINHUA_OIL + ")). Both fell about 3% for the week, their second straight weekly drop (TradingView), as the market read the blockade-over-bombs stance as lowering the odds of renewed large-scale fighting ([CNBC/Reuters](" + CNBC_OIL + "))." },
    { "type": "table", "columns": ["Market", "Friday close", "Day", "Week"], "rows": [
      ["S&P 500", "7,561.67", "-0.40%", "+2.5%"],
      ["WTI crude (Dec)", "$88.56", "-0.2%", "-2.9%"],
      ["Brent crude (Jan)", "$95.84", "+0.02%", "-3.1%"],
      ["Gold futures", "$3,886.30", "+0.03%", "-5.2%"],
      ["XLE ETF (energy)", "$64.96", "+1.0%", "+5.8%"],
      ["XAR ETF (aerospace and defense)", "$230.69", "-1.2%", "+6.4%"],
      ["Lockheed Martin (LMT)", "$596.04", "-1.3%", "+4.8%"],
      ["VIX", "19.30", "+3.2%", ""]
    ], "caption": "Source: TradingView closing data, Nov 13, 2026; oil settlements confirmed by Xinhua. Week = change vs the Nov 6 close." },
    { "type": "p", "text": "Two numbers stand out. The S&P 500 dipped to 7,499.40 intraday, just under the 7,500 line, before closing at 7,561.67 (TradingView). And gold fell about 5% on the week despite the war headlines, because the 10-year Treasury yield is back above 5% and higher yields make a no-yield metal less attractive ([our 10-year yield page](" + TENYEAR + "))." },
    { "type": "figure", "src": IMG + "strait-of-hormuz-navy-ships-transit-file-photo-2023.webp", "srcSet": [[IMG + "strait-of-hormuz-navy-ships-transit-file-photo-2023-800w.webp", 800], [IMG + "strait-of-hormuz-navy-ships-transit-file-photo-2023.webp", 1600]], "width": 1600, "height": 1067, "alt": "Navy helicopter flying over a supply ship transiting the hazy Strait of Hormuz, file photo", "caption": "File photo: Ships from the Dwight D. Eisenhower Carrier Strike Group transit the Strait of Hormuz, December 2023. Photo: U.S. Navy / Mass Communication Specialist 3rd Class Janae Chambers (public domain, via [DVIDS](https://www.dvidshub.net/image/8170044)).", "credit": "U.S. Navy / MC3 Janae Chambers", "license": "Public domain", "licenseUrl": "https://www.dvidshub.net/about/copyright", "sourcePage": "https://www.dvidshub.net/image/8170044" },
    { "type": "h2", "text": "Monday's open: if/then scenarios" },
    { "type": "list", "items": [
      "**If the weekend brings a broad US strike on Iran,** expect WTI crude to gap up, the XLE ETF and defense names to lead, and airlines to lag. The S&P 500's 7,500 area, Friday's intraday low, becomes the first test.",
      "**If it stays tit-for-tat (drones intercepted, tanker claims, no new air campaign),** the market has already shown it will look through it. Oil stays range-bound near Friday's settlements, and rates and Nvidia earnings next week matter more for stocks than Iran.",
      "**If tankers keep getting hit and traffic through Hormuz slows,** this is the oil-supply scenario. Brent pushing back toward its October highs above $100 would reprice inflation fears on top of a 10-year yield already above 5%.",
      "**If Gulf mediation produces talks, or the White House softens its no-deal stance,** oil likely gives back its war premium, energy and defense lose this week's gains, and the S&P 500 is free to trade on rates and earnings.",
      "**If an attack on US personnel or officials is confirmed,** Trump's own words point to a fast, large response. That is the tail risk that would move every market at once."
    ] },
    { "type": "h2", "text": "FAQ" },
    { "type": "h3", "text": "What did the IAEA say about Iran on November 13, 2026?" },
    { "type": "p", "text": "In a confidential report seen by Reuters and the AP, the IAEA said it is increasingly concerned that Iran has not let inspectors visit the Isfahan Fuel Enrichment Plant, and that it does not know the plant's exact location, safeguards status or whether it holds nuclear material. Iran says inspections cannot resume while it faces US threats of more strikes." },
    { "type": "h3", "text": "Is the US about to strike Iran?" },
    { "type": "p", "text": "As of Friday, Nov 13, Trump says he is holding off on broader strikes because Saudi Arabia, Qatar, Kuwait, the UAE and Bahrain asked him to, though he says he is not sure he agrees. He has also said he would have \"no hesitation\" using force if Iran threatens allies or ships." },
    { "type": "h3", "text": "Did Iran attack US forces in Bahrain?" },
    { "type": "p", "text": "Iran's Revolutionary Guard launched two one-way attack drones toward Bahrain. CENTCOM says both were shot down with no injuries or damage, and it denies Iran's claim that a US radar was destroyed." },
    { "type": "h3", "text": "Why was Treasury Secretary Bessent moved to a military base?" },
    { "type": "p", "text": "Bessent said on CNBC that he moved from his home to a military base on Secret Service instructions after Iranian death threats. He leads the Treasury's sanctions campaign against Iran." },
    { "type": "h3", "text": "Why didn't oil prices jump?" },
    { "type": "p", "text": "Traders read Trump's choice to keep the blockade instead of restarting a bombing campaign as lowering the odds of a major supply shock. WTI settled at $88.56 and Brent at $95.84 Friday, both down about 3% on the week." },
    { "type": "h3", "text": "Are US bases in the UK on alert because of Iran?" },
    { "type": "p", "text": "Multiple reports say RAF Lakenheath and RAF Mildenhall were raised to Force Protection Condition Charlie after a reported Iranian threat. The Air Force said a suspected drone incident at Lakenheath on Friday affected no personnel, aircraft or infrastructure." },
    { "type": "h3", "text": "Is the FAA ground stop related to Iran?" },
    { "type": "p", "text": "Officials say no. The FAA blamed a telecom outage, and Homeland Security said there was no sign of an attack." },
    { "type": "h3", "text": "Is the US planning more military strikes on Iran?" },
    { "type": "p", "text": "Not right now, according to Secretary of State Marco Rubio. On Nov 13 he said economic pressure on Iran is so great that more military action is not needed, though he said the goal is still making sure Iran never gets a nuclear weapon." },
    { "type": "callout", "text": "Not financial advice. This is scenario analysis, not a recommendation to buy or sell anything. Statements, claims and prices are as of about 2:30 PM PT Nov 13, 2026, and Iranian claims cited here have not been independently verified. Nothing here guarantees any market outcome." },
    { "type": "p", "text": "Follow [@CosAnalyst on X](https://x.com/CosAnalyst), like the [CosAnalyst Facebook Page](https://www.facebook.com/profile.php?id=61595911140925), and join our Telegram at [@CosAnalystSignals](https://t.me/CosAnalystSignals) for weekend updates." },
    { "type": "p", "text": "**Your call:** Does Trump strike Iran before Monday's open, or do the Gulf allies keep him on the blockade-only path? Pick a side in the comments." }
  ]
};

export default article;
