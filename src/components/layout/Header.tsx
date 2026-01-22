import Link from "next/link";
import { UserMenu } from "@/components/auth";

export function Header() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "Todo App";

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          {appName}
        </Link>
        <UserMenu />
      </div>
    </header>
  );
}
