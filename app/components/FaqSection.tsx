"use client";

import clsx from "clsx";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  tag?: string;
  heading: string;
  description?: string;
  faqs: readonly FaqItem[];
  className?: string;
};

export default function FaqSection({
  tag = "FAQ",
  heading,
  description,
  faqs,
  className,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={clsx("py-[50px]", "px-[5%]", "relative", "overflow-hidden", className)}>
      <div
        className={clsx(
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "w-[700px]",
          "h-[700px]",
          "bg-[radial-gradient(circle,rgba(0,120,229,0.05)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("max-w-[900px]", "mx-auto", "relative", "z-10")}>
        <div className={clsx("text-left", "sm:text-center", "mb-10")}>
          <div className={clsx("section-tag", "justify-center")}>{tag}</div>
          <h2 className="section-title">{heading}</h2>
          {description ? (
            <p className={clsx("text-[15px]", "text-muted", "leading-[1.8]", "max-w-[700px]", "mx-auto", "font-light", "mt-4")}>
              {description}
            </p>
          ) : null}
        </div>

        <div className={clsx("space-y-3")}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={clsx(
                  "rounded-2xl",
                  "border",
                  "border-border",
                  "bg-card/70",
                  "overflow-hidden",
                  "transition-colors",
                  isOpen ? "border-[rgba(0,120,229,0.35)]" : "hover:border-white/15"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={clsx(
                    "w-full",
                    "flex",
                    "items-center",
                    "justify-between",
                    "gap-4",
                    "px-5",
                    "py-4",
                    "text-left",
                    "cursor-pointer"
                  )}
                  aria-expanded={isOpen}
                >
                  <span className={clsx("text-[15px]", "font-semibold", "text-white")}>{faq.question}</span>
                  <ChevronDown
                    className={clsx(
                      "shrink-0",
                      "text-muted",
                      "transition-transform",
                      "duration-300",
                      isOpen && "rotate-180"
                    )}
                    size={18}
                  />
                </button>
                <div
                  className={clsx(
                    "grid",
                    "transition-[grid-template-rows]",
                    "duration-300",
                    "ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className={clsx("px-5", "pb-4", "text-[14px]", "text-muted", "leading-[1.8]", "font-light")}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
