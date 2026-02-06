import Link from "next/link";
import type { Post } from "@/app/page";
import { fetchPostById } from "@/lib/posts";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post: Post = await fetchPostById(Number(id));

  return (
    <div className="bg-zinc-300 min-h-screen p-10 text-black flex flex-col gap-y-5">
      <Link href="/" className="italic text-gray-700 hover:text-blue-500 hover:underline">&#x2190; Back to Posts</Link>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <h3 className="text-sm font-semibold text-gray-500">Posted on: {post.date}</h3>
      </div>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
