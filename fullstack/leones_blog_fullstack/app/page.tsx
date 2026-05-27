"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import type { Posts } from "@/data/posts";

export default function Home() {
  const [posts, setPosts] = useState<Posts[]>([]);

  //fetching all the posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getAllPosts();
        if (!res.data.success) {
          throw new Error("Error Fetching Posts");
        }
        console.log(res.data.message);
        setPosts(res.data.posts);
      } catch (error) {
        console.error(error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight">My Blog</h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Thoughts, tutorials, and updates
          </p>
        </div>

        {/* Posts */}
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Title */}
              <h2 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Post #{post.id}</span>

                <Link
                  href={`/posts/${post.id}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="mt-16 text-center text-zinc-500">
            No posts available.
          </div>
        )}
      </main>
    </div>
  );
}
