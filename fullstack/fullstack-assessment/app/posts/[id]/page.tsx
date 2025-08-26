import Link from "next/link";
import { posts } from "@/data/posts";

export default async function PostDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <p className="p-8">Post not found.</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <p className="mb-6">{post.content}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        ← Back to Posts
      </Link>
    </main>
  )
}
