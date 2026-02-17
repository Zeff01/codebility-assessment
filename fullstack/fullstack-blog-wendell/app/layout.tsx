import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-background text-foreground">
        {/* Sticky Header for that premium feel */}
        <Header />

        {/* This renders your page.tsx or your posts/[id]/page.tsx */}
        <div className="min-h-screen">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
