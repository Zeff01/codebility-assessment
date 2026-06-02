import "./globals.css";

export const metadata = {
  title: "Simple Blog App",
  description: "A simple blog application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}