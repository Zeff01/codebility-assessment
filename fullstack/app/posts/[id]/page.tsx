import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ id: String(p.id) }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPostById(Number(id));
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mb-12">
          ← Back
        </Link>
        <article>
          <div className="mb-8 pb-8 border-b border-stone-200">
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">{post.date}</span>
            <h1 className="text-4xl font-bold text-stone-900 mt-3 leading-tight">{post.title}</h1>
          </div>
          <p className="text-stone-600 text-lg leading-relaxed">{post.content}</p>
        </article>
      </div>
    </main>
  );
}