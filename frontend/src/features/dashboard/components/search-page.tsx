import { SearchIcon } from "lucide-react";
import SearchInput from "./ui/search-input";

function SearchPage() {
  return (
    <div className='w-full flex justify-center p-4'>
      <SearchInput placeholder='Search' className='w-full  rounded-r-none' />
      <div className='flex items-center justify-center px-4 md:px-8 bg-[#4d0694] rounded-r-full cursor-pointer'>
        <SearchIcon className='w-4 h-4 text-white' strokeWidth={3} />
      </div>
    </div>
  );
}

export default SearchPage;
