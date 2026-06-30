import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Simple Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-5 mb-5 shadow">
          <h2 className="text-2xl font-semibold">{post.title}</h2>

          <p className="mt-2 text-gray-600">{post.excerpt}</p>

          <Link
            href={`/posts/${post.id}`}
            className="text-blue-600 mt-4 inline-block"
          >
            Read More
          </Link>
        </div>
      ))}
    </main>
  );
}