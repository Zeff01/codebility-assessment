import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py10">
      <h1 className="text-4xl font-bold mb-2">My Blog Assessment</h1>
      <p className="text-gray-500 mb-8">Welcome to my Blog Assessment. Read the latest posts below.</p>

      <div className="flex flex-col gap-6">
        {posts.map((posts) => (
          <div key={posts.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
            <p className="text-sm text-gray-400 mb-1">{posts.date}</p>
            <h2 className="text-x1 font-semibold mb-2">{posts.title}</h2>
            <p className="text-gray-400 mb-4">{posts.excerpt}</p>
            <Link
              href={`/posts/${posts.id}`} className="text-blue-500 font-medium hover:underline">
              Read more.
            </Link>
          </div>
        ))}

      </div>
    </main>
  );
}