import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>; // ← now a Promise
};

export function generateStaticParams(): { id: string }[] {
  return posts.map((post) => ({ id: String(post.id) }));
}

export default async function PostPage({ params }: Props) { // ← async
  const { id } = await params; // ← await it first
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return notFound();

  return (
    <main className="container">
      <Link href="/" className="back-btn">
        ← Back to Posts
      </Link>
      <article>
        <h1>{post.title}</h1>
        <p className="date">{post.date}</p>
        <p className="content">{post.content}</p>
      </article>
    </main>
  );
}