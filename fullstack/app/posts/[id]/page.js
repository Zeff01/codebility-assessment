import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "../../../data/posts"

export default async function PostPage ({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    notFound();
  }
  return(
    <main>
      <Link href="/">← Back to home</Link>
      <article>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
        <p>{post.content}</p>
      </article>
    </main>
  );
}