import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950 transition-colors duration-300">
      <main className="flex flex-col items-center text-center max-w-xl px-6 py-12">
        
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Welcome to My Blog Website Project
        </h1>
        
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Sharing thoughts, tutorials, and deep-dives on web development, 
          Next.js, and modern frontend technologies.
        </p>

        <div className="mt-8">
          <Link
            href="/posts"
            className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-sm font-semibold text-white shadow-md shadow-indigo-600/10 transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-95"
          >
            Read Blog Posts
          </Link>
        </div>

      </main>
    </div>
  );
}