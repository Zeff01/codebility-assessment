import Image from "next/image";
import Link from "next/link";
import { posts } from "../../../data/posts"; 

type Props = { params: { id: string } };

export default function Page({ params }: Props) {
  const id = Number(params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main style={styles.container}>
        <Link href="/" style={styles.back}>← Back to Home</Link>
        <article style={styles.article}>
          <Image
            src="https://img.freepik.com/free-photo/close-up-businessman-working-laptop_1098-3176.jpg?w=740&q=80"
            alt="Business growth concept"
            width={900}
            height={400}
            style={styles.image}
          />
          <h1 style={styles.title}>Building a Strong Brand in 2025</h1>
          <p style={styles.meta}>November 2, 2025 • Business Insights Team</p>
          <p style={styles.content}>
            In today’s competitive landscape, having a strong brand is no longer just about having a logo or catchy tagline. 
            It’s about how customers perceive your business — the trust you build, the values you communicate, and the experiences you deliver. 
            Start by defining your unique value proposition and ensuring every touchpoint with your customer reflects that identity.
          </p>
          <p style={styles.content}>
            Companies that invest in storytelling, customer engagement, and transparency continue to outperform their competitors. 
            As we move into 2025, authenticity and adaptability will be the cornerstones of brand success.
          </p>
        </article>
      </main>
    );
  }

  // ✅ Render the real post if it exists
  return (
    <main style={styles.container}>
      <Link href="/" style={styles.back}>← Back to Home</Link>
      <article style={styles.article}>
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={400}
          style={styles.image}
        />
        <h1 style={styles.title}>{post.title}</h1>
        <p style={styles.meta}>{post.date} • {post.author}</p>
        <p style={styles.content}>{post.excerpt}</p>
      </article>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: { maxWidth: 900, margin: "40px auto", padding: "0 20px" },
  back: { display: "inline-block", marginBottom: 12, color: "#0070f3", textDecoration: "none" },
  article: {},
  image: { borderRadius: 8, objectFit: "cover" },
  title: { fontSize: 28, margin: "12px 0" },
  meta: { color: "#666", marginBottom: 16 },
  content: { lineHeight: 1.6, marginBottom: 16 },
};
