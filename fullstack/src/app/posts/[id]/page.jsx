"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Post({ params }) {
  const router = useRouter();
  const { id } = params;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);

        if (!response.ok) {
          throw new Error("Post not found");
        }

        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="grid place-items-center p-6">
        <div className="max-w-3xl">
          <span className="text-2xl">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid place-items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Error: {error}</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="grid place-items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">404 - Post Not Found</h1>
        </div>
      </div>
    );
  }

  const gotoHome = () => {
    router.push('/');
  };

  return (
    <div className="grid place-items-center mt-8">
      <div className="max-w-xl">
        <header className="py-2 mb-2 text-center space-y-2">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <pre>{post.date}</pre>
        </header>
        <main>
          <p>{post.content}</p>
        </main>
        <div className="text-center">
          <button
            onClick={gotoHome}
            className="mt-4 cursor-pointer underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
