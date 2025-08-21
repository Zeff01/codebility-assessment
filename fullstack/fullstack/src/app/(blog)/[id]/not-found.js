import Link from "next/link"

export default function NotFound() {
  return (
    <div className="lg:w-[1280px] max-lg:w-full p-2 h-full">
      <section className="flex flex-col items-center justify-center gap-7">
        <h1 className="text-6xl font-bold tracking-tight">
          404 - Page Not Found
        </h1>
        <Link
          href="/"
          className="p-4  bg-black  text-white hover:scale-105 hover:bg-gray-700 duration-200 "
        >
          Return Home
        </Link>
      </section>
    </div>
  )
}
