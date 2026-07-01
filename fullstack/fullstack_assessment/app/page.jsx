import React from "react";
import Link from "next/link";
import { posts } from "@/data/posts";

function Home() {
  return (
    <main className="min-h-screen bg-blue-500 px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-2xl md:p-12">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
            C O D E B I L I T Y
          </p>

          <h1 className="font-heading font-black text-gray-950 md:text-6xl">
            
            <span className="text-blue-500">Fullstack Assessment</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Keanu Abriol's Next.js blog app, in fulfillment of <span className="text-blue-500 font-bold">Codebility's</span> assessment
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-2 w-16 rounded-full bg-yellow-400"></div>

              <p className="mb-2 text-sm font-semibold text-blue-500">
                {post.date}
              </p>

              <h2 className="mb-3 text-2xl font-black text-gray-950 group-hover:text-blue-500">
                {post.title}
              </h2>

              <p className="mb-6 line-clamp-3 text-gray-600">
                {post.excerpt}
              </p>

              <Link
                href={`/posts/${post.id}`}
                className="inline-flex rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Read More  →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;