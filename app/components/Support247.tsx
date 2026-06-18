"use client";

import clsx from "clsx";
import type { IconType } from "react-icons";
import { FaBolt, FaCheck, FaCommentDots, FaHeadset } from "react-icons/fa";

const focusAreas: { icon: IconType; label: string }[] = [
  { icon: FaBolt, label: "Fast responses" },
  { icon: FaHeadset, label: "Professional assistance" },
  { icon: FaCommentDots, label: "User friendly communication" },
  { icon: FaCheck, label: "Quick issue resolution" },
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
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
            <div
              key={area.label}
              className={clsx(
                'bg-card', 'border', 'border-border', 'rounded-xl',
                'p-3', 'flex', 'flex-col', 'items-center', 'gap-3',
                'hover:border-[rgba(0,120,229,0.3)]', 'transition-all',
                'group', 'reveal'
              )}
            >
              <Icon
                className={clsx(
                  'text-[22px] text-[#01A3F6]',
                  'group-hover:scale-110 transition-transform'
                )}
                aria-hidden
              />
              <span className={clsx('text-[10px]', 'text-white', 'font-medium')}>{area.label}</span>
            </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'reveal')}>
          Whether users need help with online cricket ID access casino gaming deposits withdrawals or technical problems the 1xPlay support team is always ready to assist.
        </p>
      </div>
    </section>
  );
}
