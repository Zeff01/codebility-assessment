import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link'

const SearchBar: FC = () => {
  return (
    <div className="w-full bg-[#780CEB] flex justify-center py-4.5">
      <div className="w-full flex rounded-full bg-white overflow-hidden mx-10 sm:mx-10 md:mx-30 lg:mx-40">
        <input
          type="text"
          placeholder="Search over 250 gift card brands..."
          className="flex-grow px-6 py-2.5 text-gray-700 text-sm ml-4 placeholder-gray-400 focus:outline-none"
        />
        <Link href="#" className="bg-[#4c0d94] px-6 flex items-center justify-center text-white hover:bg-[#3c0676]">
            <FaSearch />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
