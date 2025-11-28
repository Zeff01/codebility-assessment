import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SHOPY | Assessment App",
  description: "Created by Jhenslee Arce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${outfit.variable} ${roboto.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
