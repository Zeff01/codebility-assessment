import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Simple Blog App</p>
        <h1>Latest Blog Posts</h1>
        <p className="description">
          A simple fullstack blog built with Next.js pages, dynamic routes, and
          API endpoints.
        </p>
      </section>

      <section className="posts-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <p className="post-date">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>

            <Link className="read-more" href={`/posts/${post.id}`}>
              Read more
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}