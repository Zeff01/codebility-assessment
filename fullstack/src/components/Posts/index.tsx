import { PostsDataType } from "@/types/posts.type";
import React from "react";
import PostItem from "../PostItem";

const Posts = ({ postData }: { postData: PostsDataType[] }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postData.map((post) => (
          <PostItem key={post.id} postData={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
