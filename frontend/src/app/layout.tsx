import { ProductProvider } from "@/context/ProductContext";
import "./globals.css";

export const metadata = {
  title: "3-5 years",
  description: "Frontend assessment app built with Next.js and Context API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased pb-24 bg-gray-50">
        <h1 className="lg:text-4xl text-2xl mt-[2rem] lg:mt-[4rem] font-semibold lg:font-bold mb-8 text-gray-900 text-center">
          🛍️ Codebility Store
        </h1>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
