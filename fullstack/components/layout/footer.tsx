import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-xs text-sm text-muted">Audio, wearables and everyday gear, picked to last.</p>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-sm font-medium text-muted">
          <Link href="/" className="transition hover:text-foreground">
            Shop all
          </Link>
          <Link href="/cart" className="transition hover:text-foreground">
            Cart
          </Link>
        </nav>
      </div>
    </footer>
  );
}
