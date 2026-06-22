"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const Hero = () => {
  return (
    <section className={clsx('relative','h-[600px]', 'overflow-hidden', 'px-[5%]', 'pt-[calc(var(--navbar-offset)+2rem)]', 'pb-12', 'flex', 'flex-col')}>
      {/* Hero Banner Background */}
      <div className={clsx('md:absolute', 'hidden md:block', 'inset-0', 'z-0')}>
        <Image
          src="/1xplay_front_page_banner3.png"
          alt=""
          fill
          priority
          className={clsx('object-contain', 'object-center', 'height-full', 'opacity-60')}
        />
      </div>

    
      
      {/* Main Content */}
      <div className={clsx('container', 'mx-auto', 'relative', 'z-10', 'flex', 'flex-col', 'flex-1')}>
        
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

               <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={clsx('flex', 'flex-wrap', 'gap-4', 'justify-center','mt-6')}
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

          <a href="https://www.1xplay.games/games/live-casino">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)", borderColor: "rgba(6, 182, 212, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className={clsx('px-8', 'py-3.5', 'border', 'border-cyan-500/50', 'bg-cyan-500/5', 'backdrop-blur-md', 'text-cyan-400', 'transition-all', 'rounded-xl', 'font-bold', 'text-[14px]', 'cursor-pointer', 'shadow-[0_0_15px_rgba(6,182,212,0.1)]')}
            >
              Explore Games
            </motion.button>
          </a>
        </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Section: Full Width Text Content */}
     
        {/* CTA Buttons */}
       

        {/* Feature Cards with Staggered Entrance */}
       
      </div>
    </section>
  );
};

export default Hero;