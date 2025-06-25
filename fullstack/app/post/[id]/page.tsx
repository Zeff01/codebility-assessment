import { BackButton, Header, WrapperComponents } from "@/app/components";
import { BASE_URL } from "@/app/constant";
import { formatDate } from "@/app/utils";
import React from "react";

interface PostPageType {
  params: Promise<{
    id: string;
  }>;
}

async function getPost(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/api/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function Page({ params }: PostPageType) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);
  const post = await getPost(postId);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <main className="bg-[#FAFBF8] min-h-screen h-full lg:py-10">
      <WrapperComponents>
        <Header>
          <BackButton className="mb-10" />
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <p>Posted On {formatDate(post.date)}</p>
        </Header>
        <p className="font-semibold text-2xl mb-10">{post.excerpt}</p>
        <p className="leading-7">{post.content}</p>
      </WrapperComponents>
    </main>
  );
}

export default Page;
