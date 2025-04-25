// src/app/page.tsx
import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';

export default function HomePage(): React.ReactElement {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Latest Blog Posts</h1>
      
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}