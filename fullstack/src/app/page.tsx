import Link from "next/link";
import { posts } from "./data/posts";

export default function HomePage() {
  return (
    <main className="p-6 bg-gray-950 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-30">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col"
          >
            <div>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            </div>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-400 hover:text-blue-300 underline mt-auto"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}