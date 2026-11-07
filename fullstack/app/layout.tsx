import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartDrawer } from "@/components/CartDrawer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aurora Supply",
    template: "%s — Aurora Supply",
  },
  description:
    "Demo audio-gear storefront. Senior fullstack assessment build: Next.js App Router, server components for the catalog, an httpOnly-cookie cart API, and client islands for interaction.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <footer className="border-t border-stone-200/80 py-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 text-xs text-stone-500 sm:px-6">
            <p className="font-medium text-stone-600">Aurora Supply</p>
            <p>Demo storefront with a mock catalog — no real checkout, no payments, no tracking.</p>
          </div>
        </footer>
        <CartDrawer />
      </body>
    </html>
  );
}
