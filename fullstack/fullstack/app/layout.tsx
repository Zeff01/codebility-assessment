import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitchen Assistant | Live Cooking Orders",
  description:
    "Real-time kitchen display system designed for prep and order management.",
  keywords: [
    "kitchen assistant",
    "cooking orders",
    "KDS",
    "productivity",
    "nextjs",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Kitchen Assistant",
    description: "Kitchen prep with live order tracking.",
  },
  twitter: {
    title: "Kitchen Assistant",
    description: "Master your kitchen prep with vibrant, real-time focus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
