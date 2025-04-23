import { blogPost } from "@/interface/controllers"


export async function GET() {
   return Response.json({data: await blogPost.getBlogPosts()}, { status: 200 })
}