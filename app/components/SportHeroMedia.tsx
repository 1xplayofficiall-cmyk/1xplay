import Image from "next/image";

/** Full-bleed hero background — starts below navbar, full image visible (no crop) */
export function SportHeroBackdrop({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="absolute left-0 right-0 bottom-0 z-0 pointer-events-none bg-[#05080B] top-[var(--navbar-offset)]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain object-center md:object-right"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#05080B] from-0% via-[#05080B]/90 via-[40%] to-transparent to-[72%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080B] via-transparent to-[#05080B]/30" />
    </div>
  );
}
