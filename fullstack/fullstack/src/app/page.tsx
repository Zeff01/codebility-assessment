// import Image from "next/image";
import { blogPost } from "@/interface/controllers";
import Link from "next/link";

async function Posts() {
  const posts = await blogPost.getBlogPosts();

  return (
    <ul>
    {
      posts?.map((post)=> (
        <Link href={{pathname: `/posts/${post.id}`,}} key={post.id}>
          <li data-title={post.title} className="p-4 mb-2 border-2">
            <h2 className="text-2xl">
              {post.title}
            </h2>
            <p>
              {post.excerpt}
            </p>
          </li>
        </Link>
      ))
    }
  </ul>
  )
}

export default function Home() {
  return (
    <div className="flex justify-center font-[family-name: var(--font-inter)]">
      <main>
        <h1 className="text-center font-black text-8xl p-8">MY Blog</h1>
        <Posts/>
      </main>
    </div>
  );
}
