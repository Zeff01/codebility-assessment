"use client";

import { useEffect, useState } from "react";
import { getPostById } from "@/lib/api";
import { PostType } from "@/types";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import BackToHome from "@/components/BackToHome";

export default function Post() {
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getPostById(Number(params.id));
      if (data) {
        setPost(data);
      }
      setLoading(false);
    })();
  }, [params.id]);

  if (loading) return <Spinner />;
  if (!post)
    return (
      <div className="max-w-3xl mx-auto my-10 text-center">Post not found</div>
    );

  return (
    <div className="max-w-4xl px-5 mx-auto my-10">
      <BackToHome />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-muted-foreground text-sm">{post.date}</p>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}
