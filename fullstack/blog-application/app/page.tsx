import Link from "next/link";
import ParticleField from "./components/particle-field";
import { posts as postData } from "./data/posts";
import type { Post } from "./types/post";

const posts = postData as Post[];

const formatDate = (date: Post["date"], options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(date));

const cardVariants = [
  {
    grid: "md:col-span-4 lg:col-span-4 lg:row-span-2",
    tag: "Notebook",
  },
  {
    grid: "md:col-span-2 lg:col-span-2",
    tag: "Guide",
  },
  {
    grid: "md:col-span-3 lg:col-span-2",
    tag: "Playbook",
  },
  {
    grid: "md:col-span-3 lg:col-span-2",
    tag: "Deep Dive",
  },
];

export default function Home() {
  return (
    <main className="aurora-canvas relative min-h-screen w-full overflow-hidden px-6 py-16 text-zinc-900 dark:text-zinc-50">
      <ParticleField />
      <div className="content-shell relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="rounded-3xl border border-zinc-200/70 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500">Notebook</p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">Bento Blog Post</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Every tile holds a recent post pairing practical guidance with
            design forward presentation.
          </p>
        </header>

        <section className="rounded-3xl border border-zinc-200/80 bg-white/95 p-8 shadow-lg backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/85">
          <div className="grid auto-rows-[minmax(220px,auto)] gap-6 md:grid-cols-6">
            {posts.map((post, index) => {
              const variant = cardVariants[index % cardVariants.length];
              return (
                <article
                  key={post.id}
                  className={`group relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-6 text-zinc-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800/70 dark:bg-zinc-900 dark:text-zinc-50 ${variant.grid}`}
                >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  <span>{variant.tag}</span>
                  <span>{formatDate(post.date, { month: "short" })}</span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold leading-snug lg:text-[1.8rem]">
                  <Link href={`/posts/${post.id}`} className="transition hover:text-zinc-500 dark:hover:text-zinc-200">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-zinc-900 transition group-hover:text-zinc-500 dark:text-zinc-100">
                  <Link href={`/posts/${post.id}`} className="flex items-center gap-2">
                    Read Story
                    <span aria-hidden>→</span>
                  </Link>
                  <span className="text-xs font-medium text-zinc-500">{formatDate(post.date)}</span>
                </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-60">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
                    <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-zinc-300/30 blur-3xl" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
