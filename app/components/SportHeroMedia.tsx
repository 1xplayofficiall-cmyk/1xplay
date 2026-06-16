import Image from "next/image";

type SportHeroBackdropProps = {
  src: string;
  alt: string;
  /** Tailwind object-position for mobile crop (wide assets with subject on the right) */
  mobilePosition?: string;
};

/** Full-bleed hero background — large crop on mobile, full image on desktop */
export function SportHeroBackdrop({
  src,
  alt,
  mobilePosition = "object-[90%_26%]",
}: SportHeroBackdropProps) {
  return (
    <div
      className="absolute left-0 right-0 bottom-0 z-0 pointer-events-none bg-[#05080B] top-[var(--navbar-offset)]"
    >
      {/* Mobile: tall image band so the subject reads large below the headline */}
      <div className="absolute inset-x-0 bottom-0 h-[min(56vh,460px)] min-h-[340px] md:hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover scale-[1.18] ${mobilePosition}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-[#05080B]/25 to-transparent" />
      </div>

      {/* Desktop: full image visible, no crop */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="hidden md:block object-contain object-right"
        priority
      />

      {/* Mobile: keep headline area readable */}
      <div
        className="absolute inset-0 md:hidden bg-gradient-to-b from-[#05080B] from-0% via-[#05080B]/94 via-[36%] to-transparent to-[52%]"
      />

      {/* Desktop overlays */}
      <div
        className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#05080B] from-0% via-[#05080B]/90 via-[40%] to-transparent to-[72%]"
      />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#05080B] via-transparent to-[#05080B]/30" />
    </div>
  );
}
