import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/highlights");

export default function HighlightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
