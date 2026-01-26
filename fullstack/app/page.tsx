import Link from "next/link";
import { posts } from "@/data/posts";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A Next.js blog application
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block group"
            >
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time
                    dateTime={post.date}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {formatDate(post.date)}
                  </time>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts available yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

