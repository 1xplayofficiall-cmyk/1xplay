import type { Metadata, MetadataRoute } from "next";

const siteName = "1xPlay";
const defaultSiteUrl = "https://1xplay.com";
const defaultImage = "/1xplay.png";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords: string[];
  changeFrequency: ChangeFrequency;
  priority: number;
};

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
  return siteUrl.replace(/\/$/, "");
}

export const seoPages = {
  "/": {
    title: "Best Online Cricket ID & Casino Games India | 1xPlay",
    description:
      "Get a trusted Online Cricket ID for IPL betting, live cricket betting, casino games online and sports betting in India. Enjoy fast withdrawals, secure payments and 200+ casino games on 1xPlay.",
    path: "/",
    image: "/home.jpeg",
    keywords: [
      "1xPlay",
      "online cricket ID",
      "IPL betting",
      "live cricket betting",
      "casino games online",
      "sports betting India",
      "fast withdrawals",
    ],
    changeFrequency: "weekly",
    priority: 1,
  },
  "/about": {
    title: "About 1xPlay | Trusted Online Cricket ID & Gaming Platform",
    description:
      "Learn about 1xPlay, a trusted online gaming platform offering Online Cricket ID, casino games, IPL betting, sports entertainment, secure access, and mobile-friendly gaming experiences.",
    path: "/about",
    keywords: [
      "about 1xPlay",
      "online cricket ID",
      "trusted gaming platform",
      "casino games",
      "IPL betting",
      "sports entertainment",
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/affiliate": {
    title: "1xPlay Affiliate Program",
    description:
      "Join the 1xPlay Affiliate Program and earn commission by referring active users to a trusted online casino, sports betting, and gaming platform.",
    path: "/affiliate",
    keywords: ["1xPlay affiliate", "affiliate program", "gaming affiliate", "casino affiliate"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/apps": {
    title: "1xPlay App Download | Online Cricket ID & Casino Games App",
    description:
      "Download the 1xPlay App for Online Cricket ID, IPL Betting, Casino Games and Live Sports Betting. Enjoy fast withdrawals, secure access and smooth mobile gaming on Android & iOS.",
    path: "/apps",
    image: "/iphone.jpg",
    keywords: [
      "1xPlay app download",
      "online cricket ID app",
      "IPL betting app",
      "casino games app",
      "sports betting app",
      "Android iOS gaming app",
    ],
    changeFrequency: "monthly",
    priority: 0.75,
  },
  "/badminton": {
    title: "Badminton Betting India | Live Badminton Betting Online | 1xPlay",
    description:
      "Enjoy live badminton betting with real-time odds, international tournaments, mobile-friendly access, and secure sports betting markets. Explore badminton betting at 1xPlay.",
    path: "/badminton",
    image: "/badminton-hero.png",
    keywords: [
      "badminton betting India",
      "live badminton betting",
      "badminton betting markets",
      "BWF tournaments",
      "online sports betting",
      "1xPlay badminton",
    ],
    changeFrequency: "weekly",
    priority: 0.82,
  },
  "/blog": {
    title: "1xPlay Blog",
    description:
      "Read the latest 1xPlay articles, platform updates, betting insights, casino guides, and online gaming tips for players.",
    path: "/blog",
    keywords: ["1xPlay blog", "betting guide", "casino guide", "gaming news"],
    changeFrequency: "weekly",
    priority: 0.65,
  },
  "/casino": {
    title: "Casino Games Online India | Live Casino & Aviator Games | 1xPlay",
    description:
      "Play Casino Games Online at 1xPlay. Enjoy Aviator, Blackjack, Roulette, Baccarat, Teen Patti, Dragon Tiger and Live Casino games with secure access and mobile-friendly gameplay.",
    path: "/casino",
    image: "/casino-slots.jpg",
    keywords: [
      "casino games online India",
      "live casino",
      "aviator game",
      "teen patti online",
      "blackjack roulette baccarat",
      "1xPlay casino",
    ],
    changeFrequency: "weekly",
    priority: 0.88,
  },
  "/contact": {
    title: "Contact 1xPlay",
    description:
      "Contact the 1xPlay support team for account help, platform questions, payment assistance, and online gaming support.",
    path: "/contact",
    keywords: ["contact 1xPlay", "1xPlay support", "gaming support", "betting help"],
    changeFrequency: "monthly",
    priority: 0.55,
  },
  "/contact-us": {
    title: "1xPlay Customer Support | 24/7 Cricket ID & Betting Help",
    description:
      "Get 24/7 customer support for Cricket ID, account login, deposits, withdrawals, casino games, sports betting, and technical assistance at 1xPlay.",
    path: "/contact-us",
    keywords: [
      "1xPlay customer support",
      "24/7 betting help",
      "cricket ID support",
      "deposit withdrawal help",
      "live chat support",
    ],
    changeFrequency: "monthly",
    priority: 0.55,
  },
  "/cricket": {
    title: "Online Cricket ID & Live Cricket Betting Platform | 1xPlay",
    description:
      "Get a trusted Online Cricket ID for live cricket betting, IPL betting, real-time odds, secure access and major cricket tournaments. Enjoy a smooth cricket betting experience with 1xPlay.",
    path: "/cricket",
    image: "/cricket-hero.png",
    keywords: [
      "online cricket ID",
      "live cricket betting",
      "IPL betting",
      "cricket exchange ID",
      "cricket betting markets",
      "1xPlay cricket",
    ],
    changeFrequency: "weekly",
    priority: 0.95,
  },
  "/deposit": {
    title: "Deposit Funds",
    description:
      "Deposit funds on 1xPlay using a secure and simple payment flow designed for fast account top-ups and uninterrupted gameplay.",
    path: "/deposit",
    keywords: ["1xPlay deposit", "deposit funds", "secure payment", "online gaming deposit"],
    changeFrequency: "monthly",
    priority: 0.5,
  },
  "/deposit-and-withdrawal": {
    title: "Deposit and Withdrawal Guide",
    description:
      "Learn how deposits and withdrawals work on 1xPlay, including secure transactions, account verification, mobile payments, and support.",
    path: "/deposit-and-withdrawal",
    keywords: ["1xPlay deposit", "1xPlay withdrawal", "payment guide", "secure transactions"],
    changeFrequency: "monthly",
    priority: 0.72,
  },
  "/games": {
    title: "Explore Casino Games & Cricket Betting Markets | 1xPlay",
    description:
      "Explore casino games, cricket betting, football, tennis, horse racing and live sports markets on 1xPlay. Enjoy fast access, mobile-friendly gaming and real-time entertainment.",
    path: "/games",
    keywords: [
      "1xPlay games hub",
      "casino games online",
      "cricket betting markets",
      "live sports betting",
      "football tennis horse racing",
      "mobile gaming",
    ],
    changeFrequency: "weekly",
    priority: 0.86,
  },
  "/highlights": {
    title: "Cricket Match Highlights & Live Streams",
    description:
      "Watch the latest cricket match highlights, live streams, and top moments on 1xPlay. Stream IPL, international, and T20 action powered by YouTube.",
    path: "/highlights",
    image: "/highlights-hero.jpg",
    keywords: ["cricket highlights", "live cricket stream", "IPL highlights", "cricket videos", "1xPlay highlights"],
    changeFrequency: "daily",
    priority: 0.9,
  },
  "/horse-racing": {
    title: "Horse Racing Betting India | Live Horse Racing Odds | 1xPlay",
    description:
      "Experience live horse racing betting with real-time odds, international race events, fast betting markets, and mobile-friendly access. Enjoy secure horse racing betting at 1xPlay.",
    path: "/horse-racing",
    image: "/horse-racing-hero.png",
    keywords: [
      "horse racing betting India",
      "live horse racing odds",
      "horse racing betting markets",
      "online horse racing",
      "1xPlay horse racing",
    ],
    changeFrequency: "weekly",
    priority: 0.82,
  },
  "/partner": {
    title: "1xPlay Partner Program",
    description:
      "Become a 1xPlay partner and grow revenue with a transparent program for gaming, casino, and sports betting traffic.",
    path: "/partner",
    keywords: ["1xPlay partner", "partner program", "gaming partnership", "sports betting partner"],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description:
      "Read the 1xPlay Privacy Policy to understand how user information, cookies, account data, and platform security are handled.",
    path: "/privacy-policy",
    keywords: ["1xPlay privacy policy", "user privacy", "data protection", "cookie policy"],
    changeFrequency: "yearly",
    priority: 0.45,
  },
  "/responsible-gambling": {
    title: "Responsible Gambling",
    description:
      "Review 1xPlay responsible gambling guidance, player protection practices, betting limits, account control, and safer gaming advice.",
    path: "/responsible-gambling",
    keywords: ["responsible gambling", "safe betting", "player protection", "gaming limits"],
    changeFrequency: "monthly",
    priority: 0.58,
  },
  "/rules": {
    title: "Sports Betting Rules",
    description:
      "Read 1xPlay rules for sports betting, market settlement, cricket betting, tennis, football, account use, and fair gaming standards.",
    path: "/rules",
    image: "/rules-hero.png",
    keywords: ["1xPlay rules", "sports betting rules", "bet settlement", "gaming rules"],
    changeFrequency: "monthly",
    priority: 0.62,
  },
  "/soccer": {
    title: "Soccer Betting Online India | Live Football Odds | 1xPlay",
    description:
      "Enjoy live soccer betting with real-time odds, football betting markets, Premier League, Champions League, FIFA World Cup coverage, and mobile-friendly access at 1xPlay.",
    path: "/soccer",
    image: "/footbal.png",
    keywords: [
      "soccer betting India",
      "live football odds",
      "football betting markets",
      "Premier League betting",
      "Champions League betting",
      "1xPlay soccer",
    ],
    changeFrequency: "weekly",
    priority: 0.84,
  },
  "/tennis": {
    title: "Tennis Betting Online India | Live Tennis Odds | 1xPlay",
    description:
      "Experience Tennis Betting Online with live tennis odds, ATP & WTA events, Grand Slam tournaments, and real-time betting markets on the secure 1xPlay platform.",
    path: "/tennis",
    image: "/tennis-hero.jpg",
    keywords: [
      "tennis betting online India",
      "live tennis odds",
      "ATP WTA betting",
      "Grand Slam betting",
      "live tennis betting",
      "1xPlay tennis",
    ],
    changeFrequency: "weekly",
    priority: 0.84,
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions",
    description:
      "Read the 1xPlay Terms and Conditions covering account use, payments, bonuses, responsible gaming, privacy, and platform rules.",
    path: "/terms-and-conditions",
    keywords: ["1xPlay terms", "terms and conditions", "platform rules", "gaming terms"],
    changeFrequency: "yearly",
    priority: 0.5,
  },
  "/withdrawal": {
    title: "Withdraw Winnings",
    description:
      "Withdraw winnings from 1xPlay with a simple secure payout flow for UPI and bank transfer requests.",
    path: "/withdrawal",
    keywords: ["1xPlay withdrawal", "withdraw winnings", "secure payout", "online gaming withdrawal"],
    changeFrequency: "monthly",
    priority: 0.5,
  },
} satisfies Record<string, PageSeo>;

export type SeoPath = keyof typeof seoPages;

export const homeFaqs = [
  {
    question: "What is 1xPlay?",
    answer:
      "1xPlay is an online gaming and entertainment platform that offers casino games, cricket ID services, sports entertainment, and a smooth gaming experience across desktop and mobile devices.",
  },
  {
    question: "How can I get a Cricket ID on 1xPlay?",
    answer:
      "Getting a Cricket ID on 1xPlay is quick and simple. Register an account, complete the required details, and gain access to live cricket betting markets, IPL betting, and international cricket events.",
  },
  {
    question: "Can I bet on IPL matches on 1xPlay?",
    answer:
      "Yes, 1xPlay offers IPL betting with live odds, ball-by-ball betting markets, match winner bets, and real-time score updates.",
  },
  {
    question: "What casino games are available on 1xPlay?",
    answer:
      "Players can enjoy a wide range of casino games including Teen Patti, Aviator, Roulette, Blackjack, Andar Bahar, Slots, Dragon Tiger, Baccarat, and live dealer games.",
  },
  {
    question: "How can I download the 1xPlay App?",
    answer:
      "Users can download the 1xPlay App on supported Android and iOS devices to access casino games, sports betting, and cricket betting on the go.",
  },
  {
    question: "Is 1xPlay Safe and Secure?",
    answer:
      "Yes, 1xPlay uses advanced security systems to help protect user accounts, personal information, and transactions. The platform is designed to provide a secure, reliable, and smooth gaming experience for all players.",
  },
  {
    question: "What payment methods are available on 1xPlay?",
    answer:
      "1xPlay supports multiple payment methods, including UPI, bank transfers, and other secure payment options for deposits and withdrawals.",
  },
  {
    question: "How long do withdrawals take on 1xPlay?",
    answer:
      "Withdrawal processing times may vary depending on the payment method used, account status, and verification requirements.",
  },
  {
    question: "What sports are available for betting on 1xPlay?",
    answer:
      "Users can explore betting markets for cricket, football, tennis, basketball, esports, horse racing, and other international sporting events.",
  },
  {
    question: "Is online cricket betting available 24/7?",
    answer:
      "Yes, users can access cricket betting markets throughout the day, including IPL, T20, ODI, Test matches, and international tournaments.",
  },
] as const;

export const appsFaqs = [
  {
    question: "What is the 1xPlay App?",
    answer:
      "The 1xPlay App is a mobile gaming platform that provides access to online cricket ID services, IPL betting, sports betting, and casino games through Android and iOS devices.",
  },
  {
    question: "How can I download the 1xPlay App?",
    answer:
      "You can download the 1xPlay App by clicking the Download APK button for Android devices or by adding the app to your home screen on iPhone using Safari.",
  },
  {
    question: "Is the 1xPlay App available for Android and iOS?",
    answer:
      "Yes, the 1xPlay App is optimized for both Android smartphones and iPhones, offering a smooth gaming experience across devices.",
  },
  {
    question: "Can I get an Online Cricket ID through the 1xPlay App?",
    answer:
      "Yes, users can access and manage their Online Cricket ID directly through the 1xPlay App for live cricket betting and sports markets.",
  },
  {
    question: "What games are available on the 1xPlay App?",
    answer:
      "The app offers casino games, live casino tables, Teen Patti, Andar Bahar, Poker, Blackjack, Aviator, Slots, and multiple sports betting options.",
  },
  {
    question: "Is the 1xPlay App safe to use?",
    answer:
      "Yes, the platform uses secure systems, encrypted transactions, and account protection features to help provide a secure gaming experience.",
  },
  {
    question: "Can I place live cricket bets using the 1xPlay App?",
    answer:
      "Yes, the app allows users to access live cricket betting markets, IPL betting, and real-time sports odds directly from their mobile devices.",
  },
  {
    question: "Does the 1xPlay App support instant deposits and withdrawals?",
    answer:
      "Yes, users can access fast deposit and withdrawal options through supported payment methods available on the platform.",
  },
  {
    question: "Do I need a desktop computer to use 1xPlay?",
    answer:
      "No, the 1xPlay App is fully mobile-optimized, allowing users to enjoy casino games, sports betting, and cricket ID services directly from their smartphones.",
  },
  {
    question: "Why should I choose the 1xPlay App?",
    answer:
      "The 1xPlay App offers fast performance, Online Cricket ID access, live sports betting, casino games, mobile-friendly navigation, secure transactions, and 24/7 platform accessibility in one place.",
  },
] as const;

export const aboutFaqs = [
  {
    question: "What is 1xPlay?",
    answer:
      "1xPlay is an online gaming and entertainment platform that offers casino games, cricket ID services, sports entertainment, and a smooth gaming experience across desktop and mobile devices.",
  },
  {
    question: "What casino games are available on 1xPlay?",
    answer:
      "1xPlay offers a variety of casino games including Poker, Blackjack, Roulette, Baccarat, Teen Patti, Andar Bahar, Aviator, Dragon Tiger, and Slots.",
  },
  {
    question: "What makes 1xPlay different from other gaming platforms?",
    answer:
      "1xPlay focuses on fast performance, secure systems, mobile-friendly access, user-friendly navigation, and reliable customer support to provide a better gaming experience.",
  },
  {
    question: "Is 1xPlay available on mobile devices?",
    answer:
      "Yes, 1xPlay is fully optimized for smartphones, tablets, and desktops, allowing users to enjoy gaming and entertainment from anywhere.",
  },
  {
    question: "Is 1xPlay a safe and secure platform?",
    answer:
      "Yes, 1xPlay uses advanced security measures to help protect user accounts, personal information, and transactions while providing a secure gaming environment.",
  },
  {
    question: "Does 1xPlay provide customer support?",
    answer:
      "Yes, the 1xPlay support team is available to assist users with account-related questions, technical guidance, and general platform support.",
  },
  {
    question: "Can I access 1xPlay from anywhere?",
    answer:
      "1xPlay is designed for a global audience and supports users across multiple regions with a fast and responsive platform experience.",
  },
  {
    question: "What services does 1xPlay provide?",
    answer:
      "1xPlay provides access to Online Cricket ID, casino games, live sports entertainment, IPL betting, mobile gaming features, and customer support services.",
  },
  {
    question: "Is 1xPlay suitable for new users?",
    answer:
      "Yes, 1xPlay is designed with a user-friendly interface that makes it easy for both beginners and experienced users to explore the platform.",
  },
  {
    question: "How does 1xPlay focus on user experience?",
    answer:
      "1xPlay focuses on fast loading speeds, simple navigation, mobile optimization, and smooth platform performance to ensure a better user experience.",
  },
] as const;

export const gamesFaqs = [
  {
    question: "What games are available on 1xPlay?",
    answer:
      "1xPlay offers casino games, cricket betting, soccer, tennis, horse racing, badminton, and other live sports entertainment options.",
  },
  {
    question: "Can I play casino games online on 1xPlay?",
    answer:
      "Yes, users can explore a variety of casino games online, including popular table games, live dealer games, and modern gaming experiences.",
  },
  {
    question: "Does 1xPlay provide cricket betting markets?",
    answer:
      "Yes, 1xPlay provides access to cricket betting markets, including major tournaments, international matches, and live cricket action.",
  },
  {
    question: "Are live sports available on 1xPlay?",
    answer:
      "Yes, users can access live sports markets for cricket, football, tennis, horse racing, badminton, and other sporting events.",
  },
  {
    question: "Is the Games Hub mobile-friendly?",
    answer:
      "Yes, the 1xPlay Games Hub is optimized for smartphones, tablets, and desktop devices for a smooth gaming experience.",
  },
  {
    question: "Why choose 1xPlay Games Hub?",
    answer:
      "1xPlay offers a wide range of casino games, sports markets, mobile optimization, fast performance, and user-friendly navigation.",
  },
  {
    question: "Does 1xPlay support multiple gaming categories?",
    answer:
      "Yes, the platform provides access to multiple gaming and sports categories from a single interface.",
  },
  {
    question: "Can I explore football and tennis markets on 1xPlay?",
    answer:
      "Yes, users can access football and tennis entertainment categories along with other sports options.",
  },
  {
    question: "Does 1xPlay offer horse racing and badminton sections?",
    answer:
      "Yes, the Games Hub includes horse racing and badminton categories for users interested in diverse sports entertainment.",
  },
  {
    question: "Can I use the Games Hub on Android and iPhone?",
    answer:
      "Yes, the platform is compatible with Android and iOS devices.",
  },
] as const;

export const cricketFaqs = [
  {
    question: "What is an Online Cricket ID?",
    answer:
      "An Online Cricket ID provides access to cricket betting markets, live match updates, and cricket-related entertainment features on the platform.",
  },
  {
    question: "How can I get an Online Cricket ID?",
    answer:
      "Users can request an Online Cricket ID through the registration process and gain access to cricket markets quickly and securely.",
  },
  {
    question: "What is live cricket betting?",
    answer:
      "Live cricket betting allows users to follow a match in real time and access dynamic betting markets as the game progresses.",
  },
  {
    question: "Can I use my Cricket ID for IPL betting?",
    answer:
      "Yes, users can access IPL-related cricket markets and follow live IPL action using their Cricket ID.",
  },
  {
    question: "What cricket tournaments are available on 1xPlay?",
    answer:
      "Users can explore markets related to IPL, ICC Cricket World Cup, ICC T20 World Cup, Asia Cup, Champions Trophy, Test Series, and domestic cricket leagues.",
  },
  {
    question: "Is Online Cricket ID access available on mobile devices?",
    answer:
      "Yes, users can access their Cricket ID through mobile-friendly platforms on Android and iOS devices.",
  },
  {
    question: "What betting markets are available for cricket matches?",
    answer:
      "Popular markets include Match Winner, Toss Winner, Session Betting, Top Batsman, Top Bowler, Most Sixes, Most Fours, and Live Betting Markets.",
  },
  {
    question: "Can beginners use the 1xPlay Cricket Exchange platform?",
    answer:
      "Yes, the platform is designed with a simple interface that helps both new and experienced users explore cricket markets easily.",
  },
  {
    question: "What is a Cricket Exchange ID?",
    answer:
      "A Cricket Exchange ID helps users access multiple cricket markets, live odds, and match-related betting opportunities through a single account.",
  },
  {
    question: "Does 1xPlay provide live cricket odds?",
    answer:
      "Yes, live cricket odds are updated in real time to reflect match conditions and market activity.",
  },
] as const;

export const casinoFaqs = [
  {
    question: "What casino games are available on 1xPlay?",
    answer:
      "1xPlay offers Aviator, Blackjack, Roulette, Baccarat, Teen Patti, Dragon Tiger, Slots, and Live Casino games.",
  },
  {
    question: "Can I play casino games online on mobile devices?",
    answer:
      "Yes, the platform is fully optimized for Android, iPhone, tablets, and desktop devices for smooth casino gaming.",
  },
  {
    question: "What is the Aviator Game?",
    answer:
      "Aviator is a popular crash-style game where players watch a virtual aircraft rise and decide when to cash out before it flies away.",
  },
  {
    question: "Does 1xPlay provide live casino games?",
    answer:
      "Yes, players can enjoy live casino experiences with real-time dealer rooms and interactive gaming environments.",
  },
  {
    question: "Is 1xPlay suitable for beginners?",
    answer:
      "Yes, the platform offers a simple interface that makes it easy for both new and experienced players to explore casino games.",
  },
  {
    question: "Can I access casino games anytime?",
    answer:
      "Yes, users can access casino entertainment 24/7 through the platform from supported devices.",
  },
  {
    question: "What is a Live Casino?",
    answer:
      "A Live Casino allows players to participate in real-time gaming sessions featuring live dealers and interactive game tables.",
  },
  {
    question: "Can I play Teen Patti Online on 1xPlay?",
    answer:
      "Yes, players can explore Teen Patti and other popular card-based casino entertainment options.",
  },
  {
    question: "What is the difference between Live Casino and regular casino games?",
    answer:
      "Live Casino games feature real dealers and real-time interaction, while regular casino games are software-based experiences.",
  },
  {
    question: "Does 1xPlay offer Aviator Game Online?",
    answer:
      "Yes, Aviator is one of the featured casino games available on the platform.",
  },
] as const;

export const badmintonFaqs = [
  {
    question: "What is badminton betting?",
    answer:
      "Badminton betting allows users to explore betting markets related to badminton matches, tournaments, and live match action.",
  },
  {
    question: "Can I enjoy live badminton betting on 1xPlay?",
    answer:
      "Yes, 1xPlay provides live badminton betting markets with real-time updates and dynamic match information.",
  },
  {
    question: "What badminton betting markets are available?",
    answer:
      "Users can explore Match Winner, Set Betting, Total Points, Handicap Betting, Live Betting Markets, and Tournament Betting options.",
  },
  {
    question: "Is badminton betting available on mobile devices?",
    answer:
      "Yes, 1xPlay is optimized for smartphones and tablets, allowing users to access badminton betting markets from mobile devices.",
  },
  {
    question: "Which badminton tournaments can I follow on 1xPlay?",
    answer:
      "Users can follow major events such as the BWF World Championships, Thomas Cup, Uber Cup, Sudirman Cup, All England Open, and Olympic badminton competitions.",
  },
  {
    question: "Can beginners use the badminton betting platform?",
    answer:
      "Yes, the platform is designed with simple navigation and easy access to sports markets for both new and experienced users.",
  },
  {
    question: "Does 1xPlay provide real-time badminton odds?",
    answer:
      "Yes, users can access real-time odds updates and live sports market information during ongoing badminton matches.",
  },
  {
    question: "What makes badminton betting exciting?",
    answer:
      "Fast-paced gameplay, quick momentum shifts, and competitive international matches make badminton one of the most engaging sports to follow.",
  },
  {
    question: "What are the most popular badminton betting markets?",
    answer:
      "Popular markets include Match Winner, Set Betting, Total Points, Handicap Betting, Tournament Winner, and Live Betting Markets.",
  },
  {
    question: "Why choose 1xPlay for badminton betting?",
    answer:
      "1xPlay offers live betting markets, international tournament coverage, mobile-friendly access, secure systems, and a smooth user experience.",
  },
] as const;

export const soccerFaqs = [
  {
    question: "What is Soccer Betting?",
    answer:
      "Soccer betting allows users to predict different outcomes of football matches, including match winners, total goals, correct scores, and live match events through online betting markets.",
  },
  {
    question: "Can I enjoy Live Soccer Betting at 1xPlay?",
    answer:
      "Yes, 1xPlay offers live soccer betting with real-time football odds, live score updates, and dynamic betting markets during ongoing matches.",
  },
  {
    question: "Which football leagues are available for betting?",
    answer:
      "Users can explore betting markets for major competitions including the Premier League, UEFA Champions League, La Liga, Serie A, Bundesliga, FIFA World Cup, UEFA Euro, and Copa America.",
  },
  {
    question: "What football betting markets are available on 1xPlay?",
    answer:
      "1xPlay provides Match Winner, Both Teams to Score, Total Goals, Correct Score, Handicap Betting, First Goal Scorer, Corner Betting, and Live Football Betting Markets.",
  },
  {
    question: "Is Soccer Betting available on mobile devices?",
    answer:
      "Yes. 1xPlay is fully optimized for Android smartphones, iPhones, tablets, and desktop devices, allowing users to enjoy football betting anytime.",
  },
  {
    question: "Does 1xPlay provide Live Football Odds?",
    answer:
      "Yes, users can access live football odds that are updated continuously throughout the match to reflect the latest game situations.",
  },
  {
    question: "Can beginners use the Soccer Betting platform?",
    answer:
      "Yes. The platform features a simple interface and easy navigation, making it suitable for both beginners and experienced football betting enthusiasts.",
  },
  {
    question: "Why choose 1xPlay for Soccer Betting?",
    answer:
      "1xPlay offers live football odds, international league coverage, secure betting systems, mobile-friendly access, fast performance, and an easy-to-use betting interface.",
  },
  {
    question: "Is Soccer Betting available throughout the year?",
    answer:
      "Yes. Football fans can enjoy betting on domestic leagues, international tournaments, club competitions, and major championships throughout the year.",
  },
  {
    question: "How does Live Football Odds work in Soccer Betting?",
    answer:
      "Live Football Odds change throughout the match based on goals, possession, player performance, and other match events. At 1xPlay, users can access real-time odds updates and explore live soccer betting markets while the game is in progress.",
  },
] as const;

export const horseRacingFaqs = [
  {
    question: "What is horse racing betting?",
    answer:
      "Horse racing betting allows users to explore betting markets on horse races, race winners, place betting, and other race outcomes.",
  },
  {
    question: "Can I enjoy live horse racing betting on 1xPlay?",
    answer:
      "Yes, 1xPlay provides live horse racing betting with real-time race updates and continuously changing odds.",
  },
  {
    question: "What horse racing betting markets are available?",
    answer:
      "Users can explore Race Winner, Place Betting, Each Way Betting, Forecast Betting, Tricast Betting, and Live Horse Racing Markets.",
  },
  {
    question: "Is horse racing betting available on mobile devices?",
    answer:
      "Yes, 1xPlay is optimized for Android smartphones, iPhones, tablets, and desktop devices for a seamless betting experience.",
  },
  {
    question: "Can beginners use the horse racing betting platform?",
    answer:
      "Yes, the platform offers a simple interface and user-friendly navigation suitable for both beginners and experienced users.",
  },
  {
    question: "Does 1xPlay provide live horse racing odds?",
    answer:
      "Yes, users can access real-time horse racing odds and live market updates during racing events.",
  },
  {
    question: "What international horse racing events are available?",
    answer:
      "Users can explore betting markets for international horse racing championships, premium racing tournaments, and seasonal race meetings.",
  },
  {
    question: "Why choose 1xPlay for horse racing betting?",
    answer:
      "1xPlay offers live race coverage, real-time odds, fast betting markets, mobile-friendly access, secure transactions, and a smooth betting experience.",
  },
  {
    question: "Can I access horse racing betting anytime?",
    answer:
      "Yes, users can access upcoming races, live events, and betting markets anytime through the 1xPlay platform.",
  },
  {
    question: "Why is horse racing betting popular?",
    answer:
      "Horse racing betting is popular because of fast-paced races, exciting finishes, multiple betting options, and international race events throughout the year.",
  },
] as const;

export const tennisFaqs = [
  {
    question: "What is Tennis Betting Online?",
    answer:
      "Tennis Betting Online allows users to explore betting markets on professional tennis matches, including ATP, WTA, Grand Slam tournaments, and live tennis events.",
  },
  {
    question: "Can I enjoy Live Tennis Betting on 1xPlay?",
    answer:
      "Yes, 1xPlay offers live tennis betting with real-time odds, live match coverage, and dynamic betting markets throughout the match.",
  },
  {
    question: "Which tennis tournaments can I follow on 1xPlay?",
    answer:
      "Users can explore betting markets for Wimbledon, Australian Open, French Open, US Open, ATP Masters 1000, ATP Tour, WTA Tour, Davis Cup, and Olympic Tennis events.",
  },
  {
    question: "What tennis betting markets are available?",
    answer:
      "1xPlay offers Match Winner, Set Winner, First Set Winner, Total Games, Handicap Betting, Correct Score, Tournament Winner, and Live Tennis Betting markets.",
  },
  {
    question: "Is Tennis Betting Online available on mobile devices?",
    answer:
      "Yes, the platform is fully optimized for Android, iPhone, tablets, and desktop devices, allowing users to enjoy tennis betting from anywhere.",
  },
  {
    question: "Does 1xPlay provide Live Tennis Odds?",
    answer:
      "Yes, 1xPlay provides real-time tennis odds that update continuously based on live match action.",
  },
  {
    question: "Can beginners use the Tennis Betting platform?",
    answer:
      "Yes, the platform is designed with a simple interface and easy navigation, making it suitable for both beginners and experienced users.",
  },
  {
    question: "Can I place bets during a live tennis match?",
    answer:
      "Yes, users can place bets while a match is in progress using live betting markets with continuously updated odds.",
  },
  {
    question: "What makes Tennis Betting exciting?",
    answer:
      "Tennis betting is exciting because every point, game, and set can change the momentum of the match, creating multiple betting opportunities.",
  },
  {
    question: "What are Live Tennis Odds?",
    answer:
      "Live Tennis Odds change throughout the match based on points, games, sets, and player performance, providing real-time betting opportunities.",
  },
] as const;

export const contactUsFaqs = [
  {
    question: "How can I contact 1xPlay Customer Support?",
    answer:
      "You can contact the 1xPlay Customer Support team through live chat, email, or the online contact form available on the website.",
  },
  {
    question: "Is 1xPlay Customer Support available 24/7?",
    answer:
      "Yes, the support team is available 24 hours a day, 7 days a week to assist users with platform-related queries.",
  },
  {
    question: "Can I get help with my Cricket ID?",
    answer:
      "Yes, the support team can assist with Cricket ID registration, account access, and general Cricket ID-related questions.",
  },
  {
    question: "Does 1xPlay provide Live Chat support?",
    answer:
      "Yes, users can connect with the support team through live chat for quick assistance with their questions.",
  },
  {
    question: "Can I get help with deposits and withdrawals?",
    answer:
      "Yes, customer support can provide guidance regarding deposits, withdrawals, and supported payment methods.",
  },
  {
    question: "Does 1xPlay offer technical support?",
    answer:
      "Yes, the technical support team can help with login issues, website performance, app-related questions, and other technical concerns.",
  },
  {
    question: "Can I contact support for casino games and sports betting?",
    answer:
      "Yes, users can contact the support team for assistance related to casino games, sports betting, promotions, and platform features.",
  },
  {
    question: "How quickly does 1xPlay respond to support requests?",
    answer:
      "Response times may vary depending on the support channel, but the team aims to respond as quickly as possible.",
  },
  {
    question: "Is my information secure when contacting support?",
    answer:
      "Yes, 1xPlay uses secure communication channels to help protect user information during support interactions.",
  },
  {
    question: "Can I contact 1xPlay through email?",
    answer:
      "Yes, users can reach the support team through the official email addresses listed on the Contact or Support page.",
  },
] as const;

export const pageFaqs: Partial<
  Record<SeoPath, readonly { question: string; answer: string }[]>
> = {
  "/": homeFaqs,
  "/about": aboutFaqs,
  "/apps": appsFaqs,
  "/games": gamesFaqs,
  "/cricket": cricketFaqs,
  "/casino": casinoFaqs,
  "/badminton": badmintonFaqs,
  "/soccer": soccerFaqs,
  "/horse-racing": horseRacingFaqs,
  "/tennis": tennisFaqs,
  "/contact-us": contactUsFaqs,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: seoPages["/"].title,
    template: `%s | ${siteName}`,
  },
  description: seoPages["/"].description,
  applicationName: siteName,
  generator: "Next.js",
  creator: siteName,
  publisher: siteName,
  authors: [{ name: siteName }],
  category: "Gaming",
  keywords: seoPages["/"].keywords,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "vED9bQyoEX5eqa7pOmQiXGRyd20Dqv0WvY3_BGyHews",
  },
  alternates: {
    canonical: seoPages["/"].path,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: seoPages["/"].title,
    description: seoPages["/"].description,
    url: seoPages["/"].path,
    images: [
      {
        url: seoPages["/"].image || defaultImage,
        width: 1200,
        height: 630,
        alt: `${siteName} online casino and cricket betting`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoPages["/"].title,
    description: seoPages["/"].description,
    images: [seoPages["/"].image || defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/1xplay.webp",
    shortcut: "/1xplay.webp",
    apple: "/1xplay.webp",
  },
  formatDetection: {
    telephone: false,
  },
};

export function createPageMetadata(path: SeoPath): Metadata {
  const page: PageSeo = seoPages[path];
  const image = page.image || defaultImage;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName,
      title: page.title,
      description: page.description,
      url: page.path,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${page.title} at ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/1xplay.webp",
      shortcut: "/1xplay.webp",
      apple: "/1xplay.webp",
    },
  };
}

/* ─────────── JSON-LD structured data ───────────
   Emitted as <script type="application/ld+json"> for rich results.
   Organization + WebSite are site-wide; WebPage + BreadcrumbList are per-route. */

const ORG_ID = `${getSiteUrl()}/#organization`;
const SITE_ID = `${getSiteUrl()}/#website`;

export function organizationSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteName,
    url: `${url}/`,
    logo: { "@type": "ImageObject", url: `${url}${defaultImage}` },
    description: seoPages["/"].description,
  };
}

export function websiteSchema() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteName,
    url: `${url}/`,
    description: seoPages["/"].description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path === "/" ? "/" : path}`;
}

export function webPageSchema(path: SeoPath) {
  const page = seoPages[path];
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: `${getSiteUrl()}${"image" in page && page.image ? page.image : defaultImage}` },
  };
}

export function breadcrumbSchema(path: SeoPath) {
  const page = seoPages[path];
  const itemListElement: Array<Record<string, unknown>> = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
  ];
  if (path !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: page.title,
      item: absoluteUrl(page.path),
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function faqPageSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
