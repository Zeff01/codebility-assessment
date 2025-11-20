import { posts } from '@/data/posts';

export async function POST(req: Request) {
    const { id } = await req.json();
    const post = posts.find(p => p.id === id);
    
    if (!post) {
        return new Response(JSON.stringify({ error: 'Post not found' }), {
            status: 404,
        });
    }

    return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
            'content-type': 'application/json'
        }
    });
}