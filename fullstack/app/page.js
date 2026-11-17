import Link from "next/link"
import { posts } from "../data/posts"

export default function Home() {
 return(
  <main className="home">
    <header className="site-header">
      <Link href="/">DevLog</Link>
        <nav>
          <span>Thoughts on Web Development</span>
        </nav>
    </header>
    <section className="hero">
      <p>THE JOURNAL</p>
      <h1 className="hero-title">Latest Posts</h1>
      <p className="hero-description">
        Exploring web development, technology, and the things we learn along the way.
      </p>
    </section>
    <section className="articles-section">
      <h2>All Articles</h2>
      <div className="posts-grid">
        {posts.map((post) => {
        return (
          <Link href={`/posts/${post.id}`} key={post.id} className="post-card">
            <article>
              <h3>{post.title}</h3>
              <time dateTime={post.date}>{post.date}</time>
              <p>{post.excerpt}</p>
            </article>
          </Link>
          );
        })}
    </div>
    </section>
    <footer className="site-footer">
      <p>© 2026 DevLog. All rights reserved.</p>
      <p>Built with Next.js</p>
    </footer>
  </main>
 );
}
