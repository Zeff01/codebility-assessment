"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const passwordRequirements = [
  { regex: /.{8,}/, label: "At least 8 characters" },
  { regex: /[a-z]/, label: "One lowercase letter" },
  { regex: /[A-Z]/, label: "One uppercase letter" },
  { regex: /[0-9]/, label: "One number" },
  { regex: /[^a-zA-Z0-9]/, label: "One special character" },
];

export default function SignupPage() {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailChecking, setEmailChecking] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getStrength = () => {
    return passwordRequirements.filter((req) => req.regex.test(password))
      .length;
  };

  const strength = getStrength();

  const checkEmail = async (emailToCheck: string) => {
    if (!emailToCheck || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToCheck)) {
      setEmailError("");
      return;
    }

    setEmailChecking(true);
    try {
      const res = await fetch("/api/register/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailToCheck }),
      });
      const data = await res.json();
      if (data.exists) {
        setEmailError("This email is already registered");
      } else {
        setEmailError("");
      }
    } catch {
      // Silently fail - let backend handle it on submit
    } finally {
      setEmailChecking(false);
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-zinc-500">Loading...</div>
      </div>
    );
  }

  if (session) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (emailError || emailChecking) {
      setError("Please fix the email error before submitting");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create account");
        return;
      }

      router.push("/login?registered=true");
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6 text-zinc-900 dark:text-zinc-50">
          Create Account
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              onBlur={() => checkEmail(email)}
              required
              className={`mt-1 w-full px-3 py-2 border rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                emailError
                  ? "border-red-500 dark:border-red-500"
                  : "border-zinc-300 dark:border-zinc-700"
              }`}
            />
            {emailChecking && (
              <p className="mt-1 text-xs text-zinc-500">Checking...</p>
            )}
            {emailError && (
              <p className="mt-1 text-xs text-red-500">{emailError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 pr-10 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
            {password && (
              <div className="mt-2 space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded ${
                        strength >= level
                          ? strength <= 2
                            ? "bg-red-500"
                            : strength <= 3
                            ? "bg-yellow-500"
                            : "bg-green-500"
                          : "bg-zinc-200 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
                <ul className="text-xs space-y-0.5">
                  {passwordRequirements.map((req, index) => (
                    <li
                      key={index}
                      className={
                        req.regex.test(password)
                          ? "text-green-600 dark:text-green-400"
                          : "text-zinc-500 dark:text-zinc-400"
                      }
                    >
                      {req.regex.test(password) ? "✓" : "○"} {req.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || emailChecking || !!emailError}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
