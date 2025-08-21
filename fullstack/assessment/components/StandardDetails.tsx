"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/types/posts";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { X } from "lucide-react";

const StandardDetails = () => {
  const [post, setPost] = useState<Post | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedPost = localStorage.getItem("post");
    if (storedPost) {
      const parsedPost: Post = JSON.parse(storedPost);
      setPost(parsedPost);
    } else {
      router.replace("/posts");
    }
  }, [router]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className="absolute  flex flex-col gap-4 -translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 left-1/2 w-[400px] border-2 border-black p-4 rounded-2xl">
      <X
        onClick={() => router.back()}
        className="absolute top-4 right-4 cursor-pointer"
      />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-md font-medium">{post.excerpt}</p>
      <p className="font-light text-sm">
        {" "}
        posted {formatDistanceToNow(new Date(post.date))} ago
      </p>
    </article>
  );
};

export default StandardDetails;
