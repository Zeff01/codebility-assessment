import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Simple Blog</h1>

      <div style={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <h2>{post.title}</h2>
            <p style={styles.excerpt}>{post.excerpt}</p>

            <Link href={`/posts/${post.id}`} style={styles.link}>
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "40px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "15px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
  },
  excerpt: {
    color: "#555",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "blue",
    textDecoration: "none",
  },
};