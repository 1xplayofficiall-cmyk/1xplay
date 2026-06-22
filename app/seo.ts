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
    title: "Best Online Casino & Cricket Betting in India",
    description:
      "Play online casino games, cricket betting, live sports, and mobile gaming at 1xPlay with secure transactions, quick access, and a smooth Indian player experience.",
    path: "/",
    image: "/home.jpeg",
    keywords: ["1xPlay", "online casino India", "cricket betting India", "live sports betting", "online gaming"],
    changeFrequency: "weekly",
    priority: 1,
  },
  "/about": {
    title: "About 1xPlay",
    description:
      "Learn about 1xPlay, a secure online gaming and sports entertainment platform built for smooth casino, betting, mobile, and live gaming experiences.",
    path: "/about",
    keywords: ["about 1xPlay", "online gaming platform", "secure gaming", "sports entertainment"],
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
    title: "1xPlay App Download",
    description:
      "Explore the 1xPlay mobile app experience for fast casino games, live sports betting, account access, deposits, withdrawals, and smooth mobile entertainment.",
    path: "/apps",
    image: "/iphone.jpg",
    keywords: ["1xPlay app", "mobile betting app", "casino app", "sports betting app"],
    changeFrequency: "monthly",
    priority: 0.75,
  },
  "/badminton": {
    title: "Online Badminton Betting",
    description:
      "Enjoy online badminton betting at 1xPlay with live match odds, secure betting markets, mobile access, and major tournament coverage.",
    path: "/badminton",
    image: "/badminton-hero.png",
    keywords: ["badminton betting", "live badminton betting", "online sports betting", "1xPlay badminton"],
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
    title: "Online Casino Games",
    description:
      "Play online casino games at 1xPlay, including slots, live casino, table games, and secure mobile-friendly casino entertainment.",
    path: "/casino",
    image: "/casino-slots.jpg",
    keywords: ["online casino", "casino games", "live casino", "1xPlay casino"],
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
    title: "1xPlay Customer Support",
    description:
      "Reach 1xPlay customer support for fast help with accounts, deposits, withdrawals, betting, casino games, and mobile platform access.",
    path: "/contact-us",
    keywords: ["1xPlay customer support", "contact support", "casino support", "sports betting support"],
    changeFrequency: "monthly",
    priority: 0.55,
  },
  "/cricket": {
    title: "Online Cricket Betting ID",
    description:
      "Experience online cricket betting at 1xPlay with live odds, IPL betting, cricket ID access, secure markets, and smooth mobile betting.",
    path: "/cricket",
    image: "/cricket-hero.png",
    keywords: ["cricket betting", "online cricket ID", "live cricket betting", "IPL betting", "1xPlay cricket"],
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
    title: "1xPlay Games Hub",
    description:
      "Discover the 1xPlay games hub with casino games, live entertainment, sports betting options, mobile play, and exciting online gaming categories.",
    path: "/games",
    keywords: ["1xPlay games", "online games", "casino games", "sports games"],
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
    title: "Online Horse Racing Betting",
    description:
      "Bet on horse racing at 1xPlay with live race odds, racing markets, secure account access, and a smooth mobile betting experience.",
    path: "/horse-racing",
    image: "/horse-racing-hero.png",
    keywords: ["horse racing betting", "live horse racing", "online racing betting", "1xPlay horse racing"],
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
    title: "Online Soccer Betting",
    description:
      "Enjoy online soccer betting at 1xPlay with live football odds, global league coverage, secure markets, and mobile-friendly betting.",
    path: "/soccer",
    image: "/footbal.png",
    keywords: ["soccer betting", "football betting", "live football betting", "1xPlay soccer"],
    changeFrequency: "weekly",
    priority: 0.84,
  },
  "/tennis": {
    title: "Online Tennis Betting at 1xPlay",
    description:
      "Experience online tennis betting at 1xPlay with live odds, Grand Slam coverage, ATP and WTA markets, mobile betting, and secure transactions.",
    path: "/tennis",
    image: "/tennis-hero.jpg",
    keywords: ["tennis betting", "live tennis betting", "Grand Slam betting", "ATP betting", "WTA betting", "1xPlay tennis"],
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
    title: page.title,
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
