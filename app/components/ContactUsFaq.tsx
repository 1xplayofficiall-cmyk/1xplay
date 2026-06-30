import FaqSection from "./FaqSection";
import { contactUsFaqs } from "../seo";

export default function ContactUsFaq() {
  return (
    <FaqSection
      heading="FAQs"
      faqs={contactUsFaqs}
      className="bg-bg2"
    />
  );
}
