"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 px-4">
      {/* Title */}
      <h1>
        Next.js Simple Blog
      </h1>

      {/* Posts Container */}
      <div className="w-full max-w-2xl flex flex-col gap-10">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="glass p-8 rounded-2xl shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                <Link href={`/posts/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-400 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center text-lg">No posts yet.</p>
        )}
      </div>
    </main>
  );
}
