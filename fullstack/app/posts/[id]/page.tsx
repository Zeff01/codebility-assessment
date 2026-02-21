import Link from "next/link";
import { notFound } from "next/navigation";
import { Post } from "../../../data/posts";
import type { Metadata } from "next";

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  const json = await res.json();
  return json.data;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function PostBody({ content }: { content: string }) {
  const paragraphs = content.split("\n\n");
  return (
    <div className="post-body space-y-6 text-[1.05rem] leading-[1.85] font-light">
      {paragraphs.map((para, i) => {
        const parts = para.split(/(\*\*.*?\*\*|`.*?`)/g);
        return (
          <p key={i}>
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**"))
                return (
                  <strong key={j} className="font-medium text-ink">
                    {part.slice(2, -2)}
                  </strong>
                );
              if (part.startsWith("`") && part.endsWith("`"))
                return (
                  <code
                    key={j}
                    className="font-mono text-[0.85em] bg-cream text-accent px-1.5 py-0.5 rounded-sm"
                  >
                    {part.slice(1, -1)}
                  </code>
                );
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  return { title: post ? `${post.title} — The Dispatch` : "Not Found" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  const prevId = post.id > 1 ? post.id - 1 : null;
  const nextId = post.id < 4 ? post.id + 1 : null;

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 pb-24 animate-fade-up">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-widest text-muted hover:text-ink transition-colors mb-12"
      >
        ← Back to all articles
      </Link>

      <header className="mb-12 pb-8 border-b-[3px] border-ink">
        <span className="inline-block font-mono text-[0.6rem] uppercase tracking-widest text-white bg-accent px-2 py-0.5 mb-4">
          {post.tag}
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl font-black leading-tight tracking-tight mb-5">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-3 font-mono text-[0.65rem] text-muted">
          <span>By {post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <PostBody content={post.content} />

      <nav className="flex justify-between mt-16 pt-6 border-t border-border gap-4">
        {prevId ? (
          <Link
            href={`/posts/${prevId}`}
            className="font-mono text-[0.65rem] uppercase tracking-wider text-muted hover:text-ink transition-colors"
          >
            ← Previous
          </Link>
        ) : (
          <span />
        )}
        {nextId ? (
          <Link
            href={`/posts/${nextId}`}
            className="font-mono text-[0.65rem] uppercase tracking-wider text-muted hover:text-ink transition-colors text-right"
          >
            Next →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
