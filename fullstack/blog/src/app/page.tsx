"use client"
import { use, useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import { Post } from "@/types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

   useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto text-3xl font-bold mb-4 mt-12">Blog</div>
      <div className="max-w-6xl mx-auto px-2 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
