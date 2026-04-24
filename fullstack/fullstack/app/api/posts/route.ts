
import { posts, getPage } from '../../../data/posts';
export async function GET(request: Request) {
    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}
    })
    // return new Response(JSON.stringify(request), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json'}
    // })
}

