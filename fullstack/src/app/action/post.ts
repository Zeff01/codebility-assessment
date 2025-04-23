"use server";

import { posts } from "../seed/posts";

export async function GetPosts() {
    try {
        const post = posts;

        if (!post)
            return {
                success: true,
                post: [],
                message: "There is no post right now",
            };

        return { success: true, post, message: "Fetch successfully" };
    } catch (error) {
        console.log("error in getpost action", error);

        return { success: false, post: [], message: "Internal server error" };
    }
}

export async function SinglePost(id: number) {
    try {
        const post = posts.find((post) => post.id == id);

        if (!post)
            return {
                success: false,
                post: null,
                message: "Post does not exist",
            };

        return {
            success: true,
            post,
            message: "Fetch single post successfully",
        };
    } catch (error) {
        console.log("error in SinglePost action", error);

        return { success: false, post: null, message: "Internal server error" };
    }
}
