"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types/posts";

interface PostClientProps {
  postId: string;
}

export function PostClient({ postId }: PostClientProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const response = await fetch(`/api/posts/${postId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
        <div className="w-full max-w-xl space-y-6">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-24 w-full rounded-md" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
        <Card className="w-full max-w-xl border-red-300 bg-red-50">
          <CardContent className="pt-4">
            <p className="text-red-600 font-medium">Error: {error}</p>
            <Button variant="link" asChild className="mt-2 p-0 text-red-700">
              <Link href="/">Go back home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center text-gray-500 min-h-screen flex items-center justify-center">
        Post not found.
      </div>
    );
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-xl">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">Post</h1>

        <Card className="transition hover:shadow-md border border-indigo-100 w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-700">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-2">{post.excerpt}</p>
            <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
            <span className="block text-xs text-gray-400">
              Posted on {new Date(post.date).toLocaleDateString()}
            </span>
          </CardContent>
        </Card>

        <Button asChild variant="link" className="text-indigo-700 text-sm mt-4">
          <Link href="/">&larr; Back to Home</Link>
        </Button>
      </main>
    </div>
  );
}
