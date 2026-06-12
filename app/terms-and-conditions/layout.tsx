import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/terms-and-conditions");

export default function TermsAndConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
