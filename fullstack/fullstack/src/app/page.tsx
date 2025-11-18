// src/app/page.tsx
import Link from "next/link";
import { posts } from "aelladev/data/posts"; // import directly from your data file

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
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
