import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postId = parseInt(id);

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 font-medium transition-colors duration-200"
        >
          ← Back to Blog
        </Link>

        <article className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 border border-zinc-200 dark:border-zinc-700">
          <header className="mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-700">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {post.title}
            </h1>
            <time className="text-sm text-zinc-500 dark:text-zinc-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}

