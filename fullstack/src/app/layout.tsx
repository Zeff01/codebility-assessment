import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A simple blog built with Next.js and TypeScript",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
