import FaqSection from "./FaqSection";
import { homeFaqs } from "../seo";

export default function HomepageFaq() {
  return (
    <FaqSection
      heading="Homepage FAQs"
      faqs={homeFaqs}
      className="bg-bg2"
    />
  );
}
