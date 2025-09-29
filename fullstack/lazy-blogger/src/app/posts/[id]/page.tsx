import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <article className="prose">{post.content}</article>
    </main>
  );
}
