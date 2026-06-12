import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/deposit-and-withdrawal");

export default function DepositAndWithdrawalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
