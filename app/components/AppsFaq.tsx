import FaqSection from "./FaqSection";
import { appsFaqs } from "../seo";

export default function AppsFaq() {
  return (
    <FaqSection
      heading="FAQ Section – 1xPlay App Download"
      faqs={appsFaqs}
      className="bg-bg"
    />
  );
}
