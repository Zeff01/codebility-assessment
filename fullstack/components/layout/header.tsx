import Link from "next/link";
import { CartButton } from "@/features/cart/components/cart-button";
import { FREE_SHIPPING_THRESHOLD } from "@/features/cart/constants";
import { formatCurrency } from "@/lib/format";
import { Logo } from "./logo";

export function Header() {
  return (
    <>
      <p className="bg-linear-to-r from-indigo-600 via-violet-600 to-indigo-600 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        Free shipping on orders over {formatCurrency(FREE_SHIPPING_THRESHOLD)}
      </p>
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" aria-label="Northwave Store home" className="rounded-lg">
            <Logo />
          </Link>
          <nav aria-label="Main" className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-surface-muted hover:text-foreground sm:inline-block"
            >
              Shop all
            </Link>
            <CartButton />
          </nav>
        </div>
      </header>
    </>
  );
}
