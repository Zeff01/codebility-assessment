"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-600 hover:underline text-xl font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
