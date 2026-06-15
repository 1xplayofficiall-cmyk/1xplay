"use client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import LiveCricketWidget from "./LiveCricketWidget";

const MotionLink = motion.create(Link);

const Hero = () => {
  return (
    <section className={clsx('relative', 'min-h-screen', 'bg-[#030914]', 'overflow-hidden', 'pt-28', 'pb-12', 'flex', 'flex-col')}>
      {/* Dynamic Background */}
      {/* Grid Pattern */}
      <div className={clsx('absolute', 'inset-0', 'z-0')} style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)',
      }}></div>
      
      {/* Main Content */}
      <div className={clsx('container', 'mx-auto', 'px-6', 'lg:px-12', 'relative', 'z-10', 'flex', 'flex-col', 'flex-1')}>
        
        {/* Top: 2 Columns */}
        <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'gap-12', 'items-center', 'flex-1', 'mb-12')}>
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx('flex-1', 'max-w-2xl','justify-center', 'align-center','w-full')}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={clsx('inline-flex', 'items-center', 'gap-2', 'px-3', 'py-1.5', 'mb-6', 'rounded-full', 'border', 'border-blue-500/40', 'bg-blue-500/10', 'backdrop-blur-md', 'text-cyan-300', 'text-[11px]', 'uppercase', 'tracking-widest', 'font-semibold', 'shadow-[0_0_20px_rgba(59,130,246,0.3)]')}
            >
              <span className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-cyan-400', 'animate-pulse', 'shadow-[0_0_8px_#22d3ee]')}></span>
              #1 Online Gaming Platform
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={clsx('text-4xl', 'md:text-5xl', 'lg:text-[42px]', 'font-extrabold', 'text-white', 'leading-[1.2]', 'mb-6', 'tracking-tight', 'drop-shadow-lg')}
            >
              <span className={clsx('relative')}>
                1XPlay
              </span>
              {" "}– Best Online Casino and Cricket Betting Platform in India
            </motion.h1>

            {/* Subheading & Paragraphs (Smaller Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={clsx('space-y-2', 'mb-2', 'text-[14px]', 'md:text-[15px]', 'text-gray-300', 'font-light', 'leading-relaxed', 'max-w-xl')}
            >
              <p>
                Welcome to 1xPlay — a trusted destination for online gaming sports betting and premium casino entertainment. Built for modern players 1xPlay delivers a complete gaming experience with advanced technology smooth performance secure access and exciting entertainment options for users across India and international markets.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Widgets only */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className={clsx('hidden', 'lg:flex', 'flex-1', 'justify-center', 'items-start', 'self-start', 'relative', 'pt-2')}
          >
            {/* Background Glows */}
            <div className={clsx('absolute', 'w-[300px]', 'h-[300px]', 'bg-blue-500/20', 'blur-[80px]', 'rounded-full')}></div>
            <div className={clsx('absolute', 'w-[200px]', 'h-[200px]', 'bg-cyan-400/20', 'blur-[60px]', 'rounded-full', 'translate-x-20', '-translate-y-20')}></div>
            
            <div className={clsx('relative', 'z-10', 'w-full', 'max-w-[480px]')}>
              <div className={clsx('relative', 'w-full')}>
                
                {/* Interactive Live Cricket matches widget */}
                <LiveCricketWidget />


              </div>
            </div>

            {/* Inline keyframes for float if not defined in globals */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
              }
            `}} />
          </motion.div>
        </div>

        {/* Bottom Section: Full Width Text Content */}
        <div className={clsx('w-full', 'mb-8')}>
          <p className={clsx('text-[13px]', 'md:text-[14px]', 'text-gray-300/95', 'font-light', 'leading-relaxed')}>
            As the online gaming industry continues growing millions of users are searching for a platform that offers everything in one place. Players want casino games online trusted cricket betting ID services fast withdrawals live gaming experiences and smooth mobile access. 1xPlay is designed to fulfill all these expectations through a modern platform focused on speed convenience security and user satisfaction.
            Whether you are searching for the best online casinos in India a reliable cricket ID provider exciting casino game India experiences or a powerful online gambling casino platform 1xPlay gives you access to everything through one easy to use website and mobile app.
            Our goal is simple — to create a world class gaming platform where users can enjoy online casino games live sports betting IPL cricket betting and mobile entertainment without complications.
          </p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={clsx('flex', 'flex-wrap', 'gap-4', 'justify-center')}
        >
          
          <a href="https://www.1xplay.games/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(6,182,212,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className={clsx('relative', 'px-8', 'py-3.5', 'bg-gradient-to-r', 'from-blue-600', 'to-cyan-500', 'rounded-xl', 'text-white', 'font-bold', 'text-[14px]', 'shadow-[0_0_25px_rgba(6,182,212,0.5)]', 'cursor-pointer', 'overflow-hidden', 'group')}
            >
              <span className={clsx('relative', 'z-10')}>Start Playing</span>
              <div className={clsx('absolute', 'inset-0', 'bg-white/20', 'translate-y-full', 'group-hover:translate-y-0', 'transition-transform', 'duration-300', 'ease-out', 'z-0')}></div>
            </motion.button>
          </a>

          <a href="https://www.1xplay.xyz/games/live-casino">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className={clsx('px-8', 'py-3.5', 'border', 'border-cyan-500/50', 'bg-cyan-500/5', 'backdrop-blur-md', 'text-cyan-400', 'transition-all', 'rounded-xl', 'font-bold', 'text-[14px]', 'cursor-pointer', 'shadow-[0_0_15px_rgba(6,182,212,0.1)]')}
            >
              Explore Games
            </motion.button>
          </a>
        </motion.div>

        {/* Feature Cards with Staggered Entrance */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
              }
            }
          }}
          className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-4', 'mt-12', 'w-full')}
        >
          {[
            { label: "Casino Games", emoji: "🎰", desc: "Slots, Roulette & Blackjack", href: "/casino" },
            { label: "Cricket Betting", emoji: "🏏", desc: "Live Odds & IPL Matches", href: "/cricket" },
            { label: "Sports Betting", emoji: "⚽", desc: "Football & Tennis Leagues", href: "/soccer" },
            { label: "Fast Withdrawals", emoji: "⚡", desc: "Instant & Secure Payouts", href: "/withdrawal" }
          ].map((item) => (
            <MotionLink
              href={item.href}
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ scale: 1.04, borderColor: "rgba(6, 182, 212, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              className={clsx(
                'flex', 'items-center', 'gap-4', 'p-5',
                'bg-[#0a192f]/40', 'backdrop-blur-md',
                'border', 'border-white/10',
                'rounded-2xl', 'text-left', 'transition-all', 'duration-300',
                'group', 'cursor-pointer'
              )}
            >
              <div className={clsx(
                'w-12', 'h-12', 'rounded-xl',
                'bg-white/5', 'border', 'border-white/10',
                'group-hover:bg-cyan-500/10', 'group-hover:border-cyan-500/30',
                'flex', 'items-center', 'justify-center',
                'text-2xl', 'transition-all', 'duration-300'
              )}>
                {item.emoji}
              </div>
              <div>
                <h3 className={clsx('text-white', 'font-bold', 'text-[15px]', 'group-hover:text-cyan-400', 'transition-colors')}>
                  {item.label}
                </h3>
                <p className={clsx('text-gray-400', 'text-[11px]', 'mt-0.5', 'font-light')}>
                  {item.desc}
                </p>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;