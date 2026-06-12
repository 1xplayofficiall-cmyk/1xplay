import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/partner");

export default function PartnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
