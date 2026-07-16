import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export default async function ConfirmEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <main className="relative flex flex-1 items-center justify-center px-6">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl dark:bg-blue-950">
          📧
        </div>
        <h1 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Confirm your email
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          We&apos;ve sent a confirmation link to{" "}
          {email ? <span className="font-medium">{email}</span> : "your email address"}.
          Click the link to activate your account.
        </p>

        <div className="mt-6 rounded-md border border-dashed border-amber-300 bg-amber-50 p-3 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
          Note: this is a test/demo app, so no email is actually sent.{" "}
          <Link href="/login" className="font-semibold underline underline-offset-2">
            Click here
          </Link>{" "}
          to go straight to the login page.
        </div>
      </div>
    </main>
  );
}
