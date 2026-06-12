import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/deposit");

export default function DepositLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
