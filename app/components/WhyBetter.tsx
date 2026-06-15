"use client";

import clsx from "clsx";

const differentiators = [
  { icon: "⚡", title: "Fast and Smooth Platform", desc: "The website and app are optimized for quick loading and stable gaming performance." },
  { icon: "🎰", title: "Complete Gaming Experience", desc: "Users can access casino games cricket betting live sports and entertainment services from one platform." },
  { icon: "📱", title: "Mobile Friendly Design", desc: "The 1xPlay App provides smooth gaming experiences across smartphones tablets and desktop devices." },
  { icon: "🏏", title: "Trusted Cricket Betting Services", desc: "Our cricket ID provider system is designed for fast secure and reliable sports betting." },
  { icon: "🎲", title: "High Quality Casino Gaming", desc: "Users can enjoy premium casino games online with responsive gameplay and real time experiences." },
  { icon: "🔒", title: "Secure Gaming Environment", desc: "We focus strongly on account protection secure transactions and platform safety." },
  { icon: "🌍", title: "Global Entertainment Experience", desc: "1xPlay is built for users across India and international markets with modern gaming technology and smooth accessibility." },
];

export default function WhyBetter() {
  return (
    <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'relative', 'overflow-hidden')}>
      {/* Decorative Glow */}
      <div className={clsx('absolute', 'top-0', 'right-[-10%]', 'w-[500px]', 'h-[500px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1200px]', 'mx-auto')}>
        {/* Header */}
        <div className={clsx('text-left', 'sm:text-center', 'mb-16', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Why Choose Us</div>
          <h2 className="section-title">
            Why 1xPlay Is <span className="text-gold">Better</span> Than<br />Other Platforms
          </h2>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[720px]', 'mx-auto', 'font-light')}>
            Many online gaming websites suffer from slow loading poor mobile optimization limited gaming options and complicated user interfaces. 1xPlay solves these problems by focusing on modern technology smooth navigation and reliable gaming performance.
          </p>
        </div>

        {/* What Makes 1xPlay Different - Subheading */}
        <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[20px]', 'text-white', 'text-left', 'sm:text-center', 'mb-10', 'reveal')}>
          What Makes 1xPlay Different
        </h3>

        {/* Features Grid */}
        <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-5')}>
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className={clsx(
                'bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-7',
                'hover:border-[rgba(0,120,229,0.25)]', 'transition-all', 'duration-300',
                'group', 'reveal',
                i === 6 && 'sm:col-span-2 lg:col-span-1'
              )}
            >
              <div className={clsx(
                'w-12', 'h-12', 'rounded-xl',
                'bg-[rgba(0,120,229,0.1)]', 'border', 'border-[rgba(0,120,229,0.2)]',
                'flex', 'items-center', 'justify-center', 'text-[22px]', 'mb-5',
                'group-hover:scale-110', 'transition-transform'
              )}>
                {item.icon}
              </div>
              <h4 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-white', 'text-[16px]', 'mb-2')}>{item.title}</h4>
              <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]')}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-left', 'sm:text-center', 'mt-12', 'max-w-[800px]', 'mx-auto', 'font-light', 'reveal')}>
          These features help 1xPlay stand out as one of the growing names among the best online casinos in India.
        </p>
      </div>
    </section>
  );
}
