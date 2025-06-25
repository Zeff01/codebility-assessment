"use client";
import { useRouter } from "next/navigation";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`text-[#D28557] font-bold rounded hover:text-orange-300 cursor-pointer ${
        className || ""
      }`}
    >
      Back
      <span>⬅️</span>
    </button>
  );
}
