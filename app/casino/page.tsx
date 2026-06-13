"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaCheck,
  FaExclamationTriangle,
  FaArrowRight,
  FaCoins,
  FaAward,
  FaUserShield,
  FaBolt,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const ACCENT = "#01A3F6";

const liveWinners = [
  { player: "Player ***348", amount: "₹45,200", game: "Aviator" },
  { player: "Player ***910", amount: "₹18,500", game: "Teen Patti" },
  { player: "Player ***042", amount: "₹1,20,000", game: "Blackjack" },
  { player: "Player ***563", amount: "₹8,000", game: "Slots" },
  { player: "Player ***122", amount: "₹64,300", game: "Roulette" },
  { player: "Player ***715", amount: "₹32,000", game: "Dragon Tiger" },
];

const gameTabs = [
  { id: "aviator", label: "Aviator (Crash Game)", emoji: "✈️" },
  { id: "blackjack", label: "Blackjack (Card Classic)", emoji: "🃏" },
  { id: "roulette", label: "Roulette (Spin Wheel)", emoji: "🎡" },
  { id: "baccarat", label: "Baccarat (Elegant Play)", emoji: "💎" },
  { id: "teenpatti", label: "Teen Patti (Indian Poker)", emoji: "👑" },
  { id: "dragontiger", label: "Dragon Tiger (Quick Draw)", emoji: "🐯" },
];

export default function CasinoPage() {
  const [selectedGameInfo, setSelectedGameInfo] = useState<string | null>("aviator");
  const [progress, setProgress] = useState(0);

  // Slots Simulator State
  const symbols = ["🍒", "🍋", "💎", "7️⃣", "⭐", "🔔"];
  const [reels, setReels] = useState(["7️⃣", "7️⃣", "7️⃣"]);
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(500);
  const [slotMessage, setSlotMessage] = useState("Spin the reels to win virtual coins!");
  const [spinClass, setSpinClass] = useState([false, false, false]);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (top / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="fixed top-[70px] left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0078E5] to-[#01A3F6] shadow-[0_0_12px_rgba(1,163,246,0.6)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 overflow-hidden pt-[110px] pb-[40px] px-[5%]">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(1,163,246,0.07)_0%,transparent_70%)] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,120,229,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">
                  Premium Gaming Exchange
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-[var(--font-bebas)] text-[clamp(44px,6vw,76px)] tracking-[1px] leading-[0.92] text-white mb-6"
              >
                Experience the Ultimate{" "}
                <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(1,163,246,0.15)]">
                  Online Casino
                </span>{" "}
                Entertainment
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[16px] md:text-[18px] text-muted leading-[1.8] font-light mb-8 max-w-[620px]"
              >
                Welcome to 1xPlay Casino, where excitement, entertainment, and premium gaming experiences come together on one modern platform. From classic table cards to live dealer action, enjoy a secure, fast, and responsive vegas-style environment built for today&apos;s players.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 flex-wrap"
              >
                <Link href="#portfolio" className="btn btn-gold btn-large gap-2">
                  <span>Explore Games</span> <FaArrowRight size={12} />
                </Link>
                <Link href="#slots-game" className="btn btn-ghost btn-large">
                  <span>Play Mock Slots</span>
                </Link>
              </motion.div>
            </div>

            {/* Right image card (keeps casino-hero.png) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-[280px] sm:w-[350px] h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#0078E5] to-[#01A3F6] rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/casino-slots.jpg"
                    alt="Online Casino Table Illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-muted tracking-wider">Super Jackpot</span>
                      <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">Mega Slots Pool</span>
                    </div>
                    <span className="bg-[#01A3F6] text-white font-[var(--font-syne)] font-bold text-[13px] px-3 py-1.5 rounded-lg shadow-lg">₹50,00,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Live Winners Ticker */}
          <div className="border border-white/5 bg-[#09101e]/80 backdrop-blur-md py-4 px-6 rounded-2xl flex items-center justify-between gap-6 overflow-hidden">
            <div className="flex items-center gap-2.5 shrink-0 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-green uppercase tracking-[1.5px]">Live Winners</span>
            </div>
            <div className="flex gap-10 overflow-x-auto scrollbar-none w-full text-xs">
              {liveWinners.map((winner, i) => (
                <div key={i} className="flex items-center gap-2.5 whitespace-nowrap text-muted hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-white uppercase">{winner.player}</span>
                  <span className="text-muted">won</span>
                  <span className="text-[#01A3F6] font-mono font-bold">{winner.amount}</span>
                  <span className="text-muted">on</span>
                  <span className="text-[9px] uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white font-semibold">{winner.game}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stat ribbon */}
      <section className="relative z-10 px-[5%] mt-6">
        <div className="mx-auto max-w-[1180px] grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.06]">
          {[
            { v: "6", l: "Game Types" },
            { v: "Live", l: "Dealer Rooms" },
            { v: "24/7", l: "Always Open" },
          ].map((s) => (
            <div key={s.l} className="bg-[#070C13] px-5 py-7 text-center">
              <div className="font-[var(--font-bebas)] text-[clamp(32px,5vw,50px)] leading-none tracking-wide bg-gradient-to-b from-white to-[#01A3F6] bg-clip-text text-transparent">
                {s.v}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted font-[var(--font-syne)] font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Editorial flow ── */}
      <div className="relative z-10 px-[5%] py-[70px] md:py-[100px] space-y-[72px] md:space-y-[110px]">
        {/* 01 — Intro */}
        <WideBlock num="01" eyebrow="Modern Casino Destination" title="Online Casino Gaming Built for Non-Stop Thrills">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <p>
                Online casino gaming has become one of the fastest-growing forms of digital entertainment, and 1xPlay is proud to provide a platform that combines innovation, security, and excitement. Every game is designed to deliver non-stop entertainment and immersive gameplay.
              </p>
              <p>
                At 1xPlay, our goal is simple — to create a premium online casino destination where players can enjoy world-class entertainment anytime and anywhere. Whether you are exploring online casino games for the first time or you are an experienced player looking for high-quality gaming action, 1xPlay offers everything you need for a smooth and enjoyable experience.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl">
              <span className="text-[12px] uppercase text-muted tracking-wider">Why Choose 1xPlay Casino</span>
              {[
                { icon: FaBolt, k: "Performance", v: "Fast Loading Games" },
                { icon: FaUserShield, k: "Security", v: "Protected Environment" },
                { icon: FaCoins, k: "Payments", v: "Quick Withdrawals" },
              ].map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div key={h.k} className={clsx("flex items-center gap-4 py-2", idx < 2 && "border-b border-white/[0.06]")}>
                    <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-muted uppercase">{h.k}</span>
                      <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">{h.v}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </WideBlock>

        {/* 02 — What makes special */}
        <WideBlock num="02" eyebrow="Premium Standouts" title="What Makes 1xPlay Casino Special?">
          <p className="max-w-2xl">
            We focus on creating an experience that is enjoyable, reliable, and easy to access for every player. Here are the core highlights of our casino product.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Massive Game Collection", desc: "Access a wide variety of card tables, slots, and interactive gaming rooms." },
              { title: "Modern & Easy Platform", desc: "A clean, dark interface built to let you navigate seamlessly on any device." },
              { title: "Smooth Cross-Device Play", desc: "Optimized layouts that scale from heavy desktop monitors to light smartphone displays." },
              { title: "Fast Loading Games", desc: "Engineered on next-gen infrastructure to render games instantly without lag." },
              { title: "Live Casino Dealer Rooms", desc: "Experience real croupiers, physical cards, and live roulette feeds in real-time." },
              { title: "Secure Transactions", desc: "Rest easy with rapid deposit settlements and highly protected withdrawal pipelines." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all hover:border-[#01A3F6]/30 hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] border border-[#01A3F6]/20 mb-5">
                    <FaAward size={20} />
                  </div>
                  <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] mb-3 group-hover:text-[#01A3F6] transition-colors">{card.title}</h3>
                  <p className="text-muted text-[13.5px] leading-[1.7] font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 text-center">
            <p className="text-muted text-[14px] font-light">
              ✔ Dedicated customer support &nbsp;&bull;&nbsp; ✔ Mobile-friendly access &nbsp;&bull;&nbsp; ✔ Exciting new gaming experiences updated weekly
            </p>
          </div>
        </WideBlock>

        {/* 03 — Discover games (interactive selector) */}
        <section id="portfolio" className="mx-auto max-w-[1180px] scroll-mt-24">
          <EyebrowHead num="03" eyebrow="Game Lobby" title="Discover a World of Casino Games" />
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

        {/* 04 — Slot machine mini-game */}
        <section id="slots-game" className="mx-auto max-w-[1180px] scroll-mt-24">
          <div className="text-center max-w-[650px] mx-auto mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider text-[#01A3F6]/15">04</span>
              <span className="h-[2px] w-10 rounded-full bg-[#01A3F6]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">Slot Simulator</span>
            </div>
            <h2 className="font-[var(--font-bebas)] text-[clamp(28px,4vw,50px)] text-white tracking-[1px] leading-tight">
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

        {/* 05 — Mobile (split casino-mobile.png) */}
        <section className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <EyebrowHead num="05" eyebrow="On-The-Go Play" title="Play Anytime with Mobile Casino Gaming" />
              <p className="mt-5 text-muted text-[15px] leading-[1.8] font-light">
                Today&apos;s players want flexibility, and 1xPlay is designed to deliver exactly that. Our platform is fully optimized for smartphones, tablets, laptops, and desktop devices, allowing players to enjoy their favorite casino games whenever and wherever they want.
              </p>
              <h4 className="mt-6 font-[var(--font-syne)] text-[14px] font-bold text-white uppercase tracking-wider mb-4">Benefits of Mobile Play:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Instant access to casino games",
                  "Smooth performance across devices",
                  "Fast navigation and gameplay",
                  "No complicated setup process",
                  "Convenient gaming from anywhere",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5 text-[13px] text-white/85 font-medium">
                    <FaCheck className="text-[#01A3F6] shrink-0" size={13} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-lg group">
              <Image src="/andar-bahar.jpg" alt="Mobile Casino Gaming at 1xPlay" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[#0078E5] text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#0078E5]/30">
                <FaMobileAlt size={11} /> 100% Mobile Friendly
              </div>
            </div>
          </div>
        </section>

        {/* 06 — Safe & secure */}
        <WideBlock num="06" eyebrow="Safe & Protected" title="A Safe and Secure Gaming Environment">
          <p className="max-w-2xl">
            At 1xPlay, user security remains one of our highest priorities. We use advanced security systems and modern technologies to safeguard your gaming journey.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Secure Account Protection", desc: "Two-factor authorization guards and verified logging protocols ensure unauthorized actors stay out." },
              { title: "Advanced Encryption Tech", desc: "Robust SSL encryption methods encrypt data packets traveling between your client and our database." },
              { title: "Safe Payment Processing", desc: "Reliable payout processors handle instant cashouts and deposits using compliant standards." },
              { title: "Protected User Data", desc: "Privacy regulations dictate that all customer profile metrics remain entirely sealed from external marketing groups." },
              { title: "Reliable Platform Infrastructure", desc: "Cloud networks and high-availability servers prevent outage issues and session disconnects." },
              { title: "Continuous Security Monitoring", desc: "Dedicated operations centers inspect network patterns round-the-clock for threat vectors." },
            ].map((s) => (
              <div key={s.title} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-[#01A3F6]/25">
                <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] mb-5 border border-[#01A3F6]/20 transition-all">
                  <FaShieldAlt size={16} />
                </div>
                <h4 className="font-[var(--font-syne)] font-bold text-white text-[15px] mb-2">{s.title}</h4>
                <p className="text-muted text-[13px] leading-[1.6] font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </WideBlock>

        {/* 07 — Getting started timeline */}
        <WideBlock num="07" eyebrow="Simple Steps" title="Getting Started is Easy">
          <p className="max-w-2xl">
            Registration and accessing the lobby is straightforward. Follow these steps to begin your casino gaming journey.
          </p>
          <div className="relative py-8 mt-2">
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-white/[0.07] z-0 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Create Your Account", desc: "Register quickly and gain access to the complete casino platform." },
                { step: "02", title: "Explore Available Games", desc: "Browse through a wide variety of casino games and discover your favorites." },
                { step: "03", title: "Choose Your Entertainment", desc: "Select the games you enjoy most and begin your gaming journey." },
                { step: "04", title: "Enjoy the Experience", desc: "Experience smooth gameplay, modern features, and exciting entertainment." },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-[#01A3F6]/30 flex items-center justify-center font-[var(--font-bebas)] text-[22px] text-[#01A3F6] mb-5 shadow-lg transition-all duration-300 relative">
                    {item.step}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#01A3F6]/40 animate-ping" />
                  </div>
                  <h4 className="font-[var(--font-syne)] font-bold text-white text-[15px] mb-2">{item.title}</h4>
                  <p className="text-muted text-[12.5px] leading-[1.6] font-light max-w-[240px] mx-auto md:mx-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </WideBlock>

        {/* 08 — Why grows */}
        <WideBlock num="08" eyebrow="Market Insights" title="Why Online Casino Gaming Continues to Grow">
          <div className="relative overflow-hidden rounded-2xl border border-[#01A3F6]/20 bg-gradient-to-br from-[#070C13] to-[#01A3F6]/[0.05] p-8 md:p-10">
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(1,163,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10 max-w-[750px]">
              <p className="text-muted text-[15px] leading-[1.8] font-light mb-8">
                The online casino industry continues expanding because players want entertainment that is convenient, engaging, and accessible. Millions of users choose online casino platforms because they offer 24/7 accessibility, mobile convenience, interactive live gaming, and modern gaming technology.
              </p>
              <h4 className="font-[var(--font-syne)] text-[14px] font-bold text-white uppercase tracking-wider mb-4">Core Drivers:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "24/7 Accessibility from anywhere",
                  "Enormous variety of gaming options",
                  "Convenient mobile accessibility",
                  "Interactive live dealer rooms",
                  "Modern reliable gaming tech",
                  "Continuous entertainment releases",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01A3F6] shrink-0 shadow-[0_0_8px_rgba(1,163,246,0.6)]" />
                    <span className="text-white text-[13.5px] font-medium font-[var(--font-syne)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WideBlock>

        {/* 09 — Responsible */}
        <section className="mx-auto max-w-[1000px]">
          <div className="rounded-3xl border border-[#01A3F6]/20 bg-[#01A3F6]/[0.04] p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(1,163,246,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-[#01A3F6]/10 border border-[#01A3F6]/25 flex items-center justify-center text-[#01A3F6] shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">Responsible Gaming</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                While online casino games are designed for entertainment, responsible gaming remains important. We encourage all users to practice safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light mt-2">
                {["Play within your personal limits", "Manage your gaming time responsibly", "Treat gaming as entertainment", "Avoid chasing losses"].map((tip) => (
                  <div key={tip} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01A3F6] shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#070C13] via-[#05080B] to-[#070C13] p-10 md:p-16 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-[800px] mx-auto">
            <span className="section-tag justify-center mb-4">Join the Action</span>
            <h2 className="font-[var(--font-bebas)] text-[clamp(40px,6vw,68px)] tracking-[1px] leading-[0.95] text-white mb-6">
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

function EyebrowHead({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <>
      <div className="mb-2 flex items-center gap-4">
        <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider" style={{ color: `${ACCENT}26` }}>
          {num}
        </span>
        <span className="h-[2px] w-10 rounded-full" style={{ background: ACCENT }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">{eyebrow}</span>
      </div>
      <h2 className="font-[var(--font-bebas)] text-[clamp(28px,4vw,46px)] leading-[1.02] tracking-[0.5px] text-white">{title}</h2>
    </>
  );
}

function WideBlock({
  num,
  eyebrow,
  title,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1180px]"
    >
      <EyebrowHead num={num} eyebrow={eyebrow} title={title} />
      <div className="mt-6 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
    </motion.section>
  );
}
