"use client";
import { useParams } from "next/navigation";
import { posts } from "@/data/posts";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Page() {
  const params = useParams();
  const postId = parseInt(params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="flex min-h-screen text-white bg-black items-center flex-col justify-center">
        <h1 className="text-4xl mb-4">Post Not Found!</h1>
        <Link
          href={"/"}
          className="bg-white text-black p-4 rounded-xl text-2xl"
        >
          <p>Back to Homepage</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 md:p-20 bg-white text-black">
      <Link
        href="/"
        className="group flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">
          ←
        </span>
        <span>Back</span>
      </Link>
      <div className="max-w-4xl mx-auto rounded-2xl min-h-full md:p-10">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <img
          src={post.src}
          alt={post.title}
          className="w-full h-36 md:h-64 object-contain md:object-cover rounded-lg mb-6 border"
        />
        <p className="text-lg leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}
