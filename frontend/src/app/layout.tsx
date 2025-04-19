import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/ui/navbar";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

const eina = localFont({
  src: [
    {
      path: '../../public/fonts/Eina03-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Eina03-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Eina03-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-eina',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Moola | Cashback Gift Cards",
  description: "Moola is a cashback gift card platform that allows users to earn cashback on their purchases.",
  icons: {
    icon: "/moola-logo.svg",
    shortcut: "/moola-logo.svg",
    apple: "/moola-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={eina.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
