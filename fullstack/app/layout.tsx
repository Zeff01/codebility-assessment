import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "CodeCraft Blog | Modern Web Development Insights",
  description: "A professionally designed blog featuring the latest in Next.js, TypeScript, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Decorative Background Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl dark:from-blue-500/10 dark:to-indigo-500/10" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 blur-3xl dark:from-purple-500/10 dark:to-pink-500/10" />
          </div>

          <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/80">
            <Container className="flex items-center justify-between py-4">
              <Link href="/" className="group flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">CodeCraft</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Developer Insights</span>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                  <Link href="/" className="text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                    Articles
                  </Link>
                  <Link href="#" className="text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                    About
                  </Link>
                </nav>
                <ThemeToggle />
              </div>
            </Container>
          </header>

          <main className="min-h-[calc(100vh-13rem)]">
            <PageTransition>
              <Container className="py-12">{children}</Container>
            </PageTransition>
          </main>

          <footer className="border-t border-slate-200/50 bg-white/50 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/50">
            <Container className="py-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">CodeCraft Blog</span>
                </div>
                
                <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                  <span>© {new Date().getFullYear()} All rights reserved</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Next.js 14 • TypeScript • Tailwind
                  </span>
                </div>
              </div>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
