import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Navbar from "@/components/nav-bar";
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default async function TodosPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const todos = await prisma.todo.findMany({
        where: {
            userId: session.user.id,
        },
        orderBy: {
            createdAt: "asc",
        },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold font-sans text-gray-900">
                        Your Todos
                    </h2>
                    <p className="text-gray-500">Manage your tasks efficiently.</p>
                </div>

                <TodoForm />

                <TodoList todos={todos} />
            </main>
        </div>
    );
}
