import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Simple Blog",
  description: "A minimal blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              SimpleBlog
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-5xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SimpleBlog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
