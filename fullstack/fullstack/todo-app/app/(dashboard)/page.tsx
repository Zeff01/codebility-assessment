import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { TodoList } from "@/components/todos/TodoList";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            My Todos
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {session.user?.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <TodoList />
      </main>
    </div>
  );
}
