"use client";

import Link from "next/link";
import Image from "next/image";
import { GiTennisBall } from "react-icons/gi";
import { motion, useScroll } from "framer-motion";
import {
  FaBolt,
  FaTv,
  FaMobileAlt,
  FaCheck,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const ACCENT = "#01A3F6";

/* ─────────── Page ─────────── */

export default function TennisPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030914] text-white">
      <ScrollReveal />

      {/* Scroll progress */}
      <div className="fixed top-[70px] left-0 right-0 h-[2px] z-[998] bg-white/[0.04]">
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-[#0078E5] to-[#01A3F6] shadow-[0_0_12px_rgba(1,163,246,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <Hero />

      {/* Stat ribbon */}
      <section className="relative z-10 px-[5%] -mt-2">
        <div className="mx-auto max-w-[1180px] grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/[0.06]">
          {[
            { v: "4", l: "Grand Slams" },
            { v: "8+", l: "Bet Markets" },
            { v: "24/7", l: "Live Odds" },
            { v: "100s", l: "Monthly Matches" },
          ].map((s) => (
            <div key={l(s.l)} className="bg-[#09101e] px-5 py-7 text-center">
              <div className="font-[var(--font-bebas)] text-[clamp(34px,5vw,52px)] leading-none tracking-wide bg-gradient-to-b from-white to-[#01A3F6] bg-clip-text text-transparent">
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
        <Block num="01" eyebrow="Tennis Betting Online" title="Where Every Point Can Change Everything">
          <p>
            Tennis is one of the most exciting sports in the world. Every serve, every rally, and every point can completely change the outcome of a match. This unpredictability is what makes tennis betting online so popular among sports fans worldwide.
          </p>
          <p>
            At 1xPlay, we bring you a premium online tennis betting experience where you can enjoy live matches, real-time odds, and exciting betting opportunities throughout the year. Whether you follow Grand Slam tournaments, ATP Tour events, WTA competitions, or international tennis championships, our platform gives you access to all the action in one place.
          </p>
          <p>
            From pre-match predictions to live betting opportunities, 1xPlay is designed to provide a smooth, secure, and user-friendly experience for every tennis enthusiast.
          </p>
        </Block>

        {/* 02 — Why popular */}
        <Block num="02" eyebrow="The Appeal" title="Why Tennis Betting Is So Popular">
          <p>
            Unlike many other sports, tennis offers constant action from start to finish. A single break of serve can change the momentum of the entire match. Players can come back from difficult situations, making every set exciting and unpredictable.
          </p>
          <p className="text-white/90">Millions of sports fans enjoy online tennis betting because it offers:</p>
          <TagGrid
            items={[
              "Fast-paced action",
              "Real-time betting opportunities",
              "Exciting player matchups",
              "Multiple betting markets",
              "Year-round tournaments",
              "Live betting excitement",
              "Easy mobile access",
            ]}
          />
          <p>
            With hundreds of professional matches taking place every month, tennis remains one of the most active and entertaining sports for online betting.
          </p>
        </Block>

        {/* 03 — Why choose (full-width feature) */}
        <WideBlock num="03" eyebrow="Why 1xPlay" title="Built for a Better Betting Experience">
          <p className="max-w-2xl">
            At 1xPlay, we focus on creating a better betting experience for tennis fans. Our platform combines speed, simplicity, and modern technology to help users enjoy every match without complications.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Live tennis betting markets",
              "Real-time odds updates",
              "Coverage of major ATP & WTA events",
              "Mobile-friendly platform",
              "Fast and secure transactions",
              "Easy account management",
              "User-friendly interface",
              "Dedicated customer support",
              "Smooth experience on all devices",
            ].map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all hover:border-[#01A3F6]/30 hover:bg-[#01A3F6]/[0.04]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#01A3F6]/12 text-[#01A3F6]">
                  <FaCheck size={11} />
                </span>
                <span className="text-[14px] text-white/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/60">
            Whether you are a beginner or an experienced sports bettor, 1xPlay makes online tennis betting simple and enjoyable.
          </p>
        </WideBlock>

        {/* 04 — Live betting (split with feature card) */}
        <Block num="04" eyebrow="In-Play" title="Live Tennis Betting in Real Time">
          <p>
            One of the biggest attractions of tennis betting online is live betting. Tennis is perfectly suited for live betting because the match constantly changes with every point played.
          </p>
          <p>
            At 1xPlay, users can place bets while the match is happening and enjoy updated odds in real time.
          </p>
          <FeatureCard
            icon={FaTv}
            title="Live Tennis Betting Features"
            items={[
              "Live match coverage",
              "Instant odds updates",
              "Fast betting markets",
              "Interactive betting experience",
              "Mobile betting convenience",
              "Multiple live betting options",
            ]}
          />
          <p>
            As players win games and sets, new opportunities become available throughout the match, creating a more engaging experience for tennis fans.
          </p>
        </Block>

        {/* 05 — Markets bento */}
        <WideBlock num="05" eyebrow="Markets" title="Popular Tennis Betting Markets">
          <p className="max-w-2xl">
            At 1xPlay, users can explore a wide range of tennis betting options designed to suit different betting styles.
          </p>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3.5 [grid-auto-rows:1fr]">
            {markets.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-5 transition-all hover:border-[#01A3F6]/35 ${m.span ?? ""}`}
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.12)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <span className="mb-3 inline-flex w-fit items-center rounded-md bg-[#01A3F6]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#01A3F6] font-[var(--font-syne)]">
                    Market
                  </span>
                  <h4 className="font-[var(--font-syne)] text-[15px] font-bold text-white">
                    {m.title}
                  </h4>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-white/60">
            These markets allow users to stay involved throughout every stage of the match.
          </p>
        </WideBlock>

        {/* 06 — Tournaments chip cloud */}
        <WideBlock num="06" eyebrow="Calendar" title="Follow the Biggest Tennis Tournaments">
          <div className="max-w-2xl space-y-5">
            <p>
              Tennis fans enjoy action throughout the year thanks to a packed international calendar filled with world-class tournaments.
            </p>
            <p>
              At 1xPlay, users can enjoy online tennis betting on some of the biggest events in professional tennis.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              "Wimbledon",
              "Australian Open",
              "French Open",
              "US Open",
              "ATP Masters 1000",
              "ATP Tour Events",
              "WTA Tour Events",
              "Davis Cup",
              "Olympic Tennis",
              "International Championships",
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
          <p className="mt-8 max-w-2xl text-white/60">
            Whether you support legendary champions or rising stars, 1xPlay helps you stay connected to every major tennis event.
          </p>
        </WideBlock>

        {/* 07 — Grand Slams surface cards */}
        <WideBlock num="07" eyebrow="The Majors" title="Grand Slam Tennis Betting">
          <p className="max-w-2xl">
            Grand Slam tournaments represent the highest level of professional tennis and attract millions of viewers worldwide.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slams.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09101e] p-6"
                style={{ boxShadow: `inset 0 0 0 1px ${s.color}14` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: s.color }}
                />
                <div
                  className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-2xl opacity-25 transition-opacity group-hover:opacity-40"
                  style={{ background: s.color }}
                />
                <div className="relative z-10">
                  <span
                    className="inline-flex items-center rounded-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] font-[var(--font-syne)]"
                    style={{ backgroundColor: `${s.color}1F`, color: s.color }}
                  >
                    {s.surface}
                  </span>
                  <h4 className="mt-4 font-[var(--font-bebas)] text-[26px] tracking-wide text-white">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-[12.5px] leading-[1.65] text-muted">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-white/60">
            These events create incredible opportunities for tennis fans who enjoy following and betting on the sport.
          </p>
        </WideBlock>

        {/* 08 — Mobile */}
        <Block num="08" eyebrow="On the Go" title="Mobile Tennis Betting Anytime, Anywhere">
          <p>Modern sports fans expect flexibility, and 1xPlay delivers exactly that.</p>
          <p>
            Our platform is fully optimized for smartphones and tablets, allowing users to enjoy tennis betting online wherever they are.
          </p>
          <FeatureCard
            icon={FaMobileAlt}
            title="Mobile Betting Benefits"
            items={[
              "Fast loading platform",
              "Easy navigation",
              "Live score access",
              "Real-time betting markets",
              "Smooth performance",
              "Quick account management",
            ]}
          />
          <p>
            Whether you are watching a Grand Slam final at home or following an ATP match while travelling, 1xPlay keeps you connected to the action.
          </p>
        </Block>

        {/* 09 — Security */}
        <Block num="09" eyebrow="Trust" title="Safe and Secure Betting Environment" accent="#1EBF6A">
          <p>
            Security is a top priority at 1xPlay. We use modern technology and advanced security systems to help protect user accounts, transactions, and personal information.
          </p>
          <FeatureCard
            icon={FaLock}
            title="Security Features"
            accent="#1EBF6A"
            items={[
              "Secure account protection",
              "Encrypted transactions",
              "Safe payment systems",
              "User data protection",
              "Reliable platform performance",
            ]}
          />
          <p>
            Our goal is to provide a trusted environment where users can focus on enjoying their betting experience.
          </p>
        </Block>

        {/* 10 — Built for modern fans */}
        <Block num="10" eyebrow="The Future" title="Built for Modern Tennis Fans">
          <p>
            Tennis continues to grow as one of the most followed sports globally. New tournaments, emerging stars, and exciting rivalries keep fans engaged throughout the year.
          </p>
          <p>
            At 1xPlay, we have created a platform that helps tennis enthusiasts enjoy every match through a smooth betting experience, live markets, and easy access to major competitions.
          </p>
          <p>
            Whether you are following ATP stars, WTA champions, or Grand Slam tournaments, 1xPlay gives you everything needed for premium online tennis betting.
          </p>
        </Block>
      </div>

      {/* ── Final CTA ── */}
      <section className="relative z-10 px-[5%] pb-28">
        <div className="mx-auto max-w-[1180px] relative overflow-hidden rounded-[28px] border border-[#01A3F6]/25 bg-gradient-to-br from-[#0a1220] via-[#09101e] to-[#0a1220] p-10 md:p-16">
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(1,163,246,0.25) 47px, rgba(1,163,246,0.25) 48px)",
              maskImage: "radial-gradient(ellipse 70% 100% at 80% 50%, black, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 100% at 80% 50%, black, transparent 75%)",
            }}
          />
          <GiTennisBall className="absolute -bottom-10 -right-8 h-64 w-64 text-[#01A3F6]/[0.06] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="section-tag mb-5">Enjoy the Best Online Tennis Betting</span>
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
            <div className="mt-8 flex flex-wrap gap-4 max-sm:justify-center">
              <Link href="/apps" className="btn btn-gold btn-large">
                Get Started <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/games" className="btn btn-ghost btn-large">
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
    <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pb-24 px-[5%]">
      {/* Hero background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/tennis.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/88 to-[#030914]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/55" />
        <div className="absolute top-[10%] right-[12%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(1,163,246,0.14)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#01A3F6]/40 bg-[#01A3F6]/12 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_24px_rgba(1,163,246,0.18)]"
            >
              <GiTennisBall className="w-3.5 h-3.5 text-[#01A3F6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#01A3F6] font-[var(--font-syne)]">
              Tennis Betting Online at 1xPlay
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-[var(--font-bebas)] text-[clamp(52px,9vw,58px)] leading-[0.85] tracking-[1px] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              Tennis Betting Online at 1xPlay
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-lg text-[16px] md:text-[18px] leading-relaxed font-light text-white/70"
            >
              Experience the excitement of online tennis betting — live matches,
              real-time odds, and premium markets across every Grand Slam, ATP, and
              WTA event.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 max-sm:justify-center"
            >
              <Link href="/apps" className="btn btn-gold btn-large">
                Start Betting <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/games" className="btn btn-ghost btn-large">
                View Markets
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────── Reusable blocks ─────────── */

// Narrow editorial block with a big ghost number on the left.
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

// Full-width showcase block (for bento / grids / chip clouds).
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
        <span className="h-[2px] w-10 rounded-full bg-[#01A3F6]" />
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

function TagGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition hover:border-[#01A3F6]/25"
        >
          <FaBolt className="shrink-0 text-[#01A3F6]" size={14} />
          <span className="text-[14px] text-white/85">{item}</span>
        </div>
      ))}
    </div>
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

/* ─────────── Data ─────────── */

const markets = [
  { title: "Match Winner", desc: "Predict which player will win the match.", span: "lg:row-span-1" },
  { title: "Set Winner", desc: "Choose the player expected to win a particular set." },
  { title: "First Set Winner", desc: "Bet on the player who will take the opening set." },
  { title: "Total Games", desc: "Predict whether total games will be over or under a selected line." },
  { title: "Handicap Betting", desc: "Add more excitement with game and set handicap markets." },
  { title: "Correct Score", desc: "Predict the exact final score of the match." },
  { title: "Tournament Winner", desc: "Choose the player you believe will win the entire tournament." },
  { title: "Live Tennis Betting", desc: "Place bets during live matches with continuously updated odds." },
];

const slams = [
  {
    title: "Wimbledon",
    surface: "Grass",
    color: "#2E9E5B",
    desc: "The most prestigious tennis tournament, known for its rich history and iconic grass courts.",
  },
  {
    title: "Australian Open",
    surface: "Hard",
    color: "#2E7BD8",
    desc: "A tournament that starts the tennis season with some of the biggest matches of the year.",
  },
  {
    title: "French Open",
    surface: "Clay",
    color: "#D8743F",
    desc: "Famous for its challenging clay courts and unforgettable battles between the world's best players.",
  },
  {
    title: "US Open",
    surface: "Hard",
    color: "#7B5CD8",
    desc: "One of the most exciting tournaments featuring thrilling matches and passionate crowds.",
  },
];

function l(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-");
}
