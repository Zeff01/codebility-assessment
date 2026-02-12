import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";
import { readCartCookie } from "@/lib/cart";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Field & Finch",
  description: "Curated home essentials and thoughtful daily objects.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart")?.value;
  const initialCart = readCartCookie(cartCookie);

  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider initialCart={initialCart}>
          <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(250,245,255,0.3),transparent_50%)]">
            <SiteHeader />
            <main>{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
