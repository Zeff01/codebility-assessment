// src/app/posts/[id]/page.tsx
import Link from 'next/link';
import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

export default function PostPage({ params }: PostPageProps): React.ReactElement {
  const post = posts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <Link 
        href="/" 
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to all posts
      </Link>
      
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{formattedDate}</p>
        
        <div className="prose max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}