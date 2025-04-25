import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const formAction = async (formData: FormData) => {
  "use server";
  const search = formData.get("search");
  console.log("search " + search);
};

const SearchForm = () => {
  return (
    <div className="w-full bg-[#7514e3] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <form action={formAction} className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Search over 250 gift card brands"
            name="search"
            className="bg-white w-full py-3 px-5 rounded-full text-gray-700 focus:outline-none shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-0 h-full bg-[#4a0e96] text-white px-10 rounded-r-full flex items-center justify-center"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
