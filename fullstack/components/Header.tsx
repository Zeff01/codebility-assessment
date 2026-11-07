import Link from "next/link";

import { CartBadge } from "@/components/CartBadge";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f6f3]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.22em] text-stone-900 transition-opacity hover:opacity-80"
        >
          AURORA<span className="text-amber-700">·</span>SUPPLY
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <Link
            href="/"
            className="hidden text-sm text-stone-600 transition-colors hover:text-stone-900 sm:block"
          >
            Catalog
          </Link>
          <CartBadge />
        </nav>
      </div>
    </header>
  );
}
