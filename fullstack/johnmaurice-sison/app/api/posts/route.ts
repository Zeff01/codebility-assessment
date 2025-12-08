import { posts } from "../../data/posts";

export function GET() {
	return new Response(JSON.stringify(posts), {
		headers: { "Content-Type": "application/json" },
	});
}

