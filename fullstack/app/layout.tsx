import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Articles on Next.js, React, and modern web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ margin: 0, padding: 0, WebkitFontSmoothing: "antialiased" }}
      >
        {children}
      </body>
    </html>
  );
}
