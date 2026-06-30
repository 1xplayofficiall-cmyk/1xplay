import FaqSection from "./FaqSection";
import { soccerFaqs } from "../seo";

export default function SoccerFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={soccerFaqs}
      className="bg-bg2"
    />
  );
}
