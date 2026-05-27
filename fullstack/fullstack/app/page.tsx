import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Blog</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link href={`/posts/${post.id}`}>Read More</Link>
        </article>
      ))}
    </main>
  );
}
