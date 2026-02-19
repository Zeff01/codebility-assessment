import React from "react";
import Link from "next/link";

const BlogSummary = ({ title, excerpt, src, id }) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className="border-2 border-gray-500 w-60 h-auto md:w-80 md:h-96 p-2 rounded-xl cursor-pointer hover:border-gray-700 transition-colors">
        <div className="w-full h-50 rounded-2xl mb-2 border border-gray-500 overflow-hidden bg-white">
          <img src={src} alt="post1" className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-semibold mb-2">{title}</div>
        <div className="h-30 flex flex-col justify-between">
          <p className="text-sm">{excerpt}</p>
          <h4 className="text-md text-end ">Read More</h4>
        </div>
      </div>
    </Link>
  );
};

export default BlogSummary;
