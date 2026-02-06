import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CartProvider } from "@/components/CartProvider";
import CartButton from "@/components/CartButton";

export const metadata: Metadata = {
  title: "Luna’s Collection",
  description: "Luna’s Collection — True style never dies.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="header">
            <div className="container headerInner">
              <Link href="/" className="brandWrap" aria-label="Go to homepage">
                <Image src="/logo.svg" alt="Luna’s Collection" width={160} height={40} priority />
              </Link>

              <nav className="nav">
                <Link className="navLink" href="/">Shop</Link>
                <Link className="navLink" href="/cart">Cart</Link>
              </nav>

              <div className="headerRight">
                <div className="tagline">True style never dies</div>
                <CartButton />
              </div>
            </div>
          </header>

          <main className="container main">{children}</main>

          <footer className="footer">
            <div className="container footerGrid">
              <div>
                <div className="footerBrand">Luna’s Collection</div>
                <div className="muted">
                  Curated looks, everyday essentials, and statement pieces — inspired by the moon.
                </div>
              </div>

              <div>
                <div className="footerTitle">Customer Care</div>
                <a className="footerLink" href="#">Shipping & Returns</a>
                <a className="footerLink" href="#">FAQs</a>
                <a className="footerLink" href="#">Privacy Policy</a>
              </div>

              <div>
                <div className="footerTitle">Shop</div>
                <a className="footerLink" href="#">New Arrivals</a>
                <a className="footerLink" href="#">Best Sellers</a>
                <a className="footerLink" href="#">Accessories</a>
              </div>

              <div>
                <div className="footerTitle">Follow</div>
                <div className="socialRow">
                  <a className="social" href="#" aria-label="Facebook">f</a>
                  <a className="social" href="#" aria-label="Instagram">ig</a>
                  <a className="social" href="#" aria-label="X">x</a>
                </div>
              </div>
            </div>

            <div className="container footerBottom muted">
              &copy; {new Date().getFullYear()} Luna&apos;s Collection. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
