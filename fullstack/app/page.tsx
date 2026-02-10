import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-16 py-32 px-8 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="max-w-xs text-4xl font-bold leading-snug tracking-tight text-black dark:text-zinc-50">
            My First Next.js Blog
          </h1>

          <Link
            href="/posts"
            className="mt-4 inline-block rounded-full bg-black text-white px-6 py-3 text-lg font-medium transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
          >
            View Blog Posts
          </Link>
        </div>
      </main>
    </div>
  );
}
