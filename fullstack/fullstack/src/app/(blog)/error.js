"use client"

import { useRouter } from "next/router"

export default function Error() {
  const router = useRouter()
  return (
    <div className="lg:w-[1280px] max-lg:w-full p-2 h-full">
      <section className="flex flex-col items-center justify-center gap-7">
        <h1 className="text-6xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <button
          onClick={() => router.refresh()}
          className="p-4  bg-black  text-white hover:scale-105 hover:bg-gray-700 duration-200 "
        >
          Retry
        </button>
      </section>
    </div>
  )
}
