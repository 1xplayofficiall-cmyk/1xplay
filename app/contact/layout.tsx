import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/contact");

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
