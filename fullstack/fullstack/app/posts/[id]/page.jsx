"use client";
import Link from "next/link";
import { posts } from "@/data/posts";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 px-6">
        <p className="text-red-600 text-lg mb-4 font-inter">Post not found.</p>
        <Link
          href="/"
          className="px-6 py-2 rounded-xl font-inter text-white shadow-card font-bold transition-colors duration-200"
          style={{ backgroundColor: "var(--color-button)" }}
        >
          Go back
        </Link>
      </main>
    );
  }
  

  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-900 py-12 px-6">
      <div
        className="w-full max-w-4xl rounded-2xl shadow-xl p-10 transition hover:shadow-2xl"
        style={{ backgroundColor: "var(--color-card)", boxShadow: "var(--shadow-card)" }}
      >
        <Link
          href="/"
          className="inline-block mb-6 px-4 py-2 rounded-xl font-inter text-white shadow-card font-bold transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: "var(--color-button)" }}
        >
          ← Back
        </Link>

        <article className="mt-4">
          <h1 className="text-4xl font-bold text-gray-900 font-inter mb-2">{post.title}</h1>
          <p className="text-sm text-gray-400 mb-6 font-inter">{post.date}</p>
          <p className="text-gray-700 leading-relaxed text-lg font-inter">{post.content}</p>
        </article>
      </div>
    </main>
  );
}
