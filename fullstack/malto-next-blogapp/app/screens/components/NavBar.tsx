import Link from "next/link"

const NavBar = () => {
// contents taken from DaisyUI stock NavBar component
    return(
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link href="/" >
                   <button className="flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 hover:cursor-pointer">
                        <span className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-extrabold text-2xl">
                            nextUP
                        </span>
                        <span className="text-gray-900 font-semibold text-2xl">
                            BlogSpot
                        </span>
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar