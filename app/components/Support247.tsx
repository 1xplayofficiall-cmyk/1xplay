"use client";

import clsx from "clsx";

const focusAreas = [
  { icon: "⚡", label: "Fast responses" },
  { icon: "🎓", label: "Professional assistance" },
  { icon: "💬", label: "User friendly communication" },
  { icon: "✅", label: "Quick issue resolution" },
];

export default function Support247() {
  return (
    <section id="support" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
      <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[600px]', 'h-[600px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.04)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[900px]', 'mx-auto', 'text-left', 'sm:text-center')}>
        {/* Header */}
        <div className="reveal">
          <div className={clsx('section-tag', 'justify-center')}>Always Available</div>
          <h2 className="section-title">
            24/7 Customer <span className="text-gold">Support</span>
          </h2>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[700px]', 'mx-auto', 'font-light', 'mb-12')}>
            Strong customer support is an important part of the 1xPlay experience. Our support team works continuously to help users with gaming assistance cricket ID services technical support and account guidance.
          </p>
        </div>

        {/* We Focus On */}
        <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[18px]', 'text-white', 'mb-8', 'reveal')}>
          We focus on:
        </h3>

        <div className={clsx('grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-4', 'mb-12')}>
          {focusAreas.map((area) => (
            <div
              key={area.label}
              className={clsx(
                'bg-card', 'border', 'border-border', 'rounded-xl',
                'p-5', 'flex', 'flex-col', 'items-center', 'gap-3',
                'hover:border-[rgba(0,120,229,0.3)]', 'transition-all',
                'group', 'reveal'
              )}
            >
              <span className={clsx('text-[24px]', 'group-hover:scale-110', 'transition-transform')}>{area.icon}</span>
              <span className={clsx('text-[14px]', 'text-white', 'font-medium')}>{area.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'reveal')}>
          Whether users need help with online cricket ID access casino gaming deposits withdrawals or technical problems the 1xPlay support team is always ready to assist.
        </p>
      </div>
    </section>
  );
}
