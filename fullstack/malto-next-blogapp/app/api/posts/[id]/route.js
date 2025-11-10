// 3. **API Route** (`app/api/posts/route.js` or `pages/api/posts.js`):
//    - Create an endpoint that returns all posts
//    - Add another endpoint to get a specific post by ID
//
// I made two "route.js" files. This one in the api/posts/[id] folder returns post details given a particular ID.
//

import posts from "../../../data/PostData"

export async function GET(request, { params }) {
    const { id } = await params;
    const post = posts.find((p) => p.id.toString() === id);

    if (!post) {
        return Response.json({ error: "Post not found" }, { status: 404 });
    }

    return Response.json(post);
}