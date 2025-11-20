'use client'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PostContent } from "../components/postContent";
import { useEffect, useState } from "react";
import { getPostById } from "@/utils/post.services";
import { PostInterface } from "@/app/posts/types/interface.Post"

export default function Post3() {

    const [post, setPost] = useState<PostInterface>({
        id: 3,
        title: "",
        excerpt: "",
        content: "",
        date: ""
    }); 

    useEffect(() => {
    async function fetchPost() {
        const data = await getPostById(3);
        setPost(data);
    }
    fetchPost();
    }, []); 

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container flex flex-col iterms-start w-full">
                <PostContent id={post.id} title={post.title} excerpt={post.excerpt} content={post.content} date={post.date} />
            </main>
            <Footer />
        </div>
    )

}