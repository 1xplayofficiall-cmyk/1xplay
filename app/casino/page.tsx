"use client";

import clsx from "clsx";
import Link from "next/link";
import CasinoFaq from "../components/CasinoFaq";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaCheck, FaExclamationTriangle, FaArrowRight, FaCoins, FaMobileAlt } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import { SportHero } from "../components/SportHeroMedia";
import { EyebrowHead, WideBlock, SplitMedia } from "../components/SportPageBlocks";
import CasinoGamesMarquee, { type CasinoGameCard } from "../components/CasinoGamesMarquee";

const ACCENT = "#01A3F6";

const games: CasinoGameCard[] = [
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/money_heist.png", badge: "hot" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/lucy_game.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/aviator.jpg", badge: "new" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/teen_pati.png", badge: "hot" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/disco_club.png", badge: "new" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/naughty_button.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/chiken_road.jpeg", badge: "new" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/campus_crush.jpeg", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/f1.png", badge: "hot" },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/ramp.jpeg", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game1.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game2.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game3.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game4.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game5.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game6.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game7.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game8.png", badge: null },
  { name: "Play Now", href: "https://www.1xplay.games/", image: "/casino_game9.png", badge: null },
];

const gameTabs = [
  { id: "aviator", label: "Aviator (Crash Game)", emoji: "✈️" },
  { id: "blackjack", label: "Blackjack (Card Classic)", emoji: "🃏" },
  { id: "roulette", label: "Roulette (Spin Wheel)", emoji: "🎡" },
  { id: "baccarat", label: "Baccarat (Elegant Play)", emoji: "💎" },
  { id: "teenpatti", label: "Teen Patti (Indian Poker)", emoji: "👑" },
  { id: "dragontiger", label: "Dragon Tiger (Quick Draw)", emoji: "🐯" },
];

/* ---------- new editorial content ---------- */
const introParas = [
  "Discovering the right game format is the first step toward a rewarding experience with casino games online. Digital platforms provide convenient access to a wide array of formats, ranging from fast-paced slots to traditional table games. At 1Xplay, visitors can explore diverse game categories designed to suit different playing styles, preference levels, and familiarity with game rules.",
  "Whether you are looking to learn basic card mechanics or explore digital table variations, taking time to understand how each format works ensures a clearer and more structured approach to gaming.",
];

const section02Intro =
  "Digital technology has transformed how players interact with traditional table and card mechanics. Today, an online casino offers classic games in accessible digital formats, combining clear visuals, clear interface designs, and automated deal or spin functions.";
const section02Closing =
  "On the 1Xplay Casino page, visitors can explore different options at their own pace. For beginners, starting with a clear understanding of fundamental mechanics, payout structures, and odds helps establish a grounded approach to gameplay.";

const gameCategories = [
  { emoji: "⚡", title: "Fast-Paced Options", desc: "Games relying entirely on simple probability and random number generation, such as slots, suit players looking for direct, accessible mechanics." },
  { emoji: "🧠", title: "Strategic Formats", desc: "Games like blackjack involve decisions based on standard hand probability, appealing to those who prefer structured choices during play." },
  { emoji: "👁️", title: "Observation-Based Formats", desc: "Options like roulette or baccarat focus on predicting outcomes across defined betting fields without complex hand management." },
];

const section03Intro =
  'Determining the "best" game depends on personal preferences, risk awareness, and how much time you wish to spend learning specific rules. Below is an overview of popular game categories available across digital platforms.';

const gameBreakdowns = [
  {
    emoji: "🎰",
    title: "Online Slots",
    intro: "Online slots are among the most accessible entry points to digital gaming. Built on automated digital reels and symbols, these games rely entirely on random outcome generators.",
    points: [
      ["Simple Gameplay", "Players choose a stake and spin the reels without needing complex strategies."],
      ["Varied Themes", "Designs range from classic fruit machines to thematic story-based visuals."],
      ["Variable Features", "Individual slot titles may include bonus symbols, wild indicators, or multi-line payout paths detailed within each game's paytable."],
    ] as [string, string][],
  },
  {
    emoji: "🎡",
    title: "Roulette",
    intro: "Roulette centers on a spinning wheel and a numbered grid. Players select predictions based on numbers, ranges, or color attributes before the wheel comes to a rest.",
    points: [
      ["Betting Options", "Choice of specific numbers (inside bets) or broader categories like Red/Black and Odd/Even (outside bets)."],
      ["Round Mechanics", "Simple round structures where outcomes depend entirely on where the ball lands on the wheel."],
      ["Rule Awareness", "Understanding payouts for different bet types is key to managing expectations."],
    ] as [string, string][],
  },
  {
    emoji: "🃏",
    title: "Blackjack",
    intro: "Blackjack is a card game played against a dealer hand, where the main objective is to achieve a point total closer to 21 than the dealer without going over.",
    points: [
      ["Hand Values", "Cards 2 through 10 carry face value, face cards count as 10, and Aces count as 1 or 11."],
      ["Player Decisions", "Options to hit, stand, or split depend on the initial deal and dealer visibility."],
      ["Strategic Elements", "Decision-making plays a role in outcome variation, though the underlying probability favors the house long-term."],
    ] as [string, string][],
  },
  {
    emoji: "💎",
    title: "Baccarat",
    intro: "Baccarat is a streamlined card game focused on comparing two hands: the Player and the Banker.",
    points: [
      ["Simple Objective", "Predict which hand will score closest to a total of 9."],
      ["Fixed Rules", "The drawing of a third card is governed by strict, automatic rules rather than player choice."],
      ["Clear Structure", "Its straightforward nature makes it a popular alternative to multi-decision card games."],
    ] as [string, string][],
  },
  {
    emoji: "📺",
    title: "Live Casino Games",
    intro: "Live casino formats stream real-life dealers presenting table games in real time. This brings an interactive visual dimension to traditional formats, allowing players to view card deals and wheel spins live on screen.",
    points: [] as [string, string][],
  },
];

const indiaIntro =
  "Interest in an online casino in India has grown significantly alongside wider internet adoption. However, navigating digital entertainment requires an awareness of regulatory conditions, responsible choices, and platform features.";
const indiaPoints = [
  { title: "Legal and Regulatory Context", desc: "Gaming laws in India vary substantially by state and region. Certain states maintain strict regulations regarding digital wagering, while others distinguish between games of skill and games of chance. Users should always verify local laws applicable in their specific jurisdiction before participating." },
  { title: "Age Eligibility", desc: "Digital platforms require participants to meet minimum legal age requirements (typically 18 or 21 depending on region)." },
  { title: "Verifying Platform Terms", desc: "Before engaging with any platform, review terms of service, account verification requirements, and operational guidelines." },
];

const chooseIntro = "Selecting an appropriate option depends on matching game features to your personal style and goals.";
const chooseFactors = [
  { factor: "Complexity & Rules", consider: "Beginners often benefit from simple formats like slots or baccarat before trying multi-decision games." },
  { factor: "Pace of Play", consider: "Automated slots offer fast rounds, whereas live tables follow a steady, measured physical dealer pace." },
  { factor: "Level of Control", consider: "Games like blackjack allow decision choices, while roulette and slots rely strictly on chance." },
  { factor: "Risk & Volatility", consider: "Higher payout multipliers generally correspond to lower mathematical probabilities of winning." },
];

const oddsIntro = "A clear view of probability and mechanical advantage is essential for any participant.";
const oddsPoints = [
  { title: "The House Edge", desc: "Every casino game carries an inherent mathematical edge that ensures the platform retains a theoretical percentage over millions of rounds." },
  { title: "Odds vs. Payouts", desc: "Understanding the difference between statistical probability and payout ratios prevents unrealistic expectations." },
  { title: "Independence of Rounds", desc: "In chance-based games like roulette or slots, previous results have zero impact on future outcomes. A sequence of identical outcomes does not make a contrasting result more likely in the next round." },
];

const whyIntro = "1Xplay offers a clean, user-focused digital environment designed to help visitors explore online casino options smoothly.";
const whyPoints = [
  { title: "Intuitive Categorization", desc: "Games are grouped logically, letting visitors quickly find table options, slots, or real-time streams." },
  { title: "Transparent Information", desc: "Accessible game descriptions help users understand rules and formats prior to playing." },
];

const mobileIntro = "Modern digital platforms prioritize mobile optimization, allowing users to browse and interact with content across smartphones and tablets.";
const mobilePoints = [
  "Responsive layouts adapt seamlessly to different screen dimensions.",
  "Touchscreen navigation simplifies game discovery and rule reviews.",
  "Stable performance ensures clear video playback for real-time table streams on compatible mobile connections.",
];

const responsibleIntro = "Responsible engagement ensures that digital entertainment remains safe and manageable.";
const responsibleTips = [
  { label: "Set Personal Budgets", desc: "Establish strict limits on time and funds allocated for gaming." },
  { label: "Treat Games as Entertainment", desc: "Never treat casino games as a primary income stream or financial solution." },
  { label: "Avoid Chasing Losses", desc: "Accepting losses as a cost of entertainment prevents emotional, high-risk decisions." },
  { label: "Take Regular Breaks", desc: "Step away regularly to maintain perspective and clear decision-making." },
  { label: "Recognize When to Stop", desc: "If gaming causes stress or affects daily responsibilities, utilize self-exclusion tools or seek professional advice." },
];

export default function CasinoPage() {
  const [selectedGameInfo, setSelectedGameInfo] = useState<string | null>("aviator");
  const { scrollYProgress } = useScroll();

  // Slots Simulator State
  const symbols = ["🍒", "🍋", "💎", "7️⃣", "⭐", "🔔"];
  const [reels, setReels] = useState(["7️⃣", "7️⃣", "7️⃣"]);
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(500);
  const [slotMessage, setSlotMessage] = useState("Spin the reels to win virtual coins!");
  const [spinClass, setSpinClass] = useState([false, false, false]);

  const spin = () => {
    if (spinning || coins < 50) return;
    setSpinning(true);
    setCoins((prev) => prev - 50);
    setSlotMessage("Spinning the reels... 🎰");

    let ticks = 0;
    const interval = setInterval(() => {
      setReels([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      setSpinClass([true, true, true]);
      ticks++;

      if (ticks > 15) {
        clearInterval(interval);
        setSpinClass([false, false, false]);

        const finalReels = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
        ];
        setReels(finalReels);

        let win = 0;
        let msg = "";

        if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
          if (finalReels[0] === "7️⃣") {
            win = 1000;
            msg = "JACKPOT! Triple 7s! +1,000 Coins! 🎉🎰";
          } else if (finalReels[0] === "💎") {
            win = 750;
            msg = "DIAMOND SHINE! Triple Diamonds! +750 Coins! 💎✨";
          } else {
            win = 400;
            msg = `TRIPLE COMBINATION! Three ${finalReels[0]}s! +400 Coins! 🌟`;
          }
        } else if (
          finalReels[0] === finalReels[1] ||
          finalReels[1] === finalReels[2] ||
          finalReels[0] === finalReels[2]
        ) {
          win = 80;
          msg = "Double Match! +80 Coins! 👍";
        } else {
          msg = "No match. Better luck next spin!";
        }

        setCoins((prev) => prev + win);
        setSlotMessage(msg);
        setSpinning(false);
      }
    }, 100);
  };

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
      <SportHero src="/casino.png" alt="Casino Gaming at 1xPlay" desktopPosition="object-right">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
          <span className="sport-hero-eyebrow font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">
            Premium Gaming Exchange
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className=""
        >
         Casino Games Online: Explore Popular Games at 1Xplay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
         
         Discovering the right game format is the first step toward a rewarding experience with casino games online. Digital platforms provide convenient access to a wide array of formats, ranging from fast-paced slots to traditional table games. At 1Xplay, visitors can explore diverse game categories designed to suit different playing styles, preference levels, and familiarity with game rules.
Whether you are looking to learn basic card mechanics or explore digital table variations, taking time to understand how each format works ensures a clearer and more structured approach to gaming.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 flex-wrap max-sm:justify-center"
        >
          <a href="https://www.1xplay.games/games/live-casino" className="btn btn-gold btn-large gap-2">
            <span>Explore Games</span> <FaArrowRight size={12} />
          </a>
          <a href="#slots-game" className="btn btn-ghost btn-large">
            <span>Play Mock Slots</span>
          </a>
        </motion.div>
      </SportHero>

      <CasinoGamesMarquee games={games} />

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <WideBlock num="01" eyebrow="Overview" title="Casino Games Online: Explore Popular Games at 1Xplay">
          <div className="max-w-3xl space-y-4">
            {introParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </WideBlock>

        {/* 02 — Categories */}
        <WideBlock num="02" eyebrow="Game Formats" title="Casino Games Online at 1Xplay">
          <p className="max-w-3xl">{section02Intro}</p>
          <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Different Categories Appeal to Different Individuals
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            {gameCategories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:border-[#01A3F6]/30 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#01A3F6]/10 border border-[#01A3F6]/20 flex items-center justify-center text-[22px] mb-4">
                  {c.emoji}
                </div>
                <h3 className="font-[var(--font-syne)] font-bold text-white text-[16px] mb-2">{c.title}</h3>
                <p className="text-muted text-[13px] leading-[1.7] font-light">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-white/60">{section02Closing}</p>
        </WideBlock>

        {/* 03 — Best casino games (breakdowns) */}
        <WideBlock num="03" eyebrow="Game Guide" title="Best Casino Games Online: Popular Categories to Explore">
          <p className="max-w-3xl">{section03Intro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {gameBreakdowns.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all hover:border-[#01A3F6]/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl bg-[#01A3F6]/10 border border-[#01A3F6]/20 flex items-center justify-center text-[20px]">
                    {g.emoji}
                  </span>
                  <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px]">{g.title}</h3>
                </div>
                <p className="text-muted text-[13px] leading-[1.7] font-light">{g.intro}</p>
                {g.points.length > 0 && (
                  <ul className="mt-4 space-y-2.5 list-none p-0 m-0">
                    {g.points.map(([label, desc]) => (
                      <li key={label} className="flex items-start gap-2.5 text-[13px] leading-[1.6]">
                        <FaCheck className="mt-1 shrink-0 text-[#01A3F6]" size={12} />
                        <span className="text-muted font-light">
                          <span className="text-white/90 font-medium">{label}:</span> {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </WideBlock>

        {/* 04 — Discover games (interactive selector) */}
        <section id="portfolio" className="mx-auto max-w-[1180px] scroll-mt-24">
          <EyebrowHead num="04" eyebrow="Game Lobby" title="Discover a World of Casino Games" />
          <p className="mt-3 text-muted text-[15px] font-light max-w-2xl">
            Every player has unique preferences. Our platform offers a wide selection of classic favorites and interactive modern releases.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Selector menu */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[1.5px] font-bold text-muted mb-2 font-[var(--font-syne)]">Select a Game Category</span>
              {gameTabs.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGameInfo(g.id)}
                  className={clsx(
                    "flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 font-[var(--font-syne)] font-bold text-[14px] cursor-pointer",
                    selectedGameInfo === g.id
                      ? "bg-[#01A3F6]/10 border-[#01A3F6] text-white shadow-lg"
                      : "bg-white/[0.02] border-white/10 text-muted hover:border-white/20 hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{g.emoji}</span>
                    <span>{g.label}</span>
                  </span>
                  <span className={clsx("w-2 h-2 rounded-full", selectedGameInfo === g.id ? "bg-[#01A3F6] animate-pulse" : "bg-white/10")} />
                </button>
              ))}
            </div>

            {/* Details panel */}
            <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(1,163,246,0.05)_0%,transparent_70%)] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {selectedGameInfo === "aviator" && "✈️"}
                      {selectedGameInfo === "blackjack" && "🃏"}
                      {selectedGameInfo === "roulette" && "🎡"}
                      {selectedGameInfo === "baccarat" && "💎"}
                      {selectedGameInfo === "teenpatti" && "👑"}
                      {selectedGameInfo === "dragontiger" && "🐯"}
                    </span>
                    <h3 className="font-[var(--font-syne)] font-bold text-white text-[20px]">
                      {selectedGameInfo === "aviator" && "Aviator"}
                      {selectedGameInfo === "blackjack" && "Blackjack"}
                      {selectedGameInfo === "roulette" && "Roulette"}
                      {selectedGameInfo === "baccarat" && "Baccarat"}
                      {selectedGameInfo === "teenpatti" && "Teen Patti"}
                      {selectedGameInfo === "dragontiger" && "Dragon Tiger"}
                    </h3>
                  </div>
                  <span className="bg-[#01A3F6]/10 border border-[#01A3F6]/30 text-[#01A3F6] text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full">
                    Live Room Available
                  </span>
                </div>

                <div className="text-muted text-[15px] leading-[1.8] font-light space-y-4">
                  {selectedGameInfo === "aviator" && (
                    <>
                      <p>
                        Aviator has quickly become one of the most popular online casino games because of its unique gameplay style and exciting user experience.
                      </p>
                      <p>
                        Unlike classic table games, players watch a virtual plane climb and must cash out their multiplier before the plane flies away. Simple, fast-paced, and highly interactive.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "blackjack" && (
                    <>
                      <p>
                        Blackjack remains one of the most popular casino card games in the world. Its simple gameplay and strategic decision-making make it a favorite among players.
                      </p>
                      <p>
                        Aim to get your hand&apos;s total closer to 21 than the dealer without going over. Engage with live dealers for real card shuffles and real-time interaction.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "roulette" && (
                    <>
                      <p>
                        Few casino games create excitement like Roulette. Every spin offers anticipation, entertainment, and the possibility of exciting outcomes.
                      </p>
                      <p>
                        Choose your bets on individual numbers, color pockets, or odd/even fields, and watch the physical wheel spin via our high-definition real-time video feed.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "baccarat" && (
                    <>
                      <p>
                        Known for its elegant gameplay and straightforward rules, Baccarat continues to attract players looking for fast and enjoyable casino action.
                      </p>
                      <p>
                        Bet on either the Player&apos;s hand, the Banker&apos;s hand, or a Tie. Simple calculation, rapid rounds, and low house edges make it a premium favorite.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "teenpatti" && (
                    <>
                      <p>
                        Teen Patti is one of the most recognized card games among casino enthusiasts. Its exciting gameplay and competitive nature make it a favorite choice for many players.
                      </p>
                      <p>
                        Play this beloved Indian classic online with real professional dealers, competitive tables, and beautiful UI overlays showing the rank of hands.
                      </p>
                    </>
                  )}
                  {selectedGameInfo === "dragontiger" && (
                    <>
                      <p>
                        Dragon Tiger offers quick gameplay and simple rules, making it an excellent option for players who enjoy fast-paced entertainment.
                      </p>
                      <p>
                        A super-fast two-card game where you predict which position—Dragon or Tiger—will draw the card with the higher value. Rounds settle in seconds!
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[12px] text-muted font-light">
                  Join 1xPlay to play this game in high definition with live dealers.
                </span>
                <Link href="/" className="btn btn-gold w-full sm:w-auto shrink-0">
                  Play Live Game
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Slot machine mini-game */}
        <section id="slots-game" className="mx-auto max-w-[1180px] scroll-mt-24">
          <div className="text-left sm:text-center max-w-[650px] mx-auto mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider text-white">05</span>
              <span className="h-[2px] w-10 rounded-full bg-[#01A3F6]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">Slot Simulator</span>
            </div>
            <h2 className="section-title">
              Interactive <span className="text-[#01A3F6]">Slot Machine</span>
            </h2>
            <p className="text-muted text-[14.5px] mt-2 font-light">
              Test your luck with our custom virtual slot game! Spend mock coins, spin the reels, and try to hit matching combinations.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#0078E5] to-[#01A3F6]" />

            {/* Slot Display */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
              <div className="bg-[#09101e] border-4 border-[#01A3F6]/40 p-6 rounded-2xl w-full max-w-[380px] shadow-[0_0_30px_rgba(1,163,246,0.15)] flex flex-col gap-4 relative">
                <div className="grid grid-cols-3 gap-3">
                  {reels.map((symbol, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "h-24 bg-white/[0.03] border border-white/5 rounded-xl flex items-center justify-center text-5xl shadow-inner select-none transition-all",
                        spinClass[idx] && "animate-bounce"
                      )}
                    >
                      {symbol}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center bg-black/40 border border-white/5 px-4 py-2.5 rounded-lg text-xs font-[var(--font-syne)]">
                  <div className="flex items-center gap-1.5 text-muted">
                    <FaCoins className="text-[#01A3F6]" />
                    <span>Coins:</span>
                    <span className="text-white font-bold">{coins}</span>
                  </div>
                  <span className="text-[10px] text-[#01A3F6] font-bold uppercase tracking-[1px]">Cost: 50 / Spin</span>
                </div>
              </div>

              <button
                onClick={spin}
                disabled={spinning || coins < 50}
                className={clsx(
                  "w-full max-w-[380px] font-[var(--font-syne)] font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all border",
                  spinning
                    ? "bg-white/5 border-white/10 text-muted cursor-not-allowed"
                    : coins < 50
                    ? "bg-red-600/10 border-red-600/20 text-red-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#0078E5] to-[#01A3F6] border-transparent text-white hover:shadow-[#01A3F6]/20 hover:scale-105 cursor-pointer active:scale-95"
                )}
              >
                {spinning ? "Spinning..." : coins < 50 ? "Out of Coins" : "Spin Reels 🎰"}
              </button>
            </div>

            {/* Payout / Status */}
            <div className="flex flex-col justify-between w-full lg:w-1/2 min-h-[220px]">
              <div>
                <h3 className="font-[var(--font-syne)] font-bold text-white text-[18px] mb-4">Payout Table</h3>
                <div className="space-y-2.5 text-xs text-muted font-light mb-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">7️⃣ + 7️⃣ + 7️⃣</span>
                    <span className="text-[#01A3F6] font-bold">1,000 Coins Jackpot</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">💎 + 💎 + 💎</span>
                    <span className="text-[#01A3F6] font-bold">750 Coins Payout</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">Three Matching Symbols</span>
                    <span className="text-[#01A3F6] font-bold">400 Coins Payout</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1.5 font-medium text-white">Two Matching Symbols</span>
                    <span className="text-[#01A3F6] font-bold">80 Coins Payout</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#09101e] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-2xl animate-pulse">📢</span>
                <p className="text-white text-[13px] font-[var(--font-syne)] font-medium leading-relaxed">{slotMessage}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Online casino in India */}
        <WideBlock num="06" eyebrow="For Beginners" title="Online Casino in India: What Beginners Should Know">
          <p className="max-w-3xl">{indiaIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {indiaPoints.map((p) => (
              <InfoCard key={p.title} title={p.title} desc={p.desc} />
            ))}
          </div>
          <div className="mt-5">
            <InfoCard title="Complementary Options">
              Beyond table games, many visitors also explore other forms of online entertainment, such as checking odds
              for{" "}
              <Link href="/cricket" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                online cricket betting
              </Link>{" "}
              or reviewing coverage for{" "}
              <Link href="/badminton" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                badminton betting
              </Link>
              .
            </InfoCard>
          </div>
        </WideBlock>

        {/* 07 — How to choose (table) */}
        <WideBlock num="07" eyebrow="Find Your Fit" title="How to Choose Online Casino Games">
          <p className="max-w-3xl">{chooseIntro}</p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <table className="w-full min-w-[520px] text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.03]">
                  <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-wider text-[#01A3F6] font-[var(--font-syne)]">Selection Factor</th>
                  <th className="px-5 py-4 text-[12px] font-bold uppercase tracking-wider text-white/80 font-[var(--font-syne)]">Considerations</th>
                </tr>
              </thead>
              <tbody>
                {chooseFactors.map((row) => (
                  <tr key={row.factor} className="border-t border-white/[0.06]">
                    <td className="px-5 py-4 align-top text-[14px] font-semibold text-white whitespace-nowrap">{row.factor}</td>
                    <td className="px-5 py-4 text-[13px] text-muted font-light leading-[1.7]">{row.consider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.05] p-4">
            <FaExclamationTriangle className="mt-0.5 shrink-0 text-[#01A3F6]" size={15} />
            <p className="text-[13.5px] text-white/85 font-light">
              Note: No game style or strategy guarantees a winning outcome.
            </p>
          </div>
        </WideBlock>

        {/* 08 — Rules & odds */}
        <WideBlock num="08" eyebrow="Know the Maths" title="Understanding Casino Game Rules and Odds">
          <p className="max-w-3xl">{oddsIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {oddsPoints.map((p) => (
              <InfoCard key={p.title} title={p.title} desc={p.desc} />
            ))}
          </div>
        </WideBlock>

        {/* 09 — Why 1Xplay */}
        <WideBlock num="09" eyebrow="Why 1Xplay" title="Why Explore Online Casino Games on 1Xplay?">
          <p className="max-w-3xl">{whyIntro}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {whyPoints.map((p) => (
              <InfoCard key={p.title} title={p.title} desc={p.desc} />
            ))}
            <InfoCard title="Multi-Category Access">
              Users can easily transition between traditional casino options and sports coverage, including updates on{" "}
              <Link href="/soccer" className="text-[#01A3F6] underline underline-offset-2 hover:text-white">
                live soccer betting
              </Link>
              .
            </InfoCard>
          </div>
        </WideBlock>

        {/* 10 — Mobile */}
        <SplitMedia
          num="10"
          eyebrow="On-The-Go Play"
          title="Online Casino Games on Mobile"
          image="/casino1.png"
          alt="Mobile Casino Gaming at 1xPlay"
          sizes="(max-width:1024px) 100vw, 50vw"
          imageClassName="object-fit object-top"
          overlay={
            <div className="absolute bottom-4 left-4 bg-[#0078E5] text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#0078E5]/30">
              <FaMobileAlt size={11} /> 100% Mobile Friendly
            </div>
          }
        >
          <p>{mobileIntro}</p>
          <div className="flex flex-col gap-3">
            {mobilePoints.map((b) => (
              <div key={b} className="flex items-start gap-2.5 text-[13.5px] text-white/85 font-light leading-[1.6]">
                <FaCheck className="mt-1 text-[#01A3F6] shrink-0" size={13} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </SplitMedia>

        {/* 11 — Responsible */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(1,163,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#01A3F6]/10 border border-[#01A3F6]/25 flex items-center justify-center text-[#01A3F6] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">
                Responsible Online Casino Gaming
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

      <CasinoFaq />

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-4">Join the Action</span>
            <h2 className="section-title">
              Join the Excitement at <br />
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">1xPlay Casino</span>
            </h2>
            <p className="text-muted text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[620px] mx-auto mb-10">
              Create your account today and discover a world of premium online casino entertainment built for today&apos;s players. Enjoy quick setups, secure payouts, and smooth play.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn btn-gold btn-large">
                Create Your Account
              </Link>
              <Link href="/games" className="btn btn-ghost btn-large">
                Back to Games Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────── Reusable blocks ─────────── */

function InfoCard({ title, desc, children }: { title: string; desc?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.03]">
      <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white mb-2">{title}</h4>
      <p className="text-[13px] leading-[1.7] text-muted font-light">{desc ?? children}</p>
    </div>
  );
}
