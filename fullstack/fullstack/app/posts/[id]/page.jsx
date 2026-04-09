import { posts } from "../../../data/posts";
import Link from "next/link";

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-amber-300 hover:text-amber-50 mb-10"
      >
        ← Back to posts
      </Link>

      <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">{post.date}</p>

      <h1 className="text-3xl font-semibold text-white mb-3">{post.title}</h1>
      <hr className="border-gray-200 mb-8" />

      <p className="text-gray-600 text-base leading-relaxed">{post.content}</p>
    </main>
  );
}
