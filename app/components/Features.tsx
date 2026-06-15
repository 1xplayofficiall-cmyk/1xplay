"use client";

import clsx from "clsx";

const features = [
  { icon: "⚡", title: "Lightning Fast Platform", desc: "Optimized for speed so every bet lands at the right moment. Zero lag during live matches." },
  { icon: "🔒", title: "Secure & Trusted", desc: "Advanced encryption protects every account, transaction and personal detail. Play with confidence." },
  { icon: "📱", title: "Mobile First Design", desc: "Smooth gaming from any device. The 1xPlay app brings the full experience to your pocket." },
  { icon: "💳", title: "Instant Withdrawals", desc: "Cash out your winnings fast. Multiple payment options including UPI, cards and wallets." },
  { icon: "🏆", title: "200+ Games", desc: "From Teen Patti and Andar Bahar to live roulette, blackjack, and Aviator crash game." },
  { icon: "🎧", title: "24/7 Support", desc: "Our support team is always available for quick help with any issue, any time of day." },
];

export default function Features() {
  return (
    <section className={clsx("py-[50px]", "px-[5%]", "bg-bg3", "relative", "overflow-hidden")}>
      <div
        className={clsx(
          "absolute",
          "top-[-20%]",
          "left-[-10%]",
          "w-[500px]",
          "h-[500px]",
          "bg-[radial-gradient(circle,rgba(0,120,229,0.12)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />
      <div
        className={clsx(
          "absolute",
          "bottom-[-15%]",
          "right-[-5%]",
          "w-[400px]",
          "h-[400px]",
          "bg-[radial-gradient(circle,rgba(1,163,246,0.08)_0%,transparent_70%)]",
          "pointer-events-none"
        )}
      />

      <div className={clsx("relative", "z-[1]")}>
        <div className={clsx("flex", "justify-between", "items-end", "mb-12", "lg:mb-[60px]", "gap-6", "flex-wrap", "reveal")}>
          <div>
            <div className="section-tag">Why 1xPlay</div>
            <h2 className="section-title">
              Everything You<br /><span className="text-gold">Need to Win</span>
            </h2>
          </div>
          <p className="section-desc">
            Strong customer support is an important part of the 1xPlay experience. Our support team
            works continuously to help users with gaming assistance, cricket ID services, technical
            support, and account guidance.
          </p>
        </div>

        <div className={clsx("grid", "grid-cols-2", "lg:grid-cols-3", "gap-3", "sm:gap-4", "lg:gap-5")}>
          {features.map((f) => (
            <div
              key={f.title}
              className={clsx(
                "group",
                "reveal",
                "relative",
                "rounded-2xl",
                "p-5",
                "sm:p-6",
                "lg:p-8",
                "overflow-hidden",
                "border",
                "border-white/[0.12]",
                "bg-gradient-to-br",
                "from-white/[0.1]",
                "via-white/[0.04]",
                "to-white/[0.02]",
                "shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]",
                "transition-all",
                "duration-300",
                "hover:border-cyan-500/35",
                "hover:shadow-[0_12px_40px_rgba(0,120,229,0.2),inset_0_1px_0_rgba(255,255,255,0.18)]",
                "hover:-translate-y-1"
              )}
            >
              <div
                className={clsx(
                  "absolute",
                  "inset-0",
                  "bg-gradient-to-br",
                  "from-cyan-500/10",
                  "via-transparent",
                  "to-blue-600/5",
                  "opacity-0",
                  "group-hover:opacity-100",
                  "transition-opacity",
                  "duration-300",
                  "pointer-events-none"
                )}
              />

              <div className={clsx("relative", "z-[1]")}>
                <div
                  className={clsx(
                    "w-11",
                    "h-11",
                    "sm:w-[52px]",
                    "sm:h-[52px]",
                    "rounded-xl",
                    "bg-white/[0.08]",
                    "border",
                    "border-white/[0.15]",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-[20px]",
                    "sm:text-[24px]",
                    "mb-4",
                    "sm:mb-5",
                    "group-hover:scale-110",
                    "group-hover:border-cyan-400/30",
                    "transition-all",
                    "duration-300"
                  )}
                >
                  {f.icon}
                </div>
                <div
                  className={clsx(
                    "font-[var(--font-syne)]",
                    "font-bold",
                    "text-[14px]",
                    "sm:text-[16px]",
                    "lg:text-[17px]",
                    "text-white",
                    "mb-2",
                    "sm:mb-2.5",
                    "leading-snug"
                  )}
                >
                  {f.title}
                </div>
                <p className={clsx("text-[12px]", "sm:text-[13px]", "lg:text-[14px]", "text-muted", "leading-[1.65]")}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
