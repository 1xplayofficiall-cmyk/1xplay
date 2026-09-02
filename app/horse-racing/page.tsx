"use client";

import Link from "next/link";
import HorseRacingFaq from "../components/HorseRacingFaq";
import { motion, useScroll } from "framer-motion";
import { FaHorse, FaCheck, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { EditorialBlock, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import { SportHero } from "../components/SportHeroMedia";

const ACCENT = "#01A3F6";

/* ---------- content data ---------- */
const introParas = [
  "Horse racing carries a rich history as one of the world's most traditional and exciting spectator sports. The speed, athletic power of the horses, and tactical decisions made by jockeys make every race an event filled with suspense. With the growth of digital sports platforms, horse racing betting online allows fans to engage with international and domestic racecourses right from their digital screens.",
  "At its core, online horse racing betting involves evaluating the competing horses (referred to as runners), reviewing racecourse conditions, and selecting specific outcomes through structured markets. Rather than relying purely on guesswork, modern race engagement relies heavily on understanding how odds are structured and evaluating available performance data.",
  "Whether you are watching thoroughbreds sprint on flat tracks or navigate obstacle courses, understanding the mechanics of a race enhances your overall viewing experience. On the 1Xplay horse racing page, users can explore upcoming racecards, review available odds, and follow a wide variety of race events with clear, accessible platform navigation.",
];

const howSteps = [
  { title: "Choose a Race", desc: "Select an upcoming event from the available racecards on the platform. Racecards list essential details, including scheduled post times, track distance, and the total field size." },
  { title: "Review Available Race Information", desc: "Examine the list of entries, noting each runner's weight, assigned jockey, trainer, and recent finish positions." },
  { title: "Check the Runners", desc: "Compare how different horses in the field have performed in recent outings, paying attention to the specific conditions of those previous runs." },
  { title: "Compare Horse Racing Odds", desc: "Review the numerical odds assigned to each runner. These figures indicate the implied probability of performance according to market analysis." },
  { title: "Select an Available Market", desc: "Decide on the type of bet you want to place — such as picking a straight winner or opting for a place position." },
  { title: "Place a Bet", desc: "Enter your desired stake into your digital bet slip, review your selections, and confirm your entry." },
  { title: "Follow the Race", desc: "Watch the live coverage or follow real-time visual trackers as the field moves around the track." },
  { title: "Understand the Settlement", desc: "Once the race concludes and results are officially confirmed by race stewards, winning entries are settled automatically according to the initial market terms." },
];
const howClosing =
  "Following these steps ensures an organized approach to reviewing races, though it is essential to remember that no analytical process guarantees a winning outcome due to the unpredictable nature of live sports.";

const oddsIntro =
  "Comprehending horse racing odds is fundamental to navigating any race market. Odds perform two primary functions: they express the theoretical likelihood of a specific horse winning or placing, and they determine the potential financial payout relative to the stake placed.";
const whatOddsRepresent =
  "Odds are created by balancing statistical probabilities, historical performance, and overall market demand. When a horse carries shorter odds (for example, 2/1 or 3.00 in decimal format), the market views that runner as having a relatively high chance of success, which results in a lower payout ratio. Conversely, longer odds (such as 20/1 or 21.00) suggest that the market considers the horse less likely to win, which corresponds to a higher potential return if an upset occurs.";
const whyOddsShift = [
  "High volumes of bets placed on a specific runner.",
  'Sudden changes in weather or track conditions (often referred to as the "going").',
  "Late adjustments to jockey assignments or horse weight penalties.",
  "Official physical checks or paddock inspections prior to post time.",
];
const oddsNotGuarantees =
  "It is vital to treat odds purely as market indicators rather than absolute predictions. Favorites with very short odds fail to win frequently, while longshots occasionally produce surprising results. Comparing market odds against independent race information allows for a more rounded evaluation of the field.";

const marketsIntro =
  "Race platforms offer multiple ways to participate in an event beyond simply picking the overall winner. Understanding how different betting markets operate helps you choose options that match your personal analysis.";
const marketBreakdowns = [
  { emoji: "🥇", title: "Win Betting", desc: "The win market is the simplest and most common form of race selection. Your selection must finish first in the official order of arrival. If the selected horse finishes in any other position — even second by a fraction of an inch — the bet does not win." },
  { emoji: "🏅", title: "Place Betting", desc: "Place betting provides a wider margin for error by allowing you to select a horse to finish within a predetermined number of top positions (typically 2nd, 3rd, or 4th). The exact number of place positions depends on the total number of runners and the rules of the event. Because hitting a place is more likely than predicting an outright winner, the corresponding odds are lower than the win odds for the same horse." },
  { emoji: "🔁", title: "Each-Way Betting", desc: "Where available, an each-way selection combines two separate bets into one: one stake for the horse to win, and an equal stake for the horse to place. If your selection wins, both portions return; if it misses first but finishes within the place positions, only the place portion pays out." },
  { emoji: "🎟️", title: "Other Race Markets", desc: "Depending on the racecourse and event, advanced options such as forecasting (predicting the exact 1st and 2nd place finishers) or multi-race accumulator selections may be presented. Review individual market rules on 1Xplay before participating, as availability varies between race tracks." },
];

const liveIntro =
  "The introduction of real-time digital sports tracking has made live horse racing betting a popular choice for active sports fans. Unlike pre-race betting — where selections are locked in before the gates open — in-play markets allow participants to evaluate odds dynamically as the runners move down the track.";
const liveFactors = [
  { title: "Start Quality", desc: "How cleanly a horse breaks from the starting stalls at the gate." },
  { title: "Running Position", desc: "Whether a runner is leading comfortably, drafting in the pack, or trapped along the inside rail." },
  { title: "Pace & Stamina", desc: "How effectively a jockey manages energy reserves during long-distance runs." },
  { title: "Final Sprint Response", desc: "How well a horse accelerates when entering the home stretch." },
];
const liveClosing =
  "In-play racing markets require quick decision-making under fast-moving conditions. While observing the live movement of a field gives instant feedback, in-play odds move rapidly, and visual broadcast delays can occasionally occur. Watching a live race does not eliminate risk or guarantee a successful selection; maintaining a calm, analytical perspective is essential during live events.";

const readIntro =
  "Evaluating a racecard requires looking at several interconnected data points. Studying these fundamental elements helps transform raw statistics into actionable insight.";
const readFactors = [
  { title: "Recent Form", desc: "The string of numbers next to a horse's name represents its recent finishing positions (e.g., 1-3-2). Examining these results shows whether a horse is running consistently well or struggling for form." },
  { title: "Race Distance", desc: "Horses are often specialized. Some excel at short, high-speed sprints (5 to 6 furlongs), while others build momentum over longer endurance distances (1.5 miles or more). Ensure your chosen runner has proven capability at the race's specific distance." },
  { title: "Track Conditions (The Going)", desc: "Track surfaces range from firm and dry to soft and muddy. Certain thoroughbreds perform significantly better on specific ground types due to their running style and stride length." },
  { title: "Jockey and Trainer Combination", desc: "Experienced jockeys understand how to pace a race, handle track traffic, and make split-second tactical decisions. Top-tier trainers have proven records of bringing horses into races at peak physical conditioning." },
  { title: "Field Size & Competition Level", desc: "Larger fields increase the potential for traffic issues and unexpected collisions on the turn, while smaller fields offer clearer paths but often lower relative value on top contenders." },
];
const readClosing =
  "Combining these observations provides a comprehensive overview of a race field, though unforeseen events on the track remain part of every athletic contest.";

const strategyIntro =
  "Approaching race selection with an analytical system helps maintain discipline and reduces impulsive choices. Sound analysis focuses on consistency, objective assessment, and practical bankroll controls.";
const strategyCards = [
  { title: "Look Beyond Recent Finish Positions", desc: "A horse finishing 4th in an elite, high-level stakes race may have delivered a far superior athletic performance than a horse that won a low-tier local event. Always evaluate the quality of the competition a runner faced in its previous outings rather than relying solely on position numbers." },
  { title: "Avoid Emotional Bias", desc: "It is common for casual viewers to pick horses based on appealing names, silk colors, or past personal favorites. Objective analysis focuses strictly on measurable criteria like surface records, weight allowances, and prevailing market value." },
  { title: "Practice Budgetary Control", desc: "Establish clear personal spending limits prior to engaging with any sports markets. Never view race engagement as a source of income or a method for solving financial needs. Setting predefined boundaries ensures that sports viewing remains a safe, entertaining pastime." },
];

const whyClosing =
  "Explore the selection of upcoming event schedules and review available odds directly on the 1Xplay horse racing page to get started.";

const beginnerPoints = [
  { title: "Master Basic Terminology", desc: 'Understand key terms like "runner," "furlong," "steward," "going," and "place market" before placing your first entry.' },
  { title: "Start with Straight Markets", desc: "Focus initially on basic Win or Place options before attempting multi-selection or exotic combinations." },
  { title: "Study One Race at a Time", desc: "Avoid spreading your attention across multiple overlapping racecards. Focus on analyzing a single race thoroughly." },
  { title: "Stick to a Fixed Limit", desc: "Decide on a small, comfortable budget for your session and stop once that limit is reached, regardless of outcomes." },
  { title: "Embrace Uncertainty", desc: "Accept that sports involve inherent variability. Winning streaks and losing runs are both natural parts of athletic competition." },
];

const responsibleIntro =
  "Responsible play is central to maintaining sports participation as an enjoyable entertainment activity. Managing your involvement safely requires proactive personal oversight.";
const responsibleTips = [
  { label: "Treat Betting Strictly as Entertainment", desc: "View sports selection as a way to enhance your viewing enjoyment, not as a financial investment or earning strategy." },
  { label: "Know Your Local Regulations", desc: "Ensure that participating in sports markets is fully compliant with the laws, age restrictions, and legal guidelines of your specific geographic jurisdiction." },
  { label: "Never Chase Losses", desc: "Attempting to recover lost funds by placing larger, unplanned bets is a primary cause of decision-making errors. Accept losses as the cost of entertainment and move on." },
  { label: "Set Hard Limits", desc: "Establish daily, weekly, or monthly time and spending caps. Once you hit your personal threshold, step away from the platform." },
  { label: "Recognize When to Stop", desc: "If sports participation begins causing stress, financial strain, or interference with your daily life, step back immediately and seek guidance from professional support organizations." },
];

export default function HorseRacing() {
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
      <SportHero src="/horse.png" alt="Horse Racing Betting at 1xPlay" desktopPosition="object-right">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
          <span className="sport-hero-eyebrow font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">
            Horse Racing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:w-3xl w-2xl"
        >
         Horse Racing Betting Online: Understand Odds, Markets & Races
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          Understand odds, markets, and races on one modern platform. Explore upcoming racecards,
          review real-time odds, and follow international and domestic race events with clear,
          accessible navigation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 flex-wrap max-sm:justify-center"
        >
          <a href="https://www.1xplay.games" className="btn btn-gold btn-large gap-2">
            <span>Explore Markets</span> <FaArrowRight size={12} />
          </a>
          <a href="#how-it-works" className="btn btn-ghost btn-large">
            <span>How It Works</span>
          </a>
        </motion.div>
      </SportHero>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <EditorialBlock num="01" eyebrow="Overview" title="Horse Racing Betting Online at 1Xplay">
          <div className="max-w-3xl space-y-4">
            {introParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </EditorialBlock>

        {/* 02 — How it works */}
        <WideBlock num="02" eyebrow="Step by Step" title="How Online Horse Racing Betting Works" id="how-it-works">
          <p className="max-w-3xl">
            Getting started with online race markets is a straightforward process when approached step by step. Following a structured routine helps you evaluate information clearly before placing a bet.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howSteps.map((s, i) => (
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
          <p className="mt-7 max-w-3xl text-white/60">{howClosing}</p>
        </WideBlock>

        {/* 03 — Understanding odds */}
        <WideBlock num="03" eyebrow="Reading Odds" title="Understanding Horse Racing Odds">
          <p className="max-w-3xl">{oddsIntro}</p>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <InfoCard title="What Odds Represent" desc={whatOddsRepresent} />
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
              <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white mb-3">Why Odds Shift</h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {whyOddsShift.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-muted font-light">
                    <FaCheck className="mt-1 shrink-0 text-[#01A3F6]" size={12} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.05] p-5">
            <FaExclamationTriangle className="mt-0.5 shrink-0 text-[#01A3F6]" size={16} />
            <div>
              <h4 className="font-[var(--font-syne)] text-[14px] font-bold text-white mb-1.5">Odds Are Not Guarantees</h4>
              <p className="text-[13.5px] leading-[1.7] text-white/85 font-light">{oddsNotGuarantees}</p>
            </div>
          </div>
        </WideBlock>

        {/* 04 — Markets */}
        <WideBlock num="04" eyebrow="Betting Markets" title="Popular Horse Racing Betting Markets" id="markets">
          <p className="max-w-3xl">{marketsIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {marketBreakdowns.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all hover:border-[#01A3F6]/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl bg-[#01A3F6]/10 border border-[#01A3F6]/20 flex items-center justify-center text-[20px]">
                    {m.emoji}
                  </span>
                  <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px]">{m.title}</h3>
                </div>
                <p className="text-muted text-[13px] leading-[1.7] font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </WideBlock>

        {/* 05 — Live betting (split media) */}
        <SplitMedia
          num="05"
          eyebrow="In-Play"
          title="Live Horse Racing Betting"
          image="/1XPLAY_GAMES2.PNG"
          alt="Live Horse Racing Betting at 1xPlay"
        >
          <p>{liveIntro}</p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)] pt-1">
            Dynamic Market Movement
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

        {/* 06 — Reading a race */}
        <WideBlock num="06" eyebrow="Racecard Reading" title="How to Read a Horse Race Before Betting">
          <p className="max-w-3xl">{readIntro}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {readFactors.map((f) => (
              <InfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">{readClosing}</p>
        </WideBlock>

        {/* 07 — Strategy */}
        <WideBlock num="07" eyebrow="Strategy" title="Horse Racing Betting Strategies and Analysis">
          <p className="max-w-3xl">{strategyIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {strategyCards.map((s) => (
              <InfoCard key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </WideBlock>

        {/* 08 — Why 1Xplay (split media) */}
        <SplitMedia
          num="08"
          eyebrow="Why 1Xplay"
          title="Why Explore Horse Racing Betting on 1Xplay?"
          image="/1XPLAY_GAMES3.PNG"
          alt="Horse Racing Betting on 1xPlay"
          reverse
        >
          <p>
            1Xplay offers a streamlined digital platform designed for sports enthusiasts seeking clear market layouts and intuitive navigation across a variety of sports categories.
          </p>
          <div className="flex flex-col gap-3">
            <FeatureRow title="Clean Racecard Navigation">
              Easily access structured information covering entries, runners, jockeys, and official event times without clutter.
            </FeatureRow>
            <FeatureRow title="Dynamic Odds Presentation">
              Real-time updates ensure that pre-race and live market shifts are displayed clearly for user review.
            </FeatureRow>
            <FeatureRow title="Mobile-Friendly Interface">
              Check upcoming race schedules and market options smoothly across smartphones, tablets, or desktop systems.
            </FeatureRow>
            <FeatureRow title="Broader Sports Coverage">
              Beyond the track, transition between diverse sports categories — such as checking{" "}
              <Link href="/cricket" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                online cricket betting
              </Link>{" "}
              markets for international test matches or exploring options for{" "}
              <Link href="/badminton" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                badminton betting
              </Link>
              .
            </FeatureRow>
            <FeatureRow title="Integrated Entertainment Hub">
              For users interested in traditional table entertainment alongside athletic events, 1Xplay also provides
              convenient access to a curated suite of{" "}
              <Link href="/casino" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                casino games online
              </Link>
              .
            </FeatureRow>
          </div>
          <p className="text-white/60">{whyClosing}</p>
        </SplitMedia>

        {/* 09 — Beginners */}
        <WideBlock num="09" eyebrow="For Beginners" title="Horse Racing Betting for Beginners">
          <p className="max-w-3xl">
            If you are new to race markets, keeping your initial approach simple helps build familiarity without unnecessary complexity.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beginnerPoints.map((b) => (
              <InfoCard key={b.title} title={b.title} desc={b.desc} />
            ))}
          </div>
        </WideBlock>

        {/* Responsible */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(1,163,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#01A3F6]/10 border border-[#01A3F6]/25 flex items-center justify-center text-[#01A3F6] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">
                Responsible Horse Racing Betting
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
            </div>
          </div>
        </section>
      </div>

      <HorseRacingFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-5">Enjoy Horse Racing</span>
            <h2 className="section-title">
              Join the Horse Racing Betting Experience at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                From pre-race analysis and clear racecards to real-time in-play odds, 1Xplay brings international and
                domestic race events together on one modern, mobile-friendly platform.
              </p>
              <p>
                Keep responsibility at the forefront — set firm limits, treat every race as entertainment, and enjoy the
                sport at your own pace.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.1xplay.games" className="btn btn-gold btn-large">
                Start Betting Now <FaArrowRight className="w-3.5 h-3.5" />
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

function FeatureRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:border-[#01A3F6]/30">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}
      >
        <FaHorse size={15} />
      </span>
      <div>
        <p className="font-[var(--font-syne)] text-[14px] font-bold text-white mb-1">{title}</p>
        <p className="text-[13px] leading-[1.7] text-muted font-light">{children}</p>
      </div>
    </div>
  );
}
