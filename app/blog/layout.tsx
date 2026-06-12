import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/blog");

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
