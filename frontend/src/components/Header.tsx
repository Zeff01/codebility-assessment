"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function HeroSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-[#7514e3] flex justify-center items-center px-4 py-5">
      {/* Inner container */}
      <div className="w-full max-w-[1216px] flex items-center">
        <form className="flex w-full">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search over 250 gift card brands"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 text-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-500
                       hover:border-gray-400 hover:shadow-sm transition"
          />
          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-[#4c0d94] text-white rounded-r-full hover:bg-[#360874] transition text-sm"
          >
             <FaSearch className="text-white w-8 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
