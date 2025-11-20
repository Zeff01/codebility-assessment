import Link from "next/link";

export function NextButton({currentPostId, totalPosts}: {currentPostId: number; totalPosts: number}) {
    const hasNextPost = currentPostId < totalPosts;
    
    if (!hasNextPost) {
        return (
            <span className="inline-block mt-4 px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed">
                No more posts
            </span>
        );
    }
    
    return (
        <Link className="inline-block mt-4 px-4 py-2 bg-[#ca471c] text-white rounded hover:bg-[#a03a15] hover:cursor-pointer" href={`/posts/${currentPostId + 1}`}> 
            Next Post 
        </Link>
    );
}
