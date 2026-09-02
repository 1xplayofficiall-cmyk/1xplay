"use client";

import Link from "next/link";
import BadmintonFaq from "../components/BadmintonFaq";
import { motion, useScroll } from "framer-motion";
import {
  FaArrowRight,
  FaChartLine,
  FaTv,
  FaGlobe,
  FaMobileAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { EditorialBlock, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import { SportHero } from "../components/SportHeroMedia";

const ACCENT = "#01A3F6";

/* ---------- content data ---------- */
const twoWays = [
  {
    title: "Pre-Match Betting",
    desc: "Wagers placed before a match begins, based on historical data, player rankings, head-to-head records, and pre-game conditions.",
  },
  {
    title: "Live Betting",
    desc: "Wagers placed while the match is underway, allowing you to react to live score shifts, fatigue, and momentum changes in real time.",
  },
];

const howToSteps = [
  { n: "01", title: "Select a Match", desc: "Choose an upcoming or ongoing match from an active tournament circuit." },
  { n: "02", title: "Review Available Markets", desc: "Look through the listed betting categories, such as outright match winners, set scores, or total points." },
  { n: "03", title: "Understand the Odds", desc: "Odds represent the implied probability of an outcome occurring and determine the potential payout relative to your stake." },
  { n: "04", title: "Choose Your Market", desc: "Select an outcome based on your personal match analysis." },
  { n: "05", title: "Place Your Wager", desc: "Enter your preferred stake amount while staying within your pre-determined personal limit." },
  { n: "06", title: "Follow the Action", desc: "Track the match progress to see how your selected market develops." },
  { n: "07", title: "Settlement", desc: "Once the official match results are confirmed, all wagers are settled accordingly based on the final, official outcome." },
];

const strategicMarkets = [
  { title: "Match & Set Winner", desc: "Ideal for straightforward predictions based on player form or head-to-head records." },
  { title: "Correct Score", desc: "High-value market focused on whether a match finishes in straight sets (2-0) or goes to a decider (2-1)." },
  { title: "Set & Point Handicaps", desc: "Level the playing field when heavy favorites face underdogs by applying synthetic point or set margins." },
  { title: "Total Points", desc: "Allows you to bet on overall match duration and competitiveness regardless of who ultimately wins." },
  { title: "Live In-Play", desc: "Offers dynamic, real-time odds that adjust after every rally and momentum shift during a live match." },
];

const detailedMarkets = [
  { title: "Match Winner", desc: "The most straightforward market. You simply pick Player A or Player B to win the entire contest." },
  { title: "Set Winner", desc: "Focuses on individual sets. A favorite might start slowly, making individual set markets attractive for specific tactical assessments." },
  { title: "Correct Score", desc: "Because matches are best-of-three, the options are limited to 2-0, 2-1, 0-2, or 1-2. This requires predicting both the winner and match length." },
  { title: "Total Points (Over/Under)", desc: "The oddsmaker sets an estimated total line for combined points scored across the entire match or a single set. You predict if the total will be over or under that figure." },
  { title: "Handicap Betting", desc: "Designed to balance uneven matchups. A strong favorite might carry a -1.5 set handicap, meaning they must win 2-0 for the selection to succeed." },
];

const liveKeyFactors = [
  { title: "Point Momentum", desc: "A player can gain an advantage after winning several points in a row or when their opponent makes repeated mistakes." },
  { title: "Player Fatigue", desc: "Tiredness can affect a player's movement, smash power, and ability to recover between rallies." },
  { title: "Court Conditions", desc: "Air movement and court conditions can sometimes affect how players control the shuttle." },
  { title: "In-Game Tactics", desc: "Players may change their strategy during the match, such as adjusting their returns, net play, or shot placement." },
];

const inPlayFactors = [
  { title: "Current Score & Lead Margins", desc: "A three-to-four point lead in a 21-point set drastically alters live probabilities." },
  { title: "Rally Lengths & Energy Levels", desc: "Longer rallies often favor fitter, defensive-minded players over aggressive attackers as the match wears on." },
  { title: "Tactical Adjustments", desc: "Observing when a player successfully changes their net strategy or exploits an opponent's weak backhand can inform in-play decisions." },
  { title: "Physical Condition", desc: "Visible signs of discomfort, heavy breathing, or medical timeouts impact a player's ability to maintain high intensity." },
];

const tournamentTiers = [
  { title: "Major Championships & BWF Super 1000s", desc: "Offer the highest ranking points and prize pools, ensuring peak player preparation and full-intensity effort." },
  { title: "Super 750 Events", desc: "Events like the India Open, Japan Open, and French Open feature top 32 compulsory entries, creating dense, highly competitive draws right from the opening round." },
  { title: "Team Competitions", desc: "The Thomas, Uber & Sudirman Cups introduce unique national team dynamics where pressure, match order, and bench depth heavily influence individual player performances." },
];

const tournamentConsiderations = [
  { title: "Singles vs. Doubles Context", desc: "Singles matches emphasize individual stamina and court coverage, whereas doubles formats rely heavily on communication, positioning, and high-speed flat exchanges." },
  { title: "Travel and Fatigue", desc: "Players competing in back-to-back weekly tournaments across different time zones often face physical fatigue in early rounds." },
  { title: "Knockout Pressures", desc: "High-tier events feature top-ranked opponents right from early rounds, unlike lower-tier tournaments where seeded players face easier paths early on." },
];

const preMatchFactors = [
  { title: "Head-to-Head (H2H) Records", desc: "Certain playstyles consistently cause problems for specific opponents, regardless of overall world rankings." },
  { title: "Recent Player Form", desc: "Check results over the last 3-5 tournaments to gauge consistency and confidence." },
  { title: "Injury & Fitness History", desc: "Medical withdrawals or mid-match retirements in recent events can signal underlying physical limitations." },
  { title: "Playing Styles", desc: "Matchups between aggressive smashers and patient defensive retrievers often produce extended three-set battles." },
  { title: "Event Importance", desc: "Players often peak for World Tour Super 750/1000 events while using lower-tier tournaments to test tactical adjustments." },
];

const responsibleTips = [
  { label: "Set Personal Limits", desc: "Establish daily or weekly deposit limits and strictly adhere to them." },
  { label: "Never Chase Losses", desc: "Attempting to recover lost funds by placing larger wagers increases risk and emotional stress." },
  { label: "Bet Within Your Budget", desc: "Only use discretionary funds that you can comfortably afford to spend on entertainment." },
  { label: "Take Regular Breaks", desc: "Step away from betting markets to clear your mind and prevent fatigue." },
  { label: "Know Local Laws & Age Limits", desc: "Ensure you meet all legal age requirements and local regulations before participating." },
];

export default function BadmintonPage() {
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
      <SportHero src="/badminton.png" alt="Badminton Betting at 1xPlay" desktopPosition="object-right">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
          <span className="sport-hero-eyebrow font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">
            Badminton Betting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className=""
        >
         Badminton Betting Explore Live Matches, Markets & Tournaments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          Explore live matches, structured markets, and major BWF tournaments through a secure,
          easy-to-navigate sports portal built for adult users in India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 flex-wrap max-sm:justify-center"
        >
          <a href="#markets" className="btn btn-gold btn-large gap-2">
            <span>Explore Markets</span> <FaArrowRight size={12} />
          </a>
          <Link href="/blog" className="btn btn-ghost btn-large">
            <span>How to Start</span>
          </Link>
        </motion.div>
      </SportHero>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Introduction */}
        <EditorialBlock num="01" eyebrow="Overview" title="Introduction to Badminton Betting">
          <div className="max-w-3xl space-y-4">
            <p>
              Badminton is one of the fastest racket sports in the world, combining swift footwork, explosive smashes,
              and tactical finesse. As the sport continues to grow in popularity across India and globally, fans
              increasingly engage with the action through online betting markets.
            </p>
            <p>
              Whether you want to follow world-class singles action or high-paced doubles events, understanding how
              betting options work allows you to evaluate every match with better clarity. Through 1Xplay, adult users
              can access a structured platform designed to present pre-match and in-play options across major events
              clearly.
            </p>
            <p>
              Badminton betting involves predicting specific outcomes within a sanctioned badminton match or tournament.
              Unlike traditional spectator sports where fans simply watch the game unfold, engaging with match markets
              requires analyzing player statistics, tactical setups, and ongoing game momentum.
            </p>
          </div>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Two Ways to Approach Match Coverage
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {twoWays.map((w) => (
              <InfoCard key={w.title} title={w.title} desc={w.desc} />
            ))}
          </div>
          <div className="mt-8">
            <Callout>
              Fans follow badminton matches through structured markets to apply their analytical understanding of the
              sport. Platform features on 1Xplay allow users to navigate these available markets easily and track
              competitive events as they happen.
            </Callout>
          </div>
        </EditorialBlock>

        {/* 02 — How it works */}
        <WideBlock num="02" eyebrow="Step by Step" title="How Badminton Betting Works" id="how-to-start">
          <div className="max-w-3xl space-y-4">
            <p>
              Navigating a badminton market requires understanding match scoring and how bookmakers structure their
              odds. A standard badminton match is played as a best-of-three sets format, with each set played to 21
              points (using rally scoring).
            </p>
            <p className="text-white/85">To participate responsibly, follow this basic step-by-step process:</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {howToSteps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.03]"
              >
                <div className="font-[var(--font-bebas)] text-[26px] leading-none text-[#01A3F6] mb-3">{s.n}</div>
                <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white mb-1.5">{s.title}</h4>
                <p className="text-[12.5px] leading-[1.6] text-muted font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </WideBlock>

        {/* 03 — Markets */}
        <WideBlock num="03" eyebrow="Markets" title="Popular Badminton Betting Markets" id="markets">
          <p className="max-w-3xl">
            Understanding the diverse array of badminton betting markets helps you focus on specific aspects of a match
            rather than relying solely on overall match winners. The categories below break down the primary betting
            markets available for professional badminton matches.
          </p>

          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Strategic Overview of Core Markets
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {strategicMarkets.map((m, i) => (
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
                    Core Market
                  </span>
                  <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white">{m.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-9 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Detailed Market Breakdown
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailedMarkets.map((m) => (
              <InfoCard key={m.title} title={m.title} desc={m.desc} />
            ))}
          </div>
        </WideBlock>

        {/* 04 — Live (split media) */}
        <SplitMedia
          num="04"
          eyebrow="In-Play"
          title="Live Badminton Betting"
          image="/14.png"
          alt="Live Badminton Betting at 1xPlay"
        >
          <p>
            The fast pace of badminton makes live badminton betting exciting and constantly changing. A single rally can
            quickly change the momentum of a match, so it is important to pay attention to what is happening on the
            court.
          </p>
          <p>
            By watching the on-court factors closely, users can better understand how a badminton match is developing
            while exploring the available live betting markets, reacting to shifts as they happen instead of relying only
            on pre-match predictions.
          </p>
        </SplitMedia>

        {/* 05 — Live factors */}
        <WideBlock num="05" eyebrow="Reading The Court" title="Key Factors in Live Betting">
          <p className="max-w-3xl">
            Because conditions change rapidly, analyzing live dynamics requires patience and careful monitoring rather
            than emotional reactions. Keep an eye on these on-court signals as a match unfolds:
          </p>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Key Factors to Watch
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {liveKeyFactors.map((f) => (
              <InfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>

          <p className="mt-9 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            How In-Play Odds Move
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inPlayFactors.map((f) => (
              <InfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-white/60">
            Live betting carries inherent volatility because conditions change rapidly, so treat every in-play decision
            as a response to what the match is actually showing you.
          </p>
        </WideBlock>

        {/* 06 — Tournaments */}
        <WideBlock num="06" eyebrow="Calendar" title="Understanding Badminton Tournaments">
          <p className="max-w-3xl">
            Tournament context plays a significant role in how players perform throughout the calendar year. Analyzing
            badminton tournaments involves looking at player motivation, scheduling density, and event tiering. Here is
            how each tier functions from a sports analysis perspective:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {tournamentTiers.map((t) => (
              <InfoCard key={t.title} title={t.title} desc={t.desc} />
            ))}
          </div>
          <p className="mt-9 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Key Considerations Across Major Events
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {tournamentConsiderations.map((t) => (
              <InfoCard key={t.title} title={t.title} desc={t.desc} />
            ))}
          </div>
        </WideBlock>

        {/* 07 — Pre-match factors */}
        <WideBlock num="07" eyebrow="Do Your Research" title="Factors to Consider Before Betting">
          <p className="max-w-3xl">
            Before placing a wager, conducting thorough pre-match research helps ground your choices in data rather than
            intuition:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {preMatchFactors.map((f) => (
              <InfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-white/60">
            While careful analysis improves your understanding of a matchup, unpredictable elements like unexpected
            injuries or unforced errors mean no outcome is guaranteed.
          </p>
        </WideBlock>

        {/* 08 — Why 1Xplay (split media) */}
        <SplitMedia
          num="08"
          eyebrow="Why 1Xplay"
          title="Why Explore Badminton Betting on 1Xplay?"
          image="/15.png"
          alt="Badminton Betting on 1xPlay"
          reverse
        >
          <p>
            1Xplay offers an intuitive space built for sports enthusiasts seeking organized match access and responsive
            sports markets.
          </p>

          <div className="flex flex-col gap-3">
            <FeatureRow icon={FaChartLine} title="Clear Market Presentation">
              Odds and market lines are displayed cleanly across major BWF events and local circuits.
            </FeatureRow>
            <FeatureRow icon={FaTv} title="In-Play Tracking">
              Track active matches easily with rapidly updated live odds designed for fast-paced racket sports.
            </FeatureRow>
            <FeatureRow icon={FaGlobe} title="Broad Sports Coverage">
              Beyond racket sports, explore{" "}
              <Link href="/tennis" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                tennis betting
              </Link>
              , switch to{" "}
              <Link href="/soccer" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                live soccer betting
              </Link>
              , or follow{" "}
              <Link href="/cricket" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                online cricket betting
              </Link>
              .
            </FeatureRow>
            <FeatureRow icon={FaMobileAlt} title="User-Friendly Navigation">
              Simple layouts make moving between live events, pre-match lists, and account settings straightforward on
              both desktop and mobile devices.
            </FeatureRow>
          </div>
        </SplitMedia>

        {/* Responsible betting */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(1,163,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#01A3F6]/10 border border-[#01A3F6]/25 flex items-center justify-center text-[#01A3F6] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">
                Responsible Badminton Betting
              </h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                Sports betting should always be approached strictly as a form of entertainment, not as a financial
                investment or money-making scheme. To maintain healthy habits, keep the following principles in mind:
              </p>
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

      <BadmintonFaq />

      {/* ── Final CTA ── */}
      <section id="join-experience" className="relative z-10 px-[5%] pb-28 scroll-mt-24">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag mb-5">Get Started</span>
            <h2 className="section-title">
              Explore Badminton Betting at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                From world-class singles action to high-paced doubles events, 1Xplay presents pre-match and in-play
                badminton options across major BWF tournaments through a clean, easy-to-navigate platform.
              </p>
              <p className="text-white font-normal bg-[#01A3F6]/[0.07] border-l-2 border-[#01A3F6] p-4 rounded-r-lg">
                Remember that no outcome is ever guaranteed. Analyze the matchup, bet within limits you set for yourself,
                and keep badminton betting an enjoyable form of entertainment.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 max-sm:justify-center">
              <a href="https://www.1xplay.games" className="btn btn-gold btn-large">
                Register &amp; Join Now <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link href="/games" className="btn btn-ghost btn-large">
                Explore Game Hub
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

function FeatureRow({
  icon: Icon,
  title,
  children,
  accent = ACCENT,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="flex gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all hover:border-[#01A3F6]/30">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${accent}1A`, color: accent }}
      >
        <Icon size={15} />
      </span>
      <div>
        <p className="font-[var(--font-syne)] text-[14px] font-bold text-white mb-1">{title}</p>
        <p className="text-[13px] leading-[1.7] text-muted font-light">{children}</p>
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white font-normal bg-[#01A3F6]/[0.07] border-l-2 border-[#01A3F6] p-4 rounded-r-lg">
      {children}
    </p>
  );
}
