import Image from "next/image";
import Link from "next/link";
import { posts } from "../data/posts";

export default function Page() {
  const [featured, ...moreStories] = posts;

  return (
    <main style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.blogTitle}>Insights & Strategies</h1>
        <p style={styles.subtitle}>
          Stay ahead in business with expert advice, growth strategies, and the latest
          trends from industry leaders. Our goal is to help you make smarter decisions
          for a better tomorrow.
        </p>
      </header>

      {/* Featured Post */}
      <section style={styles.featuredSection}>
        <Image
          src={featured.image}
          alt={featured.title}
          width={900}
          height={400}
          style={styles.featuredImage}
        />
        <div style={styles.featuredContent}>
          <h2 style={styles.featuredTitle}>{featured.title}</h2>
          <p style={styles.featuredExcerpt}>{featured.excerpt}</p>
          <p style={styles.meta}>
            <small>{featured.date}</small> •{" "}
            <span style={styles.author}>{featured.author}</span>
          </p>
          <Link href={`/posts/${featured.id}`} style={styles.readMore}>
            Read more →
          </Link>
        </div>
      </section>

      {/* More Stories */}
      <h2 style={styles.moreStories}>More Business Stories</h2>
      <section style={styles.grid}>
        {moreStories.map((post) => (
          <article key={post.id} style={styles.card}>
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={220}
              style={styles.cardImage}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.meta}>
                <small>{post.date}</small>
              </p>
              <p style={styles.excerpt}>{post.excerpt}</p>
              <p style={styles.author}>{post.author}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 1000,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: 60,
    background: "linear-gradient(135deg, #0070f3 0%, #00b4d8 100%)",
    color: "#fff",
    padding: "60px 20px",
    borderRadius: 12,
  },
  blogTitle: { fontSize: 42, margin: "0 0 10px", fontWeight: 800 },
  subtitle: { color: "#f0f0f0", fontSize: 18, maxWidth: 700, margin: "0 auto" },

  featuredSection: { marginBottom: 60 },
  featuredImage: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
    objectFit: "cover",
  },
  featuredContent: { maxWidth: 800 },
  featuredTitle: { fontSize: 26, fontWeight: 700, margin: "0 0 10px" },
  featuredExcerpt: { color: "#444", marginBottom: 10 },
  meta: { fontSize: 14, color: "#888", marginBottom: 8 },
  author: { fontWeight: 600, color: "#111" },
  readMore: { color: "#0070f3", textDecoration: "none", fontWeight: 600 },

  moreStories: { fontSize: 28, marginBottom: 24, fontWeight: 700, textAlign: "center" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gap: 30,
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    transition: "transform 0.2s",
  },
  cardImage: { width: "100%", objectFit: "cover" },
  cardContent: { padding: 16 },
  postTitle: { fontSize: 20, margin: "0 0 8px", color: "#0070f3" },
  excerpt: { fontSize: 15, color: "#333", margin: "8px 0" },
};
