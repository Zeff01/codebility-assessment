export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="text-xl font-semibold">Moola</div>

        <nav className="hidden gap-6 text-sm md:flex">
          <a className="hover:opacity-70" href="#features">Features</a>
          <a className="hover:opacity-70" href="#how">How it works</a>
          <a className="hover:opacity-70" href="#pricing">Pricing</a>
        </nav>

        <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          Get started
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-medium text-gray-700">
            Smart money, made simple
          </p>

          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Build better money habits with a modern wallet.
          </h1>

          <p className="mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            Track spending, save automatically, and move money instantly — all in one clean,
            responsive experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:opacity-90">
              Start free
            </button>
            <button className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50">
              See how it works
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
            <span>✔ No credit card</span>
            <span>✔ Cancel anytime</span>
            <span>✔ Secure by design</span>
          </div>
        </div>

        {/* Mock UI Card */}
        <div className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Balance</p>
              <p className="text-2xl font-semibold">$12,480.50</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
              Personal
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              { name: "Groceries", amount: "-$54.20" },
              { name: "Transport", amount: "-$18.00" },
              { name: "Salary", amount: "+$2,500.00" },
            ].map((t) => (
              <div key={t.name} className="flex items-center justify-between rounded-2xl bg-white p-4">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-sm text-gray-600">{t.amount}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-gray-900 p-5 text-white">
            <p className="text-xs opacity-80">Savings goal</p>
            <p className="mt-1 text-lg font-semibold">New laptop</p>
            <div className="mt-3 h-2 w-full rounded-full bg-white/20">
              <div className="h-2 w-2/3 rounded-full bg-white" />
            </div>
            <p className="mt-2 text-xs opacity-80">$860 / $1,200</p>
          </div>
        </div>
      </section>

      {/* Extra Section: Features */}
      <section id="features" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Everything you need to manage money
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            A clean landing page with a clear hero and one extra section — responsive on mobile and desktop.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Instant insights", desc: "See where your money goes with clean summaries." },
              { title: "Auto saving", desc: "Set a goal and save automatically in the background." },
              { title: "Fast transfers", desc: "Move money instantly with a smooth experience." },
            ].map((f) => (
              <div key={f.title} className="rounded-3xl border p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Moola — demo landing page</p>
          <p className="text-xs">Built with Next.js • Responsive • Clean components</p>
        </div>
      </footer>
    </main>
  );
}
