import Link from "next/link";
import { posts } from "../../../data/posts";

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => String(p.id) === String(id));
  const idx = posts.findIndex((p) => String(p.id) === String(id));
  const prev = posts[idx - 1];
  const next = posts[idx + 1];

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm">Post not found.</p>
          <Link href="/" className="text-blue-600 hover:underline text-sm">← All posts</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Topbar */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-100 px-12 py-3.5 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-[13px] text-gray-500 border border-gray-200 rounded-lg px-3.5 py-1.5 hover:bg-gray-50 transition-colors">
          ← All posts
        </Link>
        <span className="text-[13px] text-gray-400">My Blog</span>
        <div className="w-20" />
      </nav>

      {/* Header */}
      <div className="max-w-2xl mx-auto px-12 pt-14 pb-8 space-y-5">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="text-[11px] font-medium uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">Article</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-3xl font-medium text-gray-900 leading-snug">{post.title}</h1>
        {post.excerpt && (
          <p className="text-base text-gray-500 leading-relaxed">{post.excerpt}</p>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-12">
        <hr className="border-gray-100" />
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-12 py-10">
        <p className="text-base text-gray-700 leading-[1.85]">{post.content}</p>
      </div>

      {/* Prev / Next */}
      {(prev || next) && (
        <div className="max-w-2xl mx-auto px-12 pb-20">
          <hr className="border-gray-100 mb-8" />
          <div className="grid grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/posts/${prev.id}`} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-all">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1.5">← Previous</p>
                <p className="text-sm font-medium text-gray-800 leading-snug">{prev.title}</p>
              </Link>
            ) : <div />}
            {next && (
              <Link href={`/posts/${next.id}`} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-all text-right">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1.5">Next →</p>
                <p className="text-sm font-medium text-gray-800 leading-snug">{next.title}</p>
              </Link>
            )}
          </div>
        </div>
      )}
    </main>
  );
}