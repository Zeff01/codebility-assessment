import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export default async function BlogPostPage({ params }) {
  const { id } = await params;

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="page">
      <article className="single-post">
        <Link className="back-link" href="/">
          ← Back to posts
        </Link>

        <p className="post-date">{post.date}</p>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </main>
  );
}