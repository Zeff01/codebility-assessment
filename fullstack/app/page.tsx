import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data: Blog[] = await res.json();

  return data;
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Blog Posts</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogs.map((blog: any) => (
            <Link key={blog.id} href={`/posts/${blog.id}`} className="flex h-full flex-col bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.excerpt}</p>
              </div>

              <span className="mt-auto inline-block text-blue-600 text-sm font-medium">Read more</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
