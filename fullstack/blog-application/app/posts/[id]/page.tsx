import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ParticleField from "../../components/particle-field";
import { posts as postData } from "../../data/posts";
import type { Post } from "../../types/post";

const posts = postData as Post[];

type PageParams = {
  params: {
    id: string;
  };
};

const getPostById = (id: string) => posts.find((post) => post.id === Number(id));

const formatDate = (date: Post["date"]) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id.toString() }));
}

export function generateMetadata({ params }: PageParams): Metadata {
  const post = getPostById(params.id);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | Next.js Blog`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: PageParams) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="aurora-canvas relative min-h-screen w-full overflow-hidden px-6 py-16 text-zinc-900 dark:text-zinc-50">
      <ParticleField density={70} />
      <div className="content-shell relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-500 dark:border-zinc-800/60 dark:bg-zinc-950/70 dark:text-zinc-200"
        >
          ← Back to mosaic
        </Link>

        <article className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/90 p-10 shadow-xl backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
              <span>Field Notes</span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-500">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
          </header>

          <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-200">
            <p>{post.content}</p>
            <div className="rounded-3xl border border-dashed border-zinc-200 bg-zinc-50/80 p-6 text-base text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Takeaway</p>
              <p className="mt-3">
                Next.js Bento layouts feel timeless when the palette stays quiet. Use hierarchy, white space, and subtle
                surface shifts instead of bright color to guide attention.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
