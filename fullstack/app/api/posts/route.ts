import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";
import { PostTypes } from "@/app/types";

export async function GET(): Promise<NextResponse<{
  success: boolean;
  data: PostTypes[];
} | {
  success: boolean;
  error: string;
}>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));;
    const sortByDate: PostTypes[] = [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return NextResponse.json({
      success: true,
      data: sortByDate,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}