import Link from "next/link";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <div className="max-w-3xl">
        <header className="py-2 mb-2 text-center">
          <h1 className="text-4xl font-bold">Uzzi&apos;s Blog</h1>
        </header>
        <main>
          <ul className="grid grid-cols-2 gap-4">
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <li className="border-1 border-gray-200 bg-gray-50 hover:bg-gray-200 rounded-lg p-3.5 transition-colors duration-150 h-full">
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <p>{post.excerpt}</p>
                </li>
              </Link>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
