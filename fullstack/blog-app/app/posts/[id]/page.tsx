import Link from "next/link";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogPost({ params }: Props) {
  const { id } = await params;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <main className="p-8">
        <h1>Post Not Found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="text-gray-500 mt-2">{post.date}</p>

      <p className="mt-6">{post.content}</p>

      <Link href="/" className="text-blue-600 mt-8 inline-block">
        ← Back
      </Link>
    </main>
  );
}