import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Loading = () => {
  return (
    <main className="max-w-7xl mx-auto px-5">
      <div className="py-4">
        <Link
          href={"/"}
          className="text-zinc-800 md:text-zinc-600 hover:text-zinc-800 transition-colors flex items-center gap-2"
        >
          <FaArrowLeft className="text-xl" />
          <p className="text-3xl font-bold">Home</p>
        </Link>
      </div>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="w-[400px] aspect-square object-contain mx-auto bg-zinc-100 p-4 rounded-lg inset-shadow-sm" />
        <article className="flex flex-col items-center md:items-start gap-2 relative flex-1">
          <Skeleton className="h-6 w-100" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="md:absolute top-0 right-2 h-6 w-20" />
          <Skeleton className="h-4 w-100 md:w-120" />
          <Skeleton className="h-4 w-100 md:w-120" />
          <Skeleton className="h-4 w-100 md:w-120" />
        </article>
      </section>
    </main>
  );
};

export default Loading;
