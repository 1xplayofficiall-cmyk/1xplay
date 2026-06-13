"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const games = [
  { name: "Roulette", tag: "Table Game", emoji: "🎲", image: "/casino-dice.jpg", badge: "hot" },
  { name: "Blackjack", tag: "Card Game", emoji: "🃏", image: "/casino-spade.jpg", badge: "new" },
  { name: "Baccarat", tag: "Live Table", emoji: "♠️", image: "/casino-cards.jpg", badge: null },
  { name: "Teen Patti", tag: "Indian Favourite", emoji: "🃏", image: "/casino-aces.jpg", badge: "hot" },
  { name: "Dragon Tiger", tag: "Live Game", emoji: "🐯", image: "/casino-tiger.jpg", badge: null },
  { name: "Aviator", tag: "Crash Game", emoji: "✈️", image: "/aviator.jpg", badge: "new" },
  { name: "Slots", tag: "100+ Games", emoji: "🎰", image: "/casino-slots.jpg", badge: null },
  { name: "Andar Bahar", tag: "Classic Indian", emoji: "🀄", image: "/andar-bahar.jpg", badge: null },
];

export default function CasinoGames() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".reveal-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".reveal-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Grid items reveal: pop out sequentially with a small spring bounce
      gsap.fromTo(
        ".reveal-card",
        { opacity: 0, y: 50, scale: 0.9, rotateX: 12 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Rotate decorative roulette wheel on scroll (clockwise down, anticlockwise up)
      gsap.to(".rotate-roulette", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, // Smooth lag response
        },
      });

      // Animate Aviator plane on scroll (moves down/right on scroll down, returns on scroll up)
      gsap.fromTo(".scroll-aviator-plane", 
        { y: -50, x: -50, rotation: 125 },
        {
          y: 550,
          x: 120,
          rotation: 135,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1.2, // Smooth follow lag
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Hover Effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt calculations (max 12 degrees rotation)
    const tiltX = (y / (rect.height / 2)) * -12;
    const tiltY = (x / (rect.width / 2)) * 12;

    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 600,
      scale: 1.04,
      boxShadow: "0 15px 35px rgba(0, 120, 229, 0.4)",
      borderColor: "rgba(0, 120, 229, 0.6)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      borderColor: "rgba(255,255,255,0.07)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} id="games" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'relative', 'overflow-hidden')}>
      {/* Decorative Scroll-Linked Aviator Plane */}
      <div 
        className={clsx(
          'absolute', 'left-[-80px]', 'top-[15%]', 'w-16', 'h-16', 
          'pointer-events-none', 'hidden', 'xl:block', 
          'scroll-aviator-plane', 'z-10'
        )}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#E8303A] fill-current drop-shadow-[0_0_8px_rgba(232,48,58,0.7)]" style={{ transform: "rotate(135deg)" }}>
          <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
        </svg>
      </div>
      {/* Decorative Rotating Roulette Wheel */}
      <div 
        className={clsx(
          'absolute', 'right-[-60px]', 'top-[5%]', 'w-[400px]', 'h-[400px]', 
          'opacity-25', 'pointer-events-none', 'hidden', 'xl:block', 
          'rotate-roulette', 'text-gold-dim'
        )}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current filter drop-shadow-[0_0_12px_rgba(1,163,246,0.35)]">
          {/* Outer Rim */}
          <circle cx="50" cy="50" r="48" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="3 1" />
          
          {/* Slots & Numbers Rim */}
          <circle cx="50" cy="50" r="40" strokeWidth="5" strokeDasharray="2 3" opacity="0.4" />
          <circle cx="50" cy="50" r="37" strokeWidth="0.5" />
          
          {/* Inner Wheel spokes */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 37 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 37 * Math.sin((angle * Math.PI) / 180)}
                strokeWidth="0.5"
                opacity="0.3"
              />
            );
          })}
          
          {/* Center Hub */}
          <circle cx="50" cy="50" r="12" strokeWidth="1" />
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.1" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <path d="M50 38 L50 62 M38 50 L62 50" strokeWidth="1" />
        </svg>
      </div>

      {/* Header */}
      <div className={clsx('flex', 'justify-between', 'items-end', 'mb-[60px]', 'gap-6', 'flex-wrap', 'reveal-header')}>
        <div>
          <div className="section-tag">Casino Games</div>
          <h2 className="section-title">Best Casino Games Online <span className="text-gold">FOR</span><br />Indian Players</h2>
        </div>
        <div>
          <p className="section-desc">
            1xPlay provides access to some of the best casino games online with smooth gameplay, high-quality graphics, and real-time gaming experiences. We focus on creating a premium casino environment where users can enjoy exciting games anytime and anywhere.
          </p>
          <a href="#" className={clsx('btn', 'btn-gold', 'mt-5', 'inline-flex')}>Browse All Games</a>
        </div>
      </div>

      {/* Games Grid */}
      <div ref={gridRef} className={clsx('grid', 'grid-cols-2', 'md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))]', 'gap-3', 'md:gap-4')} style={{ transformStyle: "preserve-3d" }}>
        {games.map((game) => (
          <div 
            key={game.name} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={clsx(
              'relative', 'rounded-xl', 'overflow-hidden', 'aspect-[3/4]', 
              'cursor-pointer', 'group', 'reveal-card', 'border', 'border-border', 
              'shadow-md', 'transition-colors', 'duration-300'
            )}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(0)" }}
          >
            {/* Background Image */}
            <div className={clsx('absolute', 'inset-0', 'transition-transform', 'duration-500', 'group-hover:scale-[1.05]')}>
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlay */}
            <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-black/95', 'via-black/35', 'to-transparent')} />
            
            {/* Badge */}
            {game.badge === "hot" && (
              <div className={clsx('absolute', 'top-2.5', 'right-2.5', 'md:top-3', 'md:right-3', 'bg-red', 'text-white', 'text-[9px]', 'md:text-[10px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-2', 'py-0.5', 'md:px-2.5', 'md:py-1', 'rounded', 'z-10')}>Hot</div>
            )}
            {game.badge === "new" && (
              <div className={clsx('absolute', 'top-2.5', 'right-2.5', 'md:top-3', 'md:right-3', 'bg-green', 'text-[#041208]', 'text-[9px]', 'md:text-[10px]', 'font-bold', 'uppercase', 'tracking-[1px]', 'px-2', 'py-0.5', 'md:px-2.5', 'md:py-1', 'rounded', 'z-10')}>New</div>
            )}
            
            {/* Info */}
            <div className={clsx('absolute', 'bottom-0', 'left-0', 'right-0', 'p-3', 'md:p-4', 'pt-4', 'md:pt-5', 'z-10')} style={{ transform: "translateZ(30px)" }}>
              <div className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[13px]', 'sm:text-[14px]', 'md:text-[15px]', 'text-white', 'mb-0.5', 'md:mb-1')}>{game.name}</div>
              <div className={clsx('text-[9px]', 'sm:text-[10px]', 'md:text-[11px]', 'text-muted', 'uppercase', 'tracking-[0.5px]', 'md:tracking-[1px]')}>{game.tag}</div>
            </div>
          </div>
        ))}
      </div>

      <p className={clsx('text-center', 'mt-10', 'text-[13px]', 'text-muted', 'max-w-[800px]', 'mx-auto', 'leading-relaxed')}>
        Our platform regularly updates gaming categories to keep the experience fresh, engaging, and entertaining for players worldwide.
        Whether users prefer classic table games, strategic card games, or fast-paced modern casino experiences, 1xPlay offers something for everyone. The platform is optimized for smooth gameplay so users can enjoy casino games online without lag or interruptions.
        As a growing casino game India platform, we focus on providing better gaming quality, faster performance, and a user-friendly environment that helps players enjoy every moment.
      </p>
    </section>
  );
}
