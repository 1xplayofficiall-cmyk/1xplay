import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/contact-us");

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
