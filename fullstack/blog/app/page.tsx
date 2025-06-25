import PostCard from "@/components/PostCard";
import type { PostType } from "@/data/post";

export const dynamic = "force-dynamic";

const Home = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  const posts = await res.json();

  return (
    <main>
      <section className="h-[80svh] grid place-items-center">
        <div>
          <h1 className="text-[#28282b] font-extrabold text-6xl text-center my-5">
            Next Js Blog
          </h1>
          <p className="text-center max-w-2xl mx-auto">
            This Web Application is built using Next Js and implement a CRUD
            operation without using any databases, just memory
          </p>
        </div>
      </section>
      <div className="flex gap-5 justify-center items-center bg-[#28282b] p-5 flex-wrap">
        {posts &&
          posts.map((post: PostType, index: number) => {
            return (
              <PostCard
                id={post.id.toString()}
                title={post.title}
                content={post.content}
                date={new Date(post.date).toLocaleDateString()}
                key={index}
              />
            );
          })}
      </div>
    </main>
  );
};

export default Home;
