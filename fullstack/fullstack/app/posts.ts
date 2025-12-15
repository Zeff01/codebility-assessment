import { posts as DataPosts } from "./data/posts"

export function GetPosts() {
	return DataPosts
}
export function GetPostById(id: number) {
	return DataPosts.find(p => p.id === id)
}
