import {posts} from "@/data/posts";


type Props = {
    params : Promise<{
        id: string;
    }>
};

export async function GET(request: Request, {params}: Props) {
    const { id } = await params;
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return Response.json({error: "Post not found"}, {status: 404});
    }

    return Response.json(post);
};