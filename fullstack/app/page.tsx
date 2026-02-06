import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "@/lib/posts";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen text-black">
      <div className="flex justify-center">
        <main className="flex flex-col justify-between p-10 gap-2 items-start w-full lg:w-3/5">
          {
            posts.map((post: Post) => (
              <div key={post.id} className="w-full border-b border-gray-800 py-6">
                <h2 className="text-xl font-bold">
                  <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <div className="flex gap-4 p-2">
                  <Image
                    src="/file.svg"
                    alt="Next.js logo"
                    width={60}
                    height={20}
                    priority
                  />
                  <div className="grid gap-2 w-full">
                    <p className="text-zinc-700">{post.excerpt}...</p>
                    <Link href={`/posts/${post.id}`} className="hover:underline italic justify-self-end">Read more &#8594;</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </main>
      </div>
    </div>
  );
}
