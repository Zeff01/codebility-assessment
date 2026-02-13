import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Next.js Blog",
  description: "A simple blog built with Next.js, TypeScript, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Next.js Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/api/posts"
                className="transition-colors hover:text-foreground"
                target="_blank"
              >
                API
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
