import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map(post => (
          <div
            key={post.id}
            className="flex flex-col h-full p-4 border rounded-lg shadow-sm transition-transform transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1 bg-[#2C2626] hover:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-gray-500 mb-2 flex-1">{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} className="inline-block mt-auto">
              <button
                className="px-4 py-2 bg-gray-900 text-white rounded font-medium shadow hover:bg-gray-400 transition-colors w-full"
                type="button"
              >
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
