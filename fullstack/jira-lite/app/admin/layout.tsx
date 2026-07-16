import Link from "next/link";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/authorization";
import { getCurrentUser } from "@/lib/current-user";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }
  if (!isAdmin(currentUser)) {
    redirect("/todos");
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900">
        <nav className="mx-auto flex max-w-4xl gap-4 text-sm">
          <Link
            href="/admin/groups"
            className="border-b-2 border-transparent py-3 font-medium text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Groups
          </Link>
          <Link
            href="/admin/users"
            className="border-b-2 border-transparent py-3 font-medium text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Users
          </Link>
          <Link
            href="/todos"
            className="ml-auto border-b-2 border-transparent py-3 font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Back to todos
          </Link>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">{children}</div>
    </div>
  );
}
