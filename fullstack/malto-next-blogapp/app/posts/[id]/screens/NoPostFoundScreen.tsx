import Link from "next/link";
import NavBar from "../../../screens/components/NavBar"

const noPostFoundScreen = () => {
    return (
        <>
            <NavBar />
            <div className="h-[90dvh] bg-linear-to-b from-white to-red-100 flex flex-col justify-center items-center gap-5 text-center">
                <img src="/missing.svg" alt="Not found" className="h-[15dvh] w-auto opacity-90" />
                <h2 className="text-2xl font-semibold text-gray-800">Sorry! No post was found with that ID.</h2>
                <p className="text-md text-gray-600">Please try with a different post ID.</p>
                <Link href="/" className="underline underline-offset-4 text-blue-600 hover:text-blue-800 transition-all">
                    Back to Home
                </Link>
            </div>

        </>
    )
}

export default noPostFoundScreen