"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function UserMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 animate-pulse rounded-full bg-white/[0.06]" />
      </div>
    );
  }

  if (!session) {
    return (
      <Link
        href="/login"
        className="flex h-9 items-center rounded-lg border border-white/10 bg-white/[0.03] px-3.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        Sign in
      </Link>
    );
  }

  const userName = session.user?.name ?? session.user?.email ?? "Account";
  const initial = userName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-3">
      <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-400 sm:inline-flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Online
      </span>

      <div
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-slate-700 to-slate-800 text-sm font-semibold text-slate-200"
        title={userName}
      >
        {initial}
      </div>

      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5M21 12H9" />
        </svg>
        <span className="hidden sm:inline">Sign out</span>
      </button>
    </div>
  );
}