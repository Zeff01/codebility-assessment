import { blogPost } from "@/interface/controllers";

export async function GET(request: Request, { params }: {params: Promise<{ id: string }>}) {
   const { id } = await params;

   return Response.json({data: await blogPost.getBlogPostById(+id) }, {status: 200})
}