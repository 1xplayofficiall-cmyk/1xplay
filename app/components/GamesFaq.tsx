import FaqSection from "./FaqSection";
import { gamesFaqs } from "../seo";

export default function GamesFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={gamesFaqs}
      className="bg-bg"
    />
  );
}
