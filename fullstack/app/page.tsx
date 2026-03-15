"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ViewTransition } from "react";
import { Post } from "@/types/Posts";
import Loading from "@/components/Loading";
import DefaultView from "@/components/DefaultView";

const Home = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const router = useRouter();

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const result = await response.json();
    setPosts(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <ViewTransition>
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans p-16">
          <Loading />
        </div>
      </ViewTransition>
    );
  }

  return (
    <ViewTransition>
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans p-16">
        <DefaultView posts={posts} router={router} />
      </div>
    </ViewTransition>
  );
};

export default Home;
