import FaqSection from "./FaqSection";
import { tennisFaqs } from "../seo";

export default function TennisFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={tennisFaqs}
      className="bg-bg2"
    />
  );
}
