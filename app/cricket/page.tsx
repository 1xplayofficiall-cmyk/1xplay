"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { 
  FaTrophy, 
  FaBolt, 
  FaTv, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaRegFileAlt, 
  FaGlobe, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaArrowRight,
  FaIdCard
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

export default function CricketPage() {
  const [activeMarketTab, setActiveMarketTab] = useState("all");
  const [selectedOdd, setSelectedOdd] = useState<string | null>(null);

  // Simulated live scores for the hero ticker
  const liveScores = [
    { match: "IND vs AUS", score: "IND 342/5 (50) & 120/2 *", status: "Live - Day 4" },
    { match: "ENG vs NZ", score: "ENG 188/3 (20) | NZ 185/8 (20)", status: "Completed" },
    { match: "IPL: MI vs CSK", score: "CSK 201/4 (20) | MI 198/6 (20)", status: "Completed" },
    { match: "PAK vs SA", score: "SA 212/6 (38.2) | PAK", status: "Live" },
  ];

  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx('relative', 'overflow-hidden', 'bg-bg', 'pt-[110px]', 'pb-[50px]')}>
        {/* Abstract grids and glowing mist */}
        <div className={clsx('absolute', 'top-1/4', 'left-1/3', 'w-[500px]', 'h-[500px]', 'bg-[radial-gradient(circle,rgba(1,163,246,0.04)_0%,transparent_70%)]', 'pointer-events-none', 'z-0')} />
        <div className={clsx('absolute', 'bottom-10', 'right-10', 'w-[300px]', 'h-[300px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none', 'z-0')} />

        <div className={clsx('relative', 'z-10', 'max-w-[1400px]', 'mx-auto', 'px-[5%]', 'w-full', 'flex', 'flex-col', 'gap-10')}>
          {/* Main Grid */}
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-center')}>
            
            {/* Left Hero Text */}
            <div className={clsx('lg:col-span-7', 'reveal', 'flex', 'flex-col', 'justify-center')}>
              <div className="flex items-center gap-2 bg-[#01A3F6]/10 border border-[#01A3F6]/20 rounded-full px-4 py-1.5 w-max mb-6">
                <span className="w-2 h-2 rounded-full bg-[#01A3F6] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#01A3F6] uppercase tracking-[2px] font-[var(--font-syne)]">No. 1 Cricket Exchange</span>
              </div>
              
              <h1 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(48px,6.5vw,40px)]', 'tracking-[1px]', 'leading-[0.95]', 'text-white', 'mb-6')}>
                Experience the Excitement of <span className="text-[#01A3F6] drop-shadow-[0_0_15px_rgba(1,163,246,0.15)]">Online Cricket Betting</span>
              </h1>
              
              <p className={clsx('text-[16px]', 'md:text-[18px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8', 'max-w-[620px]')}>
                Cricket is more than just a sport—it is an emotion. From thrilling T20 matches to legendary Test matches, 1xPlay delivers live match updates, real-time odds, and secure ID services on a premium, next-generation exchange.
              </p>
              
              <div className={clsx('flex', 'gap-4', 'flex-wrap')}>
                <Link href="#sportsbook" className={clsx('btn', 'btn-gold', 'btn-large', 'gap-2')}>
                  <span>Place Bets Now</span> <FaArrowRight size={12} />
                </Link>
                <Link href="#get-id" className={clsx('btn', 'btn-ghost', 'btn-large')}>
                  <span>Get Cricket ID</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className={clsx('lg:col-span-5', 'reveal', 'relative', 'flex', 'justify-center')}>
              <div className={clsx('relative', 'w-[280px]', 'sm:w-[350px]', 'h-[320px]', 'sm:h-[420px]', 'rounded-3xl', 'overflow-hidden', 'border', 'border-white/10', 'bg-card/30', 'backdrop-blur-sm', 'p-4', 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]', 'group')}>
                {/* Neon mist behind frame */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#0078E5] to-[#01A3F6] rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                
                {/* Visual Image */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/cricket-hero.png"
                    alt="Cricket Hero Illustration"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                  
                  {/* Floating glassmorphic stat card */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-muted tracking-wider">Live IPL Odds</span>
                      <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">CSK Win Selection</span>
                    </div>
                    <span className="bg-[#01A3F6] text-white font-[var(--font-syne)] font-bold text-[13px] px-3 py-1.5 rounded-lg shadow-lg">1.92</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Live Score Ticker (now inside the flow below buttons/image to prevent absolute overlap) */}
          <div className="border border-white/5 bg-[#09101e]/80 backdrop-blur-md py-4 px-6 rounded-2xl flex items-center justify-between gap-6 overflow-hidden reveal">
            <div className="flex items-center gap-2.5 shrink-0 bg-red-600/10 border border-red-600/20 px-3 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-[1.5px]">Live Updates</span>
            </div>
            
            <div className="flex gap-10 overflow-x-auto scrollbar-none w-full text-xs">
              {liveScores.map((score, i) => (
                <div key={i} className="flex items-center gap-2.5 whitespace-nowrap text-muted hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-white uppercase">{score.match}</span>
                  <span className="text-[#01A3F6] font-mono">{score.score}</span>
                  <span className="text-[9px] uppercase bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-muted">{score.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMMERSIVE INTRODUCTION SECTION ===== */}
      <section className="py-[80px] px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-14 relative overflow-hidden backdrop-blur-sm reveal">
            {/* Accent background glow */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(1,163,246,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="section-tag mb-4">🏆 Premier Sports Portal</div>
                <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[52px] text-white leading-none mb-6">
                  Online Cricket Betting Built for the <span className="text-[#01A3F6]">Ultimate Fan</span>
                </h2>
                <div className="flex flex-col gap-5 text-muted leading-[1.8] font-light text-[15px] md:text-[16px]">
                  <p>
                    Cricket is more than just a sport. It is an emotion followed by millions of fans across the world. From thrilling T20 matches and intense ODI battles to legendary Test matches, cricket delivers excitement like no other game.
                  </p>
                  <p>
                    At 1xPlay, cricket fans can enjoy a premium online cricket betting experience with live match updates, real-time odds, exciting betting markets, and a smooth mobile-friendly platform. Whether you are following international tournaments, domestic leagues, or major cricket events, 1xPlay brings all the action together in one place.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col gap-4 bg-bg2/40 border border-border p-6 rounded-2xl relative">
                <span className="text-[12px] uppercase text-muted tracking-wider">Exchange Highlights</span>
                <div className="flex items-center gap-4 py-2 border-b border-border">
                  <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                    <FaBolt size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted uppercase">Fast Odds</span>
                    <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">Sub-Second Updates</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2 border-b border-border">
                  <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                    <FaShieldAlt size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted uppercase">Verification</span>
                    <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">100% Secure IDs</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div className="w-10 h-10 rounded-lg bg-[#01A3F6]/10 flex items-center justify-center text-[#01A3F6] shrink-0">
                    <FaGlobe size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted uppercase">Coverage</span>
                    <span className="text-white font-[var(--font-syne)] font-bold text-[14px]">All Global Tournaments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CRICKET FANS CHOOSE US (DASHBOARD TILES) ===== */}
      <section className="py-[60px] px-[5%] bg-bg2 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">🛡️ Why Choose Us</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              What Makes <span className="text-[#01A3F6]">1xPlay Difference?</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              At 1xPlay, we focus on providing a seamless user experience combined with exciting betting opportunities that modern cricket fans demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Live Cricket Betting", desc: "Bet with real-time odds on all live wickets, boundaries, and sessions.", icon: FaTv },
              { title: "Easy Cricket ID Access", desc: "Get instant access to your online betting cricket account securely.", icon: FaIdCard },
              { title: "Mobile-Friendly Platform", desc: "Optimized website and fast app experience for betting on the go.", icon: FaMobileAlt },
              { title: "Fast Secure Transactions", desc: "Enjoy rapid deposits and withdrawals protected by SSL encryption.", icon: FaShieldAlt },
              { title: "User-Friendly Dashboard", desc: "Explore markets, place bets and track scores on a clean, modern interface.", icon: FaRegFileAlt },
              { title: "Multiple Betting Markets", desc: "Access comprehensive match winner, toss, bowler and session markets.", icon: FaTrophy }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div 
                  key={i} 
                  className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-[#01A3F6]/30 hover:-translate-y-1.5 group reveal"
                >
                  <div className="w-12 h-12 rounded-xl bg-bg flex items-center justify-center text-[#01A3F6] border border-border group-hover:border-[#01A3F6]/30 transition-all duration-300 mb-6 shadow-md">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] mb-3 group-hover:text-[#01A3F6] transition-colors">{card.title}</h3>
                  <p className="text-muted text-[13.5px] leading-[1.7] font-light">{card.desc}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-10 bg-card/40 border border-border p-6 rounded-2xl text-center max-w-[800px] mx-auto reveal">
            <p className="text-muted text-[14px] font-light">
              ✔ Coverage of major cricket tournaments &nbsp;&bull;&nbsp; ✔ Quick account registration &nbsp;&bull;&nbsp; ✔ Dedicated customer support 24/7
            </p>
          </div>
        </div>
      </section>

      {/* ===== LIVE BETTING & ONLINE ID ACTION SPLITS ===== */}
      <section className="py-[80px] px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
          
          {/* Live Betting Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
            <div className="lg:col-span-6">
              <div className="section-tag mb-4">⚡ In-Play Action</div>
              <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[50px] text-white leading-tight mb-6">
                Live Cricket Betting <br />At <span className="text-[#01A3F6]">1xPlay</span>
              </h2>
              <div className="space-y-6 text-muted text-[15px] leading-[1.8] font-light">
                <p>
                  Live cricket betting is one of the most popular features among cricket fans. Instead of placing bets before the match begins, users can participate while the action unfolds on the field.
                </p>
                <p>
                  As wickets fall, partnerships build, and match momentum changes, betting odds update in real time, creating a more engaging experience.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {["Real-time match action", "Dynamic betting markets", "Instant odds updates", "More betting opportunities"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[13px] text-white">
                      <FaCheckCircle className="text-[#01A3F6] shrink-0" size={14} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[300px] rounded-3xl overflow-hidden border border-border bg-card shadow-lg group">
                <Image 
                  src="/cricket-live.png"
                  alt="Live Wicket Smash Graphic"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-red-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Active Live Bets
                </div>
              </div>
            </div>
          </div>

          {/* Online Cricket ID Block */}
          <div id="get-id" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
            <div className="lg:col-span-6 lg:order-2">
              <div className="section-tag mb-4">🔑 Access Exchange</div>
              <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[50px] text-white leading-tight mb-6">
                Online Cricket ID <br />At <span className="text-[#01A3F6]">1xPlay</span>
              </h2>
              <div className="space-y-6 text-muted text-[15px] leading-[1.8] font-light">
                <p>
                  Many users search for a reliable online cricket ID provider before they start betting on cricket matches. At 1xPlay, users can access a smooth and secure platform designed for cricket enthusiasts looking for easy account access and a premium betting experience.
                </p>
                <p>
                  Whether you are interested in live cricket betting or pre-match betting, 1xPlay helps you get started quickly.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {["Quick registration", "Secure account details", "Easy platform layout", "Smooth mobile ID"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[13px] text-white">
                      <FaCheckCircle className="text-[#01A3F6] shrink-0" size={14} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[300px] rounded-3xl overflow-hidden border border-border bg-card shadow-lg group">
                <Image 
                  src="/cricket-mobile.png"
                  alt="Futuristic Mobile Betting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-[#0078E5] text-white text-[10px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#0078E5]/30">
                  <FaMobileAlt size={11} /> 100% Mobile Optimized
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== INTERACTIVE SPORTSBOOK ODDS DASHBOARD ===== */}
      <section id="sportsbook" className="py-[80px] px-[5%] bg-bg2 relative border-t border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <div className="section-tag mb-3">🎰 Mock Sportsbook</div>
              <h2 className="font-[var(--font-bebas)] text-[36px] md:text-[50px] text-white tracking-[1px] leading-tight">
                Live Cricket <span className="text-[#01A3F6]">Betting Markets</span>
              </h2>
              <p className="text-muted text-[14.5px] font-light max-w-[550px] mt-2">
                Cricket offers numerous betting opportunities throughout a match. Explore our variety of live betting markets.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 bg-[#09101e] border border-border p-1.5 rounded-xl text-xs font-semibold text-muted w-max">
              {["all", "main", "specials"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMarketTab(tab)}
                  className={clsx(
                    'px-4 py-2 rounded-lg transition-all uppercase tracking-wider',
                    activeMarketTab === tab ? 'bg-card text-[#01A3F6] shadow-sm font-bold' : 'hover:text-white'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Sportsbook Odds Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {[
              { id: "market-1", title: "Match Winner", desc: "Predict which team will win the match.", selectionA: "IND: 1.85", selectionB: "AUS: 2.10", category: "main" },
              { id: "market-2", title: "Toss Winner", desc: "Bet on the team expected to win the toss.", selectionA: "MI: 1.90", selectionB: "CSK: 1.90", category: "main" },
              { id: "market-3", title: "Top Batsman", desc: "Predict the player who will score the most runs.", selectionA: "Batsman A: 3.20", selectionB: "Batsman B: 4.50", category: "specials" },
              { id: "market-4", title: "Top Bowler", desc: "Choose the bowler expected to take the most wickets.", selectionA: "Bowler A: 2.80", selectionB: "Bowler B: 3.40", category: "specials" },
              { id: "market-5", title: "Total Runs (Innings)", desc: "Bet on the total runs scored during an innings or match.", selectionA: "Over 310.5: 1.83", selectionB: "Under 310.5: 1.92", category: "main" },
              { id: "market-6", title: "Most Fours", desc: "Predict which team or player will hit the most boundaries.", selectionA: "Team A: 1.72", selectionB: "Team B: 2.15", category: "main" },
              { id: "market-7", title: "Most Sixes", desc: "Bet on the team or player expected to score the most sixes.", selectionA: "Team A: 1.65", selectionB: "Team B: 2.25", category: "main" },
              { id: "market-8", title: "Session Betting", desc: "Enjoy betting opportunities during specific phases of the match.", selectionA: "Session A: 2.05", selectionB: "Session B: 1.80", category: "specials" },
              { id: "market-9", title: "Live Betting Markets", desc: "Place bets during live matches with continuously updated odds.", selectionA: "Live A: 1.95", selectionB: "Live B: 1.85", category: "main" },
            ]
            .filter((item) => activeMarketTab === "all" || item.category === activeMarketTab)
            .map((market) => (
              <div 
                key={market.id} 
                className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-white/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-[var(--font-syne)] font-bold text-white text-[15.5px] uppercase tracking-wider">{market.title}</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01A3F6] animate-pulse" />
                  </div>
                  <p className="text-muted text-[12.5px] leading-[1.6] mb-6 font-light">{market.desc}</p>
                </div>
                
                {/* Odd Buttons container */}
                <div className="grid grid-cols-2 gap-3.5">
                  <button 
                    onClick={() => setSelectedOdd(market.id + "-a")}
                    className={clsx(
                      'py-2 px-3 rounded-xl border font-[var(--font-syne)] text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200',
                      selectedOdd === market.id + "-a" 
                        ? 'bg-[#01A3F6] text-white border-[#01A3F6] shadow-md shadow-[#01A3F6]/20 scale-98' 
                        : 'bg-bg border-border text-muted hover:border-[#01A3F6]/35 hover:text-[#01A3F6]'
                    )}
                  >
                    {market.selectionA}
                  </button>
                  <button 
                    onClick={() => setSelectedOdd(market.id + "-b")}
                    className={clsx(
                      'py-2 px-3 rounded-xl border font-[var(--font-syne)] text-[12.5px] font-bold uppercase tracking-wider transition-all duration-200',
                      selectedOdd === market.id + "-b" 
                        ? 'bg-[#01A3F6] text-white border-[#01A3F6] shadow-md shadow-[#01A3F6]/20 scale-98' 
                        : 'bg-bg border-border text-muted hover:border-[#01A3F6]/35 hover:text-[#01A3F6]'
                    )}
                  >
                    {market.selectionB}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-[13px] font-light mt-10 max-w-[600px] mx-auto reveal">
            Odds represent a simulated preview. Users can enjoy cricket betting from multiple angles while following the game closely.
          </p>
        </div>
      </section>

      {/* ===== BIGGEST TOURNAMENTS GLOW TILES ===== */}
      <section className="py-[80px] px-[5%] bg-bg relative">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">🏆 Elite Competitions</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              Follow the Biggest <span className="text-[#01A3F6]">Cricket Tournaments</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              Cricket fans love major tournaments because they bring together the world&apos;s best teams. 1xPlay provides active sports betting markets on all major events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Indian Premier League (IPL)", tag: "Domestic T20" },
              { name: "ICC Cricket World Cup", tag: "International ODI" },
              { name: "ICC T20 World Cup", tag: "International T20" },
              { name: "ICC Champions Trophy", tag: "International ODI" },
              { name: "Asia Cup Tournament", tag: "Continental T20/ODI" },
              { name: "International Test Series", tag: "Test Cricket" },
              { name: "ODI / T20 Series", tag: "Bilateral Series" },
              { name: "Domestic Cricket Leagues", tag: "State & Regional" }
            ].map((tourney, i) => (
              <div 
                key={i} 
                className="bg-card border border-border p-5 rounded-2xl hover:border-white/10 transition-colors group flex items-center justify-between reveal"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#01A3F6] text-[9px] uppercase font-bold tracking-[1.5px] bg-[#01A3F6]/5 border border-[#01A3F6]/15 px-2 py-0.5 rounded-full w-max">
                    {tourney.tag}
                  </span>
                  <h4 className="font-[var(--font-syne)] font-bold text-white text-[14.5px] group-hover:text-gold transition-colors">{tourney.name}</h4>
                </div>
                <FaTrophy className="text-muted group-hover:text-gold transition-colors shrink-0 ml-4" size={16} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== DETAILED IPL SPECIAL SECTION ===== */}
      <section className="py-[80px] px-[5%] bg-card relative border-t border-border">
        {/* Neon accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1100px] mx-auto reveal">
          <div className="bg-bg border border-border p-8 md:p-14 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="max-w-[650px] relative z-10">
              <div className="section-tag mb-4">🏏 Season Special</div>
              <h2 className="font-[var(--font-bebas)] text-[38px] md:text-[54px] text-white leading-none mb-6">
                IPL Betting at <span className="text-[#01A3F6]">1xPlay Exchange</span>
              </h2>
              <p className="text-muted text-[15px] leading-[1.8] font-light mb-8">
                The Indian Premier League is one of the most followed cricket tournaments in the world. Every season, millions of fans search for IPL betting opportunities and online cricket IDs.
              </p>
              
              <h4 className="font-[var(--font-syne)] text-[14px] font-bold text-white uppercase tracking-wider mb-4">At 1xPlay, IPL Fans Can Enjoy:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Live IPL betting", "Match winner markets", "Toss betting", "Player performance", "Live odds updates", "Mobile betting app"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#01A3F6] shrink-0" />
                    <span className="text-white text-[13.5px] font-medium font-[var(--font-syne)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE PROGRESS onboarding LINE ===== */}
      <section className="py-[85px] px-[5%] bg-bg relative border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-[700px] mx-auto mb-16 reveal">
            <div className="section-tag justify-center mb-3">🚀 Quick Onboarding</div>
            <h2 className="font-[var(--font-bebas)] text-[40px] md:text-[56px] text-white tracking-[1px] leading-tight">
              Easy to <span className="text-[#01A3F6]">Get Started</span>
            </h2>
            <p className="text-muted text-[15px] mt-4 font-light">
              Starting your online cricket betting journey at 1xPlay is simple. Follow these 4 easy steps to unlock non-stop action.
            </p>
          </div>

          {/* Horizontal progress timeline */}
          <div className="relative py-8 reveal">
            {/* Timeline Line */}
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-border z-0 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
              {[
                { step: "01", title: "Register Your Account", desc: "Create your player account through our easy registration process." },
                { step: "02", title: "Access Cricket Markets", desc: "Browse upcoming and live cricket matches on the exchange dashboard." },
                { step: "03", title: "Select Your Option", desc: "Choose from a variety of live betting markets available on the platform." },
                { step: "04", title: "Enjoy the Match", desc: "Follow the live match action and enjoy a smooth, secure experience." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border group-hover:border-[#01A3F6]/30 flex items-center justify-center font-[var(--font-bebas)] text-[22px] text-[#01A3F6] mb-5 shadow-lg transition-all duration-300 relative">
                    {item.step}
                    {/* Pulsing indicator */}
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

      {/* ===== CAUTION RESPONSIBLE GAMBLING ALERT ===== */}
      <section className="py-[60px] px-[5%] bg-bg relative">
        <div className="max-w-[1000px] mx-auto reveal">
          <div className="border border-red-600/20 bg-red-950/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(220,38,38,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 shrink-0 shadow-lg">
              <FaExclamationTriangle size={20} />
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-[var(--font-syne)] font-bold text-white text-[17px] uppercase tracking-wider">Responsible Cricket Betting</h3>
              <p className="text-muted text-[14.5px] leading-[1.7] font-light">
                At 1xPlay, we encourage responsible betting practices. Cricket betting should always be treated as entertainment. Play within your financial limits.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-muted font-light mt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Set personal betting limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Manage spending responsibly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Avoid emotional betting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span>Take breaks when necessary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTION CTA JOIN SECTION ===== */}
      <section className="py-[100px] px-[5%] bg-card relative overflow-hidden border-t border-border">
        {/* Large abstract glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[800px] mx-auto text-center relative z-10 reveal">
          <div className="section-tag justify-center mb-4">🏏 Ready to Play?</div>
          <h2 className="font-[var(--font-bebas)] text-[44px] md:text-[68px] text-white tracking-[1px] leading-[0.95] mb-6">
            Join the Cricket Action <br />At <span className="text-[#01A3F6]">1xPlay Exchange</span>
          </h2>
          <p className="text-muted text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[620px] mx-auto mb-10">
            Cricket continues to unite fans through unforgettable moments. We bring you closer to the action with live betting, online cricket IDs, and quick withdrawals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn btn-gold btn-large">
              Register & Join Now
            </Link>
            <Link href="/games" className="btn btn-ghost btn-large">
              Explore Games Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
