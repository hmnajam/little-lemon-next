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
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

<meta name="description" content="your text goes here" />;

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
