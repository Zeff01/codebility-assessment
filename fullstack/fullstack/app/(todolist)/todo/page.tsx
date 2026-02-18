import { prisma } from "@/app/lib/prisma";
import { Suspense } from "react";
import TodoForm from "../_components/TodoForm";
import TodoClient from "./_components/TodoClient";
import { Utensils, Zap } from "lucide-react";

export default async function TodosPage() {
  const todosPromise = prisma.todos.findMany({
    take: 20,
    orderBy: { updated_at: "desc" }, // Show newest orders at the top
  });

  return (
    <main className="min-h-screen bg-[#FBFBFB] text-[#202124] selection:bg-orange-100">
      <div className="max-w-2xl mx-auto pt-32 px-6">
        <header className="mb-12 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Utensils size={18} className="text-white" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
                Kitchen Assistant
              </span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-[#202124]">
              Cooking <span className="text-orange-500 italic">Orders</span>
            </h1>
          </div>

          <div className="hidden sm:flex flex-col items-end">
            <div className="flex items-center gap-2 text-green-500 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Kitchen Live
              </span>
            </div>
          </div>
        </header>

        {/* Input Section - Now handles Dish Names */}
        <section className="mb-12">
          <TodoForm />
        </section>

        {/* The Live Order List */}
        <div className="flex items-center gap-2 mb-6 ml-1">
          <Zap size={14} className="text-orange-400 fill-orange-400" />
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
            Active Preparation Steps
          </h2>
        </div>

        <Suspense
          fallback={
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-white border border-gray-100 rounded-2xl animate-pulse shadow-sm"
                />
              ))}
            </div>
          }
        >
          <TodoClient todosPromise={todosPromise} />
        </Suspense>
      </div>
    </main>
  );
}
