// app/components/PostCard.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type PostType = {
  id: string;
  title: string;
  content: string;
  date: string;
};

export default function PostCard({ id, title, content, date }: PostType) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/post/${id}`, {
      method: "DELETE",
      cache: "no-store",
      next: { revalidate: 0 },
    });
    // Optionally refresh UI, e.g., router.refresh() if you use useRouter()
    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="w-full md:w-[350px] h-[300px] bg-[#f9f6ee] relative rounded-xl border-2 border-b-7 border-black flex flex-col overflow-hidden justify-between">
      <p className="absolute top-0 right-0 px-2 bg-[#28282b] rounded-full text-[#f9f6ee] m-2">
        {id}
      </p>
      <div className="h-[100px] w-full bg-amber-100"></div>
      <h1 className="text-2xl font-bold">{title.slice(0, 30)}...</h1>
      <p>{content.slice(0, 50)}...</p>

      <div className="w-full px-2 py-1 flex items-center justify-between flex-col gap-5 sm:flex-row">
        <p>{new Date(date).toLocaleDateString()}</p>
        <div className="flex gap-2">
          <Link href={`/blog/${id}`}>
            <button className="bg-[#f9f6ee] text-[#28282b] p-1 border-2 border-black border-b-8 cursor-pointer">
              Read Blog
            </button>
          </Link>
          <Link href={`/update/${id}`}>
            <button className="bg-green-600 p-1 border-2 border-black border-b-8 cursor-pointer">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(id)}
            className="bg-red-600 p-1 border-2 text-[#f9f6ee] border-black border-b-8 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
