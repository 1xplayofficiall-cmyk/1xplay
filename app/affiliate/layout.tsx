import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/affiliate");

export default function AffiliateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
