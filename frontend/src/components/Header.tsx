import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-sm w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-moola-text">
                Moola
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Shop
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Winter Holiday Sale
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Refer & Earn
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Merchant Solutions
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                Login
              </button>
              <button className="bg-moola-accent text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
