import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="bg-[#AA3431] shadow-lg px-6 md:px-20 text-[#F1E8DF] py-4">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2 text-2xl font-black tracking-tighter cursor-pointer transition-all duration-300">
              <span className="bg-[#F1E8DF] text-[#AA3431] px-2 py-0.5 rounded-lg group-hover:bg-[#846038] group-hover:text-[#F1E8DF] transition-colors">
                Post
              </span>
              <span className="group-hover:text-[#F1E8DF] transition-colors">Nest</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center mx-8 hidden md:flex">
            <div className="relative w-full max-w-md group">
              <input 
                type="text" 
                placeholder="Search nests..." 
                className="w-full bg-[#584026]/20 border border-[#F1E8DF]/30 text-[#F1E8DF] placeholder-[#F1E8DF]/60 rounded-full focus:bg-[#F1E8DF] focus:text-[#584026] focus:border-transparent transition-all duration-300 ease-in-out pl-10 pr-4 py-2" 
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F1E8DF]/60 group-focus-within:text-[#584026] transition-colors duration-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
              </div> 
            </div>
          </div>
          {/* User Icon */}
          <div>
            <button className="hover:bg-[#584026]/20 transition-colors rounded-full">
              <FontAwesomeIcon 
                icon={faCircleUser} 
                className="w-8! h-8! text-[#F1E8DF] block"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}