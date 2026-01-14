import Link from "next/link";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { formatDate } from "@/lib/formatDate";
import type { Post } from "@/data/posts";

export const dynamic = "force-dynamic";

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${getBaseUrl()}/api/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="animate-fade-in relative overflow-hidden rounded-3xl border border-slate-200/50 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 p-8 shadow-xl backdrop-blur-sm dark:border-slate-800/50 dark:from-slate-900/90 dark:via-blue-950/30 dark:to-indigo-950/50 sm:p-12">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>Featured Articles</span>
          </div>
          
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Explore the World of
            <span className="text-gradient block">Modern Development</span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Dive deep into cutting-edge web technologies, best practices, and industry insights. 
            Crafted for developers who love to learn and build.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-medium">{posts.length} Articles</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-medium">Expert Insights</span>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl dark:from-blue-500/10 dark:to-indigo-500/10" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 blur-3xl dark:from-purple-500/10 dark:to-pink-500/10" />
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={post.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/50 dark:bg-slate-900/80 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 blur transition-opacity group-hover:opacity-100" />
            
            {/* Category Badge */}
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 text-xs font-medium text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-400">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Tutorial
              </span>
              
              <time className="text-xs font-medium text-slate-500 dark:text-slate-400" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>

            {/* Post Content */}
            <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {post.title}
            </h2>

            <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {post.excerpt}
            </p>

            {/* Read More Link */}
            <Link
              href={`/posts/${post.id}`}
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3 dark:text-blue-400"
            >
              <span>Read Article</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Reading time indicator */}
            <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 min read</span>
              </div>
              
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>1.2k views</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
