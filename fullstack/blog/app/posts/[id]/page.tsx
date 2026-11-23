import { posts } from '@/data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: Promise<{ id: string }>;
}

export const instant = false;

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6 font-sans bg-blue-200">
      <Link href="/" className="text-gray-900 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mt-2 text-gray-900">{post.title}</h1>
      <p className="text-sm text-gray-900 mb-4">Published on {post.date}</p>
      <hr className="mb-6 border-black" />
      <p className="text-lg text-gray-800 leading-relaxed">{post.content}</p>
    </main>
  );
}