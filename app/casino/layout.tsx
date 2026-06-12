import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/casino");

export default function CasinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
