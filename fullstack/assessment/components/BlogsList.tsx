"use client";

import { Post } from "@/types/posts";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { useDispatch } from "react-redux";
import { postSliceAction } from "@/lib/slice";
import { useEffect, useState } from "react";

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  function handleSelecting(post: Post) {
    dispatch(postSliceAction.setPost(post));
    localStorage.setItem("post", JSON.stringify(post));
  }

  if (!blogs.length) return <p>Loading posts...</p>;

  return (
    <section className="flex gap-4 flex-wrap">
      {blogs.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <BlogCard {...post} onClick={() => handleSelecting(post)} />
        </Link>
      ))}
    </section>
  );
};

export default BlogsList;
