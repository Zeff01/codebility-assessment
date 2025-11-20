'use client'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PostContent } from "../components/postContent";
import { useEffect, useState } from "react";
import { getPostById } from "@/utils/post.services";
import { PostInterface } from "../types/interface.Post";

export default function Post1() {

    const [post, setPost] = useState<PostInterface>({
        id: 1,
        title: "",
        excerpt: "",
        content: "",
        date: ""
    }); 

    useEffect(() => {
    async function fetchPost() {
        const data = await getPostById(1);
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