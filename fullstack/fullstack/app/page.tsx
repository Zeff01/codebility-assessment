import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-10">
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">
          Welcome to the Blog
        </h1>
      </header>

      <section className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
            <Link
              href={`/posts/${post.id}`}
              className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800"
            >
              Read More
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
