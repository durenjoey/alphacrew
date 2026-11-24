import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/data/site";
import "./globals.css";

// Inter is fetched once at build time and served from this site, so no page load waits on Google Fonts.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const title = "Alpha CREW | Hurricane Maria relief, 2017";
const description =
  "Alpha CREW moved 200,000+ lbs of water, food, medicine and generators to Puerto Rico after Hurricane Maria. The posts and photos from 2017.";

// The photo a shared link shows: public/og.jpg, cut from vieques-plaza-handout-closeup.jpg.
const preview = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Volunteers on the Alpha CREW truck handing water and supplies to residents gathered in the Vieques town square",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "hurricane maria relief",
    "puerto rico disaster relief",
    "alpha crew",
    "catastrophe relief expeditionary workforce",
  ],
  authors: [{ name: "Alpha CREW" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Alpha CREW",
    title,
    description,
    locale: "en_US",
    images: [preview],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [preview],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
