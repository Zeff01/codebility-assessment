export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-baseline gap-1.5 font-display text-[22px] font-bold text-ink"
        >
          Serene
          <span className="font-mono text-[13px] font-semibold text-ember">
            VALLEY
          </span>
        </a>

        <nav className="hidden gap-8 md:flex">
          <a
            href="#stays"
            className="text-[14.5px] font-medium text-ink-soft hover:text-ink"
          >
            Featured stays
          </a>
        </nav>

        <a
          href="#book"
          className="inline-flex items-center rounded-sm bg-ember px-5 py-2.5 text-[14px] font-semibold text-paper transition-transform hover:-translate-y-0.5"
        >
          Search stays
        </a>
      </div>
    </header>
  );
}