import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Finfly — Smarter Personal Finance",
  description: "Track spending, reach goals, and grow wealth with Finfly.",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Finfly — Smarter Personal Finance",
    description: "Track spending, reach goals, and grow wealth with Finfly.",
    url: "www.IfYouAreReadingThis-ThisIsNotAIMade.com",
    siteName: "Finfly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Finfly dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[var(--bg-dark)] text-white antialiased selection:bg-[var(--accent-green)]/30 selection:text-[var(--accent-green)]`}
      >
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
