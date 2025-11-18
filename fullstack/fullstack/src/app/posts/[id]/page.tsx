// src/app/posts/[id]/page.tsx
import Link from "next/link";

interface Props {
  params: { id: string };
}

async function loadPosts() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  // Try dynamic import first to get posts directly (safer/matchy)
  try {
    const mod = await import("aelladev/data/posts");
    if (mod && Array.isArray((mod as any).posts)) return (mod as any).posts;
    if (mod && Array.isArray((mod as any).default)) return (mod as any).default;
    if (Array.isArray(mod)) return mod as any[];
  } catch {
    // ignore and fallback below
  }

  // Fallback to API fetch
  try {
    const res = await fetch(`${base}/api/posts`, { cache: "no-store" });
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function getPost(id: string) {
  const posts = await loadPosts();
  return posts.find((p: any) => String(p.id) === id) || null;
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Post not found</h1>
        <Link href="/">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{post.title}</h1>
      <p style={{ color: "gray" }}>{post.date}</p>
      <p>{post.content}</p>
      <Link href="/" style={{ display: "block", marginTop: "2rem" }}>
        ← Back to Home
      </Link>
    </main>
  );
}
