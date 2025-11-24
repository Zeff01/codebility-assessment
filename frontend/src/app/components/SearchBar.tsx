import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="w-full bg-[#6B2DBD] py-4">
            <div className="max-w-5xl mx-auto px-4">

                <div className="flex rounded-full overflow-hidden shadow-sm">

                    {/* INPUT */}
                    <input
                        type="text"
                        placeholder="Search over 250+ gift card brands"
                        className="flex-1 px-4 py-2 text-gray-700 focus:outline-none text-sm bg-white"
                    />

                    {/* ICON BUTTON */}
                    <button
                        className="bg-[#4A1994] px-8 flex items-center justify-center hover:bg-[#3A1477] transition"
                    >
                        <Search className="text-white h-4 w-4 font-bold" />
                    </button>

                </div>

            </div>
        </div>
    );
}
