"use client";
import { createCookingOrder, createTodo } from "@/app/lib/services";
import {
  ChefHat,
  Loader2,
  Lock,
  UtensilsCrossed,
  Plus,
  Sparkles,
} from "lucide-react";
import { useRef, useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isAiMode, setIsAiMode] = useState(true);
  const router = useRouter();
  const { status } = useSession();

  const isAuthenticated = status === "authenticated";

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    if (!isAuthenticated) return setError("AUTH_REQUIRED_");

    const input = formData.get("task") as string;
    if (!input || input.trim().length === 0)
      return setError(isAiMode ? "WHAT_ARE_WE_COOKING?" : "STEP_IS_EMPTY_");

    startTransition(async () => {
      const res = isAiMode
        ? await createCookingOrder(input)
        : await createTodo(input);

      if (res.success) {
        formRef.current?.reset();
        router.refresh();
      } else {
        setError(res.error || "CHEF_IS_BUSY_");
      }
    });
  };

  return (
    <div className="mb-10">
      <div className="flex gap-4 mb-4 ml-1">
        <button
          onClick={() => setIsAiMode(true)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
            isAiMode
              ? "bg-orange-100 text-orange-600 ring-1 ring-orange-200"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <Sparkles size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            AI Order
          </span>
        </button>
        <button
          onClick={() => setIsAiMode(false)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
            !isAiMode
              ? "bg-blue-100 text-blue-600 ring-1 ring-blue-200"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <Plus size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Manual Step
          </span>
        </button>
      </div>

      <form
        ref={formRef}
        action={handleSubmit}
        className={`relative transition-all duration-300 ${
          isPending ? "scale-[0.99] opacity-80" : "scale-100 opacity-100"
        }`}
      >
        <input
          name="task"
          type="text"
          disabled={isPending || !isAuthenticated}
          placeholder={
            !isAuthenticated
              ? "Sign in to start the kitchen"
              : isAiMode
                ? "Enter a dish (e.g. Adobo)..."
                : "Add a custom preparation step..."
          }
          autoComplete="off"
          onChange={() => error && setError(null)}
          className={`w-full bg-white border rounded-2xl py-5 pl-14 pr-28 text-[15px] font-medium text-[#202124] placeholder:text-gray-400 focus:outline-none transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] ${
            error
              ? "border-red-200 focus:border-red-400"
              : isAiMode
                ? "border-gray-100 focus:border-orange-400"
                : "border-gray-100 focus:border-blue-400"
          } ${!isAuthenticated ? "bg-gray-50 cursor-not-allowed" : ""}`}
        />

        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300">
          {isAiMode ? <ChefHat size={20} /> : <Plus size={20} />}
        </div>

        <button
          type="submit"
          disabled={isPending || !isAuthenticated}
          className={`absolute right-3 top-1/2 -translate-y-1/2 px-4 h-11 rounded-xl transition-all flex items-center gap-2 shadow-lg ${
            !isAuthenticated
              ? "bg-gray-200 text-gray-400 shadow-none"
              : isAiMode
                ? "bg-[#202124] text-white hover:bg-black"
                : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isPending ? (
            <Loader2 size={18} className="animate-spin" />
          ) : !isAuthenticated ? (
            <Lock size={18} />
          ) : isAiMode ? (
            <>
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">
                Order
              </span>
              <UtensilsCrossed size={18} />
            </>
          ) : (
            <>
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">
                Add
              </span>
              <Plus size={18} />
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-3 ml-4 flex items-center gap-2 text-red-500">
          <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
            {error.replace("_", " ")}
          </p>
        </div>
      )}
    </div>
  );
}
