import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-background/75 backdrop-blur-[20px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center text-2xl font-bold text-white tracking-tight">
          Moola <span className="text-accent ml-1">Drops</span>
        </Link>
        <div className="hidden md:flex gap-9 text-sm font-medium">
          <Link href="#how" className="text-ink-2 transition-colors hover:text-white">
            How it works
          </Link>
          <Link href="#results" className="text-ink-2 transition-colors hover:text-white">
            Results
          </Link>
          <Link href="#features" className="text-ink-2 transition-colors hover:text-white">
            Features
          </Link>
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            href="#login"
            className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium text-ink-2 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
