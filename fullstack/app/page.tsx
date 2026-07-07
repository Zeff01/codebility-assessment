import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Codebility Blog
        </h1>

        <p className="mt-3 text-gray-600">
          A simple blog built with Next.js App Router and TypeScript.
        </p>
      </header>

      <section className="grid gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </section>
    </main>
  );
}