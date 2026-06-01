import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoolaLite Landing Page",
  description: "A responsive landing page inspired by Moola.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}