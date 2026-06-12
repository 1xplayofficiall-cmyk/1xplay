"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Headphones,
  ShieldCheck,
  Globe,
  MessageSquare,
  Trophy,
  Wallet,
  User,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const supportServices = [
    "Account Related Support",
    "Login & Registration Issues",
    "Cricket ID Assistance",
    "Casino Games Support",
    "Sports Betting Help",
    "Deposit & Withdrawal Queries",
    "Technical Support",
    "Bonus & Promotion Information",
    "General Gaming Assistance",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg text-white">
      <ScrollReveal />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-gold-glow blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-[rgba(1,163,246,0.1)] blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-glow blur-[180px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx('section-tag', 'justify-center', 'mb-6')}
          >
            24/7 Customer Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-[var(--font-bebas)] text-[clamp(44px,7vw,85px)] tracking-[1px] leading-[1.05] text-white"
          >
            Contact <span className="text-gold">1xPlay</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-muted font-light"
          >
            Have questions about your account, gaming experience,
            cricket ID services, or technical support? The 1xPlay
            support team is always ready to help users with fast,
            reliable, and professional assistance.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Mail,
              title: "Email Support",
              text: "support@1xplay.com",
            },
            {
              icon: MessageSquare,
              title: "Business Inquiries",
              text: "business@1xplay.com",
            },
            {
              icon: MessageCircle,
              title: "Live Chat Support",
              text: "Instant assistance available on the platform.",
            },
            {
              icon: Send,
              title: "Telegram & WhatsApp",
              text: "Fast and secure support worldwide.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-border bg-card p-6 backdrop-blur-xl relative overflow-hidden transition-all hover:border-gold/30 hover:shadow-[0_8px_30px_rgb(0,120,229,0.03)]"
            >
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
              <item.icon
                className="mb-4 text-gold"
                size={34}
              />
              <h3 className="mb-2 font-[var(--font-syne)] text-[16px] font-bold text-white uppercase tracking-[0.5px]">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form & Services */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
            <h2 className="mb-4 font-[var(--font-bebas)] text-[32px] tracking-[1px] text-white">
              Send Us a Message
            </h2>

            <p className="mb-8 text-[14px] text-muted font-light leading-relaxed">
              If you have any questions or need support,
              provide your details and our support team
              will respond as quickly as possible.
            </p>

            <form className="space-y-5 relative z-10">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-4 outline-none transition focus:border-gold text-sm placeholder-white/20 text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-4 outline-none transition focus:border-gold text-sm placeholder-white/20 text-white"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-4 outline-none transition focus:border-gold text-sm placeholder-white/20 text-white"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full rounded-xl border border-border bg-bg/40 px-4 py-4 outline-none transition focus:border-gold text-sm placeholder-white/20 text-white resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn btn-gold w-full justify-center py-4 font-[var(--font-syne)] text-[14px] uppercase font-bold"
              >
                Send Message
              </motion.button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
              <h2 className="mb-6 font-[var(--font-bebas)] text-[32px] tracking-[1px] text-white">
                Support Services
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {supportServices.map((service, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-bg2 p-4 text-[13px] text-text font-medium flex items-center gap-2.5 transition hover:border-gold/25"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
              <h2 className="mb-4 font-[var(--font-bebas)] text-[32px] tracking-[1px] text-white">
                24/7 Global Assistance
              </h2>

              <p className="text-[14px] leading-relaxed text-muted font-light">
                The 1xPlay support team works continuously to
                provide assistance for users across different
                countries and regions. Our support services are
                responsive, reliable, and easy to access whenever
                you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center font-[var(--font-bebas)] text-[clamp(32px,4.5vw,56px)] tracking-[1px] text-white">
            Reliable Support You Can Trust
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Assistance",
                desc: "Professional and secure support services for all users.",
              },
              {
                icon: Headphones,
                title: "24/7 Availability",
                desc: "Round-the-clock assistance whenever support is required.",
              },
              {
                icon: Globe,
                title: "Global Support",
                desc: "Helping players from multiple countries and regions worldwide.",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-8 backdrop-blur-xl relative overflow-hidden transition-all hover:border-gold/30 hover:shadow-[0_8px_30px_rgb(0,120,229,0.03)]">
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
                <item.icon
                  className="mb-4 text-gold"
                  size={40}
                />
                <h3 className="mb-3 font-[var(--font-syne)] text-[16px] font-bold text-white uppercase tracking-[0.5px]">
                  {item.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card p-10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(0,120,229,0.03)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="mb-10 text-center font-[var(--font-bebas)] text-[clamp(32px,4.5vw,52px)] tracking-[1px] text-white">
            Why Contact 1xPlay?
          </h2>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {[
              { icon: User, title: "Account Support" },
              { icon: Trophy, title: "Gaming Assistance" },
              { icon: Wallet, title: "Payment Help" },
              { icon: Headphones, title: "Technical Support" }
            ].map((feat, index) => (
              <div key={index} className="text-center group">
                <feat.icon
                  size={40}
                  className="mx-auto mb-4 text-gold transition-transform duration-250 group-hover:scale-110"
                />
                <h3 className="font-[var(--font-syne)] text-[14px] font-bold text-white uppercase tracking-[0.5px]">
                  {feat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(0,120,229,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="mb-4 font-[var(--font-bebas)] text-[clamp(36px,5vw,60px)] tracking-[1px] text-white">
              Connect With 1xPlay
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-[14px] text-muted font-light leading-relaxed">
              Stay connected with 1xPlay for the latest updates,
              gaming features, promotions, and support services.
              For any questions, feedback, or support requests,
              feel free to contact our team anytime.
            </p>

            <button className="btn btn-gold px-8 py-4 font-[var(--font-syne)] text-[13px] uppercase font-bold">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}