import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Next.js Blog',
  description: 'A simple blog application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}