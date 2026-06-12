import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/games");

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
