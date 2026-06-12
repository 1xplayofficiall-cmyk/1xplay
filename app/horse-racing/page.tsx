"use client";

import clsx from "clsx";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

const whyPopular = [
  { icon: "âš¡", label: "Races are fast and exciting" },
  { icon: "ðŸ“¡", label: "Live betting creates more entertainment" },
  { icon: "ðŸ“Š", label: "Multiple betting options are available" },
  { icon: "ðŸŒ", label: "International racing events attract huge audiences" },
  { icon: "ðŸ‡", label: "Every race offers new opportunities" },
  { icon: "ðŸ", label: "Fast pace and unpredictability" },
];

const liveFeatures = [
  { icon: "ðŸ“Š", label: "Real time horse racing odds" },
  { icon: "âš¡", label: "Fast live betting markets" },
  { icon: "ðŸ“±", label: "Mobile friendly race betting" },
  { icon: "ðŸ–¥ï¸", label: "Smooth betting interface" },
  { icon: "ðŸ‡", label: "Quick access to live races" },
  { icon: "ðŸ§­", label: "Easy market navigation" },
];

const bettingMarkets = [
  { title: "Race Winner", desc: "Predict which horse will win the race.", icon: "ðŸ¥‡" },
  { title: "Place Betting", desc: "Bet on a horse to finish within selected top positions.", icon: "ðŸ…" },
  { title: "Each Way Betting", desc: "Combine win and place betting into one selection.", icon: "âš–ï¸" },
  { title: "Forecast Betting", desc: "Predict the first and second place horses in the correct order.", icon: "ðŸ“‹" },
  { title: "Tricast Betting", desc: "Choose the top three race finishers in exact order.", icon: "ðŸ†" },
  { title: "Live Betting Markets", desc: "Place bets during live horse racing events with updated odds.", icon: "ðŸ“¡" },
];

const tournaments = [
  "International horse racing championships",
  "Premium racing tournaments",
  "Global horse racing events",
  "Live race meetings",
  "Seasonal racing competitions",
];

const mobileFeatures = [
  "Follow live horse races",
  "Place bets quickly",
  "Access live odds",
  "Manage betting activity easily",
  "Enjoy smooth mobile performance",
];

const securityFeatures = [
  { icon: "ðŸ”", label: "Secure account protection" },
  { icon: "ðŸ’³", label: "Safe payment systems" },
  { icon: "âš™ï¸", label: "Encrypted transactions" },
  { icon: "ðŸ›¡ï¸", label: "Reliable betting systems" },
  { icon: "ðŸ‘¤", label: "Protected user information" },
];

const benefits = [
  "Live horse racing betting",
  "Real time odds updates",
  "Fast market access",
  "Mobile optimized betting platform",
  "Secure betting systems",
  "Easy to use interface",
  "International race coverage",
  "Reliable customer support",
];

const steps = [
  { step: "01", title: "Create an Account", desc: "Register your account through the 1xPlay platform." },
  { step: "02", title: "Deposit Funds", desc: "Use the secure payment system to add funds to your account." },
  { step: "03", title: "Choose a Race", desc: "Explore upcoming and live horse racing events." },
  { step: "04", title: "Place Your Bet", desc: "Select your preferred betting market and enjoy the race." },
];

const whyUsersEnjoy = [
  { icon: "â±ï¸", label: "Races are quick and entertaining" },
  { icon: "ðŸ“¡", label: "Live betting increases excitement" },
  { icon: "ðŸ“Š", label: "Multiple race markets are available" },
  { icon: "ðŸŒŽ", label: "International events create nonstop action" },
  { icon: "ðŸ“ˆ", label: "Real time odds improve engagement" },
];

const responsibleTips = [
  "Set personal betting limits",
  "Manage spending responsibly",
  "Avoid emotional betting decisions",
  "Take regular breaks when needed",
];

export default function HorseRacing() {
  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx('relative', 'min-h-[70vh]', 'flex', 'items-center', 'overflow-hidden')}>
        {/* Hero Background Image */}
        <div className={clsx('absolute', 'inset-0', 'z-0')}>
          <Image
            src="/horse-racing-hero.png"
            alt="Horse Racing Betting at 1xPlay"
            fill
            className="object-cover"
            priority
          />
          <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-[#080A0E]/95', 'via-[#080A0E]/70', 'to-transparent')} />
          <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#080A0E]', 'via-transparent', 'to-transparent')} />
        </div>

        <div className={clsx('relative', 'z-10', 'max-w-[1200px]', 'mx-auto', 'px-[5%]', 'py-[70px]')}>
          <div className={clsx('max-w-[700px]', 'reveal')}>
            <div className="section-tag">ðŸ‡ Horse Racing</div>
            <h1 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(40px,6vw,72px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-6')}>
              Horse Racing Betting<br />at <span className="text-gold">1xPlay</span>
            </h1>
            <p className={clsx('text-[17px]', 'text-[#B0B8CC]', 'leading-[1.8]', 'font-light', 'mb-8', 'max-w-[600px]')}>
              Welcome to the exciting world of horse racing betting at 1xPlay where speed, strategy, and real-time sports action come together on one modern betting platform.
            </p>
            <div className={clsx('flex', 'gap-4', 'flex-wrap')}>
              <a href="#markets" className={clsx('btn', 'btn-gold', 'btn-large')}>Explore Markets</a>
              <a href="#how-to-start" className={clsx('btn', 'btn-ghost', 'btn-large')}>How to Start</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className={clsx('py-[40px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[950px]', 'mx-auto', 'text-center', 'reveal')}>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.9]', 'font-light', 'mb-6')}>
            Horse racing remains one of the most popular sports betting categories worldwide because of its fast races, thrilling finishes, and exciting betting opportunities. At 1xPlay, users can enjoy live horse racing betting, smooth mobile access, and real-time odds updates for major racing events and international tournaments.
          </p>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
            Whether you are an experienced racing fan or a beginner exploring online horse racing betting, 1xPlay provides a secure, easy to use, and user-friendly platform designed for modern sports enthusiasts.
          </p>
        </div>
      </section>

      {/* ===== WHY POPULAR ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-0', 'right-[-10%]', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.05)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Thrilling Action</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Why Horse Racing Betting<br />Is <span className="text-gold">So Popular</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              Horse racing has been one of the biggest betting sports for many years because every race brings excitement, competition, and unpredictable results.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-2', 'md:grid-cols-3', 'gap-4', 'mb-10')}>
            {whyPopular.map((item) => (
              <div key={item.label} className={clsx('flex', 'items-center', 'gap-3.5', 'p-5', 'bg-card', 'border', 'border-border', 'rounded-xl', 'hover:border-[rgba(0,120,229,0.3)]', 'transition-all', 'group', 'reveal')}>
                <span className={clsx('text-[22px]', 'group-hover:scale-110', 'transition-transform')}>{item.icon}</span>
                <span className={clsx('text-[14px]', 'text-white', 'font-medium')}>{item.label}</span>
              </div>
            ))}
          </div>

          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-center', 'max-w-[700px]', 'mx-auto', 'font-light', 'reveal')}>
            The speed and unpredictability of horse racing make it one of the most engaging online sports betting experiences.
          </p>
        </div>
      </section>

      {/* ===== LIVE BETTING EXPERIENCE ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2', 'overflow-hidden')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-center')}>
            {/* Left: Content */}
            <div className="reveal">
              <div className="section-tag">Live Race Tracking</div>
              <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
                Live Horse Racing<br /><span className="text-gold">Betting Experience</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                At 1xPlay, users can enjoy live horse racing betting with real-time race updates and continuously changing odds.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8')}>
                The platform is designed to provide fast betting access during live races so users can place bets smoothly without delays. Live horse racing betting helps users feel more connected to the race while enjoying real-time sports action.
              </p>

              <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[16px]', 'text-white', 'mb-5')}>Live Betting Features</h3>
              <div className={clsx('grid', 'grid-cols-2', 'gap-3')}>
                {liveFeatures.map((f) => (
                  <div key={f.label} className={clsx('flex', 'items-center', 'gap-2.5', 'p-3.5', 'bg-card', 'border', 'border-border', 'rounded-lg', 'text-[13px]', 'text-white', 'font-medium')}>
                    <span className="text-[16px]">{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className={clsx('reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border')}>
              <Image
                src="/horse-racing-live.png"
                alt="Live Horse Racing Betting at 1xPlay"
                width={600}
                height={400}
                className={clsx('w-full', 'h-auto', 'object-cover')}
              />
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#080A0E]/60', 'via-transparent', 'to-transparent')} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR BETTING MARKETS ===== */}
      <section id="markets" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Betting Markets</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Popular Horse Racing<br /><span className="text-gold">Betting Markets</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              1xPlay offers multiple horse racing betting options designed for both beginners and experienced sports bettors.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'gap-5')}>
            {bettingMarkets.map((market) => (
              <div key={market.title} className={clsx('bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-7', 'hover:border-[rgba(0,120,229,0.25)]', 'transition-all', 'group', 'reveal')}>
                <div className={clsx('w-12', 'h-12', 'rounded-xl', 'bg-[rgba(0,120,229,0.1)]', 'border', 'border-[rgba(0,120,229,0.2)]', 'flex', 'items-center', 'justify-center', 'text-[22px]', 'mb-5', 'group-hover:scale-110', 'transition-transform')}>
                  {market.icon}
                </div>
                <h4 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-white', 'text-[16px]', 'mb-2')}>{market.title}</h4>
                <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]')}>{market.desc}</p>
              </div>
            ))}
          </div>

          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-center', 'mt-10', 'max-w-[700px]', 'mx-auto', 'font-light', 'reveal')}>
            Our goal is to provide users with a complete horse racing betting experience through flexible markets and real-time race coverage.
          </p>
        </div>
      </section>

      {/* ===== MAJOR TOURNAMENTS ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Global Events</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              International Horse<br />Racing <span className="text-gold">Events & Meets</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              At 1xPlay, users can follow and enjoy betting on major horse racing events and global racing tournaments.
            </p>
          </div>

          <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[18px]', 'text-white', 'text-center', 'mb-8', 'reveal')}>
            Popular Competitions Include
          </h3>

          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'gap-3.5', 'max-w-[900px]', 'mx-auto', 'mb-10')}>
            {tournaments.map((t) => (
              <div key={t} className={clsx('flex', 'items-center', 'gap-3', 'p-4', 'bg-card', 'border', 'border-border', 'rounded-xl', 'hover:border-[rgba(0,120,229,0.25)]', 'transition-all', 'reveal')}>
                <span className="text-gold text-[14px]">ðŸ‡</span>
                <span className={clsx('text-[13px]', 'text-white', 'font-medium')}>{t}</span>
              </div>
            ))}
          </div>

          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-center', 'max-w-[650px]', 'mx-auto', 'font-light', 'reveal')}>
            Horse racing fans can enjoy nonstop sports entertainment through exciting races from different regions around the world.
          </p>
        </div>
      </section>

      {/* ===== MOBILE BETTING ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'overflow-hidden')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-center')}>
            {/* Left: Image */}
            <div className={clsx('reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border', 'order-2', 'lg:order-1')}>
              <Image
                src="/horse-racing-mobile.png"
                alt="Mobile Horse Racing Betting at 1xPlay"
                width={600}
                height={400}
                className={clsx('w-full', 'h-auto', 'object-cover')}
              />
              <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#080A0E]/50', 'via-transparent', 'to-transparent')} />
            </div>

            {/* Right: Content */}
            <div className={clsx('reveal', 'order-1', 'lg:order-2')}>
              <div className="section-tag">Mobile Optimization</div>
              <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
                Smooth Mobile<br /><span className="text-gold">Horse Racing</span> Experience
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8')}>
                Modern users prefer mobile sports betting because it provides instant access to live races anytime and anywhere. 1xPlay is fully optimized for mobile devices for convenience and speed.
              </p>

              <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[16px]', 'text-white', 'mb-5')}>Users can:</h3>
              <div className={clsx('flex', 'flex-col', 'gap-3')}>
                {mobileFeatures.map((f) => (
                  <div key={f} className={clsx('flex', 'items-center', 'gap-3', 'p-3.5', 'bg-card', 'border', 'border-border', 'rounded-xl', 'hover:border-[rgba(0,120,229,0.25)]', 'transition-all')}>
                    <div className={clsx('w-6', 'h-6', 'rounded-full', 'bg-[rgba(0,120,229,0.15)]', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
                      <span className={clsx('text-[#0078E5]', 'text-[11px]', 'font-bold')}>âœ“</span>
                    </div>
                    <span className={clsx('text-[14px]', 'text-white', 'font-medium')}>{f}</span>
                  </div>
                ))}
              </div>

              <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]', 'mt-6', 'font-light')}>
                The mobile platform is designed for speed, convenience, and uninterrupted sports betting entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECURITY ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[900px]', 'mx-auto', 'text-center')}>
          <div className="reveal">
            <div className={clsx('section-tag', 'justify-center')}>Security</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Safe and Secure<br />Horse Racing <span className="text-gold">Betting</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light', 'mb-10')}>
              At 1xPlay, user security remains a top priority. We use advanced technology, secure systems, and modern protection tools to help maintain safe betting experiences.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-2', 'md:grid-cols-5', 'gap-4', 'mb-10')}>
            {securityFeatures.map((f) => (
              <div key={f.label} className={clsx('bg-card', 'border', 'border-border', 'rounded-xl', 'p-5', 'flex', 'flex-col', 'items-center', 'gap-3', 'hover:border-[rgba(0,120,229,0.3)]', 'transition-all', 'group', 'reveal')}>
                <span className={clsx('text-[24px]', 'group-hover:scale-110', 'transition-transform')}>{f.icon}</span>
                <span className={clsx('text-[12px]', 'text-white', 'font-medium', 'text-center', 'leading-tight')}>{f.label}</span>
              </div>
            ))}
          </div>

          <div className={clsx('max-w-[700px]', 'mx-auto', 'reveal')}>
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-3')}>
              We continuously improve platform performance and security to provide users with a trusted online betting environment, focusing on secure account protection, safe payment systems, and encrypted transactions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY USERS ENJOY ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-start')}>
            {/* Left */}
            <div className="reveal">
              <div className="section-tag">Platform Value</div>
              <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
                Why Choose <span className="text-gold">1xPlay</span><br />for Horse Racing
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
                1xPlay focuses on delivering a smooth, fast, and user-friendly sports betting experience for horse racing fans worldwide.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                Our platform is designed to help users enjoy sports betting with better performance, smoother navigation, and direct access to live odds.
              </p>
              
              <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[16px]', 'text-white', 'mb-4')}>Why Users Enjoy Horse Racing:</h3>
              <div className={clsx('flex', 'flex-col', 'gap-3')}>
                {whyUsersEnjoy.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-gold">{item.icon}</span>
                    <span className="text-[13px] text-muted font-light">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Benefits list */}
            <div className="reveal">
              <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[16px]', 'text-white', 'mb-6')}>
                Benefits of Soccer Betting at 1xPlay
              </h3>
              <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3')}>
                {benefits.map((b) => (
                  <div key={b} className={clsx('flex', 'items-center', 'gap-3', 'p-3.5', 'bg-card', 'border', 'border-border', 'rounded-xl', 'hover:border-[rgba(0,120,229,0.25)]', 'transition-all')}>
                    <div className={clsx('w-6', 'h-6', 'rounded-full', 'bg-[rgba(0,120,229,0.15)]', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
                      <span className={clsx('text-[#0078E5]', 'text-[11px]', 'font-bold')}>âœ“</span>
                    </div>
                    <span className={clsx('text-[13px]', 'text-white', 'font-medium')}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO START ===== */}
      <section id="how-to-start" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Get Started</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Easy to Start<br /><span className="text-gold">Racing Betting</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[550px]', 'mx-auto', 'font-light')}>
              Getting started with horse racing betting at 1xPlay is quick and beginner-friendly.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'items-center')}>
            {/* Left: Steps List */}
            <div className={clsx('lg:col-span-7', 'flex', 'flex-col', 'gap-4')}>
              {steps.map((s) => (
                <div key={s.step} className={clsx('flex', 'gap-5', 'p-5', 'bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'hover:border-[rgba(0,120,229,0.25)]', 'transition-all', 'group', 'reveal')}>
                  <div className={clsx('font-[var(--font-bebas)]', 'text-[36px]', 'text-gold', 'leading-none', 'shrink-0', 'group-hover:scale-110', 'transition-transform')}>{s.step}</div>
                  <div className="flex flex-col gap-1">
                    <h4 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-white', 'text-[15px]')}>{s.title}</h4>
                    <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.6]')}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Graphic */}
            <div className={clsx('lg:col-span-5', 'reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border', 'aspect-[16/10]', 'bg-bg2', 'shadow-[0_20px_40px_rgba(0,0,0,0.5)]')}>
              <div className="absolute inset-0 scale-[1.18] origin-[center_46%]">
                <Image
                  src="/image.png"
                  alt="1xPlay Registration Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4 bg-bg/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-[1px] z-10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" /> Live Platform Preview
              </div>
            </div>
          </div>

          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-center', 'mt-12', 'max-w-[600px]', 'mx-auto', 'font-light', 'reveal')}>
            The platform is designed to make horse racing betting simple, accessible, and enjoyable for all users.
          </p>
        </div>
      </section>

      {/* ===== RESPONSIBLE BETTING ===== */}
      <section className={clsx('py-[40px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[800px]', 'mx-auto')}>
          <div className={clsx('bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-10', 'reveal')}>
            <div className={clsx('text-center', 'mb-8')}>
              <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(28px,3.5vw,42px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-4')}>
                Responsible Sports <span className="text-gold">Betting</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                At 1xPlay, we encourage responsible gambling and recommend users enjoy horse racing betting as a form of entertainment only.
              </p>
            </div>

            <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[15px]', 'text-white', 'text-center', 'mb-5')}>We recommend users:</h3>
            <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3')}>
              {responsibleTips.map((tip) => (
                <div key={tip} className={clsx('flex', 'items-center', 'gap-3', 'p-3.5', 'bg-bg3', 'border', 'border-border', 'rounded-xl')}>
                  <span className="text-[16px]">âš ï¸</span>
                  <span className={clsx('text-[13px]', 'text-muted', 'font-medium')}>{tip}</span>
                </div>
              ))}
            </div>

            <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]', 'text-center', 'mt-6', 'font-light')}>
              Responsible betting helps maintain a safe and enjoyable sports entertainment experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={clsx('py-[60px]', 'px-[5%]', 'bg-bg', 'text-center', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('relative', 'z-10', 'max-w-[750px]', 'mx-auto', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Enjoy Horse Racing</div>
          <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(36px,5vw,64px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
            Join the Horse Racing Betting Experience at <span className="text-gold">1xPlay</span>
          </h2>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
            1xPlay continues growing as a trusted destination for sports fans looking for fast, secure, and exciting horse racing betting experiences.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
            From live horse racing odds and real-time betting markets to smooth mobile access and secure systems, 1xPlay provides everything needed for premium online sports betting.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-10')}>
            If you are looking for a modern horse racing betting platform with fast performance, secure transactions, and exciting race coverage, 1xPlay is the perfect place to enjoy online horse racing betting anytime, anywhere.
          </p>
          <div className={clsx('flex', 'gap-4', 'justify-center', 'flex-wrap')}>
            <a href="#" className={clsx('btn', 'btn-gold', 'btn-large')}>Start Betting Now</a>
            <a href="/games" className={clsx('btn', 'btn-ghost', 'btn-large')}>All Games Hub</a>
          </div>
        </div>
      </section>
    </>
  );
}
