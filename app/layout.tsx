import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amelioras — Living Conditions Improvement & Shared Prosperity",
  description:
    "Amelioras is a for-profit living-conditions improvement platform helping individuals move into conditions where they feel they are living better through accessible upgrades to environments, routines, and daily friction points.",
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
      "A transparent, for-profit engine helping people improve home environments and routines, while reinvesting majority surplus into communities.",
    url: "https://amelioras.vercel.app",
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
