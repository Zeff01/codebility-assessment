import UserMenu from '@/components/layout/UserMenu'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
              ✓
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                <span className="text-sm tracking-wide text-slate-300">
                    Let’s{' '}
                    <span className="font-bold text-base bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(96,165,250,0.45)]">
                    To-Do
                    </span>{' '}
                    It!
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Stay focused. Ship tasks faster.
              </p>
            </div>
          </div>

          <UserMenu />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-sm text-slate-400 sm:flex-row">
          <p>Built for the Codebility Assessment.</p>
          <p className="text-slate-500">© 2026 Let’s To-Do It</p>
        </div>
      </footer>
    </>
  )
}