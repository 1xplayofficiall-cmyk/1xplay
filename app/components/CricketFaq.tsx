import FaqSection from "./FaqSection";
import { cricketFaqs } from "../seo";

export default function CricketFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={cricketFaqs}
      className="bg-bg2"
    />
  );
}
