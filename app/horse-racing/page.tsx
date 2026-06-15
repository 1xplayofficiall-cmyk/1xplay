"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import {
  FaHorse,
  FaBolt,
  FaCheck,
  FaArrowRight,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const ACCENT = "#01A3F6";

const whyPopular = [
  "Races are fast and exciting",
  "Live betting creates more entertainment",
  "Multiple betting options are available",
  "International racing events attract huge audiences",
  "Every race offers new opportunities",
  "Fast pace and unpredictability",
];

const liveFeatures = [
  "Real time horse racing odds",
  "Fast live betting markets",
  "Mobile friendly race betting",
  "Smooth betting interface",
  "Quick access to live races",
  "Easy market navigation",
];

const bettingMarkets = [
  { title: "Race Winner", desc: "Predict which horse will win the race." },
  { title: "Place Betting", desc: "Bet on a horse to finish within selected top positions." },
  { title: "Each Way Betting", desc: "Combine win and place betting into one selection." },
  { title: "Forecast Betting", desc: "Predict the first and second place horses in the correct order." },
  { title: "Tricast Betting", desc: "Choose the top three race finishers in exact order." },
  { title: "Live Betting Markets", desc: "Place bets during live horse racing events with updated odds." },
];

const tournaments = [
  "International horse racing championships",
  "Premium racing tournaments",
  "Global horse racing events",
  "Live race meetings",
  "Seasonal racing competitions",
];

const mobileFeatures = [
  "Follow live horse races",
  "Place bets quickly",
  "Access live odds",
  "Manage betting activity easily",
  "Enjoy smooth mobile performance",
];

const securityFeatures = [
  "Secure account protection",
  "Safe payment systems",
  "Encrypted transactions",
  "Reliable betting systems",
  "Protected user information",
];

const benefits = [
  "Live horse racing betting",
  "Real time odds updates",
  "Fast market access",
  "Mobile optimized betting platform",
  "Secure betting systems",
  "Easy to use interface",
  "International race coverage",
  "Reliable customer support",
];

const steps = [
  { step: "01", title: "Create an Account", desc: "Register your account through the 1xPlay platform." },
  { step: "02", title: "Deposit Funds", desc: "Use the secure payment system to add funds to your account." },
  { step: "03", title: "Choose a Race", desc: "Explore upcoming and live horse racing events." },
  { step: "04", title: "Place Your Bet", desc: "Select your preferred betting market and enjoy the race." },
];

const whyUsersEnjoy = [
  "Races are quick and entertaining",
  "Live betting increases excitement",
  "Multiple race markets are available",
  "International events create nonstop action",
  "Real time odds improve engagement",
];

const responsibleTips = [
  "Set personal betting limits",
  "Manage spending responsibly",
  "Avoid emotional betting decisions",
  "Take regular breaks when needed",
];

export default function HorseRacing() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05080B] text-white">
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-[70px] left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-[#0078E5] to-[#01A3F6] shadow-[0_0_12px_rgba(1,163,246,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      {/* ── Hero (keeps horse-racing-hero.png) ── */}
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pb-24 px-[5%]">
        <div className="absolute inset-0 z-0">
          <Image src="/horse.png" alt="Horse Racing Betting at 1xPlay" fill sizes="100vw" className="object-cover" priority />
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
              <FaHorse className="w-3.5 h-3.5 text-[#01A3F6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#01A3F6] font-[var(--font-syne)]">
                Horse Racing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-[var(--font-bebas)] text-[clamp(44px,7vw,82px)] leading-[0.92] tracking-[1px] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              Horse Racing Betting
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
              Welcome to the exciting world of horse racing betting at 1xPlay where speed, strategy, and real-time sports action come together on one modern betting platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 max-sm:justify-center"
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
            { v: "6", l: "Bet Markets" },
            { v: "5", l: "Event Types" },
            { v: "24/7", l: "Live Odds" },
          ].map((s) => (
            <div key={s.l} className="bg-[#0C0A06] px-5 py-7 text-center">
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
        <Block num="01" eyebrow="The Sport of Kings" title="Horse Racing Betting at 1xPlay">
          <p>
            Horse racing remains one of the most popular sports betting categories worldwide because of its fast races, thrilling finishes, and exciting betting opportunities. At 1xPlay, users can enjoy live horse racing betting, smooth mobile access, and real-time odds updates for major racing events and international tournaments.
          </p>
          <p>
            Whether you are an experienced racing fan or a beginner exploring online horse racing betting, 1xPlay provides a secure, easy to use, and user-friendly platform designed for modern sports enthusiasts.
          </p>
        </Block>

        {/* 02 — Why popular */}
        <WideBlock num="02" eyebrow="Thrilling Action" title="Why Horse Racing Betting Is So Popular">
          <p className="max-w-2xl">
            Horse racing has been one of the biggest betting sports for many years because every race brings excitement, competition, and unpredictable results.
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
            The speed and unpredictability of horse racing make it one of the most engaging online sports betting experiences.
          </p>
        </WideBlock>

        {/* 03 — Live betting (split with horse-racing-live.png) */}
        <SplitMedia num="03" eyebrow="Live Race Tracking" title="Live Horse Racing Betting Experience" image="/horse-racing-live.jpg" alt="Live Horse Racing Betting at 1xPlay">
          <p>
            At 1xPlay, users can enjoy live horse racing betting with real-time race updates and continuously changing odds.
          </p>
          <p>
            The platform is designed to provide fast betting access during live races so users can place bets smoothly without delays. Live horse racing betting helps users feel more connected to the race while enjoying real-time sports action.
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
        </SplitMedia>

        {/* 04 — Markets bento */}
        <WideBlock num="04" eyebrow="Betting Markets" title="Popular Horse Racing Betting Markets" id="markets">
          <p className="max-w-2xl">
            1xPlay offers multiple horse racing betting options designed for both beginners and experienced sports bettors.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {bettingMarkets.map((m, i) => (
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
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Our goal is to provide users with a complete horse racing betting experience through flexible markets and real-time race coverage.
          </p>
        </WideBlock>

        {/* 05 — Tournaments chip cloud */}
        <WideBlock num="05" eyebrow="Global Events" title="International Horse Racing Events & Meets">
          <p className="max-w-2xl">
            At 1xPlay, users can follow and enjoy betting on major horse racing events and global racing tournaments.
          </p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Popular Competitions Include
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {tournaments.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-all hover:border-[#01A3F6]/40 hover:bg-[#01A3F6]/[0.06] hover:text-white"
              >
                <FaHorse className="text-[#01A3F6]" size={12} />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Horse racing fans can enjoy nonstop sports entertainment through exciting races from different regions around the world.
          </p>
        </WideBlock>

        {/* 06 — Mobile (split reverse with horse-racing-mobile.png) */}
        <SplitMedia num="06" eyebrow="Mobile Optimization" title="Smooth Mobile Horse Racing Experience" image="/horse-racing-mobile.jpg" alt="Mobile Horse Racing Betting at 1xPlay" reverse>
          <p>
            Modern users prefer mobile sports betting because it provides instant access to live races anytime and anywhere. 1xPlay is fully optimized for mobile devices for convenience and speed.
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
            The mobile platform is designed for speed, convenience, and uninterrupted sports betting entertainment.
          </p>
        </SplitMedia>

        {/* 07 — Security */}
        <WideBlock num="07" eyebrow="Security" title="Safe and Secure Horse Racing Betting">
          <p className="max-w-2xl">
            At 1xPlay, user security remains a top priority. We use advanced technology, secure systems, and modern protection tools to help maintain safe betting experiences.
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
            We continuously improve platform performance and security to provide users with a trusted online betting environment, focusing on secure account protection, safe payment systems, and encrypted transactions.
          </p>
        </WideBlock>

        {/* 08 — Why choose (two columns) */}
        <WideBlock num="08" eyebrow="Platform Value" title="Why Choose 1xPlay for Horse Racing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="space-y-5">
              <p>
                1xPlay focuses on delivering a smooth, fast, and user-friendly sports betting experience for horse racing fans worldwide.
              </p>
              <p>
                Our platform is designed to help users enjoy sports betting with better performance, smoother navigation, and direct access to live odds.
              </p>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
                Why Users Enjoy Horse Racing:
              </p>
              <div className="flex flex-col gap-3">
                {whyUsersEnjoy.map((label) => (
                  <div key={label} className="flex items-center gap-3">
                    <FaBolt className="shrink-0 text-[#01A3F6]" size={13} />
                    <span className="text-[13.5px] text-white/85 font-light">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
                Benefits of Soccer Betting at 1xPlay
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.04]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#01A3F6]/12 text-[#01A3F6]">
                      <FaCheck size={11} />
                    </span>
                    <span className="text-[13px] text-white/85">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WideBlock>

        {/* 09 — How to start (keeps image.png) */}
        <WideBlock num="09" eyebrow="Get Started" title="Easy to Start Racing Betting" id="how-to-start">
          <p className="max-w-2xl">Getting started with horse racing betting at 1xPlay is quick and beginner-friendly.</p>
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
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-[#0C0A06] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 scale-[1.18] origin-[center_46%]">
                <Image src="/image.png" alt="1xPlay Registration Platform" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#05080B]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1px] text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#01A3F6] animate-pulse" /> Live Platform Preview
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-white/60">
            The platform is designed to make horse racing betting simple, accessible, and enjoyable for all users.
          </p>
        </WideBlock>

        {/* 10 — Responsible */}
        <Block num="10" eyebrow="Play Safe" title="Responsible Sports Betting" accent="#01A3F6">
          <p>
            At 1xPlay, we encourage responsible gambling and recommend users enjoy horse racing betting as a form of entertainment only.
          </p>
          <FeatureCard
            icon={FaExclamationTriangle}
            accent="#01A3F6"
            title="We recommend users:"
            items={responsibleTips}
          />
          <p>Responsible betting helps maintain a safe and enjoyable sports entertainment experience.</p>
        </Block>
      </div>

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#15100a] via-[#0C0A06] to-[#15100a] p-10 md:p-16 text-left sm:text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.10)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-[760px]">
            <span className="section-tag justify-center mb-5">Enjoy Horse Racing</span>
            <h2 className="section-title">
              Join the Horse Racing Betting Experience at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                1xPlay continues growing as a trusted destination for sports fans looking for fast, secure, and exciting horse racing betting experiences.
              </p>
              <p>
                From live horse racing odds and real-time betting markets to smooth mobile access and secure systems, 1xPlay provides everything needed for premium online sports betting.
              </p>
              <p>
                If you are looking for a modern horse racing betting platform with fast performance, secure transactions, and exciting race coverage, 1xPlay is the perfect place to enjoy online horse racing betting anytime, anywhere.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#" className="btn btn-gold btn-large">
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
          <h2 className="section-title">{title}</h2>
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
      <h2 className="section-title">{title}</h2>
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
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="mb-2 flex items-center gap-4">
            <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider" style={{ color: `${ACCENT}26` }}>
              {num}
            </span>
            <span className="h-[2px] w-10 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">{eyebrow}</span>
          </div>
          <h2 className="section-title">{title}</h2>
          <div className="mt-5 flex flex-col gap-4 text-[15px] leading-[1.8] font-light text-muted">{children}</div>
        </div>
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
