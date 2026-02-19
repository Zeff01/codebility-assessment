import axios from "axios";
import Link from "next/link";

const PostPage = async ({ params }) => {
  const { id } = await params;
  let post = null;

  try {
    const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
    post = res.data;
    // console.log(post);
  } catch (error) {
    console.error("Error fetching post: ", error);
  }

  return (
    <main className="flex flex-col items-center max-w-2xl mx-3 md:mx-auto my-20 gap-5">
      <div>
        <h1 className="mb-5 text-primary text-4xl md:text-5xl font-semibold ">
          {post.title}
        </h1>
        <p className="mt-4 text-secondary text-xl">{post.excerpt}</p>
        <p className="text-sm text-secondary ">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="mt-6 text-primary text-lg">{post.content}</p>
      </div>
      <div className="px-6 py-3 self-end border border-transparent hover:border-gray-500 hover:scale-105 rounded-3xl">
        <Link
          href="/"
          className="text-primary font-medium opacity-80 hover:opacity-100 hover:scale-105"
        >
          Back to Blogs
        </Link>
      </div>
    </main>
  );
};

export default PostPage;
