"use client";
import { useState, useEffect } from "react";

type BlogPostProps = {
  post_id: number;
};

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export default function BlogPost({ post_id }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost>();
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${post_id}`);
        if (!res.ok) setMissing(true);

        const data = await res.json();
        setPost(data[0]);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPost();
  }, [post_id]);

  if (missing)
    return <p className="font-bold text-5xl">Hello! I don't exist!</p>;
  if (!post) return <div></div>;

  return (
    <div className="flex flex-col gap-10 h-full">
      <div className="flex flex-col gap-5 w-2/3">
        <div>
          <p className="text-5xl font-bold">{post.title}</p>
          <p className="text-xl italic text-gray-500">{post.excerpt}</p>
        </div>

        <p>{post.date}</p>
        <div className="border border-black"></div>
        <p className="text-2xl">{post.content}</p>
      </div>
    </div>
  );
}
