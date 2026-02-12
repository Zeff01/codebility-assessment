import Link from "next/link";
import { CartSummary } from "@/components/cart-summary";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-lg font-semibold">
            <Link href="/">Field & Finch</Link>
          </Button>
          <span className="hidden text-xs text-muted-foreground sm:block">
            Curated home essentials
          </span>
        </div>
        <nav className="hidden items-center gap-4 text-sm text-muted-foreground md:flex">
          <Link href="/">New arrivals</Link>
          <Link href="/">Lighting</Link>
          <Link href="/">Kitchen</Link>
        </nav>
        <CartSummary />
      </div>
    </header>
  );
}
