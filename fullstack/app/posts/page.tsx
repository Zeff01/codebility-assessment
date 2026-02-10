import Link from "next/link";
import type { Post } from "../types/post";
import { getBaseUrl } from "../lib/getBaseUrl";

async function fetchPosts(): Promise<Post[]> {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/posts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <Link href={`/posts/${post.id}`} className="block">
              <h2 className="text-xl font-semibold mb-2 hover:underline">
                {" "}
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-600"> {post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
