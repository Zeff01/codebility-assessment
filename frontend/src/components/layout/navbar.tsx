"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#shop", label: "Shop" },
  { href: "#winter-sale", label: "Winter Holiday Sale" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#refer", label: "Refer & Earn" },
  { href: "#merchant", label: "Merchant Solutions" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="
          flex h-16 items-center justify-between
          px-4
          sm:px-6
          md:px-12
          lg:px-20
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Moola home">
          <Image
            src="/moola_logo.svg"
            alt="Moola"
            width={140}
            height={28}
            className="h-5 w-auto sm:h-6 md:h-7"
            priority
          />
        </Link>

        {/* Desktop links (LG and up) */}
        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-[var(--moola-purple)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop CTA (LG and up) */}
          <div className="hidden lg:flex">
            <Button
              className="bg-[var(--moola-magenta)] text-white hover:bg-[var(--moola-magenta)]/90"
              asChild
            >
              <Link href="#download">DOWNLOAD NOW</Link>
            </Button>
          </div>

          {/* Mobile menu (below LG) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Flag className="size-4" />
                    <span>CAD</span>
                  </div>

                  <Button
                    className="bg-[var(--moola-magenta)] text-white hover:bg-[var(--moola-magenta)]/90"
                    asChild
                  >
                    <Link href="#download" onClick={() => setOpen(false)}>
                      DOWNLOAD NOW
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
