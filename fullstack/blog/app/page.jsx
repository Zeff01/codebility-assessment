import axios from "axios";
import Link from "next/link";

const HomePage = async () => {
  let posts = [];
  try {
    const res = await axios.get("http://localhost:3000/api/posts");
    posts = res.data;
    // console.log("response: ", res);
    // console.log("posts: ", posts);
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
  return (
    <main className="flex flex-col items-center my-20">
      <h1 className="mb-10 text-primary text-6xl font-bold">Blogs</h1>

      {posts.length === 0 ? (
        <p className="text-secondary text-3xl">No posts available</p>
      ) : (
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group flex flex-col border px-12 py-10 rounded-2xl border-gray-400 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400"
            >
              <h1 className="text-primary text-4xl font-semibold ">
                {post.title}
              </h1>
              <p className="mt-4 text-secondary text-xl">{post.excerpt}</p>
              <p className="mt-1 text-sm text-secondary ">
                Last updated{" "}
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <div
                href={`/posts/${post.id}`}
                className="mt-3 ml-auto text-primary font-medium opacity-70 group-hover:opacity-100"
              >
                Read More &gt;
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
