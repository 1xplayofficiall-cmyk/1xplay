import FaqSection from "./FaqSection";
import { horseRacingFaqs } from "../seo";

export default function HorseRacingFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={horseRacingFaqs}
      className="bg-bg2"
    />
  );
}
