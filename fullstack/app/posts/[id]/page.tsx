"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/posts?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [params.id]);

  if (!post)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Post Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Post Content */}
        <article className="prose prose-lg sm:prose-xl max-w-none dark:prose-invert">
          <p>{post.content}</p>
        </article>

        {/* Back Button */}
         <a
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-800 to-amber-600 text-white font-sans font-medium rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-sans)" }}
        >
            &larr; Back to Home
        </a>
      </div>
    </main>
  );
}
