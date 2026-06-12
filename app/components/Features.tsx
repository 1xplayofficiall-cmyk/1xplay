"use client";

import clsx from "clsx";

const features = [
  { icon: "⚡", title: "Lightning Fast Platform", desc: "Optimized for speed so every bet lands at the right moment. Zero lag during live matches." },
  { icon: "🔒", title: "Secure & Trusted", desc: "Advanced encryption protects every account, transaction and personal detail. Play with confidence." },
  { icon: "📱", title: "Mobile First Design", desc: "Smooth gaming from any device. The 1xPlay app brings the full experience to your pocket." },
  { icon: "💳", title: "Instant Withdrawals", desc: "Cash out your winnings fast. Multiple payment options including UPI, cards and wallets." },
  { icon: "🏆", title: "200+ Games", desc: "From Teen Patti and Andar Bahar to live roulette, blackjack, and Aviator crash game." },
  { icon: "🎧", title: "24/7 Support", desc: "Our support team is always available for quick help with any issue, any time of day." },
];

export default function Features() {
  return (
    <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3')}>
      {/* Header */}
      <div className={clsx('flex', 'justify-between', 'items-end', 'mb-[60px]', 'gap-6', 'flex-wrap', 'reveal')}>
        <div>
          <div className="section-tag">Why 1xPlay</div>
          <h2 className="section-title">Everything You<br /><span className="text-gold">Need to Win</span></h2>
        </div>
        <p className="section-desc">Strong customer support is an important part of the 1xPlay experience. Our support team works continuously to help users with gaming assistance cricket ID services technical support and account guidance..</p>
      </div>

      {/* Features Grid */}
      <div className={clsx('grid', 'grid-cols-[repeat(auto-fill,minmax(280px,1fr))]', 'gap-[2px]', 'border', 'border-border', 'rounded-2xl', 'overflow-hidden')}>
        {features.map((f) => (
          <div
            key={f.title}
            className={clsx('bg-card', 'p-10', 'px-8', 'relative', 'overflow-hidden', 'transition-colors', 'hover:bg-card2', 'group', 'reveal')}
          >
            {/* Bottom blue line on hover */}
            <div className={clsx('absolute', 'bottom-0', 'left-0', 'right-0', 'h-0.5', 'bg-[#0078E5]', 'scale-x-0', 'group-hover:scale-x-100', 'transition-transform', 'duration-300')} />

            <div className={clsx('w-[52px]', 'h-[52px]', 'rounded-xl', 'bg-[rgba(0,120,229,0.1)]', 'border', 'border-[rgba(0,120,229,0.2)]', 'flex', 'items-center', 'justify-center', 'text-[24px]', 'mb-5')}>
              {f.icon}
            </div>
            <div className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[17px]', 'text-white', 'mb-2.5')}>{f.title}</div>
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.7]')}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
