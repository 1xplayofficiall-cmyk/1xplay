"use client";

import Link from "next/link";
import SoccerFaq from "../components/SoccerFaq";
import { motion, useScroll } from "framer-motion";
import { FaFutbol, FaCheck, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { EditorialBlock, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import { SportHero } from "../components/SportHeroMedia";

const ACCENT = "#01A3F6";

/* ---------- content data ---------- */
const introParas = [
  "Soccer is the world’s most popular sport, bringing together millions of passionate fans every day. Beyond watching the action unfold on the pitch, many supporters enjoy adding an extra layer of engagement through soccer betting. Whether you are looking at a match days before kickoff or following the action as it happens, placing a bet allows you to test your knowledge of teams, tactics, and player form.",
  "Pre-match betting lets you analyze statistics and historical records ahead of time, while live soccer betting gives you the chance to react to momentum shifts during a match. At 1Xplay, sports enthusiasts can explore a wide variety of matches from leagues around the globe. Understanding how markets function, reading the odds, and managing your approach responsibly are the most important steps to enjoying the experience.",
];

const whatIsIntro =
  "At its core, football betting involves predicting a specific outcome in a match and placing a stake on that prediction. If your prediction is correct, you receive a payout based on the odds offered at the time of your wager. If it is incorrect, you lose your stake.";
const whatIsSteps = [
  { title: "Pre-match betting", desc: "Placing a wager before the match officially begins. The odds in pre-match markets are generally stable, shifting primarily due to major news like player injuries or unexpected lineup changes." },
  { title: "Live betting", desc: "Placing a wager while the match is actively being played. The odds update continuously in real time based on what is happening on the pitch." },
  { title: "Selecting a market", desc: "Choosing the specific event you want to predict. Rather than just picking who wins, you can bet on total goals, specific player performances, or halftime scores." },
  { title: "Understanding odds", desc: "Checking the ratio set by the platform that determines how much you stand to win relative to your stake." },
  { title: "Placing a wager", desc: "Choosing your desired outcome, entering the amount of money you wish to risk (your stake), and confirming the bet." },
];
const whatIsClosing =
  "Before placing any wager, taking the time to understand how a specific market works is essential. Each market has its own set of rules, and knowing exactly what needs to happen for your bet to win helps you make clear, informed decisions.";

const marketsIntro =
  "Soccer offers dozens of different ways to bet on a single 90-minute match. For beginners, sticking to simple markets is usually the best approach before exploring more complex options.";
const markets = [
  { title: "Match Winner (1X2)", desc: "The most standard market in football. You predict the final outcome after 90 minutes plus injury time — 1: Home team wins, X: Draw, 2: Away team wins." },
  { title: "Double Chance", desc: "Cover two of the three possible outcomes in a single match, reducing your overall risk (Home or Draw, Away or Draw, or Home or Away). Because your chances are higher, the odds are generally lower than a standard 1X2 market." },
  { title: "Draw No Bet", desc: "Removes the option of a draw. You pick either the home or away team to win; if the match ends in a draw, your initial stake is returned, resulting in no gain and no loss." },
  { title: "Over/Under Goals", desc: "Bet on the total number of goals scored by both teams combined against a baseline such as 2.5. Over 2.5 needs 3 or more goals; Under 2.5 needs 2 or fewer." },
  { title: "Both Teams to Score (BTTS)", desc: "A simple Yes or No market. Bet Yes if you believe both teams will score at least one goal, or No if you think at least one team will keep a clean sheet." },
  { title: "Handicap Betting", desc: "Gives one team a virtual advantage or disadvantage before kickoff to balance the field. A strong favorite on a -1.5 handicap must win by 2 or more goals for the bet to pay out." },
  { title: "Correct Score", desc: "Predict the exact final score at full time, such as 2-1 or 0-0. Because exact scores are difficult to hit, this market usually offers higher odds." },
  { title: "Half-Time Markets", desc: "Place bets specifically on the outcome of the first 45 minutes — the halftime lead, halftime goals, or which team will score first before the break." },
  { title: "First-Team-to-Score Markets", desc: "Predict which of the two teams will score the first goal of the match. You can also opt to bet that no goals will be scored at all." },
];

const oddsIntro =
  "Understanding soccer betting odds is essential because they tell you two primary things: the implied probability of an outcome occurring and how much money you will return if your bet is successful.";
const decimalParas = [
  "In many regions, odds are displayed in decimal format (e.g., 1.50, 2.10, 3.50). Decimal odds represent the total payout you receive for every 1 unit staked, which includes returning your original stake.",
  "To calculate your total return, multiply your stake by the decimal odds: Total Return = Stake × Odds.",
];
const oddsCards = [
  { title: "Odds vs. Implied Probability", desc: "Lower odds mean an outcome is considered more likely, resulting in a smaller potential payout; higher odds mean it is considered less likely, offering a larger payout. Odds reflect market opinions and statistical models — they never guarantee an actual outcome, which is why a team with low odds can still lose." },
  { title: "Why Do Odds Change?", desc: "Odds fluctuate based on incoming news and market activity. Starter injuries, weather conditions, tactical adjustments, or heavy betting activity on one side can cause oddsmakers to adjust the numbers to manage platform risk." },
];

const liveIntro =
  "Live soccer betting — also known as in-play betting — allows you to place wagers while the game is underway. As you watch the match, odds will continuously rise and fall in response to the live action.";
const liveFactors = [
  { title: "Goals", desc: "A goal instantly shifts the match momentum and drastically changes the odds for all markets." },
  { title: "Red Cards", desc: "A team playing with ten men faces a major tactical disadvantage, causing their odds of winning to rise significantly." },
  { title: "Injuries", desc: "Losing a key playmaker or goalkeeper mid-match alters a team’s potential performance." },
  { title: "Possession and Momentum", desc: "If one team is pressing heavily and creating constant chances, their odds to score next will drop." },
  { title: "Shots on Target and Corners", desc: "High offensive activity indicates pressure, which live models factor into real-time odds adjustments." },
  { title: "Match Time", desc: "As time ticks away, odds on a draw or the team currently leading will shorten." },
];
const liveClosing =
  "Live betting requires composure and discipline. Because odds move fast, it can be tempting to make hasty decisions based on excitement. Successful live monitoring requires watching the match closely, staying calm, and waiting for clear situations rather than reacting emotionally to every attack.";

const tips = [
  { title: "Understand the Market First", desc: "Never place a bet on a market type you do not fully understand. Read the rules of the specific option before risking your money." },
  { title: "Do Your Homework", desc: "Check basic team stats, recent form, head-to-head records, and news updates before placing a wager." },
  { title: "Verify Lineups", desc: "Wait for official team lineups to be announced roughly an hour before kickoff. A team resting key players will perform differently than their standard starting eleven." },
  { title: "Establish a Budget", desc: "Decide beforehand how much money you can comfortably afford to spend on sports entertainment over a week or month, and stick strictly to that number." },
  { title: "Never Chase Losses", desc: "If a bet loses, resist the urge to place a larger, unplanned bet right away to win back the lost money. This often leads to larger losses." },
  { title: "Keep Track of Your Activity", desc: "Log your bets, stakes, and outcomes. Tracking your history helps you see which markets you understand best and keeps your spending transparent." },
  { title: "Avoid Pure Emotional Betting", desc: "Betting on your favorite team can cloud your judgment. Analyze matches objectively based on facts rather than personal loyalty." },
  { title: "Take Breaks", desc: "Stepping away from betting platforms regularly helps maintain perspective and prevents impulsive decision-making." },
];

const factorsIntro =
  "Smart match analysis relies on evaluating multiple variables before deciding if a bet has value. Here are the main factors to look into before a match begins:";
const factors = [
  { title: "Recent Form", desc: "Look at how a team has performed in their last 5 to 6 matches. Are they scoring freely, struggling defensively, or grinding out draws?" },
  { title: "Home and Away Disparities", desc: "Some teams perform brilliantly in front of their home fans but struggle significantly on the road." },
  { title: "Head-to-Head (H2H) Records", desc: "Certain teams historically struggle against specific opponents due to contrasting playing styles, regardless of their current league positions." },
  { title: "Injuries and Suspensions", desc: "Missing key central defenders, primary goalscorers, or main playmakers drastically impacts a team’s baseline strength." },
  { title: "Schedule Congestion", desc: "Teams playing three matches in eight days across domestic and continental competitions often experience fatigue or rotate their starters." },
  { title: "Motivation and Context", desc: "A team fighting against relegation or trying to secure a trophy will play with a different intensity than a mid-table team with little left to play for." },
  { title: "Tactical Matchups", desc: "High-pressing teams can struggle against compact, counter-attacking setups. Understanding style matchups gives deeper insight into how a game might flow." },
];
const factorsClosing =
  "Always remember that historical stats, trends, and team news offer helpful context, but they never guarantee how a future match will unfold.";

const at1xplayParas = [
  "At 1Xplay, sports fans can explore a clean, easy-to-navigate interface built for reviewing soccer matches and markets. Whether you prefer analyzing matches beforehand or following action through live updates, the platform provides clear information to help you navigate your options.",
  "On 1Xplay, you can find coverage for major domestic leagues, international tournaments, and cup competitions worldwide. You can easily switch between match winner selections, total goal projections, handicap options, and live updating markets.",
];

const responsibleIntro =
  "Betting should always be viewed strictly as a form of paid entertainment, similar to buying a ticket for a movie or a concert, and never as a way to generate income or resolve financial problems.";
const responsibleTips = [
  { label: "Set Firm Limits", desc: "Determine daily, weekly, or monthly deposit and spending limits before you start." },
  { label: "Protect Essential Funds", desc: "Never use money allocated for rent, bills, groceries, savings, or family needs." },
  { label: "Recognize the Signs", desc: "If you feel stressed, angry after a loss, or find yourself spending more time and money than intended, it is time to stop." },
  { label: "Take Timeouts", desc: "Stepping away for a few days or weeks is a healthy way to maintain balance." },
  { label: "Reach Out for Help", desc: "If sports wagering stops feeling recreational or starts causing personal or financial stress, seek assistance from dedicated support organizations." },
];

const conclusionParas = [
  "Understanding the rules of different markets, reading odds accurately, and keeping up with team news are essential elements of exploring soccer betting online. Whether you are analyzing pre-match statistics or tracking live match momentum, taking an informed and measured approach is always the best path forward.",
  "As you explore the soccer markets on 1Xplay, always keep responsibility at the forefront of your experience. Keep your stakes reasonable, stay within your set budget, and treat every match as a fun way to enjoy the sport you love.",
];

export default function SoccerBetting() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05080B] text-white">
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-[var(--navbar-offset)] left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-[#0078E5] to-[#01A3F6] shadow-[0_0_12px_rgba(1,163,246,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* ── Hero ── */}
      <SportHero src="/soccer.png" alt="Soccer Betting at 1xPlay" desktopPosition="object-right">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
          <span className="sport-hero-eyebrow font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">
            Soccer Betting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className=""
        >
          Soccer Betting Online at{" "}
          <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(1,163,246,0.15)]">
            1Xplay
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          Soccer is the world&rsquo;s most popular sport. From pre-match analysis to live in-play action,
          explore a wide variety of matches and markets from leagues around the globe on a secure,
          easy-to-navigate platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 flex-wrap max-sm:justify-center"
        >
          <a href="https://www.1xplay.games/sports/soccer/1" className="btn btn-gold btn-large gap-2">
            <span>Explore Markets</span> <FaArrowRight size={12} />
          </a>
          <a href="#basics" className="btn btn-ghost btn-large">
            <span>Learn the Basics</span>
          </a>
        </motion.div>
      </SportHero>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <EditorialBlock num="01" eyebrow="Overview" title="Soccer Betting Online at 1Xplay">
          <div className="max-w-3xl space-y-4">
            {introParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </EditorialBlock>

        {/* 02 — What is soccer betting */}
        <WideBlock num="02" eyebrow="The Basics" title="What Is Soccer Betting?" id="basics">
          <p className="max-w-3xl">{whatIsIntro}</p>
          <p className="mt-6 max-w-3xl text-white/85">
            Getting started with soccer wagering is a straightforward process, but it requires a basic understanding of a few key steps:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatIsSteps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.03]"
              >
                <div className="font-[var(--font-bebas)] text-[26px] leading-none text-[#01A3F6] mb-3">0{i + 1}</div>
                <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white mb-1.5">{s.title}</h4>
                <p className="text-[12.5px] leading-[1.6] text-muted font-light">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">{whatIsClosing}</p>
        </WideBlock>

        {/* 03 — Popular markets */}
        <WideBlock num="03" eyebrow="Betting Markets" title="Popular Soccer Betting Markets" id="markets">
          <p className="max-w-3xl">{marketsIntro}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {markets.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-5 transition-all hover:border-[#01A3F6]/35"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-3 inline-flex w-fit items-center rounded-md bg-[#01A3F6]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#01A3F6] font-[var(--font-syne)]">
                    Market
                  </span>
                  <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white">{m.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-[1.65] text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </WideBlock>

        {/* 04 — Understanding odds */}
        <WideBlock num="04" eyebrow="Reading Odds" title="Understanding Soccer Betting Odds">
          <p className="max-w-3xl">{oddsIntro}</p>

          <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
            <h3 className="font-[var(--font-syne)] text-[16px] font-bold text-white mb-3">Decimal Odds Explained</h3>
            <div className="space-y-3 max-w-3xl">
              {decimalParas.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.8] text-muted font-light">{p}</p>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.05] p-4">
              <FaFutbol className="mt-0.5 shrink-0 text-[#01A3F6]" size={14} />
              <p className="text-[13.5px] text-white/85 font-light leading-[1.7]">
                For example, a &#8377;100 bet at odds of 2.50 returns &#8377;100 &times; 2.50 = &#8377;250 in total, for a
                profit of &#8377;150 (the &#8377;250 return minus your &#8377;100 stake).
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {oddsCards.map((c) => (
              <InfoCard key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
        </WideBlock>

        {/* 05 — Live betting (split media) */}
        <SplitMedia
          num="05"
          eyebrow="In-Play"
          title="How Live Soccer Betting Works"
          image="/soccer_1.png"
          alt="Live Soccer Betting at 1xPlay"
        >
          <p>{liveIntro}</p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)] pt-1">
            What Moves Live Odds
          </p>
          <div className="flex flex-col gap-2.5">
            {liveFactors.map((f) => (
              <div key={f.title} className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 text-[13px] leading-[1.6]">
                <FaCheck className="mt-1 shrink-0 text-[#01A3F6]" size={12} />
                <span className="text-muted font-light">
                  <span className="text-white/90 font-medium">{f.title}:</span> {f.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="text-white/60">{liveClosing}</p>
        </SplitMedia>

        {/* 06 — Tips */}
        <WideBlock num="06" eyebrow="For Beginners" title="Football Betting Tips for Beginners">
          <p className="max-w-3xl">
            If you are new to sports wagering, maintaining a structured, disciplined approach will keep the experience enjoyable and educational.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((t) => (
              <InfoCard key={t.title} title={t.title} desc={t.desc} />
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">
            If you want to read more in-depth strategies for reading match statistics and evaluating team form, explore our guides on the{" "}
            <Link href="/blog" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
              1Xplay Blog
            </Link>
            .
          </p>
        </WideBlock>

        {/* 07 — Factors to consider */}
        <WideBlock num="07" eyebrow="Match Analysis" title="Factors to Consider Before Soccer Betting">
          <p className="max-w-3xl">{factorsIntro}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {factors.map((f) => (
              <InfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">{factorsClosing}</p>
        </WideBlock>

        {/* 08 — Soccer betting at 1Xplay (split media) */}
        <SplitMedia
          num="08"
          eyebrow="On 1Xplay"
          title="Soccer Betting at 1Xplay"
          image="/2nd_soccer.png"
          alt="Soccer Betting on 1xPlay"
          reverse
        >
          {at1xplayParas.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
            <p className="text-[13.5px] leading-[1.8] text-muted font-light">
              If you enjoy following multiple sports, check out our dedicated hubs for{" "}
              <Link href="/cricket" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">Cricket Betting</Link>,{" "}
              <Link href="/tennis" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">Tennis Betting</Link>, and{" "}
              <Link href="/badminton" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">Badminton Betting</Link>. For
              non-sports entertainment, explore the{" "}
              <Link href="/casino" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">Casino Page</Link>{" "}
              or manage your preferences on the go using the{" "}
              <Link href="/apps" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">1Xplay Apps</Link>.
            </p>
          </div>
        </SplitMedia>

        {/* Responsible */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(1,163,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#01A3F6]/10 border border-[#01A3F6]/25 flex items-center justify-center text-[#01A3F6] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">
                How to Approach Soccer Betting Responsibly
              </h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">{responsibleIntro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[13px] text-muted font-light">
                {responsibleTips.map((tip) => (
                  <div key={tip.label} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#01A3F6] shrink-0" />
                    <span>
                      <span className="text-white/90 font-medium">{tip.label}:</span> {tip.desc}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-muted text-[13.5px] leading-[1.7] font-light">
                For helpful resources, setting up self-exclusion, and learning more about staying in control, visit our{" "}
                <Link href="/responsible-gambling" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                  Responsible Gambling Page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 09 — Conclusion */}
        <WideBlock num="09" eyebrow="Wrap Up" title="Conclusion">
          <div className="max-w-3xl space-y-4">
            {conclusionParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </WideBlock>
      </div>

      <SoccerFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-5">Enjoy the Best Experience</span>
            <h2 className="section-title">
              Start Soccer Betting Today at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                Whether you are analyzing pre-match statistics or tracking live match momentum, 1Xplay brings major
                domestic leagues, international tournaments, and cup competitions together with clear markets and
                real-time odds.
              </p>
              <p>
                Keep your stakes reasonable, stay within your set budget, and treat every match as a fun way to enjoy
                the sport you love.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.1xplay.games" className="btn btn-gold btn-large">
                Join &amp; Bet Now <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link href="/games" className="btn btn-ghost btn-large">
                All Games Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── Reusable blocks ─────────── */

function InfoCard({ title, desc }: { title: string; desc: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.03]">
      <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white mb-2">{title}</h4>
      <p className="text-[13px] leading-[1.7] text-muted font-light">{desc}</p>
    </div>
  );
}
