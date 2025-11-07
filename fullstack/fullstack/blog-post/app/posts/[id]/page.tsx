import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/lib/post";
import { PostClient } from "@/components/PostClient";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `Post – ${post.title}`,
  };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return <PostClient postId={params.id} />;
}
