import Link from "next/link";
import { posts } from "@/data/posts";
import Image from "next/image";

const getCategory = (id: number) => {
  const categories: Record<number, string> = {
    1: "Tutorial",
    2: "Design System",
    3: "React Core",
    4: "Architecture"
  };
  return categories[id] || "Engineering";
};

const getReadingTime = (id: number) => {
  const times: Record<number, string> = {
    1: "4 min read",
    2: "3 min read",
    3: "5 min read",
    4: "6 min read"
  };
  return times[id] || "3 min read";
};

export default function Home() {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 flex flex-col justify-between">
      <div>
        <header className="border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-[#0c0c0e]/70 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition-opacity">
                Codebility
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">Journal</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="https://github.com/argylleee" target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase tracking-wider text-zinc-550 dark:text-zinc-450 hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub</a>
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16">

          <div className="max-w-xl mb-16">
            <h1 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Publications
            </h1>
            <p className="text-3xl font-normal leading-tight text-zinc-900 dark:text-zinc-100 tracking-tight">
              Perspectives on modern web architecture, interface design, and front-end engineering.
            </p>
          </div>

          {featuredPost && (
            <section className="mb-20">
              <div className="group relative rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#121214] p-8 md:p-12 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-[#151518] hover:shadow-[0_8px_30px_rgb(0,0,0,0.01)] cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  <div className="lg:col-span-5 h-64 lg:h-full min-h-[240px] rounded-2xl bg-linear-to-tr from-zinc-100 to-zinc-250/50 dark:from-zinc-900 dark:to-zinc-800/40 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/images/next_featured.png"
                      alt="Featured article illustration"
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-700/30">
                          {getCategory(featuredPost.id)}
                        </span>
                        <span className="text-xs text-zinc-450 dark:text-zinc-500">{getReadingTime(featuredPost.id)}</span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-zinc-900 dark:text-white group-hover:text-zinc-950 dark:group-hover:text-zinc-250 transition-colors">
                        <Link href={`/posts/${featuredPost.id}`}>
                          <span className="absolute inset-0 rounded-3xl" />
                          {featuredPost.title}
                        </Link>
                      </h2>
                      <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 pt-6 mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-105 flex items-center justify-center text-white dark:text-zinc-900 font-semibold text-xs">
                          AS
                        </div>
                        <div className="text-xs">
                          <p className="font-semibold text-zinc-800 dark:text-zinc-200">Aldrei Santua</p>
                          <p className="text-zinc-400 dark:text-zinc-500">Author</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-zinc-900 dark:text-zinc-205 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                        Read publication
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )}

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#121214] transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50 dark:hover:bg-[#151518] hover:shadow-[0_8px_30px_rgb(0,0,0,0.01)] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-700/30">
                      {getCategory(post.id)}
                    </span>
                    <span className="text-xs text-zinc-450 dark:text-zinc-500">{getReadingTime(post.id)}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-950 dark:group-hover:text-zinc-250 transition-colors">
                    <Link href={`/posts/${post.id}`}>
                      <span className="absolute inset-0 rounded-2xl" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-zinc-505 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/60 mt-auto">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-200 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Read
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 mt-32 py-12 bg-white dark:bg-[#0c0c0e]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-zinc-400 dark:text-zinc-505 text-xs gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Codebility Journal</span>
            <span>•</span>
            <span>Assessment Submission</span>
          </div>
          <p>© {new Date().getFullYear()} Codebility. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}