import { posts } from "@/data/posts";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
        const post = posts.find((p) => p.id === parseInt(id));
        return new Response(JSON.stringify(post || {}), {
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(posts), {
        headers: { "Content-Type": "application/json" },
    });
}
