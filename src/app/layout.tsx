import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha CREW | Hurricane Maria relief, 2017",
  description:
    "Alpha CREW moved 200,000+ lbs of water, food, medicine and generators to Puerto Rico after Hurricane Maria. The posts and photos from 2017.",
  keywords: [
    "hurricane maria relief",
    "puerto rico disaster relief",
    "alpha crew",
    "catastrophe relief expeditionary workforce",
  ],
  authors: [{ name: "Alpha CREW" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
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
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
