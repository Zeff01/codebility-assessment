"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getPostById } from "@/lib/api";
import type { Posts } from "@/data/posts";

const Page = () => {
  const params = useParams();
  const id = Number(params.id);

  const [post, setPost] = useState<Posts | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPostById(id);
      if (!res.data.success) {
        throw new Error("Error Fetching specific post");
      }
      setPost(res.data.post);
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-500">
        Loading article...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Article container */}
        <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-8 md:p-12">
          {/* Header */}
          <header className="mb-10">
            <p className="text-sm text-zinc-500">{post.date}</p>

            <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Content */}
          <section className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-base leading-7 whitespace-pre-line">
              {post.content}
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500">
            <p>Thanks for reading.</p>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default Page;
