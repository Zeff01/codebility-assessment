const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#08070d]/95 text-white backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-[1190px] items-center justify-between px-5 sm:px-8 lg:px-4"
        aria-label="Main navigation"
      >
        <a href="#" className="flex items-center gap-2" aria-label="Moola home">
          <svg
            className="h-7 w-7"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9.4 16 4l10 5.4v9.2L16 28 6 18.6V9.4Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path
              d="m9.6 10.8 6.4 3.7 6.4-3.7"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[2rem] font-black leading-none tracking-[-0.04em]">
            moola
          </span>
        </a>

        <ul className="hidden items-center gap-11 text-sm font-bold text-white/60 lg:flex">
          <li>
            <a className="transition hover:text-white" href="#how-it-works">
              How it works
            </a>
          </li>
          <li>
            <a className="transition hover:text-white" href="#results">
              Results
            </a>
          </li>
          <li>
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-9 text-sm font-extrabold lg:flex">
          <a className="transition hover:text-[#8c00ff]" href="#marketplace">
            Marketplace
          </a>
          <a className="transition hover:text-[#8c00ff]" href="#login">
            Login
          </a>
          <a
            className="rounded-full bg-[#8c00ff] px-4 py-2 text-white shadow-[0_0_28px_rgba(140,0,255,0.5)] transition hover:bg-[#9b20ff]"
            href="#demo"
          >
            Book a demo
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            className="rounded-full bg-[#8c00ff] px-4 py-3 text-xs font-extrabold text-white shadow-[0_0_22px_rgba(140,0,255,0.45)] sm:px-5 sm:text-sm"
            href="#demo"
          >
            Book a demo
          </a>

          <details className="mobile-menu relative">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
              aria-label="Open menu"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </summary>

            <div className="absolute right-0 top-14 w-48 rounded-2xl border border-white/10 bg-[#111018]/95 p-3 text-sm font-bold shadow-2xl backdrop-blur-xl">
              {[
                ["Marketplace", "#marketplace"],
                ["Login", "#login"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  className="block rounded-xl px-4 py-3 text-white/75 transition hover:bg-white/10 hover:text-white"
                  href={href}
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
