import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/badminton");

export default function BadmintonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
