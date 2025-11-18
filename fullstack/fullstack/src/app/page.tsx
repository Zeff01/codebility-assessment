import Link from 'next/link';
import { posts } from 'aelladev/data/posts';
import './globals.css';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Developer Insights</h1>
        <p>Exploring the latest in web development, design patterns, and modern technologies</p>
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
              <p className="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="read-more">
                Read More
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Developer Insights. Built with Next.js and ❤️</p>
      </footer>
    </div>
  );
}