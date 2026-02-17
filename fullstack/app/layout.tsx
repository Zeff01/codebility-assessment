import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/StoreProvider';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import CartSidebar from '@/components/CartSidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'A modern e-commerce store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-950`}
      >
        <StoreProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <CartSidebar />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
