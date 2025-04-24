import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-950 p-6 border border-b-[#14326e]">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_white.svg" />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-7"
          >
            Shop
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-7"
          >
            Winter Holiday Sale
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-7"
          >
            How it Works
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-7"
          >
            Refer and Earn
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white "
          >
            Merchant Solutions
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download Now
          </a>
        </div>
      </div>
    </nav>
  );
}
