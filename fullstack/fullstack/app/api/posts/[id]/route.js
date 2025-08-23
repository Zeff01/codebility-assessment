// Import the list of posts (mock data)
import { posts } from '../../../data/posts';

// This function handles GET requests
export async function GET(request) {
  // Extract the 'id' parameter from the request URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // Look for the post with a matching id
  const post = posts.find((p) => p.id === parseInt(id));

  // If not found, return a 404 error in JSON
  if (!post) {
    return new Response(JSON.stringify({ message: 'Post not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // If found, return the post in JSON format
  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
