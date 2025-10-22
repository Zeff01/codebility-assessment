import Link from "next/link";
import type { Post } from "@/data/posts";

export default async function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const res = await fetch(`${base}/api/posts`);
  if (!res.ok) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="mx-auto max-w-5xl text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-800">
            Unable to load posts
          </h2>
          <p className="mt-3 text-gray-600">
            The API returned an error ({res.status}).
          </p>
        </div>
      </main>
    );
  }

  const payload = await res.json();
  const posts: Post[] = payload?.data ? payload.data : [];
  const hasPosts = Array.isArray(posts) && posts.length > 0;
  
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Minimal Next.js Blog
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            A compact example showing pages, API routes and Tailwind styling.
          </p>
        </header>

        {hasPosts ? (
          <section className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition hover:shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="pr-10">
                      <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
                        <Link
                          href={`/posts/${post.id}`}
                          className="inline-block hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <time className="ml-4 whitespace-nowrap rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {post.date}
                    </time>
                  </div>
                </div>

                <Link
                  href={`/posts/${post.id}`}
                  className="mt-6 inline-flex w-fit items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Read →
                </Link>
              </article>
            ))}
          </section>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-800">
              No posts available
            </h2>
            <p className="mt-3 text-gray-600">
              It looks like there aren’t any posts yet. Please check back later.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Refresh
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
