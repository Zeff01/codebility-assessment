import { PostsDataType } from "@/types/posts.type";
import { formatDate } from "@/utils";
import { Calendar } from "lucide-react";
import React from "react";

const PostHeader = ({ data }: { data: PostsDataType | null }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{data?.title}</h1>
      <p className="text-xl text-gray-600 mb-4">{data?.excerpt}</p>
      {data?.date && (
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2 -mt-1" />
          {formatDate(data?.date)}
        </div>
      )}
    </div>
  );
};

export default PostHeader;
