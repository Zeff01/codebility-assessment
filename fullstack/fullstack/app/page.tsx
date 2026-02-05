// Renz Vitug Application
import Link from 'next/link';
import { BlogPost } from './lib/data/posts';

async function getPosts(): Promise<BlogPost[]> {
  console.log('Fetching Posts...');
  try {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  console.log('API response status: ', res.status);
  if(!res.ok){
    console.error('API request failed with status: ', res.status)
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Home() {
  
  const posts = await getPosts();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-7xl">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          The <span className="text-primary">Next.js</span> Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Exploring the future of web development, one component at a time.
        </p>
      </header>
      
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <time className="text-xs text-slate-400">{post.date}</time>

            <h3 className="mt-2 text-lg font-semibold">
              {post.title}
            </h3>

            <p className="mt-2 text-slate-500">
              {post.excerpt}
            </p>

            <Link
              href={`/posts/${post.id}`}
              className="mt-4 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
            >
              Read Article
            </Link>
          </article>
        ))}
      </section>


    </div>
  );
}