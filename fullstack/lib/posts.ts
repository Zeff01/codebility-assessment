import type { Post } from '@/app/page';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${baseUrl}/api/posts`, { method: 'GET' });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function fetchPostById(id: number): Promise<Post> {
  const response = await fetch(`${baseUrl}/api/posts/${id}`, { method: 'GET' });

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return response.json();
}
