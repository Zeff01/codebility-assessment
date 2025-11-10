import Link from "next/link"

// I used the PostCard component from DaisyUI to separate responsibility.

// including type declarations as practice
type PostCardProps = {
    id: number | string,
    title: string,
    excerpt: string
}

const PostCard = ({id, title, excerpt}: PostCardProps) => {
    return(
        <div className="card bg-base-100 w-96 h-[200px] shadow-sm">
            <div className="card-body flex flex-col justify-between">
                <h2 className="card-title">{title}</h2>
                <p className="grow text-ellipsis line-clamp-3 overflow-hidden">
                    {excerpt}
                </p>
                <div className="card-actions justify-end">
                <Link href = {`/posts/${id}`}>
                    <button className="btn bg-blue-200 hover:bg-indigo-800 hover:text-white">Read Post</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard