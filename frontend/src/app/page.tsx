export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1f2937] selection:bg-[#16a34a]/20">
      <header className="border-b border-[#e5e1d9] bg-[#f7f6f2]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#16a34a]">
              moola
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-[#5b6472] md:flex">
            <a href="#how-it-works" className="hover:text-[#1f2937]">
              How it works
            </a>
            <a href="#results" className="hover:text-[#1f2937]">
              Results
            </a>
            <a href="#contact" className="hover:text-[#1f2937]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#1f2937] px-4 py-2 text-sm font-medium text-[#1f2937] hover:bg-[#1f2937] hover:text-white"
          >
            Book a demo
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#16a34a]">
              closed-loop marketing
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Know what your marketing actually brings in.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#5b6472] sm:text-lg">
              A simple landing page inspired by Moola. It keeps the message
              clear: track spend, see results, and make better decisions without
              a lot of fluff.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#16a34a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#12813a]"
              >
                Get started
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#d1cec5] px-6 py-3 text-sm font-semibold text-[#1f2937] hover:border-[#1f2937]"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#5b6472]">
              <span className="rounded-full border border-[#e5e1d9] bg-white px-4 py-2">
                No long setup
              </span>
              <span className="rounded-full border border-[#e5e1d9] bg-white px-4 py-2">
                Track every campaign
              </span>
              <span className="rounded-full border border-[#e5e1d9] bg-white px-4 py-2">
                Works on mobile too
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5e1d9] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between border-b border-[#ece7df] pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b7280]">
                  Today&apos;s revenue
                </p>
                <p className="mt-2 text-3xl font-semibold text-[#111827]">
                  $8,420
                </p>
              </div>
              <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold text-[#166534]">
                Live
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5b6472]">ROAS</span>
                  <span className="font-semibold text-[#111827]">597%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[#e5e7eb]">
                  <div className="h-2 w-[74%] rounded-full bg-[#16a34a]" />
                </div>
              </div>

              <div className="rounded-2xl bg-[#f8fafc] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5b6472]">Gift cards claimed</span>
                  <span className="font-semibold text-[#111827]">9,997</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[#e5e7eb]">
                  <div className="h-2 w-[88%] rounded-full bg-[#111827]" />
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-[#d9d4cb] p-4">
                <p className="text-sm font-medium text-[#111827]">
                  Simple reporting for small teams.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5b6472]">
                  No complicated dashboard layout. Just a quick summary of what
                  is working and what is not.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-[#e5e1d9] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#16a34a]">
                how it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
                Three simple steps.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#5b6472]">
                This section keeps the page useful without trying too hard.
                Each card explains the flow in plain language.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-[#e5e1d9] bg-[#f7f6f2] p-6">
                <p className="text-sm font-semibold text-[#16a34a]">01</p>
                <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                  Launch a campaign
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6472]">
                  Set up a campaign, choose the offer, and keep the process
                  straightforward.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e1d9] bg-[#f7f6f2] p-6">
                <p className="text-sm font-semibold text-[#16a34a]">02</p>
                <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                  Track what happens
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6472]">
                  Follow claims, redemptions, and spend from one place without
                  extra steps.
                </p>
              </article>

              <article className="rounded-2xl border border-[#e5e1d9] bg-[#f7f6f2] p-6">
                <p className="text-sm font-semibold text-[#16a34a]">03</p>
                <h3 className="mt-3 text-lg font-semibold text-[#111827]">
                  Review the result
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6472]">
                  Use the numbers to judge if the campaign was worth it and
                  what to try next.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="results" className="bg-[#f7f6f2]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 rounded-3xl border border-[#e5e1d9] bg-white p-6 md:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-[#111827]">500%+</p>
                <p className="mt-1 text-sm text-[#5b6472]">avg. ROAS</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111827]">$0</p>
                <p className="mt-1 text-sm text-[#5b6472]">setup fees</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111827]">24/7</p>
                <p className="mt-1 text-sm text-[#5b6472]">live tracking</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[#e5e1d9] bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-[#5b6472] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Simple Moola-style landing page for the assessment.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}