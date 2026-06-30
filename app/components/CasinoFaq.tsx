import FaqSection from "./FaqSection";
import { casinoFaqs } from "../seo";

export default function CasinoFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={casinoFaqs}
      className="bg-bg2"
    />
  );
}
