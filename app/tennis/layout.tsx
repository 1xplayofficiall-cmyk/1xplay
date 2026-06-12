import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/tennis");

export default function TennisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
