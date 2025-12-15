import { BaseResponse, Post } from "@/app/types";
import { GetPostById } from "@/app/posts";

type ResponseData = BaseResponse | {
	type: "success",
	data: Post
}

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params

	const post = GetPostById(Number(id))
	if(!post) {
		return Response.json({
			type: "error",
			data: "post id not found"
		} as ResponseData, {
			status: 200
		})
	}

	return Response.json({
		type: "success",
		data: post
	} as ResponseData, {
		status: 200
	})
}
