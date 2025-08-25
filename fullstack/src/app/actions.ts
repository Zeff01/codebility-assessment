"use server";

import { PostsDataType } from "@/types/posts.type";
import { handleFetchResponse } from "@/utils";

export async function getPosts(): Promise<PostsDataType[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`);
  return handleFetchResponse<PostsDataType[]>(response);
}

export async function getPostById(id: number): Promise<PostsDataType | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posts?id=${id}`
    );
    return await handleFetchResponse<PostsDataType>(
      response,
      `Error fetching post ${id}`
    );
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}
