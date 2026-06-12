import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/withdrawal");

export default function WithdrawalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
