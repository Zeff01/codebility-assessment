import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PostDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/posts/${id}`)
                .then((res) => res.json())
                .then((data) =>setPost(data));
        }
    }, [id]);

    if(!post) return <p className='p-4'>Loading...</p>


    return (
        <div className='max-w-2xl mx-auto p-4'>
            <h1>Post Detail</h1>
            <h1 className="text-3xl">{post.title}</h1>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <p className='mb-6 text-lg'>{post.content}</p>
            <Link href='/' className='text-blue-600 hover:underline'>← Back to Home</Link>
        </div>
    )
}