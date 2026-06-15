"use client";

import clsx from "clsx";
import { Check, X } from "lucide-react";

const comparisonRows = [
  {
    feature: "Registration Options",
    oneXPlay: "Self Registration & WhatsApp ID Creation",
    other: "Limited Registration Options",
  },
  {
    feature: "Welcome Bonus",
    oneXPlay: "8% First Deposit Bonus",
    other: "Lower or No Welcome Bonus",
  },
  {
    feature: "Deposit Bonus",
    oneXPlay: "3% Bonus on Every Deposit",
    other: "Limited or No Regular Bonus",
  },
  {
    feature: "Weekly Lossback",
    oneXPlay: "2% Lossback Every Week",
    other: "Usually Not Available",
  },
  {
    feature: "Minimum Deposit",
    oneXPlay: "₹200 Only",
    other: "₹500 - ₹1000+",
  },
  {
    feature: "Minimum Withdrawal",
    oneXPlay: "₹200 Only",
    other: "Higher Withdrawal Limits",
  },
  {
    feature: "Withdrawal Speed",
    oneXPlay: "5-15 Minutes",
    other: "Can Take Hours or Days",
  },
  {
    feature: "Payment Methods",
    oneXPlay: "UPI, Bank Transfer & Wallet",
    other: "Limited Payment Options",
  },
  {
    feature: "Call Support",
    oneXPlay: "Direct Call Support Available",
    other: "Mostly Chat/Email Support",
  },
  {
    feature: "WhatsApp Support",
    oneXPlay: "Instant Assistance",
    other: "Slow Response Time",
  },
  {
    feature: "Registration Process",
    oneXPlay: "Quick & Simple",
    other: "Lengthy Verification Process",
  },
  {
    feature: "Referral Program",
    oneXPlay: "Earn from Referrals",
    other: "Limited Benefits",
  },
  {
    feature: "Mobile Friendly",
    oneXPlay: "Fully Optimized for Mobile",
    other: "Average Experience",
  },
  {
    feature: "Security",
    oneXPlay: "Safe & Secure Transactions",
    other: "Varies by Platform",
  },
  {
    feature: "Customer Support",
    oneXPlay: "Dedicated Support Team",
    other: "Limited Availability",
  },
  {
    feature: "User Experience",
    oneXPlay: "Easy & Beginner Friendly",
    other: "Complex Navigation",
  },
];

export default function WhyBetter() {
  return (
    <section className={clsx("py-[50px]", "px-[5%]", "bg-bg2", "relative", "overflow-hidden")}>
      <div
        className={clsx(
          "absolute",
          "top-0",
          "right-[-10%]",
          "w-[500px]",
          "h-[500px]",
          "bg-[radial-gradient(circle,rgba(0,120,229,0.06)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />
      <div
        className={clsx(
          "absolute",
          "bottom-[-10%]",
          "left-[-5%]",
          "w-[400px]",
          "h-[400px]",
          "bg-[radial-gradient(circle,rgba(1,163,246,0.05)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("max-w-[1100px]", "mx-auto", "relative", "z-[1]")}>
        <div className={clsx("text-left", "sm:text-center", "mb-12", "reveal")}>
          <div className={clsx("section-tag", "justify-center")}>Why Choose Us</div>
          <h2 className="section-title">
            Why Choose <span className="text-gold">1xPlay</span>?
          </h2>
          <p
            className={clsx(
              "text-[16px]",
              "text-muted",
              "leading-[1.8]",
              "max-w-[720px]",
              "mx-auto",
              "font-light"
            )}
          >
            Many online gaming websites suffer from slow loading, poor mobile optimization, and
            complicated interfaces. See how 1xPlay compares to other platforms.
          </p>
        </div>

        <div
          className={clsx(
            "reveal",
            "rounded-2xl",
            "border",
            "border-white/[0.08]",
            "bg-gradient-to-b",
            "from-white/[0.06]",
            "to-white/[0.02]",
            "shadow-[0_24px_64px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]",
            "overflow-hidden"
          )}
        >
          <div className={clsx("overflow-x-auto", "-mx-[5%]", "px-[5%]", "sm:mx-0", "sm:px-0")}>
            <table className={clsx("w-full", "min-w-[680px]", "border-collapse")}>
              <thead>
                <tr className={clsx("border-b", "border-white/[0.08]", "bg-[#0a0f18]")}>
                  <th
                    className={clsx(
                      "px-4",
                      "sm:px-6",
                      "py-4",
                      "sm:py-5",
                      "text-left",
                      "w-[28%]",
                      "border-r",
                      "border-[rgba(0,120,229,0.25)]",
                      "bg-gradient-to-br",
                      "from-[rgba(0,120,229,0.22)]",
                      "to-[rgba(1,163,246,0.12)]"
                    )}
                  >
                    <span
                      className={clsx(
                        "font-[var(--font-syne)]",
                        "font-bold",
                        "text-[14px]",
                        "sm:text-[16px]",
                        "text-white",
                        "uppercase",
                        "tracking-[0.08em]"
                      )}
                    >
                      Features
                    </span>
                  </th>
                  <th
                    className={clsx(
                      "px-4",
                      "sm:px-6",
                      "py-4",
                      "sm:py-5",
                      "text-left",
                      "w-[36%]",
                      "border-l",
                      "border-white/[0.06]"
                    )}
                  >
                    <div className={clsx("flex", "items-center", "gap-2")}>
                      <span
                        className={clsx(
                          "font-[var(--font-syne)]",
                          "font-bold",
                          "text-[15px]",
                          "sm:text-[16px]",
                          "text-white"
                        )}
                      >
                        1xPlay
                      </span>
                      <span
                        className={clsx(
                          "inline-flex",
                          "items-center",
                          "justify-center",
                          "w-5",
                          "h-5",
                          "rounded-full",
                          "bg-green/20",
                          "text-green"
                        )}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                    </div>
                  </th>
                  <th
                    className={clsx(
                      "px-4",
                      "sm:px-6",
                      "py-4",
                      "sm:py-5",
                      "text-left",
                      "w-[36%]",
                      "border-l",
                      "border-white/[0.06]"
                    )}
                  >
                    <div className={clsx("flex", "items-center", "gap-2")}>
                      <span
                        className={clsx(
                          "font-[var(--font-syne)]",
                          "font-bold",
                          "text-[14px]",
                          "sm:text-[15px]",
                          "text-muted"
                        )}
                      >
                        Other Platforms
                      </span>
                      <span
                        className={clsx(
                          "inline-flex",
                          "items-center",
                          "justify-center",
                          "w-5",
                          "h-5",
                          "rounded-full",
                          "bg-red/15",
                          "text-red"
                        )}
                      >
                        <X className="w-3 h-3" strokeWidth={3} />
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className={clsx(
                      "group",
                      "border-b",
                      "border-white/[0.05]",
                      "last:border-b-0",
                      "transition-colors",
                      "duration-200",
                      "hover:bg-white/[0.02]"
                    )}
                  >
                    <td
                      className={clsx(
                        "px-4",
                        "sm:px-6",
                        "py-3.5",
                        "sm:py-4",
                        "align-top",
                        "border-r",
                        "border-[rgba(0,120,229,0.2)]",
                        "bg-[rgba(0,120,229,0.08)]",
                        "group-hover:bg-[rgba(0,120,229,0.14)]",
                        "transition-colors",
                        "duration-200"
                      )}
                    >
                      <span
                        className={clsx(
                          "text-[13px]",
                          "sm:text-[15px]",
                          "text-gold",
                          "font-bold",
                          "font-[var(--font-syne)]",
                          "leading-snug",
                          "block",
                          "pl-3",
                          "border-l-2",
                          "border-gold"
                        )}
                      >
                        {row.feature}
                      </span>
                    </td>
                    <td
                      className={clsx(
                        "px-4",
                        "sm:px-6",
                        "py-3.5",
                        "sm:py-4",
                        "align-top",
                        "border-l",
                        "border-white/[0.05]",
                        "group-hover:bg-white/[0.02]",
                        "transition-colors",
                        "duration-200"
                      )}
                    >
                      <div className={clsx("flex", "items-start", "gap-2.5")}>
                        <Check
                          className={clsx("w-4", "h-4", "text-green", "shrink-0", "mt-0.5")}
                          strokeWidth={2.5}
                        />
                        <span className={clsx("text-[13px]", "sm:text-[14px]", "text-text", "leading-relaxed")}>
                          {row.oneXPlay}
                        </span>
                      </div>
                    </td>
                    <td
                      className={clsx(
                        "px-4",
                        "sm:px-6",
                        "py-3.5",
                        "sm:py-4",
                        "align-top",
                        "border-l",
                        "border-white/[0.05]"
                      )}
                    >
                      <div className={clsx("flex", "items-start", "gap-2.5")}>
                        <X
                          className={clsx("w-4", "h-4", "text-red/70", "shrink-0", "mt-0.5")}
                          strokeWidth={2.5}
                        />
                        <span className={clsx("text-[13px]", "sm:text-[14px]", "text-muted", "leading-relaxed")}>
                          {row.other}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p
          className={clsx(
            "text-[14px]",
            "text-muted",
            "leading-[1.8]",
            "text-left",
            "sm:text-center",
            "mt-10",
            "max-w-[800px]",
            "mx-auto",
            "font-light",
            "reveal"
          )}
        >
          These features help 1xPlay stand out as one of the growing names among the best online
          casinos in India.
        </p>
      </div>
    </section>
  );
}
