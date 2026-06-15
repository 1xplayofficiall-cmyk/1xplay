"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import {
  FaTrophy,
  FaBolt,
  FaTv,
  FaMobileAlt,
  FaSyncAlt,
  FaGlobe,
  FaCheck,
  FaArrowRight,
  FaLock,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const ACCENT = "#01A3F6";

export default function BadmintonPage() {
  const { scrollYProgress } = useScroll();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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

      {/* ── Hero (keeps badminton-hero.png) ── */}
      <section className="relative z-10 overflow-hidden pt-[140px] pb-16 md:pb-24 px-[5%]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/badminton.png"
            alt="Badminton Betting at 1xPlay"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080B] via-[#05080B]/85 to-[#05080B]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-[#05080B]/60" />
          <div className="absolute top-[12%] right-[14%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.18)_0%,transparent_65%)] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#01A3F6]/40 bg-[#01A3F6]/12 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_24px_rgba(1,163,246,0.18)]"
            >
              <span className="text-base leading-none">🏸</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#01A3F6] font-[var(--font-syne)]">
                Badminton Betting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-[var(--font-bebas)] text-[clamp(46px,7vw,88px)] leading-[0.92] tracking-[1px] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              Badminton Betting <br />
              at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-[560px] text-[16px] md:text-[18px] leading-relaxed font-light text-white/70"
            >
              Experience fast-paced action, live match excitement, and seamless betting
              markets on the most secure sports portal in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 max-sm:justify-center"
            >
              <button onClick={() => handleScrollTo("markets")} className="btn btn-gold btn-large">
                Explore Markets <FaArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleScrollTo("how-to-start")} className="btn btn-ghost btn-large">
                How to Start
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stat ribbon (counts derived from content below) */}
      <section className="relative z-10 px-[5%] -mt-4">
        <div className="mx-auto max-w-[1180px] grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.06]">
          {[
            { v: "6", l: "Bet Markets" },
            { v: "9", l: "Major Events" },
            { v: "24/7", l: "Live Odds" },
          ].map((s) => (
            <div key={s.l} className="bg-[#070C11] px-5 py-7 text-center">
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
        {/* 01 — Welcome */}
        <Block num="01" eyebrow="Badminton Betting" title="Badminton Betting at 1xPlay">
          <p>
            Welcome to the exciting world of badminton betting at 1xPlay where users can enjoy fast paced sports action live match excitement and smooth online betting experiences on one trusted platform.
          </p>
          <p>
            Badminton has become one of the fastest growing sports in online betting because of its speed competitive gameplay and thrilling match moments. From international tournaments to major badminton championships millions of sports fans now follow live badminton matches and explore online betting opportunities every day.
          </p>
          <p>
            At 1xPlay users can enjoy a premium badminton betting experience with real time match updates live betting markets smooth mobile access and secure betting systems designed for modern sports enthusiasts.
          </p>
          <Callout>
            Whether you are following international badminton stars major tournaments or live match action 1xPlay provides everything needed for a smooth and engaging badminton betting experience.
          </Callout>
        </Block>

        {/* 02 — Why growing */}
        <WideBlock num="02" eyebrow="The Rise" title="Why Badminton Betting Is Growing Fast">
          <p className="max-w-2xl">Badminton betting has gained huge popularity in recent years because the sport offers:</p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { text: "Fast match pace", icon: FaBolt },
              { text: "Quick point scoring", icon: FaBolt },
              { text: "Live betting excitement", icon: FaTv },
              { text: "Competitive international tournaments", icon: FaTrophy },
              { text: "Frequent momentum changes", icon: FaSyncAlt },
              { text: "Strong global fan following", icon: FaGlobe },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition hover:border-[#01A3F6]/25"
                >
                  <Icon className="shrink-0 text-[#01A3F6]" size={15} />
                  <span className="text-[14px] text-white/85">{item.text}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-7 max-w-2xl space-y-5 text-[15px] leading-[1.85] font-light text-muted">
            <p>
              Unlike many sports badminton matches move quickly which creates more opportunities for live betting and real time predictions.
            </p>
            <p>
              Sports fans enjoy badminton betting because every set and point can change the direction of the match within seconds making the experience more engaging and entertaining.
            </p>
          </div>
        </WideBlock>

        {/* 03 — Live experience */}
        <Block num="03" eyebrow="In-Play" title="Live Badminton Betting Experience">
          <p>
            At 1xPlay users can enjoy live badminton betting with real time odds and fast market updates during ongoing matches.
          </p>
          <p>
            The platform is optimized for live sports action which allows users to place bets quickly while following match progress without delays.
          </p>
          <FeatureCard
            icon={FaTv}
            title="Live Betting Features"
            items={[
              "Real time betting markets",
              "Fast odds updates",
              "Smooth live interface",
              "Mobile friendly betting experience",
              "Secure betting environment",
              "Easy market navigation",
            ]}
          />
          <p>
            Live badminton betting creates a more interactive sports experience because users can react to match situations instantly.
          </p>
        </Block>

        {/* 04 — Markets bento */}
        <WideBlock num="04" eyebrow="Markets" title="Popular Badminton Betting Markets">
          <p className="max-w-2xl">
            1xPlay provides multiple badminton betting options designed for both beginners and experienced sports bettors.
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {[
              { title: "Match Winner", desc: "Predict which player or team will win the match." },
              { title: "Set Betting", desc: "Bet on the exact set result during the match." },
              { title: "Total Points", desc: "Predict whether the total points scored will be over or under a selected number." },
              { title: "Handicap Betting", desc: "Choose players with adjusted point advantages or disadvantages." },
              { title: "Live Betting Markets", desc: "Place bets during live matches with continuously updated odds." },
              { title: "Tournament Betting", desc: "Bet on players or teams expected to win major badminton tournaments." },
            ].map((m, i) => (
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
            Our goal is to provide users with a complete badminton betting experience through multiple sports markets and real time match access.
          </p>
        </WideBlock>

        {/* 05 — Tournaments chip cloud */}
        <WideBlock num="05" eyebrow="Calendar" title="Major Badminton Tournaments Available">
          <p className="max-w-2xl">
            At 1xPlay users can follow and bet on some of the biggest badminton tournaments and international competitions.
          </p>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Popular Events Include
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              "BWF World Championships",
              "Thomas Cup",
              "Uber Cup",
              "Sudirman Cup",
              "All England Open",
              "Indonesia Open",
              "Malaysia Open",
              "Olympic Badminton Events",
              "International Super Series Tournaments",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-white/85 transition-all hover:border-[#01A3F6]/40 hover:bg-[#01A3F6]/[0.06] hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#01A3F6] shadow-[0_0_8px_rgba(1,163,246,0.6)]" />
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Badminton fans can enjoy live sports entertainment throughout the year with access to multiple international competitions and top ranked players.
          </p>
        </WideBlock>

        {/* 06 — Mobile */}
        <Block num="06" eyebrow="On the Go" title="Smooth Mobile Betting Experience">
          <p>
            Modern users prefer mobile sports betting because it offers flexibility and instant access to live events. That is why 1xPlay is fully optimized for smartphones tablets and mobile devices.
          </p>
          <FeatureCard
            icon={FaMobileAlt}
            title="Users can:"
            items={[
              "Access live badminton betting anywhere",
              "Monitor match scores in real time",
              "Place bets quickly",
              "Manage betting activity easily",
              "Enjoy smooth mobile performance",
            ]}
          />
          <p>The mobile platform is designed for fast navigation and uninterrupted sports entertainment.</p>
        </Block>

        {/* 07 — Security */}
        <Block num="07" eyebrow="Trust" title="Secure Online Sports Betting Platform" accent="#01A3F6">
          <p>
            Security remains one of the biggest priorities at 1xPlay. Our platform uses advanced technology and secure systems to help protect user accounts transactions and betting activity.
          </p>
          <FeatureCard
            icon={FaLock}
            accent="#01A3F6"
            title="Users can enjoy badminton betting with confidence because we focus on:"
            items={[
              "Secure account systems",
              "Protected transactions",
              "Reliable platform performance",
              "Safe betting environment",
              "User account protection",
            ]}
          />
          <p>
            We continuously improve platform security and performance to maintain user trust and better sports betting experiences.
          </p>
        </Block>

        {/* 08 — Why choose */}
        <WideBlock num="08" eyebrow="Why 1xPlay" title="Why Choose 1xPlay for Badminton Betting">
          <p className="max-w-2xl">
            There are many online sports betting platforms available but 1xPlay focuses on delivering a better user experience with smooth performance fast access and secure betting systems.
          </p>
          <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
            Benefits of Betting on Badminton at 1xPlay
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "Live badminton betting",
              "Fast betting markets",
              "Smooth mobile experience",
              "Secure betting platform",
              "Real time odds updates",
              "Easy to use interface",
              "International tournament coverage",
              "Reliable support system",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.04]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#01A3F6]/12 text-[#01A3F6]">
                  <FaCheck size={11} />
                </span>
                <span className="text-[13.5px] text-white/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            Our platform is designed for sports fans who want a fast responsive and engaging badminton betting experience.
          </p>
        </WideBlock>

        {/* 09 — How to start */}
        <WideBlock num="09" eyebrow="Get Started" title="Easy to Start Betting">
          <p className="max-w-2xl">Getting started with badminton betting at 1xPlay is simple.</p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "Step 1", title: "Create an Account", desc: "Register your account through the 1xPlay platform." },
              { step: "Step 2", title: "Add Funds", desc: "Use the secure deposit system to fund your account." },
              { step: "Step 3", title: "Choose a Match", desc: "Explore live and upcoming badminton events." },
              { step: "Step 4", title: "Place Your Bet", desc: "Select your preferred betting market and enjoy the match." },
            ].map((s, i) => (
              <div
                key={s.step}
                className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <div className="font-[var(--font-bebas)] text-[40px] leading-none text-[#01A3F6]/25">
                  0{i + 1}
                </div>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#01A3F6] font-[var(--font-syne)]">
                  {s.step}
                </p>
                <h4 className="mt-1.5 font-[var(--font-syne)] text-[15px] font-bold text-white">{s.title}</h4>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-white/60">
            The platform is designed to make sports betting easy accessible and enjoyable for all users.
          </p>
        </WideBlock>

        {/* 10 — Responsible */}
        <Block num="10" eyebrow="Play Safe" title="Responsible Sports Betting" accent="#01A3F6">
          <p>
            At 1xPlay we encourage users to enjoy sports betting responsibly. Betting should always remain a form of entertainment and users should play within their financial limits.
          </p>
          <FeatureCard
            icon={FaExclamationTriangle}
            accent="#01A3F6"
            title="We recommend:"
            items={[
              "Setting personal betting limits",
              "Managing spending responsibly",
              "Avoiding emotional betting decisions",
              "Taking breaks when necessary",
            ]}
          />
          <p>Responsible betting helps maintain a safe and enjoyable sports entertainment experience.</p>
        </Block>
      </div>

      {/* ── Final CTA (section 11) ── */}
      <section id="join-experience" className="relative z-10 px-[5%] pb-28 scroll-mt-24">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#06121c] via-[#070C11] to-[#06121c] p-10 md:p-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.10)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="section-tag mb-5">Join the Experience</span>
            <h2 className="section-title">
              Join the Badminton Betting Experience at{" "}
              <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#7fd5ff] bg-clip-text text-transparent">
                1xPlay
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.8] font-light text-muted">
              <p>
                Badminton continues growing as one of the most exciting sports for online betting and 1xPlay is committed to providing a premium betting experience for sports fans worldwide.
              </p>
              <p>
                From live badminton betting and real time odds to international tournament coverage and smooth mobile access 1xPlay delivers everything needed for modern online sports entertainment.
              </p>
              <p className="text-white font-normal bg-[#01A3F6]/[0.07] border-l-2 border-[#01A3F6] p-4 rounded-r-lg">
                If you are looking for a secure fast and user friendly badminton betting platform 1xPlay is the perfect place to enjoy live sports action and exciting betting experiences anytime anywhere.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 max-sm:justify-center">
              <Link href="/" className="btn btn-gold btn-large">
                Register &amp; Join Now <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
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
          <div
            className="font-[var(--font-bebas)] text-[56px] md:text-[80px] leading-none tracking-wider"
            style={{ color: `${accent}26` }}
          >
            {num}
          </div>
          <div className="mt-1 h-[2px] w-12 rounded-full" style={{ background: accent }} />
        </div>
        <div className="flex-1">
          <p
            className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.3em] font-[var(--font-syne)]"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
          <h2 className="section-title">
            {title}
          </h2>
          <div className="mt-5 flex flex-col gap-5 text-[15px] leading-[1.85] font-light text-muted">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
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
      <div className="mb-2 flex items-center gap-4">
        <span
          className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider"
          style={{ color: `${ACCENT}26` }}
        >
          {num}
        </span>
        <span className="h-[2px] w-10 rounded-full" style={{ background: ACCENT }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="section-title">
        {title}
      </h2>
      <div className="mt-6 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
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
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}1A`, color: accent }}
        >
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white font-normal bg-[#01A3F6]/[0.07] border-l-2 border-[#01A3F6] p-4 rounded-r-lg">
      {children}
    </p>
  );
}
