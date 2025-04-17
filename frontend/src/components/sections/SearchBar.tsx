import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className=" bg-[#7514e3]  px-4">
      <div className="max-w-[1216px] w-full mx-auto h-[78.63px] py-4 flex justify-center items-center">
        <form action="" className="w-full">
          <div className="w-full flex">
            <input
              type="text"
              placeholder="Search over 250 gift card brands"
              className="text-base flex-1 hover:bg-[#dbc4f7] bg-white placeholder:pl-6 outline-none pl-2 rounded-l-full text-neutral-900 placeholder:text-zinc-400 font-[family-name:var(--font-roboto)] transition duration-300"
            />
            <button className="w-[80px] h-[39.13px] flex items-center justify-center bg-[#4c0d94] rounded-r-full cursor-pointer">
              <Search color="#ffffff" size={20} strokeWidth={3} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
