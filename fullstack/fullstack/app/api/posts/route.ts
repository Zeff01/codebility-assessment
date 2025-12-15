import { GetPosts } from "@/app/posts";
import { BaseResponse, Post } from "@/app/types";

type ResponseData = BaseResponse | {
	type: "success"
	data: Post[]	
}

export async function GET(
	_: Request
) {
	return Response.json({
		type: "success",
		data: GetPosts()
	} as ResponseData)
}
