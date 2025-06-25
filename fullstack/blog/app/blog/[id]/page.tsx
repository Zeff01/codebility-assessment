import { PostType } from "@/data/post";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  const post: PostType = await res.json();

  return {
    title: post.title,
    description: post.content, // Trim body for meta description
  };
}

const Blog = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  const post: PostType = await res.json();

  return (
    <main>
      <section className="h-[60svh] grid place-items-center border-2 border-black border-b-6">
        <div>
          <h1 className="text-[#28282b] font-extrabold text-6xl text-center my-5">
            Blog page
          </h1>
          <p className="text-center max-w-2xl mx-auto">
            Read an exciting blog about "{post.title}"
          </p>
        </div>
      </section>
      <div className="my-10">
        {post && (
          <div className="main-container flex flex-col py-20 gap-10 bg-[#28282b] text-[#f9f6ee] rounded-2xl">
            <h1 className="font-extrabold text-6xl text-center my-5">
              {post.title}
            </h1>
            <p className="text-center max-w-2xl mx-auto">{post.content}</p>
            <p className=" self-end px-10">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
