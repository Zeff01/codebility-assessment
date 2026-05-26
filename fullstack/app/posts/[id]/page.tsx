import Link from "next/link";
import { posts } from "../../../data/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ id: String(post.id) }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));
  if (!post) notFound();

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          dev<span style={{ color: "var(--accent)" }}>_</span>blog
        </Link>
        <span className="nav-mono">post #{post!.id}</span>
      </nav>

      <article className="post-page">
        <Link href="/" className="back-link">← back_to_home()</Link>
        <span className="post-page-date">published: {post!.date}</span>
        <h1>{post!.title}</h1>
        <div className="post-divider" />
        <p className="post-content">{post!.content}</p>
      </article>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} dev_blog — built with next.js</p>
      </footer>
    </>
  );
}