"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const linkClasses = (href: string) =>
    cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer",
      pathname === href
        ? "bg-black/10 dark:bg-white/10"
        : "hover:bg-black/5 dark:hover:bg-white/10"
    );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl w-full px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-wide cursor-pointer">Codedability Store</Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className={linkClasses("/")}>Home</Link>
          <Link href="/products" className={linkClasses("/products")}>Products</Link>
        </nav>
      </div>
    </header>
  );
}


