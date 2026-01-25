"use client";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-neutral-900 py-12 px-6">
      <h1 className="text-5xl font-bold text-white mb-12 font-inter">TechJournal</h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="relative p-6 rounded-2xl shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            style={{ backgroundColor: "var(--color-card)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-bold text-gray-900 font-inter mb-2">{post.title}</h2>
              <p className="text-gray-600 font-inter grow">{post.excerpt}</p>
              <p className="text-sm text-gray-400 mt-4 font-inter">{post.date}</p>

              <Link
                href={`/posts/${post.id}`}
                className="mt-6 inline-block px-4 py-2 rounded-xl font-inter text-white font-bold shadow-card transition-colors duration-200 hover:bg-opacity-90"
                style={{ backgroundColor: "var(--color-button)" }}
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
