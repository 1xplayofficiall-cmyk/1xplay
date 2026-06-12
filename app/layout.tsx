import type { Metadata, Viewport } from "next";
import { Roboto_Slab, DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import CursorGlow from "./components/CursorGlow";
import { rootMetadata } from "./seo";

const robotoSlab = Roboto_Slab({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${dmSans.variable} ${syne.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col">
        <Preloader />
        <CursorGlow />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
