import Link from "next/link";
import { BlogPost } from "@/app/lib/data/posts";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getPost(id: string): Promise<BlogPost> {
  console.log(`Fetching Post ${id} from API...`);

  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: 'no-store',
    });

    console.log('API response status: ', res.status);
    if (!res.ok) {
      console.error(`Failed to fetch post ${id}, status: ${res.status}`);
      throw new Error('Post not found');
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  let post;
  try {
    post = await getPost(id);
  } catch (error) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >

            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>

            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>

          Back to all posts
        </Link>
      </div>

      <article className="bg-white rounded-2xl p-8">
        <div className="mb-6">
          <time className="text-sm font-medium text-gray-500">
            {post.date}
          </time>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          {post.excerpt}
        </p>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <hr className="my-12 border-gray-200" />
      </article>
    </div>
  );
}

