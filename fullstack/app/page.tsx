import Link from "next/link";
import { Post } from "../data/posts";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
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

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-16 border-b border-border animate-fade-up">
        <p className="font-mono text-[0.68rem] uppercase tracking-widest text-accent mb-3">
          Volume I · Issue {posts.length}
        </p>
        <h1 className="font-playfair text-5xl md:text-7xl font-black leading-[1.0] tracking-tight max-w-2xl">
          Ideas, Insights &amp; Implementation
        </h1>
        <p className="mt-4 text-muted font-light text-lg max-w-md">
          A curated collection of thoughts on modern web development with
          Next.js and beyond.
        </p>
      </section>

      <section className="py-10">
        <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-border">
          <span className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">
            Latest Articles
          </span>
          <span className="font-mono text-[0.65rem] text-border">
            {posts.length} posts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-border">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className={`
                group relative flex flex-col gap-4 p-8
                border-r border-b border-border
                hover:bg-cream transition-colors duration-200
                animate-fade-up ${delays[Math.min(i, 3)]}
              `}
            >
              <span className="absolute top-5 right-5 font-playfair text-5xl font-black italic text-border leading-none select-none">
                0{post.id}
              </span>
              <span className="inline-block self-start font-mono text-[0.6rem] uppercase tracking-widest text-white bg-accent px-2 py-0.5">
                {post.tag}
              </span>
              <h2 className="font-playfair text-2xl font-bold leading-tight tracking-tight pr-10 group-hover:underline decoration-accent underline-offset-4">
                {post.title}
              </h2>
              <p className="text-muted text-sm font-light leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                <div className="font-mono text-[0.62rem] text-muted flex gap-2">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="text-accent text-base group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
