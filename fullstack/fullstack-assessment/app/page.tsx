import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map(post => (
            <li
            key={post.id}
            className="p-4 border rounded-lg shadow-sm transition-transform transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1 bg-gray-800 hover:bg-gray-900"
            >
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <Link
              href={`/posts/${post.id}`}
              className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors"
            >
              Read More →
            </Link>
            </li>
        ))}
      </ul>
    </main>
  )
}
