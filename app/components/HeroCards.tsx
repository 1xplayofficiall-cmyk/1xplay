'use client'
import clsx from "clsx"
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion.create(Link);
import { div } from "framer-motion/client"


const  HeroCards = () =>{
  
    return(

     <div className={clsx('relative','overflow-hidden', 'px-[5%]',  'pb-12', 'flex', 'flex-col')}>

           <div className={clsx('w-full', 'mb-8')}>
          <p className={clsx('text-[13px]', 'md:text-[14px]', 'text-gray-300/95', 'font-light', 'leading-relaxed')}>
            As the online gaming industry continues growing millions of users are searching for a platform that offers everything in one place. Players want casino games online trusted cricket betting ID services fast withdrawals live gaming experiences and smooth mobile access. 1xPlay is designed to fulfill all these expectations through a modern platform focused on speed convenience security and user satisfaction.
            Whether you are searching for the best online casinos in India a reliable cricket ID provider exciting casino game India experiences or a powerful online gambling casino platform 1xPlay gives you access to everything through one easy to use website and mobile app.
            Our goal is simple — to create a world class gaming platform where users can enjoy online casino games live sports betting IPL cricket betting and mobile entertainment without complications.
          </p>
        </div>


         <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
              }
            }
          }}
          className={clsx('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-4', 'mt-12', 'w-full')}
        >
          {[
            { label: "Casino Games", emoji: "🎰", desc: "Slots, Roulette & Blackjack", href: "/casino" },
            { label: "Cricket Betting", emoji: "🏏", desc: "Live Odds & IPL Matches", href: "/cricket" },
            { label: "Sports Betting", emoji: "⚽", desc: "Football & Tennis Leagues", href: "/soccer" },
            { label: "Fast Withdrawals", emoji: "⚡", desc: "Instant & Secure Payouts", href: "/withdrawal" }
          ].map((item) => (
            <MotionLink
              href={item.href}
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ scale: 1.04, borderColor: "rgba(6, 182, 212, 0.5)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              className={clsx(
                'flex', 'items-center', 'gap-4', 'p-5',
                'bg-[#0a192f]/40', 'backdrop-blur-md',
                'border', 'border-white/10',
                'rounded-2xl', 'text-left', 'transition-all', 'duration-300',
                'group', 'cursor-pointer'
              )}
            >
              <div className={clsx(
                'w-12', 'h-12', 'rounded-xl',
                'bg-white/5', 'border', 'border-white/10',
                'group-hover:bg-cyan-500/10', 'group-hover:border-cyan-500/30',
                'flex', 'items-center', 'justify-center',
                'text-2xl', 'transition-all', 'duration-300'
              )}>
                {item.emoji}
              </div>
              <div>
                <h3 className={clsx('text-white', 'font-bold', 'text-[15px]', 'group-hover:text-cyan-400', 'transition-colors')}>
                  {item.label}
                </h3>
                <p className={clsx('text-gray-400', 'text-[11px]', 'mt-0.5', 'font-light')}>
                  {item.desc}
                </p>
              </div>
            </MotionLink>
          ))}
        </motion.div>

     </div>
    )

}

export default HeroCards