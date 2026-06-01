import { getThemeComponents } from "../components/ThemeComponents.jsx";

function Login({ onBackHome }) {
  const ui = getThemeComponents("light");

  return (
    <main className={`min-h-screen transition-colors duration-300 ${ui.page}`}>
      <div className="grid min-h-screen lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="relative hidden overflow-hidden bg-violet-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_34%)]" />
          <button
            className="relative text-left text-3xl font-black tracking-tight"
            onClick={onBackHome}
            type="button"
          >
            Codebility
          </button>
          <div className="relative max-w-sm">
            <h1 className="text-4xl font-black leading-tight">Sign in to Codebility</h1>
            <p className="mt-5 text-lg leading-8 text-violet-100">
              Access campaign reports, demo requests, and team workflows from
              one focused portal.
            </p>
          </div>
          <p className="relative text-sm text-violet-200">2026 Codebility Inc.</p>
        </aside>

        <section className={`flex min-h-screen items-center justify-center px-5 py-10 ${ui.heroBackdrop}`}>
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-between lg:justify-end">
              <button
                className={`rounded-full border px-4 py-2 text-sm font-bold transition lg:hidden ${ui.secondaryButton}`}
                onClick={onBackHome}
                type="button"
              >
                Home
              </button>
            </div>

            <form className={`rounded-[1.5rem] border p-6 sm:p-8 ${ui.glassPanel}`}>
              <p className={`${ui.layout.eyebrow} ${ui.text.accent}`}>Portal access</p>
              <h2 className={`mt-4 text-3xl font-black ${ui.text.primary}`}>Sign In</h2>
              <p className={`mt-2 ${ui.text.secondary}`}>Codebility Portal</p>

              <div className="mt-8 grid gap-5">
                <label className="block">
                  <span className={`text-sm font-bold ${ui.text.primary}`}>Email address</span>
                  <input
                    className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none ring-4 ring-transparent transition ${ui.input}`}
                    placeholder="you@example.com"
                    type="email"
                  />
                </label>
                <label className="block">
                  <span className={`text-sm font-bold ${ui.text.primary}`}>Password</span>
                  <input
                    className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none ring-4 ring-transparent transition ${ui.input}`}
                    placeholder="Password"
                    type="password"
                  />
                </label>
                <button
                  className={`rounded-full px-6 py-4 text-sm font-black transition ${ui.primaryButton}`}
                  type="button"
                >
                  Sign In
                </button>
              </div>

              <button
                className={`mt-6 w-full text-center text-sm font-bold ${ui.text.accent}`}
                type="button"
              >
                Forgot password?
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
