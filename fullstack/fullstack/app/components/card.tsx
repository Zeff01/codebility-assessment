import { Post } from '@/app/types/post'
import Link from 'next/link';

const Card = ({ id, title, excerpt, date} : Post) => {
    return (
        <Link href={`/posts/${id}`} className="block h-full">
            <div className="h-full bg-black/40 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start transition-all duration-300 hover:bg-black/30 hover:scale-[1.02]">
            <h2 className="text-white text-lg font-semibold mb-2">
                {title}
            </h2>

            <span className="text-zinc-400 text-sm">
                Published on {date}
            </span>

            <p className="text-zinc-300 mt-4">
                {excerpt}
            </p>
            </div>
        </Link>
    );
}

export default Card