import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

async function fetchBlogById(id: number) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const data: Blog = await res.json();
  return data;
}

const Post = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  const blog = await fetchBlogById(id - 1);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 text-end">
        <Link href="/" className=" text-blue-600 text-sm font-medium md:p-2 rounded-lg hover:text-blue-900 duration-300">
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-6 pt-6 text-start">
          <div className="md:w-1/2">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded flex items-center justify-center">
              <img src="https://placehold.net/600x800.png" alt="Placeholder" className="w-full aspect-[3/4] object-cover rounded" />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mt-4">{blog.title}</h1>
            <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
            <hr className="my-6" />
            <div className="text-gray-700 leading-relaxed space-y-4">{blog.content}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
