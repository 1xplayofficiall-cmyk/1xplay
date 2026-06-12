import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/horse-racing");

export default function HorseRacingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
