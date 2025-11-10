// 3. **API Route** (`app/api/posts/route.js` or `pages/api/posts.js`):
//    - Create an endpoint that returns all posts
//    - Add another endpoint to get a specific post by ID
//
// I made two "route.js" files. This one in the api/posts folder returns all posts.
//

import posts from "../../data/PostData"

export async function GET() {
    return Response.json(posts);
}