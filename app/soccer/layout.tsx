import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/soccer");

export default function SoccerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
