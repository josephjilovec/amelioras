import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amelioras — Living Conditions Improvement & Shared Prosperity",
  description:
    "A practical living-improvement concept. Explore small changes to everyday spaces and routines, build an explained local planning list, and learn about the shared-prosperity model.",
  metadataBase: new URL("https://amelioras.josephjilovec.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Amelioras",
    "living conditions improvement",
    "shared prosperity",
    "living assessment",
    "home friction reduction",
    "dignity-first housing",
    "nonprofit partnerships",
    "church benevolence collaboration",
    "public balance sheet",
  ],
  openGraph: {
    title: "Amelioras — Practical Living Upgrades & Shared Prosperity",
    description:
      "Small, practical improvements to everyday living, with a proposed for-profit model centered on community reinvestment.",
    url: "https://amelioras.josephjilovec.com",
    siteName: "Amelioras",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amelioras — Living Conditions Improvement",
    description:
      "Helping people feel they are living better through practical, accessible upgrades to living environments and daily routines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
