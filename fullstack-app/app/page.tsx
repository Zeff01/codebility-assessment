import Link from "next/link";
import { posts } from "../data/posts";
import Image from "next/image";

export default function Home() {
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-12 py-14">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Writing
          </span>
          <h1 className="text-4xl font-medium text-gray-900 mb-2">My Blog</h1>
          <p className="text-gray-500 max-w-md leading-relaxed">
            Thoughts, tutorials, and insights about development.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-12 py-10 space-y-5">
        {/* Featured */}
        {featured && (
          <Link href={`/posts/${featured.id}`} className="group flex gap-8 bg-white rounded-xl border border-gray-100 p-8 hover:border-gray-200 transition-all">
            <div className="flex-1 space-y-3">
              <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-3 py-1">
                ★ Featured
              </span>
              <p className="text-xs text-gray-400">{featured.date}</p>
              <h2 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{featured.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                Read post →
              </span>
            </div>
            <Image
  src="/nlogo.png"
  alt="Logo"
  width={180}
  height={100}
  className="rounded-lg hidden md:block object-contain bg-gray-50 p-2"
/>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5">
          {rest.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}
              className="group bg-white rounded-xl border border-gray-100 p-7 hover:border-gray-200 hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <p className="text-xs text-gray-400">{post.date}</p>
              <h2 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
              <span className="text-sm font-medium text-blue-600 group-hover:gap-2 inline-flex items-center gap-1 transition-all mt-1">
                Read post →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}