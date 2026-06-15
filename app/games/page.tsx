"use client";

import clsx from "clsx";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const games = [
  {
    name: "Badminton",
    emoji: "🏸",
    desc: "Fast paced live badminton betting with real time odds and international tournament coverage.",
    href: "/badminton",
    gradient: "from-[#0a1a2a] to-[#0d2a3d]",
    available: true,
  },
  {
    name: "Soccer",
    emoji: "⚽",
    desc: "Bet on football matches worldwide with live scores, multiple markets and smooth mobile experience.",
    href: "/soccer",
    gradient: "from-[#0a2a14] to-[#0d3d1f]",
    available: true,
  },
  {
    name: "Horse Racing",
    emoji: "🏇",
    desc: "Experience the thrill of horse racing betting with live race tracking and fast odds updates.",
    href: "/horse-racing",
    gradient: "from-[#2a1a0a] to-[#3d2a0d]",
    available: true,
  },
  {
    name: "Tennis",
    emoji: "🎾",
    desc: "Follow Grand Slam tournaments and live tennis matches with real time betting markets.",
    href: "/tennis",
    gradient: "from-[#1a2a0a] to-[#2a3d0d]",
    available: false,
  },
  {
    name: "Casino",
    emoji: "🎰",
    desc: "Premium casino games including slots, roulette, blackjack, and live dealer experiences.",
    href: "/casino",
    gradient: "from-[#2a0a1a] to-[#3d0d2a]",
    available: true,
  },
  {
    name: "Cricket",
    emoji: "🏏",
    desc: "India's best cricket betting platform with IPL live betting, ball-by-ball markets and instant cricket ID.",
    href: "/cricket",
    gradient: "from-[#0a0e2a] to-[#0d1a3d]",
    available: true,
  },
];

export default function GamesPage() {
  return (
    <>
      <ScrollReveal />

      {/* Hero */}
      <section className={clsx('pt-[100px]', 'pb-[40px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[600px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[900px]', 'mx-auto', 'text-left', 'sm:text-center', 'relative', 'z-10', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}> 🎮 Games Hub</div>
          <h1 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(44px,6vw,80px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-6')}>
            Explore All <span className="text-gold">Games</span>
          </h1>
          <p className={clsx('text-[17px]', 'text-muted', 'leading-[1.8]', 'font-light', 'max-w-[600px]', 'mx-auto')}>
            Choose your sport and start your premium betting experience with live odds, secure systems and smooth mobile performance.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className={clsx('py-[40px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-6')}>
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.available ? game.href : "#"}
                className={clsx(
                  'block', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border',
                  'hover:border-[rgba(0,120,229,0.35)]', 'transition-all', 'duration-300',
                  'group', 'reveal', 'no-underline',
                  !game.available && 'opacity-60 pointer-events-none'
                )}
              >
                {/* Card Top - Gradient + Emoji */}
                <div className={clsx('relative', 'h-[200px]', 'bg-gradient-to-br', game.gradient, 'flex', 'items-center', 'justify-center', 'overflow-hidden')}>
                  <span className={clsx('text-[80px]', 'group-hover:scale-110', 'transition-transform', 'duration-300')}>{game.emoji}</span>
                  {/* Glow */}
                  <div className={clsx('absolute', 'bottom-0', 'left-0', 'right-0', 'h-[60px]', 'bg-gradient-to-t', 'from-[var(--card)]', 'to-transparent')} />

                  {/* Badge */}
                  {!game.available && (
                    <div className={clsx('absolute', 'top-4', 'right-4', 'bg-muted/20', 'text-muted', 'text-[10px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-3', 'py-1', 'rounded-full', 'border', 'border-border')}>
                      Coming Soon
                    </div>
                  )}
                  {game.available && (
                    <div className={clsx('absolute', 'top-4', 'right-4', 'bg-[rgba(0,120,229,0.15)]', 'text-[#0078E5]', 'text-[10px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-3', 'py-1', 'rounded-full', 'border', 'border-[rgba(0,120,229,0.3)]')}>
                      Live
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className={clsx('bg-card', 'p-6')}>
                  <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-white', 'text-[18px]', 'mb-2')}>{game.name}</h3>
                  <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]', 'mb-4')}>{game.desc}</p>
                  <div className={clsx('flex', 'items-center', 'gap-2', 'text-[13px]', 'font-semibold', game.available ? 'text-[#0078E5]' : 'text-muted')}>
                    {game.available ? 'Explore Now →' : 'Coming Soon'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
