import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/apps");

export default function AppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
