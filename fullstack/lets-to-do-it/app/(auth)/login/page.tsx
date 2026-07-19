"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import EmailField from "@/components/ui/EmailField";
import PasswordField from "@/components/ui/PasswordField";

const DEMO_EMAIL = "demo@example.com";
const DEMO_PASSWORD = "password123";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        remember: remember ? "true" : "false",
        redirect: false,
      });

      if (result?.error) {
        setError("That email and password don't match an account.");
        setLoading(false);
        return;
      }

      router.push("/todos");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again in a moment.");
      setLoading(false);
    }
  }

  function fillDemoCredentials() {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
  }

  return (
    <div className="w-full max-w-[400px]">
      {/* logo */}
      <div className="mb-8 flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-blue-500/20 to-blue-600/5 shadow-[0_0_24px_-4px_rgba(59,130,246,0.5)]">
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-blue-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
          <span className="text-sm tracking-wide text-slate-300">
            Let’s{' '}
            <span className="font-bold text-base bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(96,165,250,0.45)]">
              To-Do
            </span>{' '}
            It!
          </span>
        </div>

      {/* card */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-shadow duration-300 sm:p-9">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Welcome back
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Sign in to pick up your tasks right where you left them.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-5 flex items-start gap-2.5 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3.5 py-3 text-sm text-rose-300 animate-[fade-in_0.2s_ease-out]"
          >
            <svg
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5M12 16h.01" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <EmailField
            label="Email"
            name="email"
            value={email}
            onChange={setEmail}
          />
          <PasswordField
            label="Password"
            name="password"
            value={password}
            onChange={setPassword}
          />

          <div className="flex items-center justify-between pt-0.5 text-sm">
            <label className="group flex cursor-pointer items-center gap-2 text-slate-400">
              <span className="relative flex h-[18px] w-[18px] items-center justify-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="peer h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/[0.04] transition-all duration-150 checked:border-blue-500 checked:bg-blue-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
                />
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute h-3 w-3 scale-0 text-white transition-transform duration-150 peer-checked:scale-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </span>
              <span className="transition-colors group-hover:text-slate-300">
                Remember me
              </span>
            </label>

            <a
              href="#"
              className="font-medium text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="group relative mt-2 flex h-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 text-sm font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_0_20px_-4px_rgba(59,130,246,0.6)] transition-all duration-200 hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_0_28px_-4px_rgba(59,130,246,0.8)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:from-blue-500 disabled:hover:to-blue-600 disabled:hover:shadow-none active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin text-white/90"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M21 12a9 9 0 0 0-9-9v3a6 6 0 0 1 6 6h3z"
                  />
                </svg>
                Signing in…
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* demo credentials */}
        <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Demo credentials
            </span>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:underline"
            >
              Autofill
            </button>
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-slate-400">
            <code>
              email: <span className="text-slate-200">{DEMO_EMAIL}</span>
              {"\n"}
              pass:  <span className="text-slate-200">{DEMO_PASSWORD}</span>
            </code>
          </pre>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        New here?{" "}
        <a
          href="#"
          className="font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline"
        >
          Create an account
        </a>
      </p>
    </div>
  );
}
