import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/rules");

export default function RulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
