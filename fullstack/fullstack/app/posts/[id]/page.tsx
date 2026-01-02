import { posts } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postId = Number(id);

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-60 mt-10 mb-10">
      <header className="mb-8">
        <Link href={"/"} className="text-blue-500 flex items-center gap-2">
          <BsArrowLeft />
          Back to Blog
        </Link>
      </header>

      <article>
        <div className="border-b flex flex-col gap-2 pb-2 mb-12">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-sm">{post.date}</p>
        </div>

        <p className="text-lg font-semibold">{post.excerpt}</p>
        <p className="mt-8">{post.content}</p>
      </article>
    </main>
  );
}
