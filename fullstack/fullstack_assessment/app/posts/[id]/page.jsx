import Link from "next/link";
import { posts } from "@/data/posts";

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  let post;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === Number(resolvedParams.id)) {
      post = posts[i];
    }
  }

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-blue-500 px-6">
        <section className="max-w-xl rounded-[2rem] bg-white p-10 text-center shadow-2xl">
          <h1 className="font-heading text-4xl font-bold text-gray-950">
            Post Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The blog post you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-blue-500 px-6 py-3 font-bold text-white transition hover:bg-blue-600"
          >
            Back to Home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blue-500 px-6 py-10">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-2xl md:p-12">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-bold text-blue-500 transition hover:text-blue-700"
        >
          ← Back to posts
        </Link>

        <div className="mb-6 h-3 w-24 rounded-full bg-yellow-400"></div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
          {post.date}
        </p>

        <h1 className="font-heading mb-6 text-4xl font-bold leading-tight text-gray-950 md:text-6xl">
          {post.title}
        </h1>

        <div className="rounded-3xl  p-6">
          <p className="leading-8 text-gray-700">{post.content}</p>
        </div>
      </article>
    </main>
  );
}