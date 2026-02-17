import Link from "next/link";

export const Header = () => (
  <header className="border-b border-foreground/10 bg-surface/95 backdrop-blur-sm sticky top-0 z-50">
    {/* CHANGE: Match this 'max-w' to your Hero/Content width.
      If your Hero is max-w-5xl, use max-w-5xl here too.
    */}
    <div className="max-w-10xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Tech Insights<span className="text-primary">.</span>
      </Link>

      {/* Ensure your nav or 'Home' link is actually here to push the logo left */}
      <nav className="flex gap-6 items-center">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100"
        >
          Home
        </Link>
      </nav>
    </div>
  </header>
);
