import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg hover:shadow-md transition">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
