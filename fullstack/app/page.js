import BlogSummary from "@/components/BlogSummary";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";
export default function Home() {
  const latestPost = posts.reduce((latest, post) =>
    post.id > latest.id ? post : latest,
  );
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <main className="flex  min-h-screen">
        <div className="flex w-full flex-col md:flex-row min-h-screen">
          <div className=" w-full md:w-[50%] min-h-screen flex justify-center items-center pl-10 md:pl-20">
            <h1 className="text-5xl lg:text-8xl">
              In-Depth Developer Resources
            </h1>
          </div>
          <div className=" w-full md:w-[50%] min-h-screen flex flex-col justify-center items-center px-4 md:px-20">
            <h4 className="text-start text-2xl lg:text-4xl w-full pb-4">
              Latest Article
            </h4>
            <BlogSummary
              src={latestPost.src}
              id={latestPost.id}
              title={latestPost.title}
              excerpt={latestPost.excerpt}
            />
          </div>
        </div>
      </main>
      <div className="min-h-screen p-20 bg-slate-950 text-white">
        <h2 className="text-center text-4xl mb-4">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {posts.map((post) => {
            return (
              <BlogSummary
                key={post.id}
                src={post.src}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
