import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/about");

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
