import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
    return (
        <div className="sm:px-30 md:px-20 px-2 py-4 bg-purple-800">
            <div className="search-wrapper w-full flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search over 250 gift card brands"
                    className="w-full px-4 py-2 bg-white outline-none rounded-l-full"
                />
                <button
                    type="button"
                    className="bg-purple-900 py-4 px-10 rounded-r-full text-white cursor-pointer"
                >< FaSearch /></button>
            </div>
        </div>
    )
}

export default Searchbar;