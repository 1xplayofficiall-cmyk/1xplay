"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Newspaper,
  Sparkles,
  Tag,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  accent: string;
  featured?: boolean;
};

const categories = ["All", "Cricket", "Casino", "Betting Tips", "Platform"];

const dummyPosts: BlogPost[] = [
  {
    id: "ipl-2026-guide",
    title: "IPL 2026 Betting Guide: Markets, Odds & Smart Strategies",
    excerpt:
      "Everything you need to know before placing your first IPL wager — from match winner markets to live in-play betting and how odds shift ball by ball.",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Cricket",
    accent: "#F5A623",
    featured: true,
  },
  {
    id: "cricket-id-explained",
    title: "How to Get & Use Your 1xPlay Cricket ID in 2026",
    excerpt:
      "A step-by-step walkthrough for creating your cricket betting ID, funding your account, and accessing live exchange markets on mobile.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Platform",
    accent: "#01A3F6",
  },
  {
    id: "live-betting-basics",
    title: "Live Betting Basics: Reading Odds During a Match",
    excerpt:
      "Learn how live odds work, when to cash out, and how to spot value in fast-moving cricket and football markets.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Betting Tips",
    accent: "#1EBF6A",
  },
  {
    id: "teen-patti-strategies",
    title: "Teen Patti & Live Casino: A Beginner's Playbook",
    excerpt:
      "New to live casino? We break down popular Indian card games, table etiquette, and bankroll tips for a smoother first session.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Casino",
    accent: "#E8303A",
  },
  {
    id: "responsible-gaming",
    title: "Responsible Gaming: Setting Limits That Actually Work",
    excerpt:
      "Practical advice on deposit limits, session timers, and knowing when to step away — because smart play beats chasing losses every time.",
    date: "Coming Soon",
    readTime: "4 min read",
    category: "Betting Tips",
    accent: "#01A3F6",
  },
  {
    id: "deposit-withdrawal-guide",
    title: "Deposits & Withdrawals: UPI, Bank Transfer & Payout Times",
    excerpt:
      "How funding and cashouts work on 1xPlay, what to expect during verification, and tips for faster withdrawal processing.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Platform",
    accent: "#0078E5",
  },
];

const featuredPost = dummyPosts.find((p) => p.featured)!;
const gridPosts = dummyPosts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      <ScrollReveal />

      <div className="relative min-h-screen bg-[#030914] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 15%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse,rgba(1,163,246,0.1)_0%,transparent_65%)] pointer-events-none" />

        {/* Hero */}
        <section className="relative z-10 pt-[120px] pb-10 px-[5%]">
          <div className="max-w-[1400px] mx-auto text-left sm:text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full border border-[#01A3F6]/30 bg-[#01A3F6]/10 backdrop-blur-md">
                <Newspaper className="w-3.5 h-3.5 text-[#01A3F6]" />
                <span className="text-[10px] font-bold text-[#01A3F6] uppercase tracking-[0.25em] font-[var(--font-syne)]">
                  1xPlay Blog
                </span>
              </div>

              <h1 className="font-[var(--font-bebas)] text-[clamp(52px,8vw,96px)] tracking-[2px] leading-[0.9] text-white mb-4">
                THE{" "}
                <span className="bg-gradient-to-r from-[#0078E5] via-[#01A3F6] to-[#5ecfff] bg-clip-text text-transparent">
                  CHRONICLES
                </span>
              </h1>
              <p className="text-muted text-[15px] md:text-[17px] leading-relaxed font-light max-w-2xl mx-auto mb-8">
                Betting insights, cricket guides, casino tips, and platform updates — all in one place. Articles launching soon.
              </p>

              {/* Coming soon banner */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-amber-500/25 bg-amber-500/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <p className="text-[13px] text-amber-200/90 font-[var(--font-syne)]">
                  <span className="font-bold text-amber-300">Coming Soon</span>
                  {" — "}
                  We&apos;re preparing fresh content. Check back shortly!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category pills (visual only) */}
        <section className="relative z-10 px-[5%] pb-8">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={clsx(
                  "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider font-[var(--font-syne)] border cursor-default",
                  i === 0
                    ? "bg-[#01A3F6] border-[#01A3F6] text-white"
                    : "bg-white/5 border-white/10 text-muted"
                )}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Featured placeholder */}
        <section className="relative z-10 px-[5%] pb-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-[#F5A623]/50 via-[#01A3F6]/30 to-transparent rounded-3xl opacity-60" />
              <div className="relative rounded-3xl border border-white/[0.08] bg-[#0a1220]/80 backdrop-blur-xl p-8 md:p-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/10 blur-[100px] pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border font-[var(--font-syne)]"
                        style={{
                          color: featuredPost.accent,
                          borderColor: `${featuredPost.accent}44`,
                          backgroundColor: `${featuredPost.accent}15`,
                        }}
                      >
                        {featuredPost.category}
                      </span>
                      <span className="text-[11px] text-amber-400/90 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        Featured · Coming Soon
                      </span>
                    </div>

                    <h2 className="font-[var(--font-bebas)] text-[clamp(28px,4vw,48px)] text-white tracking-[1px] leading-[1.05] mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted text-[15px] leading-relaxed max-w-2xl mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-[12px] text-muted/70">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col items-center justify-center">
                    <div className="w-full aspect-[4/3] rounded-2xl border border-dashed border-white/15 bg-[#030914]/50 flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <BookOpen className="w-10 h-10 text-[#01A3F6]/40" />
                      <p className="text-[12px] text-muted font-[var(--font-syne)] font-semibold uppercase tracking-wider">
                        Article Preview
                      </p>
                      <p className="text-[11px] text-muted/60">Image & content loading soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Post grid */}
        <section className="relative z-10 px-[5%] pb-28">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#01A3F6]" />
              <h3 className="font-[var(--font-bebas)] text-3xl text-white tracking-[1px]">
                Upcoming <span className="text-[#01A3F6]">Articles</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${post.accent}55, transparent 60%)` }}
                  />
                  <div className="relative h-full flex flex-col rounded-2xl border border-white/[0.06] bg-[#0a1220]/70 backdrop-blur-xl p-6">
                    {/* Thumbnail placeholder */}
                    <div className="aspect-[16/9] rounded-xl border border-dashed border-white/10 bg-[#030914]/60 mb-5 flex items-center justify-center">
                      <Tag className="w-6 h-6 text-white/15" />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded border font-[var(--font-syne)]"
                        style={{
                          color: post.accent,
                          borderColor: `${post.accent}33`,
                          backgroundColor: `${post.accent}12`,
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400/80">
                        Soon
                      </span>
                    </div>

                    <h4 className="text-white font-[var(--font-syne)] font-bold text-[15px] leading-snug line-clamp-2 mb-2 group-hover:text-[#01A3F6] transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-muted text-[13px] leading-relaxed line-clamp-3 flex-1 mb-5">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
                      <span className="text-[11px] text-muted/70 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted/40 cursor-not-allowed">
                        Read Soon
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078E5]/15 via-[#01A3F6]/10 to-transparent" />
              <div className="relative border border-[#01A3F6]/20 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#01A3F6] mb-2 font-[var(--font-syne)]">
                    Meanwhile
                  </p>
                  <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl text-white tracking-wide">
                    EXPLORE THE PLATFORM
                  </h3>
                  <p className="text-muted text-sm mt-2">Blog posts are on the way — start playing today.</p>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  <Link href="/cricket" className="btn btn-gold inline-flex items-center gap-2">
                    Cricket Betting <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/games" className="btn btn-ghost">
                    View Games
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
