"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  FaShieldAlt,
  FaMobileAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight,
  FaCoins,
  FaAward,
  FaUserShield,
  FaBolt
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

export default function CasinoPage() {
  // Interactive Casino Preview State
  const [selectedGameInfo, setSelectedGameInfo] = useState<string | null>("aviator");

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

    // Animate reels spinning
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

        // Generate final result
        const finalReels = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
        ];
        setReels(finalReels);

        // Calculate winnings
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

  // Simulated live casino winner announcements for ticker
  const liveWinners = [
    { player: "Player ***348", amount: "₹45,200", game: "Aviator" },
    { player: "Player ***910", amount: "₹18,500", game: "Teen Patti" },
    { player: "Player ***042", amount: "₹1,20,000", game: "Blackjack" },
    { player: "Player ***563", amount: "₹8,000", game: "Slots" },
    { player: "Player ***122", amount: "₹64,300", game: "Roulette" },
    { player: "Player ***715", amount: "₹32,000", game: "Dragon Tiger" },
  ];

  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx("relative", "overflow-hidden", "bg-bg", "pt-[110px]", "pb-[50px]")}>
        {/* Glow Effects */}
        <div className={clsx("absolute", "top-1/4", "left-1/3", "w-[500px]", "h-[500px]", "bg-[radial-gradient(circle,rgba(1,163,246,0.04)_0%,transparent_70%)]", "pointer-events-none", "z-0")} />
        <div className={clsx("absolute", "bottom-10", "right-10", "w-[300px]", "h-[300px]", "bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]", "pointer-events-none", "z-0")} />

        <div className={clsx("relative", "z-10", "max-w-[1400px]", "mx-auto", "px-[5%]", "w-full", "flex", "flex-col", "gap-10")}>
          {/* Main Grid */}
          <div className={clsx("grid", "grid-cols-1", "lg:grid-cols-12", "gap-12", "items-center")}>
            
            {/* Left Hero Text */}
            <div className={clsx("lg:col-span-7", "reveal", "flex", "flex-col", "justify-center")}>
              <div className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6">
                <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">Premium Gaming Exchange</span>
              </div>
              
              <h1 className={clsx("font-[var(--font-bebas)]", "text-[clamp(44px,6vw,76px)]", "tracking-[1px]", "leading-[0.95]", "text-white", "mb-6")}>
                Experience the Ultimate <span className="text-[#01A3F6] drop-shadow-[0_0_15px_rgba(1,163,246,0.15)]">Online Casino</span> Entertainment
              </h1>
              
              <p className={clsx("text-[16px]", "md:text-[18px]", "text-muted", "leading-[1.8]", "font-light", "mb-8", "max-w-[620px]")}>
                Welcome to 1xPlay Casino, where excitement, entertainment, and premium gaming experiences come together on one modern platform. From classic table cards to live dealer action, enjoy a secure, fast, and responsive vegas-style environment built for today&apos;s players.
              </p>
              
              <div className={clsx("flex", "gap-4", "flex-wrap")}>
                <Link href="#portfolio" className={clsx("btn", "btn-gold", "btn-large", "gap-2")}>
                  <span>Explore Games</span> <FaArrowRight size={12} />
                </Link>
                <Link href="#slots-game" className={clsx("btn", "btn-ghost", "btn-large")}>
                  <span>Play Mock Slots</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className={clsx("lg:col-span-5", "reveal", "relative", "flex", "justify-center")}>
              <div className={clsx("relative", "w-[280px]", "sm:w-[350px]", "h-[320px]", "sm:h-[420px]", "rounded-3xl", "overflow-hidden", "border", "border-white/10", "bg-card/30", "backdrop-blur-sm", "p-4", "shadow-[0_20px_50px_rgba(0,0,0,0.5)]", "group")}>
                {/* Glow frame */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#0078E5] to-[#01A3F6] rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                
                {/* Visual Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/casino-hero.png"
                    alt="Online Casino Table Illustration"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                  
                  {/* Floating glassmorphic card */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-muted tracking-wider">Super Jackpot</span>
                      <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">Mega Slots Pool</span>
                    </div>
                    <span className="bg-[#01A3F6] text-white font-[var(--font-syne)] font-bold text-[13px] px-3 py-1.5 rounded-lg shadow-lg">₹50,00,000</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Rolling Winner Announcements Ticker */}
          <div className="border border-white/5 bg-[#09101e]/80 backdrop-blur-md py-4 px-6 rounded-2xl flex items-center justify-between gap-6 overflow-hidden reveal">
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

      {/* ===== IMMERSIVE INTRODUCTION ===== */}
      <section className="py-[80px] px-[5%] bg-bg relative border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-14 relative overflow-hidden backdrop-blur-sm reveal">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(1,163,246,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="section-tag mb-4">🎰 Modern Casino Destination</div>
                <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[52px] text-white leading-none mb-6">
                  Online Casino Gaming Built for <span className="text-[#01A3F6]">Non-Stop Thrills</span>
                </h2>
                <div className="flex flex-col gap-5 text-muted leading-[1.8] font-light text-[15px] md:text-[16px]">
                  <p>
                    Online casino gaming has become one of the fastest-growing forms of digital entertainment, and 1xPlay is proud to provide a platform that combines innovation, security, and excitement. Every game is designed to deliver non-stop entertainment and immersive gameplay.
                  </p>
                  <p>
                    At 1xPlay, our goal is simple — to create a premium online casino destination where players can enjoy world-class entertainment anytime and anywhere. Whether you are exploring online casino games for the first time or you are an experienced player looking for high-quality gaming action, 1xPlay offers everything you need for a smooth and enjoyable experience.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col gap-4 bg-bg2/40 border border-border p-6 rounded-2xl relative">
                <span className="text-[12px] uppercase text-muted tracking-wider">Why Choose 1xPlay Casino</span>
                <div className="flex items-center gap-4 py-2 border-b border-border">
                  <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                    <FaBolt size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted uppercase">Performance</span>
                    <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">Fast Loading Games</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2 border-b border-border">
                  <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                    <FaUserShield size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted uppercase">Security</span>
                    <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">Protected Environment</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                    <FaCoins size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted uppercase">Payments</span>
                    <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">Quick Withdrawals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES US SPECIAL (DASHBOARD GRID) ===== */}
      <section className="py-[60px] px-[5%] bg-bg2 relative border-t border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">⭐ Premium Standouts</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              What Makes <span className="text-[#01A3F6]">1xPlay Casino Special?</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              We focus on creating an experience that is enjoyable, reliable, and easy to access for every player. Here are the core highlights of our casino product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Massive Game Collection", desc: "Access a wide variety of card tables, slots, and interactive gaming rooms." },
              { title: "Modern & Easy Platform", desc: "A clean, dark interface built to let you navigate seamlessly on any device." },
              { title: "Smooth Cross-Device Play", desc: "Optimized layouts that scale from heavy desktop monitors to light smartphone displays." },
              { title: "Fast Loading Games", desc: "Engineered on next-gen infrastructure to render games instantly without lag." },
              { title: "Live Casino Dealer Rooms", desc: "Experience real croupiers, physical cards, and live roulette feeds in real-time." },
              { title: "Secure Transactions", desc: "Rest easy with rapid deposit settlements and highly protected withdrawal pipelines." }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-[#01A3F6]/30 hover:-translate-y-1.5 group reveal"
              >
                <div className="w-12 h-12 rounded-xl bg-bg flex items-center justify-center text-[#01A3F6] border border-border group-hover:border-[#01A3F6]/30 transition-all duration-300 mb-6 shadow-md">
                  <FaAward size={20} />
                </div>
                <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] mb-3 group-hover:text-[#01A3F6] transition-colors">{card.title}</h3>
                <p className="text-muted text-[13.5px] leading-[1.7] font-light">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card/40 border border-border p-6 rounded-2xl text-center max-w-[800px] mx-auto reveal">
            <p className="text-muted text-[14px] font-light">
              ✔ Dedicated customer support &nbsp;&bull;&nbsp; ✔ Mobile-friendly access &nbsp;&bull;&nbsp; ✔ Exciting new gaming experiences updated weekly
            </p>
          </div>
        </div>
      </section>

      {/* ===== DISCOVER A WORLD OF CASINO GAMES ===== */}
      <section id="portfolio" className="py-[80px] px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">🎲 Game Lobby</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              Discover a World of <span className="text-[#01A3F6]">Casino Games</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              Every player has unique preferences. Our platform offers a wide selection of classic favorites and interactive modern releases.
            </p>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch reveal">
            
            {/* Left selector menu */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-[1.5px] font-bold text-muted mb-2 font-[var(--font-syne)]">Select a Game Category</span>
              {[
                { id: "aviator", label: "Aviator (Crash Game)", emoji: "✈️" },
                { id: "blackjack", label: "Blackjack (Card Classic)", emoji: "🃏" },
                { id: "roulette", label: "Roulette (Spin Wheel)", emoji: "🎡" },
                { id: "baccarat", label: "Baccarat (Elegant Play)", emoji: "💎" },
                { id: "teenpatti", label: "Teen Patti (Indian Poker)", emoji: "👑" },
                { id: "dragontiger", label: "Dragon Tiger (Quick Draw)", emoji: "🐯" }
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGameInfo(g.id)}
                  className={clsx(
                    "flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 font-[var(--font-syne)] font-bold text-[14px]",
                    selectedGameInfo === g.id
                      ? "bg-[#01A3F6]/10 border-[#01A3F6] text-white shadow-lg"
                      : "bg-card border-border text-muted hover:border-white/10 hover:text-white"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{g.emoji}</span>
                    <span>{g.label}</span>
                  </span>
                  <span className={clsx(
                    "w-2 h-2 rounded-full",
                    selectedGameInfo === g.id ? "bg-[#01A3F6] animate-pulse" : "bg-white/10"
                  )} />
                </button>
              ))}
            </div>

            {/* Right details panel */}
            <div className="lg:col-span-7 bg-card border border-border p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(1,163,246,0.03)_0%,transparent_70%)] pointer-events-none" />
              
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-5 mb-6">
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

                {/* Description */}
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

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[12px] text-muted font-light">
                  Join 1xPlay to play this game in high definition with live dealers.
                </span>
                <Link href="/" className="btn btn-gold w-full sm:w-auto shrink-0">
                  Play Live Game
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE SLOT MACHINE MINI-GAME ===== */}
      <section id="slots-game" className="py-[80px] px-[5%] bg-bg2 relative border-t border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto reveal">
          <div className="text-center max-w-[650px] mx-auto mb-12">
            <div className="section-tag justify-center mb-3">🎰 Slot Simulator</div>
            <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[50px] text-white tracking-[1px] leading-tight">
              Interactive <span className="text-[#01A3F6]">Slot Machine</span>
            </h2>
            <p className="text-muted text-[14.5px] mt-2 font-light">
              Test your luck with our custom virtual slot game! Spend mock coins, spin the reels, and try to hit matching combinations.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between relative overflow-hidden shadow-2xl">
            {/* Top decorative banner */}
            <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#0078E5] to-[#01A3F6]" />

            {/* Left: Slot Display */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
              {/* Gold border machine cabinet */}
              <div className="bg-[#09101e] border-4 border-[#01A3F6]/40 p-6 rounded-2xl w-full max-w-[380px] shadow-[0_0_30px_rgba(1,163,246,0.15)] flex flex-col gap-4 relative">
                
                {/* Reels Row */}
                <div className="grid grid-cols-3 gap-3">
                  {reels.map((symbol, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "h-24 bg-card border border-white/5 rounded-xl flex items-center justify-center text-5xl shadow-inner select-none transition-all",
                        spinClass[idx] && "animate-bounce"
                      )}
                    >
                      {symbol}
                    </div>
                  ))}
                </div>

                {/* Score / Stats bar */}
                <div className="flex justify-between items-center bg-black/40 border border-white/5 px-4 py-2.5 rounded-lg text-xs font-[var(--font-syne)]">
                  <div className="flex items-center gap-1.5 text-muted">
                    <FaCoins className="text-[#01A3F6]" />
                    <span>Coins:</span>
                    <span className="text-white font-bold">{coins}</span>
                  </div>
                  <span className="text-[10px] text-[#01A3F6] font-bold uppercase tracking-[1px]">Cost: 50 / Spin</span>
                </div>
              </div>

              {/* Interactive spin button */}
              <button
                onClick={spin}
                disabled={spinning || coins < 50}
                className={clsx(
                  "w-full max-w-[380px] font-[var(--font-syne)] font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all border",
                  spinning
                    ? "bg-white/5 border-white/10 text-muted cursor-not-allowed"
                    : coins < 50
                    ? "bg-red-600/10 border-red-600/20 text-red-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#0078E5] to-[#01A3F6] border-transparent text-white hover:shadow-[#01A3F6]/20 hover:scale-102 cursor-pointer active:scale-98"
                )}
              >
                {spinning ? "Spinning..." : coins < 50 ? "Out of Coins" : "Spin Reels 🎰"}
              </button>
            </div>

            {/* Right: Rules / Play Log */}
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

              {/* Status Message Box */}
              <div className="bg-[#09101e] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <span className="text-2xl animate-pulse">📢</span>
                <p className="text-white text-[13px] font-[var(--font-syne)] font-medium leading-relaxed">
                  {slotMessage}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== PLAY ANYTIME WITH MOBILE CASINO ===== */}
      <section className="py-[80px] px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
            
            {/* Left text */}
            <div className="lg:col-span-6">
              <div className="section-tag mb-4">📱 On-The-Go Play</div>
              <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[50px] text-white leading-tight mb-6">
                Play Anytime with <br />Mobile Casino Gaming
              </h2>
              <p className="text-muted text-[15px] leading-[1.8] font-light mb-8">
                Today&apos;s players want flexibility, and 1xPlay is designed to deliver exactly that. Our platform is fully optimized for smartphones, tablets, laptops, and desktop devices, allowing players to enjoy their favorite casino games whenever and wherever they want.
              </p>
              
              <h4 className="font-[var(--font-syne)] text-[14px] font-bold text-white uppercase tracking-wider mb-4">Benefits of Mobile Play:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Instant access to casino games",
                  "Smooth performance across devices",
                  "Fast navigation and gameplay",
                  "No complicated setup process",
                  "Convenient gaming from anywhere"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] text-white font-medium">
                    <FaCheckCircle className="text-[#01A3F6] shrink-0" size={14} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right mockup image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[300px] rounded-3xl overflow-hidden border border-border bg-card shadow-lg group">
                <Image 
                  src="/casino-mobile.png"
                  alt="Futuristic Mobile Casino Slot Display"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#0078E5] text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#0078E5]/30">
                  <FaMobileAlt size={11} /> 100% Mobile Friendly
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== A SAFE AND SECURE ENVIRONMENT ===== */}
      <section className="py-[80px] px-[5%] bg-card relative border-t border-b border-border">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">🛡️ Safe & Protected</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              A Safe and Secure <span className="text-[#01A3F6]">Gaming Environment</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              At 1xPlay, user security remains one of our highest priorities. We use advanced security systems and modern technologies to safeguard your gaming journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {[
              { title: "Secure Account Protection", desc: "Two-factor authorization guards and verified logging protocols ensure unauthorized actors stay out." },
              { title: "Advanced Encryption Tech", desc: "Robust SSL encryption methods encrypt data packets traveling between your client and our database." },
              { title: "Safe Payment Processing", desc: "Reliable payout processors handle instant cashouts and deposits using compliant standards." },
              { title: "Protected User Data", desc: "Privacy regulations dictate that all customer profile metrics remain entirely sealed from external marketing groups." },
              { title: "Reliable Platform Infrastructure", desc: "Cloud networks and high-availability servers prevent outage issues and session disconnects." },
              { title: "Continuous Security Monitoring", desc: "Dedicated operations centers inspect network patterns round-the-clock for threat vectors." }
            ].map((s, idx) => (
              <div key={idx} className="bg-bg border border-border p-6 rounded-2xl hover:border-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] mb-5 border border-border group-hover:border-[#01A3F6]/30 transition-all">
                  <FaShieldAlt size={16} />
                </div>
                <h4 className="font-[var(--font-syne)] font-bold text-white text-[15px] mb-2">{s.title}</h4>
                <p className="text-muted text-[13px] leading-[1.6] font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GETTING STARTED TIMELINE ===== */}
      <section className="py-[85px] px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">🚀 Simple Steps</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              Getting Started is <span className="text-[#01A3F6]">Easy</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              Registration and accessing the lobby is straightforward. Follow these steps to begin your casino gaming journey.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative py-8 reveal">
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-border z-0 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Create Your Account", desc: "Register quickly and gain access to the complete casino platform." },
                { step: "02", title: "Explore Available Games", desc: "Browse through a wide variety of casino games and discover your favorites." },
                { step: "03", title: "Choose Your Entertainment", desc: "Select the games you enjoy most and begin your gaming journey." },
                { step: "04", title: "Enjoy the Experience", desc: "Experience smooth gameplay, modern features, and exciting entertainment." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border group-hover:border-[#01A3F6]/30 flex items-center justify-center font-[var(--font-bebas)] text-[22px] text-[#01A3F6] mb-5 shadow-lg transition-all duration-300 relative">
                    {item.step}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#01A3F6]/40 animate-ping" />
                  </div>
                  <h4 className="font-[var(--font-syne)] font-bold text-white text-[15px] mb-2">{item.title}</h4>
                  <p className="text-muted text-[12.5px] leading-[1.6] font-light max-w-[240px] mx-auto md:mx-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY ONLINE CASINO GAMING GROWS (LIVELY DETAIL) ===== */}
      <section className="py-[80px] px-[5%] bg-bg2 relative border-t border-border">
        <div className="max-w-[1100px] mx-auto reveal">
          <div className="bg-card border border-border p-8 md:p-14 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="max-w-[750px] relative z-10">
              <div className="section-tag mb-4">📈 Market Insights</div>
              <h2 className="font-[var(--font-bebas)] text-[38px] md:text-[54px] text-white leading-none mb-6">
                Why Online Casino Gaming <br />Continues to <span className="text-[#01A3F6]">Grow</span>
              </h2>
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
                  "Continuous entertainment releases"
                ].map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01A3F6] shrink-0" />
                    <span className="text-white text-[13.5px] font-medium font-[var(--font-syne)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESPONSIBLE GAMBLING WARNING ===== */}
      <section className="py-[60px] px-[5%] bg-bg relative">
        <div className="max-w-[1000px] mx-auto reveal">
          <div className="border border-red-600/20 bg-red-950/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(220,38,38,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">Responsible Gaming</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                While online casino games are designed for entertainment, responsible gaming remains important. We encourage all users to practice safety.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Play within your personal limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Manage your gaming time responsibly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Treat gaming as entertainment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Avoid chasing losses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTION CTA ===== */}
      <section className="py-[100px] px-[5%] bg-card relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[800px] mx-auto text-center relative z-10 reveal">
          <div className="section-tag justify-center mb-4">🎰 Join the Action</div>
          <h2 className="font-[var(--font-bebas)] text-[44px] md:text-[68px] text-white tracking-[1px] leading-[0.95] mb-6">
            Join the Excitement at <br /><span className="text-[#01A3F6]">1xPlay Casino</span>
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
      </section>
    </>
  );
}
