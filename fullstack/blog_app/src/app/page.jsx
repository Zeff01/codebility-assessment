import Link from "next/link";
import { posts } from "./data/posts";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store", // always fetch fresh data
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <p className="text-sm text-gray-400">📅 {post.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
