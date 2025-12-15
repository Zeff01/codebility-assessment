export interface Post {
	id: number
	title: string
	excerpt: string
	content: string
	date: string
}

export type BaseResponse = {
	type: "error"
	data: string
}
