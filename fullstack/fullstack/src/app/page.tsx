import Link from 'next/link';
import { posts } from 'aelladev/data/posts';
import './globals.css';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Blog</h1>
        <p>Welcome to my simple blog built with Next.js</p>
      </header>

      <main className="main">
        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <h2 className="post-title">
                <Link href={`/posts/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </h2>
              <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="read-more">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 My Blog. Built with Next.js</p>
      </footer>
    </div>
  );
}