import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description:
    "A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",

  openGraph: {
    title: "Little Lemon Restauran Karachi",
    description: "A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    url: "https://najam.pk",
    siteName: "Little Lemon Restauran",
    images: [
      {
        url: "https://little-lemon-next-jn7nv0ljx-hmnajam.vercel.app/assets/nav-logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://little-lemon-next-jn7nv0ljx-hmnajam.vercel.app/assets/nav-logo.png",
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
