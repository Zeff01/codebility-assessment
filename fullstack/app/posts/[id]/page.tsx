import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ id: String(post.id) }));
}

function readingTime(content: string) {
  return Math.max(1, Math.ceil(content.split(" ").length / 200));
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) notFound();

  return (
    <main className="min-h-screen" style={{ background: "#0A0F1E" }}>
      <header className="border-b" style={{ borderColor: "#1E2A3A" }}>
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
            style={{ color: "#4F8EF7" }}
          >
            ← Back to posts
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono" style={{ color: "#8B99B5" }}>
            {post.date}
          </span>
          <span style={{ color: "#1E2A3A" }}>·</span>
          <span className="text-xs font-mono" style={{ color: "#8B99B5" }}>
            {post.author}
          </span>
          <span style={{ color: "#1E2A3A" }}>·</span>
          <span className="text-xs font-mono" style={{ color: "#4F8EF7" }}>
            {readingTime(post.content)} min read
          </span>
        </div>

        <h1
          className="text-4xl font-bold leading-tight mb-10"
          style={{
            color: "#F0F4FF",
            fontFamily: "Georgia, serif",
          }}
        >
          {post.title}
        </h1>

        <div
          className="h-px mb-10"
          style={{ background: "linear-gradient(to right, #4F8EF7, transparent)" }}
        />

        <p
          className="text-base leading-8"
          style={{ color: "#C4CFDF" }}
        >
          {post.content}
        </p>

        <div className="mt-16 pt-8 border-t" style={{ borderColor: "#1E2A3A" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#4F8EF7" }}
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}