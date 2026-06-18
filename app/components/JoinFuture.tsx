"use client";

import clsx from "clsx";

export default function JoinFuture() {
  return (
    <section className={clsx('py-[60px]', 'px-[5%]', 'bg-bg', 'relative', 'overflow-hidden')}>
      {/* Decorative Glows */}
      <div className={clsx('absolute', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'w-[900px]', 'h-[500px]', 'bg-[radial-gradient(ellipse,rgba(0,120,229,0.06)_0%,transparent_70%)]', 'pointer-events-none')} />

      <div className={clsx('max-w-[1000px]', 'mx-auto', 'relative', 'z-10')}>
        {/* Growing Section */}
        <div className={clsx('text-left', 'sm:text-center', 'mb-16', 'reveal')}>
          <div className={clsx('section-tag', 'justify-center')}>Our Growth</div>
          <h2 className="section-title">
            Growing as One of the<br />Best Online <span className="text-gold">Casinos in India</span>
          </h2>
          <p className={clsx('text-[16px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-5')}>
            The online gaming industry is highly competitive but 1xPlay continues growing because of its focus on quality user experience and platform performance.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light')}>
            From casino game India searches to users looking for the best cricket betting ID services 1xPlay is becoming a preferred destination for players who want secure smooth and exciting online entertainment.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mt-4')}>
            Our mission is to continue improving the platform introducing better gaming features and delivering world class entertainment experiences for players across India and global markets.
          </p>
        </div>

        {/* Divider */}
        <div className={clsx('w-24', 'h-[2px]', 'bg-[rgba(0,120,229,0.3)]', 'mx-auto', 'mb-16', 'reveal')} />

        {/* Join CTA Section */}
        <div className={clsx('text-left', 'sm:text-center', 'reveal')}>
          <h2 className="section-title">
            Join the Future of<br />Online Gaming with <span className="text-gold">1xPlay</span>
          </h2>
          <p className={clsx('text-[15px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-5')}>
            1xPlay continues growing as a trusted destination for users searching for casino game India platforms online cricket ID services and premium sports betting experiences.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-5')}>
            From best casino games and IPL cricket betting to mobile gaming and live casino entertainment our platform is built to provide speed quality security and excitement for modern players.
          </p>
          <p className={clsx('text-[14px]', 'text-muted', 'leading-[1.8]', 'max-w-[750px]', 'mx-auto', 'font-light', 'mb-10')}>
            If you are searching for the best online casinos in India trusted cricket betting ID services secure online gambling casino experiences or exciting casino games online 1xPlay is designed to deliver everything in one place.
          </p>

          {/* CTA Box */}
          <div className={clsx(
            'bg-card/60', 'backdrop-blur-sm', 'border', 'border-[rgba(0,120,229,0.2)]',
            'rounded-2xl', 'p-10', 'max-w-[700px]', 'mx-auto'
          )}>
            <p className={clsx('text-[16px]', 'text-white', 'font-medium', 'leading-[1.7]', 'mb-8')}>
              Join 1XPlay today and experience a modern online gaming platform created for users who expect better performance better entertainment and a smoother gaming experience every day.
            </p>
            <div className={clsx('flex', 'gap-4', 'justify-center', 'flex-wrap')}>
              <a href="#" className={clsx('btn-gold', 'btn-large','btn-2')}>Join 1XPlay Now</a>
              <a href="#" className={clsx('btn', 'btn-ghost', 'btn-large')}>Explore Games</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
