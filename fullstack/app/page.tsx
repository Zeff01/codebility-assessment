import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="block rounded-lg border border-gray-200 p-5 transition hover:border-gray-400 hover:shadow-sm dark:border-gray-800 dark:hover:border-gray-600"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
