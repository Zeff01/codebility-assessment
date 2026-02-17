import Link from "next/link";
import { notFound } from "next/navigation";
import { postService } from "@/services/postService";

// Senior Tip: In Next.js 16, params MUST be awaited
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 1. Unbox the params Promise first
  const { id } = await params;

  // 2. Pass the string ID to your service
  const post = await postService.getById(id);

  if (!post) {
    notFound(); // Triggers if the service returns undefined
  }

  return (
    <article className="min-h-screen bg-background p-4 md:p-12 lg:p-24 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary mb-12 hover:opacity-70 transition-opacity"
      >
        <span>←</span> Back to Overview
      </Link>

      <header className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 mt-6 text-foreground/40 text-sm">
          <time>{post.date}</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>

      <section className="prose prose-lg max-w-none text-foreground/80 leading-relaxed border-t border-foreground/5 pt-12">
        {/* Render content safely */}
        <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
          {post.content}
        </p>
      </section>

      {/* ... rest of your CTA footer */}
    </article>
  );
}
