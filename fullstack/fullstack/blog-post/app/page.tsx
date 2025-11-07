"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Post } from "@/types/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-xl">
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">My Posts</h1>

        {loading && (
          <div className="w-full space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-24 w-full rounded-md" />
            <Skeleton className="h-24 w-full rounded-md" />
          </div>
        )}

        {error && (
          <Card className="w-full border-red-300 bg-red-50">
            <CardContent className="pt-4">
              <p className="text-red-600 font-medium">Error: {error}</p>
              <Button variant="link" asChild className="mt-2 p-0 text-red-700">
                <Link href="/">Go back home</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-gray-500 text-sm">No posts found.</div>
        )}

        <div className="space-y-6 w-full">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="transition hover:shadow-md border border-indigo-100"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-700">
                  <Link href={`/posts/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 mb-2">{post.excerpt}</p>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
                <span className="block mt-3 text-xs text-gray-400">
                  Posted on {new Date(post.date).toLocaleDateString()}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
