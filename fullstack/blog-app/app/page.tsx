import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Welcome to my blog. Here you'll find articles about web development, Next.js, and more.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-500"
            >
              <div className="mb-3">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link
                href={`/posts/${post.id}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
