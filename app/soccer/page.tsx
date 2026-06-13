"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFutbol,
  FaBolt,
  FaCheck,
  FaArrowRight,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const ACCENT = "#01A3F6";

const whyChoose1xPlay = [
  { label: "Live soccer betting with real time odds", desc: "Follow the game and place bets as action happens." },
  { label: "Fast and smooth betting interface", desc: "Place bets instantly with zero lag or delay." },
  { label: "Mobile friendly football betting experience", desc: "Fully optimized for smartphones and tablets." },
  { label: "Secure sports betting platform", desc: "Advanced systems protecting account and data." },
  { label: "Easy navigation for beginners", desc: "Simple layout makes placing bets simple and fast." },
  { label: "Wide range of football betting markets", desc: "Choose from match winner, goals, corners and more." },
  { label: "International league and tournament coverage", desc: "Bet on UEFA Champions League, Premier League and more." },
  { label: "Quick access to live matches", desc: "Instantly browse ongoing soccer matches worldwide." },
];

const whyPopular = [
  "Matches are exciting and unpredictable",
  "Live betting adds more entertainment",
  "Multiple betting options are available",
  "International tournaments attract huge audiences",
  "Every goal changes the game instantly",
  "Interactive experience for football lovers",
];

const liveFeatures = [
  "Real time score updates",
  "Fast changing live odds",
  "Instant market access",
  "Live football match coverage",
  "Smooth mobile betting",
  "Quick betting experience",
];

const bettingMarkets = [
  { title: "Match Winner", desc: "Predict which team will win the football match." },
  { title: "Both Teams to Score", desc: "Bet on whether both teams will score during the game." },
  { title: "Total Goals", desc: "Predict total match goals with over and under betting markets." },
  { title: "Correct Score", desc: "Choose the exact final score of the football match." },
  { title: "First Goal Scorer", desc: "Predict the player who will score the first goal of the game." },
  { title: "Handicap Betting", desc: "Bet with adjusted score advantages for selected teams." },
  { title: "Corner Betting", desc: "Place bets on total corners and team corner performance." },
  { title: "Live Betting Markets", desc: "Enjoy fast betting opportunities during live football matches." },
];

const tournaments = [
  "UEFA Champions League", "English Premier League", "La Liga", "Serie A",
  "Bundesliga", "FIFA World Cup", "UEFA Euro Championship",
  "Copa America", "International Football Matches", "Club Football Competitions",
];

const mobileFeatures = [
  "Place bets quickly on the go",
  "Follow live football matches anywhere",
  "Check betting history instantly",
  "Access live odds in real-time",
  "Manage accounts and transactions easily",
];

const securityFeatures = [
  "Secure account protection",
  "Safe payment systems",
  "Encrypted user data",
  "Reliable platform performance",
  "Protected transactions",
];

const steps = [
  { step: "01", title: "Create an Account", desc: "Register your account through the 1xPlay platform." },
  { step: "02", title: "Deposit Funds", desc: "Use the secure payment system to add funds to your account." },
  { step: "03", title: "Choose a Match", desc: "Browse upcoming football matches and live events." },
  { step: "04", title: "Place Your Bet", desc: "Select your preferred football betting market and enjoy the game." },
];

const responsibleTips = [
  "Set personal betting limits",
  "Avoid emotional betting decisions",
  "Manage gaming budgets responsibly",
  "Take regular breaks when needed",
];

export default function SoccerBetting() {
  const [progress, setProgress] = useState(0);

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

      {/* ── Hero (keeps soccer-hero.png) ── */}
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pb-24 px-[5%]">
        <div className="absolute inset-0 z-0">
          <Image src="/footbal.png" alt="Soccer Betting at 1xPlay" fill sizes="100vw" className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080B] via-[#05080B]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-[#05080B]/50" />
          <div className="absolute top-[12%] right-[14%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.16)_0%,transparent_65%)] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#01A3F6]/40 bg-[#01A3F6]/12 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_24px_rgba(1,163,246,0.18)]"
            >
              <FaFutbol className="w-3.5 h-3.5 text-[#01A3F6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#01A3F6] font-[var(--font-syne)]">
                Soccer Betting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-[var(--font-bebas)] text-[clamp(44px,7vw,82px)] leading-[0.92] tracking-[1px] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              Soccer Betting
              <br />
              at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-[600px] text-[16px] md:text-[18px] leading-relaxed font-light text-white/70"
            >
              Experience fast, exciting, and smooth soccer betting at 1xPlay. From international football tournaments to live league matches, 1xPlay gives football fans a complete online betting experience with real-time odds, live match updates, and easy-to-use betting markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#markets" className="btn btn-gold btn-large">
                Explore Markets <FaArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#how-to-start" className="btn btn-ghost btn-large">
                How to Start
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stat ribbon */}
      <section className="relative z-10 px-[5%] -mt-4">
        <div className="mx-auto max-w-[1180px] grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.06]">
          {[
            { v: "8", l: "Bet Markets" },
            { v: "10", l: "Top Leagues" },
            { v: "24/7", l: "Live Odds" },
          ].map((s) => (
            <div key={s.l} className="bg-[#070D0A] px-5 py-7 text-center">
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
        <Block num="01" eyebrow="The World's Game" title="Football Betting at 1xPlay">
          <p>
            Football is one of the most popular sports in the world and millions of fans enjoy online soccer betting every day. At 1xPlay users can follow top football leagues, place live bets, and enjoy nonstop sports action on a secure and mobile-friendly platform.
          </p>
          <p>
            Welcome to the world of soccer betting at 1xPlay where football fans can enjoy live match action, exciting betting markets, and a smooth online sports betting experience on one trusted platform.
          </p>
          <p>
            Whether you enjoy Premier League matches, Champions League nights, or international football tournaments, 1xPlay brings all the excitement together in one place.
          </p>
        </Block>

        {/* 02 — Why choose */}
        <WideBlock num="02" eyebrow="Premium Platform" title="Why Football Fans Choose 1xPlay">
          <p className="max-w-2xl">
            1xPlay is designed for modern football fans who want a fast, reliable, and user-friendly betting platform.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose1xPlay.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all hover:border-[#01A3F6]/30"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#01A3F6]/12 border border-[#01A3F6]/20 text-[#01A3F6] transition-transform group-hover:scale-110">
                    <FaFutbol size={16} />
                  </span>
                  <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white leading-snug">{item.label}</h4>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-white/60">
            Our platform helps users enjoy football betting without complicated systems or slow performance. We prioritize speed, reliability, and security to make your experience unmatched.
          </p>
        </WideBlock>

        {/* 03 — Why popular */}
        <WideBlock num="03" eyebrow="Global Phenomenon" title="Why Soccer Betting Is So Popular">
          <p className="max-w-2xl">
            Football betting continues growing rapidly because soccer delivers nonstop excitement, competitive matches, and global fan engagement.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyPopular.map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition hover:border-[#01A3F6]/25"
              >
                <FaBolt className="shrink-0 text-[#01A3F6]" size={15} />
                <span className="text-[14px] text-white/85">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Every match creates new betting opportunities from goals and corners to match winners and live score predictions, creating a more interactive sports experience for football lovers around the world.
          </p>
        </WideBlock>

        {/* 04 — Live betting (split with soccer-live.png) */}
        <SplitMedia num="04" eyebrow="Live Action" title="Live Soccer Betting Experience" image="/soccer-live.png" alt="Live Soccer Betting at 1xPlay">
          <p>
            Live football betting is one of the biggest attractions for sports fans today. At 1xPlay, users can place bets while the match is happening and enjoy real-time match excitement.
          </p>
          <p>
            As the game changes, the betting odds update instantly, which creates more opportunities during the match. Follow matches live while placing bets instantly through our smooth and responsive interface.
          </p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)] pt-1">
            Live Betting Features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {liveFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-white/85">
                <FaCheck className="shrink-0 text-[#01A3F6]" size={12} />
                {f}
              </div>
            ))}
          </div>
          <p className="text-white/60">
            Live football betting helps users enjoy a more interactive sports experience by reacting to match events as they happen.
          </p>
        </SplitMedia>

        {/* 05 — Markets bento */}
        <WideBlock num="05" eyebrow="Betting Markets" title="Popular Soccer Betting Markets" id="markets">
          <p className="max-w-2xl">
            1xPlay offers multiple football betting options designed for both beginners and experienced sports bettors.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {bettingMarkets.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-5 transition-all hover:border-[#01A3F6]/35"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-3 inline-flex w-fit items-center rounded-md bg-[#01A3F6]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#01A3F6] font-[var(--font-syne)]">
                    Market
                  </span>
                  <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white">{m.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Our betting markets are designed to provide more excitement, flexibility, and entertainment for football fans worldwide.
          </p>
        </WideBlock>

        {/* 06 — Tournaments chip cloud */}
        <WideBlock num="06" eyebrow="Tournaments" title="Top Football Leagues and Tournaments Available">
          <p className="max-w-2xl">
            At 1xPlay, users can explore betting markets for some of the biggest football leagues, competitions, and international tournaments from around the world.
          </p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Popular Competitions
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {tournaments.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-all hover:border-[#01A3F6]/40 hover:bg-[#01A3F6]/[0.06] hover:text-white"
              >
                <FaFutbol className="text-[#01A3F6]" size={11} />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Football fans can support their favorite clubs, players, and national teams while enjoying exciting online betting opportunities throughout the year.
          </p>
        </WideBlock>

        {/* 07 — Mobile (split with soccer-mobile.png, reversed) */}
        <SplitMedia num="07" eyebrow="Mobile Optimization" title="Mobile Friendly Soccer Betting Experience" image="/soccer-mobile.jpg" alt="Mobile Soccer Betting at 1xPlay" reverse>
          <p>
            Most football fans now prefer mobile sports betting because it allows instant access to matches and betting markets anytime, anywhere. 1xPlay is fully optimized for mobile devices so you never miss a match moment.
          </p>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)] pt-1">
            Users can:
          </p>
          <div className="flex flex-col gap-2.5">
            {mobileFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[14px] text-white/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#01A3F6]/15 text-[#01A3F6]">
                  <FaCheck size={11} />
                </span>
                {f}
              </div>
            ))}
          </div>
          <p className="text-white/60">
            The platform is built for smooth mobile performance with fast loading pages and easy navigation across smartphones and tablets.
          </p>
        </SplitMedia>

        {/* 08 — Security */}
        <WideBlock num="08" eyebrow="Security" title="Safe and Secure Football Betting">
          <p className="max-w-2xl">
            Security and reliability are important for every sports betting platform. At 1xPlay, we use modern systems and advanced technology to help protect user accounts, transactions, and betting activity.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {securityFeatures.map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.04]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#01A3F6]/12 text-[#01A3F6]">
                  <FaLock size={12} />
                </span>
                <span className="text-[13.5px] text-white/85">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            We continuously improve platform security to provide users with a trusted online football betting experience, focusing on safe payment systems, encrypted user data, and reliable platform performance.
          </p>
        </WideBlock>

        {/* 09 — How to start (keeps image.png) */}
        <WideBlock num="09" eyebrow="Get Started" title="Easy to Start Football Betting" id="how-to-start">
          <p className="max-w-2xl">Getting started with soccer betting at 1xPlay is simple, even for beginners.</p>
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((s) => (
                <div key={s.step} className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <div className="font-[var(--font-bebas)] text-[40px] leading-none text-[#01A3F6]/25">{s.step}</div>
                  <h4 className="mt-2 font-[var(--font-syne)] text-[15px] font-bold text-white">{s.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-[#070D0A] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 scale-[1.18] origin-[center_46%]">
                <Image src="/image.png" alt="1xPlay Registration Platform" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#05080B]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#01A3F6] animate-pulse" /> Live Platform Preview
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-white/60">
            Our goal is to make football betting simple, fast, and enjoyable for every user.
          </p>
        </WideBlock>

        {/* 10 — Responsible */}
        <Block num="10" eyebrow="Play Safe" title="Responsible Football Betting" accent="#01A3F6">
          <p>
            At 1xPlay, we encourage users to enjoy football betting responsibly. Sports betting should always remain entertainment, and users should never bet beyond their financial limits.
          </p>
          <FeatureCard
            icon={FaExclamationTriangle}
            accent="#01A3F6"
            title="We recommend users:"
            items={responsibleTips}
          />
          <p>Responsible gambling helps maintain a safe, healthy, and enjoyable sports entertainment experience.</p>
        </Block>
      </div>

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#08160e] via-[#070D0A] to-[#08160e] p-10 md:p-16 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.10)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-[760px]">
            <span className="section-tag justify-center mb-5">Enjoy the Best Experience</span>
            <h2 className="font-[var(--font-bebas)] text-[clamp(34px,5vw,62px)] leading-[0.98] tracking-[1px] text-white">
              Start Soccer Betting Today at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                1xPlay continues growing as a trusted destination for football fans who want fast, secure, and exciting online soccer betting.
              </p>
              <p>
                From live football betting and international tournaments to smooth mobile access and real-time odds, 1xPlay provides everything needed for a premium sports betting experience.
              </p>
              <p>
                If you are looking for a user-friendly football betting platform with exciting markets, secure systems, and smooth performance, 1xPlay is the perfect place to enjoy online soccer betting anytime, anywhere.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#" className="btn btn-gold btn-large">
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

function Block({
  num,
  eyebrow,
  title,
  accent = ACCENT,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[920px]"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="shrink-0">
          <div className="font-[var(--font-bebas)] text-[56px] md:text-[80px] leading-none tracking-wider" style={{ color: `${accent}26` }}>
            {num}
          </div>
          <div className="mt-1 h-[2px] w-12 rounded-full" style={{ background: accent }} />
        </div>
        <div className="flex-1">
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.3em] font-[var(--font-syne)]" style={{ color: accent }}>
            {eyebrow}
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(28px,4vw,44px)] leading-[1.02] tracking-[0.5px] text-white">
            {title}
          </h2>
          <div className="mt-5 flex flex-col gap-5 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
        </div>
      </div>
    </motion.section>
  );
}

function WideBlock({
  num,
  eyebrow,
  title,
  id,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1180px] scroll-mt-24"
    >
      <div className="mb-2 flex items-center gap-4">
        <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider" style={{ color: `${ACCENT}26` }}>
          {num}
        </span>
        <span className="h-[2px] w-10 rounded-full" style={{ background: ACCENT }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">{eyebrow}</span>
      </div>
      <h2 className="font-[var(--font-bebas)] text-[clamp(28px,4vw,48px)] leading-[1.02] tracking-[0.5px] text-white">{title}</h2>
      <div className="mt-6 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
    </motion.section>
  );
}

function SplitMedia({
  num,
  eyebrow,
  title,
  image,
  alt,
  reverse,
  children,
}: {
  num: string;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Text */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="mb-2 flex items-center gap-4">
            <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider" style={{ color: `${ACCENT}26` }}>
              {num}
            </span>
            <span className="h-[2px] w-10 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">{eyebrow}</span>
          </div>
          <h2 className="font-[var(--font-bebas)] text-[clamp(28px,4vw,46px)] leading-[1.02] tracking-[0.5px] text-white">{title}</h2>
          <div className="mt-5 flex flex-col gap-4 text-[15px] leading-[1.8] font-light text-muted">{children}</div>
        </div>
        {/* Image */}
        <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${reverse ? "lg:order-1" : ""}`}>
          <Image src={image} alt={alt} width={600} height={400} sizes="(max-width:1024px) 100vw, 50vw" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080B]/60 via-transparent to-transparent" />
        </div>
      </div>
    </motion.section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  items,
  accent = ACCENT,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${accent}1A`, color: accent }}>
          <Icon size={16} />
        </span>
        <p className="font-[var(--font-syne)] text-[14px] font-bold text-white">{title}</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[14px] text-white/85">
            <FaCheck className="mt-0.5 shrink-0" size={13} style={{ color: accent }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
