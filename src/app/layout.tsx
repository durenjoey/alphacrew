import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha CREW | Hurricane Maria Disaster Relief",
  description:
    "100,000+ lbs of life-sustaining supplies airlifted to Puerto Rico after Hurricane Maria. A veteran-led disaster relief operation, September 2017.",
  keywords: [
    "hurricane maria relief",
    "puerto rico disaster relief",
    "alpha crew",
    "veteran disaster response",
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
