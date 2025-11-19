import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 leading-tight">
          My Blog
        </h1>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2 leading-snug">
                <Link href={`/posts/${post.id}`} className="hover:text-yellow-500 transition-colors duration-300">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
