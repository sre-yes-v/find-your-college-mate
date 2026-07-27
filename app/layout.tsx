import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHC Connect — Find Your Student Group",
  description: "Search your name and instantly find your student group.",
  twitter: {
    card: "summary_large_image",
    title: "SHC Connect — Find Your Student Group",
    description: "Search your name and instantly find your student group.",
    images: "/logo.jpg",
  },
  openGraph: {
    title: "SHC Connect — Find Your Student Group",
    description: "Search your name and instantly find your student group.",
    siteName: "SHC Connect",
    url: "https://shcconnect.vercel.app",
    images: "/logo.jpg",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
