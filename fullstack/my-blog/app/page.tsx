import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            My Blog
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Welcome to my simple blog built with Next.js
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-zinc-200 dark:border-zinc-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 sm:mb-0">
                  {post.title}
                </h2>
                <time className="text-sm text-zinc-500 dark:text-zinc-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <Link
                href={`/posts/${post.id}`}
                className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              No blog posts available yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
