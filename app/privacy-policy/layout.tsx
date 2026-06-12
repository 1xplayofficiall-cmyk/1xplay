import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/privacy-policy");

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
