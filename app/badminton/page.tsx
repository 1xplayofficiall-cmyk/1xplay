"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  FaTrophy, 
  FaBolt, 
  FaTv, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaRegFileAlt, 
  FaSyncAlt, 
  FaGlobe, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaPlayCircle,
  FaArrowRight
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

const sections = [
    { id: "welcome", title: "Badminton Betting", icon: FaRegFileAlt },
    { id: "why-growing", title: "Why Growing Fast", icon: FaBolt },
    { id: "live-experience", title: "Live Experience", icon: FaTv },
    { id: "markets", title: "Betting Markets", icon: FaTrophy },
    { id: "tournaments", title: "Major Tournaments", icon: FaTrophy },
    { id: "mobile-experience", title: "Mobile Experience", icon: FaMobileAlt },
    { id: "security", title: "Secure Platform", icon: FaShieldAlt },
    { id: "why-choose", title: "Why Choose 1xPlay", icon: FaCheckCircle },
    { id: "how-to-start", title: "Easy to Start", icon: FaPlayCircle },
    { id: "responsible", title: "Responsible Betting", icon: FaExclamationTriangle },
    { id: "join-experience", title: "Join Experience", icon: FaArrowRight },
];

export default function BadmintonPage() {
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx('relative', 'min-h-[60vh]', 'flex', 'items-center', 'overflow-hidden', 'bg-bg')}>
        {/* Hero Background Image */}
        <div className={clsx('absolute', 'inset-0', 'z-0')}>
          <Image
            src="/badminton-hero.png"
            alt="Badminton Betting at 1xPlay"
            fill
            className="object-cover"
            priority
          />
          <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-[#080A0E]/95', 'via-[#080A0E]/75', 'to-[#080A0E]/30')} />
          <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#080A0E]', 'via-transparent', 'to-transparent')} />
        </div>

        <div className={clsx('relative', 'z-10', 'max-w-[1200px]', 'mx-auto', 'px-[5%]', 'py-[60px]', 'w-full')}>
          <div className={clsx('max-w-[650px]', 'reveal')}>
            <div className="section-tag">🏸 Badminton Betting</div>
            <h1 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(44px,6vw,80px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-6')}>
              Badminton Betting <br />at <span className="text-gold">1xPlay</span>
            </h1>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8', 'max-w-[560px]')}>
              Experience fast-paced action, live match excitement, and seamless betting markets on the most secure sports portal in India.
            </p>
            <div className={clsx('flex', 'gap-4', 'flex-wrap')}>
              <button onClick={() => handleScrollTo("markets")} className={clsx('btn', 'btn-gold', 'btn-large')}>Explore Markets</button>
              <button onClick={() => handleScrollTo("how-to-start")} className={clsx('btn', 'btn-ghost', 'btn-large')}>How to Start</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT WRAPPER ===== */}
      <section className={clsx('pb-[60px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-start')}>
            
            {/* Left Sticky Sidebar (Desktop only) */}
            <aside className={clsx('hidden', 'lg:block', 'lg:col-span-4', 'sticky', 'top-[100px]', 'max-h-[calc(100vh-140px)]', 'overflow-y-auto', 'bg-bg2', 'border', 'border-border', 'rounded-2xl', 'p-6', 'custom-scrollbar')}>
              <h4 className={clsx('font-[var(--font-syne)]', 'text-[14px]', 'font-bold', 'text-white', 'uppercase', 'tracking-[1px]', 'mb-5', 'border-b', 'border-border', 'pb-3')}>
                Badminton Index
              </h4>
              <nav className={clsx('flex', 'flex-col', 'gap-2')}>
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollTo(sec.id)}
                      className={clsx(
                        'flex', 'items-center', 'gap-3', 'text-left', 'py-3', 'px-4', 'rounded-xl',
                        'transition-all', 'duration-250', 'text-[13px]', 'font-medium',
                        isActive 
                          ? 'bg-gold/10 text-gold border-l-2 border-gold font-semibold' 
                          : 'text-muted hover:text-white hover:bg-white/[0.02] border-l-2 border-transparent'
                      )}
                    >
                      <Icon className={clsx('text-[16px]', isActive ? 'text-gold' : 'text-muted')} />
                      <span>{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Right Content Panels */}
            <div className={clsx('lg:col-span-8', 'flex', 'flex-col', 'gap-8')}>
              
              {/* Section 1: Welcome / Intro */}
              <article id="welcome" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />
                
                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaRegFileAlt size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Badminton Betting at 1xPlay
                  </h2>
                </div>

                <div className={clsx('flex', 'flex-col', 'gap-6', 'text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                  <p>
                    Welcome to the exciting world of badminton betting at 1xPlay where users can enjoy fast paced sports action live match excitement and smooth online betting experiences on one trusted platform.
                  </p>
                  <p>
                    Badminton has become one of the fastest growing sports in online betting because of its speed competitive gameplay and thrilling match moments. From international tournaments to major badminton championships millions of sports fans now follow live badminton matches and explore online betting opportunities every day.
                  </p>
                  <p>
                    At 1xPlay users can enjoy a premium badminton betting experience with real time match updates live betting markets smooth mobile access and secure betting systems designed for modern sports enthusiasts.
                  </p>
                  <p className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    Whether you are following international badminton stars major tournaments or live match action 1xPlay provides everything needed for a smooth and engaging badminton betting experience.
                  </p>
                </div>
              </article>

              {/* Section 2: Why Badminton Betting Is Growing Fast */}
              <article id="why-growing" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaBolt size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Why Badminton Betting Is Growing Fast
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Badminton betting has gained huge popularity in recent years because the sport offers:
                  </p>
                  
                  <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    {[
                      { text: "Fast match pace", icon: FaBolt },
                      { text: "Quick point scoring", icon: FaBolt },
                      { text: "Live betting excitement", icon: FaTv },
                      { text: "Competitive international tournaments", icon: FaTrophy },
                      { text: "Frequent momentum changes", icon: FaSyncAlt },
                      { text: "Strong global fan following", icon: FaGlobe }
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={idx} className={clsx('flex', 'items-center', 'gap-3', 'p-4', 'bg-bg2', 'border', 'border-border', 'rounded-xl')}>
                          <IconComponent className="text-gold flex-shrink-0" size={16} />
                          <span className={clsx('text-[14px]', 'text-text')}>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <p>
                    Unlike many sports badminton matches move quickly which creates more opportunities for live betting and real time predictions.
                  </p>
                  <p>
                    Sports fans enjoy badminton betting because every set and point can change the direction of the match within seconds making the experience more engaging and entertaining.
                  </p>
                </div>
              </article>

              {/* Section 3: Live Badminton Betting Experience */}
              <article id="live-experience" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaTv size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Live Badminton Betting Experience
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    At 1xPlay users can enjoy live badminton betting with real time odds and fast market updates during ongoing matches.
                  </p>
                  <p>
                    The platform is optimized for live sports action which allows users to place bets quickly while following match progress without delays.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Live Betting Features</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Real time betting markets",
                        "Fast odds updates",
                        "Smooth live interface",
                        "Mobile friendly betting experience",
                        "Secure betting environment",
                        "Easy market navigation"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Live badminton betting creates a more interactive sports experience because users can react to match situations instantly.
                  </p>
                </div>
              </article>

              {/* Section 4: Popular Badminton Betting Markets */}
              <article id="markets" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaTrophy size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Popular Badminton Betting Markets
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    1xPlay provides multiple badminton betting options designed for both beginners and experienced sports bettors.
                  </p>

                  <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    {[
                      { title: "Match Winner", desc: "Predict which player or team will win the match." },
                      { title: "Set Betting", desc: "Bet on the exact set result during the match." },
                      { title: "Total Points", desc: "Predict whether the total points scored will be over or under a selected number." },
                      { title: "Handicap Betting", desc: "Choose players with adjusted point advantages or disadvantages." },
                      { title: "Live Betting Markets", desc: "Place bets during live matches with continuously updated odds." },
                      { title: "Tournament Betting", desc: "Bet on players or teams expected to win major badminton tournaments." }
                    ].map((market) => (
                      <div key={market.title} className={clsx('bg-bg2', 'border', 'border-border', 'rounded-xl', 'p-5', 'hover:border-gold/25', 'transition-all')}>
                        <h4 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-white', 'text-[14px]', 'mb-2')}>{market.title}</h4>
                        <p className={clsx('text-[12px]', 'text-muted', 'leading-[1.6]')}>{market.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p>
                    Our goal is to provide users with a complete badminton betting experience through multiple sports markets and real time match access.
                  </p>
                </div>
              </article>

              {/* Section 5: Major Badminton Tournaments Available */}
              <article id="tournaments" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaTrophy size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Major Badminton Tournaments Available
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    At 1xPlay users can follow and bet on some of the biggest badminton tournaments and international competitions.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Popular Events Include</p>
                    <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3')}>
                      {[
                        "BWF World Championships",
                        "Thomas Cup",
                        "Uber Cup",
                        "Sudirman Cup",
                        "All England Open",
                        "Indonesia Open",
                        "Malaysia Open",
                        "Olympic Badminton Events",
                        "International Super Series Tournaments"
                      ].map((item) => (
                        <div key={item} className={clsx('flex', 'items-center', 'gap-3', 'py-1')}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span className={clsx('text-[13px]', 'text-text')}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p>
                    Badminton fans can enjoy live sports entertainment throughout the year with access to multiple international competitions and top ranked players.
                  </p>
                </div>
              </article>

              {/* Section 6: Smooth Mobile Betting Experience */}
              <article id="mobile-experience" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaMobileAlt size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Smooth Mobile Betting Experience
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Modern users prefer mobile sports betting because it offers flexibility and instant access to live events. That is why 1xPlay is fully optimized for smartphones tablets and mobile devices.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Users can:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Access live badminton betting anywhere",
                        "Monitor match scores in real time",
                        "Place bets quickly",
                        "Manage betting activity easily",
                        "Enjoy smooth mobile performance"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    The mobile platform is designed for fast navigation and uninterrupted sports entertainment.
                  </p>
                </div>
              </article>

              {/* Section 7: Secure Online Sports Betting Platform */}
              <article id="security" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(30,191,106,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-green/10', 'flex', 'items-center', 'justify-center', 'text-green')}>
                    <FaShieldAlt size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Secure Online Sports Betting Platform
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Security remains one of the biggest priorities at 1xPlay. Our platform uses advanced technology and secure systems to help protect user accounts transactions and betting activity.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Users can enjoy badminton betting with confidence because we focus on:</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Secure account systems",
                        "Protected transactions",
                        "Reliable platform performance",
                        "Safe betting environment",
                        "User account protection"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-green', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    We continuously improve platform security and performance to maintain user trust and better sports betting experiences.
                  </p>
                </div>
              </article>

              {/* Section 8: Why Choose 1xPlay for Badminton Betting */}
              <article id="why-choose" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaCheckCircle size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Why Choose 1xPlay for Badminton Betting
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    There are many online sports betting platforms available but 1xPlay focuses on delivering a better user experience with smooth performance fast access and secure betting systems.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>Benefits of Betting on Badminton at 1xPlay</p>
                    <ul className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Live badminton betting",
                        "Fast betting markets",
                        "Smooth mobile experience",
                        "Secure betting platform",
                        "Real time odds updates",
                        "Easy to use interface",
                        "International tournament coverage",
                        "Reliable support system"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-gold', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Our platform is designed for sports fans who want a fast responsive and engaging badminton betting experience.
                  </p>
                </div>
              </article>

              {/* Section 9: Easy to Start Betting */}
              <article id="how-to-start" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaPlayCircle size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Easy to Start Betting
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    Getting started with badminton betting at 1xPlay is simple.
                  </p>

                  <div className={clsx('flex', 'flex-col', 'gap-4')}>
                    {[
                      { step: "Step 1", title: "Create an Account", desc: "Register your account through the 1xPlay platform." },
                      { step: "Step 2", title: "Add Funds", desc: "Use the secure deposit system to fund your account." },
                      { step: "Step 3", title: "Choose a Match", desc: "Explore live and upcoming badminton events." },
                      { step: "Step 4", title: "Place Your Bet", desc: "Select your preferred betting market and enjoy the match." }
                    ].map((s) => (
                      <div key={s.step} className={clsx('flex', 'gap-5', 'p-5', 'bg-bg2', 'border', 'border-border', 'rounded-xl')}>
                        <div className={clsx('font-[var(--font-bebas)]', 'text-[24px]', 'text-gold', 'leading-none', 'shrink-0')}>{s.step}</div>
                        <div className="flex flex-col gap-1">
                          <h4 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-white', 'text-[14px]')}>{s.title}</h4>
                          <p className={clsx('text-[12px]', 'text-muted', 'leading-[1.6]')}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p>
                    The platform is designed to make sports betting easy accessible and enjoyable for all users.
                  </p>
                </div>
              </article>

              {/* Section 10: Responsible Sports Betting */}
              <article id="responsible" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-0', 'right-0', 'w-[150px]', 'h-[150px]', 'bg-[radial-gradient(circle,rgba(232,48,58,0.03)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-red/10', 'flex', 'items-center', 'justify-center', 'text-red')}>
                    <FaExclamationTriangle size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Responsible Sports Betting
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6')}>
                  <p>
                    At 1xPlay we encourage users to enjoy sports betting responsibly. Betting should always remain a form of entertainment and users should play within their financial limits.
                  </p>

                  <div className={clsx('bg-bg/40', 'border', 'border-border', 'rounded-xl', 'p-6')}>
                    <p className={clsx('text-white', 'font-medium', 'mb-4', 'text-[14px]')}>We recommend:</p>
                    <ul className={clsx('flex', 'flex-col', 'gap-3.5', 'list-none', 'p-0', 'm-0')}>
                      {[
                        "Setting personal betting limits",
                        "Managing spending responsibly",
                        "Avoiding emotional betting decisions",
                        "Taking breaks when necessary"
                      ].map((item) => (
                        <li key={item} className={clsx('flex', 'items-start', 'gap-3', 'text-[14px]')}>
                          <FaCheckCircle className={clsx('text-red', 'mt-1', 'flex-shrink-0')} size={14} />
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>
                    Responsible betting helps maintain a safe and enjoyable sports entertainment experience.
                  </p>
                </div>
              </article>

              {/* Section 11: Join the Badminton Betting Experience at 1xPlay */}
              <article id="join-experience" className={clsx('bg-card', 'border', 'border-border', 'rounded-2xl', 'p-8', 'md:p-10', 'reveal', 'relative', 'overflow-hidden')}>
                <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.04)_0%,transparent_70%)]', 'pointer-events-none')} />

                <div className={clsx('flex', 'items-center', 'gap-3.5', 'mb-6')}>
                  <div className={clsx('w-10', 'h-10', 'rounded-lg', 'bg-gold/10', 'flex', 'items-center', 'justify-center', 'text-gold')}>
                    <FaArrowRight size={18} />
                  </div>
                  <h2 className={clsx('font-[var(--font-bebas)]', 'text-[32px]', 'text-white', 'tracking-[1px]')}>
                    Join the Badminton Betting Experience at 1xPlay
                  </h2>
                </div>

                <div className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'flex', 'flex-col', 'gap-6', 'relative', 'z-10')}>
                  <p>
                    Badminton continues growing as one of the most exciting sports for online betting and 1xPlay is committed to providing a premium betting experience for sports fans worldwide.
                  </p>
                  <p>
                    From live badminton betting and real time odds to international tournament coverage and smooth mobile access 1xPlay delivers everything needed for modern online sports entertainment.
                  </p>
                  <p className={clsx('bg-gold/5', 'border-l-2', 'border-gold', 'p-4', 'rounded-r-lg', 'text-white', 'font-normal')}>
                    If you are looking for a secure fast and user friendly badminton betting platform 1xPlay is the perfect place to enjoy live sports action and exciting betting experiences anytime anywhere.
                  </p>
                  
                  <div className={clsx('flex', 'flex-wrap', 'gap-4', 'mt-4')}>
                    <Link href="/" className={clsx('btn', 'btn-gold')}>
                      Register & Join Now
                    </Link>
                    <Link href="/games" className={clsx('btn', 'btn-ghost')}>
                      Explore Game Hub
                    </Link>
                  </div>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
