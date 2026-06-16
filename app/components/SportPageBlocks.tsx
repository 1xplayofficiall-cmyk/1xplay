"use client";

import { motion } from "framer-motion";

export const SPORT_PAGE_ACCENT = "#01A3F6";

export function EyebrowHead({ num, eyebrow, title }: { num: string; eyebrow: string; title: string }) {
  return (
    <>
      <div className="mb-2 flex items-center gap-4">
        <span className="font-[var(--font-bebas)] text-[40px] leading-none tracking-wider text-white">{num}</span>
        <span className="h-[2px] w-10 rounded-full bg-[#01A3F6]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#01A3F6] font-[var(--font-syne)]">
          {eyebrow}
        </span>
      </div>
      <h2 className="section-title">{title}</h2>
    </>
  );
}

export function WideBlock({
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
      initial={{ opacity: 1, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[1180px] scroll-mt-24"
    >
      <EyebrowHead num={num} eyebrow={eyebrow} title={title} />
      <div className="mt-6 text-[15px] leading-[1.85] font-light text-muted">{children}</div>
    </motion.section>
  );
}

/** Same header layout as cricket — used where pages previously had narrow Block sections. */
export function EditorialBlock({
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
    <WideBlock num={num} eyebrow={eyebrow} title={title} id={id}>
      {children}
    </WideBlock>
  );
}
