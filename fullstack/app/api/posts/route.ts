import { posts } from "@/data/post";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(posts);
};
