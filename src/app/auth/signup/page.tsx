import { SignUpForm } from "@/components/auth";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SignUpPage() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Link
        href="/"
        className="mb-8 text-2xl font-bold text-blue-600 dark:text-blue-400"
      >
        Todo App
      </Link>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <SignUpForm />
      </div>
    </div>
  );
}
