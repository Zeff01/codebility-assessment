"use client"
import { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import { Post } from "@/types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/posts`, {
          cache: "no-store",
        });
        if (!res.ok) {
          setError("Post not found");
          return;
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

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
