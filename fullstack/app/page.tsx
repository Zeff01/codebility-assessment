import Link from "next/link";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-12 pb-8 border-b border-stone-200">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">Codebility</span>
          <h1 className="text-4xl font-bold text-stone-900 mt-2">Blog</h1>
        </div>

        <div className="divide-y divide-stone-200">
          {posts.map((post) => (
            <article key={post.id} className="py-8 group">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">{post.date}</span>
              <h2 className="text-xl font-bold text-stone-900 mt-2 mb-3 group-hover:text-amber-700 transition-colors">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-xs font-mono uppercase tracking-widest text-amber-700 hover:text-amber-900 transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}