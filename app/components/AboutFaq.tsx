import FaqSection from "./FaqSection";
import { aboutFaqs } from "../seo";

export default function AboutFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={aboutFaqs}
      className="bg-bg2"
    />
  );
}
