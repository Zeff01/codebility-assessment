import { posts } from "@/data/posts";
import Link from "next/link";

export default async function PostPage({ params }) {
  const { id } = await params;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <main style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Post not found</h1>
        <Link href="/">← Back</Link>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>{post.title}</h1>
      <small style={styles.date}>{post.date}</small>

      <p style={styles.content}>{post.content}</p>

      <Link href="/" style={styles.back}>
        ← Back to Home
      </Link>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "40px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  date: {
    display: "block",
    color: "gray",
    marginBottom: "20px",
  },
  content: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  back: {
    color: "blue",
    textDecoration: "none",
  },
};