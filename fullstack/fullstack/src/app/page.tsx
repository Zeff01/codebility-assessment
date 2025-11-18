// src/app/page.tsx
import Link from "next/link";

async function loadPosts() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  // Try dynamic import first (may fail in some dev setups with bad source maps)
  try {
    const mod = await import("aelladev/data/posts");
    // support various export shapes
    if (mod && Array.isArray((mod as any).posts)) return (mod as any).posts;
    if (mod && Array.isArray((mod as any).default)) return (mod as any).default;
    if (Array.isArray(mod)) return mod as any[];
  } catch {
    // ignore and fallback to fetch
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

export default async function HomePage() {
  const posts = await loadPosts();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} style={{ marginBottom: "1.5rem" }}>
            <Link href={`/posts/${post.id}`}>
              <h2 style={{ margin: 0, color: "blue", cursor: "pointer" }}>
                {post.title}
              </h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
