"use client";

import Link from "next/link";
import TennisFaq from "../components/TennisFaq";
import { motion, useScroll } from "framer-motion";
import { FaCheck, FaArrowRight, FaExclamationTriangle, FaBolt } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { EditorialBlock, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import { SportHero } from "../components/SportHeroMedia";

const ACCENT = "#01A3F6";

/* ---------- content data ---------- */
const introParas = [
  "Tennis is one of the world's most dynamic individual sports, offering non-stop action across the ATP and WTA tours, Grand Slams, and regional tournaments throughout the calendar year. Unlike team sports where bench depth or tactical substitutions can alter outcomes, tennis centers entirely on two players — or two pairs in doubles — competing head-to-head. This direct dynamic makes online tennis betting a popular choice for fans who enjoy analyzing player performance, tactical matchups, and match statistics.",
  "At its foundation, tennis betting involves reviewing upcoming or ongoing tennis matches and predicting specific outcomes across structured markets. Rather than relying on simple luck, evaluating player form, head-to-head records, and court surfaces provides valuable context before placing a wager. Whether you follow fast-paced hard-court battles or grueling rallies on clay, understanding match dynamics enhances your overall viewing experience.",
  "On the 1Xplay Tennis platform, sports enthusiasts can explore a wide variety of pre-match options, follow live tennis betting opportunities, and access clear market views designed for smooth navigation across desktop and mobile devices.",
];

const howSteps = [
  { title: "Select a Tennis Match", desc: "Browse the schedule of upcoming or live fixtures on 1Xplay to find a match across international or regional events." },
  { title: "Review the Players", desc: "Check essential pre-match details, including ATP or WTA rankings, recent form, head-to-head history, and physical conditioning." },
  { title: "Check Available Markets", desc: "Explore the types of selections offered, ranging from predicting the outright match winner to set scores and total games." },
  { title: "Understand Tennis Betting Odds", desc: "Examine the numerical values assigned to each player or market outcome to evaluate the market's expectation and potential returns." },
  { title: "Choose a Market", desc: "Select the specific outcome that aligns best with your pre-match analysis." },
  { title: "Place a Wager", desc: "Enter your intended stake into your digital bet slip, review the selection details carefully, and confirm your entry." },
  { title: "Follow the Match", desc: "Watch live broadcasts or monitor point-by-point digital trackers as the contest unfolds." },
  { title: "Understand the Settlement", desc: "Once the match concludes and official results are recorded, your entry is settled according to the final score line and market rules." },
];
const howClosing =
  "Following these structured steps helps maintain clarity, though it is important to remember that no analytical process guarantees a winning outcome due to the inherent unpredictability of live sports.";

const oddsIntro =
  "Grasping how tennis betting odds work is essential for anyone interested in sports markets. Odds serve two main functions: they reflect the probability assigned to a particular outcome by the market, and they determine the return relative to the amount staked.";
const whatOddsRepresent =
  "Odds are established using statistical data, historical performance, rankings, and public market demand. When a player is assigned shorter tennis odds (for example, 1.50 in decimal format or 1/2 in fractional format), the market views that player as the favorite with a higher likelihood of winning. Consequently, potential returns on shorter odds are lower. Conversely, longer odds (such as 3.50 or 5/2) indicate an underdog with a lower estimated probability of success, offering a higher potential return if an upset occurs.";
const whyOddsShift = [
  "Unannounced physical issues or minor injuries sustained during warm-ups.",
  "Sudden weather changes affecting open-air court conditions.",
  "Heavy betting volume favoring a specific player.",
  "Late reports regarding court speed or ball bounce characteristics.",
];
const oddsNotGuarantees =
  "Even heavily favored players with short odds can experience off days, struggle with environmental conditions, or face an inspired opponent. Therefore, odds should be viewed purely as market indicators rather than absolute forecasts.";

const marketsIntro =
  "Tennis offers a wide range of selection types beyond simply picking who will win the match. Understanding these distinct options allows you to choose markets that fit your specific analysis.";
const marketBreakdowns = [
  { emoji: "🏆", title: "Match Winner", desc: "The Match Winner market is the most direct form of selection. You simply choose which player (or doubles team) will win the contest overall. Because tennis matches cannot end in a draw, there are only two possible outcomes." },
  { emoji: "🎯", title: "Set Betting", desc: "In set betting markets, you predict the exact set score of the match (for example, 2-0 or 2-1 in a best-of-three-set match). This market requires deeper evaluation of whether a favorite will dominate completely or if the underdog can steal a set based on their serve and return capabilities." },
  { emoji: "🔢", title: "Total Games", desc: "Total Games markets (often referred to as Over/Under markets) involve predicting whether the combined number of games played by both players will be above or below a specified benchmark set by the market. High-serving battles between big servers often feature more games and tiebreaks, pushing total game counts higher." },
  { emoji: "⚖️", title: "Handicap Markets", desc: "Handicap markets level the playing field between a heavy favorite and an underdog. A game handicap assigns a virtual deficit (e.g., -4.5 games) to the favorite or a virtual advantage (e.g., +4.5 games) to the underdog. The selection wins if your chosen player covers the handicap once all games are tallied." },
  { emoji: "📊", title: "Player and Match Markets", desc: "Depending on event coverage, additional options may include predicting who will win the first set, total aces served, or break-point conversion totals. Market availability varies depending on the tournament tier and fixture profile." },
];

const liveIntro =
  "The fast-paced nature of point-by-point scoring makes live tennis betting one of the most engaging ways to follow an ongoing match. In-play markets allow you to respond dynamically as momentum shifts from one player to another.";
const liveFactors = [
  { title: "Current Score & Set Position", desc: "A player holding break points or leading by a set experiences immediate odds shifts." },
  { title: "Serve Performance", desc: "High first-serve percentages and easy service holds build pressure on the receiver." },
  { title: "Breaks of Serve", desc: "Securing a break of serve significantly alters set momentum and live market pricing." },
  { title: "Unforced Errors & Momentum", desc: "Noticeable drop-offs in consistency or visible fatigue can shift momentum quickly." },
  { title: "Physical Condition & Medical Timeouts", desc: "Signs of cramping or injury breaks can dramatically alter a match's trajectory." },
];
const liveClosing =
  "While live tennis betting provides real-time interaction, in-play markets move rapidly. Broadcast latencies and sudden momentum swings mean that in-play selections carry unique risks. Maintaining a calm, objective mindset is crucial when following live action.";

const factorsIntro =
  "Analyzing a tennis fixture requires evaluating multiple performance indicators rather than relying on ranking alone.";
const factors = [
  { title: "Recent Player Form", desc: "Check a player's recent win-loss record over their last 5 to 10 matches to gauge confidence and consistency." },
  { title: "Head-to-Head Record", desc: "Certain players possess tactical styles or left-handed angles that create matchup difficulties for specific opponents, regardless of overall rank." },
  { title: "ATP/WTA Ranking Context", desc: "While rankings reflect long-term success over 52 weeks, they do not always capture a player's immediate physical form or current surface preference." },
  { title: "Court Surface Adaptation", desc: "Players often specialize on particular surfaces; a high-ranked clay specialist may struggle on fast grass courts." },
  { title: "Workload and Fitness", desc: "Examine how many hours a player spent on court in previous tournament rounds. Long, five-set matches can cause physical depletion in subsequent outings." },
  { title: "Serve and Return Metrics", desc: "Review statistics like first-serve percentage, aces per match, and break-point conversion rates to assess tactical strengths." },
];
const factorsClosing =
  "Combining these analytical factors helps build a complete picture of a match, though unexpected performance variations are always possible in professional sports.";

const surfacesIntro =
  "Court surface plays a fundamental role in shaping how tennis matches are played. Understanding how surface conditions alter ball speed and bounce is key to accurate match evaluation.";
const surfaces = [
  { title: "Hard Courts", surface: "Hard", color: "#2E7BD8", desc: "Hard courts (made of acrylic or synthetic materials over concrete) offer a neutral balance between speed and bounce consistency. They reward well-rounded players with strong serves, solid baseline consistency, and reliable court coverage." },
  { title: "Clay Courts", surface: "Clay", color: "#D8743F", desc: "Clay courts significantly slow down the speed of the ball while producing a higher, heavier bounce. This surface favors patient baseliners who excel at extended rallies, sliding movement, and heavy topspin, while reducing the immediate advantage of big servers." },
  { title: "Grass Courts", surface: "Grass", color: "#2E9E5B", desc: "Grass courts are the fastest playing surface in tennis, producing a low, slick ball bounce. Points tend to be shorter, strongly favoring big servers, aggressive net-rushers, and players with quick reaction times on return." },
];

const prematchVsLiveIntro = "Both pre-match and live formats offer distinct approaches to reviewing tennis fixtures.";
const prematchVsLive = [
  { title: "Pre-Match Tennis Betting", desc: "Allows ample time for detailed statistical research, historical head-to-head comparisons, and calm decision-making before the first serve. Odds remain relatively stable until shortly before the match begins." },
  { title: "Live Tennis Betting", desc: "Offers real-time engagement where you evaluate active match momentum, court body language, and live tactical changes. However, live odds fluctuate rapidly, requiring quick decisions under fast-changing conditions." },
];
const prematchVsLiveClosing =
  "Neither approach guarantees superior results; choosing between them depends on your personal analytical preference and comfort level.";

const whyClosing =
  "Explore upcoming tournament draws and review available odds directly on the 1Xplay Tennis page to start your journey.";

const beginnerPoints = [
  { title: "Start with Match Winners", desc: "Begin by focusing on straightforward match winner selections before exploring complex handicap or set score markets." },
  { title: "Study Tournament Context", desc: "Understand whether a tournament is a Grand Slam (best-of-five sets for men) or a standard ATP/WTA event (best-of-three sets), as match length impacts player stamina." },
  { title: "Focus on a Few Tournaments", desc: "Follow specific tour events closely rather than attempting to track every match across multiple simultaneous events." },
  { title: "Set Spending Limits", desc: "Decide on a personal budget before viewing any markets, and stick to it strictly regardless of match outcomes." },
  { title: "Avoid Chasing Losses", desc: "Accept that unsuccessful predictions are part of sports analysis. Never increase stakes impulsively to recover previous losses." },
];

const responsibleIntro =
  "Maintaining sports engagement as a safe, enjoyable activity requires clear personal boundaries and responsible behavior.";
const responsibleTips = [
  { label: "Participate Legally", desc: "Ensure that engaging with sports markets is fully compliant with all local laws, regulatory guidelines, and age requirements in your area." },
  { label: "Treat Betting as Entertainment", desc: "View sports selections solely as a way to enhance your viewing interest, never as a financial plan or income source." },
  { label: "Set Clear Personal Boundaries", desc: "Establish daily, weekly, or monthly time and spending limits, and pause immediately once those limits are reached." },
  { label: "Bet with a Clear Mind", desc: "Avoid making selections under emotional stress, fatigue, or the influence of alcohol." },
  { label: "Recognize When to Stop", desc: "If sports tracking ceases to be fun or begins impacting your personal life or finances, step away from the platform and reach out to professional support organizations." },
];

export default function TennisPage() {
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

      <Hero />

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <EditorialBlock num="01" eyebrow="Overview" title="Online Tennis Betting at 1Xplay">
          <div className="max-w-3xl space-y-4">
            {introParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </EditorialBlock>

        {/* 02 — How it works */}
        <WideBlock num="02" eyebrow="Step by Step" title="How Tennis Betting Works" id="basics">
          <p className="max-w-3xl">
            Engaging with tennis markets follows a straightforward, step-by-step process. Developing a consistent routine allows you to analyze available data carefully before confirming any selection.
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
        <WideBlock num="03" eyebrow="Reading Odds" title="Understanding Tennis Betting Odds">
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
        <WideBlock num="04" eyebrow="Betting Markets" title="Popular Tennis Betting Markets" id="markets">
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
          title="Live Tennis Betting"
          image="/12.png"
          alt="Live Tennis Betting at 1xPlay"
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
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)] pt-1">
            Navigating Live Uncertainty
          </p>
          <p className="text-white/60">{liveClosing}</p>
        </SplitMedia>

        {/* 06 — Factors */}
        <WideBlock num="06" eyebrow="Match Analysis" title="Factors to Consider Before Tennis Betting">
          <p className="max-w-3xl">{factorsIntro}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {factors.map((f) => (
              <InfoCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">{factorsClosing}</p>
        </WideBlock>

        {/* 07 — Court surfaces */}
        <WideBlock num="07" eyebrow="Court Surfaces" title="Tennis Betting on Different Court Surfaces">
          <p className="max-w-3xl">{surfacesIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {surfaces.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09101e] p-6"
                style={{ boxShadow: `inset 0 0 0 1px ${s.color}14` }}
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: s.color }} />
                <div
                  className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-35"
                  style={{ background: s.color }}
                />
                <div className="relative z-10">
                  <span
                    className="inline-flex items-center rounded-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] font-[var(--font-syne)]"
                    style={{ backgroundColor: `${s.color}1F`, color: s.color }}
                  >
                    {s.surface}
                  </span>
                  <h4 className="mt-4 font-[var(--font-bebas)] text-[26px] tracking-wide text-white">{s.title}</h4>
                  <p className="mt-2 text-[12.5px] leading-[1.7] text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </WideBlock>

        {/* 08 — Pre-match vs live */}
        <WideBlock num="08" eyebrow="Two Formats" title="Pre-Match vs Live Tennis Betting">
          <p className="max-w-3xl">{prematchVsLiveIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {prematchVsLive.map((p) => (
              <InfoCard key={p.title} title={p.title} desc={p.desc} />
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">{prematchVsLiveClosing}</p>
        </WideBlock>

        {/* 09 — Why 1Xplay (split media) */}
        <SplitMedia
          num="09"
          eyebrow="Why 1Xplay"
          title="Why Explore Tennis Betting on 1Xplay?"
          image="/13.png"
          alt="Tennis Betting on 1xPlay"
          reverse
        >
          <p>
            1Xplay offers a clean, user-focused digital interface tailored for sports enthusiasts looking to follow tennis tournaments around the world.
          </p>
          <div className="flex flex-col gap-3">
            <FeatureRow title="Clear Market Presentation">
              Navigate easily between match winners, set betting, and game totals with an organized, uncluttered layout.
            </FeatureRow>
            <FeatureRow title="Real-Time Live Updates">
              Stay connected to ongoing action with dynamic live tennis odds and point-by-point tracking tools.
            </FeatureRow>
            <FeatureRow title="Mobile Accessibility">
              Access your account, review schedule draw sheets, and check odds seamlessly across mobile devices and desktop screens.
            </FeatureRow>
            <FeatureRow title="Diverse Sports Options">
              In addition to tennis coverage, discover other major sports categories — such as exploring international match
              coverage for{" "}
              <Link href="/cricket" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                online cricket betting
              </Link>{" "}
              or checking options for{" "}
              <Link href="/badminton" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                badminton betting
              </Link>
              .
            </FeatureRow>
            <FeatureRow title="Integrated Gaming Hub">
              For users who enjoy classic gaming options alongside sports, 1Xplay also provides convenient access to a wide
              selection of{" "}
              <Link href="/casino" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                casino games online
              </Link>
              .
            </FeatureRow>
          </div>
          <p className="text-white/60">{whyClosing}</p>
        </SplitMedia>

        {/* 10 — Beginners */}
        <WideBlock num="10" eyebrow="For Beginners" title="Tennis Betting for Beginners">
          <p className="max-w-3xl">
            If you are new to tennis markets, adopting a measured approach helps you learn without unnecessary stress.
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
                Responsible Tennis Betting
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

      <TennisFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-5">Enjoy the Best Online Tennis Betting</span>
            <h2 className="section-title">
              Feel the Thrill of{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#5ecfff] bg-clip-text text-transparent">
                Every Serve
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                From Wimbledon and the Australian Open to ATP Masters and WTA events, tennis offers endless excitement for sports fans. At 1xPlay, we make online tennis betting simple, secure, and enjoyable with live betting markets, real-time odds, and a user-friendly platform designed for modern sports enthusiasts.
              </p>
              <p className="text-white/85">
                If you are looking for a trusted platform for tennis betting online, 1xPlay provides the perfect combination of convenience, performance, and excitement. Join 1xPlay today and experience the thrill of every serve, every set, and every match like never before.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
              <Link href="/apps" className="btn btn-gold btn-large w-full sm:w-auto justify-center">
                Get Started <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/games" className="btn btn-ghost btn-large w-full sm:w-auto justify-center">
                Explore All Games
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── Hero ─────────── */

function Hero() {
  return (
    <SportHero src="/tennis.png" alt="Tennis Betting at 1xPlay" desktopPosition="object-right">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
        <span className="sport-hero-eyebrow font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">
          Tennis Betting
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className=""
      >
        Online Tennis Betting at{" "}
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
        Explore tennis markets and live matches across every Grand Slam, ATP, and WTA event —
        with real-time odds and clear market views built for smooth navigation on any device.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4 flex-wrap max-sm:justify-center"
      >
        <a href="https://www.1xplay.games/sports/tennis/2" className="btn btn-gold btn-large gap-2">
          <span>Start Betting</span> <FaArrowRight size={12} />
        </a>
        <a href="#basics" className="btn btn-ghost btn-large">
          <span>How It Works</span>
        </a>
      </motion.div>
    </SportHero>
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
        <FaBolt size={15} />
      </span>
      <div>
        <p className="font-[var(--font-syne)] text-[14px] font-bold text-white mb-1">{title}</p>
        <p className="text-[13px] leading-[1.7] text-muted font-light">{children}</p>
      </div>
    </div>
  );
}
