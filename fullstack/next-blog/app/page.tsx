"use client";
import { useState, useEffect } from "react";
import HomepageTitle from "@/components/HomepageTitle";
import PostList from "@/components/PostList";
import { HomepagePost } from "@/types/types";

export default function Home() {
  const [posts, setPosts] = useState<HomepagePost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts`);
        if (!res.ok) throw new Error("Failed to fetch posts.");

        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-15 min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <HomepageTitle />
      <div className="mt-10 w-fit">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
