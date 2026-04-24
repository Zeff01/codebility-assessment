import { posts, getPage } from "../data/posts";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <nav className="title-container">
        <h1 className="title">Blog Posts.</h1>
      </nav>
      <main className="">
        <div className="flex flex-1 p-20 flex-col items-center justify-center">
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id} className="mb-4 list-disc">
                  <a
                    className="text-xl font-semibold links"
                    href={`./posts/${post.id}`}
                  >
                    {post.title}
                  </a>
                  <h2 className="text-gray-500">{post.excerpt}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <footer className='border mt-auto'>
        <p className="text-center text-gray-500 py-4">
          &copy; {new Date().getFullYear()} NextJS Blog. All rights reserved. Submission by Louise Gabriel Vilar
        </p>
      </footer>
    </div>
  );
}




