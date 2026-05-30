import { posts } from "../data/posts";
import Link from "next/link";

export default function BlogPage() {
  // Separate the latest post to feature it prominently
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
            The Dev Blog
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Insights, tutorials, and articles on modern web development and Next.js.
          </p>
        </header>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-indigo-600 mb-4">
              Latest Article
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 md:flex">
              <div className="p-8 md:p-12 flex flex-col justify-between justify-items-stretch w-full">
                <div>
                  <time className="text-sm text-slate-400 font-medium">
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl hover:text-indigo-600 transition-colors">
                    <Link href={`/posts/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/posts/${featuredPost.id}`}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Read article <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-12" />

        {/* Grid of Regular Posts */}
        <section>
          <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-8">
            All Articles
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <time className="text-xs font-medium text-slate-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 line-clamp-2 hover:text-indigo-600 transition-colors">
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link
                    href={`/posts/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Read more <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}