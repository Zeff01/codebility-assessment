"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";

const navItems = ["Wealth", "Invest", "Editorial", "Pricing"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/75 shadow-[0_14px_40px_rgba(2,6,23,0.06)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-fuchsia-600"
          >
            Moola
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-semibold tracking-tight transition-colors ${
                  index === 0
                    ? "border-b-2 border-fuchsia-600 pb-1 text-fuchsia-700"
                    : "text-slate-600 hover:text-fuchsia-500"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              className="hidden text-slate-500 transition-colors hover:text-fuchsia-600 lg:inline-flex"
              aria-label="Search"
            >
              <Search aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="hidden rounded-full bg-fuchsia-600 px-5 py-2.5 text-sm font-bold text-white transition hover:scale-[0.98] hover:bg-fuchsia-500 sm:inline-flex"
            >
              Get Started
            </button>

            <button
              type="button"
              className="inline-flex rounded-full border border-slate-300 p-2 text-slate-600 transition-colors hover:text-fuchsia-600 md:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-300 md:hidden ${
            isOpen
              ? "grid-rows-[1fr] pb-4 opacity-100"
              : "grid-rows-[0fr] pb-0 opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-fuchsia-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <button
                type="button"
                className="mt-2 w-full rounded-xl bg-fuchsia-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-fuchsia-500"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
