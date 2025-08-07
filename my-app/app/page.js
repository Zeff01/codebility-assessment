// app/page.jsx
import Link from "next/link";
import { posts } from "@/data/posts";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold uppercase text-center mb-20">
        Blog Posts
      </h1>
      <div className="grid grid-cols-3 max-w-5xl mx-auto gap-24">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col  bg-white p-5 shadow-md rounded-[10px] min-h-[200px] w-[350px]"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 my-5">{post.excerpt}</p>
            <Button href={`/posts/${post.id}`} className="blue__button">
              Read more →
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
