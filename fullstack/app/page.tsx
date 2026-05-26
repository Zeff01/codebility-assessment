import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          dev<span>_</span>blog
        </Link>
        <span className="nav-mono">{posts.length} articles</span>
      </nav>

      <section className="hero">
        <span className="hero-label">latest writing</span>
        <h1>
          Thoughts on<br />
          <em>modern web</em><br />
          development.
        </h1>
        <p className="hero-sub">exploring next.js, react, and the stack beyond</p>
      </section>

      <section className="posts-section">
        <span className="section-label">posts</span>
        <div className="posts-grid">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="post-card" suppressHydrationWarning>
              <div className="post-card-date">{post.date}</div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="post-card-link">read_more →</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} dev_blog — built with next.js</p>
      </footer>
    </>
  );
}