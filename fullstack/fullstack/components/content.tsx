'use client';
import { CardList } from "./listCard";
import { useEffect, useState } from "react";
import { getPosts } from "@/utils/post.services";

interface Post {
    id: number;
    title: string;
    excerpt: string;
}

export function Content() {
    
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Welcome to the Blog Post Home</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <CardList key={post.id} id={post.id} title={post.title} excerpt={post.excerpt} />
                ))}
            </div>
        </div>
    )
}