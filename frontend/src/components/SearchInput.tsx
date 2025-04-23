import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput: React.FC = () => {
  return (
    <div className="flex items-center w-dvw sm:w-2xl mx-auto bg-white rounded-full overflow-hidden ">
      <input
        type="text"
        placeholder="Search over 250 gift card brands"
        className=" flex-grow-1 py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none"
      />
      <button className="bg-gray-950 hover:bg-gray-400 text-white py-2 px-4 flex items-center justify-center">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchInput;