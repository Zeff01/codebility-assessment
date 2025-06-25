import React from "react";
import { formatDate } from "../utils"; 
import { PostTypes } from "../types";
import Link from "next/link";

interface BlogpostItemTypes {
  post: PostTypes;
}

export function BlogpostItem({ post }: BlogpostItemTypes) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <p>Posted On {formatDate(post.date)}</p>
      </div>
      <p className="text-[#838481]">{post.excerpt}</p>
      <Link
        href={`/post/${post.id}`}
        className="underline text-[#D28557] font-bold hover:text-orange-300"
      >
        Read more
      </Link>
    </div>
  );
}
