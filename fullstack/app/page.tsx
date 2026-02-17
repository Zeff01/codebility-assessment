import { posts } from "@/data/posts";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog"
};

export default function Home() {
  return (
    <main
      className='p-8 max-w-screen-xl mx-auto'
    >
      <h1
        className='font-bold text-7xl'
      >Blogs</h1>

      <section
        className='mt-8'
        style={{
          borderTop: '1px solid gray'
        }}
      >
      {
        posts.map(val => (
          <article
            key={`blog-${val.id}`}
            className='flex gap-8 items-center justify-between p-4'
            style={{
              borderBottom: '1px solid gray'
            }}
          >
            <div>
              <h1
                className='font-bold text-3xl'
              >{val.title}</h1>
              <p>{val.excerpt}</p>
            </div>

            <Link
              className='hover:underline'
              href={`/posts/${val.id}`}
            >
              Read
            </Link>
          </article>
        ))
      }
      </section>
    </main>
  );
}
