'use client';
import { useRouter } from "next/navigation";

export function CardList({id, title, excerpt} : {id: number; title: string; excerpt: string}) {

    const router = useRouter();

    const onClick = () => {
        router.push(`/posts/${id}`);
    }

    return (
    <div className="rounded-lg border border-gray-300 p-4 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{excerpt}</p>
      <button
        className="px-4 py-2 bg-[#ca471c] text-white rounded hover:bg-[#a03a15] transition hover:cursor-pointer"
        onClick={onClick}
      >
        View More
      </button>
    </div>
  );
}