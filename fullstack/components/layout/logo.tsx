export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 via-violet-500 to-sky-400 text-white shadow-md shadow-indigo-500/30"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
          <path d="M3 14c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4 2.5 4 3 4" />
          <path d="M3 19c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 3 3" opacity={0.6} />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight">Northwave</span>
    </span>
  );
}
