import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description:
    "A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",

  openGraph: {
    title: "Little Lemon Restauran",
    description: "A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    url: "https://najam.pk",
    siteName: "Little Lemon Restauran",
    images: [
      {
        url: "https://little-lemon-next.vercel.app/_next/image?url=%2Fassets%5Cnav-logo.png&w=128&q=75",
        width: 800,
        height: 600,
      },
      {
        url: "favicon.ico",
        width: 1800,
        height: 1600,
        alt: "Little Lemon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
