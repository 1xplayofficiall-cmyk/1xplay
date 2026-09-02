import clsx from "clsx";

/* ============================================================
   Home page long-form content — "Live Cricket Betting on 1Xplay".
   Static server component; scroll-in handled by the global
   ScrollReveal observer via the `.reveal` class.
   ============================================================ */

/* ---------- data ---------- */
const intro = [
  "Cricket is more than just a sport in India, it's a passion shared by millions of fans. With Live Cricket Betting on 1Xplay, you can enjoy every over, wicket, boundary, and match-changing moment in a more engaging way. Whether you're following the Indian Premier League (IPL), ICC Cricket World Cup, T20 Cricket, One Day International (ODI), or Test Cricket, our platform is designed to provide a smooth and user-friendly betting experience.",
  "As a trusted online gaming website, 1Xplay offers reliable cricket ID services for users who want quick access to live sports betting markets and online casino entertainment. If you're searching for a trusted cricket betting ID, a dependable cricket betting ID Provider, or a secure platform for IPL cricket betting, you'll find everything you need in one place.",
  "Our goal is to provide a seamless experience with easy registration, secure payment methods, mobile-friendly access, and responsive customer support, helping users enjoy live sports responsibly.",
];

const differentiators = [
  "Trusted cricket betting ID service",
  "Easy registration process",
  "User-friendly interface",
  "Live cricket betting markets",
  "Online casino games",
  "Secure payment methods",
  "Mobile-friendly platform",
  "Responsive customer support",
  "Responsible gaming approach",
];

const liveBettingOptions = [
  "Match Winner",
  "Next Wicket",
  "Total Runs",
  "Over-by-Over Betting",
  "Top Batsman",
  "Top Bowler",
  "Team Total",
  "Session Betting",
  "Toss Winner",
  "Player Performance Markets",
];

const cricketIdBenefits = [
  "Access live cricket betting",
  "Participate in IPL cricket betting",
  "Explore multiple sports markets",
  "Play online casino games",
  "Manage deposits and withdrawals",
  "Track betting history",
  "Enjoy a personalized betting experience",
];

const providerFactors = [
  { feature: "Easy Registration", why: "Quick account setup" },
  { feature: "Secure Payments", why: "Safe deposits and withdrawals" },
  { feature: "Mobile Compatibility", why: "Bet anytime, anywhere" },
  { feature: "Responsive Support", why: "Assistance when needed" },
  { feature: "Sports Coverage", why: "More betting opportunities" },
  { feature: "Responsible Gaming", why: "Safer betting environment" },
];

const cricketIdServices = [
  "Live Cricket Betting",
  "IPL Cricket Betting",
  "International Cricket Matches",
  "Football Betting",
  "Tennis Betting",
  "Horse Racing",
  "Badminton Betting",
  "Online Casino Games",
  "Live Casino Experiences",
];

const iplMarkets = [
  "Match Winner",
  "Powerplay Runs",
  "Highest Opening Partnership",
  "Total Sixes",
  "Top Run Scorer",
  "Top Wicket Taker",
  "Team Totals",
  "Live Session Betting",
];

const paymentOptions = [
  { icon: "📲", title: "UPI", desc: "Fast, everyday transfers through your favourite UPI apps." },
  { icon: "🏦", title: "Net Banking", desc: "Direct, secure funding straight from your bank account." },
  { icon: "👛", title: "Digital Wallets", desc: "Convenient wallet payments for quick top-ups." },
];

const mobileActions = [
  "Access live betting markets",
  "Check updated odds",
  "Manage their account",
  "Explore casino games",
  "Monitor ongoing matches",
];

const otherSports = [
  { icon: "⚽", label: "Football" },
  { icon: "🎾", label: "Tennis" },
  { icon: "🏇", label: "Horse Racing" },
  { icon: "🏸", label: "Badminton" },
  { icon: "🏀", label: "Basketball" },
  { icon: "🌍", label: "Other international events" },
];

const casinoGames = [
  "Live Casino Games",
  "Roulette",
  "Blackjack",
  "Baccarat",
  "Poker",
  "Teen Patti",
  "Andar Bahar",
  "Slots",
  "Instant Games",
];

const registrationSteps = [
  "Request your Cricket Betting ID.",
  "Complete the registration process.",
  "Log in securely.",
  "Add funds using an available payment method.",
  "Explore live betting markets and casino games.",
];

const securityHighlights = [
  "Secure account access",
  "Protected payment process",
  "User privacy considerations",
  "Reliable account management",
  "Transparent platform experience",
];

const responsiblePractices = [
  "Set a personal budget before playing.",
  "Never chase losses.",
  "Take regular breaks during long sessions.",
  "Play for entertainment, not as a source of income.",
  "Use only funds you can afford to spend.",
];

const supportItems = [
  "Registration assistance",
  "Cricket ID Services",
  "Account-related questions",
  "Deposit and withdrawal guidance",
  "General platform information",
];

const whyChooseUs = [
  "Trusted cricket betting ID service",
  "Easy-to-use platform",
  "Comprehensive cricket ID services",
  "Live betting during major cricket events",
  "Wide range of sports betting markets",
  "Online casino games in one account",
  "Mobile-friendly interface",
  "Convenient payment options",
  "Responsive customer support",
  "Focus on responsible gaming",
];

/* ---------- reusable pieces ---------- */
function BlockHeader({
  tag,
  title,
  highlight,
  center = false,
}: {
  tag: string;
  title: string;
  highlight?: string;
  center?: boolean;
}) {
  return (
    <div className={clsx("mb-6", center && "sm:text-center")}>
      <div className={clsx("section-tag", center && "justify-center")}>{tag}</div>
      <h2 className="section-title">
        {title} {highlight && <span className="text-gold">{highlight}</span>}
      </h2>
    </div>
  );
}

const proseP = clsx("text-[15px]", "text-muted", "leading-[1.9]", "font-light", "max-w-[860px]");

function CheckList({ items, cols = 2 }: { items: readonly string[]; cols?: 1 | 2 | 3 }) {
  return (
    <div
      className={clsx(
        "grid",
        "gap-3",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 sm:grid-cols-2",
        cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map((item) => (
        <div
          key={item}
          className={clsx(
            "flex",
            "items-center",
            "gap-3",
            "p-3.5",
            "bg-card",
            "border",
            "border-border",
            "rounded-xl",
            "hover:border-[rgba(0,120,229,0.3)]",
            "hover:bg-card2",
            "transition-all",
            "duration-300"
          )}
        >
          <span
            className={clsx(
              "shrink-0",
              "w-6",
              "h-6",
              "rounded-full",
              "bg-[rgba(0,120,229,0.12)]",
              "border",
              "border-[rgba(0,120,229,0.25)]",
              "flex",
              "items-center",
              "justify-center",
              "text-gold",
              "text-[12px]",
              "font-bold"
            )}
          >
            ✓
          </span>
          <span className={clsx("text-[14px]", "text-white", "font-medium")}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function PillGrid({ items }: { items: readonly string[] }) {
  return (
    <div className={clsx("flex", "flex-wrap", "gap-2.5")}>
      {items.map((item) => (
        <span
          key={item}
          className={clsx(
            "inline-flex",
            "items-center",
            "px-4",
            "py-2",
            "rounded-full",
            "bg-card",
            "border",
            "border-border",
            "text-[13px]",
            "text-white",
            "font-medium",
            "hover:border-gold/40",
            "hover:bg-card2",
            "transition-all",
            "duration-300"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function LiveCricketOverview() {
  return (
    <section className={clsx("py-[50px]", "px-[5%]", "bg-bg2", "relative", "overflow-hidden")}>
      {/* Decorative glow */}
      <div
        className={clsx(
          "absolute",
          "top-0",
          "right-[-5%]",
          "w-[500px]",
          "h-[500px]",
          "bg-[radial-gradient(circle,rgba(0,120,229,0.05)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("max-w-[1200px]", "mx-auto", "relative", "z-10", "space-y-16")}>
        {/* ── Intro ── */}
        <div className="reveal">
          <BlockHeader tag="Live Cricket Betting" title="Your Trusted" highlight="Cricket Betting ID Platform" />
          <div className="space-y-4">
            {intro.map((p, i) => (
              <p key={i} className={proseP}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* ── Why Choose 1Xplay ── */}
        <div className="reveal">
          <BlockHeader tag="Why 1Xplay" title="Why Choose 1Xplay for" highlight="Live Cricket Betting?" />
          <p className={clsx(proseP, "mb-6")}>
            Choosing the right platform is one of the most important decisions for any sports betting enthusiast. At
            1Xplay, we focus on creating an experience that is simple, secure, and enjoyable for both beginners and
            experienced users.
          </p>
          <h3 className={clsx("text-[16px]", "font-semibold", "text-white", "mb-4")}>What Makes 1Xplay Different?</h3>
          <CheckList items={differentiators} cols={3} />
          <p className={clsx(proseP, "mt-6")}>
            Our platform is built to help users enjoy live betting while maintaining transparency and convenience
            throughout their journey.
          </p>
        </div>

        {/* ── What is Live Cricket Betting ── */}
        <div className="reveal">
          <BlockHeader tag="The Basics" title="What is" highlight="Live Cricket Betting?" />
          <div className={clsx("space-y-4", "mb-6")}>
            <p className={proseP}>
              Live Cricket Betting allows users to place bets while a cricket match is in progress. Unlike pre-match
              betting, live betting updates continuously as the match unfolds, giving users opportunities to react to
              changing conditions such as wickets, partnerships, powerplays, run rates, and momentum shifts.
            </p>
            <p className={proseP}>
              Whether you&apos;re watching an IPL match, an ICC tournament, or an international bilateral series, live
              betting offers a dynamic experience where every ball can influence the available betting markets.
            </p>
          </div>
          <p className={clsx("text-[14px]", "text-white", "font-medium", "mb-3")}>Some popular live betting options include:</p>
          <PillGrid items={liveBettingOptions} />
          <p className={clsx(proseP, "mt-6")}>
            Because the odds update in real time, users can make informed decisions based on the flow of the game.
          </p>

          <div className={clsx("mt-8", "bg-card", "border", "border-border", "rounded-2xl", "p-6")}>
            <h3 className={clsx("text-[16px]", "font-semibold", "text-white", "mb-3")}>
              Why Live Cricket Betting Continues to Grow
            </h3>
            <p className={clsx(proseP, "mb-3", "max-w-none")}>
              Live betting has become increasingly popular because it combines real-time action with strategic
              decision-making. Instead of relying only on pre-match predictions, users can observe pitch conditions,
              player form, weather, and match momentum before making selections.
            </p>
            <p className={clsx(proseP, "max-w-none")}>
              This interactive approach makes every stage of the match more engaging while rewarding informed
              decision-making.
            </p>
          </div>
        </div>

        {/* ── What is a Cricket Betting ID ── */}
        <div className="reveal">
          <BlockHeader tag="Cricket Betting ID" title="What is a" highlight="Cricket Betting ID?" />
          <div className={clsx("space-y-4", "mb-6")}>
            <p className={proseP}>
              A Cricket Betting ID is an account that gives users access to sports betting markets and online gaming
              services. It serves as your personal profile, allowing you to register, manage your account, access
              betting markets, and enjoy different gaming options from one secure platform.
            </p>
          </div>
          <p className={clsx("text-[14px]", "text-white", "font-medium", "mb-3")}>A reliable ID makes it easier to:</p>
          <CheckList items={cricketIdBenefits} cols={2} />
          <p className={clsx(proseP, "mt-6")}>
            Choosing a trusted cricket betting ID service is essential because it contributes to a smoother and more
            secure overall experience.
          </p>

          {/* Provider factors table */}
          <div className="mt-10">
            <h3 className={clsx("text-[18px]", "font-semibold", "text-white", "mb-3")}>
              Why Choosing a Trusted Cricket Betting ID Provider Matters
            </h3>
            <p className={clsx(proseP, "mb-5")}>
              Not every platform provides the same level of service. A reliable cricket betting ID Provider should focus
              on user experience, transparent processes, and responsive support. When selecting a provider, consider
              factors such as:
            </p>
            <div className={clsx("overflow-x-auto", "rounded-2xl", "border", "border-border", "bg-card")}>
              <table className={clsx("w-full", "min-w-[480px]", "text-left", "border-collapse")}>
                <thead>
                  <tr className="bg-card2">
                    <th className={clsx("px-5", "py-4", "text-[13px]", "font-semibold", "text-gold")}>Feature</th>
                    <th className={clsx("px-5", "py-4", "text-[13px]", "font-semibold", "text-white")}>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {providerFactors.map((row) => (
                    <tr key={row.feature} className={clsx("border-t", "border-border")}>
                      <td className={clsx("px-5", "py-4", "text-[14px]", "font-medium", "text-white")}>{row.feature}</td>
                      <td className={clsx("px-5", "py-4", "text-[13px]", "text-muted", "font-light")}>{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={clsx(proseP, "mt-6")}>
              A trusted platform helps users focus on enjoying cricket without unnecessary complications.
            </p>
          </div>
        </div>

        {/* ── Comprehensive Cricket ID Services ── */}
        <div className="reveal">
          <BlockHeader tag="One Account" title="Comprehensive" highlight="Cricket ID Services" />
          <p className={clsx(proseP, "mb-6")}>
            At 1Xplay, our cricket ID services are designed to provide convenient access to a wide range of betting
            opportunities. With a single account, users can explore:
          </p>
          <PillGrid items={cricketIdServices} />
          <p className={clsx(proseP, "mt-6")}>
            Our goal is to provide one platform where users can access multiple entertainment options through a
            streamlined experience.
          </p>
        </div>

        {/* ── IPL Cricket Betting ── */}
        <div className="reveal">
          <BlockHeader tag="IPL Betting" title="Enjoy the Thrill of" highlight="IPL Cricket Betting" />
          <div className={clsx("space-y-4", "mb-6")}>
            <p className={proseP}>
              The Indian Premier League (IPL) is one of the world&apos;s most exciting cricket tournaments. Every season
              features high-scoring matches, international stars, emerging talent, and unforgettable moments.
            </p>
            <p className={proseP}>
              For fans who enjoy IPL cricket betting, live markets provide opportunities throughout the match. From
              predicting the match winner to player performances and over-by-over outcomes, there are multiple ways to
              stay engaged with the action.
            </p>
            <p className={proseP}>
              Because odds change during the match, users can evaluate match situations, team strategies, and player
              performances before making decisions.
            </p>
          </div>
          <p className={clsx("text-[14px]", "text-white", "font-medium", "mb-3")}>Popular IPL betting markets include:</p>
          <PillGrid items={iplMarkets} />
        </div>

        {/* ── Secure Payments ── */}
        <div className="reveal">
          <BlockHeader tag="Payments" title="Secure Platform with" highlight="Convenient Payment Options" />
          <p className={clsx(proseP, "mb-6")}>
            A smooth betting experience depends on secure and convenient payment methods. 1Xplay supports commonly used
            digital payment solutions to simplify account funding and withdrawals. Users can typically access payment
            options such as:
          </p>
          <div className={clsx("grid", "grid-cols-1", "md:grid-cols-3", "gap-5")}>
            {paymentOptions.map((item) => (
              <div
                key={item.title}
                className={clsx(
                  "bg-card",
                  "border",
                  "border-border",
                  "rounded-2xl",
                  "p-6",
                  "hover:border-[rgba(0,120,229,0.3)]",
                  "hover:bg-card2",
                  "transition-all",
                  "duration-300",
                  "group"
                )}
              >
                <div
                  className={clsx(
                    "w-12",
                    "h-12",
                    "rounded-xl",
                    "bg-[rgba(0,120,229,0.1)]",
                    "border",
                    "border-[rgba(0,120,229,0.2)]",
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-[22px]",
                    "mb-4",
                    "group-hover:scale-110",
                    "transition-transform"
                  )}
                >
                  {item.icon}
                </div>
                <h3 className={clsx("text-[15px]", "font-semibold", "text-white", "mb-2")}>{item.title}</h3>
                <p className={clsx("text-[13px]", "text-muted", "leading-[1.7]", "font-light")}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className={clsx(proseP, "mt-6")}>
            The platform is designed with user privacy and account security in mind, helping create a reliable
            environment for online gaming.
          </p>
        </div>

        {/* ── Mobile-Friendly ── */}
        <div className="reveal">
          <BlockHeader tag="On the Go" title="Mobile-Friendly" highlight="Live Cricket Betting Experience" />
          <p className={clsx(proseP, "mb-6")}>
            Modern users expect flexibility, and 1Xplay is designed to work seamlessly across smartphones, tablets, and
            desktops. Whether you&apos;re following a live match from home or on the move, the platform offers a
            responsive experience on both Android and iOS devices. With mobile-friendly navigation, users can:
          </p>
          <CheckList items={mobileActions} cols={2} />
          <p className={clsx(proseP, "mt-6")}>
            This allows cricket fans to stay connected to the action wherever they are.
          </p>
        </div>

        {/* ── More than cricket ── */}
        <div className="reveal">
          <BlockHeader tag="More Sports" title="Explore More Than Cricket with" highlight="Sports Betting Markets" />
          <p className={clsx(proseP, "mb-6")}>
            While Live Cricket Betting is one of the biggest attractions on 1Xplay, the platform also offers a variety of
            sports betting markets for users who enjoy different competitions throughout the year. Having multiple sports
            in one place allows users to follow their favorite events without switching between platforms.
          </p>
          <div className={clsx("grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-6", "gap-4")}>
            {otherSports.map((s) => (
              <div
                key={s.label}
                className={clsx(
                  "bg-card",
                  "border",
                  "border-border",
                  "rounded-2xl",
                  "p-5",
                  "flex",
                  "flex-col",
                  "items-center",
                  "text-center",
                  "gap-2.5",
                  "hover:border-[rgba(0,120,229,0.3)]",
                  "hover:bg-card2",
                  "transition-all",
                  "duration-300",
                  "group"
                )}
              >
                <span className={clsx("text-[26px]", "group-hover:scale-110", "transition-transform")}>{s.icon}</span>
                <span className={clsx("text-[13px]", "text-white", "font-medium")}>{s.label}</span>
              </div>
            ))}
          </div>
          <p className={clsx(proseP, "mt-6")}>
            Whether it&apos;s a domestic league or an international tournament, users can access competitive betting
            markets designed to enhance the live sports experience.
          </p>
        </div>

        {/* ── Online Casino ── */}
        <div className="reveal">
          <BlockHeader tag="Casino" title="Enjoy Online Casino Games" highlight="Alongside Sports Betting" />
          <p className={clsx(proseP, "mb-6")}>
            1Xplay is more than a Live Cricket Betting platform. It also serves as a comprehensive online gaming website
            where users can explore a wide selection of online casino games. Popular categories include:
          </p>
          <PillGrid items={casinoGames} />
          <p className={clsx(proseP, "mt-6")}>
            The combination of sports betting and casino entertainment allows users to enjoy multiple gaming experiences
            from a single account.
          </p>
        </div>

        {/* ── Registration steps ── */}
        <div className="reveal">
          <BlockHeader tag="Get Started" title="Simple" highlight="Registration Process" />
          <p className={clsx(proseP, "mb-8")}>
            Getting started with 1Xplay is quick and straightforward. New users can complete the registration process in
            just a few simple steps.
          </p>
          <div className={clsx("grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-5", "gap-4")}>
            {registrationSteps.map((step, i) => (
              <div
                key={step}
                className={clsx(
                  "bg-card",
                  "border",
                  "border-border",
                  "rounded-2xl",
                  "p-5",
                  "hover:border-[rgba(0,120,229,0.3)]",
                  "hover:bg-card2",
                  "transition-all",
                  "duration-300"
                )}
              >
                <div
                  className={clsx(
                    "w-9",
                    "h-9",
                    "rounded-lg",
                    "bg-gradient-to-r",
                    "from-blue-600",
                    "to-cyan-500",
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-white",
                    "font-bold",
                    "text-[15px]",
                    "mb-3"
                  )}
                >
                  {i + 1}
                </div>
                <p className={clsx("text-[13px]", "text-white", "font-medium", "leading-[1.6]")}>{step}</p>
              </div>
            ))}
          </div>
          <p className={clsx(proseP, "mt-6")}>
            The platform is designed to make registration simple while ensuring a smooth user experience from the
            beginning.
          </p>
        </div>

        {/* ── Safe & Secure ── */}
        <div className="reveal">
          <BlockHeader tag="Security" title="Safe and Secure" highlight="Betting Experience" />
          <p className={clsx(proseP, "mb-6")}>
            Security is an important factor when choosing any online platform. At 1Xplay, user experience is supported by
            practices that prioritize account safety and privacy. Key highlights include:
          </p>
          <CheckList items={securityHighlights} cols={3} />
          <p className={clsx(proseP, "mt-6")}>
            A trusted cricket betting ID Provider should always make security and responsible use a priority, helping
            users enjoy the platform with confidence.
          </p>
        </div>

        {/* ── Responsible Gaming ── */}
        <div className="reveal">
          <BlockHeader tag="Play Responsibly" title="Responsible" highlight="Gaming Comes First" />
          <p className={clsx(proseP, "mb-6")}>
            Entertainment should always remain enjoyable and balanced. 1Xplay encourages Responsible Gaming by promoting
            informed decision-making and healthy gaming habits. Some responsible gaming practices include:
          </p>
          <CheckList items={responsiblePractices} cols={1} />
          <p className={clsx(proseP, "mt-6")}>
            Maintaining control over your gaming activity helps create a more positive and sustainable experience.
          </p>
        </div>

        {/* ── Customer Support ── */}
        <div className="reveal">
          <BlockHeader tag="Support" title="Dedicated" highlight="Customer Support" />
          <p className={clsx(proseP, "mb-6")}>
            Reliable customer support is an important part of any quality online gaming platform. Whether users have
            questions about account access, registration, payments, or general platform guidance, responsive assistance
            contributes to a better overall experience. A dependable support team helps users with:
          </p>
          <CheckList items={supportItems} cols={3} />
          <p className={clsx(proseP, "mt-6")}>
            Providing timely assistance helps build trust and improves the user experience.
          </p>
        </div>

        {/* ── Why thousands choose 1Xplay ── */}
        <div className="reveal">
          <BlockHeader tag="Trusted" title="Why Thousands of Users" highlight="Choose 1Xplay" />
          <p className={clsx(proseP, "mb-6")}>
            Many users look for a platform that combines convenience, security, and a wide range of gaming options.
            1Xplay brings these elements together in one place, making it suitable for users interested in Live Cricket
            Betting, sports betting, and online casino entertainment.
          </p>
          <CheckList items={whyChooseUs} cols={2} />
          <p className={clsx(proseP, "mt-6")}>
            Whether you&apos;re following the Indian Premier League (IPL), an ICC Cricket World Cup, Champions Trophy,
            Asia Cup, or other international tournaments, 1Xplay provides a streamlined platform to enjoy the excitement
            of live sports and casino gaming.
          </p>
        </div>

        {/* ── Final CTA ── */}
        <div className={clsx("reveal", "text-center", "max-w-[880px]", "mx-auto")}>
          <div className={clsx("section-tag", "justify-center")}>Get Started Today</div>
          <h2 className="section-title">
            Get Started with <span className="text-gold">Live Cricket Betting</span> Today
          </h2>
          <div className={clsx("space-y-4", "mb-8")}>
            <p className={clsx(proseP, "mx-auto")}>
              If you&apos;re looking for a trusted cricket betting ID, a reliable cricket betting ID Provider, and
              professional cricket ID services, 1Xplay offers a user-friendly platform designed around convenience and
              accessibility.
            </p>
            <p className={clsx(proseP, "mx-auto")}>
              From Live Cricket Betting and IPL Cricket Betting to sports betting markets and online casino games,
              you&apos;ll find everything you need in one place. With a straightforward registration process, secure
              payment options, mobile compatibility, and responsive customer support, 1Xplay is built to deliver a
              smooth online gaming experience.
            </p>
            <p className={clsx(proseP, "mx-auto")}>
              Register with 1Xplay, explore the available betting markets, and enjoy live sports and casino
              entertainment responsibly.
            </p>
          </div>
          <div className={clsx("flex", "flex-wrap", "gap-4", "justify-center")}>
            <a href="https://wa.link/1xplayindia" className={clsx("btn", "btn-gold", "btn-large")}>
              Get Your Cricket Betting ID
            </a>
            <a href="https://www.1xplay.games/" className={clsx("btn", "btn-ghost", "btn-large")}>
              Start Playing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
