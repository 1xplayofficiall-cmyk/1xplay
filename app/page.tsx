import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CasinoGames from "./components/CasinoGames";
import CricketBetting from "./components/CricketBetting";
import Features from "./components/Features";
import OtherSports from "./components/OtherSports";
import MobileApp from "./components/MobileApp";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import JoinCTA from "./components/JoinCTA";
import ScrollReveal from "./components/ScrollReveal";
import WhyBetter from "./components/WhyBetter";
import SafeSecure from "./components/SafeSecure";
import BeyondCricket from "./components/BeyondCricket";
import Support247 from "./components/Support247";
import TrustedByPlayers from "./components/TrustedByPlayers";
import PlayerExperience from "./components/PlayerExperience";
import JoinFuture from "./components/JoinFuture";
import PageJsonLd from "./components/PageJsonLd";

export default function Home() {
  return (
    <>
      <PageJsonLd path="/" />
      <ScrollReveal />
      <Hero />
      <Marquee />
      <About />
      <CasinoGames />
      <CricketBetting />
      <Features />
      <WhyBetter />
      <SafeSecure />
      <OtherSports />
      <BeyondCricket />
      <MobileApp />
      <Support247 />
      <TrustedByPlayers />
      <Testimonials />
      <PlayerExperience />
      <JoinCTA />
      <JoinFuture />
    </>
  );
}

