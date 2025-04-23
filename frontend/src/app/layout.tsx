import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Codebility Assessment - Frontend 3-5 Years",
  description: "Codebility Assessment - Frontend 3-5 Years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontSans.variable)}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
