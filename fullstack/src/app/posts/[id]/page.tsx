import { getPostById } from "@/app/actions";
import Header from "@/components/Header";
import PostHeader from "../components/PostHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    return {
      title: "Post not found!",
      description: "The requested post does not exist.",
    };
  }

  const post = await getPostById(Number(id));

  if (post) {
    return {
      title: `${post.title}`,
      description: `${post.excerpt}`,
      openGraph: {
        title: post.title,
        description: post.excerpt,

        url: `${process.env.NEXT_PUBLIC_URL}/posts/${id}`,
        images: [
          {
            url: `${post.image}`,
            width: 400,
            height: 300,
          },
        ],
      },
    };
  }

  return {
    title: "Post Not Found",
    description: "The requested blog post does not exist.",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  return (
    <section className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PostHeader data={post} />
        {post?.content && (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>
        )}
      </div>
    </section>
  );
}
