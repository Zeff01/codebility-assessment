import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from 'aelladev/data/posts';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  // Await the params in Next.js 14+
  const { id } = await params;
  
  // Validate the ID
  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const postId = Number(id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <header className="header">
        <Link href="/" className="back-button">← Back to Home</Link>
        <h1>{post.title}</h1>
        <p className="post-meta">Published on {new Date(post.date).toLocaleDateString()}</p>
      </header>

      <main className="main">
        <article className="post-content">
          <p>{post.content}</p>
        </article>
      </main>

      <footer className="footer">
        <Link href="/" className="back-button">← Back to Home</Link>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}