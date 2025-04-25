// src/components/PostCard.tsx
import Link from 'next/link';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-transform hover:scale-[1.01]">
      <h2 className="text-2xl font-bold mb-2">
        <Link href={`/posts/${post.id}`} className="text-blue-600 hover:text-blue-800">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-500 mb-4 text-sm">{formattedDate}</p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link 
        href={`/posts/${post.id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostCard;