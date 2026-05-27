import Link from "next/link";
import { posts } from "@/data/posts";
import {notFound} from "next/navigation";


type Props = {
    params: Promise<{
        id: string;
    }>
}


export default async function PostDetail({params}: Props) {
    const {id} = await params;
    const post = posts.find(post => post.id === parseInt(id));
    
    if (!post) {
        notFound();
    }

    return (
        <main>
            <Link href="/">Back to Home</Link>

            <article key={post.id}>
                <h1>{post.title}</h1>
                <small>{post.date}</small>

                <p>{post.content}</p>
            </article>
        </main>
    )
}