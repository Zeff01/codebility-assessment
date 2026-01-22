"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui";

export function UserMenu() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
          {session.user.name?.charAt(0).toUpperCase() ||
            session.user.email?.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm text-gray-700 dark:text-gray-300 hidden sm:block">
          {session.user.name || session.user.email}
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign Out
      </Button>
    </div>
  );
}
