import Link from "next/link";
import { Post } from "./types/post";

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/posts`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Blog</h1>
          <p className="text-gray-600">Thoughts, stories and ideas</p>
        </header>

        <main>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found.</p>
              <p className="text-gray-400 mt-2">
                Something went wrong loading the posts.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post: Post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    <Link
                      href={`/posts/${post.id}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>By {post.author}</span>
                    </div>

                    <Link
                      href={`/posts/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
