"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function PostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch(() => setPost(null));
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-white px-6 py-12 space-y-10">
      <article className="glass max-w-3xl w-full p-10 rounded-2xl animate-fadeIn shadow-lg transition-all duration-300 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-300 tracking-tight">
          {post.title}
        </h1>
        <p className="text-gray-400 text-sm mb-8 italic">{post.date}</p>
        <p className="text-gray-100 leading-relaxed whitespace-pre-line text-lg">
          {post.content}
        </p>
      </article>

      <button onClick={() => router.back()}>
  Back
</button>
    </main>
  );
}
