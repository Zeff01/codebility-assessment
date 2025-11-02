import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gifter Rewards — Gift Cards with Cashback",
  description: "Send gift cards in seconds and earn instant cashback on every purchase.",
  openGraph: {
    title: "Gifter Rewards — Gift Cards with Cashback",
    description: "Send gift cards in seconds and earn instant cashback on every purchase.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gifter Rewards — Gift Cards with Cashback",
    description: "Send gift cards in seconds and earn instant cashback on every purchase.",
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
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
