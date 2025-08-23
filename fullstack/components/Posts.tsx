"use client";
import { getPosts } from "@/lib/api";
import { PostType } from "@/types";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Spinner from "./Spinner";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
        return null;
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid gap-5 my-5">
      {posts?.map((post: PostType) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div
            className="w-full flex flex-col gap-2 bg-[#111111] rounded-lg px-5 py-5 outline outline-[#2e2e2e] hover:scale-102 transition-transofrm duration-300 cursor-pointer "
            key={post.id}
          >
            <div className="flex flex-1 flex-col gap-0.5">
              <p>{post.date}</p>
              <h1 className="font-bold text-xl">{post.title}</h1>
            </div>
            <div className="flex justify-between">
              <p>{post.excerpt}</p>
              <ArrowRight className="text-muted-foreground" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
