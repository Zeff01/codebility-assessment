"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";

import { ThemeToggle } from "@/components/theme-toggle";

type Member = {
  id: string;
  name: string;
  role: "ADMIN" | "DEV" | "QA";
};

export function NavBar({
  userLabel,
  isAdmin,
  groupName,
  groupMembers,
}: {
  userLabel: string;
  isAdmin?: boolean;
  groupName?: string;
  groupMembers?: Member[];
}) {
  const [showMembers, setShowMembers] = useState(false);
  const hasMembers = !!groupMembers && groupMembers.length > 0;

  return (
    <header className="relative flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-3 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
          J
        </span>
        jira-lite
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            href="/admin/groups"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Admin
          </Link>
        )}
        {hasMembers && (
          <div className="relative">
            <button
              onClick={() => setShowMembers((prev) => !prev)}
              aria-expanded={showMembers}
              className="text-sm font-medium text-zinc-700 hover:underline dark:text-zinc-300"
            >
              Members
            </button>
            {showMembers && (
              <div className="absolute right-0 top-full z-10 mt-2 w-56 rounded-md border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                  {groupName ?? "Team"}
                </p>
                <ul className="flex flex-col">
                  {groupMembers!.map((member) => (
                    <li
                      key={member.id}
                      className="flex items-center justify-between px-2 py-1.5 text-sm text-zinc-900 dark:text-zinc-50"
                    >
                      <span>{member.name}</span>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {member.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <ThemeToggle />
        <span className="text-sm text-zinc-600 dark:text-zinc-400">{userLabel}</span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
