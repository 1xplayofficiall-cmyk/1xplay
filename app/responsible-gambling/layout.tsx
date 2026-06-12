import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/responsible-gambling");

export default function ResponsibleGamblingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
