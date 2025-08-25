import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";
import ProgressBarProvider from "@/components/Providers/ProgressBarProvider";

const b612 = B612({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-b612",
});

export const metadata: Metadata = {
  title: "Simple Blog",
  description: "Assessment project developed by Next.js and Tailwind CSS",
  openGraph: {
    title: "Simple Blog",
    description: "Assessment project developed by Next.js and Tailwind CSS",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Simple Blog",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/opengraph/landingOpenGraph.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${b612.className} antialiased mx-5 md:mx-10 lg:mx-30`}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
