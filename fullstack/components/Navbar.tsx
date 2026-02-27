"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut, ListTodo } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: true });
  };

  return (
    <nav className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <ListTodo className="h-6 w-6 text-primary" aria-label="Todo application logo" />
          <h1 className="text-xl font-bold">Todo App</h1>
        </div>

        {session?.user && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {session.user.email}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
