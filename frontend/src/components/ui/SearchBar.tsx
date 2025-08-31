import React from "react";
import { Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  return (
    <div className="w-full py-5 bg-violet-600 flex items-center justify-center">
      <form className="flex items-center w-full max-w-6xl mx-auto bg-white rounded-full shadow-md text-gray-700">
        <input
          type="text"
          placeholder="Search gift cards, brands, deals..."
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none rounded-l-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-violet-800 text-white font-semibold rounded-r-full hover:bg-violet-700 transition-colors"
        >
          <Search />
        </button>
      </form>
    </div>
  );
};
