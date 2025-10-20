import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Codedability Store",
  description: "A modern store demo showcasing products with search and details.",
} as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <link rel="preconnect" href="https://fakestoreapi.com" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
