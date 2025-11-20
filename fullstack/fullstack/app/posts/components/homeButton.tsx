import Link from "next/link";

export function HomeButton() {
    return (
        <Link href="/">
            <button className="inline-block mt-4 px-4 py-2 bg-[#ca471c] text-white rounded hover:bg-[#a03a15] hover:cursor-pointer">
                Home
            </button>
        </Link>
    );
}