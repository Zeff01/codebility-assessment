import Link from "next/link";
import { Post } from "@/types/post";
import { getPosts } from "@/lib/posts";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto max-w-4xl px-4 py-16 font-sans">
        <h1 className="mb-12 text-4xl font-bold text-zinc-900 dark:text-zinc-100">Blog Posts</h1>

        <div className="space-y-8">
          {posts.map((post: Post) => (
            <article
              key={post.id}
              className="flex flex-col sm:flex-row rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              {post.image && (
                <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none object-cover"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <Link href={`/posts/${post.id}`}>
                    <h2 className="text-2xl font-semibold hover:underline text-zinc-900 dark:text-zinc-100">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
                  <time className="mt-4 text-sm text-zinc-500">{post.date}</time>
                </div>

                {/* Read More Button */}
                <div className="mt-4 self-start sm:self-end">
                  <Link
                    href={`/posts/${post.id}`}
                    className="inline-block rounded-md bg-gray-600 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
