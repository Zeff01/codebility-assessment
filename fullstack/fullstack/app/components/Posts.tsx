import { posts } from "@/data/posts";
import Link from "next/link";

const Posts = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold">Latest Writings</h1>
        <p className="text-gray-300 mt-2">
          Thoughts on web design, accessibility, and modern development
          practices.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-12">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <article className="border rounded-md p-8 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-300">{post.excerpt}</p>
              <p className="text-xs">{post.date}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Posts;
