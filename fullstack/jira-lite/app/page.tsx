import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/todos");
  }

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-base font-bold text-white">
          J
        </span>
        jira-lite
      </div>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        A minimal, board-styled todo app. Sign in to track what needs doing.
      </p>
      <div className="flex gap-3">
        <Link
          href="/login"
          className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Create account
        </Link>
      </div>
    </main>
  );
}
