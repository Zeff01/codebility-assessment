// src/app/layout.tsx
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Blog',
  description: 'A simple blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Next.js Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}