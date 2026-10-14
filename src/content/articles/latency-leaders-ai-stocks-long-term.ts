import type { Article } from "@/content/types";

const article: Article = {
  "slug": "latency-leaders-ai-stocks-long-term",
  "title": "The Shortest Road: Who Really Owns the Speed of AI",
  "dek": "AI latency stocks, sorted by where the delay really lives. SpaceX says the sky is the shortest road to AI. The filings say most of the wait is inside the data center. A sourced long-term look at SPCX, NVDA, AVGO, ANET, CRDO, ALAB, LITE, COHR and NET, plus a field guide for spotting the next latency leader.",
  "date": "2026-10-14",
  "section": "research",
  "also": [
    "equities",
    "markets"
  ],
  "kicker": "CosAnalyst Research Feature",
  "asOf": "Tue Oct 13, 2026, after the US cash close. Prices are Oct 13 closes via TradingView unless noted.",
  "ogImage": "/og/latency-leaders-ai-stocks-long-term.png",
  "ogAlt": "The shortest road. Who owns the speed of AI? @CosAnalyst",
  "body": [
    {
      "type": "figure",
      "src": "/og/latency-leaders-ai-stocks-long-term.png",
      "alt": "The shortest road. Who owns the speed of AI? AI latency stocks: SPCX, NVDA, AVGO, ANET, CRDO, ALAB, LITE, COHR, NET. @CosAnalyst",
      "caption": "BOOK FACT · NOT A TICKET"
    },
    {
      "type": "lede",
      "text": "In the winter before the line opened, in the Allegheny Mountains of Pennsylvania, construction crews ran rock saws through granite until the blades glowed white in the cold air. On a good day in that stone they advanced about 100 feet. They were digging a one-inch hole for a fiber cable, and the cable had one job: to carry trades between Chicago and New Jersey a little faster than anything else on Earth."
    },
    {
      "type": "p",
      "text": "When the last splice was made in July 2010, the route ran about 825 miles and was rated at 13.3 milliseconds. That was 3 milliseconds faster than the previous best path. Forbes estimated the project cost approached $300 million. A professor quoted in that story called three milliseconds \"close to an eternity in automated trading\" ([Forbes, 2010](https://www.forbes.com/forbes/2010/0927/outfront-netscape-jim-barksdale-daniel-spivey-wall-street-speed-war.html))."
    },
    {
      "type": "p",
      "text": "Three hundred million dollars for three thousandths of a second. It sounded insane to everyone except the people who paid for it."
    },
    {
      "type": "p",
      "text": "Sixteen years later the same argument is back, measured in trillions of dollars instead of millions, and pointed at the sky."
    },
    {
      "type": "h2",
      "text": "The post"
    },
    {
      "type": "p",
      "text": "On October 7, 2026 (Pacific time), an X account called @SPCX100T posted what it called \"extra alpha\" about SpaceX, which now trades on Nasdaq as $SPCX ([source post](https://x.com/SPCX100T/status/2108024851139277039)). The post is a single long note, not a thread. The author's only follow-ups in the conversation are two short replies (\"Connecting all the dots\" and \"I see this from years ago\"). There is no linked article."
    },
    {
      "type": "p",
      "text": "The claim, in the author's words: \"the AI / SI race isn't about chips anymore. It's about latency.\""
    },
    {
      "type": "p",
      "text": "The argument runs like this. Every AI query today crosses \"roughly a dozen network hops\" (phone, carrier, undersea cables, firewalls, load balancers) before reaching a GPU cluster. That is \"why AI feels slow.\" Starlink satellites orbit at 550 km, light reaches them in \"about 2 milliseconds,\" and so a satellite network with compute in orbit becomes \"the shortest path between human thought and machine intelligence.\" Whoever owns that layer owns the future. Latency, he says, is the new $WTI. Without Starship-class launch cadence, he concludes, nobody else can put that much compute that close to the user."
    },
    {
      "type": "p",
      "text": "It is a good story. Parts of it are true. Parts of it are wrong in ways that matter for your money. And hidden inside it is a better thesis than the one the author wrote."
    },
    {
      "type": "h2",
      "text": "What the physics actually says"
    },
    {
      "type": "p",
      "text": "Start with what checks out."
    },
    {
      "type": "p",
      "text": "Light in a vacuum travels 299,792 km per second. At 550 km, a one-way trip straight up takes about 1.8 milliseconds, so \"about 2 milliseconds\" is fair. The altitude is also already out of date in a way that helps the author: during 2026 SpaceX has been lowering roughly 4,400 Starlink satellites from about 550 km to about 480 km, mainly for safety and faster deorbiting ([Space.com](https://www.space.com/space-exploration/satellites/spacex-lowering-orbits-of-4-400-starlink-satellites-for-safetys-sake)). At 480 km the one-way trip is about 1.6 milliseconds."
    },
    {
      "type": "p",
      "text": "The more interesting physics is sideways, not up. Glass fiber has a refractive index of around 1.5, so light inside a cable moves at roughly two-thirds of its vacuum speed. Researchers studying laser links between satellites point out that this gives optical networks in space \"a critical advantage over optical fiber terrestrial networks in terms of latency for long-distance inter-continental data communications\" ([arXiv 2208.11225](https://export.arxiv.org/pdf/2208.11225v1.pdf)). Per 1,000 km, that is about 3.3 ms in vacuum versus about 5 ms in fiber (our arithmetic). Over an ocean, the sky really is a faster road. Starlink has been building that road for years. In early 2024 a SpaceX engineer described about 9,000 lasers in the constellation carrying more than 42 petabytes a day, with links of up to 200 Gbps ([PCMag](https://www.pcmag.com/news/starlinks-laser-system-is-beaming-42-million-gb-of-data-per-day)). On the Q2 2026 call, SpaceX said roughly 10,200 satellites were in orbit, with 9,600 broadband satellites delivering about 800 terabits per second of downlink capacity ([Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/08/11/spacex-spcx-q2-2026-earnings-call-transcript/))."
    },
    {
      "type": "p",
      "text": "Now what does not check out."
    },
    {
      "type": "p",
      "text": "**\"No ground stations in between.\"** That is not how Starlink works today. The same SpaceX engineer who described the laser mesh said it plainly: \"as long as we have some path to the ground [station], you're going to have 99.99% uptime\" ([PCMag](https://www.pcmag.com/news/starlinks-laser-system-is-beaming-42-million-gb-of-data-per-day)). Ookla even credits the UK's good Starlink latency to its \"dense ground station and traffic breakout ecosystem\" ([Broadcast and CableSat, citing Ookla](https://www.broadcastandcablesat.co.in/in-europe-starlink-finds-its-sweet-spot-ookla-2/))."
    },
    {
      "type": "p",
      "text": "**Two milliseconds is the floor, not the experience.** SpaceX's own [Starlink 2025 Progress Report](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) puts median global latency \"around 26 ms,\" measured at peak hours on its own terminals, with a goal of \"stable 20 ms median latency.\" Ookla's US Speedtest data shows a median multi-server latency of 39 ms in Q1 2026. The best states in late 2025 were around 37 ms ([Ookla](https://www.ookla.com/articles/starlink-hits-new-us-highs)). Across 27 European markets the Q1 2026 median was 49 ms ([Broadcast and CableSat](https://www.broadcastandcablesat.co.in/in-europe-starlink-finds-its-sweet-spot-ookla-2/)). Those are excellent numbers for satellite internet. They are not two milliseconds."
    },
    {
      "type": "p",
      "text": "**\"That's why AI feels slow.\"** This is the big one. Ask a model a hard question and watch what happens. The network delivers your prompt in tens of milliseconds. Then you wait, sometimes for many seconds, while the model thinks and writes. The waiting is mostly inside the data center."
    },
    {
      "type": "p",
      "text": "NVIDIA said as much when it put its Groq 3 LPX inference accelerator into full production in August. The company describes agentic AI as two problems: \"efficiently processing enormous amounts of context and generating tokens with extremely low latency.\" LPX posted a record 3,400 output tokens per second on Gemma 4 31B with a 100,000-token context in Artificial Analysis testing ([NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-groq-3-lpx-now-in-full-production-with-world-class-speed-for-agentic-ai)). At that pace a 1,000-token answer takes about 0.3 seconds. At a hypothetical 100 tokens per second it takes 10 seconds (our arithmetic, for illustration). Compare that with the 26 to 49 ms the network adds and the conclusion is hard to escape. The slowest leg of the trip is the thinking, and the thinking happens on chips, memory and the wires between them."
    },
    {
      "type": "p",
      "text": "NVIDIA paid about $20 billion for a non-exclusive license to Groq's technology and key staff in December 2025 ([CNBC](https://www.cnbc.com/2025/12/24/nvidia-buying-ai-chip-startup-groq-for-about-20-billion-biggest-deal.html)). You do not spend $20 billion on a problem that lives in the last mile."
    },
    {
      "type": "p",
      "text": "So the author is right that latency is the next frontier. He is wrong about where most of it lives. \"It's not about chips anymore\" gets it backwards. In 2026 latency **is** a chip problem, a memory problem, a switch problem and a laser problem, long before it is a satellite problem."
    },
    {
      "type": "h2",
      "text": "A better thesis: three roads, one toll"
    },
    {
      "type": "p",
      "text": "Here is the thesis this desk will defend."
    },
    {
      "type": "p",
      "text": "**The time it takes an AI system to answer is made of three roads.** The last mile runs from you to the network. The long haul runs between cities and continents. The short road runs inside the data center, from memory to processor, from chip to chip, from rack to rack. The short road is where most of the delay is today and where most of the money is being spent. The long haul and the last mile matter more as AI becomes interactive, mobile and physical, which is where SpaceX's case is strongest."
    },
    {
      "type": "p",
      "text": "**The best long-term investments own a toll booth on one of those roads, and they can prove it in their numbers.** Not in a narrative. In revenue mix, design wins, customer capex, margins and price action."
    },
    {
      "type": "p",
      "text": "The scale of the toll is not in doubt. Alphabet raised its 2026 capex guidance to $195 billion to $205 billion and said about 40% of its Q2 technical infrastructure spend went to data centers and networking equipment ([Alphabet Q2 2026 call](https://abc.xyz/investor/events/event-details/2026/2026-Q2-Earnings-Call-2026-GgTAq7Is0z/default.aspx)). Amazon now expects about $220 billion of 2026 capex, and Andy Jassy said that even at that level Amazon won't \"have enough capacity to meet all the demand we have in 2026,\" and expects the same in 2027 ([Fortune](https://fortune.com/2026/07/30/andy-jassy-amazon-capex-demand-aws-pga-tour/)). In April, Microsoft projected $190 billion of capex and finance leases for the year, and Meta told investors its number could reach $145 billion ([CNBC](https://www.cnbc.com/2026/07/28/hyperscalers-face-higher-capex-scrutiny-after-alphabet-report-panned.html))."
    },
    {
      "type": "p",
      "text": "The same CNBC report carries the warning. Alphabet's free cash flow went negative in Q2 for the first time, Amazon's long-term debt rose 81% in a quarter, and analysts expect Microsoft's free cash flow to go negative in Q4 for the first time since at least 2001. Investors have started to punish capex raises instead of cheering them. Every company below is downstream of that river. When it narrows, they all feel it."
    },
    {
      "type": "p",
      "text": "Now, the toll booths."
    },
    {
      "type": "h2",
      "text": "1. SpaceX ($SPCX): the sky road"
    },
    {
      "type": "p",
      "text": "**The bull case.** Strip away the Mars story and SpaceX's Q2 2026 report shows a superb telecom business. Connectivity revenue was $4.29 billion, up 66% year over year. Starlink subscribers doubled to 12.0 million. Connectivity operating income was $1.66 billion, a margin of about 39% (our arithmetic), and enterprise and government revenue more than doubled, up 108% ([SpaceX Q2 2026 release, SEC](https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm)). It won over $6 billion of multi-year Starshield contracts and got FCC approval for the EchoStar spectrum transfer, which matters for direct-to-cell service."
    },
    {
      "type": "p",
      "text": "Total revenue was $7.81 billion, up 92%. The AI segment, which holds xAI and X, grew revenue to $2.56 billion and turned segment adjusted EBITDA positive at $1.15 billion, helped by $14.1 billion of contracted Cloud Services Agreements. SpaceX also ended the quarter with $100 billion in cash and marketable securities after an IPO that raised about $85.7 billion and a $25 billion bond deal ([same release](https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm)). On Alphabet's own call, an analyst referred to \"the third-party compute deal with SpaceX\" ([Alphabet Q2 call](https://abc.xyz/investor/events/event-details/2026/2026-Q2-Earnings-Call-2026-GgTAq7Is0z/default.aspx)), which hints at how far the compute business already reaches."
    },
    {
      "type": "p",
      "text": "Then there is the bet the post is really about. In February SpaceX asked the FCC for authority to launch an \"Orbital Data Center System\" of up to one million satellites between 500 km and 2,000 km. In that filing it argued that launching a million tonnes of satellites a year, at 100 kW of compute per tonne, would add 100 gigawatts of AI compute a year, and that \"within a few years the lowest cost to generate AI compute will be in space\" ([FCC application narrative](https://regmedia.co.uk/2026/02/05/spacex-orbital-dc-sat-narrative.pdf)). Reuters, citing unnamed sources, reported that executives told pre-IPO investors they aim to test orbital compute by the end of 2027 ([Reuters](https://www.reuters.com/business/media-telecom/spacex-aims-launch-orbital-ai-computing-tests-by-end-next-year-sources-say-2026-06-09/)). The prospectus itself says SpaceX expects to begin deploying orbital AI compute satellites \"as early as 2028\" and calls SpaceX \"the only company with a commercially viable path to building orbital AI compute at scale\" ([S-1, SEC](https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm))."
    },
    {
      "type": "p",
      "text": "No other company can launch at that cadence. The Q2 report counts 78 launches and 1,041 metric tons to orbit in the first half alone ([SpaceX release](https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm)). If orbital compute works, the moat is real."
    },
    {
      "type": "p",
      "text": "**The bear case.** Read SpaceX's own risk language first. Its S-1 says its long-range initiatives, orbital AI compute among them, \"involve significant technical complexity, unproven technologies or technologies that do not exist, and such initiatives may not achieve commercial viability\" ([S-1, SEC](https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm)). Reuters first reported that language from an earlier filing in April ([Reuters](https://www.reuters.com/world/spacex-says-unproven-ai-space-data-centers-may-not-be-commercially-viable-filing-2026-04-21/)). Analysts at The New Space Economy note the prospectus concedes the 100 GW timeline and launch cadence \"may be difficult or impossible to determine\" ([New Space Economy](https://newspaceeconomy.ca/2026/06/01/spacexs-26-5-trillion-ai-market-a-leprechauns-pot-of-gold/))."
    },
    {
      "type": "p",
      "text": "The cash math is heavy. In Q2 alone total capex was $18.4 billion, of which $15.8 billion was AI, about six times AI revenue (our arithmetic). Operating cash flow for the whole first half was $3.47 billion. The company still lost $541 million in Q2, and AI R&D ran $2.18 billion ([SpaceX release](https://www.sec.gov/Archives/edgar/data/1181412/000162828026052515/earningsreleaseq22608042.htm)). Starlink ARPU fell to $66 a month from $85 a year earlier, about 22% lower, as growth shifts toward cheaper international markets, and management said blended ARPU may keep falling ([Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/08/11/spacex-spcx-q2-2026-earnings-call-transcript/))."
    },
    {
      "type": "p",
      "text": "Then the price. At $156.54 on October 13 ([Seeking Alpha](https://seekingalpha.com/symbol/SPCX/historical-price-quotes)) and the 13.2 billion Class A and Class B shares on the June 30 balance sheet, the equity is worth roughly $2.06 trillion, or about 66 times Q2 revenue annualized (our arithmetic). Morningstar valued SpaceX at $780 billion when it initiated coverage before the IPO ([Morningstar](https://www.morningstar.com/stocks/spacex-what-investors-need-know-about-its-enormous-upcoming-ipo)). It later set a fair value estimate of $63 a share and gave its most optimistic \"moonshot\" scenario, a reusable Starship plus orbital data centers that scale, a 7% chance ([Morningstar](https://www.morningstar.com/stocks/why-we-think-spacex-ipo-is-overvalued))."
    },
    {
      "type": "p",
      "text": "The float is thin. The IPO sold 555.6 million new Class A shares at $135, plus a 15% underwriter option. The final prospectus says about 60% of shares outstanding after the offering are locked for more than a year. That works out to roughly 4% to 5% of the company in public hands at the IPO (our arithmetic). Elon Musk's shares are locked for 366 days with no early release. Holders of about 7.8 billion shares, Musk included, are restricted until SpaceX reports its June 2027 quarter, with timed releases along the way for everyone but Musk. Most other shares carry 180-day restrictions, also with timed automatic releases. Musk holds 82.4% of the vote ([final prospectus, SEC](https://www.sec.gov/Archives/edgar/data/1181412/000162828026042639/spaceexplorationtechnologi.htm)). The stock closed its first day at $160.95 (TradingView) and sits a little below that today."
    },
    {
      "type": "p",
      "text": "**How to own the idea without owning the story.** The latency part of SpaceX worth paying for today is Connectivity: subscribers, enterprise mix and laser-mesh capacity. Treat orbital compute as an option with an unknown strike. The signals to watch: Starship V3 reaching operational orbit with V3 Starlink satellites, an actual orbital compute demonstration, and AI capex coming down as a share of AI revenue."
    },
    {
      "type": "h2",
      "text": "2. NVIDIA ($NVDA): the short road's landlord"
    },
    {
      "type": "p",
      "text": "**The bull case.** NVIDIA has quietly become a latency company. Q2 FY2027 revenue was $96.2 billion, up 106%. Data Center was $89.0 billion, about 92% of the total, and gross margin held at 75.0%. Q3 guidance is $108 billion ([NVIDIA Q2 FY27 release, SEC](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm)). On the call, the CFO said networking had \"another record quarter, with revenue growing 18% on a sequential basis,\" and Spectrum-X Ethernet \"grew 2.6x on a year-over-year basis\" ([Q2 FY27 call transcript](https://s201.q4cdn.com/141608511/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf)). Spectrum-6 switches support co-packaged optics. Groq 3 LPX goes after token latency directly. Even SpaceX's AI arm will deploy NVIDIA Vera CPUs ([release](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm)). At a trailing P/E near 29 (TradingView), it is one of the cheaper ways to own the whole short road."
    },
    {
      "type": "p",
      "text": "**The bear case.** Look at the balance sheet tells. Days sales outstanding rose to 60 from 45 \"due to extended payment terms on large, multi-quarter agreements.\" Supply commitments jumped from $119 billion to $279 billion, mostly memory. NVIDIA also agreed to guarantees capped at $105 billion tied to a 4.25 GW OpenAI campus in Ohio ([CFO commentary, SEC](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27cfocommentary.htm)). None of that is alarming in a boom. All of it becomes leverage to the cycle if the boom pauses. Custom silicon at Broadcom and Google's TPUs, which Alphabet now sells into customer data centers ([Alphabet Q2 call](https://abc.xyz/investor/events/event-details/2026/2026-Q2-Earnings-Call-2026-GgTAq7Is0z/default.aspx)), is a direct share threat."
    },
    {
      "type": "h2",
      "text": "3. Broadcom ($AVGO): custom silicon and the Ethernet switch"
    },
    {
      "type": "p",
      "text": "**The bull case.** Broadcom's fiscal Q3 AI semiconductor revenue was $16.7 billion, up 221% year over year and 54% sequentially, about 56% of total revenue. It guided Q4 AI revenue to $21.7 billion and total revenue to $34.8 billion, with free cash flow at 46% of revenue ([Broadcom Q3 FY26 release, SEC](https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm)). Custom accelerators for the largest AI buyers, plus its own Ethernet switch silicon, make Broadcom the other landlord of the short road."
    },
    {
      "type": "p",
      "text": "**The bear case.** The market is not paying for it right now. AVGO is up only 1.3% year to date and down 9.8% over three months, against a 19.9% year-to-date gain for QQQ (TradingView, Oct 13 close). A business that triples its AI revenue while its stock goes flat is telling you something about expectations, customer concentration or margin mix. The signal is the divergence, whatever the cause. Broadcom also carries $57.2 billion of long-term debt from the VMware era ([release](https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm)). Its trailing P/E is about 46 (TradingView)."
    },
    {
      "type": "h2",
      "text": "4. Arista Networks ($ANET): the switch that cannot drop a packet"
    },
    {
      "type": "p",
      "text": "**The bull case.** Arista posted its first $3 billion quarter: Q2 revenue of $3.04 billion, up 37.7%, with a 49.9% non-GAAP operating margin and Q3 guidance of about $3.3 billion. It launched 1.6-terabit platforms built for scale-up, scale-out and scale-across AI fabrics, and linear pluggable optics it says cut interconnect power by about 60% ([Arista Q2 release, SEC](https://www.sec.gov/Archives/edgar/data/1596532/000159653226000174/ex991q226-earningsrelease.htm)). Deferred revenue rose to $5.1 billion current plus $1.8 billion non-current, which is visibility. The stock is up 52.6% this year (TradingView)."
    },
    {
      "type": "p",
      "text": "**The bear case.** Non-GAAP gross margin was 63.4%, down from 65.6% a year earlier ([release](https://www.sec.gov/Archives/edgar/data/1596532/000159653226000174/ex991q226-earningsrelease.htm)). That is what selling into a few giant customers looks like. Arista's risk factors flag \"large purchases by a limited number of customers\" and dependence on one merchant silicon vendor. NVIDIA's Spectrum-X growth is the competitive threat. Trailing P/E is about 64 (TradingView)."
    },
    {
      "type": "h2",
      "text": "5. Credo ($CRDO) and Astera Labs ($ALAB): the wires between the chips"
    },
    {
      "type": "p",
      "text": "These are the purest emerging plays on the short road. They sell the cables, retimers and fabric switches that keep data moving between processors without errors or delay."
    },
    {
      "type": "p",
      "text": "**Credo.** Fiscal Q1 2027 revenue was $479.0 million, up 114.7%, with a 68.0% non-GAAP gross margin and guidance of $525 million to $535 million ([Credo release, SEC](https://www.sec.gov/Archives/edgar/data/1807794/000162828026059795/credoq12027ex-991.htm)). The company now describes connectivity \"from millimeters to kilometers,\" across copper and optics."
    },
    {
      "type": "p",
      "text": "Bear case: Sequential growth of about 10% last quarter and about 11% at the guidance midpoint (our arithmetic) is healthy, but it is roughly a quarter of Astera's guided pace. Goodwill jumped from $93 million to $986 million in one quarter, so an acquisition now has to be integrated. GAAP gross margin fell to 64.5% from 68.2%. Share-based compensation was $88 million against $129 million of GAAP net income ([release](https://www.sec.gov/Archives/edgar/data/1807794/000162828026059795/credoq12027ex-991.htm)). The stock is down 16.7% over three months (TradingView)."
    },
    {
      "type": "p",
      "text": "**Astera Labs.** Q2 revenue was $392.4 million, up 104%, and Q3 guidance of $540 million to $560 million implies about 40% sequential growth at the midpoint (our arithmetic). Management says Scorpio fabric switches will become the largest product family \"one quarter ahead of our prior expectations\" ([Astera Q2 release, SEC](https://www.sec.gov/Archives/edgar/data/1736297/000173629726000033/q226exhibit991.htm)). That is what a design win turning into a production ramp looks like on paper."
    },
    {
      "type": "p",
      "text": "Bear case: Gross margin is sliding as the mix shifts toward switches, from 76.4% non-GAAP in Q1 to 73.7% in Q2 and about 72% guided for Q3 ([release](https://www.sec.gov/Archives/edgar/data/1736297/000173629726000033/q226exhibit991.htm)). The stock trades near 160 times trailing earnings and fell 12.4% over three months even while it is up 89.5% this year (TradingView). Customer concentration is a named risk."
    },
    {
      "type": "h2",
      "text": "6. Lumentum ($LITE) and Coherent ($COHR): the lasers"
    },
    {
      "type": "p",
      "text": "When copper runs out of reach, light takes over. Both companies say the same thing in different words: optics is moving into the rack."
    },
    {
      "type": "p",
      "text": "**Lumentum.** Fiscal Q4 revenue was $1.01 billion, up 109%. Non-GAAP gross margin jumped to 50.4% from 37.8%, and Q1 guidance is $1.225 billion to $1.275 billion. The CEO pointed to \"ultra-high-power CPO lasers\" and called them \"the first signs that optics are starting to penetrate in-rack connectivity\" ([Lumentum release](https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Fourth-Quarter-and-Full-Fiscal-Year-2026-Results/default.aspx)). Margins expanding while revenue doubles is the signature of pricing power."
    },
    {
      "type": "p",
      "text": "Bear case: The stock is up 524% over a year and 160% this year (TradingView), so a lot of that is already priced. The GAAP net loss of $7.2 billion came from a non-cash $7.8 billion charge on converting debt to equity, and the share count rose from 69.8 million to 88.6 million in a year ([release](https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Fourth-Quarter-and-Full-Fiscal-Year-2026-Results/default.aspx)). Optical cycles have historically been brutal on the way down."
    },
    {
      "type": "p",
      "text": "**Coherent.** Fiscal Q4 revenue was $2.05 billion, up 34%, with Datacenter and Communications at $1.62 billion, about 79% of sales. Non-GAAP gross margin was 40.2%, and Q1 guidance is $2.2 billion to $2.4 billion ([Coherent release](https://www.globenewswire.com/news-release/2026/08/12/3344051/0/en/coherent-corp-reports-fourth-quarter-and-full-year-fiscal-2026-results.html))."
    },
    {
      "type": "p",
      "text": "Bear case: Full-year operating cash flow was only $79.5 million, against $633.6 million the year before, as inventory rose to $2.58 billion from $1.44 billion and capex hit $1.10 billion ([release](https://www.globenewswire.com/news-release/2026/08/12/3344051/0/en/coherent-corp-reports-fourth-quarter-and-full-year-fiscal-2026-results.html)). Growth that eats cash has to be watched closely. Margins are roughly 10 points below Lumentum's."
    },
    {
      "type": "h2",
      "text": "7. Cloudflare ($NET): the edge, where the last mile meets the model"
    },
    {
      "type": "p",
      "text": "Not every latency play is hardware. Cloudflare runs compute close to users, on what it calls one of the world's largest and most interconnected networks, and it is positioning itself as the infrastructure and payment rails for what it calls the Agentic Internet. Q2 revenue was $696.1 million, up 36%, and full-year guidance is about $2.87 billion. Matthew Prince described \"a fundamental rewrite of the Internet for machine-to-machine traffic\" ([Cloudflare Q2 release](https://www.cloudflare.com/en-gb/press/press-releases/2026/cloudflare-announces-second-quarter-2026-financial-results/)). The stock is up 74.8% year to date (TradingView)."
    },
    {
      "type": "p",
      "text": "Bear case: Non-GAAP gross margin fell to 73.1% from 76.3%, free cash flow was just 8% of revenue, and the GAAP operating loss widened to $205.7 million including restructuring. Q3 guidance implies about 6% sequential growth (our arithmetic). This one is a long-duration bet that the edge becomes the default place to run inference, priced as though it already has."
    },
    {
      "type": "h2",
      "text": "On the watchlist: AST SpaceMobile ($ASTS)"
    },
    {
      "type": "p",
      "text": "If the sky road matters, SpaceX will not be the only company on it. AST SpaceMobile builds very large satellites that connect straight to unmodified phones. It has 13 spacecraft in orbit, more than 60 carrier partners covering over 3 billion subscribers, about $1.3 billion of backlog, and full-year 2026 revenue guidance of $150 million to $200 million ([ASTS Q2 release, SEC](https://www.sec.gov/Archives/edgar/data/1780312/000119312526342540/asts-ex99_1.htm))."
    },
    {
      "type": "p",
      "text": "Bear case: Q2 revenue was $31.5 million against $329.1 million of operating expenses, including a $125.9 million loss on involuntary conversion. The cash flow statement shows insurance proceeds from the BB7 launch. The stock is down 36.7% this year (TradingView), and SpaceX's newly approved EchoStar spectrum aims at the same direct-to-cell market. This is a watchlist name, not a core holding, until beta service turns into paying traffic."
    },
    {
      "type": "h2",
      "text": "The field guide: how to spot the next latency leader"
    },
    {
      "type": "p",
      "text": "The companies above will not all be the winners in 2030. Some of the winners in 2030 do not have a ticker yet. What you can own permanently is a method. Use six gauges, each one measurable from a filing, a call transcript or a chart."
    },
    {
      "type": "h3",
      "text": "Gauge 1. Revenue mix: is the latency business taking over the company?"
    },
    {
      "type": "p",
      "text": "Find the line item that sells speed and track its share of revenue every quarter. NVIDIA's Data Center is about 92% of revenue. Broadcom's AI semiconductors went to 56%. Coherent's datacenter segment is 79%. At SpaceX, the line to watch is enterprise and government revenue inside Connectivity, which grew 108% while consumer grew 44%."
    },
    {
      "type": "p",
      "text": "The signal: a rising share, quarter after quarter. A leader's latency business grows faster than the rest of the company until it **is** the company."
    },
    {
      "type": "h3",
      "text": "Gauge 2. Design wins becoming production"
    },
    {
      "type": "p",
      "text": "The best early tell is the moment a product moves from \"sampling\" to \"production ramp\" to \"largest product family.\" Astera's Scorpio did all three in public within a year. Lumentum's \"initial order for ELS modules\" and its CPO laser demand are the same kind of early word."
    },
    {
      "type": "p",
      "text": "The signal: listen for named customers, named platforms (Vera Rubin, UALink, 1.6T, co-packaged optics) and a date. A design win without a ramp date is a press release."
    },
    {
      "type": "h3",
      "text": "Gauge 3. Customer capex commentary, read from the buyer's side"
    },
    {
      "type": "p",
      "text": "The suppliers' guidance is only as good as the buyers' budgets. Read the hyperscaler calls. Alphabet breaks out how much of its spend goes to \"data centers and networking equipment.\" Amazon said capacity will fall short of demand in 2026 and 2027."
    },
    {
      "type": "p",
      "text": "The signal: the words change before the numbers do. \"Supply constrained\" is bullish for the toll booths. \"Digest,\" \"optimize,\" \"efficiency,\" or a sudden emphasis on free cash flow is your warning. Watch the stock reaction too. CNBC documented that capex raises started getting sold in July 2026."
    },
    {
      "type": "h3",
      "text": "Gauge 4. Margins tell you who has pricing power"
    },
    {
      "type": "p",
      "text": "When revenue rises and gross margin rises with it, the company is setting prices. Lumentum (50.4% from 37.8%) is the clean example this year. When revenue rises and gross margin falls, find out why. At Astera it is a planned mix shift toward switches. At Arista and Cloudflare it is worth asking."
    },
    {
      "type": "p",
      "text": "The signal: expanding margins during a ramp. Falling margins with no clear mix explanation usually mean a competitor has arrived."
    },
    {
      "type": "h3",
      "text": "Gauge 5. Balance-sheet tells"
    },
    {
      "type": "p",
      "text": "The income statement shows the story the company wants to tell. The balance sheet shows what it cost. Watch receivable days (NVIDIA's went from 45 to 60), inventory (Coherent's nearly doubled), share count (Lumentum's rose about 27% in a year), stock-based compensation against net income (Credo), and capex against revenue (SpaceX's AI segment)."
    },
    {
      "type": "p",
      "text": "The signal: a leader's cash conversion keeps pace with its growth. Broadcom turning 46% of revenue into free cash flow is the benchmark."
    },
    {
      "type": "h3",
      "text": "Gauge 6. Relative strength: let the market vote, but do not let it decide"
    },
    {
      "type": "p",
      "text": "Fundamentals lead. Price confirms. Compare each name with QQQ over three and twelve months. A leader makes new highs after good earnings. A fading leader posts great numbers and the stock does nothing."
    },
    {
      "type": "table",
      "columns": [
        "Ticker",
        "Close",
        "3-month",
        "Year to date",
        "1-year",
        "Trailing P/E"
      ],
      "rows": [
        [
          "QQQ (benchmark)",
          "$743.57",
          "+2.7%",
          "+19.9%",
          "+24.0%",
          "n/a"
        ],
        [
          "SPCX",
          "$156.54",
          "+13.8%",
          "n/a (IPO Jun 12)",
          "n/a",
          "n/m (loss)"
        ],
        [
          "NVDA",
          "$228.52",
          "+7.8%",
          "+20.4%",
          "+21.6%",
          "28.9"
        ],
        [
          "AVGO",
          "$357.31",
          "-9.8%",
          "+1.3%",
          "+1.3%",
          "45.6"
        ],
        [
          "ANET",
          "$204.52",
          "+11.2%",
          "+52.6%",
          "+27.2%",
          "64.5"
        ],
        [
          "CRDO",
          "$198.31",
          "-16.7%",
          "+33.6%",
          "+35.8%",
          "70.8"
        ],
        [
          "ALAB",
          "$325.41",
          "-12.4%",
          "+89.5%",
          "+51.7%",
          "160.2"
        ],
        [
          "LITE",
          "$987.99",
          "+21.4%",
          "+160.4%",
          "+524.1%",
          "n/m (GAAP loss)"
        ],
        [
          "COHR",
          "$289.98",
          "-8.0%",
          "+54.2%",
          "+147.3%",
          "70.5"
        ],
        [
          "NET",
          "$347.70",
          "+20.4%",
          "+74.8%",
          "+60.0%",
          "n/m (GAAP loss)"
        ],
        [
          "ASTS",
          "$47.07",
          "-31.7%",
          "-36.7%",
          "-45.7%",
          "n/m (loss)"
        ]
      ],
      "caption": "Relative strength scoreboard, as of the Oct 13, 2026 close (TradingView)"
    },
    {
      "type": "p",
      "text": "SPCX has traded only since June 12, 2026, so year-to-date and 1-year figures are not shown. \"n/m\" means not meaningful."
    },
    {
      "type": "p",
      "text": "Read the table the way a detective reads a room. Lumentum, Cloudflare, Arista and NVIDIA have the market's confirmation right now. Credo, Astera and Coherent are strong over the year but have pulled back over three months, which is either a buying window or the first crack, and Gauges 1 through 5 will tell you which. Broadcom is the puzzle: the strongest AI revenue growth in its history and a flat stock."
    },
    {
      "type": "h3",
      "text": "Putting it together: a one-page scorecard"
    },
    {
      "type": "p",
      "text": "For any candidate, old or new, score each gauge from 0 to 2 every quarter."
    },
    {
      "type": "table",
      "columns": [
        "Gauge",
        "0 points",
        "1 point",
        "2 points"
      ],
      "rows": [
        [
          "Revenue mix",
          "Latency share flat or falling",
          "Rising slowly",
          "Rising fast, now the majority"
        ],
        [
          "Design wins",
          "None named",
          "Named, no ramp date",
          "In production, ahead of plan"
        ],
        [
          "Customer capex",
          "Buyers cutting or \"digesting\"",
          "Flat",
          "Buyers raising and still short of capacity"
        ],
        [
          "Margins",
          "Falling, no explanation",
          "Stable",
          "Expanding during a ramp"
        ],
        [
          "Balance sheet",
          "Cash conversion lagging badly",
          "Mixed",
          "Growth funded by its own cash"
        ],
        [
          "Relative strength",
          "Lagging QQQ on 3 and 12 months",
          "Mixed",
          "Leading on both"
        ]
      ]
    },
    {
      "type": "p",
      "text": "A 10 to 12 is a leader. A 7 to 9 is a contender worth owning in a small size. Below 6, wait. The score matters less than the direction it moves from one quarter to the next."
    },
    {
      "type": "h2",
      "text": "What could break the whole thesis"
    },
    {
      "type": "p",
      "text": "A balanced case has to name the ways every name above could fall together."
    },
    {
      "type": "list",
      "items": [
        "1. **The capex river narrows.** Every supplier here is downstream of more than $700 billion of 2026 hyperscaler spending, adding up the four guidance figures cited above (our arithmetic). Hyperscaler free cash flow is already negative at Alphabet in Q2 and at Amazon by Fortune's count, and investors began punishing capex raises in July.",
        "2. **Memory, not latency, becomes the binding constraint.** NVIDIA's supply commitments ballooned because of memory. Musk said on the SpaceX call that \"the limiting factor currently is memory\" ([Motley Fool transcript](https://www.fool.com/earnings/call-transcripts/2026/08/11/spacex-spcx-q2-2026-earnings-call-transcript/)). If memory is the choke point, the toll moves to the memory makers.",
        "3. **Custom silicon rewires the map.** Alphabet now delivers TPU systems into customers' data centers. Each hyperscaler that designs its own fabric can squeeze merchant suppliers.",
        "4. **Physics and orbit do not cooperate.** Radiation, heat rejection, debris and launch cadence are SpaceX's own named risks for orbital compute.",
        "5. **Valuation does the damage even if the story is right.** Several of these stocks trade at 60 to 160 times trailing earnings. Being right about the future and wrong about the price is still a loss."
      ]
    },
    {
      "type": "h2",
      "text": "The ending the post did not write"
    },
    {
      "type": "p",
      "text": "The men who dug through the Alleghenies were right that speed was worth money. They also knew it would not last forever. Forbes reported that they dug in secret because they feared a rival would build its own version. A shortest road is valuable exactly as long as it stays the shortest, and every toll attracts someone who wants to build a straighter one."
    },
    {
      "type": "p",
      "text": "That is the real lesson for anyone thinking about latency as a ten-year investment. The sky road SpaceX is building is extraordinary, and its connectivity business already earns like a utility with a growth engine attached. But today the minutes and seconds of waiting live in the short road, between memory and processor, chip and chip, rack and rack. That is where the money is flowing and where the toll booths are collecting."
    },
    {
      "type": "p",
      "text": "Own the companies that can show you, in numbers, that they collect the toll. Keep score every quarter. And when someone tells you the race isn't about chips anymore, remember that the fastest thing in a data center is still a photon on a wire. Whoever makes that wire shorter gets paid."
    },
    {
      "type": "p",
      "text": "If you want our free research notes as they land, join the Cos Analyst Signals channel on Telegram: https://t.me/CosAnalystSignals. It is free, and nothing there is financial advice."
    },
    {
      "type": "callout",
      "text": "**BOOK FACT · NOT A TICKET.** CosAnalyst Research Feature. As of Tuesday, October 13, 2026, after the US cash close. Figures come from company filings, earnings releases, call transcripts and the sources linked inline. Market data from TradingView and Seeking Alpha. \"Our arithmetic\" marks figures this desk calculated from reported numbers. This article is for education and research only. It is not financial advice and not a recommendation to buy or sell any security. Do your own work."
    }
  ]
};

export default article;
