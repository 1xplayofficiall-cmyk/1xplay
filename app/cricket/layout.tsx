import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/cricket");

export default function CricketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
