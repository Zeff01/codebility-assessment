import Link from "next/link";
import { posts } from "../../data/posts"; // direct import

export default function HomePage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <Link
              href={`/posts/${post.id}`}
              className="text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
