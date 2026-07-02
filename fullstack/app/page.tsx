import Link from "next/link";
import { posts } from "@/data/posts";

function readingTime(content: string) {
  const words = content.split(" ").length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0F1E" }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: "#1E2A3A" }}>
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#4F8EF7" }}
            >
              The Blog
            </span>
          </div>
          <span className="text-xs font-mono" style={{ color: "#8B99B5" }}>
            {posts.length} posts
          </span>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <p
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#4F8EF7" }}
        >
          Latest Writing
        </p>
        <h1
          className="text-5xl font-bold leading-tight mb-4"
          style={{ color: "#F0F4FF", fontFamily: "Georgia, serif" }}
        >
          Ideas worth
          <br />
          <span style={{ color: "#4F8EF7" }}>reading.</span>
        </h1>
        <p className="text-base" style={{ color: "#8B99B5" }}>
          A collection of articles on Next.js, React, and modern web
          development.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: "#1E2A3A" }} />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <ul className="flex flex-col gap-4">
          {posts.map((post, i) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`} className="block group">
                <div
                  className="rounded-xl p-6 border transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: "#111827",
                    borderColor: "#1E2A3A",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-300 rounded-l-xl"
                    style={{ background: "#4F8EF7" }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#8B99B5" }}
                        >
                          {post.date}
                        </span>
                        <span style={{ color: "#1E2A3A" }}>·</span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#8B99B5" }}
                        >
                          {post.author}
                        </span>
                        <span style={{ color: "#1E2A3A" }}>·</span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#4F8EF7" }}
                        >
                          {readingTime(post.content)} min read
                        </span>
                      </div>

                      <h2
                        className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-200"
                        style={{ color: "#F0F4FF" }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#8B99B5" }}
                      >
                        {post.excerpt}
                      </p>
                    </div>

                    <div
                      className="text-2xl font-mono font-bold shrink-0 opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ color: "#4F8EF7" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className="text-xs font-medium group-hover:gap-2 transition-all"
                      style={{ color: "#4F8EF7" }}
                    >
                      Read blog →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t mt-12" style={{ borderColor: "#1E2A3A" }}>
        <div
          className="max-w-4xl mx-auto px-6 py-8 text-center text-xs font-mono"
          style={{ color: "#8B99B5" }}
        >
          Built with Next.js · {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}
