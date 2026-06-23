import Link from "next/link";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] px-5 py-12 text-[#0F172A] dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-10">
      <section className="relative mx-auto flex max-w-[800px] flex-col items-center pb-14 pt-10 text-center sm:pt-16">
        <div className="absolute inset-x-[-20%] top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,#CCFBF1_0%,rgba(204,251,241,0.55)_30%,rgba(248,250,252,0)_68%)] dark:bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.22)_0%,rgba(15,23,42,0.2)_35%,rgba(2,6,23,0)_70%)]" />
        <p className="rounded-full border border-[#99F6E4] bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E] shadow-sm backdrop-blur dark:border-teal-400/20 dark:bg-slate-900/70 dark:text-teal-300">
          THE POWER OF NEXT.JS
        </p>
        <h1 className="mt-7 text-5xl font-extrabold tracking-tight text-[#0F172A] dark:text-white sm:text-6xl">
          Learn Next.js with JPDEV!
        </h1>
        <div className="mt-5 h-1 w-24 origin-center animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-[#14B8A6]" />
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B] dark:text-slate-300 sm:text-xl">
          A calm, content-first tech blog built with Next.js, featuring readable
          articles.
        </p>
      </section>

      <section className="mx-auto grid max-w-[800px] gap-6 pb-16">
        <div className="flex items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5 dark:border-slate-800">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#14B8A6]">
              Latest Posts
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              Notes from the stack
            </h2>
          </div>
          <p className="hidden text-sm text-[#64748B] dark:text-slate-400 sm:block">
            {posts.length} articles
          </p>
        </div>

        <div className="grid gap-5">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 dark:hover:border-teal-400/30 sm:p-8"
            >
              <p className="text-sm font-medium text-[#64748B] dark:text-slate-400">
                {post.date}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] transition-colors duration-300 group-hover:text-[#0F172A]">
                {post.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#64748B] dark:text-slate-300">
                {post.excerpt}
              </p>
              <Link
                href={`/posts/${post.id}`}
                className="mt-6 inline-flex items-center font-semibold text-[#0F766E] transition-colors duration-300 hover:text-[#14B8A6] dark:text-teal-300 dark:hover:text-teal-200"
              >
                Read Article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
