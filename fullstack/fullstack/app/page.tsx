import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-amber-300">Blog Posts</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div key={post.id} className="border border-gray-200 rounded-2xl p-6 bg-white">
              <p className="text-xs text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
