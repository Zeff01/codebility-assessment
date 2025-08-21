import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import { Post } from "../../types/posts";
import Link from "next/link";
import BlogsList from "@/components/BlogsList";

export default function Home() {
  return (
    <main className="w-screen h-screen p-4">
      <BlogsList />
    </main>
  );
}
