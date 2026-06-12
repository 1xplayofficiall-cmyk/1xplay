"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Highlights", href: "/highlights" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
const supportLinks = [
  { name: "Privacy-policy", href: "/privacy-policy" },
  { name: "Rules", href: "/rules" },
  { name: "Deposit & Withdrawal", href: "/deposit-and-withdrawal" },
  { name: "Responsible Gaming", href: "/responsible-gambling" },
  { name: "Affiliates", href: "/affiliate" },
  { name: "Partner", href: "/partner" },
];
const legalLinks = [
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className={clsx('bg-bg2', 'border-t', 'border-border', 'pt-20', 'pb-10', 'px-[5%]')}>
      {/* Top Grid */}
      <div className={clsx('grid', 'grid-cols-12', 'gap-8', 'mb-[60px]')}>
        {/* Brand */}
        <div className={clsx('col-span-12', 'md:col-span-3')}>
          <div className={clsx('font-[var(--font-bebas)]', 'text-[36px]', 'tracking-[2px]', 'text-white', 'mb-4')}>
            <Image src="/1xplay.webp" alt="1xplay" height={50} width={150} className="object-contain" />
          </div>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.7]', 'max-w-[280px]', 'mb-6')}>
            India&apos;s premier online casino and sports betting platform. Play 200+ games, bet on IPL cricket, and win big — all from one secure platform.
          </p>
          <div className={clsx('flex', 'gap-2.5')}>
            {["📸", "🐦", "💬", "📺"].map((icon, i) => (
              <a key={i} href="#" className={clsx('w-9', 'h-9', 'rounded-lg', 'border', 'border-border', 'bg-card', 'flex', 'items-center', 'justify-center', 'text-[14px]', 'text-muted', 'hover:border-gold', 'hover:text-gold', 'transition-all', 'cursor-pointer')}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div className={clsx('col-span-6', 'md:col-span-3')}>
          <div className={clsx('font-[var(--font-syne)]', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-5')}>Platform</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {platformLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-gold', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className={clsx('col-span-6', 'md:col-span-3')}>
          <div className={clsx('font-[var(--font-syne)]', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-5')}>Support</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {supportLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-gold', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className={clsx('col-span-6', 'md:col-span-3')}>
          <div className={clsx('font-[var(--font-syne)]', 'text-[14px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'text-white', 'mb-5')}>Legal</div>
          <ul className={clsx('flex', 'flex-col', 'gap-2.5', 'list-none')}>
            {legalLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className={clsx('text-[14px]', 'text-muted', 'no-underline', 'hover:text-gold', 'transition-colors')}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={clsx('border-t', 'border-border', 'pt-8', 'flex', 'justify-between', 'items-center', 'flex-wrap', 'gap-4')}>
        <div className={clsx('text-[13px]', 'text-muted')}>© 2026 1xPlay. All rights reserved. Play responsibly.</div>
        <div className={clsx('flex', 'gap-6', 'items-center')}>
          <div className={clsx('bg-card', 'border', 'border-border', 'rounded-md', 'px-2.5', 'py-1', 'font-[var(--font-bebas)]', 'text-[18px]', 'text-muted', 'tracking-[1px]')}>
            18+
          </div>
        </div>
      </div>
    </footer>
  );
}
