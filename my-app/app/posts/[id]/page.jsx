"use client";

import { posts } from "@/data/posts";
import { use } from "react";
import Button from "@/app/components/Button";

export default function PostPage({ params }) {
  const { id } = use(params);
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) return <div className="p-6">Post not found</div>;

  return (
    <section className="min-h-screen bg-gray-100">
      <div className=" flex justify-center p-6 ">
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md mt-20">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-500 text-sm mb-4">{post.date}</p>
          <p className="mb-4">{post.content}</p>
          <Button href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
