import { Globe, Share2 } from "lucide-react";

const links = ["Contact Us", "Careers", "Accessibility", "Privacy & Terms"];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-12">
        <div className="text-center md:text-left">
          <p className="text-2xl font-extrabold tracking-tight text-fuchsia-600">
            Moola
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            Copyright 2026 Moola Editorial Fintech. All rights reserved.
          </p>
        </div>

        <div className="flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              href="#"
              key={link}
              className="text-sm font-semibold text-slate-500 transition-colors hover:text-fuchsia-600"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Share"
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-fuchsia-600"
          >
            <Share2 aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </a>
          <a
            href="#"
            aria-label="Language"
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-fuchsia-600"
          >
            <Globe aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </footer>
  );
}
