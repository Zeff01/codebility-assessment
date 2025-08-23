import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My Blog",
  description: "This is my blog where I share my thoughts and ideas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
