import { posts, getPage } from "../../../../data/posts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  const post = await getPage(id);  

  return new Response(JSON.stringify(post), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}
    })
}