"use client";

import clsx from "clsx";
import ScrollReveal from "../components/ScrollReveal";
import Image from "next/image";

const whyChoose1xPlay = [
  { icon: "ðŸ“¡", label: "Live soccer betting with real time odds", desc: "Follow the game and place bets as action happens." },
  { icon: "âš¡", label: "Fast and smooth betting interface", desc: "Place bets instantly with zero lag or delay." },
  { icon: "ðŸ“±", label: "Mobile friendly football betting experience", desc: "Fully optimized for smartphones and tablets." },
  { icon: "ðŸ”’", label: "Secure sports betting platform", desc: "Advanced systems protecting account and data." },
  { icon: "ðŸ§­", label: "Easy navigation for beginners", desc: "Simple layout makes placing bets simple and fast." },
  { icon: "âš½", label: "Wide range of football betting markets", desc: "Choose from match winner, goals, corners and more." },
  { icon: "ðŸ†", label: "International league and tournament coverage", desc: "Bet on UEFA Champions League, Premier League and more." },
  { icon: "âš¡", label: "Quick access to live matches", desc: "Instantly browse ongoing soccer matches worldwide." },
];

const whyPopular = [
  { icon: "ðŸ”¥", label: "Matches are exciting and unpredictable" },
  { icon: "ðŸ“¡", label: "Live betting adds more entertainment" },
  { icon: "ðŸ“Š", label: "Multiple betting options are available" },
  { icon: "ðŸŒ", label: "International tournaments attract huge audiences" },
  { icon: "âš¡", label: "Every goal changes the game instantly" },
  { icon: "âš½", label: "Interactive experience for football lovers" },
];

const liveFeatures = [
  { icon: "ðŸ“Š", label: "Real time score updates" },
  { icon: "âš¡", label: "Fast changing live odds" },
  { icon: "ðŸŽ¯", label: "Instant market access" },
  { icon: "ðŸ“¡", label: "Live football match coverage" },
  { icon: "ðŸ“±", label: "Smooth mobile betting" },
  { icon: "â±ï¸", label: "Quick betting experience" },
];

const bettingMarkets = [
  { title: "Match Winner", desc: "Predict which team will win the football match.", icon: "ðŸ†" },
  { title: "Both Teams to Score", desc: "Bet on whether both teams will score during the game.", icon: "âš½" },
  { title: "Total Goals", desc: "Predict total match goals with over and under betting markets.", icon: "ðŸ”¢" },
  { title: "Correct Score", desc: "Choose the exact final score of the football match.", icon: "ðŸŽ¯" },
  { title: "First Goal Scorer", desc: "Predict the player who will score the first goal of the game.", icon: "ðŸƒâ€â™‚ï¸" },
  { title: "Handicap Betting", desc: "Bet with adjusted score advantages for selected teams.", icon: "âš–ï¸" },
  { title: "Corner Betting", desc: "Place bets on total corners and team corner performance.", icon: "ðŸš©" },
  { title: "Live Betting Markets", desc: "Enjoy fast betting opportunities during live football matches.", icon: "ðŸ“¡" },
];

const tournaments = [
  "UEFA Champions League", "English Premier League", "La Liga", "Serie A",
  "Bundesliga", "FIFA World Cup", "UEFA Euro Championship",
  "Copa America", "International Football Matches", "Club Football Competitions",
];

const mobileFeatures = [
  "Place bets quickly on the go",
  "Follow live football matches anywhere",
  "Check betting history instantly",
  "Access live odds in real-time",
  "Manage accounts and transactions easily",
];

const securityFeatures = [
  { icon: "ðŸ”", label: "Secure account protection" },
  { icon: "ðŸ’³", label: "Safe payment systems" },
  { icon: "âš™ï¸", label: "Encrypted user data" },
  { icon: "ðŸ›¡ï¸", label: "Reliable platform performance" },
  { icon: "ðŸ”’", label: "Protected transactions" },
];

const steps = [
  { step: "01", title: "Create an Account", desc: "Register your account through the 1xPlay platform." },
  { step: "02", title: "Deposit Funds", desc: "Use the secure payment system to add funds to your account." },
  { step: "03", title: "Choose a Match", desc: "Browse upcoming football matches and live events." },
  { step: "04", title: "Place Your Bet", desc: "Select your preferred football betting market and enjoy the game." },
];

const responsibleTips = [
  "Set personal betting limits",
  "Avoid emotional betting decisions",
  "Manage gaming budgets responsibly",
  "Take regular breaks when needed",
];

export default function SoccerBetting() {
  return (
    <>
      <ScrollReveal />

      {/* ===== HERO SECTION ===== */}
      <section className={clsx('relative', 'min-h-[70vh]', 'flex', 'items-center', 'overflow-hidden')}>
        {/* Hero Background Image */}
        <div className={clsx('absolute', 'inset-0', 'z-0')}>
          <Image
            src="/soccer-hero.png"
            alt="Soccer Betting at 1xPlay"
            fill
            className="object-cover"
            priority
          />
          <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-[#080A0E]/95', 'via-[#080A0E]/70', 'to-transparent')} />
          <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#080A0E]', 'via-transparent', 'to-transparent')} />
        </div>

        <div className={clsx('relative', 'z-10', 'max-w-[1200px]', 'mx-auto', 'px-[5%]', 'py-[70px]')}>
          <div className={clsx('max-w-[700px]', 'reveal')}>
            <div className="section-tag">âš½ Soccer Betting</div>
            <h1 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(40px,6vw,72px)]', 'tracking-[1px]', 'leading-[1.05]', 'text-white', 'mb-6')}>
              Soccer Betting<br />at <span className="text-gold">1xPlay</span>
            </h1>
            <p className={clsx('text-[17px]', 'text-[#B0B8CC]', 'leading-[1.8]', 'font-light', 'mb-8', 'max-w-[600px]')}>
              Experience fast, exciting, and smooth soccer betting at 1xPlay. From international football tournaments to live league matches, 1xPlay gives football fans a complete online betting experience with real-time odds, live match updates, and easy-to-use betting markets.
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
            Football is one of the most popular sports in the world and millions of fans enjoy online soccer betting every day. At 1xPlay users can follow top football leagues, place live bets, and enjoy nonstop sports action on a secure and mobile-friendly platform.
          </p>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.9]', 'font-light', 'mb-6')}>
            Welcome to the world of soccer betting at 1xPlay where football fans can enjoy live match action, exciting betting markets, and a smooth online sports betting experience on one trusted platform.
          </p>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
            Whether you enjoy Premier League matches, Champions League nights, or international football tournaments, 1xPlay brings all the excitement together in one place.
          </p>
        </div>
      </section>

      {/* ===== WHY CHOOSE 1XPLAY ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-0', 'right-[-10%]', 'w-[400px]', 'h-[400px]', 'bg-[radial-gradient(circle,rgba(0,120,229,0.05)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Premium Platform</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Why Football Fans<br />Choose <span className="text-gold">1xPlay</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              1xPlay is designed for modern football fans who want a fast, reliable, and user-friendly betting platform.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-5', 'mb-10')}>
            {whyChoose1xPlay.map((item) => (
              <div key={item.label} className={clsx('flex', 'flex-col', 'gap-3', 'p-6', 'bg-card', 'border', 'border-border', 'rounded-2xl', 'hover:border-[rgba(0,120,229,0.3)]', 'transition-all', 'group', 'reveal')}>
                <div className={clsx('text-[30px]', 'w-12', 'h-12', 'rounded-xl', 'bg-[rgba(0,120,229,0.08)]', 'flex', 'items-center', 'justify-center', 'group-hover:scale-110', 'transition-transform')}>
                  {item.icon}
                </div>
                <h4 className={clsx('font-[var(--font-syne)]', 'text-[15px]', 'font-bold', 'text-white')}>{item.label}</h4>
                <p className={clsx('text-[12px]', 'text-muted', 'leading-[1.6]')}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={clsx('max-w-[800px]', 'mx-auto', 'text-center', 'reveal')}>
            <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
              Our platform helps users enjoy football betting without complicated systems or slow performance. We prioritize speed, reliability, and security to make your experience unmatched.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY SO POPULAR ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Global Phenomenon</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Why Soccer Betting<br />Is <span className="text-gold">So Popular</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              Football betting continues growing rapidly because soccer delivers nonstop excitement, competitive matches, and global fan engagement.
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
            Every match creates new betting opportunities from goals and corners to match winners and live score predictions, creating a more interactive sports experience for football lovers around the world.
          </p>
        </div>
      </section>

      {/* ===== LIVE BETTING EXPERIENCE ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg', 'overflow-hidden')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'items-center')}>
            {/* Left: Content */}
            <div className="reveal">
              <div className="section-tag">Live Action</div>
              <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
                Live Soccer<br /><span className="text-gold">Betting Experience</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-6')}>
                Live football betting is one of the biggest attractions for sports fans today. At 1xPlay, users can place bets while the match is happening and enjoy real-time match excitement.
              </p>
              <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8')}>
                As the game changes, the betting odds update instantly, which creates more opportunities during the match. Follow matches live while placing bets instantly through our smooth and responsive interface.
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

              <p className={clsx('text-[13px]', 'text-muted', 'leading-[1.7]', 'mt-6', 'font-light')}>
                Live football betting helps users enjoy a more interactive sports experience by reacting to match events as they happen.
              </p>
            </div>

            {/* Right: Image */}
            <div className={clsx('reveal', 'relative', 'rounded-2xl', 'overflow-hidden', 'border', 'border-border')}>
              <Image
                src="/soccer-live.png"
                alt="Live Soccer Betting at 1xPlay"
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
      <section id="markets" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Betting Markets</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Popular Soccer<br /><span className="text-gold">Betting Markets</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              1xPlay offers multiple football betting options designed for both beginners and experienced sports bettors.
            </p>
          </div>

          <div className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-5')}>
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
            Our betting markets are designed to provide more excitement, flexibility, and entertainment for football fans worldwide.
          </p>
        </div>
      </section>

      {/* ===== MAJOR TOURNAMENTS ===== */}
      <section className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Tournaments</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,52px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Top Football Leagues<br />and <span className="text-gold">Tournaments</span> Available
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light')}>
              At 1xPlay, users can explore betting markets for some of the biggest football leagues, competitions, and international tournaments from around the world.
            </p>
          </div>

          <h3 className={clsx('font-[var(--font-syne)]', 'font-bold', 'text-[18px]', 'text-white', 'text-center', 'mb-8', 'reveal')}>
            Popular Competitions
          </h3>

          <div className={clsx('grid', 'grid-cols-2', 'md:grid-cols-5', 'gap-3.5', 'max-w-[1000px]', 'mx-auto', 'mb-10')}>
            {tournaments.map((t) => (
              <div key={t} className={clsx('flex', 'items-center', 'gap-3', 'p-4', 'bg-card', 'border', 'border-border', 'rounded-xl', 'hover:border-[rgba(0,120,229,0.25)]', 'transition-all', 'reveal')}>
                <span className="text-gold text-[14px]">âš½</span>
                <span className={clsx('text-[13px]', 'text-white', 'font-medium')}>{t}</span>
              </div>
            ))}
          </div>

          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'text-center', 'max-w-[650px]', 'mx-auto', 'font-light', 'reveal')}>
            Football fans can support their favorite clubs, players, and national teams while enjoying exciting online betting opportunities throughout the year.
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
                src="/soccer-mobile.png"
                alt="Mobile Soccer Betting at 1xPlay"
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
                Mobile Friendly<br /><span className="text-gold">Soccer Betting</span> Experience
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-8')}>
                Most football fans now prefer mobile sports betting because it allows instant access to matches and betting markets anytime, anywhere. 1xPlay is fully optimized for mobile devices so you never miss a match moment.
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
                The platform is built for smooth mobile performance with fast loading pages and easy navigation across smartphones and tablets.
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
              Safe and Secure<br />Football <span className="text-gold">Betting</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[650px]', 'mx-auto', 'font-light', 'mb-10')}>
              Security and reliability are important for every sports betting platform. At 1xPlay, we use modern systems and advanced technology to help protect user accounts, transactions, and betting activity.
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
              We continuously improve platform security to provide users with a trusted online football betting experience, focusing on safe payment systems, encrypted user data, and reliable platform performance.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW TO START ===== */}
      <section id="how-to-start" className={clsx('py-[50px]', 'px-[5%]', 'bg-bg3')}>
        <div className={clsx('max-w-[1200px]', 'mx-auto')}>
          <div className={clsx('text-center', 'mb-14', 'reveal')}>
            <div className={clsx('section-tag', 'justify-center')}>Get Started</div>
            <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(32px,4.5vw,56px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
              Easy to Start<br /><span className="text-gold">Football Betting</span>
            </h2>
            <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[550px]', 'mx-auto', 'font-light')}>
              Getting started with soccer betting at 1xPlay is simple, even for beginners.
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
            Our goal is to make football betting simple, fast, and enjoyable for every user.
          </p>
        </div>
      </section>

      {/* ===== RESPONSIBLE BETTING ===== */}
      <section className={clsx('py-[40px]', 'px-[5%]', 'bg-bg2')}>
        <div className={clsx('max-w-[800px]', 'mx-auto')}>
          <div className={clsx('bg-card/60', 'backdrop-blur-sm', 'border', 'border-border', 'rounded-2xl', 'p-10', 'reveal')}>
            <div className={clsx('text-center', 'mb-8')}>
              <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(28px,3.5vw,42px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-4')}>
                Responsible Football <span className="text-gold">Betting</span>
              </h2>
              <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light')}>
                At 1xPlay, we encourage users to enjoy football betting responsibly. Sports betting should always remain entertainment, and users should never bet beyond their financial limits.
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
              Responsible gambling helps maintain a safe, healthy, and enjoyable sports entertainment experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={clsx('py-[60px]', 'px-[5%]', 'bg-bg', 'text-center', 'relative', 'overflow-hidden')}>
        <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[800px]', 'h-[400px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

        <div className={clsx('relative', 'z-10', 'max-w-[750px]', 'mx-auto', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Enjoy the Best Experience</div>
          <h2 className={clsx('font-[var(--font-bebas)]', 'text-[clamp(36px,5vw,64px)]', 'tracking-[1px]', 'leading-none', 'text-white', 'mb-5')}>
            Start Soccer Betting Today at <span className="text-gold">1xPlay</span>
          </h2>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
            1xPlay continues growing as a trusted destination for football fans who want fast, secure, and exciting online soccer betting.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-5')}>
            From live football betting and international tournaments to smooth mobile access and real-time odds, 1xPlay provides everything needed for a premium sports betting experience.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'font-light', 'mb-10')}>
            If you are looking for a user-friendly football betting platform with exciting markets, secure systems, and smooth performance, 1xPlay is the perfect place to enjoy online soccer betting anytime, anywhere.
          </p>
          <div className={clsx('flex', 'gap-4', 'justify-center', 'flex-wrap')}>
            <a href="#" className={clsx('btn', 'btn-gold', 'btn-large')}>Join & Bet Now</a>
            <a href="/games" className={clsx('btn', 'btn-ghost', 'btn-large')}>All Games Hub</a>
          </div>
        </div>
      </section>
    </>
  );
}
