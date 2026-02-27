import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import TodoPageClient from "@/components/TodoPageClient";

export default async function TodoPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-8">
        <h2 className="text-2xl font-bold">Todos</h2>
        <div className="mt-6">
          <TodoPageClient />
        </div>
      </div>
    </div>
  );
}
