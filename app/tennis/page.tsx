"use client";

import clsx from "clsx";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function TennisPlaceholder() {
  return (
    <>
      <ScrollReveal />

      <section className={clsx('min-h-screen', 'flex', 'items-center', 'justify-center', 'pt-[100px]', 'pb-[50px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
        {/* Decorative background glow */}
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[600px]', 'h-[600px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[700px]', 'w-full', 'bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-12', 'text-center', 'relative', 'z-10', 'reveal', 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]')}>
          <div className={clsx('text-[80px]', 'mb-6', 'animate-pulse')}>🎾</div>
          
          <div className={clsx('inline-flex', 'items-center', 'gap-2', 'bg-[rgba(0,120,229,0.15)]', 'text-[#0078E5]', 'text-[11px]', 'font-bold', 'uppercase', 'tracking-[1.5px]', 'px-4', 'py-1.5', 'rounded-full', 'border', 'border-[rgba(0,120,229,0.3)]', 'mb-6')}>
            🎾 Coming Soon
          </div>

          <h1 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(36px,5vw,60px)]', 'tracking-[1.2px]', 'leading-[1.1]', 'text-white', 'mb-4')}>
            Tennis Betting <span className="text-gold">at 1xPlay</span>
          </h1>

          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.7]', 'font-light', 'mb-8')}>
            Get ready to bet on top tennis players and Grand Slam matches. 1xPlay will bring you ball-by-ball match tracking, live points updates, competitive odds, and instant cricket-style ID support for court sports.
          </p>

          <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'gap-4', 'justify-center')}>
            <Link href="/games" className={clsx('btn', 'btn-gold', 'px-8', 'py-3', 'justify-center')}>
              Explore Other Games
            </Link>
            <Link href="/" className={clsx('btn', 'btn-ghost', 'px-8', 'py-3', 'justify-center')}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
